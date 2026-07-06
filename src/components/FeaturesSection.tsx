import React from "react";
import { siteConfig } from "../config/site";
import { Coins, Layers, Home, Sparkles } from "lucide-react";

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Coins: Coins,
  Layers: Layers,
  Home: Home,
};

export default function FeaturesSection() {
  return (
    <section id="features" className="py-20 bg-forest-dark/30 relative overflow-hidden">
      {/* Visual background details */}
      <div className="absolute inset-0 bg-gradient-to-b from-charcoal-base via-transparent to-charcoal-base pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header Section */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded bg-forest-moss/60 border border-bamboo/20 text-rice-gold text-xs font-bold tracking-widest uppercase">
            <Sparkles className="w-4 h-4 text-rice-gold" />
            <span>Kelebihan Server</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-white tracking-tight">
            Fitur Utama <span className="text-rice-gold">Dusun SMP</span>
          </h2>
          <p className="text-gray-400 text-sm sm:text-base leading-relaxed">
            Semua fitur dirancang demi menciptakan petualangan bermain Minecraft yang menyenangkan, ramah, adil, dan kental dengan nilai kekeluargaan.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {siteConfig.features.map((feature) => {
            const IconComponent = iconMap[feature.icon] || Sparkles;

            return (
              <div
                key={feature.id}
                className="group relative bg-gradient-to-b from-forest-moss/40 to-forest-dark/80 hover:from-forest-moss/60 hover:to-forest-dark/95 border border-bamboo/25 hover:border-rice-gold/40 rounded-2xl p-6 sm:p-8 transition-all duration-300 backdrop-blur-sm hover:shadow-xl hover:shadow-forest-moss/30 overflow-hidden"
              >
                {/* Glow effect on hover */}
                <div className="absolute top-0 right-0 w-24 h-24 bg-rice-gold/5 blur-2xl rounded-full group-hover:bg-rice-gold/10 transition-colors pointer-events-none"></div>

                {/* Card Icon Header */}
                <div className="w-12 h-12 rounded-xl bg-forest-dark/80 border border-bamboo/30 flex items-center justify-center text-rice-gold mb-6 group-hover:scale-110 group-hover:bg-rice-gold group-hover:text-forest-dark transition-all duration-300">
                  <IconComponent className="w-6 h-6 stroke-[2px]" />
                </div>

                {/* Card Title */}
                <h3 className="text-xl font-serif font-bold text-white mb-3 group-hover:text-rice-gold transition-colors">
                  {feature.title}
                </h3>

                {/* Card Description */}
                <p className="text-gray-400 text-sm leading-relaxed group-hover:text-gray-300 transition-colors">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
