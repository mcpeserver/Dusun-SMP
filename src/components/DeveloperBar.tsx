import { Code, MessageSquare, Briefcase, Users, ExternalLink } from "lucide-react";
import { DeveloperData } from "../types";

interface DeveloperBarProps {
  devData: DeveloperData;
}

export default function DeveloperBar({ devData }: DeveloperBarProps) {
  const whatsappUrl = `https://wa.me/${devData.contact.whatsapp}`;

  return (
    <div className="hidden md:flex w-full bg-forest-dark/95 border-b border-bamboo/20 py-1.5 px-4 text-[11px] sm:text-xs font-medium text-gray-300 items-center justify-between gap-2 z-50">
      {/* Bagian Kiri: Info Developer */}
      <div className="flex flex-wrap items-center gap-3 sm:gap-4">
        <div className="flex items-center gap-1.5 text-rice-gold font-semibold">
          <Code className="w-3.5 h-3.5" />
          <span>Developed by {devData.name}</span>
        </div>

        <span className="text-gray-600">|</span>

        {/* WhatsApp Badge */}
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-1 hover:text-emerald-light transition-colors"
          title="Hubungi Developer via WhatsApp"
        >
          <MessageSquare className="w-3 h-3 text-emerald-light" />
          <span>WhatsApp</span>
        </a>

        {/* Portfolio Badge */}
        <a
          href={devData.website.portfolio}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-1 hover:text-rice-gold transition-colors"
          title="Lihat Portfolio Developer"
        >
          <Briefcase className="w-3 h-3 text-rice-gold" />
          <span>Portfolio</span>
        </a>

        {/* Developer Community Badge */}
        <a
          href={devData.community.website}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-1 hover:text-leaf-green transition-colors"
          title="Kunjungi Komunitas Developer"
        >
          <Users className="w-3 h-3 text-leaf-green" />
          <span>{devData.community.name}</span>
        </a>
      </div>

      {/* Bagian Kanan: Tombol Lihat Server Lain */}
      <div className="flex items-center">
        <a
          href={devData.website.portfolio}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded bg-forest-moss hover:bg-forest-olive text-rice-gold hover:text-white border border-bamboo/30 hover:border-rice-gold transition-all font-semibold tracking-wide text-[10px] sm:text-[11px] cursor-pointer"
        >
          <span>Lihat Website Server Lain</span>
          <ExternalLink className="w-2.5 h-2.5" />
        </a>
      </div>
    </div>
  );
}
