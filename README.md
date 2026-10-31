# Angkasa Studio

Buka `index.html` langsung di browser, tidak perlu server.

## Isi folder

```
angkasa-studio/
├── index.html
├── assets/
│   ├── hero-home.jpg        hero halaman Home (lebar 16:9, disarankan 2576 x 1449)
│   ├── contact.jpg          foto halaman Contact
│   └── works-cta.jpg        background footer halaman Works
└── projects/
    ├── fold/  halcyon/  kin/  meridian/  sable/  aurel/  northwind/  luma/
        ├── project.js           teks project
        ├── cover.jpg            kartu project
        ├── hero.jpg             hero halaman project
        ├── gallery-1-wide.jpg   ... sampai gallery-8-wide.jpg
        └── quote-portrait.jpg   foto di samping kutipan
```

## Nama file dan ukuran (sama di setiap folder project)

| File | Tampil di | Bentuk | Ukuran disarankan |
|---|---|---|---|
| `cover.jpg` | kartu di Home, kartu di Works, "Next project" | persegi 1:1 | 1200 x 1200 |
| `hero.jpg` | bagian paling atas halaman project | lebar 16:9 | 2400 x 1350 |
| `gallery-1-wide.jpg` | galeri baris 1 | lebar 16:9 | 2000 x 1125 |
| `gallery-2-portrait.jpg` | galeri baris 2, kiri | potret 4:5 | 1200 x 1500 |
| `gallery-3-portrait.jpg` | galeri baris 2, kanan | potret 4:5 | 1200 x 1500 |
| `gallery-4-wide.jpg` | galeri baris 3 | lebar 16:9 | 2000 x 1125 |
| `gallery-5-portrait.jpg` | galeri baris 4, kiri | potret 4:5 | 1200 x 1500 |
| `gallery-6-portrait.jpg` | galeri baris 4, kanan | potret 4:5 | 1200 x 1500 |
| `gallery-7-wide.jpg` | galeri baris 5 | lebar 16:9 | 2000 x 1125 |
| `gallery-8-wide.jpg` | galeri baris 6 | lebar 16:9 | 2000 x 1125 |
| `quote-portrait.jpg` | foto di samping kutipan | potret 4:5 | 800 x 1000 |

## Menambah gambar galeri (jumlah bebas)

Galeri tidak lagi dibatasi 8 gambar. Taruh file baru di folder project, lalu tambahkan namanya ke daftar `gallery` di `project.js` (urutan = urutan dari atas ke bawah). Bentuk kotaknya dibaca dari nama file:

| Kata di nama file | Tampilan | Ukuran disarankan |
|---|---|---|
| `wide` (misal `gallery-9-wide.jpg`) | satu baris penuh, 16:9 | 2000 x 1125 |
| `portrait` (misal `gallery-10-portrait.jpg`) | 2 gambar per baris, 4:5 | 1200 x 1500 |
| `small` atau `square` (misal `gallery-11-small.jpg`) | 3 gambar per baris, 1:1 | 1000 x 1000 |

Contoh:

```js
gallery: [
  "gallery-1-wide.jpg",
  "gallery-2-portrait.jpg",
  "gallery-3-portrait.jpg",
  "gallery-9-small.jpg",
  "gallery-10-small.jpg",
  "gallery-11-small.jpg",
  "gallery-12-wide.jpg"
],
```

Kalau jumlah `portrait` atau `small` yang berurutan tidak pas (misal 3 portrait berturut-turut), sisanya otomatis dilebarkan supaya tidak ada lubang kosong.
Bisa juga menentukan bentuk secara manual: `{ src: "foto-apa-saja.jpg", size: "wide" }` (`wide`, `portrait`, atau `small`).

Hero Home: timpa `assets/hero-home.jpg`. Gambar diposisikan agar sisi kanan (wajah) tetap terlihat di layar sempit.

Gambar dipotong otomatis dari tengah agar pas dengan kotaknya, jadi subjek utama sebaiknya di tengah.
Di HP, foto kutipan berubah menjadi bentuk landscape, dan di "Next project" `cover.jpg` dipotong menjadi lebar.
Isi semua file saat ini hanya placeholder hasil potongan dari gambar lama. Timpa dengan gambar kamu, cukup pakai nama file yang sama.

Kalau gambarmu `.png` atau `.webp`, ubah nama file di bagian `images` pada `project.js` project itu.

## Teks project
Edit `projects/<nama>/project.js`: judul, brief, kutipan, tahun, kategori.
Baris `home: 1..4` menentukan project mana yang tampil di halaman Home (hapus barisnya kalau tidak mau tampil).

## Menambah project baru
1. Salin satu folder project, ganti namanya (misal `orbit`), lalu ubah `.fold=` di `project.js` menjadi `.orbit=`.
2. Tambahkan satu baris di `index.html`, di antara tag `<script src="projects/...">` lainnya:
   `<script src="projects/orbit/project.js"></script>`

Urutan tag script menentukan urutan project di Works, menu, dan "Next project".

## Menghapus project
Hapus foldernya dan baris `<script>`-nya di `index.html`.
