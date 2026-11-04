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
- Buka `https://website-angkasa-validated.vercel.app/dashboard`, masukkan `DASHBOARD_KEY`.
- Status lead: New → Contacted → Call booked → Proposal sent → Won / Lost. Catatan tersimpan otomatis saat kotak notes ditinggalkan.
- Contoh tampilan tanpa data asli: `/dashboard?demo`.

## Catatan
- Email dari FormSubmit tetap jalan seperti biasa; Sheet hanya tambahan.
- Kalau script diubah, deploy ulang lewat **Deploy → Manage deployments → Edit → Version: New version** supaya URL tetap sama.
- Data lead juga bisa dilihat langsung di Google Sheet-nya.
