import { motion, easeOut } from "framer-motion";
import {
  Boxes,
  PackageCheck,
  Route,
  ClipboardCheck,
  ShieldCheck,
  Truck,
  MapPin,
  ArrowRight,
  Ruler,
  Scale,
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

export default function ParcaYukTasimaDetayPage() {
  return (
    <main className="relative bg-gradient-to-b from-slate-50 via-white to-sky-50 text-slate-900">
      {/* Subtle grain + farklı vurgu halkası */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "url('data:image/svg+xml;utf8,<svg xmlns=%22http://www.w3.org/2000/svg%22 width=%2240%22 height=%2240%22 viewBox=%220 0 40 40%22><filter id=%22n%22><feTurbulence type=%22fractalNoise%22 baseFrequency=%220.9%22 numOctaves=%222%22 stitchTiles=%22stitch%22/></filter><rect width=%2240%22 height=%2240%22 filter=%22url(%23n)%22 opacity=%220.25%22/></svg>')",
        }}
      />

      {/* ====== HERO (farklı düzen: görsel sol, içerik sağ) ====== */}
      <section className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 md:pt-20">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          <motion.div
            {...fadeUp(0.05)}
            className="relative overflow-hidden rounded-3xl border border-slate-200 shadow-md"
          >
            <img
              src="https://images.pexels.com/photos/6169049/pexels-photo-6169049.jpeg"
              alt="Parça yük hazırlığı"
              className="w-full h-auto object-cover max-h-[380px]"
              loading="lazy"
            />
            <div className="absolute bottom-3 left-3 flex items-center gap-2 rounded-full bg-white/90 backdrop-blur px-3 py-1 text-xs border border-slate-200">
              <PackageCheck className="w-4 h-4 text-violet-600" /> Optimize
              paketleme
            </div>
          </motion.div>

          <div>
            <motion.span
              {...fadeUp(0)}
              className="inline-flex items-center gap-2 bg-violet-50 border border-violet-100 text-violet-700 px-3 py-1 rounded-full text-xs tracking-wide shadow-[0_0_30px_rgba(99,102,241,0.15)]"
            >
              <Boxes className="w-4 h-4" /> Parça Yük Taşımacılık
            </motion.span>

            <motion.h1
              {...fadeUp(0.05)}
              className="mt-4 text-3xl md:text-4xl font-extrabold tracking-[-0.01em]"
            >
              Küçük hacimde hız, yüksek görünürlük, düşük maliyet.
            </motion.h1>

            <motion.p
              {...fadeUp(0.1)}
              className="mt-4 text-slate-700 text-lg leading-relaxed"
            >
              Tek palet, birkaç koli ya da sınırlı metreküp fark etmeksizin;
              konsolidasyon ve mikro-dağıtım yaklaşımıyla teslim sürelerini
              kısaltır, bütçenizi koruruz.
            </motion.p>

            <motion.div {...fadeUp(0.15)} className="mt-6 flex flex-wrap gap-3">
              {["Mikro konsolidasyon", "Aynı gün çıkış", "81 il dağıtım"].map(
                (t) => (
                  <span
                    key={t}
                    className="rounded-full border border-slate-200 bg-white px-3 py-1.5 text-sm text-slate-700"
                  >
                    {t}
                  </span>
                )
              )}
            </motion.div>
          </div>
        </div>
      </section>

      {/* ====== NEDİR (vurgulu satır şeridi) ====== */}
      <section className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10 md:py-14">
        <div className="rounded-3xl border border-slate-200 bg-white p-6 md:p-8 shadow-sm">
          <motion.h2 {...fadeUp(0)} className="text-2xl md:text-3xl font-bold">
            Parça Yük Taşımacılık Nedir?
          </motion.h2>
          <p className="mt-3 text-slate-700 leading-relaxed">
            Parça yük, tam araç kapasitesini doldurmayan küçük hacimli
            gönderilerin konsolide edilerek aynı rota üzerinde taşındığı
            modeldir. Kapıdan kapıya mikro dağıtım senaryolarında hız, maliyet
            ve esneklik avantajı sağlar.
          </p>
          <div className="mt-5 grid md:grid-cols-3 gap-4">
            {[
              {
                i: <Ruler className="w-4 h-4" />,
                t: "Hacim Odaklı",
                d: "m³ ve palet bazlı planlama",
              },
              {
                i: <Scale className="w-4 h-4" />,
                t: "Ağırlık Esnek",
                d: "maks. tonaj kurallarına uygun",
              },
              {
                i: <Route className="w-4 h-4" />,
                t: "Hatlı Sevkiyat",
                d: "düzenli çıkış günleri",
              },
            ].map((x, idx) => (
              <motion.div
                key={idx}
                {...card}
                className="rounded-2xl border border-slate-200 bg-white p-4"
              >
                <div className="flex items-center gap-2 text-slate-900 font-semibold">
                  {x.i} {x.t}
                </div>
                <div className="text-slate-600 text-sm mt-1">{x.d}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ====== ŞİRKET NE SAĞLAR (alternatif düzen, arka bant) ====== */}
      <section className="relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
          <motion.h2 {...fadeUp(0)} className="text-2xl md:text-3xl font-bold">
            Şirketimiz Parça Yükte Ne Sağlar?
          </motion.h2>
          <div className="mt-6 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                t: "Mikro Konsolidasyon",
                d: "Aynı rota üzerindeki küçük yükleri tek araçta birleştirerek maliyeti düşürürüz.",
                icon: <Boxes className="w-5 h-5 text-violet-700" />,
              },
              {
                t: "Hızlı Geri Dönüş",
                d: "Taleplerinize aynı gün içinde yanıt vererek süreci geciktirmiyoruz.",
                icon: <MapPin className="w-5 h-5 text-indigo-700" />,
              },
              {
                t: "Paketleme Standartları",
                d: "Koli/palet yönergeleri ve barkod izleme ile hasar riskini azaltırız.",
                icon: <ClipboardCheck className="w-5 h-5 text-slate-700" />,
              },
              {
                t: "Hasarsızlık Politikası",
                d: "Yük güvenliği prosedürleri ve talebe göre sigortalı taşıma.",
                icon: <ShieldCheck className="w-5 h-5 text-emerald-600" />,
              },
              {
                t: "Rota Optimizasyonu",
                d: "Dağıtım planı ve durak sıralaması ile süreyi ve km’yi kısaltırız.",
                icon: <Route className="w-5 h-5 text-indigo-600" />,
              },
              {
                t: "Araç Seçimi",
                d: "Minivan/panelvan/kamyonet ile yük-hacme uygun araç tahsisi.",
                icon: <Truck className="w-5 h-5 text-slate-700" />,
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
        </div>
      </section>

      {/* ====== NEDEN PARÇA YÜK & NEDEN BİZ (iki sütun, numaralı rozetler) ====== */}
      <section className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="grid lg:grid-cols-2 gap-8 items-start">
          <motion.div
            {...fadeUp(0)}
            className="rounded-3xl border border-slate-200 bg-white p-6 md:p-8 shadow-sm"
          >
            <div className="text-xl font-bold">Neden Parça Yük?</div>
            <div className="mt-4 space-y-3">
              {[
                "Küçük hacimde maliyet avantajı",
                "Düzenli hatlarla öngörülebilirlik",
                "Kapıdan kapıya mikro dağıtım",
              ].map((b, idx) => (
                <div
                  key={b}
                  className="flex items-start gap-3 text-slate-700 text-sm"
                >
                  <span className="mt-0.5 inline-flex h-6 w-6 items-center justify-center rounded-full bg-violet-100 text-violet-700 text-xs font-semibold border border-violet-200">
                    {idx + 1}
                  </span>
                  <span>{b}</span>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            {...fadeUp(0.05)}
            className="rounded-3xl border border-slate-200 bg-white p-6 md:p-8 shadow-sm"
          >
            <div className="text-xl font-bold">Neden Biz?</div>
            <div className="mt-4 space-y-3">
              {[
                "Özenli paketleme ve dikkatli yükleme",
                "Planlı sevkiyat günleriyle sürprizsiz süreç",
                "Net fiyat – baştan anlaşılır koşullar",
              ].map((b, idx) => (
                <div
                  key={b}
                  className="flex items-start gap-3 text-slate-700 text-sm"
                >
                  <span className="mt-0.5 inline-flex h-6 w-6 items-center justify-center rounded-full bg-indigo-100 text-indigo-700 text-xs font-semibold border border-indigo-200">
                    {idx + 1}
                  </span>
                  <span>{b}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ====== Operasyon Senaryoları (yatay akış şeridi) ====== */}
      <section className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-12 md:pb-16">
        <motion.h3 {...fadeUp(0)} className="text-2xl md:text-3xl font-bold">
          Operasyon Senaryoları
        </motion.h3>
        <div className="mt-6 grid md:grid-cols-4 gap-6">
          {[
            { h: "Depo → Depo", p: "Konsolidasyon merkezi transferleri" },
            { h: "Depo → Kapı", p: "Şehir içi mikro dağıtım" },
            { h: "Kapı → Depo", p: "Toplama ve hub birleştirme" },
            { h: "Kapı → Kapı", p: "End-to-end teslim senaryosu" },
          ].map((s, i) => (
            <motion.div
              key={s.h}
              {...card}
              transition={{ ...card.transition, delay: 0.05 * i }}
              className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm"
            >
              <div className="text-lg font-semibold">{s.h}</div>
              <p className="mt-1 text-slate-600 text-sm">{s.p}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ====== UYGUN SEKTÖRLER (chip list) ====== */}
      <section className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-12 md:pb-16">
        <div className="rounded-3xl border border-slate-200 bg-white p-6 md:p-8 shadow-sm">
          <div className="text-slate-900 font-semibold">Uygun Sektörler</div>
          <div className="mt-3 flex flex-wrap gap-2">
            {[
              "E-ticaret",
              "Perakende",
              "Hızlı tüketim",
              "Kozmetik",
              "Elektronik",
              "Medikal",
            ].map((t) => (
              <span
                key={t}
                className="rounded-full border border-slate-200 bg-white px-3 py-1.5 text-sm text-slate-700"
              >
                {t}
              </span>
            ))}
          </div>
        </div>
      </section>

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
