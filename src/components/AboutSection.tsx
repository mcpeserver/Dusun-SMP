import { useState, useEffect } from "react";
import { siteConfig } from "../config/site";
import { Trees, Compass, Users2, ShieldCheck, Swords } from "lucide-react";

export default function AboutSection() {
  const [serverOnline, setServerOnline] = useState(true);

  useEffect(() => {
    fetch(`https://api.mcsrvstat.us/3/${siteConfig.server.ip}`)
      .then((res) => {
        if (!res.ok) throw new Error();
        return res.json();
      })
      .then((data) => {
        if (data && data.online) {
          setServerOnline(true);
        } else {
          setServerOnline(false);
        }
      })
      .catch(() => {
        setServerOnline(true);
      });
  }, []);

  return (
    <section id="about" className="py-20 bg-charcoal-base relative overflow-hidden">
      {/* Absolute natural highlights */}
      <div className="absolute top-1/4 left-0 w-96 h-96 rounded-full bg-forest-moss/10 blur-[120px] pointer-events-none"></div>
      <div className="absolute bottom-1/4 right-0 w-96 h-96 rounded-full bg-wood-brown/10 blur-[120px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Bagian Kiri: Teks Narasi */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-forest-moss/40 border border-bamboo/20 text-rice-gold text-xs font-bold tracking-widest uppercase">
              <Trees className="w-4 h-4 text-leaf-green" />
              <span>Dusun Tradisional Nusantara</span>
            </div>
            
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-white tracking-tight">
              Suasana <span className="text-rice-gold">Desa Asri Indonesia</span> di Dunia Minecraft
            </h2>
            
            <p className="text-gray-300 leading-relaxed text-sm sm:text-base">
              Dusun SMP menghadirkan sensasi bermain Minecraft Survival yang unik dan kental dengan adat pedesaan Indonesia. 
              Di sini, kamu akan menemukan arsitektur tradisional seperti rumah Joglo, dermaga bambu yang menawan, persawahan berundak (sengkedan) yang hijau, dan gemericik air sungai yang damai di bawah bayang-bayang kabut pagi.
            </p>

            <p className="text-gray-300 leading-relaxed text-sm sm:text-base">
              Kami berfokus sepenuhnya pada mode <strong className="text-white">Survival Economy</strong> yang adil dan ramah bagi pemain kasual maupun veteran. 
              Jalin silaturahmi dengan sesama warga dusun, bangun perkampungan impianmu, bercocok tanam, berternak, dan nikmati ketenangan bermain bersama tanpa gangguan kebisingan dunia modern.
            </p>

            {/* Grid Point Pendukung */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
              <div className="flex items-start gap-3 p-3 rounded bg-forest-dark/40 border border-bamboo/10">
                <Compass className="w-5 h-5 text-rice-gold shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-bold text-sm text-white">Eksplorasi Alam Asri</h4>
                  <p className="text-xs text-gray-400 mt-0.5">Dunia yang dirancang khusus untuk memunculkan vibe petualangan tropis nusantara.</p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-3 rounded bg-forest-dark/40 border border-bamboo/10">
                <Users2 className="w-5 h-5 text-leaf-green shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-bold text-sm text-white">Komunitas yang Guyub</h4>
                  <p className="text-xs text-gray-400 mt-0.5">Prinsip gotong royong antar pemain dalam membangun fasilitas umum dusun.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Bagian Kanan: Widget Kartu Status & Info Teknis */}
          <div className="lg:col-span-5">
            <div className="bg-gradient-to-br from-forest-moss/90 to-forest-dark/95 border border-bamboo/30 rounded-2xl p-6 sm:p-8 shadow-2xl relative overflow-hidden glow-gold">
              
              {/* Background accent ring style */}
              <div className="absolute -top-16 -right-16 w-32 h-32 rounded-full border border-rice-gold/10 pointer-events-none"></div>
              
              <h3 className="text-xl font-serif font-bold text-white border-b border-bamboo/20 pb-4 mb-6 flex items-center justify-between">
                <span>Informasi Teknis</span>
                <span className="text-xs font-mono px-2 py-0.5 rounded bg-rice-gold/25 text-rice-gold tracking-wide uppercase">
                  Minecraft Server
                </span>
              </h3>

              <div className="space-y-4">
                {/* Alamat IP */}
                <div className="flex justify-between items-center py-2 border-b border-bamboo/10">
                  <span className="text-xs text-gray-400 font-semibold uppercase tracking-wider">Server IP</span>
                  <span className="text-sm font-mono font-bold text-white bg-forest-dark px-2.5 py-1 rounded border border-bamboo/10 select-all">
                    {siteConfig.server.ip}
                  </span>
                </div>

                {/* Java Port */}
                <div className="flex justify-between items-center py-2 border-b border-bamboo/10">
                  <span className="text-xs text-gray-400 font-semibold uppercase tracking-wider">Port Java</span>
                  <span className="text-sm font-mono font-bold text-rice-gold">
                    {siteConfig.server.portJava} (Default)
                  </span>
                </div>

                {/* Bedrock Port */}
                <div className="flex justify-between items-center py-2 border-b border-bamboo/10">
                  <span className="text-xs text-gray-400 font-semibold uppercase tracking-wider">Port Bedrock</span>
                  <span className="text-sm font-mono font-bold text-rice-gold">
                    {siteConfig.server.portBedrock}
                  </span>
                </div>

                {/* Mode */}
                <div className="flex justify-between items-center py-2 border-b border-bamboo/10">
                  <span className="text-xs text-gray-400 font-semibold uppercase tracking-wider">Game Mode</span>
                  <span className="text-sm font-bold text-emerald-light">
                    {siteConfig.server.mode}
                  </span>
                </div>

                {/* Platform */}
                <div className="flex justify-between items-center py-2 border-b border-bamboo/10">
                  <span className="text-xs text-gray-400 font-semibold uppercase tracking-wider">Kompatibilitas</span>
                  <span className="text-sm font-bold text-white">
                    {siteConfig.server.platforms}
                  </span>
                </div>

                {/* Versi */}
                <div className="flex justify-between items-center py-2 border-b border-bamboo/10">
                  <span className="text-xs text-gray-400 font-semibold uppercase tracking-wider">Versi Game</span>
                  <span className="text-sm font-mono font-bold text-white">
                    {siteConfig.server.version}
                  </span>
                </div>

                {/* Status Server */}
                <div className="flex justify-between items-center pt-2">
                  <span className="text-xs text-gray-400 font-semibold uppercase tracking-wider">Status</span>
                  <div className="flex items-center gap-2">
                    <span className={`inline-block w-2.5 h-2.5 rounded-full ${serverOnline ? "bg-emerald-500 animate-pulse" : "bg-yellow-500"}`}></span>
                    <span className={`text-sm font-bold ${serverOnline ? "text-emerald-light" : "text-yellow-500"}`}>
                      {serverOnline ? "Aktif & Stabil" : "Sedang Maintenance"}
                    </span>
                  </div>
                </div>
              </div>

              {/* Security Badge */}
              <div className="mt-6 pt-4 border-t border-bamboo/20 flex items-center gap-2 text-[11px] text-gray-400">
                <ShieldCheck className="w-4 h-4 text-emerald-light" />
                <span>Server dilindungi anti-DDOS, backup harian otomatis.</span>
              </div>
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
}
