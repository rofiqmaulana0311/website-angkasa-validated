# Angkasa Studio

Buka `index.html` langsung di browser, tidak perlu server.

```
angkasa-studio/
├── index.html
├── assets/
│   ├── contact.jpg        foto di halaman Contact
│   └── works-cta.jpg      background footer di halaman Works
└── projects/
    ├── fold/
    │   ├── cover.jpg      gambar project (760 x 760 px)
    │   └── project.js     teks project
    ├── halcyon/  kin/  meridian/  sable/  aurel/  northwind/  luma/
```

## Mengganti satu project
1. **Gambar:** timpa `projects/<nama>/cover.jpg` dengan gambar baru (disarankan persegi, 1200 x 1200 px).
   Kalau pakai .png atau .webp, ubah baris `cover:` di `project.js` ke nama file barunya.
2. **Teks:** buka `projects/<nama>/project.js`, ubah judul, brief, kutipan, tahun, dan kategori.

Satu `cover.jpg` dipakai di kartu Works, hero halaman project, galeri, foto kutipan, dan kartu "Next project".

## Menambah project baru
1. Salin satu folder project, ganti namanya (misal `orbit`), lalu ubah `.fold=` di `project.js` menjadi `.orbit=`.
2. Tambahkan satu baris di `index.html`, di antara tag `<script src="projects/...">` lainnya:
   `<script src="projects/orbit/project.js"></script>`

Urutan tag script menentukan urutan project di halaman Works, menu, dan "Next project".

## Menghapus project
Hapus foldernya dan baris `<script>`-nya di `index.html`.
