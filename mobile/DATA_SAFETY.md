# Google Play Data Safety Guide (GardaIdentitas)

To publish GardaIdentitas on Google Play Store, fill out the **Data Safety** form in Google Play Console as follows:

## 1. Data Collection and Security
*   **Does your app collect or share any of the required user data types?**
    *   **NO**.
    *   *Reason*: GardaIdentitas processes all images locally (Client-Side Processing) within the WebView/Device. No data is sent to any external server.

## 2. Security Practices
*   **Is data encrypted in transit?**
    *   **N/A** (No data is transmitted).
*   **Can users request data deletion?**
    *   **N/A** (No data is stored remotely to delete).

## 3. Data Types
*   Leave all checkboxes **UNCHECKED** (Location, Personal Info, Financial Info, Health, Messages, Photos/Videos, etc.).
*   *Note*: Even though the app handles "Photos", it does not "Collect" them (transmit them off-device). Local processing does not count as collection under Google Play policies.

## 4. Privacy Policy URL
You must host a privacy policy. You can use the `PRIVACY.md` content from this repo hosted on GitHub Pages or a simple website.

**Key Statement for Policy:**
> "GardaIdentitas does not collect, store, or transmit any personal data. All image processing is performed locally on your device. We do not have access to your photos or identity information."
