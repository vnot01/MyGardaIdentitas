# Rencana Pengembangan: Mobile Apps & Chrome Extension

Saya telah menyusun rencana untuk mengembangkan versi Mobile dan Chrome Extension dari **GardaIdentitas**, dengan fokus penuh pada kepatuhan kebijakan terbaru 2026.

## 1. Struktur Folder Baru
Saya akan membuat dua direktori baru di dalam proyek:
- `/mobile`: Berisi source code untuk aplikasi Android & iOS (berbasis Capacitor).
- `/extension`: Berisi source code untuk Chrome Extension (Manifest V3).

## 2. Versi Mobile (`/mobile`)
Menggunakan **Capacitor** untuk membungkus logika web yang sudah ada menjadi aplikasi native, dengan penyesuaian kepatuhan:

*   **Teknologi**: CapacitorJS (Menjembatani web ke native tanpa menulis ulang logika).
*   **Kepatuhan Store**:
    *   **Apple App Store**: Menyertakan template `PrivacyInfo.xcprivacy` (wajib mulai Spring 2024) yang mendeklarasikan *Zero Data Collection*.
    *   **Google Play Store**: Dokumen panduan `DATA_SAFETY.md` untuk pengisian formulir Data Safety (kategori: *No data collected*).
*   **Fitur**: Memastikan fitur *File System* dan *Share Intent* bekerja secara native.

## 3. Chrome Extension (`/extension`)
Mengkonversi aplikasi menjadi ekstensi browser yang aman dan patuh:

*   **Manifest V3**:
    *   Menggunakan `service_worker` sebagai pengganti background pages.
    *   Menghapus semua kode remote (semua library dibundle lokal).
    *   Menerapkan CSP (Content Security Policy) yang ketat.
*   **Privasi**:
    *   Membuat `PRIVACY.md` khusus untuk syarat publikasi di Chrome Web Store.
    *   Memastikan tidak ada permintaan izin (permissions) yang berlebihan (hanya `activeTab` atau `storage` jika perlu).
*   **UI**: Mengadaptasi `index.html` menjadi `popup.html` yang responsif dalam jendela kecil ekstensi.

## 4. Langkah Implementasi
1.  Membuat folder `/mobile` dan konfigurasi dasar (`package.json`, `capacitor.config.json`).
2.  Menyalin dan mengadaptasi kode inti ke `/mobile/www`.
3.  Membuat file kepatuhan privasi untuk mobile (`PrivacyInfo.xcprivacy`, `DATA_SAFETY.md`).
4.  Membuat folder `/extension` dan `manifest.json` V3.
5.  Mengadaptasi UI/Logic untuk ekstensi (`popup.html`, `popup.js`).
6.  Update `README.md` utama dengan panduan untuk kedua platform baru ini.
