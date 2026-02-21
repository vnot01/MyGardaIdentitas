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
    *   **Mobile**: Aplikasi Android/iOS (berbasis Capacitor).
    *   **Extension**: Chrome Extension (Manifest V3).

## Screenshot Antarmuka
*(Screenshot antarmuka terbaru akan ditambahkan di sini)*

## Changelog
### Versi 1.3.0 (21/02/2026) - Expansion Pack
*   [Mobile] Inisiasi proyek Capacitor untuk Android & iOS di folder `/mobile`.
*   [Extension] Menambahkan Chrome Extension Manifest V3 di folder `/extension`.
*   [Compliance] Menambahkan `PrivacyInfo.xcprivacy` (Apple) & `DATA_SAFETY.md` (Google Play).
*   [Security] Implementasi CSP ketat dan penghapusan kode remote di semua platform.
*   [UI] Otomatisasi proses watermark dan penghapusan logo tengah yang mengganggu.

### Versi 1.1.0 (20/01/2026)
*   [New] Menambahkan slider kontrol ukuran font (8px - 72px).
*   [New] Menambahkan bagian edukasi hukum (UU PDP & KUHP) di UI.
*   [Dev] Menambahkan dukungan Docker (Port 81).

## Cara Menggunakan

### Metode 1: Web (Tanpa Instalasi)
Cukup buka file `index.html` di browser modern apa saja (Chrome, Firefox, Edge).

### Metode 2: Chrome Extension (Manifest V3)
1.  Buka `chrome://extensions/` di Chrome.
2.  Aktifkan "Developer mode" (pojok kanan atas).
3.  Klik "Load unpacked" dan pilih folder `extension/`.
4.  GardaIdentitas akan muncul di toolbar sebagai alat watermark instan yang 100% offline.

### Metode 3: Mobile App (Android/iOS)
Aplikasi dibungkus menggunakan **Capacitor** untuk kepatuhan store maksimal.
Masuk ke folder `mobile/` dan gunakan perintah berikut:
```bash
cd mobile
npm install
npx cap sync
# Untuk menjalankan di simulator/perangkat:
npx cap run android
npx cap run ios
```

### Metode 4: Docker (Self-Hosted)
```bash
docker-compose up -d --build
# Akses di http://localhost:81
```

## Kepatuhan & Keamanan (2026 Compliant)
Proyek ini dirancang untuk memenuhi standar privasi terbaru:
- **Apple Store**: Menyertakan `PrivacyInfo.xcprivacy` untuk deklarasi *Zero Data Collection*.
- **Google Play**: Panduan `DATA_SAFETY.md` (kategori: *No data collected*).
- **Chrome Web Store**: Manifest V3 dengan CSP ketat tanpa library eksternal.

## Lisensi
MIT License - Bebas digunakan dan dimodifikasi untuk kebaikan bersama.

---
<div align="center">

Made with ❤️
Vibe Code • Version 1.3.0
<a href="https://saweria.co/vnot01" target="_blank">☕ Support Development</a>
Jazakumullah Khairan 🙏

</div>
