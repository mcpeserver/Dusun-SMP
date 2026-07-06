import { useState, useEffect } from "react";
import { siteConfig } from "../config/site";
import { Copy, Check, Menu, X, Wifi, WifiOff } from "lucide-react";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [copied, setCopied] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [serverOnline, setServerOnline] = useState(true);
  const [playerCount, setPlayerCount] = useState<number | null>(null);

  // Efek scroll untuk merubah tampilan header (tinggi menyusut, blur bertambah)
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
          // Jika offline atau API gagal, kita tetap asumsikan status "Ready" tapi tanpa memalsukan statistik angka
          setServerOnline(false);
        }
      })
      .catch(() => {
        // Fallback aman tanpa memalsukan angka pemain
        setServerOnline(true);
      });
  }, []);

  const handleCopyIp = () => {
    navigator.clipboard.writeText(siteConfig.server.ip);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const navItems = [
    { label: "Home", href: "#home" },
    { label: "Tentang", href: "#about" },
    { label: "Fitur", href: "#features" },
    { label: "Rules", href: "#rules" },
    { label: "Join Server", href: "#join" },
    { label: "Komunitas", href: "#community" },
  ];

  return (
    <header
      className={`w-full transition-all duration-250 ease-in-out ${
        scrolled
          ? "bg-forest-dark/95 backdrop-blur-xl border-b border-bamboo/30 py-2.5 shadow-lg shadow-forest-dark/50"
          : "bg-forest-dark/70 backdrop-blur-md border-b border-bamboo/10 py-4"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Kiri: Logo & Nama */}
        <a href="#home" className="flex items-center gap-3 group focus:outline-none">
          <img
            src="/logo.png"
            alt="Logo Dusun SMP"
            className={`transition-all duration-300 ${
              scrolled ? "w-8 h-8" : "w-10 h-10"
            } object-contain rounded-md`}
            referrerPolicy="no-referrer"
          />
          <span className="font-serif font-bold text-lg sm:text-xl tracking-wide text-white group-hover:text-rice-gold transition-colors">
            {siteConfig.name}
          </span>
        </a>

        {/* Tengah: Navigasi (Desktop) */}
        <nav className="hidden lg:flex items-center gap-6 xl:gap-8">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="text-sm font-semibold text-gray-300 hover:text-rice-gold transition-colors relative py-1 after:absolute after:bottom-0 after:left-0 after:w-full after:h-[2px] after:bg-rice-gold after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-300"
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* Kanan: Status Server & Copy IP */}
        <div className="hidden sm:flex items-center gap-3">
          {/* Status Server Badge - Only show when server is online */}
          {serverOnline && (
            <div
              className="flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-emerald-500/15 text-emerald-light border border-emerald-500/30"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <span className="font-mono">
                Online {playerCount !== null ? `(${playerCount} Player)` : ""}
              </span>
            </div>
          )}

          {/* Quick Copy Button - Only show when server is online */}
          {serverOnline && (
            <button
              onClick={handleCopyIp}
              className="flex items-center gap-1.5 px-3.5 py-1.5 rounded bg-bamboo/20 hover:bg-rice-gold hover:text-forest-dark border border-bamboo/40 hover:border-rice-gold text-rice-gold font-bold text-xs transition-all cursor-pointer shadow-sm active:scale-95"
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

      {/* Navigasi Mobile Panel */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-forest-dark border-t border-bamboo/20 py-4 px-4 space-y-3 shadow-2xl">
          <div className="flex flex-col gap-2">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className="block px-3 py-2 rounded text-base font-semibold text-gray-300 hover:text-rice-gold hover:bg-forest-moss/40 transition-colors"
              >
                {item.label}
              </a>
            ))}
          </div>

          <hr className="border-bamboo/10 my-2" />

          {/* Mobile Kanan: Status & Copy IP */}
          {serverOnline && (
            <div className="flex flex-col gap-3 pt-1">
              <div
                className="flex items-center justify-center gap-1.5 px-3 py-2 rounded text-xs font-semibold bg-emerald-500/15 text-emerald-light border border-emerald-500/30"
              >
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                </span>
                <span className="font-mono">
                  ONLINE {playerCount !== null ? `(${playerCount} Warga Aktif)` : ""}
                </span>
              </div>

              <button
                onClick={() => {
                  handleCopyIp();
                  setMobileMenuOpen(false);
                }}
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
        </div>
      )}
    </header>
  );
}
