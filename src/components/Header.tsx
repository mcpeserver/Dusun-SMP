import { useState, useEffect } from "react";
import { siteConfig } from "../config/site";
import { Copy, Check, Menu, X, Code, MessageSquare, Briefcase, Users, HelpCircle, ExternalLink } from "lucide-react";
import { DeveloperData } from "../types";

interface HeaderProps {
  activeTab: string;
  setActiveTab: (tabId: string) => void;
  devData: DeveloperData | null;
}

export default function Header({ activeTab, setActiveTab, devData }: HeaderProps) {
  const [scrolled, setScrolled] = useState(false);
  const [copied, setCopied] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [serverOnline, setServerOnline] = useState(true);
  const [playerCount, setPlayerCount] = useState<number | null>(null);

  // Efek scroll untuk merubah tampilan header (tinggi menyusut halus)
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Ambil data status server Minecraft yang asli
  useEffect(() => {
    fetch(`https://api.mcsrvstat.us/3/${siteConfig.server.ip}`)
      .then((res) => {
        if (!res.ok) throw new Error();
        return res.json();
      })
      .then((data) => {
        if (data && data.online) {
          setServerOnline(true);
          setPlayerCount(data.players?.online ?? 0);
        } else {
          setServerOnline(false);
        }
      })
      .catch(() => {
        setServerOnline(true);
      });
  }, []);

  const handleCopyIp = () => {
    navigator.clipboard.writeText(siteConfig.server.ip);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const navItems = [
    { id: "home", label: "Home" },
    { id: "about", label: "Tentang" },
    { id: "features", label: "Fitur" },
    { id: "rules", label: "Rules" },
    { id: "join", label: "Join Server" },
    { id: "community", label: "Komunitas" },
  ];

  return (
    <header
      className={`w-full transition-all duration-300 ease-in-out ${
        scrolled
          ? "bg-forest-dark/95 backdrop-blur-xl border-b border-bamboo/30 py-2 sm:py-2.5 shadow-lg shadow-forest-dark/50"
          : "bg-forest-dark/70 backdrop-blur-md border-b border-bamboo/10 py-3 sm:py-4"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        
        {/* Kiri: Logo & Nama */}
        <button
          onClick={() => setActiveTab("home")}
          className="flex items-center gap-3 group focus:outline-none cursor-pointer"
        >
          <img
            src="/logo.jpg"
            alt="Logo Dusun SMP"
            className={`transition-all duration-300 ${
              scrolled ? "w-8 h-8" : "w-10 h-10"
            } object-contain rounded-md`}
            referrerPolicy="no-referrer"
          />
          <span className="font-serif font-bold text-lg sm:text-xl tracking-wide text-white group-hover:text-rice-gold transition-colors">
            {siteConfig.name}
          </span>
        </button>

        {/* Tengah: Navigasi (Desktop - Tab Buttons) */}
        <nav className="hidden lg:flex items-center gap-5 xl:gap-7">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => setActiveTab(item.id)}
              className={`text-sm font-semibold transition-all relative py-1.5 cursor-pointer ${
                activeTab === item.id
                  ? "text-rice-gold font-bold after:scale-x-100"
                  : "text-gray-300 hover:text-rice-gold after:scale-x-0 hover:after:scale-x-100"
              } after:absolute after:bottom-0 after:left-0 after:w-full after:h-[2px] after:bg-rice-gold after:transition-transform after:duration-300`}
            >
              {item.label}
            </button>
          ))}
        </nav>

        {/* Kanan: Status Server & Copy IP */}
        <div className="hidden sm:flex items-center gap-3">
          {/* Status Server Badge */}
          {serverOnline && (
            <div
              className="flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-emerald-500/15 text-emerald-light border border-emerald-500/30"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <span className="font-mono text-[11px]">
                Online {playerCount !== null ? `(${playerCount} Player)` : ""}
              </span>
            </div>
          )}

          {/* Quick Copy Button */}
          {serverOnline && (
            <button
              onClick={handleCopyIp}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded bg-bamboo/20 hover:bg-rice-gold hover:text-forest-dark border border-bamboo/40 hover:border-rice-gold text-rice-gold font-bold text-[11px] transition-all cursor-pointer shadow-sm active:scale-95"
            >
              {copied ? (
                <>
                  <Check className="w-3.5 h-3.5" />
                  <span>Disalin!</span>
                </>
              ) : (
                <>
                  <Copy className="w-3.5 h-3.5" />
                  <span>IP: {siteConfig.server.ip}</span>
                </>
              )}
            </button>
          )}
        </div>

        {/* Hamburger Menu Button (Mobile) */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="lg:hidden p-2 rounded text-gray-300 hover:text-white hover:bg-forest-moss/50 focus:outline-none cursor-pointer"
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Navigasi Drawer Mobile Panel (Navigation Drawer) */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-forest-dark border-t border-bamboo/20 py-4 px-4 space-y-4 shadow-2xl animate-in slide-in-from-top-4 duration-200">
          
          {/* 1. Main Navigation Items */}
          <div className="flex flex-col gap-1">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => {
                  setActiveTab(item.id);
                  setMobileMenuOpen(false);
                }}
                className={`block w-full text-left px-3.5 py-2.5 rounded-lg text-base font-semibold transition-all cursor-pointer ${
                  activeTab === item.id
                    ? "text-rice-gold bg-forest-moss/40 font-bold border-l-2 border-rice-gold"
                    : "text-gray-300 hover:text-rice-gold hover:bg-forest-moss/20"
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>

          {/* Server IP Copy Button on Mobile */}
          {serverOnline && (
            <div className="px-1.5">
              <button
                onClick={handleCopyIp}
                className="flex items-center justify-center gap-2 w-full py-2.5 rounded bg-bamboo/30 hover:bg-rice-gold hover:text-forest-dark text-rice-gold border border-bamboo/50 font-bold text-sm transition-all cursor-pointer"
              >
                {copied ? (
                  <>
                    <Check className="w-4 h-4" />
                    <span>Alamat IP Berhasil Disalin!</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-4 h-4" />
                    <span>Salin IP: {siteConfig.server.ip}</span>
                  </>
                )}
              </button>
            </div>
          )}

          {/* 2. Divider */}
          <hr className="border-bamboo/10 my-2" />

          {/* 3. Developer & Community Information inside Drawer (Mobile Only) */}
          {devData && (
            <div className="bg-forest-moss/20 border border-bamboo/10 rounded-xl p-4 space-y-3">
              <div className="flex items-center gap-1.5 text-[10px] text-rice-gold font-bold uppercase tracking-wider">
                <Code className="w-3.5 h-3.5" />
                <span>Developer & Komunitas</span>
              </div>

              <div className="text-xs text-gray-300">
                Dikembangkan oleh <span className="font-semibold text-white">{devData.name}</span>
              </div>

              <div className="flex flex-col gap-2 pt-1 text-xs">
                {/* Direct WhatsApp Button */}
                <a
                  href={`https://wa.me/${devData.contact.whatsapp}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 w-full py-2 rounded-lg bg-emerald-600/20 hover:bg-emerald-600 border border-emerald-500/40 hover:border-emerald-500 text-emerald-light hover:text-white transition-all font-semibold"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>Hubungi Developer via WhatsApp</span>
                </a>

                {/* Grid Links */}
                <div className="grid grid-cols-2 gap-2 text-[11px] text-gray-300">
                  <a
                    href={devData.website.portfolio}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1.5 p-2 rounded bg-forest-dark/50 border border-bamboo/10 hover:border-rice-gold hover:text-rice-gold transition-colors justify-center"
                  >
                    <Briefcase className="w-3.5 h-3.5 text-rice-gold" />
                    <span>Portfolio</span>
                  </a>

                  <a
                    href={devData.community.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1.5 p-2 rounded bg-forest-dark/50 border border-bamboo/10 hover:border-leaf-green hover:text-leaf-green transition-colors justify-center"
                  >
                    <Users className="w-3.5 h-3.5 text-leaf-green" />
                    <span>Website Komunitas</span>
                  </a>
                </div>

                {/* Discord Link */}
                <a
                  href={devData.community.discord}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-1.5 py-2 px-3 rounded bg-[#5865F2]/10 border border-[#5865F2]/30 hover:bg-[#5865F2] hover:text-white text-[#8a96f5] text-[11px] transition-colors font-semibold"
                >
                  <HelpCircle className="w-3.5 h-3.5" />
                  <span>Discord Developer</span>
                </a>
              </div>
            </div>
          )}

        </div>
      )}
    </header>
  );
}
