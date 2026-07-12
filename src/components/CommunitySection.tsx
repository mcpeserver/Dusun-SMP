import { siteConfig } from "../config/site";
import { Users, MessageSquare, ArrowRight } from "lucide-react";
import { DeveloperData } from "../types";

interface CommunitySectionProps {
  devData: DeveloperData | null;
}

export default function CommunitySection({ devData }: CommunitySectionProps) {
  // Ambil link secara dinamis dari API dengan fallback aman dari siteConfig
  const discordLink = devData?.community.discord || siteConfig.links.discord;
  const whatsappLink = devData?.community.website || siteConfig.links.whatsapp;
  const communityName = devData?.community.name || "Komunitas Warga";

  return (
    <section id="community" className="py-20 bg-charcoal-base relative overflow-hidden">
      {/* Dynamic decorative backdrop blurs */}
      <div className="absolute top-1/4 right-0 w-96 h-96 rounded-full bg-forest-moss/10 blur-[130px] pointer-events-none"></div>
      <div className="absolute bottom-1/4 left-0 w-96 h-96 rounded-full bg-rice-gold/5 blur-[130px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Title */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded bg-forest-moss/60 border border-bamboo/20 text-rice-gold text-xs font-bold tracking-widest uppercase">
            <Users className="w-4 h-4 text-rice-gold" />
            <span>Komunitas Server</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-white tracking-tight">
            Mari Bergabung di <span className="text-rice-gold">Grup Warga</span>
          </h2>
          <p className="text-gray-400 text-sm sm:text-base leading-relaxed">
            Dapatkan teman baru, bentuk aliansi dusun, diskusikan harga jual koin, atau berdagang item langsung dengan bergabung di jaringan sosial resmi kami.
          </p>
        </div>

        {/* Community Channel Options */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          
          {/* Card 1: Discord Community */}
          <div className="group relative bg-gradient-to-br from-[#1d223a] to-charcoal-base border border-[#5865F2]/20 hover:border-[#5865F2]/50 rounded-2xl p-6 sm:p-8 transition-all duration-300 shadow-lg shadow-black/40 flex flex-col justify-between">
            <div>
              {/* Icon & Label */}
              <div className="flex items-center justify-between mb-6">
                <div className="w-12 h-12 rounded-xl bg-[#5865F2]/10 border border-[#5865F2]/30 flex items-center justify-center text-[#5865F2]">
                  <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
                    <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028c.462-.63.874-1.295 1.226-1.994.021-.041.001-.09-.041-.106a13.094 13.094 0 0 1-1.873-.894.077.077 0 0 1-.008-.128c.126-.093.252-.19.372-.287a.075.075 0 0 1 .077-.011c3.92 1.793 8.18 1.793 12.061 0a.073.073 0 0 1 .078.009c.12.099.246.195.373.289a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.894.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.156-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.156 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.156-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.156 2.418z" />
                  </svg>
                </div>
                <span className="text-[10px] font-mono tracking-wider font-bold text-[#5865F2] uppercase bg-[#5865F2]/10 border border-[#5865F2]/20 px-2 py-0.5 rounded">
                  Voice & Forum
                </span>
              </div>

              {/* Title & Desc */}
              <h3 className="text-xl font-bold text-white mb-2 group-hover:text-[#5865F2] transition-colors">
                Discord Warga
              </h3>
              <p className="text-gray-400 text-sm leading-relaxed mb-6">
                Tempat berkumpul utama para warga. Ngobrol via voice channel saat bermain, berpartisipasi dalam sayembara dusun, melaporkan pemain yang melanggar aturan, atau mengajukan usulan ide pembangunan server.
              </p>
            </div>

            {/* Action Link */}
            <a
              href={discordLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-between w-full mt-4 px-5 py-3 rounded-lg bg-[#5865F2] hover:bg-[#4752C4] text-white font-bold text-sm transition-all duration-300 shadow-md cursor-pointer"
            >
              <span>Bergabung di Discord</span>
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>

          {/* Card 2: WhatsApp Community */}
          <div className="group relative bg-gradient-to-br from-[#122e23] to-charcoal-base border border-emerald-500/20 hover:border-emerald-500/50 rounded-2xl p-6 sm:p-8 transition-all duration-300 shadow-lg shadow-black/40 flex flex-col justify-between">
            <div>
              {/* Icon & Label */}
              <div className="flex items-center justify-between mb-6">
                <div className="w-12 h-12 rounded-xl bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-light">
                  <MessageSquare className="w-6 h-6" />
                </div>
                <span className="text-[10px] font-mono tracking-wider font-bold text-emerald-light uppercase bg-emerald-500/10 border border-emerald-500/20 px-2 py-0.5 rounded">
                  Chat & Dagang
                </span>
              </div>

              {/* Title & Desc */}
              <h3 className="text-xl font-bold text-white mb-2 group-hover:text-emerald-light transition-colors">
                Grup Komunitas Warga
              </h3>
              <p className="text-gray-400 text-sm leading-relaxed mb-6">
                Saluran resmi <strong className="text-white font-semibold">{communityName}</strong> yang praktis. Sangat cocok untuk mengobrol santai sehari-hari, berdagang koin dusun secara kasual, mengirim foto screenshot bangunanmu, atau sekadar menyapa sesama warga.
              </p>
            </div>

            {/* Action Link */}
            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-between w-full mt-4 px-5 py-3 rounded-lg bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-sm transition-all duration-300 shadow-md cursor-pointer"
            >
              <span>Kunjungi Media Komunitas</span>
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>

        </div>

      </div>
    </section>
  );
}
