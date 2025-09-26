import { motion, easeOut } from "framer-motion";
import {
  ShieldCheck,
  Clock,
  LineChart,
  MapPin,
  CheckCircle2,
  Cpu,
  FileChartColumnIncreasing,
  Headset,
  Leaf,
  Sparkles,
  ArrowRight,
  CarFront,
  PawPrint,
} from "lucide-react";
import { Link } from "react-router-dom";

// Not: Header sende. Bu bileşeni <Header /> altına koy.
const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.2 },
  transition: { duration: 0.8, ease: easeOut, delay },
});

const card = {
  initial: { opacity: 0, y: 16, scale: 0.98 },
  whileInView: { opacity: 1, y: 0, scale: 1 },
  viewport: { once: true, amount: 0.2 },
  transition: { duration: 0.7, ease: easeOut },
};

export default function WhyUsPage() {
  return (
    <main className="relative bg-gradient-to-b from-zinc-900 via-zinc-900 to-zinc-950 text-zinc-100">
      {/* Subtle grain */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.06] mix-blend-screen"
        style={{
          backgroundImage:
            "url('data:image/svg+xml;utf8,<svg xmlns=%22http://www.w3.org/2000/svg%22 width=%2240%22 height=%2240%22 viewBox=%220 0 40 40%22><filter id=%22n%22><feTurbulence type=%22fractalNoise%22 baseFrequency=%220.9%22 numOctaves=%222%22 stitchTiles=%22stitch%22/></filter><rect width=%2240%22 height=%2240%22 filter=%22url(%23n)%22 opacity=%220.20%22 fill=%22white%22/></svg>')",
        }}
      />

      {/* ====== HERO / Neden Biz ====== */}
      <section className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 md:pt-20">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          <div>
            <motion.span
              {...fadeUp(0)}
              className="inline-flex items-center gap-2 bg-yellow-500/15 border border-yellow-500/30 text-yellow-300 px-3 py-1 rounded-full text-xs tracking-wide shadow-[0_0_30px_rgba(245,158,11,0.15)]"
            >
              <Sparkles className="w-4 h-4" /> Neden Biz?
            </motion.span>

            <motion.h1
              {...fadeUp(0.05)}
              className="mt-4 text-3xl md:text-4xl font-extrabold tracking-[-0.01em]"
            >
              Güvenli, şefkatli ve{" "}
              <span className="bg-gradient-to-r from-amber-400 via-yellow-300 to-amber-400 bg-clip-text text-transparent">
                dinamik Pet Taksi
              </span>
              .
            </motion.h1>

            <motion.p
              {...fadeUp(0.1)}
              className="mt-4 text-zinc-300 text-lg leading-relaxed"
            >
              Minik dostlarınızı klimalı ve hijyenik araçlarımızla veteriner,
              kuaför, havaalanı veya yeni yuvalarına güvenle ulaştırıyoruz. Yol
              boyunca fotoğraf/konum paylaşımıyla içiniz rahat.
            </motion.p>

            <motion.div {...fadeUp(0.15)} className="mt-6 flex flex-wrap gap-3">
              {[
                "Şefkatli sürücüler",
                "Kapıdan kapıya hizmet",
                "Anlık konum paylaşımı",
                "Kafes & kemer ekipmanları",
              ].map((t) => (
                <span
                  key={t}
                  className="rounded-full border border-zinc-700 bg-zinc-900/60 px-3 py-1.5 text-sm text-zinc-200"
                >
                  {t}
                </span>
              ))}
            </motion.div>

            <motion.div {...fadeUp(0.2)} className="mt-8 flex gap-3">
              <a
                href="#teklif"
                className="group bg-gradient-to-r from-amber-500 to-yellow-400 hover:from-amber-400 hover:to-yellow-300 text-zinc-900 font-semibold py-2.5 px-6 rounded-lg transition-all duration-300 shadow-md hover:shadow-yellow-500/20 border border-yellow-400/30"
              >
                <span className="inline-flex items-center gap-2">
                  Teklif Al
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </span>
              </a>
            </motion.div>
          </div>

          <motion.div
            {...fadeUp(0.1)}
            className="relative overflow-hidden rounded-2xl border border-zinc-800 shadow-md"
          >
            <img
              src="https://images.unsplash.com/photo-1543466835-00a7907e9de1?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0"
              alt="Pet taksi yolculuğu"
              className="w-full h-auto object-cover max-h-[360px]"
              loading="lazy"
            />
            <div className="absolute bottom-3 left-3 flex items-center gap-2 rounded-full bg-zinc-900/85 backdrop-blur px-3 py-1 text-xs border border-zinc-700 text-zinc-200">
              <FileChartColumnIncreasing className="w-4 h-4 text-yellow-300" />{" "}
              Konum & Fotoğraf Paylaşımı
            </div>
          </motion.div>
        </div>
      </section>

      {/* ====== Temel Ayrıştırıcılar (Değer Önerileri) ====== */}
      <section className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 md:py-14">
        <motion.h2 {...fadeUp(0)} className="text-2xl md:text-3xl font-bold">
          Bizi Ayrıcalıklı Kılan 6 Özellik
        </motion.h2>
        <div className="mt-6 grid md:grid-cols-3 gap-6">
          {[
            {
              icon: <ShieldCheck className="w-5 h-5" />,
              t: "Güvenli Taşıma",
              d: "Kafes, koltuk kemeri ve kaydırmaz tabanlarla emniyetli sürüş.",
            },
            {
              icon: <Clock className="w-5 h-5" />,
              t: "Zamanında Randevu",
              d: "Vet/kuaför saatlerini aksatmadan, planlı teslimat.",
            },
            {
              icon: <CarFront className="w-5 h-5" />,
              t: "Klimalı Araçlar",
              d: "Yaz/kış konforlu ve sessiz yolculuk.",
            },
            {
              icon: <PawPrint className="w-5 h-5" />,
              t: "Sevgiyle İlgi",
              d: "Dostların stresini azaltan şefkatli ekip.",
            },
            {
              icon: <MapPin className="w-5 h-5" />,
              t: "Şehir İçi/Dışı",
              d: "Kapıdan kapıya; havaalanı, otogar, klinik transfer.",
            },
            {
              icon: <Headset className="w-5 h-5" />,
              t: "7/24 Destek",
              d: "Yol boyunca anlık bilgilendirme ve iletişim.",
            },
          ].map((c, i) => (
            <motion.div
              key={c.t}
              {...card}
              transition={{ ...card.transition, delay: 0.05 * i }}
              className="group rounded-2xl border border-zinc-800 bg-zinc-900/60 backdrop-blur supports-[backdrop-filter]:bg-zinc-900/50 p-6 hover:border-yellow-400/50 hover:shadow-[0_0_0_1px_rgba(250,204,21,0.25)] transition-colors shadow-sm"
            >
              <div className="inline-flex items-center gap-2 text-yellow-300">
                {c.icon}
              </div>
              <h3 className="mt-2 text-xl font-semibold text-zinc-100">
                {c.t}
              </h3>
              <p className="mt-2 text-zinc-300">{c.d}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* MİSYON */}
      <section className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          <motion.div {...fadeUp(0)}>
            <span className="inline-flex items-center gap-2 bg-amber-500/15 border border-amber-400/30 text-amber-300 px-3 py-1 rounded-full text-xs">
              Misyon
            </span>
            <h2 className="mt-3 text-3xl md:text-4xl font-extrabold tracking-[-0.01em]">
              Dostlar için güvenli, konforlu ve ulaşılabilir yolculuk
            </h2>
            <p className="mt-4 text-zinc-300 text-lg leading-relaxed">
              Amacımız; evcil dostlarınızı stres yaratmadan, zamanında ve
              güvenle ulaştırmak. Sahiplerine şeffaf, dostlara sevgi dolu bir
              deneyim sunmak.
            </p>
            <ul className="mt-6 space-y-2">
              {[
                "Zamanında teslim sözü",
                "Fotoğraf/konum ile anlık bilgilendirme",
                "Kafes, su ve ped gibi hazır ekipman",
              ].map((b) => (
                <li key={b} className="flex items-start gap-2 text-zinc-300">
                  <CheckCircle2 className="mt-0.5 w-5 h-5 text-amber-300" /> {b}
                </li>
              ))}
            </ul>
          </motion.div>
          <motion.div
            {...fadeUp(0.05)}
            className="relative overflow-hidden rounded-2xl border border-zinc-800 shadow-md"
          >
            <img
              src="https://images.pexels.com/photos/34008191/pexels-photo-34008191.jpeg"
              alt="Pet taksi aracı içinde kedi/köpek"
              className="w-full h-auto object-cover max-h-[420px]"
              loading="lazy"
            />
            <div className="absolute bottom-3 left-3 flex items-center gap-2 rounded-full bg-zinc-900/85 backdrop-blur px-3 py-1 text-xs border border-zinc-700 text-zinc-200">
              <ShieldCheck className="w-4 h-4 text-amber-300" /> Özenli Taşıma
            </div>
          </motion.div>
        </div>
      </section>

      {/* VİZYON */}
      <section className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          <motion.div
            {...fadeUp(0.05)}
            className="order-2 lg:order-1 relative overflow-hidden rounded-2xl border border-zinc-800 shadow-md"
          >
            <img
              src="https://images.unsplash.com/photo-1517849845537-4d257902454a?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0"
              alt="Mutlu köpek yolculuk sonrası"
              className="w-full h-auto object-cover max-h-[420px]"
              loading="lazy"
            />
            <div className="absolute bottom-3 left-3 flex items-center gap-2 rounded-full bg-zinc-900/85 backdrop-blur px-3 py-1 text-xs border border-zinc-700 text-zinc-200">
              <LineChart className="w-4 h-4 text-yellow-300" /> Sürekli
              İyileştirme
            </div>
          </motion.div>

          <motion.div {...fadeUp(0)} className="order-1 lg:order-2">
            <span className="inline-flex items-center gap-2 bg-yellow-500/15 border border-yellow-400/30 text-yellow-300 px-3 py-1 rounded-full text-xs">
              Vizyon
            </span>
            <h2 className="mt-3 text-3xl md:text-4xl font-extrabold tracking-[-0.01em]">
              Şehrin güven veren, ulaşılabilir pet taksi ortağı olmak
            </h2>
            <p className="mt-4 text-zinc-300 text-lg leading-relaxed">
              Net iletişim, adil fiyatlandırma ve özenli taşıma ile sahiplerin
              gönül rahatlığı; dostların konforu.
            </p>
            <ul className="mt-6 space-y-2">
              {[
                "Şeffaf ve anlaşılır süreçler",
                "Mesafe & dakika bazlı adil fiyat",
                "Geri bildirimle sürekli gelişim",
              ].map((b) => (
                <li key={b} className="flex items-start gap-2 text-zinc-300">
                  <CheckCircle2 className="mt-0.5 w-5 h-5 text-yellow-300" />{" "}
                  {b}
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </section>

      {/* AMAÇ */}
      <section className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          <motion.div {...fadeUp(0)}>
            <span className="inline-flex items-center gap-2 bg-yellow-500/15 border border-yellow-400/30 text-yellow-300 px-3 py-1 rounded-full text-xs">
              Amaç
            </span>
            <h2 className="mt-3 text-3xl md:text-4xl font-extrabold tracking-[-0.01em]">
              Pet yolculuğunu kolay, hızlı ve güvenilir hale getirmek
            </h2>
            <p className="mt-4 text-zinc-300 text-lg leading-relaxed">
              Her transferi özenle, zamanında ve en uygun maliyetle
              gerçekleştirmek. Sahipler için basit adımlar; dostlar için
              konforlu araçlar.
            </p>
            <div className="mt-6 grid grid-cols-2 sm:grid-cols-4 gap-4">
              {[
                { k: "Konforlu", v: "Araçlar" },
                { k: "Şeffaf", v: "Fiyat" },
                { k: "Kolay", v: "Rezervasyon" },
                { k: "Anlık", v: "Takip" },
              ].map((s, i) => (
                <motion.div
                  key={s.v}
                  {...card}
                  transition={{ ...card.transition, delay: 0.05 * i }}
                  className="rounded-xl border border-zinc-800 bg-zinc-900/60 p-4 text-center shadow-sm"
                >
                  <div className="text-lg font-extrabold tracking-tight text-yellow-300">
                    {s.k}
                  </div>
                  <div className="text-zinc-400 text-xs mt-1">{s.v}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
          <motion.div
            {...fadeUp(0.05)}
            className="relative overflow-hidden rounded-2xl border border-zinc-800 shadow-md"
          >
            <img
              src="https://images.unsplash.com/photo-1525253013412-55c1a69a5738?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0"
              alt="Araç içinde güvenli pet taşıma"
              className="w-full h-auto object-cover max-h-[420px]"
              loading="lazy"
            />
            <div className="absolute bottom-3 left-3 flex items-center gap-2 rounded-full bg-zinc-900/85 backdrop-blur px-3 py-1 text-xs border border-zinc-700 text-zinc-200">
              <Clock className="w-4 h-4 text-yellow-300" /> Planlı Rotalar
            </div>
          </motion.div>
        </div>
      </section>

      {/* ====== Karşılaştırma Tablosu ====== */}
      <section className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pb-8 md:pb-12">
        <div className="mt-4 overflow-hidden rounded-2xl border border-zinc-800 bg-zinc-900 shadow-sm">
          {[
            { k: "Fiyatlama", b: "Şeffaf: mesafe + dakika" },
            { k: "Destek", b: "7/24 iletişim ve anlık takip" },
          ].map((r, i) => (
            <div
              key={r.k}
              className={`grid grid-cols-12 border-t border-zinc-800 ${
                i % 2 ? "bg-zinc-900/60" : "bg-zinc-900"
              }`}
            >
              <div className="col-span-5 p-3 text-zinc-300">{r.k}</div>
              <div className="col-span-4 p-3 text-yellow-300 font-medium">
                {r.b}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ====== Konfor & Hijyen ====== */}
      <section className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-10 md:pb-14">
        <motion.h3
          {...fadeUp(0)}
          className="text-2xl font-bold flex items-center gap-2"
        >
          <Leaf className="w-5 h-5 text-amber-300" /> Konfor & Hijyen
        </motion.h3>
        <div className="mt-4 grid md:grid-cols-3 gap-6">
          {[
            {
              t: "Hijyen Protokolü",
              d: "Her yolculuk sonrası araç içi temizlik ve dezenfeksiyon.",
            },
            {
              t: "Uyum",
              d: "Klinik kuralları ve yasal mevzuata uygun transfer.",
            },
            {
              t: "Ekipman",
              d: "Kafes, sabitleme kemeri, ped ve su kabı hazır.",
            },
          ].map((c, i) => (
            <motion.div
              key={c.t}
              {...card}
              transition={{ ...card.transition, delay: 0.05 * i }}
              className="rounded-2xl border border-zinc-800 bg-zinc-900 p-6 shadow-sm"
            >
              <div className="text-sm text-amber-300 font-medium">{c.t}</div>
              <p className="mt-2 text-zinc-300">{c.d}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ====== CTA Şeridi ====== */}
      <section className="relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
          <motion.div
            {...fadeUp(0)}
            className="rounded-2xl border border-zinc-800 bg-gradient-to-r from-zinc-900 to-zinc-950 p-6 md:p-8 flex flex-col md:flex-row items-center justify-between gap-4"
          >
            <div>
              <h4 className="text-xl md:text-2xl font-bold">
                Neden biz? Çünkü ölçüyor, paylaşıyor ve iyileştiriyoruz.
              </h4>
              <p className="text-zinc-300">
                İhtiyacınızı anlatın; rota ve zaman hedefleriyle net bir plan
                çıkaralım.
              </p>
            </div>
            <div className="flex gap-3">
              <a
                href="#teklif"
                className="group bg-gradient-to-r from-amber-500 to-yellow-400 hover:from-amber-400 hover:to-yellow-300 text-zinc-900 font-semibold py-2.5 px-6 rounded-lg transition-all duration-300 border border-yellow-400/30 shadow-md"
              >
                <span className="inline-flex items-center gap-2">
                  Teklif Al
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </span>
              </a>
              <Link
                to="/iletisim"
                className="bg-zinc-900 text-zinc-100 font-medium py-2.5 px-6 rounded-lg transition-all duration-300 border border-zinc-700 hover:bg-zinc-800"
              >
                İletişim
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
