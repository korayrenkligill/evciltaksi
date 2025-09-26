import { motion, easeOut } from "framer-motion";
import {
  Truck,
  ShieldCheck,
  Clock,
  ArrowRight,
  ChevronRight,
  Users,
  Target,
  Building2,
  Globe2,
  LineChart,
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

export default function AboutPage() {
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

      {/* ====== HERO / Mission ====== */}
      <section className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 md:pt-20">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          <div>
            <motion.span
              {...fadeUp(0)}
              className="inline-flex items-center gap-2 bg-sky-50 border border-sky-100 text-sky-700 px-3 py-1 rounded-full text-xs tracking-wide shadow-[0_0_30px_rgba(56,189,248,0.15)]"
            >
              <Target className="w-4 h-4" /> Misyon & Vizyon
            </motion.span>

            <motion.h1
              {...fadeUp(0.05)}
              className="mt-4 text-3xl md:text-4xl font-extrabold tracking-[-0.01em]"
            >
              Türkiye genelinde <span className="text-slate-900">güvenli,</span>{" "}
              <span className="bg-gradient-to-r from-sky-600 via-sky-500 to-blue-600 bg-clip-text text-transparent">
                hızlı
              </span>{" "}
              ve
              <span className="text-slate-900"> dinamik</span> lojistik.
            </motion.h1>

            <motion.p
              {...fadeUp(0.1)}
              className="mt-4 text-slate-700 text-lg leading-relaxed"
            >
              Genç ve enerjik ekibimizle, lojistik süreçlerinizi sade, güvenli
              ve hızlı hale getiriyoruz. Amacımız; her gönderiyi zamanında ve
              özenle teslim ederek müşteri memnuniyetini en üst seviyede tutmak.
            </motion.p>

            <motion.div {...fadeUp(0.15)} className="mt-6 flex flex-wrap gap-3">
              {[
                "Hızlı teslimat",
                "Genç ve dinamik ekip",
                "Müşteri odaklı hizmet",
                "Esnek çözümler",
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
              <Link
                to="/hizmetlerimiz"
                className="group bg-gradient-to-r from-sky-500 to-blue-600 hover:from-sky-500 hover:to-blue-500 text-white font-semibold py-2.5 px-6 rounded-lg transition-all duration-300 shadow-md hover:shadow-sky-200 border border-sky-500/20"
              >
                <span className="inline-flex items-center gap-2">
                  Hizmetlerimizi İncele
                  <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </span>
              </Link>
              <a
                href="tel:+90XXXXXXXXXX"
                className="bg-white text-slate-800 font-medium py-2.5 px-6 rounded-lg transition-all duration-300 border border-slate-300 hover:bg-slate-50"
              >
                Bizi Ara
              </a>
            </motion.div>
          </div>

          <motion.div
            {...fadeUp(0.1)}
            className="relative overflow-hidden rounded-2xl border border-slate-200 shadow-md"
          >
            <img
              src="https://images.pexels.com/photos/17185764/pexels-photo-17185764.jpeg"
              alt="Tüm türkiyeye teslimat"
              className="w-full h-auto object-cover max-h-[360px]"
              loading="lazy"
            />
            <div className="absolute bottom-3 left-3 flex items-center gap-2 rounded-full bg-white/90 backdrop-blur px-3 py-1 text-xs border border-slate-200">
              <ShieldCheck className="w-4 h-4 text-emerald-600" /> Tüm
              Türkiye'ye Teslimat
            </div>
          </motion.div>
        </div>
      </section>

      {/* ====== Hızlı İstatistikler ====== */}
      <section className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 md:py-14">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {[
            {
              icon: <Globe2 className="w-5 h-5" />,
              k: "Türkiye",
              v: "Genelinde Hizmet",
            },
            {
              icon: <Truck className="w-5 h-5" />,
              k: "Hızlı",
              v: "Teslimat Garantisi",
            },
            {
              icon: <Users className="w-5 h-5" />,
              k: "Genç",
              v: "Dinamik Ekip",
            },
            {
              icon: <LineChart className="w-5 h-5" />,
              k: "100%",
              v: "Müşteri Odaklılık",
            },
          ].map((s, i) => (
            <motion.div
              key={s.v}
              {...card}
              transition={{ ...card.transition, delay: 0.05 * i }}
              className="rounded-2xl border border-slate-200 bg-white/90 backdrop-blur supports-[backdrop-filter]:bg-white/60 p-5 text-center shadow-sm"
            >
              <div className="inline-flex items-center justify-center gap-2 text-sky-700">
                {s.icon}
              </div>
              <div className="mt-1 text-2xl md:text-3xl font-extrabold tracking-tight">
                {s.k}
              </div>
              <div className="text-slate-600 text-sm mt-1">{s.v}</div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ====== Değerlerimiz ====== */}
      <section className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-12 md:pb-16">
        <motion.h2 {...fadeUp(0)} className="text-2xl md:text-3xl font-bold">
          Değerlerimiz
        </motion.h2>
        <div className="mt-6 grid md:grid-cols-3 gap-6">
          {[
            {
              icon: <ShieldCheck className="w-5 h-5" />,
              title: "Esneklik",
              desc: "Küçük ölçeğimiz sayesinde her gönderiye özel çözümler sunabiliyoruz.",
            },
            {
              icon: <Clock className="w-5 h-5" />,
              title: "Dinamiklik",
              desc: "Genç ekibimizle değişen ihtiyaçlara hızlı uyum sağlıyoruz.",
            },
            {
              icon: <Building2 className="w-5 h-5" />,
              title: "Samimiyet",
              desc: "Müşterilerimizle yakın iletişim kurarak dostane bir iş ilişkisi geliştiriyoruz.",
            },
          ].map((c, i) => (
            <motion.div
              key={c.title}
              {...card}
              transition={{ ...card.transition, delay: 0.05 * i }}
              className="group rounded-2xl border border-slate-200 bg-white/90 backdrop-blur supports-[backdrop-filter]:bg-white/60 p-6 hover:border-sky-300/60 hover:shadow-lg transition-colors shadow-sm"
            >
              <div className="inline-flex items-center gap-2 text-sky-700">
                {c.icon}
              </div>
              <h3 className="mt-2 text-xl font-semibold">{c.title}</h3>
              <p className="mt-2 text-slate-600">{c.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ====== SSS ====== */}
      <section className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <motion.div {...fadeUp(0)} className="max-w-3xl mx-auto text-center">
          <span className="inline-flex items-center gap-2 bg-sky-50 border border-sky-100 text-sky-700 px-3 py-1 rounded-full text-xs">
            Sık Sorulan Sorular
          </span>
          <h2 className="mt-3 text-3xl font-extrabold">Merak edilenler</h2>
          <p className="mt-3 text-slate-600">
            Müşterilerimizden en sık gelen soruları derledik.
          </p>
        </motion.div>

        <div className="mt-8 grid md:grid-cols-2 gap-6">
          {[
            {
              q: "Hangi bölgelere hizmet veriyorsunuz?",
              a: "Türkiye genelinde pek çok noktaya teslimat yapıyoruz. Bölgenizi netleştirmek için bizimle iletişime geçebilirsiniz.",
            },
            {
              q: "Teslimatlar ne kadar sürüyor?",
              a: "Genellikle aynı gün içinde yola çıkıyor ve mesafeye göre kısa sürede teslim ediyoruz.",
            },
            {
              q: "Küçük gönderileri de taşıyor musunuz?",
              a: "Evet, küçük ve acil gönderiler için de hızlı çözümler sunuyoruz.",
            },
            {
              q: "Nasıl iletişime geçebilirim?",
              a: "Telefon ve WhatsApp üzerinden kolayca ulaşabilir, hızlıca yanıt alabilirsiniz.",
            },
          ].map((f, i) => (
            <motion.div
              key={f.q}
              {...card}
              transition={{ ...card.transition, delay: 0.05 * i }}
              className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm"
            >
              <div className="font-semibold text-slate-900">{f.q}</div>
              <p className="mt-2 text-slate-600 text-sm leading-relaxed">
                {f.a}
              </p>
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
                Birlikte daha verimli bir tedarik zinciri kuralım.
              </h4>
              <p className="text-slate-600">
                İhtiyacınızı paylaşın; en uygun rota ve maliyeti planlayalım.
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
