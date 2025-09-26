import { motion, easeOut, useScroll, useTransform } from "framer-motion";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { useRef } from "react";
import { Link } from "react-router-dom";

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.2 },
  transition: { duration: 0.8, ease: easeOut, delay },
});

export default function MinivanTasimaDetayPage() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"], // sayfa kaydıkça hesaplama
  });

  // scroll ilerledikçe translateY değerini hesaplıyoruz
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <main className="relative bg-gradient-to-b from-slate-50 via-white to-sky-50 text-slate-900">
      {/* ====== İstatistik blokları ====== */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-14 grid md:grid-cols-3 gap-6 text-center">
        {[
          { v: "≤ 23 m³", l: "Hacim" },
          { v: "500–1500 kg", l: "Taşıma Kapasitesi" },
          { v: "81 il", l: "Ulusal kapsama" },
        ].map((s, i) => (
          <motion.div
            key={s.l}
            {...fadeUp(0.05 * i)}
            className="rounded-2xl border border-slate-200 bg-white py-8 shadow-sm"
          >
            <div className="text-2xl font-extrabold text-blue-600">{s.v}</div>
            <div className="mt-1 text-slate-600">{s.l}</div>
          </motion.div>
        ))}
      </section>

      {/* ====== Hizmet Süreci (dikey liste) ====== */}
      <section className="max-w-5xl mx-auto px-4 py-6">
        <motion.h2 {...fadeUp(0)} className="text-2xl md:text-3xl font-bold">
          Hizmet Süreci
        </motion.h2>
        <div className="mt-6 space-y-6">
          {[
            {
              h: "Talep & Planlama",
              p: "Müşteriden yük bilgisi ve teslimat adresi alınır, en uygun minivan seçilir.",
            },
            {
              h: "Taşıma Süreci",
              p: "Araçlarımız yükü güvenli şekilde alır ve belirlenen güzergâhta ilerler.",
            },
            {
              h: "Teslim & Onay",
              p: "Yük belirtilen adrese ulaştırılır, teslimat bilgisi müşteriye bildirilir.",
            },
          ].map((step, i) => (
            <motion.div
              key={step.h}
              {...fadeUp(0.05 * i)}
              className="relative pl-10"
            >
              <div className="absolute left-0 top-1 w-6 h-6 rounded-full bg-blue-500 text-white flex items-center justify-center text-xs font-bold">
                {i + 1}
              </div>
              <div className="font-semibold text-slate-800">{step.h}</div>
              <p className="text-sm text-slate-600">{step.p}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ====== HERO (tam genişlik görsel) ====== */}
      <section
        ref={ref}
        className="relative h-[60vh] min-h-[420px] flex items-center justify-center text-center overflow-hidden my-20"
      >
        <motion.img
          src="https://images.unsplash.com/photo-1465447142348-e9952c393450?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0"
          alt="Minivan taşımacılık"
          className="absolute inset-0 w-full h-full object-cover"
          style={{ y }} // parallax kaydırma
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-black/80" />
        <motion.div
          {...fadeUp(0)}
          className="relative z-10 max-w-3xl mx-auto px-4 text-white"
        >
          <h1 className="text-3xl md:text-5xl font-extrabold">
            Minivan Taşımacılık
          </h1>
          <p className="mt-4 text-lg text-gray-200">
            Küçük hacimli yükler için hızlı, ekonomik ve esnek çözümler.
          </p>
        </motion.div>
      </section>

      {/* ====== Kullanım Senaryoları (resimli kartlar) ====== */}
      <section className="bg-slate-50 py-14">
        <div className="max-w-6xl mx-auto px-4">
          <motion.h2 {...fadeUp(0)} className="text-2xl md:text-3xl font-bold">
            Kullanım Senaryoları
          </motion.h2>
          <div className="mt-8 grid md:grid-cols-3 gap-6">
            {[
              {
                img: "https://images.pexels.com/photos/4246104/pexels-photo-4246104.jpeg",
                h: "E-ticaret Teslimatları",
                p: "Gün içi hızlı teslimatlar, kapıdan kapıya hizmet.",
              },
              {
                img: "https://images.pexels.com/photos/1912172/pexels-photo-1912172.jpeg",
                h: "Servis & Parça Dağıtımı",
                p: "Hızlı yedek parça sevkiyatları, çizgi durma riskine çözüm.",
              },
              {
                img: "https://images.pexels.com/photos/5025666/pexels-photo-5025666.jpeg",
                h: "Perakende İçi Transfer",
                p: "Mağaza ve depo arası düzenli küçük hacimli taşımalar.",
              },
            ].map((c, i) => (
              <motion.div
                key={c.h}
                {...fadeUp(0.05 * i)}
                className="rounded-2xl overflow-hidden border border-slate-200 bg-white shadow-sm"
              >
                <img
                  src={c.img}
                  alt={c.h}
                  className="w-full h-40 object-cover"
                />
                <div className="p-5">
                  <div className="font-semibold">{c.h}</div>
                  <p className="mt-1 text-sm text-slate-600">{c.p}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ====== Neden Biz? (arka planlı band) ====== */}
      <section className="relative py-14">
        <div className="max-w-5xl mx-auto px-4 text-center">
          <motion.h2 {...fadeUp(0)} className="text-2xl md:text-3xl font-bold">
            Neden Minivan, Neden Biz?
          </motion.h2>
          <div className="mt-6 grid md:grid-cols-2 gap-6 text-sm">
            {[
              "Şehir içi erişim avantajı",
              "Ekonomik küçük hacimli taşımalar",
            ].map((t, i) => (
              <motion.div
                key={t}
                {...fadeUp(0.05 * i)}
                className="rounded-xl border border-blue-200 bg-white p-6"
              >
                <CheckCircle2 className="w-5 h-5 text-blue-600 mb-2 mx-auto" />
                {t}
              </motion.div>
            ))}
          </div>
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
