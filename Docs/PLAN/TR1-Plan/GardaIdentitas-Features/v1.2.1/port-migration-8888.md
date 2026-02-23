# Port Migration Strategy: Resolving Conflict with NPM

## Overview
Dokumentasi ini mencatat perubahan konfigurasi port pada layanan GardaIdentitas untuk menyelesaikan konflik dengan Nginx Proxy Manager (NPM).

## Problem Statement
- **Konflik**: Port `81` sebelumnya digunakan oleh GardaIdentitas. Port ini sering menjadi port default untuk *Nginx Proxy Manager Admin Interface* atau layanan web proxy lainnya.
- **Dampak**: Potensi kegagalan start container atau routing yang salah jika kedua layanan berjalan pada host yang sama.

## Resolution
Migrasi port host dari `81` ke `8888`.

### Technical Details
- **Old Configuration**: `81:80`
- **New Configuration**: `8888:80`
- **Selected Port**: `8888`
    - **Status**: Available (Verified via `ss -tuln`).
    - **Reasoning**: Port mudah diingat (repeating digits), berada di range *user ports* (>1024), dan tidak konflik dengan layanan umum seperti `8080` (Tomcat/Jenkins) atau `3000` (Node/React) yang sudah digunakan di server ini.

## Implementation Steps
1.  **Check Availability**: Memastikan port 8888 tidak sedang digunakan.
2.  **Update Config**: Modifikasi `docker-compose.yml`.
3.  **Restart Service**: `docker compose up -d --force-recreate`.
4.  **Verify**: Akses `http://localhost:8888` berhasil (HTTP 200 OK).

## Action Required
- Update konfigurasi Reverse Proxy (Cloudflare Tunnel / NPM) untuk mengarah ke port baru **8888** (bukan lagi 81).
- Update bookmark atau dokumentasi referensi tim jika ada.

## Verification Log
```bash
$ curl -I http://localhost:8888
HTTP/1.1 200 OK
Server: nginx/1.29.1
...
```
