# Imam Satria Ramadhan — Instrumentation Portfolio

GitHub Pages-ready static portfolio.

## 📁 Struktur File

```
portfolio/
├── index.html          ← Halaman utama
├── style.css           ← Semua styling
├── script.js           ← Render logic (experience, skills, cases)
├── data.js             ← ⭐ SEMUA KONTEN — edit file ini untuk update
└── assets/
    ├── profile.jpg                          ← Foto profil (WAJIB)
    ├── Imam-Satria-Ramadhan-CV.pdf          ← CV (WAJIB)
    ├── masoneilan-positioner-calibration.mp4
    ├── case-conveyor-pullcord-water-ingress.jpg
    ├── case-rtd-3wire-resistance-check.jpg
    ├── case-hv002-engineering-mod-sketch.png
    ├── case-loadcell-misalignment-dustbin.jpg
    ├── case-so2-flange-leakage-repair.jpg
    ├── case-o2-oxymat61-flange-leak.jpg
    ├── case-temperature-thermoelement-erosion.jpg
    ├── case-cems-opacity-ldm100-a.jpg
    ├── case-cems-opacity-ldm100-b.jpg
    ├── case-vegamip-blockchute-a.jpg
    ├── case-vegamip-blockchute-b.jpg
    ├── case-vegamip-blockchute-c.jpg
    ├── case-vegamip-blockchute-d.jpg
    ├── case-do-analyzer-calibration.jpg
    ├── case-skimming-mouth-pneumatic.jpg
    ├── case-sitrans-p320-zero-trim.jpg
    ├── case-durag-dust-analyzer-a.jpg
    └── case-durag-dust-analyzer-b.jpg
```

## ✏️ Cara Tambah Case Baru

Buka `data.js`, tambahkan entry baru di dalam array `cases[]`:

```js
{id:'060', equipment:'TAG-EQUIPMENT', category:'Pressure',
 title:'Judul Case',
 issue:'Deskripsi masalah.',
 actions:[
   'Langkah 1',
   'Langkah 2',
   'Langkah 3'
 ],
 result:'Hasil akhir dan status.',
 media:[
   {type:'image', src:'assets/nama-file.jpg', caption:'Keterangan foto'}
 ]},
```

### Kategori yang tersedia:
- `Pressure`
- `Temperature`
- `Control Valve / MOV`
- `Burner / Combustion`
- `Analyzer / Gas Detector`
- `Flowmeter`
- `Conveyor / Interlock`
- `Weighing System`
- `Pneumatic System`
- `Rotating Equipment`

## 🚀 Cara Upload ke GitHub Pages

1. Upload semua file ke root repository GitHub
2. Upload semua file foto/video ke folder `assets/`
3. Aktifkan GitHub Pages dari Settings → Pages → Branch: main, Folder: / (root)

## ⚠️ File Wajib yang Belum Ada

Pastikan file berikut ada di folder `assets/` sebelum publish:
- `profile.jpg` — foto profil untuk homepage
- `Imam-Satria-Ramadhan-CV.pdf` — CV untuk tombol Download CV
