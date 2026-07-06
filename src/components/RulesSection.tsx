import { siteConfig } from "../config/site";
import { Heart, ShieldAlert, Lock, Zap, Leaf, Scale, CheckCircle } from "lucide-react";

// Map rule indices to specific Lucide icons for high-quality representation
const ruleIcons = [
  Heart,       // Rule 1: Hormat / Respect
  ShieldAlert, // Rule 2: Anti-Griefing
  Lock,        // Rule 3: Anti-Mencuri
  Zap,         // Rule 4: No Cheat
  Leaf,        // Rule 5: Kelestarian Alam
];

export default function RulesSection() {
  return (
    <section id="rules" className="py-20 bg-charcoal-base relative overflow-hidden">
      {/* Decorative nature blurs */}
      <div className="absolute top-1/2 left-10 w-80 h-80 rounded-full bg-forest-moss/10 blur-[100px] pointer-events-none"></div>
      <div className="absolute bottom-0 right-10 w-80 h-80 rounded-full bg-bamboo/10 blur-[100px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Heading */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded bg-forest-moss/60 border border-bamboo/20 text-rice-gold text-xs font-bold tracking-widest uppercase">
            <Scale className="w-4 h-4 text-rice-gold" />
            <span>Tata Tertib Dusun</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-white tracking-tight">
            Aturan Resmi <span className="text-rice-gold">Dusun SMP</span>
          </h2>
          <p className="text-gray-400 text-sm sm:text-base leading-relaxed">
            Demi kenyamanan, kedamaian, dan keharmonisan hidup bertetangga, seluruh warga Dusun SMP wajib menaati tata tertib di bawah ini.
          </p>
        </div>

        {/* Rules Layout (Modern Cards with Auto Numbers & Dedicated Icons) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {siteConfig.rules.map((rule, index) => {
            const IconComponent = ruleIcons[index] || CheckCircle;
            const numberString = String(index + 1).padStart(2, "0");

            return (
              <div
                key={index}
                className="bg-gradient-to-br from-forest-dark/90 to-charcoal-base border border-bamboo/20 hover:border-rice-gold/40 rounded-xl p-6 transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  {/* Card Header: Auto Number & Icon */}
                  <div className="flex items-center justify-between mb-5">
                    <span className="text-xs font-mono font-bold text-rice-gold bg-rice-gold/10 border border-rice-gold/25 rounded px-2.5 py-0.5">
                      PASAL {numberString}
                    </span>
                    <div className="w-10 h-10 rounded-lg bg-forest-moss/60 border border-bamboo/20 flex items-center justify-center text-rice-gold group-hover:bg-rice-gold group-hover:text-forest-dark transition-all duration-300">
                      <IconComponent className="w-5 h-5 stroke-[2px]" />
                    </div>
                  </div>

                  {/* Pasalnya */}
                  <h3 className="text-lg font-serif font-bold text-white mb-2 group-hover:text-rice-gold transition-colors">
                    {rule.title}
                  </h3>
                  
                  {/* Deskripsi Aturan */}
                  <p className="text-gray-400 text-sm leading-relaxed group-hover:text-gray-300 transition-colors">
                    {rule.description}
                  </p>
                </div>

                {/* Micro border visual feedback */}
                <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-bamboo/20 to-transparent mt-6 group-hover:via-rice-gold/20 transition-all duration-500"></div>
              </div>
            );
          })}
        </div>

        {/* Dynamic Warning Message at the Bottom */}
        <div className="mt-12 p-5 rounded-xl bg-forest-moss/20 border border-bamboo/30 max-w-3xl mx-auto flex flex-col sm:flex-row items-center gap-4 text-center sm:text-left">
          <ShieldAlert className="w-10 h-10 text-rice-gold shrink-0 animate-pulse" />
          <div className="space-y-1">
            <h4 className="font-bold text-white text-sm">Ketegasan Sanksi Administrasi Dusun</h4>
            <p className="text-gray-300 text-xs leading-relaxed">
              Pelanggaran terhadap tata tertib di atas akan ditindak tegas oleh Kepala Dusun / Staf melalui sanksi peringatan, denda koin, sita lahan, hingga pembatasan izin tinggal permanen (Banned).
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}
