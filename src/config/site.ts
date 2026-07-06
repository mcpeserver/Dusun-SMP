/**
 * Configrasi Resmi Website Dusun SMP
 * Semua data server Minecraft diatur di sini agar mudah diubah.
 */

export const siteConfig = {
  name: "Dusun SMP",
  tagline: "Survival Village Indonesia",
  description: "Server Minecraft Survival Economy bertema pedesaan tradisional Indonesia yang hangat, damai, dan penuh kebersamaan. Rasakan suasana bermain yang asri dengan rumah kayu, sawah, dan jembatan bambu.",
  
  // Informasi Koneksi Server Minecraft
  server: {
    ip: "play.dusunsmp.com",
    portJava: 25565,
    portBedrock: 19132,
    mode: "Survival Economy",
    platforms: "Java & Bedrock Support",
    version: "1.20 - 1.21+",
    statusPlaceholder: "Online",
  },

  // Media Sosial & Komunitas
  links: {
    whatsapp: "https://chat.whatsapp.com/DusunSMPWhatsApp", // Silakan ganti dengan link grup WA resmi
    discord: "https://discord.gg/9KUN2byKRM", // Menggunakan discord dari API developer sebagai fallback/default
  },

  // Fitur Utama Server (Sesuai Data Resmi)
  features: [
    {
      id: "survival-economy",
      title: "Survival Economy",
      description: "Bertahan hidup bersama dalam ekosistem ekonomi pedesaan yang seimbang. Berdagang hasil tani, ternak, dan material berharga dengan warga dusun lainnya.",
      icon: "Coins"
    },
    {
      id: "cross-platform",
      title: "Java & Bedrock Support",
      description: "Bermain mulus dari platform apa pun. Kompatibel penuh untuk pemain Minecraft PC (Java) maupun Android, iOS, dan Konsol (Bedrock).",
      icon: "Layers"
    },
    {
      id: "village-vibes",
      title: "Suasana Pedesaan Indonesia",
      description: "Desain dunia bernuansa pedesaan nusantara yang asri dengan rumah tradisional Joglo, jembatan bambu, sungai mengalir, dan pepohonan tropis.",
      icon: "Home"
    }
  ],

  // Aturan Resmi (Rules) Dusun SMP
  rules: [
    {
      title: "Hormati Sesama Warga Dusun",
      description: "Jaga kesopanan dalam berkomunikasi baik di dalam game maupun grup komunitas. Dilarang keras melakukan cyberbullying, toxic berlebihan, menyebarkan SARA, pornografi, atau ujaran kebencian."
    },
    {
      title: "Dilarang Melakukan Griefing",
      description: "Dilarang merusak, mengubah, menghancurkan, atau membakar bangunan, lahan tani, maupun dekorasi milik pemain lain tanpa izin tertulis dari pemiliknya."
    },
    {
      title: "Dilarang Mencuri Item",
      description: "Mengambil barang dari chest, mencuri hewan ternak, memanen hasil tani milik warga lain tanpa izin, atau tidak mengembalikan barang yang dipinjam dikategorikan sebagai pencurian."
    },
    {
      title: "Bermain Adil (No Cheating)",
      description: "Dilarang keras menggunakan client ilegal, cheat (X-Ray, Fly, Speed, Killaura), exploit bug server, atau modifikasi pihak ketiga yang memberikan keuntungan tidak adil."
    },
    {
      title: "Jaga Kelestarian Alam Dusun",
      description: "Setelah menebang pohon wajib menanam bibit baru kembali. Jaga kebersihan sungai dan tata letak sawah agar lingkungan Dusun SMP tetap asri, indah, dan nyaman ditinggali."
    }
  ]
};
