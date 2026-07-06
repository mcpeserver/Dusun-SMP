import { useEffect, useState } from "react";
import { Code, MessageSquare, Briefcase, Users, ExternalLink } from "lucide-react";
import { DeveloperData } from "../types";

export default function DeveloperBar() {
  const [devData, setDevData] = useState<DeveloperData | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://raw.githubusercontent.com/mcpeserver/MyAPI/main/config.json")
      .then((res) => {
        if (!res.ok) throw new Error("Failed to fetch dev config");
        return res.json();
      })
      .then((data: DeveloperData) => {
        setDevData(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error loading developer data:", err);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <div className="w-full bg-forest-dark/80 backdrop-blur-md border-b border-bamboo/20 py-1.5 px-4 text-xs font-mono text-gray-400 flex items-center justify-between h-8 animate-pulse">
        <div className="flex items-center gap-2">
          <Code className="w-3.5 h-3.5 text-rice-gold animate-spin" />
          <span>Mengambil data developer...</span>
        </div>
      </div>
    );
  }

  // Fallback data in case of fetch failure (using standard schema)
  const data = devData || {
    name: "Ran Dev",
    contact: {
      phone: "0895602592430",
      whatsapp: "0895602592430"
    },
    community: {
      name: "Ran Dev Community",
      website: "https://community.randev.com",
      discord: "https://discord.gg/9KUN2byKRM"
    },
    website: {
      portfolio: "https://sfl.gl/x2ic"
    }
  };

  const whatsappUrl = `https://wa.me/${data.contact.whatsapp}`;

  return (
    <div className="w-full bg-forest-dark/95 border-b border-bamboo/20 py-1.5 px-4 text-[11px] sm:text-xs font-medium text-gray-300 flex flex-col md:flex-row items-center justify-between gap-2 z-50">
      {/* Bagian Kiri: Info Developer */}
      <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4">
        <div className="flex items-center gap-1.5 text-rice-gold font-semibold">
          <Code className="w-3.5 h-3.5" />
          <span>Developed by {data.name}</span>
        </div>

        <span className="text-gray-600 hidden sm:inline">|</span>

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
          href={data.website.portfolio}
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
          href={data.community.website}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-1 hover:text-leaf-green transition-colors"
          title="Kunjungi Komunitas Developer"
        >
          <Users className="w-3 h-3 text-leaf-green" />
          <span>{data.community.name}</span>
        </a>
      </div>

      {/* Bagian Kanan: Tombol Lihat Server Lain */}
      <div className="flex items-center">
        <a
          href={data.website.portfolio}
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
