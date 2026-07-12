import { useEffect, useState } from "react";
import DeveloperBar from "./components/DeveloperBar";
import Header from "./components/Header";
import Hero from "./components/Hero";
import AboutSection from "./components/AboutSection";
import FeaturesSection from "./components/FeaturesSection";
import RulesSection from "./components/RulesSection";
import JoinSection from "./components/JoinSection";
import CommunitySection from "./components/CommunitySection";
import Footer from "./components/Footer";
import { DeveloperData } from "./types";
import { Loader2, Trees } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

export default function App() {
  const [activeTab, setActiveTab] = useState<string>("home");
  const [devData, setDevData] = useState<DeveloperData | null>(null);
  const [loadingDev, setLoadingDev] = useState(true);

  // 1. Sinkronisasi Hash URL dengan State Tab
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace("#", "");
      const validTabs = ["home", "about", "features", "rules", "join", "community"];
      if (validTabs.includes(hash)) {
        setActiveTab(hash);
      } else {
        setActiveTab("home");
      }
    };

    handleHashChange();
    window.addEventListener("hashchange", handleHashChange);
    return () => window.removeEventListener("hashchange", handleHashChange);
  }, []);

  const handleTabChange = (tabId: string) => {
    setActiveTab(tabId);
    window.location.hash = tabId;
  };

  // 2. Fetch Data Konfigurasi Developer Dinamis (Zero Hardcoded)
  useEffect(() => {
    fetch("https://raw.githubusercontent.com/mcpeserver/MyAPI/main/config.json")
      .then((res) => {
        if (!res.ok) throw new Error("Gagal mengambil konfigurasi");
        return res.json();
      })
      .then((data: DeveloperData) => {
        setDevData(data);
        setLoadingDev(false);

        // Optimasi SEO & OG Tags secara dinamis jika terdapat data logo & hero_image di JSON
        if (data.logo) {
          const favicon = document.querySelector('link[rel="icon"]');
          if (favicon) {
            favicon.setAttribute("href", data.logo);
          }
        }
        if (data.hero_image) {
          const ogImage = document.querySelector('meta[property="og:image"]');
          const twitterImage = document.querySelector('meta[name="twitter:image"]');
          if (ogImage) ogImage.setAttribute("content", data.hero_image);
          if (twitterImage) twitterImage.setAttribute("content", data.hero_image);
        }
      })
      .catch((err) => {
        console.error("Gagal memuat konfigurasi pengembang:", err);
        // Tetap set loading false agar user bisa mengakses web jika API down
        setLoadingDev(false);
      });
  }, []);

  // Tampilan Loading Screen Bertema Pedesaan Tradisional Indonesia (Premium & Anti-Lag)
  if (loadingDev) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen bg-charcoal-base text-white p-4">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          className="flex flex-col items-center space-y-6 max-w-sm text-center"
        >
          <div className="relative flex items-center justify-center">
            <div className="absolute w-20 h-20 rounded-full border-4 border-bamboo/20 border-t-rice-gold animate-spin"></div>
            <Trees className="w-8 h-8 text-leaf-green animate-pulse" />
          </div>
          
          <div className="space-y-2">
            <h1 className="font-serif font-bold text-2xl tracking-wide text-white">
              Dusun SMP
            </h1>
            <p className="text-xs text-rice-gold tracking-widest uppercase font-mono">
              Memasuki Kawasan Desa...
            </p>
          </div>
          <div className="flex items-center gap-1.5 text-xs text-gray-400">
            <Loader2 className="w-3.5 h-3.5 animate-spin text-rice-gold" />
            <span>Memuat data konfigurasi pengembang...</span>
          </div>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="flex flex-col min-h-screen bg-charcoal-base selection:bg-rice-gold selection:text-forest-dark relative">
      
      {/* Container Sticky untuk DeveloperBar dan Header */}
      <div className="sticky top-0 z-50 w-full flex flex-col">
        {/* Developer Bar hanya muncul di Desktop (MD ke atas) agar mobile header bersih total */}
        {devData && <DeveloperBar devData={devData} />}
        
        <Header activeTab={activeTab} setActiveTab={handleTabChange} devData={devData} />
      </div>

      {/* Main Content Sections - Menggunakan Sistem Tab SPA Anti-Lag */}
      <main className="flex-grow">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
            className="w-full"
          >
            {activeTab === "home" && <Hero />}
            {activeTab === "about" && <AboutSection />}
            {activeTab === "features" && <FeaturesSection />}
            {activeTab === "rules" && <RulesSection />}
            {activeTab === "join" && <JoinSection />}
            {activeTab === "community" && <CommunitySection devData={devData} />}
          </motion.div>
        </AnimatePresence>
      </main>

      {/* Footer Section */}
      <Footer devData={devData} />
    </div>
  );
}
