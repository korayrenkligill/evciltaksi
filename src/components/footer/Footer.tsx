import { Instagram, Mail, Phone } from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t border-slate-200/10 bg-zinc-800/90 backdrop-blur py-6">
      <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-slate-200">
        {/* Sol kısım */}
        <div className="text-center md:text-left">
          © {new Date().getFullYear()}{" "}
          <span className="font-semibold text-slate-100">Şirket Adı</span>. Tüm
          hakları saklıdır.
        </div>

        {/* Sağ kısım */}
        <div className="flex items-center gap-4">
          <a
            href="phone:info@ornek.com"
            className="hover:text-slate-900 transition-colors"
          >
            <Phone className="w-5 h-5" />
          </a>

          <a href="#" className="hover:text-slate-900 transition-colors">
            <Instagram className="w-5 h-5" />
          </a>
        </div>
      </div>
    </footer>
  );
}
