# PDF Report Generator

Aplikasi web untuk membuat dan mengelola laporan PDF dengan mudah. Dibangun menggunakan **Nuxt 4**, **Shadcn Vue**, dan **Tailwind CSS**.

![Dashboard Preview](/public/icon.png)

## 🚀 Fitur Utama

- **Dashboard Layout Responsif**: Tampilan grid yang rapi dan adaptif untuk Desktop, Tablet, dan Mobile.
- **Live Preview Document**: Lihat hasil PDF secara *real-time* saat Anda mengetik (A4/A5/Letter).
- **Form Validation**: Validasi input yang kuat menggunakan **VeeValidate** dan **Zod**.
- **Currency Input**: Input nominal dengan format mata uang otomatis (Rp).
- **History Persistence**: Riwayat pembuatan laporan tersimpan otomatis di browser (LocalStorage).
- **PDF Download**: Generate dan unduh file PDF langsung dari browser (Client-side generation via `jspdf`).
- **UI Interaktif**: Menggunakan komponen modern dari Shadcn-vue (Toast notifications, Alert Dialogs, dll).

## 🛠️ Teknologi yang Digunakan

- **Framework**: [Nuxt 4](https://nuxt.com/)
- **UI Library**: [Shadcn Vue](https://www.shadcn-vue.com/) & [Tailwind CSS](https://tailwindcss.com/)
- **Form & Validation**: [VeeValidate](https://vee-validate.logaretm.com/) & [Zod](https://zod.dev/)
- **PDF Generation**: [jsPDF](https://github.com/parallax/jsPDF)
- **Icons**: [Lucide Vue](https://lucide.dev/)
- **State Management**: [VueUse](https://vueuse.org/) (LocalStorage)

## 📦 Cara Instalasi

Pastikan Anda telah menginstal [Node.js](https://nodejs.org/) di komputer Anda.

1. **Clone repository ini**
   ```bash
   git clone https://github.com/akmalzidani/technical-test-rssa.git
   cd technical-test-rssa
   ```

2. **Install dependencies**
   Menggunakan npm:
   ```bash
   npm install
   ```
   Atau menggunakan pnpm:
   ```bash
   pnpm install
   ```

## 🏃‍♂️ Menjalankan Aplikasi

### Development Server
Untuk menjalankan aplikasi di mode development:

```bash
npm run dev
# atau
pnpm dev
```

Buka browser dan kunjungi `http://localhost:3000`.

### Production Build
Untuk membuild aplikasi untuk production:

```bash
npm run build
# atau
pnpm build
```

Setelah build selesai, Anda dapat melihat preview-nya:

```bash
npm run preview
# atau
pnpm preview
```

## 📂 Struktur Project

- `app/components/dashboard`: Komponen khusus dashboard (Preview, Header).
- `app/components/sections`: Section utama halaman (Form, Table).
- `app/components/ui`: Komponen reusable UI (Button, Input, Card, dll).
- `app/composables`: Logic reusable (PDF Generator, History Storage).
- `app/lib`: Utilities dan Schema validasi.
- `app/pages`: Halaman utama aplikasi.

---

Dibuat untuk Technical Test RSSA.
