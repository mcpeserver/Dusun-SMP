# Panduan Kontribusi Dusun SMP Website

Halo! Terima kasih banyak sudah tertarik untuk ikut berkontribusi dalam mengembangkan website resmi **Dusun SMP**. Komunitas ini terus tumbuh berkat kolaborasi dari warga seperti kamu!

Untuk menjaga kualitas kode dan kerja sama yang baik, silakan ikuti panduan kontribusi di bawah ini.

---

## 🛠️ Cara Mulai Berkontribusi

### 1. Melaporkan Bug atau Usulan Fitur
Jika kamu menemukan kesalahan tampilan (visual bug), typo pada teks, atau ingin mengusulkan ide desain baru:
1. Periksa bagian [GitHub Issues](https://github.com/username/dusun-smp/issues) terlebih dahulu untuk memastikan topik tersebut belum dilaporkan sebelumnya.
2. Jika belum ada, buat issue baru menggunakan template yang tersedia (Bug Report atau Feature Request).
3. Berikan penjelasan yang detail dan screenshot jika memungkinkan.

### 2. Mengajukan Perubahan Kode (Pull Request)
Jika kamu ingin memperbaiki bug sendiri atau mengimplementasikan peningkatan desain:
1. **Fork** repository ini ke akun GitHub pribadimu.
2. Buat branch baru dari branch `main` dengan penamaan yang deskriptif:
   ```bash
   git checkout -b fix/visual-alignment-hero
   # atau
   git checkout -b feat/optimasi-animasi
   ```
3. Lakukan perubahan kode. Pastikan kamu:
   - Mengikuti struktur folder yang rapi.
   - Menggunakan Tailwind CSS v4 untuk styling.
   - Melakukan uji coba lokal dengan menjalankan `npm run dev` atau `pnpm dev`.
   - Menjalankan linter untuk memastikan tidak ada error: `npm run lint`.
4. Lakukan commit dengan pesan commit yang jelas dan deskriptif.
5. Push branch tersebut ke fork repository-mu dan buka **Pull Request (PR)** ke branch `main` di repository utama ini.

---

## 🎨 Panduan Gaya & Standar Kode

- **Desain & Warna**: Pertahankan identitas visual pedesaan tradisional Indonesia yang hangat dan asri (Survival Village). Hindari warna-warna neon, futuristik, atau sci-fi.
- **Data Statis**: Seluruh data server dikelola terpusat di `src/config/site.ts`. Jangan melakukan hardcode data di dalam komponen visual langsung.
- **Aksesibilitas (A11y)**: Gunakan elemen HTML yang semantis, berikan tag `alt` yang jelas pada gambar, dan jaga kontras warna yang nyaman dilihat.

---

## 🤝 Kode Etik

Dengan berpartisipasi dalam proyek ini, kamu dianggap telah menyetujui untuk mengikuti seluruh aturan yang terdapat dalam [CODE_OF_CONDUCT.md](./CODE_OF_CONDUCT.md) demi kenyamanan bersama.

Apabila ada pertanyaan lebih lanjut, silakan hubungi tim pengembang melalui grup Discord resmi atau ajukan pertanyaan di bagian diskusi GitHub!
