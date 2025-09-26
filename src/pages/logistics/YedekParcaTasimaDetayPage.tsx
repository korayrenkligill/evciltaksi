import { motion, easeOut } from "framer-motion";
import {
  Wrench,
  Package,
  Truck,
  Clock,
  MapPin,
  ShieldCheck,
  ClipboardCheck,
  Route,
  Zap,
  ArrowRight,
  Phone,
  CalendarDays,
} from "lucide-react";
import { Link } from "react-router-dom";

// Not: Header sende. Bu bileşeni <Header /> altına yerleştir.
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

const stagger = {
  initial: {},
  whileInView: { transition: { staggerChildren: 0.08 } },
  viewport: { once: true, amount: 0.2 },
};

export default function YedekParcaTasimaDetayPage() {
  return (
    <main className="relative bg-gradient-to-b from-slate-50 via-white to-sky-50 text-slate-900">
      {/* Doku (farklı noise) */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.035]"
        style={{
          backgroundImage:
            "url('data:image/svg+xml;utf8,<svg xmlns=%22http://www.w3.org/2000/svg%22 width=%2240%22 height=%2240%22 viewBox=%220 0 40 40%22><filter id=%22n%22><feTurbulence type=%22fractalNoise%22 baseFrequency=%220.65%22 numOctaves=%222%22 stitchTiles=%22stitch%22/></filter><rect width=%2240%22 height=%2240%22 filter=%22url(%23n)%22 opacity=%220.3%22/></svg>')",
        }}
      />

      {/* ====== HERO (ters layout + amber vurgu) ====== */}
      <section className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 md:pt-20">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          {/* Görsel sağdan solda yerine burada solda */}
          <motion.div
            {...fadeUp(0)}
            className="relative overflow-hidden rounded-2xl border border-stone-200 shadow-md order-last lg:order-first"
          >
            <img
              src="https://images.unsplash.com/photo-1657873961503-89a65459de2b?q=80&w=3131&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Yedek parça lojistiği"
              className="w-full h-auto object-cover max-h-[360px]"
              loading="lazy"
            />
            <div className="absolute bottom-3 left-3 flex items-center gap-2 rounded-full bg-white/90 backdrop-blur px-3 py-1 text-xs border border-stone-200">
              <Zap className="w-4 h-4 text-amber-600" /> Hızlı & Kritik Sevkiyat
            </div>
          </motion.div>

          <div className="order-first lg:order-last">
            <motion.span
              {...fadeUp(0.02)}
              className="inline-flex items-center gap-2 bg-amber-50 border border-amber-100 text-amber-700 px-3 py-1 rounded-full text-xs tracking-wide shadow-[0_0_30px_rgba(245,158,11,0.15)]"
            >
              <Wrench className="w-4 h-4" /> Yedek Parça Taşımacılık
            </motion.span>

            <motion.h1
              {...fadeUp(0.06)}
              className="mt-4 text-3xl md:text-4xl font-extrabold tracking-[-0.01em]"
            >
              Kritik parça, doğru anda doğru yerde.
            </motion.h1>

            <motion.p
              {...fadeUp(0.1)}
              className="mt-4 text-stone-700 text-lg leading-relaxed"
            >
              Otomotivden makineye; AOG/çizgi durma risklerine karşı aynı gün
              &amp; ertesi gün teslim opsiyonları, izlenebilirlik ve güvenli
              paketleme standartlarıyla yedek parça lojistiği.
            </motion.p>

            <motion.div {...fadeUp(0.14)} className="mt-6 flex flex-wrap gap-3">
              {["Aynı gün / Ertesi gün", "Hassas paketleme"].map((t) => (
                <span
                  key={t}
                  className="rounded-full border border-stone-200 bg-white px-3 py-1.5 text-sm text-stone-700"
                >
                  {t}
                </span>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* ====== Yedek Parça Taşımacılık Nedir? (farklı içerik ve ikon şerit) ====== */}
      <section className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10 md:py-14">
        <div className="grid lg:grid-cols-2 gap-8 items-center">
          <motion.div {...fadeUp(0)}>
            <h2 className="text-2xl md:text-3xl font-bold">
              Yedek Parça Taşımacılık Nedir?
            </h2>
            <p className="mt-3 text-stone-700 leading-relaxed">
              Üretim hatlarını, servis süreçlerini veya saha operasyonlarını
              durdurabilecek kritik parçaların; zamanında, hasarsız ve kayıtlı
              şekilde teslimini hedefleyen özel lojistik hizmetidir. Boyut ve
              değer farklılıklarına göre sınıflandırılan paketleme ve izleme
              prosedürleriyle yürütülür.
            </p>

            <div className="mt-4 flex flex-wrap items-center gap-3">
              <span className="inline-flex items-center gap-2 text-sm text-stone-700 rounded-full border border-stone-200 bg-white px-3 py-1.5">
                <ShieldCheck className="w-4 h-4 text-emerald-600" /> Hasar
                önleme
              </span>
              <span className="inline-flex items-center gap-2 text-sm text-stone-700 rounded-full border border-stone-200 bg-white px-3 py-1.5">
                <Clock className="w-4 h-4 text-amber-600" /> Zaman kritik
              </span>
              <span className="inline-flex items-center gap-2 text-sm text-stone-700 rounded-full border border-stone-200 bg-white px-3 py-1.5">
                <MapPin className="w-4 h-4 text-sky-600" /> İzlenebilirlik
              </span>
            </div>
          </motion.div>

          <motion.div
            {...fadeUp(0.05)}
            className="relative overflow-hidden rounded-2xl border border-stone-200 bg-white shadow-md"
          >
            <img
              src="https://images.pexels.com/photos/6169668/pexels-photo-6169668.jpeg"
              alt="Hassas paketleme ve etiketleme"
              className="w-full h-auto object-cover max-h-[320px]"
              loading="lazy"
            />
          </motion.div>
        </div>
      </section>

      {/* ====== Neleri Sağlarız? (farklı kart dokusu + 2 satırlı layout) ====== */}
      <section className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 md:py-14">
        <motion.h2 {...fadeUp(0)} className="text-2xl md:text-3xl font-bold">
          Yedek Parçada Neleri Sağlarız?
        </motion.h2>

        <motion.div
          {...stagger}
          className="mt-6 grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {[
            {
              t: "Acil Hatlar Önceliği",
              d: "Üretim durmasın diye kritik parçaları önceliklendiririz.",
              icon: <Clock className="w-5 h-5 text-amber-600" />,
            },
            {
              t: "Hassas Paketleme",
              d: "Kırılgan/elektronik parçaya uygun malzeme ve istif.",
              icon: <Package className="w-5 h-5 text-stone-700" />,
            },
            {
              t: "Düzenli Bilgilendirme",
              d: "Sevkiyat sürecinde telefon/WhatsApp ile kısa güncellemeler.",
              icon: <Phone className="w-5 h-5 text-indigo-700" />,
            },
            {
              t: "Özenli Taşıma",
              d: "Parçanın özelliğine göre yükleme ve sabitleme.",
              icon: <ShieldCheck className="w-5 h-5 text-emerald-600" />,
            },
            {
              t: "Planlı Sevkiyat Günleri",
              d: "Belirli günlerde sabit çıkışla öngörülebilir teslim.",
              icon: <CalendarDays className="w-5 h-5 text-sky-700" />,
            },
            {
              t: "Teslim Onayı",
              d: "Alıcıdan teyit alarak süreci net olarak tamamlarız.",
              icon: <ClipboardCheck className="w-5 h-5 text-stone-700" />,
            },
          ].map((c, i) => (
            <motion.div
              key={c.t}
              {...card}
              transition={{ ...card.transition, delay: 0.05 * i }}
              className="rounded-2xl border border-stone-200 bg-white p-6 shadow-sm"
            >
              <div className="flex items-center gap-2 text-stone-900 font-semibold">
                {c.icon}
                <span>{c.t}</span>
              </div>
              <p className="mt-2 text-stone-600 text-sm leading-relaxed">
                {c.d}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* ====== Operasyon Akışı (Dikey timeline – görsel farklılık) ====== */}
      <section className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-12 md:pb-16">
        <motion.h3 {...fadeUp(0)} className="text-2xl md:text-3xl font-bold">
          Operasyon Akışı
        </motion.h3>

        <div className="mt-8 grid lg:grid-cols-2 gap-8">
          {/* Timeline */}
          <div className="relative">
            <div className="absolute left-4 top-0 bottom-0 w-px bg-gradient-to-b from-amber-300 via-stone-200 to-stone-200" />
            {[
              {
                h: "Talep & Planlama",
                p: "Müşteri ihtiyacı ve teslim zamanı netleştirilir, uygun araç seçilir.",
                icon: <Wrench className="w-4 h-4" />,
              },
              {
                h: "Paketleme & Yükleme",
                p: "Parçanın özelliğine uygun ambalaj yapılır, araçta güvenli şekilde sabitlenir.",
                icon: <Package className="w-4 h-4" />,
              },
              {
                h: "Toplama & Taşıma",
                p: "Yük adresinizden alınır, planlanan rota üzerinden teslimat için yola çıkar.",
                icon: <Truck className="w-4 h-4" />,
              },
              {
                h: "Teslim & Onay",
                p: "Alıcıya ulaştırılır, teslim teyidi alınarak süreç tamamlanır.",
                icon: <ClipboardCheck className="w-4 h-4" />,
              },
            ].map((s, i) => (
              <motion.div
                key={s.h}
                {...card}
                transition={{ ...card.transition, delay: 0.05 * i }}
                className="relative pl-12 py-5"
              >
                <div className="absolute left-0 top-5 h-8 w-8 rounded-full border border-stone-200 bg-white flex items-center justify-center shadow-sm">
                  {s.icon}
                </div>
                <div className="text-lg font-semibold">{s.h}</div>
                <p className="mt-1 text-stone-600 text-sm">{s.p}</p>
              </motion.div>
            ))}
          </div>

          {/* Yan panel: Hizmet kapsamı */}
          <motion.div
            {...fadeUp(0.05)}
            className="rounded-2xl border border-stone-200 bg-white p-6 shadow-sm"
          >
            <div className="text-stone-900 font-semibold">
              Kapsam & Sektörler
            </div>

            <div className="mt-3 grid sm:grid-cols-2 gap-4">
              <div>
                <div className="text-sm font-medium text-stone-800">Kapsam</div>
                <div className="mt-2 flex flex-wrap gap-2">
                  {[
                    "Yerel/Bölgesel",
                    "Şehirler arası",
                    "Kapıdan kapıya",
                    "Küçük hacimli taşımalar",
                    "Planlı çıkış günleri",
                  ].map((t) => (
                    <span
                      key={t}
                      className="rounded-full border border-stone-200 bg-white px-3 py-1.5 text-sm text-stone-700"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              <div>
                <div className="text-sm font-medium text-stone-800">
                  Uygun Sektörler
                </div>
                <div className="mt-2 flex flex-wrap gap-2">
                  {[
                    "Yedek Parça",
                    "Küçük İmalat",
                    "Perakende Mağazalar",
                    "Servis/Saha Ekipleri",
                  ].map((t) => (
                    <span
                      key={t}
                      className="rounded-full border border-stone-200 bg-white px-3 py-1.5 text-sm text-stone-700"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Ölçü/veri yerine özellik kartları */}
            <div className="mt-5 grid grid-cols-2 gap-3">
              {[
                { l: "Zamanında Teslim", v: "Planlı ve öngörülebilir süreç" },
                { l: "Özenli Paketleme", v: "Yüke uygun malzeme ve sabitleme" },
                { l: "Kolay İletişim", v: "Telefon/WhatsApp ile hızlı dönüş" },
                { l: "Esnek Çözümler", v: "Küçük ve acil gönderilere uygun" },
              ].map((m) => (
                <div
                  key={m.l}
                  className="rounded-xl border border-stone-200 p-3 text-sm"
                >
                  <div className="text-stone-800 font-medium">{m.l}</div>
                  <div className="text-stone-600">{m.v}</div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ====== Neden Biz? (karşıt renk şeridi) ====== */}
      <section className="relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-12">
          <motion.div
            {...fadeUp(0)}
            className="rounded-2xl border border-stone-200 bg-gradient-to-r from-blue-50 to-blue-100 p-6 md:p-8"
          >
            <div className="grid md:grid-cols-2 gap-6">
              {[
                {
                  h: "Hız & Esneklik",
                  p: "Acil sevkiyatlarda hızlı slot, gece çıkış ve aktarma opsiyonları.",
                  icon: <Zap className="w-5 h-5 text-amber-600" />,
                },
                {
                  h: "Maliyet Optimizasyonu",
                  p: "Rota/doluluk planlamasıyla bütçe dostu alternatifler.",
                  icon: <Route className="w-5 h-5 text-sky-700" />,
                },
              ].map((c, i) => (
                <motion.div
                  key={c.h}
                  {...card}
                  transition={{ ...card.transition, delay: 0.05 * i }}
                  className="rounded-2xl border border-stone-200 bg-white p-6 shadow-sm"
                >
                  <div className="flex items-center gap-2 text-stone-900 font-semibold">
                    {c.icon}
                    <span>{c.h}</span>
                  </div>
                  <p className="mt-2 text-stone-600 text-sm leading-relaxed">
                    {c.p}
                  </p>
                </motion.div>
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
