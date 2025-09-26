import { motion, easeOut } from "framer-motion";
import {
  Truck,
  Package,
  ShieldCheck,
  Clock,
  MapPin,
  ArrowRight,
  Phone,
  ChevronRight,
  CheckCircle2,
  Box, // yeni
} from "lucide-react";
import TurkeyCoverageLight from "../components/TurkeyCoverageLight";
import { Link, useNavigate } from "react-router-dom";

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

export default function HomePage() {
  const navigation = useNavigate();
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

      {/* ====== Hizmet Özeti / Değer Kartları ====== */}
      <section className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16">
        <div className="grid md:grid-cols-3 gap-4 md:gap-6">
          {[
            {
              icon: <Box className="w-5 h-5" />,
              title: "Parsiyel Taşımacılık",
              desc: "Parça yüklerin ekonomik ve güvenli taşınması.",
              link: "/parsiyel-tasimacilik",
            },
            {
              icon: <Truck className="w-5 h-5" />,
              title: "Kara Yolu Lojistiği",
              desc: "Türkiye geneli kara yolu lojistik çözümleri.",
              link: "/kara-yolu-tasimacilik",
            },
            {
              icon: <ShieldCheck className="w-5 h-5" />,
              title: "Panelvan Taşımacılığı",
              desc: "Şehir içi küçük hacimli hızlı taşımacılık.",
              link: "/panelvan-tasimacilik",
            },
          ].map((c, i) => (
            <motion.div
              key={c.title}
              {...card}
              transition={{ ...card.transition, delay: 0.05 * i }}
              className="flex flex-col group rounded-2xl border border-slate-200 bg-white/90 backdrop-blur supports-[backdrop-filter]:bg-white/60 p-6 hover:border-sky-300/60 hover:shadow-lg transition-colors shadow-sm"
            >
              <div className="inline-flex items-center gap-2 text-sky-700">
                {c.icon}
              </div>
              <h3 className="mt-2 text-xl font-semibold">{c.title}</h3>
              <p className="mt-2 text-slate-600">{c.desc}</p>
              <div
                onClick={() => navigation(c.link)}
                className="text-sky-700 inline-flex items-center gap-1 mt-auto cursor-pointer"
              >
                Detay <ChevronRight className="w-4 h-4" />
              </div>
            </motion.div>
          ))}
        </div>
        <Link
          className="flex items-center gap-1 text-sky-700 mt-3"
          to="/lojistik"
        >
          Dahası <ChevronRight className="w-4 h-4" />
        </Link>
      </section>

      {/* ====== TÜM TÜRKİYE KAPSAMA (Ana Vurgu) ====== */}
      <section className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <motion.div {...fadeUp(0)}>
              <span className="inline-flex items-center gap-2 bg-sky-50 border border-sky-100 text-sky-700 px-3 py-1 rounded-full text-xs tracking-wide shadow-[0_0_30px_rgba(56,189,248,0.15)]">
                <MapPin className="w-4 h-4" />
                TÜM TÜRKİYE’DE HİZMET
              </span>
            </motion.div>

            <motion.h2
              {...fadeUp(0.05)}
              className="mt-4 text-3xl md:text-4xl font-extrabold tracking-[-0.01em]"
            >
              <span className="bg-gradient-to-r from-sky-600 via-sky-500 to-blue-600 bg-clip-text text-transparent">
                81 il
              </span>
              <span className="text-slate-900">
                , tek elden lojistik çözüm.
              </span>
            </motion.h2>

            <motion.p
              {...fadeUp(0.1)}
              className="mt-4 text-slate-700 text-lg leading-relaxed"
            >
              İstanbul’dan Kars’a, Edirne’den Hakkâri’ye kadar Türkiye’nin her
              noktasına ulaşıyor, yüklerinizi zamanında ve güvenle teslim
              ediyoruz.
            </motion.p>

            <motion.div {...fadeUp(0.15)} className="mt-6 flex flex-wrap gap-3">
              {[
                "Gün içi çıkış",
                "Kapıdan Alım",
                "Şehir içi/Şehirler arası",
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
              <button className="group bg-gradient-to-r from-sky-500 to-blue-600 hover:from-sky-500 hover:to-blue-500 text-white font-semibold py-2.5 px-6 rounded-lg transition-all duration-300 shadow-md hover:shadow-sky-200 border border-sky-500/20">
                <span className="inline-flex items-center gap-2">
                  Teklif Al
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </span>
              </button>
            </motion.div>
          </div>

          <TurkeyCoverageLight />
        </div>
      </section>

      {/* ========= YENİ BÖLÜM 1: Hakkımızda (üstte yazı, altta görsel) ========= */}
      <section className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pb-8 md:pb-14">
        <motion.div {...fadeUp(0)} className="max-w-3xl mx-auto text-center">
          <span className="inline-flex items-center gap-2 bg-emerald-50 border border-emerald-100 text-emerald-700 px-3 py-1 rounded-full text-xs">
            Kısaca Biz
          </span>
          <h2 className="mt-3 text-3xl font-extrabold">
            Genç, hızlı ve{" "}
            <span className="bg-gradient-to-r from-slate-900 to-slate-700 bg-clip-text text-transparent">
              dinamik lojistik
            </span>
          </h2>
          <p className="mt-3 text-slate-600">
            Yeni nesil bir lojistik ekibi olarak, enerjimizi ve çevikliğimizi
            taşımacılık süreçlerine yansıtıyoruz. Her gönderiyi zamanında,
            özenle ve müşteri memnuniyetini ön planda tutarak ulaştırıyoruz.
          </p>

          <ul className="mt-6 grid grid-cols-1 sm:grid-cols-3 gap-3 text-left">
            {[
              "Hızlı ve güvenilir teslimatlar",
              "Genç ve enerjik ekip",
              "Müşteri odaklı yaklaşım",
            ].map((t) => (
              <li key={t} className="flex items-start gap-2">
                <CheckCircle2 className="mt-1 w-5 h-5 text-emerald-600" />
                <span className="text-slate-700">{t}</span>
              </li>
            ))}
          </ul>
        </motion.div>

        <motion.div
          {...fadeUp(0.1)}
          className="mt-8 md:mt-10 max-w-5xl mx-auto"
        >
          <div className="relative overflow-hidden rounded-2xl border border-slate-200 shadow-md">
            <img
              src="https://images.pexels.com/photos/1267329/pexels-photo-1267329.jpeg"
              alt="Depoda hazırlık yapan ekip"
              className="w-full h-auto object-cover max-h-[300px]"
              loading="lazy"
            />
          </div>
        </motion.div>
      </section>

      {/* ====== Süreç: 3 Adım ====== */}
      <section className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-12 md:pb-20">
        <motion.h3 {...fadeUp(0)} className="text-2xl md:text-3xl font-bold">
          Süreç Nasıl İşliyor?
        </motion.h3>
        <div className="mt-6 grid md:grid-cols-3 gap-6">
          {[
            {
              icon: <Phone className="w-5 h-5" />,
              title: "Talep Alımı",
              desc: "Güzergâh ve yük bilgisi ile hızlı planlama.",
            },
            {
              icon: <Package className="w-5 h-5" />,
              title: "Toplama & Çıkış",
              desc: "Kapıdan alım veya depoya teslim ile aynı gün çıkış.",
            },
            {
              icon: <Clock className="w-5 h-5" />,
              title: "Hızlı Teslim",
              desc: "Gönderilerinizi zamanında ve güvenle ulaştırıyoruz.",
            },
          ].map((s, i) => (
            <motion.div
              key={s.title}
              {...card}
              transition={{ ...card.transition, delay: 0.05 * i }}
              className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm"
            >
              <div className="inline-flex items-center gap-2 text-sky-700">
                {s.icon}
                <span className="text-sm tracking-wide">Adım {i + 1}</span>
              </div>
              <h4 className="mt-2 text-xl font-semibold">{s.title}</h4>
              <p className="mt-2 text-slate-600">{s.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ========= YENİ BÖLÜM 2: Dijital Takip & Raporlama (üstte yazı, altta görsel) ========= */}
      <section className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <motion.div {...fadeUp(0)} className="max-w-3xl mx-auto text-center">
          <span className="inline-flex items-center gap-2 bg-sky-50 border border-sky-100 text-sky-700 px-3 py-1 rounded-full text-xs">
            Güvenli Teslim
          </span>

          <h2 className="mt-3 text-3xl font-extrabold">
            Genç ve dinamik ekibimizle:{" "}
            <span className="bg-gradient-to-r from-sky-600 to-blue-700 bg-clip-text text-transparent">
              hızlı & sorunsuz
            </span>{" "}
            taşıma
          </h2>

          <p className="mt-3 text-slate-600">
            Karmaşık sistemler yerine, işinizi kolaylaştıran basit ve net
            çözümler sunuyoruz. Yüklerinizi zamanında ulaştırıyor, süreç boyunca
            her adımda size bilgi veriyoruz.
          </p>

          <div className="mt-6 grid grid-cols-1 sm:grid-cols-3 gap-3 text-left">
            {[
              "Hızlı geri dönüş ve net iletişim",
              "Zamanında ve özenli teslimatlar",
              "Müşteri memnuniyetine odaklı hizmet",
            ].map((t) => (
              <div key={t} className="flex items-start gap-2">
                <CheckCircle2 className="mt-1 w-5 h-5 text-sky-600" />
                <span className="text-slate-700">{t}</span>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          {...fadeUp(0.1)}
          className="mt-8 md:mt-10 max-w-5xl mx-auto"
        >
          <div className="relative overflow-hidden rounded-2xl border border-slate-200 shadow-md bg-white">
            <img
              src="https://images.pexels.com/photos/4481260/pexels-photo-4481260.jpeg"
              alt="Teslimat süreci görseli"
              className="w-full h-auto object-cover max-h-[300px]"
              loading="lazy"
            />
          </div>
        </motion.div>
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
                Yükünüzü birlikte hızlandıralım.
              </h4>
              <p className="text-slate-600">
                Hemen yaz, 81 il için en uygun rotayı planlayalım.
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
              <a
                href="tel:+90XXXXXXXXXX"
                className="bg-white text-slate-800 font-medium py-2.5 px-6 rounded-lg transition-all duration-300 border border-slate-300 hover:bg-slate-50"
              >
                Ara
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
