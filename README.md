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
    ├── fold/  halcyon/  kin/  meridian/  Ostra/  aurel/  northwind/  luma/
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

Tata letak galeri di halaman project:

```
┌───────────────────────┐
│  1  wide              │
├───────────┬───────────┤
│ 2 portrait│ 3 portrait│
├───────────┴───────────┤
│  4  wide              │
├───────────┬───────────┤
│ 5 portrait│ 6 portrait│
├───────────┴───────────┤
│  7  wide              │
│  8  wide              │
└───────────────────────┘
```

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
