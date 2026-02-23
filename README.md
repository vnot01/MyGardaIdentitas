# GardaIdentitas

**GardaIdentitas** adalah sebuah inisiatif *open-source* untuk melindungi privasi data masyarakat Indonesia melalui pendekatan *client-side security* dan edukasi digital.

## Filosofi Nama
Nama ini menggabungkan dua kata kuat dalam Bahasa Indonesia:
*   **Garda**: Penjaga, pelindung barisan depan, atau perisai. Mencerminkan ketangguhan dan posisi sebagai pertahanan pertama.
*   **Identitas**: Jati diri (KTP/Data Pribadi) yang menjadi aset paling berharga di era digital.

Secara filosofis, **GardaIdentitas** bermakna "Perisai Terdepan Pelindung Jati Diri Bangsa".

## Fitur Utama
1.  **Watermark KTP Mandiri (Offline)**:
    *   Berjalan 100% di browser pengguna.
    *   Tanpa server upload (Zero Data Leakage Risk).
    *   Pola watermark anti-hapus (tiling).
    *   Kontrol ukuran font watermark (8px - 72px).
2.  **Edukasi Privasi**:
    *   Membangun kesadaran "Purpose Limitation" (Pembatasan Tujuan) sesuai UU PDP.
    *   Penjelasan konteks hukum (KUHP & UU PDP) terintegrasi.
3.  **Multi-Platform**:
    *   **Web**: Akses langsung via browser.
    *   **Mobile**: Aplikasi Android/iOS (via Capacitor).
    *   **Extension**: Chrome Extension (Manifest V3).

## Screenshot Antarmuka
*(Screenshot antarmuka terbaru akan ditambahkan di sini)*

## Changelog
### Versi 1.2.0 (20/01/2026) - Expansion Pack
*   [Mobile] Inisiasi proyek Capacitor untuk Android & iOS di folder `/mobile`.
*   [Extension] Menambahkan Chrome Extension Manifest V3 di folder `/extension`.
*   [Compliance] Menambahkan `PrivacyInfo.xcprivacy` (Apple) & `DATA_SAFETY.md` (Google Play).

### Versi 1.1.0 (20/01/2026)
*   [New] Menambahkan slider kontrol ukuran font (8px - 72px).
*   [New] Menambahkan bagian edukasi hukum (UU PDP & KUHP) di UI.
*   [Dev] Menambahkan dukungan Docker (Port 81).

## Cara Menggunakan

### Metode 1: Web (Tanpa Instalasi)
Cukup buka file `index.html` di browser modern apa saja (Chrome, Firefox, Edge).

### Metode 2: Docker
```bash
docker-compose up -d --build
# Akses di http://localhost:81
```

### Metode 3: Chrome Extension
1.  Buka `chrome://extensions/` di Chrome.
2.  Aktifkan "Developer mode" (pojok kanan atas).
3.  Klik "Load unpacked" dan pilih folder `extension/`.

### Metode 4: Mobile App (Android/iOS)
Masuk ke folder `mobile/` dan gunakan Capacitor:
```bash
cd mobile
npm install
npx cap add android
npx cap add ios
npx cap run android
```

## Lisensi
MIT License - Bebas digunakan dan dimodifikasi untuk kebaikan bersama.

---
<div align="center">

Made with ❤️
Vibe Code • Version 1.2.0
<a href="https://saweria.co/vnot01" target="_blank">☕ Support Development</a>
Jazakumullah Khairan 🙏

</div>
