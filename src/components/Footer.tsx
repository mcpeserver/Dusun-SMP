import { useEffect, useState } from "react";
import { Code, MessageSquare, Briefcase, Users, HelpCircle } from "lucide-react";
import { DeveloperData } from "../types";

export default function Footer() {
  const [devData, setDevData] = useState<DeveloperData | null>(null);

  useEffect(() => {
    fetch("https://raw.githubusercontent.com/mcpeserver/MyAPI/main/config.json")
      .then((res) => {
        if (!res.ok) throw new Error();
        return res.json();
      })
      .then((data: DeveloperData) => {
        setDevData(data);
      })
      .catch((err) => {
        console.error("Error loading footer dev data:", err);
      });
  }, []);

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

  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-forest-dark border-t border-bamboo/20 py-10 px-4">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          
          {/* Bagian Kiri: Copyright Dusun SMP (Dominan) */}
          <div className="text-center md:text-left space-y-2">
            <div className="flex items-center justify-center md:justify-start gap-2.5">
              <img
                src="/logo.png"
                alt="Logo Dusun SMP"
                className="w-6 h-6 object-contain rounded-md"
                referrerPolicy="no-referrer"
              />
              <span className="font-serif font-bold text-base text-white tracking-wide">
                Dusun SMP
              </span>
            </div>
            <p className="text-xs text-gray-400">
              &copy; {currentYear} Dusun SMP Minecraft Server. All Rights Reserved.
            </p>
            <p className="text-[10px] text-gray-500 max-w-md">
              Dusun SMP adalah server Minecraft independen dan tidak terafiliasi secara resmi dengan Mojang Studios, Microsoft, atau pengembang Minecraft lainnya.
            </p>
          </div>

          {/* Bagian Kanan: Developer Information (Kecil, Tidak Dominan) */}
          <div className="flex flex-col items-center md:items-end gap-2.5 bg-forest-moss/20 border border-bamboo/10 rounded-lg p-3.5 max-w-sm w-full md:w-auto">
            <div className="flex items-center gap-1 text-[10px] text-gray-400 font-bold uppercase tracking-wider">
              <Code className="w-3 h-3 text-rice-gold" />
              <span>Developer Information</span>
            </div>
            
            <div className="text-[11px] text-gray-300 text-center md:text-right">
              Website dibuat oleh <strong className="text-white font-semibold">{data.name}</strong>
            </div>

            {/* Links */}
            <div className="flex flex-wrap justify-center md:justify-end gap-x-3 gap-y-1.5 text-[10px] text-gray-400">
              <a
                href={`https://wa.me/${data.contact.whatsapp}`}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-emerald-light transition-colors flex items-center gap-0.5"
              >
                <MessageSquare className="w-2.5 h-2.5 text-emerald-light" />
                <span>WhatsApp</span>
              </a>

              <span className="text-gray-600">|</span>

              <a
                href={data.website.portfolio}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-rice-gold transition-colors flex items-center gap-0.5"
              >
                <Briefcase className="w-2.5 h-2.5 text-rice-gold" />
                <span>Portfolio</span>
              </a>

              <span className="text-gray-600">|</span>

              <a
                href={data.community.website}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-leaf-green transition-colors flex items-center gap-0.5"
              >
                <Users className="w-2.5 h-2.5 text-leaf-green" />
                <span>Community</span>
              </a>

              <span className="text-gray-600">|</span>

              <a
                href={data.community.discord}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white transition-colors flex items-center gap-0.5"
              >
                <HelpCircle className="w-2.5 h-2.5 text-[#5865F2]" />
                <span>Discord</span>
              </a>
            </div>
          </div>

        </div>
      </div>
    </footer>
  );
}
