# Angkasa Studio

Buka `index.html` langsung di browser, tidak perlu server.

## Isi folder

```
angkasa-studio/
├── index.html
├── assets/
│   ├── hero-home.webp        hero halaman Home (lebar 16:9, disarankan 2576 x 1449)
│   ├── contact.webp          foto halaman Contact
│   └── works-cta.webp        background footer halaman Works
└── projects/
    ├── fold/  halcyon/  kin/  meridian/  sable/  aurel/  northwind/  luma/
        ├── project.js           teks project
        ├── cover.webp            kartu project
        ├── hero.webp             hero halaman project
        ├── gallery-1-wide.webp   ... sampai gallery-17-wide.webp
        └── quote-portrait.webp   foto di samping kutipan
```

## Nama file dan ukuran (sama di setiap folder project)

| File | Tampil di | Bentuk | Ukuran disarankan |
|---|---|---|---|
| `cover.webp` | kartu di Home, kartu di Works, "Next project" | persegi 1:1 | 1200 x 1200 |
| `hero.webp` | bagian paling atas halaman project | lebar 16:9 | 2400 x 1350 |
| `gallery-1-wide.webp` | galeri baris 1 | lebar 16:9 | 2000 x 1125 |
| `gallery-2-portrait.webp` | galeri baris 2, kiri | potret 4:5 | 1200 x 1500 |
| `gallery-3-portrait.webp` | galeri baris 2, kanan | potret 4:5 | 1200 x 1500 |
| `gallery-4-wide.webp` | galeri baris 3 | lebar 16:9 | 2000 x 1125 |
| `gallery-5-portrait.webp` | galeri baris 4, kiri | potret 4:5 | 1200 x 1500 |
| `gallery-6-portrait.webp` | galeri baris 4, kanan | potret 4:5 | 1200 x 1500 |
| `gallery-7-wide.webp` | galeri baris 5 | lebar 16:9 | 2000 x 1125 |
| `gallery-8-wide.webp` | galeri baris 6 | lebar 16:9 | 2000 x 1125 |
| `quote-portrait.webp` | foto di samping kutipan | potret 4:5 | 800 x 1000 |

## Menambah gambar galeri (jumlah bebas)

Galeri tidak lagi dibatasi 8 gambar. Taruh file baru di folder project, lalu tambahkan namanya ke daftar `gallery` di `project.js` (urutan = urutan dari atas ke bawah). Bentuk kotaknya dibaca dari nama file:

| Kata di nama file | Tampilan | Ukuran disarankan |
|---|---|---|
| `wide` (misal `gallery-9-wide.webp`) | satu baris penuh, 16:9 | 2000 x 1125 |
| `portrait` (misal `gallery-10-portrait.webp`) | 2 gambar per baris, 4:5 | 1200 x 1500 |
| `small` atau `square` (misal `gallery-11-small.webp`) | 3 gambar per baris, 1:1 | 1000 x 1000 |

Contoh:

```js
gallery: [
  "gallery-1-wide.webp",
  "gallery-2-portrait.webp",
  "gallery-3-portrait.webp",
  "gallery-9-small.webp",
  "gallery-10-small.webp",
  "gallery-11-small.webp",
  "gallery-12-wide.webp"
],
```

Kalau jumlah `portrait` atau `small` yang berurutan tidak pas (misal 3 portrait berturut-turut), sisanya otomatis dilebarkan supaya tidak ada lubang kosong.
Bisa juga menentukan bentuk secara manual: `{ src: "foto-apa-saja.webp", size: "wide" }` (`wide`, `portrait`, atau `small`).

Hero Home: timpa `assets/hero-home.webp`. Gambar diposisikan agar sisi kanan (wajah) tetap terlihat di layar sempit.

Gambar dipotong otomatis dari tengah agar pas dengan kotaknya, jadi subjek utama sebaiknya di tengah.
Di HP, foto kutipan berubah menjadi bentuk landscape, dan di "Next project" `cover.webp` dipotong menjadi lebar.
Isi semua file saat ini hanya placeholder hasil potongan dari gambar lama. Timpa dengan gambar kamu, cukup pakai nama file yang sama.

Kalau gambarmu `.png` atau `.jpg`, ubah nama file di bagian `images` pada `project.js` project itu.

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

## Logo klien (baris berjalan di bawah intro)

Logo ada di `index.html`, di dalam `<ul class="marq-track">`. Setiap logo adalah satu `<li><svg …></svg></li>`.
Logo saat ini adalah logo contoh untuk klien di portofolio. Ganti dengan logo klien asli (yang memang sudah mengizinkan logonya dipakai):

