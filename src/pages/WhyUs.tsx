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
    <main className="relative bg-gradient-to-b from-slate-50 via-white to-sky-50 text-slate-900">
      {/* Subtle grain */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "url('data:image/svg+xml;utf8,<svg xmlns=%22http://www.w3.org/2000/svg%22 width=%2240%22 height=%2240%22 viewBox=%220 0 40 40%22><filter id=%22n%22><feTurbulence type=%22fractalNoise%22 baseFrequency=%220.9%22 numOctaves=%222%22 stitchTiles=%22stitch%22/></filter><rect width=%2240%22 height=%2240%22 filter=%22url(%23n)%22 opacity=%220.25%22/></svg>')",
        }}
      />

      {/* ====== HERO / Neden Biz ====== */}
      <section className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 md:pt-20">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          <div>
            <motion.span
              {...fadeUp(0)}
              className="inline-flex items-center gap-2 bg-sky-50 border border-sky-100 text-sky-700 px-3 py-1 rounded-full text-xs tracking-wide shadow-[0_0_30px_rgba(56,189,248,0.15)]"
            >
              <Sparkles className="w-4 h-4" /> Neden Biz?
            </motion.span>

            <motion.h1
              {...fadeUp(0.05)}
              className="mt-4 text-3xl md:text-4xl font-extrabold tracking-[-0.01em]"
            >
              Genç, hızlı ve{" "}
              <span className="bg-gradient-to-r from-sky-600 via-sky-500 to-blue-600 bg-clip-text text-transparent">
                dinamik lojistik
              </span>
              .
            </motion.h1>

            <motion.p
              {...fadeUp(0.1)}
              className="mt-4 text-slate-700 text-lg leading-relaxed"
            >
              Büyük kurumsal prosedürlere takılmadan, pratik ve esnek çözümler
              sunuyoruz. Yüklerinizi zamanında ulaştırıyor, her adımda açık ve
              samimi iletişimle yanınızda oluyoruz.
            </motion.p>

            <motion.div {...fadeUp(0.15)} className="mt-6 flex flex-wrap gap-3">
              {[
                "Hızlı ve esnek çözümler",
                "Genç ve enerjik ekip",
                "Yakın müşteri iletişimi",
                "Özenli teslimatlar",
              ].map((t) => (
                <span
                  key={t}
                  className="rounded-full border border-slate-200 bg-white px-3 py-1.5 text-sm text-slate-700"
                >
                  {t}
                </span>
              ))}
            </motion.div>

            <motion.div {...fadeUp(0.2)} className="mt-8 flex gap-3">
              <a
                href="#teklif"
                className="group bg-gradient-to-r from-sky-500 to-blue-600 hover:from-sky-500 hover:to-blue-500 text-white font-semibold py-2.5 px-6 rounded-lg transition-all duration-300 shadow-md hover:shadow-sky-200 border border-sky-500/20"
              >
                <span className="inline-flex items-center gap-2">
                  Teklif Al
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </span>
              </a>
              <Link
                to="/hizmetlerimiz"
                className="bg-white text-slate-800 font-medium py-2.5 px-6 rounded-lg transition-all duration-300 border border-slate-300 hover:bg-slate-50"
              >
                Hizmetler
              </Link>
            </motion.div>
          </div>

          <motion.div
            {...fadeUp(0.1)}
            className="relative overflow-hidden rounded-2xl border border-slate-200 shadow-md"
          >
            <img
              src="https://images.pexels.com/photos/6169059/pexels-photo-6169059.jpeg"
              alt="Teslimat sürecinden bir kare"
              className="w-full h-auto object-cover max-h-[360px]"
              loading="lazy"
            />
            <div className="absolute bottom-3 left-3 flex items-center gap-2 rounded-full bg-white/90 backdrop-blur px-3 py-1 text-xs border border-slate-200">
              <FileChartColumnIncreasing className="w-4 h-4 text-sky-600" />{" "}
              Hızlı & Esnek Çözümler
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
              t: "Özenli Taşıma",
              d: "Her yükü kendi emanetimiz gibi koruyarak teslim ediyoruz.",
            },
            {
              icon: <Clock className="w-5 h-5" />,
              t: "Hızlı Geri Dönüş",
              d: "Taleplerinize kısa sürede yanıt veriyor, süreci bekletmeden başlatıyoruz.",
            },
            {
              icon: <LineChart className="w-5 h-5" />,
              t: "Pratik Süreçler",
              d: "Karmaşık prosedürler yerine sade ve anlaşılır adımlar sunuyoruz.",
            },
            {
              icon: <Cpu className="w-5 h-5" />,
              t: "Ulaşılabilirlik",
              d: "Telefon ya da mesajla kolayca bize ulaşabilir, anında bilgi alabilirsiniz.",
            },
            {
              icon: <MapPin className="w-5 h-5" />,
              t: "Yerel Güç",
              d: "Bölgeyi iyi tanıyor, mesafeleri ve yolları etkin kullanıyoruz.",
            },
            {
              icon: <Headset className="w-5 h-5" />,
              t: "Yakın İletişim",
              d: "Müşterilerimizle bire bir ilgileniyor, her soruya hızlıca dönüş yapıyoruz.",
            },
          ].map((c, i) => (
            <motion.div
              key={c.t}
              {...card}
              transition={{ ...card.transition, delay: 0.05 * i }}
              className="group rounded-2xl border border-slate-200 bg-white/90 backdrop-blur supports-[backdrop-filter]:bg-white/60 p-6 hover:border-sky-300/60 hover:shadow-lg transition-colors shadow-sm"
            >
              <div className="inline-flex items-center gap-2 text-sky-700">
                {c.icon}
              </div>
              <h3 className="mt-2 text-xl font-semibold">{c.t}</h3>
              <p className="mt-2 text-slate-600">{c.d}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* MİSYON */}
      <section className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          <motion.div {...fadeUp(0)}>
            <span className="inline-flex items-center gap-2 bg-emerald-50 border border-emerald-100 text-emerald-700 px-3 py-1 rounded-full text-xs">
              Misyon
            </span>
            <h2 className="mt-3 text-3xl md:text-4xl font-extrabold tracking-[-0.01em]">
              Hızlı, özenli ve ulaşılabilir lojistik hizmeti
            </h2>
            <p className="mt-4 text-slate-700 text-lg leading-relaxed">
              Amacımız; yüklerinizi zamanında ve güvenle ulaştırmak, süreci
              basit ve anlaşılır adımlarla yönetmek. Büyük vaatler yerine pratik
              çözümler ve yakın iletişimle yanınızdayız.
            </p>
            <ul className="mt-6 space-y-2">
              {[
                "Zamanında teslim sözü",
                "Küçük ve acil gönderiler için esnek çözümler",
                "Kolay iletişim ve hızlı dönüş",
              ].map((b) => (
                <li key={b} className="flex items-start gap-2 text-slate-700">
                  <CheckCircle2 className="mt-0.5 w-5 h-5 text-emerald-600" />{" "}
                  {b}
                </li>
              ))}
            </ul>
          </motion.div>
          <motion.div
            {...fadeUp(0.05)}
            className="relative overflow-hidden rounded-2xl border border-slate-200 shadow-md"
          >
            <img
              src="https://images.unsplash.com/photo-1587813369290-091c9d432daf?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Teslimat sürecinden bir kare"
              className="w-full h-auto object-cover max-h-[420px]"
              loading="lazy"
            />
            <div className="absolute bottom-3 left-3 flex items-center gap-2 rounded-full bg-white/90 backdrop-blur px-3 py-1 text-xs border border-slate-200">
              <ShieldCheck className="w-4 h-4 text-emerald-600" /> Özenli Teslim
            </div>
          </motion.div>
        </div>
      </section>

      {/* VİZYON */}
      <section className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          <motion.div
            {...fadeUp(0.05)}
            className="order-2 lg:order-1 relative overflow-hidden rounded-2xl border border-slate-200 shadow-md"
          >
            <img
              src="https://images.unsplash.com/photo-1639416943955-c1281e3c2da3?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Teslimat sürecinden bir kare"
              className="w-full h-auto object-cover max-h-[420px]"
              loading="lazy"
            />
            <div className="absolute bottom-3 left-3 flex items-center gap-2 rounded-full bg-white/90 backdrop-blur px-3 py-1 text-xs border border-slate-200">
              <LineChart className="w-4 h-4 text-sky-600" /> Sürekli İyileştirme
            </div>
          </motion.div>

          <motion.div {...fadeUp(0)} className="order-1 lg:order-2">
            <span className="inline-flex items-center gap-2 bg-sky-50 border border-sky-100 text-sky-700 px-3 py-1 rounded-full text-xs">
              Vizyon
            </span>
            <h2 className="mt-3 text-3xl md:text-4xl font-extrabold tracking-[-0.01em]">
              Yakın, hızlı ve güven veren lojistik ortağı olmak
            </h2>
            <p className="mt-4 text-slate-700 text-lg leading-relaxed">
              Amacımız; net iletişim, adil fiyatlandırma ve özenli teslimatla
              işletmelerin işini kolaylaştırmak. Büyürken sözümüzü tutan,
              ulaşılabilir ve pratik bir çözüm ortağı kalmak.
            </p>
            <ul className="mt-6 space-y-2">
              {[
                "Net ve anlaşılır süreçler",
                "Adil ve şeffaf fiyatlandırma",
                "Geri bildirimle sürekli gelişim",
              ].map((b) => (
                <li key={b} className="flex items-start gap-2 text-slate-700">
                  <CheckCircle2 className="mt-0.5 w-5 h-5 text-sky-600" /> {b}
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
            <span className="inline-flex items-center gap-2 bg-indigo-50 border border-indigo-100 text-indigo-700 px-3 py-1 rounded-full text-xs">
              Amaç
            </span>
            <h2 className="mt-3 text-3xl md:text-4xl font-extrabold tracking-[-0.01em]">
              Lojistiği kolay, hızlı ve güvenilir hale getirmek
            </h2>
            <p className="mt-4 text-slate-700 text-lg leading-relaxed">
              Amacımız; her gönderiyi özenle, zamanında ve uygun maliyetle
              ulaştırmak. Karmaşık süreçler yerine pratik adımlar ve yakın
              iletişimle iş ortaklarımızın yükünü hafifletmek.
            </p>
            <div className="mt-6 grid grid-cols-2 sm:grid-cols-4 gap-4">
              {[
                { k: "Hızlı", v: "Teslimatlar" },
                { k: "Özenli", v: "Taşıma" },
                { k: "Kolay", v: "İletişim" },
                { k: "Adil", v: "Fiyatlar" },
              ].map((s, i) => (
                <motion.div
                  key={s.v}
                  {...card}
                  transition={{ ...card.transition, delay: 0.05 * i }}
                  className="rounded-xl border border-slate-200 bg-white/90 p-4 text-center shadow-sm"
                >
                  <div className="text-lg font-extrabold tracking-tight">
                    {s.k}
                  </div>
                  <div className="text-slate-600 text-xs mt-1">{s.v}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
          <motion.div
            {...fadeUp(0.05)}
            className="relative overflow-hidden rounded-2xl border border-slate-200 shadow-md"
          >
            <img
              src="https://images.unsplash.com/photo-1573209680076-bd7ec7007616?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Teslimat sürecinden bir kare"
              className="w-full h-auto object-cover max-h-[420px]"
              loading="lazy"
            />
            <div className="absolute bottom-3 left-3 flex items-center gap-2 rounded-full bg-white/90 backdrop-blur px-3 py-1 text-xs border border-slate-200">
              <Clock className="w-4 h-4 text-indigo-600" /> Pratik Çözümler
            </div>
          </motion.div>
        </div>
      </section>

      {/* ====== Karşılaştırma Tablosu ====== */}
      <section className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pb-8 md:pb-12">
        <div className="mt-4 overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
          {[
            { k: "Fiyatlama", b: "Dinamik & hacme göre avantaj" },
            { k: "Destek", b: "7/24 operasyon hattı" },
          ].map((r, i) => (
            <div
              key={r.k}
              className={`grid grid-cols-12 border-t border-slate-200 ${
                i % 2 ? "bg-slate-50/60" : "bg-white"
              }`}
            >
              <div className="col-span-5 p-3">{r.k}</div>
              <div className="col-span-4 p-3 text-sky-700 font-medium">
                {r.b}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ====== Sürdürülebilirlik & Uyum ====== */}
      <section className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-10 md:pb-14">
        <motion.h3
          {...fadeUp(0)}
          className="text-2xl font-bold flex items-center gap-2"
        >
          <Leaf className="w-5 h-5 text-emerald-600" /> Sürdürülebilirlik & Uyum
        </motion.h3>
        <div className="mt-4 grid md:grid-cols-3 gap-6">
          {[
            {
              t: "Yakıt Verimliliği",
              d: "Optimizasyon ile km başına emisyonu düşürme.",
            },
            {
              t: "Uyum",
              d: "ISO 9001/27001 ve yasal mevzuata uygun operasyon.",
            },
            {
              t: "Atık Yönetimi",
              d: "Depolarda geri dönüşüm ve tek kullanımlık azaltımı.",
            },
          ].map((c, i) => (
            <motion.div
              key={c.t}
              {...card}
              transition={{ ...card.transition, delay: 0.05 * i }}
              className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm"
            >
              <div className="text-sm text-emerald-700 font-medium">{c.t}</div>
              <p className="mt-2 text-slate-700">{c.d}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ====== CTA Şeridi ====== */}
      <section className="relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
          <motion.div
            {...fadeUp(0)}
            className="rounded-2xl border border-slate-200 bg-gradient-to-r from-sky-50 to-blue-50 p-6 md:p-8 flex flex-col md:flex-row items-center justify-between gap-4"
          >
            <div>
              <h4 className="text-xl md:text-2xl font-bold">
                Neden biz? Çünkü ölçüyoruz ve iyileştiriyoruz.
              </h4>
              <p className="text-slate-600">
                İhtiyaçlarınızı paylaşın; KPI hedefleriyle net bir yol haritası
                çıkaralım.
              </p>
            </div>
            <div className="flex gap-3">
              <a
                href="#teklif"
                className="group bg-gradient-to-r from-sky-500 to-blue-600 hover:from-sky-500 hover:to-blue-500 text-white font-semibold py-2.5 px-6 rounded-lg transition-all duration-300 border border-sky-500/20 shadow-md"
              >
                <span className="inline-flex items-center gap-2">
                  Teklif Al
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </span>
              </a>
              <Link
                to="/iletisim"
                className="bg-white text-slate-800 font-medium py-2.5 px-6 rounded-lg transition-all duration-300 border border-slate-300 hover:bg-slate-50"
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
