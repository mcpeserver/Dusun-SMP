import { useState } from "react";
import { motion } from "motion/react";
import { siteConfig } from "../config/site";
import { Copy, Check, MessageSquare } from "lucide-react";

export default function Hero() {
  const [copied, setCopied] = useState(false);

  const handleCopyIp = () => {
    navigator.clipboard.writeText(siteConfig.server.ip);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section
      id="home"
      className="relative min-h-[90vh] flex items-center justify-center overflow-hidden py-16 px-4"
    >
      {/* Background Hero Image with dark overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="/hero-bg.jpg"
          alt="Dusun SMP Minecraft Village Landscape"
          className="w-full h-full object-cover object-center scale-105"
          referrerPolicy="no-referrer"
        />
        {/* Dark warm natural overlay to preserve contrast and text readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-charcoal-base/90 via-forest-dark/85 to-charcoal-base"></div>
      </div>

      {/* Hero Content */}
      <div className="relative z-10 max-w-4xl mx-auto text-center flex flex-col items-center">
        {/* Logo with floating, scale, and glow animation */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{
            opacity: 1,
            scale: 1,
            y: [0, -10, 0],
          }}
          transition={{
            opacity: { duration: 0.8 },
            scale: { duration: 0.8 },
            y: {
              duration: 5,
              repeat: Infinity,
              ease: "easeInOut",
            },
          }}
          className="mb-6 relative group"
        >
          {/* Soft glow indicator behind the logo */}
          <div className="absolute inset-0 -m-2 rounded-full bg-rice-gold/10 blur-xl opacity-70 group-hover:opacity-100 transition-opacity duration-500"></div>
          <img
            src="/logo.jpg"
            alt="Dusun SMP Official Logo"
            className="w-36 h-36 sm:w-44 sm:h-44 object-contain filter drop-shadow-[0_8px_24px_rgba(0,0,0,0.6)] relative z-10"
            referrerPolicy="no-referrer"
          />
        </motion.div>

        {/* Tagline Badge */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-wood-brown/80 border border-bamboo/40 text-rice-gold text-xs sm:text-sm font-bold tracking-wider uppercase mb-4 shadow-md"
        >
          <span className="inline-block w-1.5 h-1.5 rounded-full bg-rice-gold animate-pulse"></span>
          {siteConfig.tagline}
        </motion.div>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-4xl sm:text-5xl md:text-6xl font-serif font-extrabold text-white tracking-tight leading-tight mb-4"
        >
          Selamat Datang di <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-rice-gold via-emerald-light to-leaf-green">
            {siteConfig.name}
          </span>
        </motion.h1>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-sm sm:text-base md:text-lg text-gray-300 max-w-2xl leading-relaxed mb-8 font-medium"
        >
          {siteConfig.description}
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full px-4"
        >
          {/* Main Action: Copy IP */}
          <button
            onClick={handleCopyIp}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-lg bg-gradient-to-r from-rice-gold to-yellow-600 text-forest-dark font-extrabold text-sm uppercase tracking-wider transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-rice-gold/20 active:scale-95 cursor-pointer"
          >
            {copied ? (
              <>
                <Check className="w-5 h-5 text-forest-dark stroke-[3px]" />
                <span>IP Disalin!</span>
              </>
            ) : (
              <>
                <Copy className="w-5 h-5 text-forest-dark stroke-[2.5px]" />
                <span>Mulai Bermain (Salin IP)</span>
              </>
            )}
          </button>

          {/* Discord CTA */}
          <a
            href={siteConfig.links.discord}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-lg bg-[#5865F2] hover:bg-[#4752C4] text-white font-bold text-sm uppercase tracking-wide transition-all duration-300 transform hover:scale-105 shadow-md active:scale-95 cursor-pointer"
          >
            {/* Custom Discord icon using Lucide wrapper or styled span */}
            <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
              <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028c.462-.63.874-1.295 1.226-1.994.021-.041.001-.09-.041-.106a13.094 13.094 0 0 1-1.873-.894.077.077 0 0 1-.008-.128c.126-.093.252-.19.372-.287a.075.075 0 0 1 .077-.011c3.92 1.793 8.18 1.793 12.061 0a.073.073 0 0 1 .078.009c.12.099.246.195.373.289a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.894.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.156-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.156 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.156-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.156 2.418z" />
            </svg>
            <span>Gabung Discord</span>
          </a>

          {/* WhatsApp CTA */}
          <a
            href={siteConfig.links.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-lg bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-sm uppercase tracking-wide transition-all duration-300 transform hover:scale-105 shadow-md active:scale-95 cursor-pointer"
          >
            <MessageSquare className="w-5 h-5 text-white" />
            <span>Gabung WhatsApp</span>
          </a>
        </motion.div>
      </div >

      {/* Forest Silhoutte fade at the bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-charcoal-base to-transparent z-0 pointer-events-none"></div>
    </section >
  );
}