1. Buka file SVG logo klien, salin isinya, lalu tempel menggantikan salah satu `<svg …>…</svg>`.
2. Ganti semua warna di SVG itu menjadi `currentColor` (misal `fill="currentColor"`), supaya logonya ikut abu-abu dan jadi hitam saat kursor diarahkan.
3. Tambahkan `role="img" aria-label="Nama Klien"` di tag `<svg>`.

Baris otomatis diduplikasi oleh script, jadi cukup tulis setiap logo satu kali. Kecepatannya diatur di CSS `.marq-track{animation:marq 48s …}`: angka lebih besar berarti lebih pelan.

## Foto founder (di samping nama pada kutipan)

Setiap folder project punya `avatar.webp`, yaitu foto kecil bulat di samping nama founder di bawah kutipan. File yang sekarang hanya placeholder (siluet).
Timpa dengan foto asli memakai nama file yang sama: persegi 1:1, disarankan 400 x 400, wajah di tengah.

## Cover video (logo motion) di kartu project

Kartu project di Home, Works, dan "Next project" bisa memakai video, bukan hanya gambar. Contohnya ada di `projects/fold/`.

1. Taruh video persegi (1:1) bernama `cover.webm` di folder project, tanpa suara. Ukuran 1080 x 1080 sudah cukup. Format `.mp4` juga bisa.
2. Di `project.js`, tambahkan baris ini di bawah `cover:`:
   `coverVideo: "cover.webm",`
3. `cover.webp` tetap dipakai sebagai gambar diam saat video belum termuat. Isi dengan frame terbaik dari videonya, misalnya saat logo sudah utuh.

Video otomatis berputar terus tanpa suara, hanya saat kartunya terlihat di layar. Untuk pengunjung yang mematikan animasi, yang tampil hanya gambar diamnya.

## Icon field (section Logo Collection di Home)

Bidang ikon logo yang terus bergeser pelan, bisa di-drag, dan ikonnya membesar di dekat kursor.
Semua logo ada di folder `assets/logos/`, berisi 28 file: `logo-01.svg` sampai `logo-28.svg`. File-file ini dipotong dari LOGO_COLLECTION.svg, urut dari kiri atas ke kanan bawah.
Setiap file adalah satu kotak persegi lengkap, yaitu logo beserta warna latarnya.

Ukuran dan susunannya sama dengan LOGO_COLLECTION.svg: setiap kotak 260,571 x 255 dengan sudut 12, jarak antarkotak 12, dan 7 kotak memenuhi lebar layar (di HP minimal 104px).

Cara mengganti: timpa file dengan SVG milikmu memakai nama yang sama. Gunakan ukuran 260,571 x 255 (atau rasio yang sama), dan sertakan warna latarnya di dalam SVG.
Menambah atau mengurangi logo: edit daftar di `assets/logos/logos.js`. Jumlahnya bebas.

## Teks navbar yang berganti (Home)

Saat navbar melewati section karya di Home, teks tengahnya berganti jadi "SELECTED WORKS". Saat melewati bidang logo, berganti jadi "LOGO COLLECTION". Di bagian lain kembali ke "ANGKASA STUDIO". Pergantiannya pakai efek huruf berputar.
Teksnya bisa diubah di script paling bawah `index.html`, cari `'Logo Collection'` dan `'Selected Works'`.

## Journal (halaman artikel)

Halaman Journal ada di `#journal`, dan setiap artikel punya halaman sendiri di `#journal/nama-artikel`. Menu "Journal", link Journal di footer, dan section "Notes from the studio" di Home semuanya mengarah ke halaman ini.

Semua artikel ditulis di `journal/posts.js`, urut dari yang terbaru. Artikel pertama tampil paling besar di atas halaman Journal, dan dua artikel terbaru juga tampil sebagai kartu di Home.

Setiap artikel berisi:
- `slug`: bagian link, misalnya `price-in-outcomes`. Pakai huruf kecil, angka, dan tanda strip saja.
- `title`, `category`, `date`, `read` (misal "5 min read"), dan `excerpt` (ringkasan 1–2 kalimat).
- `cover`: gambar di folder `journal/`, landscape 16:10, disarankan 1600 x 1000 dalam format .webp.
- `body`: isi artikel, satu paragraf per baris. Awali dengan `## ` untuk subjudul atau `> ` untuk kutipan besar.

Tombol filter kategori di halaman Journal dibuat otomatis dari kategori artikel.
Isi keempat artikel yang ada sekarang hanya contoh, dan gambarnya diambil dari galeri project. Ganti dengan tulisan dan gambarmu sendiri.
