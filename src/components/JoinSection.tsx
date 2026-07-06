import { useState } from "react";
import { siteConfig } from "../config/site";
import { Play, Copy, Check, Tablet, Monitor, Info } from "lucide-react";

export default function JoinSection() {
  const [copiedIp, setCopiedIp] = useState(false);
  const [copiedPortJava, setCopiedPortJava] = useState(false);
  const [copiedPortBedrock, setCopiedPortBedrock] = useState(false);

  const copyText = (text: string, setCopiedState: (v: boolean) => void) => {
    navigator.clipboard.writeText(text);
    setCopiedState(true);
    setTimeout(() => setCopiedState(false), 2000);
  };

  return (
    <section id="join" className="py-20 bg-forest-dark/30 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-charcoal-base via-transparent to-charcoal-base pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded bg-forest-moss/60 border border-bamboo/20 text-rice-gold text-xs font-bold tracking-widest uppercase">
            <Play className="w-4 h-4 text-rice-gold fill-current" />
            <span>Panduan Bermain</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-white tracking-tight">
            Cara Bergabung dengan <span className="text-rice-gold">Dusun SMP</span>
          </h2>
          <p className="text-gray-400 text-sm sm:text-base leading-relaxed">
            Dusun SMP mendukung crossplay. Kamu bisa masuk menggunakan Minecraft versi resmi (original) baik dari komputer maupun handphone.
          </p>
        </div>

        {/* Two-Column Join Guide */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
          
          {/* Column 1: PC Player (Java Edition) */}
          <div className="bg-gradient-to-b from-forest-moss/30 to-forest-dark/80 border border-bamboo/20 hover:border-bamboo/40 rounded-2xl p-6 sm:p-8 flex flex-col justify-between transition-all duration-300">
            <div>
              <div className="flex items-center gap-3 border-b border-bamboo/10 pb-4 mb-6">
                <div className="w-10 h-10 rounded-lg bg-forest-dark border border-bamboo/25 flex items-center justify-center text-rice-gold">
                  <Monitor className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white">Java Edition</h3>
                  <p className="text-xs text-gray-400">Untuk Pengguna Komputer / PC</p>
                </div>
              </div>

              {/* Steps */}
              <ol className="space-y-4 text-sm text-gray-300 pl-1 list-decimal list-inside marker:text-rice-gold marker:font-bold">
                <li>Buka launcher Minecraft kamu dan jalankan game versi <strong className="text-white">{siteConfig.server.version}</strong>.</li>
                <li>Pilih menu <strong className="text-white">Multiplayer</strong> kemudian klik tombol <strong className="text-white">Add Server</strong>.</li>
                <li>Masukkan nama bebas (misal: <strong className="text-white">Dusun SMP</strong>) pada bagian Server Name.</li>
                <li>Salin dan masukkan alamat IP di bawah pada kotak <strong className="text-white">Server Address</strong>.</li>
                <li>Klik <strong className="text-white">Done</strong>, lalu klik ganda pada server Dusun SMP untuk masuk!</li>
              </ol>
            </div>

            {/* Connection Details Badge */}
            <div className="mt-8 pt-6 border-t border-bamboo/10 space-y-3">
              <div className="flex items-center justify-between text-xs font-mono bg-forest-dark/80 px-3 py-2.5 rounded border border-bamboo/15">
                <span className="text-gray-400">Server IP:</span>
                <span className="font-bold text-white select-all">{siteConfig.server.ip}</span>
                <button
                  onClick={() => copyText(siteConfig.server.ip, setCopiedIp)}
                  className="text-rice-gold hover:text-white transition-colors cursor-pointer"
                  title="Salin Alamat IP"
                >
                  {copiedIp ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
                </button>
              </div>

              <div className="flex items-center justify-between text-xs font-mono bg-forest-dark/80 px-3 py-2.5 rounded border border-bamboo/15">
                <span className="text-gray-400">Default Port:</span>
                <span className="font-bold text-white">{siteConfig.server.portJava}</span>
                <button
                  onClick={() => copyText(String(siteConfig.server.portJava), setCopiedPortJava)}
                  className="text-rice-gold hover:text-white transition-colors cursor-pointer"
                  title="Salin Port Java"
                >
                  {copiedPortJava ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
                </button>
              </div>
            </div>
          </div>

          {/* Column 2: Mobile Player (Bedrock Edition) */}
          <div className="bg-gradient-to-b from-forest-moss/30 to-forest-dark/80 border border-bamboo/20 hover:border-bamboo/40 rounded-2xl p-6 sm:p-8 flex flex-col justify-between transition-all duration-300">
            <div>
              <div className="flex items-center gap-3 border-b border-bamboo/10 pb-4 mb-6">
                <div className="w-10 h-10 rounded-lg bg-forest-dark border border-bamboo/25 flex items-center justify-center text-rice-gold">
                  <Tablet className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white">Bedrock / PE Edition</h3>
                  <p className="text-xs text-gray-400">Untuk Android, iOS, iPad, & Konsol</p>
                </div>
              </div>

              {/* Steps */}
              <ol className="space-y-4 text-sm text-gray-300 pl-1 list-decimal list-inside marker:text-rice-gold marker:font-bold">
                <li>Buka game Minecraft Bedrock Edition (MCPE) di smartphone atau konsolmu.</li>
                <li>Klik tombol <strong className="text-white">Play</strong>, geser ke tab <strong className="text-white">Servers</strong>.</li>
                <li>Scroll ke bagian paling bawah, lalu klik tombol <strong className="text-white">Add Server</strong>.</li>
                <li>Masukkan Server Name: <strong className="text-white">Dusun SMP</strong>.</li>
                <li>Masukkan Server Address & Port khusus Bedrock di bawah dengan benar.</li>
                <li>Klik tombol <strong className="text-white">Save</strong> atau langsung <strong className="text-white">Play</strong>!</li>
              </ol>
            </div>

            {/* Connection Details Badge */}
            <div className="mt-8 pt-6 border-t border-bamboo/10 space-y-3">
              <div className="flex items-center justify-between text-xs font-mono bg-forest-dark/80 px-3 py-2.5 rounded border border-bamboo/15">
                <span className="text-gray-400">Server IP:</span>
                <span className="font-bold text-white select-all">{siteConfig.server.ip}</span>
                <button
                  onClick={() => copyText(siteConfig.server.ip, setCopiedIp)}
                  className="text-rice-gold hover:text-white transition-colors cursor-pointer"
                  title="Salin Alamat IP"
                >
                  {copiedIp ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
                </button>
              </div>

              <div className="flex items-center justify-between text-xs font-mono bg-forest-dark/80 px-3 py-2.5 rounded border border-bamboo/15">
                <span className="text-gray-400">Bedrock Port:</span>
                <span className="font-bold text-rice-gold font-bold">{siteConfig.server.portBedrock}</span>
                <button
                  onClick={() => copyText(String(siteConfig.server.portBedrock), setCopiedPortBedrock)}
                  className="text-rice-gold hover:text-white transition-colors cursor-pointer"
                  title="Salin Port Bedrock"
                >
                  {copiedPortBedrock ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
                </button>
              </div>
            </div>
          </div>

        </div>

        {/* Tip Box */}
        <div className="mt-12 max-w-xl mx-auto p-4 rounded bg-forest-dark/40 border border-bamboo/15 text-xs text-gray-400 flex items-start gap-2.5">
          <Info className="w-4 h-4 text-rice-gold shrink-0 mt-0.5" />
          <p className="leading-relaxed">
            <strong>Catatan Tambahan:</strong> Pastikan akun Minecraft kamu sudah login ke Xbox Live / Microsoft Account agar diizinkan mengakses fitur Multiplayer eksternal oleh sistem keamanan game.
          </p>
        </div>

      </div>
    </section>
  );
}
