/**
 * Angkasa Studio – leads storage (Google Apps Script)
 *
 * Paste this whole file into Extensions → Apps Script of your Google Sheet,
 * set the DASHBOARD_KEY script property, then Deploy → New deployment → Web app
 * (Execute as: Me, Who has access: Anyone). Full steps: leads/SETUP.md
 *
 * - POST (from the website form): appends a new lead. No key needed, append only.
 * - GET  (from /dashboard):       ?key=...&action=list            → all leads
 *                                 ?key=...&action=update&id=...&status=...&notes=...
 */

const SHEET_NAME = 'Leads';
const COLS = ['id', 'date', 'name', 'email', 'agency', 'website', 'whatsapp', 'plan', 'message', 'status', 'notes', 'updated'];
const STATUSES = ['New', 'Contacted', 'Call booked', 'Proposal sent', 'Won', 'Lost'];

function sheet_() {
  const ss = SpreadsheetApp.getActive();
  let s = ss.getSheetByName(SHEET_NAME);
  if (!s) {
    s = ss.insertSheet(SHEET_NAME);
    s.appendRow(COLS);
    s.setFrozenRows(1);
  }
  return s;
}

function json_(o) {
  return ContentService.createTextOutput(JSON.stringify(o)).setMimeType(ContentService.MimeType.JSON);
}

function key_() {
  return PropertiesService.getScriptProperties().getProperty('DASHBOARD_KEY') || '';
}

// Keep cells as plain text: trim length and stop values being read as formulas.
function clean_(v) {
  let t = String(v == null ? '' : v).trim().slice(0, 2000);
  if (/^[=+\-@]/.test(t)) t = "'" + t;
  return t;
}

/** New lead from the website form. */
function doPost(e) {
  let d = {};
  try { d = JSON.parse(e.postData.contents); } catch (err) { d = e.parameter || {}; }
  if (d._honey) return json_({ ok: true });            // spam trap filled in
  if (!d.email || !d.name) return json_({ ok: false, error: 'missing fields' });

  const lock = LockService.getScriptLock();
  lock.waitLock(10000);
  try {
    const now = new Date().toISOString();
    const id = Utilities.getUuid().slice(0, 8);
    sheet_().appendRow([
      id, now,
      clean_(d.name), clean_(d.email), clean_(d.agency), clean_(d.website),
      clean_(d.whatsapp), clean_(d.plan), clean_(d.message),
      'New', '', now
    ]);
    return json_({ ok: true, id: id, mailed: mail_(d) });
  } finally {
    lock.releaseLock();
  }
}

/**
 * Optional e-mails, sent from the Google account that owns this script.
 * Turn on by adding the script property NOTIFY_EMAIL (e.g. hello@angkasastudio.space).
 * Sends you a notification and the enquirer a short thank-you.
 * Returns true when the notification went out, so the website can skip its backup e-mail service.
 */
function mail_(d) {
  const to = PropertiesService.getScriptProperties().getProperty('NOTIFY_EMAIL');
  if (!to) return false;
  // simple flood guard: at most 30 e-mails per hour
  const cache = CacheService.getScriptCache();
  const n = Number(cache.get('mails') || 0);
  if (n >= 30) return false;
  cache.put('mails', String(n + 1), 3600);
  const s = function (v) { return String(v == null ? '' : v).trim().slice(0, 2000); };
  const email = s(d.email);
  const okEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  const wa = s(d.whatsapp);
  const waLink = wa ? '  →  https://wa.me/' + wa.replace(/[^0-9]/g, '').replace(/^0/, '62') : '';
  try {
    const msg = {
      to: to,
      subject: 'New enquiry from ' + (s(d.agency) || s(d.name)) + ' (angkasastudio.space)',
      name: 'Angkasa Studio website',
      body: [
        'Plan: ' + (s(d.plan) || '-'),
        'Name: ' + s(d.name),
        'Email: ' + email,
        'Agency: ' + (s(d.agency) || '-'),
        'Website: ' + (s(d.website) || '-'),
        'WhatsApp: ' + (wa ? wa + waLink : '-'),
        '',
        'Message:',
        s(d.message) || '-',
        '',
        'Manage this lead: https://website-angkasa-validated.vercel.app/dashboard'
      ].join('\n')
    };
    if (okEmail) msg.replyTo = email;
    MailApp.sendEmail(msg);
  } catch (err) {
    return false;
  }
  if (okEmail) {
    try {
      MailApp.sendEmail({
        to: email,
        replyTo: to,
        name: 'Angkasa Studio',
        subject: 'Thanks for reaching out to Angkasa Studio',
        body: 'Hi ' + s(d.name) + ',\n\nThanks for reaching out to Angkasa Studio. We have received your enquiry' +
          (s(d.agency) ? ' for ' + s(d.agency) : '') +
          ' and will reply within two working days with a team and a monthly plan that fits.\n\n' +
          'Need something sooner? Message us on WhatsApp: +62 877 8059 7311.\n\n' +
          'Angkasa Studio\nYour invincible design team\nhello@angkasastudio.space'
      });
    } catch (err) { /* the notification already went out */ }
  }
  return true;
}

/** Dashboard reads and updates. Always needs the key. */
function doGet(e) {
  const p = (e && e.parameter) || {};
  const k = key_();
  if (!k || p.key !== k) return json_({ ok: false, error: 'unauthorized' });

  const s = sheet_();
  const values = s.getDataRange().getValues();
  const head = values.shift();

  if (p.action === 'update') {
    const i = values.findIndex(function (r) { return String(r[0]) === String(p.id); });
    if (i < 0) return json_({ ok: false, error: 'not found' });
    const row = i + 2;
    if (p.status !== undefined) {
      if (STATUSES.indexOf(p.status) < 0) return json_({ ok: false, error: 'bad status' });
      s.getRange(row, COLS.indexOf('status') + 1).setValue(p.status);
    }
    if (p.notes !== undefined) s.getRange(row, COLS.indexOf('notes') + 1).setValue(clean_(p.notes));
    s.getRange(row, COLS.indexOf('updated') + 1).setValue(new Date().toISOString());
    return json_({ ok: true });
  }

  const leads = values.filter(function (r) { return r[0] !== ''; }).map(function (r) {
    const o = {};
    head.forEach(function (h, j) { o[h] = r[j] instanceof Date ? r[j].toISOString() : r[j]; });
    return o;
  });
  return json_({ ok: true, leads: leads, statuses: STATUSES });
}
