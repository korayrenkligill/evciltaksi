import { motion, easeOut } from "framer-motion";
import {
  Truck,
  MapPin,
  ShieldCheck,
  Clock,
  ArrowRight,
  CheckCircle2,
  Phone,
  DollarSign,
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

export default function KarayoluTasimaDetayPage() {
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

      {/* ====== HERO ====== */}
      <section className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 md:pt-20">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          <div>
            <motion.span
              {...fadeUp(0)}
              className="inline-flex items-center gap-2 bg-sky-50 border border-sky-100 text-sky-700 px-3 py-1 rounded-full text-xs tracking-wide shadow-[0_0_30px_rgba(56,189,248,0.15)]"
            >
              <Truck className="w-4 h-4" /> Kara Yolu Taşımacılığı
            </motion.span>

            <motion.h1
              {...fadeUp(0.05)}
              className="mt-4 text-3xl md:text-4xl font-extrabold tracking-[-0.01em]"
            >
              Güvenli taşıma, uygun maliyet, zamanında teslim.
            </motion.h1>

            <motion.p
              {...fadeUp(0.1)}
              className="mt-4 text-slate-700 text-lg leading-relaxed"
            >
              Komple ya da parça yük fark etmeksizin, yüklerinizi özenle alıyor
              ve istediğiniz adrese zamanında ulaştırıyoruz. Küçük gönderilerden
              acil teslimatlara kadar esnek çözümler sunuyoruz.
            </motion.p>

            <motion.div {...fadeUp(0.15)} className="mt-6 flex flex-wrap gap-3">
              {[
                "Komple & Parsiyel Taşıma",
                "Uygun Fiyatlı Çözümler",
                "Zamanında Teslimat",
              ].map((t) => (
                <span
                  key={t}
                  className="rounded-full border border-slate-200 bg-white px-3 py-1.5 text-sm text-slate-700"
                >
                  {t}
                </span>
              ))}
            </motion.div>
          </div>

          <motion.div
            {...fadeUp(0.1)}
            className="relative overflow-hidden rounded-2xl border border-slate-200 shadow-md"
          >
            <img
              src="https://images.pexels.com/photos/2199293/pexels-photo-2199293.jpeg"
              alt="Kara yolu taşımacılığı"
              className="w-full h-auto object-cover max-h-[360px]"
              loading="lazy"
            />
            <div className="absolute bottom-3 left-3 flex items-center gap-2 rounded-full bg-white/90 backdrop-blur px-3 py-1 text-xs border border-slate-200">
              <ShieldCheck className="w-4 h-4 text-emerald-600" /> Özenli Taşıma
            </div>
          </motion.div>
        </div>
      </section>

      {/* ====== Şirketimiz Kara yolunda Ne Sağlar? ====== */}
      <section className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 md:py-14">
        <motion.h2 {...fadeUp(0)} className="text-2xl md:text-3xl font-bold">
          Karayolu Taşımacılığında Neler Sunuyoruz?
        </motion.h2>
        <div className="mt-6 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            {
              t: "Komple & Parsiyel Taşıma",
              d: "İhtiyacınıza göre küçük ya da büyük gönderiler için esnek çözümler.",
              icon: <Truck className="w-5 h-5 text-slate-700" />,
            },
            {
              t: "Zamanında Teslim",
              d: "Yüklerinizi planlanan sürede, sorunsuz şekilde ulaştırıyoruz.",
              icon: <Clock className="w-5 h-5 text-sky-700" />,
            },
            {
              t: "Uygun Maliyet",
              d: "Her bütçeye uygun fiyatlandırma ve şeffaf süreç yönetimi.",
              icon: <DollarSign className="w-5 h-5 text-green-600" />,
            },
            {
              t: "Özenli Taşıma",
              d: "Her yükü dikkatle ele alıyor, güvenliğini ön planda tutuyoruz.",
              icon: <ShieldCheck className="w-5 h-5 text-emerald-600" />,
            },
            {
              t: "Kolay İletişim",
              d: "Telefon ve WhatsApp üzerinden hızlı yanıt ve yakın destek.",
              icon: <Phone className="w-5 h-5 text-indigo-600" />,
            },
            {
              t: "Yerel Uzmanlık",
              d: "Bölge yollarına ve güzergâhlara hâkim ekibimizle daha verimli taşıma.",
              icon: <MapPin className="w-5 h-5 text-red-600" />,
            },
          ].map((c, i) => (
            <motion.div
              key={c.t}
              {...card}
              transition={{ ...card.transition, delay: 0.05 * i }}
              className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm"
            >
              <div className="flex items-center gap-2 text-slate-900 font-semibold">
                {c.icon}
                <span>{c.t}</span>
              </div>
              <p className="mt-2 text-slate-600 text-sm leading-relaxed">
                {c.d}
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ====== Kara yolu Nedir? ====== */}
      <section className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10 md:py-14">
        <div className="grid lg:grid-cols-2 gap-8 items-center">
          <motion.div {...fadeUp(0)}>
            <h2 className="text-2xl md:text-3xl font-bold">
              Karayolu Taşımacılığı Nedir?
            </h2>
            <p className="mt-3 text-slate-700 leading-relaxed">
              Karayolu taşımacılığı; yüklerin kamyon, tır veya hafif ticari
              araçlarla şehir içi ya da şehirler arası yollarda taşındığı en
              yaygın taşıma yöntemidir. Kapıdan kapıya teslim kolaylığı sunar,
              kısa ve orta mesafelerde hem hız hem de esneklik sağlar.
            </p>
            <ul className="mt-4 space-y-2">
              {[
                "Kapıdan kapıya pratik teslimat",
                "Esnek rota ve zaman planlaması",
                "Kısa mesafelerde hızlı ve ekonomik çözüm",
              ].map((b) => (
                <li
                  key={b}
                  className="flex items-start gap-2 text-sm text-slate-600"
                >
                  <CheckCircle2 className="mt-0.5 w-4 h-4 text-sky-600" /> {b}
                </li>
              ))}
            </ul>
          </motion.div>
          <motion.div
            {...fadeUp(0.05)}
            className="relative overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-md"
          >
            <img
              src="https://images.unsplash.com/photo-1536099629323-44806c1ea264?q=80&w=1065&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Karayolu taşımacılığı"
              className="w-full h-auto object-cover max-h-[320px]"
              loading="lazy"
            />
          </motion.div>
        </div>
      </section>

      {/* ====== Neden Kara yolu & Neden Biz? ====== */}
      <section className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 md:py-16">
        <div className="grid lg:grid-cols-2 gap-8 items-start">
          <motion.div
            {...fadeUp(0)}
            className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm"
          >
            <div className="text-xl font-bold">
              Neden Kara yolu Taşımacılık?
            </div>
            <ul className="mt-3 space-y-2">
              {[
                "Kapıdan kapıya teslim kolaylığı",
                "Kısa/orta mesafede hız ve esneklik",
                "Geniş ulusal ulaşım ağı",
              ].map((b) => (
                <li
                  key={b}
                  className="flex items-start gap-2 text-slate-700 text-sm"
                >
                  <CheckCircle2 className="mt-0.5 w-4 h-4 text-sky-600" /> {b}
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            {...fadeUp(0.05)}
            className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm"
          >
            <div className="text-xl font-bold">Neden Biz?</div>
            <ul className="mt-3 space-y-2">
              {[
                "Planlı ve öngörülebilir teslimat süreçleri",
                "Şeffaf ve net fiyatlandırma",
                "Her müşteriyle bire bir ilgilenme",
              ].map((b) => (
                <li
                  key={b}
                  className="flex items-start gap-2 text-slate-700 text-sm"
                >
                  <CheckCircle2 className="mt-0.5 w-4 h-4 text-emerald-600" />{" "}
                  {b}
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </section>

      {/* ====== Operasyon Akışı (Kısa) ====== */}
      <section className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-12 md:pb-16">
        <motion.h3 {...fadeUp(0)} className="text-2xl md:text-3xl font-bold">
          Operasyon Akışı (Kısa)
        </motion.h3>
        <div className="mt-6 grid md:grid-cols-4 gap-6">
          {[
            {
              step: "1",
              h: "Talep & Planlama",
              p: "Gönderi bilgisi alınır, teslim tarihi netleştirilir.",
            },
            {
              step: "2",
              h: "Toplama / Yükleme",
              p: "Yükünüz adresinizden alınır veya depoda teslim alınır.",
            },
            {
              step: "3",
              h: "Taşıma",
              p: "Yükünüz güvenle ve zamanında hedef noktaya taşınır.",
            },
            {
              step: "4",
              h: "Teslim",
              p: "Yük alıcıya ulaştırılır ve süreç tamamlanır.",
            },
          ].map((s, i) => (
            <motion.div
              key={s.step}
              {...card}
              transition={{ ...card.transition, delay: 0.05 * i }}
              className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm"
            >
              <div className="inline-flex items-center gap-2 text-sky-700">
                <span className="text-sm tracking-wide">Adım {s.step}</span>
              </div>
              <div className="mt-2 text-lg font-semibold">{s.h}</div>
              <p className="mt-1 text-slate-600 text-sm">{s.p}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ====== Kapsam & Sektörler ====== */}
      <section className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-12 md:pb-16">
        <div className="grid lg:grid-cols-2 gap-6 items-start">
          <motion.div
            {...fadeUp(0)}
            className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm"
          >
            <div className="text-slate-900 font-semibold">Kapsam</div>
            <div className="mt-3 flex flex-wrap gap-2">
              {["81 il", "Depo-depo", "Kapı-kapı", "Şehir içi + arası"].map(
                (t) => (
                  <span
                    key={t}
                    className="rounded-full border border-slate-200 bg-white px-3 py-1.5 text-sm text-slate-700"
                  >
                    {t}
                  </span>
                )
              )}
            </div>
          </motion.div>
          <motion.div
            {...fadeUp(0.05)}
            className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm"
          >
            <div className="text-slate-900 font-semibold">Uygun Sektörler</div>
            <div className="mt-3 flex flex-wrap gap-2">
              {[
                "E-ticaret",
                "Hızlı tüketim",
                "Perakende",
                "Otomotiv",
                "Makine/elektronik",
              ].map((t) => (
                <span
                  key={t}
                  className="rounded-full border border-slate-200 bg-white px-3 py-1.5 text-sm text-slate-700"
                >
                  {t}
                </span>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ====== CTA ====== */}
      <section className="relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
          <motion.div
            {...fadeUp(0)}
            className="rounded-2xl border border-slate-200 bg-gradient-to-r from-sky-50 to-blue-50 p-6 md:p-8 flex flex-col md:flex-row items-center justify-between gap-4"
          >
            <div>
              <h4 className="text-xl md:text-2xl font-bold">
                Kara yolu gönderinizi planlayalım
              </h4>
              <p className="text-slate-600">
                Yük detayınızı paylaşın; en uygun rota, araç ve teslim süresini
                birlikte netleştirelim.
              </p>
            </div>
            <div className="flex gap-3">
              <Link
                to="/iletisim"
                className="group bg-gradient-to-r from-sky-500 to-blue-600 hover:from-sky-500 hover:to-blue-500 text-white font-semibold py-2.5 px-6 rounded-lg transition-all duration-300 border border-sky-500/20 shadow-md"
              >
                <span className="inline-flex items-center gap-2">
                  İletişime Geç
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </span>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
