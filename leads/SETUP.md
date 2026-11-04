# Leads dashboard – setup (sekali saja, ±10 menit)

Form Contact menyimpan setiap enquiry ke Google Sheet, dan halaman **/dashboard** membaca serta mengubah status lead dari Sheet itu.

## 1. Buat Google Sheet
1. Buka https://sheets.new (login dengan akun Google studio).
2. Beri nama, misalnya **Angkasa Leads**. Tab "Leads" akan dibuat otomatis oleh script.

## 2. Pasang script
1. Di Sheet: menu **Extensions → Apps Script**.
2. Hapus isi file `Code.gs`, lalu tempel seluruh isi file `leads/apps-script.gs`. Klik **Save**.
3. Klik ikon roda gigi **Project Settings** (kiri) → bagian **Script properties** → **Add script property**:
   - Property: `DASHBOARD_KEY`
   - Value: password untuk dashboard (buat yang panjang, misalnya 20+ karakter). Simpan.

## 3. Deploy sebagai Web app
1. Kanan atas: **Deploy → New deployment**.
2. Klik ikon roda gigi di "Select type" → pilih **Web app**.
3. Isi:
   - Execute as: **Me**
   - Who has access: **Anyone**
4. Klik **Deploy**, lalu izinkan akses (Authorize access → pilih akun → Advanced → Go to … (unsafe) → Allow). Peringatan ini normal untuk script buatan sendiri.
5. Salin **Web app URL** (berakhiran `/exec`).

## 4. Hubungkan ke situs
Tempel URL itu di `leads/config.js`:

```js
window.LEADS_URL = 'https://script.google.com/macros/s/XXXX/exec';
```

(atau kirim URL-nya ke Claude untuk dipasangkan), lalu push.

## 5. Pakai dashboard
- Buka `https://angkasastudio.space/dashboard`, masukkan `DASHBOARD_KEY`.
- Status lead: New → Contacted → Call booked → Proposal sent → Won / Lost. Catatan tersimpan otomatis saat kotak notes ditinggalkan.
- Contoh tampilan tanpa data asli: `/dashboard?demo`.

## 6. Email notifikasi dari Apps Script (disarankan)
Supaya email tidak bergantung pada FormSubmit:
1. Di Apps Script, tempel ulang isi `leads/apps-script.gs` terbaru (Ctrl+A → paste → Save).
2. **Project Settings → Script Properties → Add**: `NOTIFY_EMAIL` = `hello@angkasastudio.space`.
3. **Deploy → Manage deployments → ikon pensil → Version: New version → Deploy**. Izinkan akses baru (kirim email) bila diminta. URL tetap sama.

Setelah itu setiap enquiry: kamu dapat email notifikasi, pengirim dapat balasan otomatis (dikirim dari akun Google pemilik Sheet, dengan reply-to ke `hello@angkasastudio.space`), dan FormSubmit tidak dipakai lagi. Batas Gmail gratis: 100 email/hari.

## 7. Notifikasi Telegram
1. Di Telegram, buka **@BotFather** → kirim `/newbot` → beri nama (misalnya *Angkasa Leads*) dan username yang berakhiran `bot`. Salin **token** yang diberikan. Token ini rahasia, jangan dibagikan.
2. Buka bot barumu (link dari BotFather) → tekan **Start**.
3. Di Apps Script: tempel ulang `leads/apps-script.gs` terbaru → Save.
4. **Project Settings → Script Properties → Add**: `TELEGRAM_TOKEN` = token dari BotFather.
5. Kembali ke editor, pilih fungsi **telegramSetup** di menu atas → **Run** → izinkan akses. Bot akan mengirim "✅ … connected" dan `TELEGRAM_CHAT_ID` tersimpan otomatis.
6. (Opsional) Run **telegramTest** untuk melihat contoh notifikasi lead.
7. **Deploy → Manage deployments → ikon pensil → Version: New version → Deploy.** Tanpa langkah ini situs masih memakai versi lama.

Ingin notifikasi masuk ke grup (misalnya bersama tim)? Tambahkan bot ke grup, kirim satu pesan di grup, lalu jalankan `telegramSetup` lagi.

## Catatan
- Form dianggap terkirim bila lead tersimpan di Sheet. FormSubmit hanya dipakai sebagai cadangan email bila `NOTIFY_EMAIL` belum diset, dengan batas waktu 15 detik.
- Kalau script diubah, deploy ulang lewat **Deploy → Manage deployments → Edit → Version: New version** supaya URL tetap sama.
- Data lead juga bisa dilihat langsung di Google Sheet-nya.
