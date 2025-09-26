import { motion, easeOut } from "framer-motion";
import {
  PawPrint,
  CarFront,
  Stethoscope,
  ShieldCheck,
  Clock,
  MapPin,
  ArrowRight,
  Phone,
  ChevronRight,
  CheckCircle2,
  Camera,
  Plane,
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
    <main className="relative bg-gradient-to-b from-zinc-900 via-zinc-900 to-zinc-950 text-zinc-100">
      {/* Amber halos */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-24 -left-24 h-80 w-80 rounded-full blur-3xl opacity-20 bg-amber-500/30" />
        <div className="absolute -bottom-24 -right-24 h-96 w-96 rounded-full blur-3xl opacity-10 bg-yellow-400/20" />
      </div>

      {/* Subtle grain */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.06] mix-blend-screen"
        style={{
          backgroundImage:
            "url('data:image/svg+xml;utf8,<svg xmlns=%22http://www.w3.org/2000/svg%22 width=%2240%22 height=%2240%22 viewBox=%220 0 40 40%22><filter id=%22n%22><feTurbulence type=%22fractalNoise%22 baseFrequency=%220.9%22 numOctaves=%222%22 stitchTiles=%22stitch%22/></filter><rect width=%2240%22 height=%2240%22 filter=%22url(%23n)%22 opacity=%220.22%22 fill=%22white%22/></svg>')",
        }}
      />

      {/* ====== Hizmet Özeti / Değer Kartları ====== */}
      <section className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16">
        <div className="grid [grid-template-columns:repeat(auto-fill,minmax(260px,1fr))] gap-4 md:gap-6">
          {[
            {
              icon: <Stethoscope className="w-5 h-5" />,
              title: "Veteriner Transferi",
              desc: "Randevu saatine uygun, bekletmeyen güvenli ulaşım.",
              link: "/pet-taksi/veteriner-transferi",
            },
            {
              icon: <CarFront className="w-5 h-5" />,
              title: "Şehir İçi Ekspres",
              desc: "Kısa mesafede hızlı ve konforlu kapıdan kapıya.",
              link: "/pet-taksi/sehir-ici-ekspres",
            },
            {
              icon: <Plane className="w-5 h-5" />,
              title: "Havalimanı Transferi",
              desc: "Uçuş saatine göre planlı, belge uyumlu hizmet.",
              link: "/pet-taksi/havalimani-transferi",
            },
          ].map((c, i) => (
            <motion.div
              key={c.title}
              {...card}
              transition={{ ...card.transition, delay: 0.05 * i }}
              className="flex flex-col group rounded-2xl border border-zinc-800 bg-zinc-900/70 backdrop-blur p-6 hover:border-yellow-400/40 hover:shadow-yellow-500/10 transition-colors shadow-sm"
            >
              <div className="inline-flex items-center gap-2 text-yellow-300">
                {c.icon}
              </div>
              <h3 className="mt-2 text-xl font-semibold text-zinc-100">
                {c.title}
              </h3>
              <p className="mt-2 text-zinc-300">{c.desc}</p>
              <div
                onClick={() => navigation(c.link)}
                className="text-yellow-300 inline-flex items-center gap-1 mt-auto cursor-pointer"
              >
                Detay <ChevronRight className="w-4 h-4" />
              </div>
            </motion.div>
          ))}
        </div>
        <Link
          className="flex items-center gap-1 text-yellow-300 mt-3"
          to="/pet-taksi"
        >
          Dahası <ChevronRight className="w-4 h-4" />
        </Link>
      </section>

      {/* ====== TÜM TÜRKİYE KAPSAMA (Ana Vurgu) ====== */}
      <section className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <motion.div {...fadeUp(0)}>
              <span className="inline-flex items-center gap-2 bg-amber-500/15 border border-amber-400/30 text-amber-300 px-3 py-1 rounded-full text-xs tracking-wide">
                <MapPin className="w-4 h-4" /> TÜM TÜRKİYE’DE HİZMET
              </span>
            </motion.div>

            <motion.h2
              {...fadeUp(0.05)}
              className="mt-4 text-3xl md:text-4xl font-extrabold tracking-[-0.01em]"
            >
              <span className="bg-gradient-to-r from-amber-400 via-yellow-300 to-amber-400 bg-clip-text text-transparent">
                81 il
              </span>
              <span className="text-zinc-100">
                , tek elden pet taksi çözümü.
              </span>
            </motion.h2>

            <motion.p
              {...fadeUp(0.1)}
              className="mt-4 text-zinc-300 text-lg leading-relaxed"
            >
              İstanbul’dan Kars’a, Edirne’den Hakkâri’ye; minik dostlarınızı
              klimalı ve hijyenik araçlarımızla zamanında ulaştırıyoruz. Yol
              boyunca fotoğraf ve konum paylaşıyoruz.
            </motion.p>

            <motion.div {...fadeUp(0.15)} className="mt-6 flex flex-wrap gap-3">
              {["Anlık konum", "Kapıdan alım", "Şehir içi/Şehirler arası"].map(
                (t) => (
                  <span
                    key={t}
                    className="rounded-full border border-zinc-800 bg-zinc-900/60 px-3 py-1.5 text-sm text-zinc-200"
                  >
                    {t}
                  </span>
                )
              )}
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

          {/* Türkiye kapsama bileşenin koyu temaya uyumlu versiyonu */}
          <div className="rounded-2xl border border-zinc-800 bg-zinc-900/60 p-3">
            <TurkeyCoverageLight />
          </div>
        </div>
      </section>

      {/* ========= YENİ BÖLÜM 1: Hakkımızda (üstte yazı, altta görsel) ========= */}
      <section className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pb-8 md:pb-14">
        <motion.div {...fadeUp(0)} className="max-w-3xl mx-auto text-center">
          <span className="inline-flex items-center gap-2 bg-amber-500/15 border border-amber-400/30 text-amber-300 px-3 py-1 rounded-full text-xs">
            Kısaca Biz
          </span>
          <h2 className="mt-3 text-3xl font-extrabold">
            Şefkatli, güvenli ve{" "}
            <span className="bg-gradient-to-r from-amber-400 to-yellow-300 bg-clip-text text-transparent">
              dinamik pet taksi
            </span>
          </h2>
          <p className="mt-3 text-zinc-300">
            Yeni nesil bir ekip olarak enerjimizi ve özenimizi yolculuklara
            yansıtıyoruz. Dostlarınızı stres yaratmadan, zamanında ve şeffaf bir
            süreçle ulaştırıyoruz.
          </p>

          <ul className="mt-6 grid grid-cols-1 sm:grid-cols-3 gap-3 text-left">
            {[
              "Şefkatli sürücüler",
              "Anlık konum & fotoğraf",
              "Kapıdan kapıya",
            ].map((t) => (
              <li key={t} className="flex items-start gap-2">
                <CheckCircle2 className="mt-1 w-5 h-5 text-yellow-300" />
                <span className="text-zinc-200">{t}</span>
              </li>
            ))}
          </ul>
        </motion.div>

        <motion.div
          {...fadeUp(0.1)}
          className="mt-8 md:mt-10 max-w-5xl mx-auto"
        >
          <div className="relative overflow-hidden rounded-2xl border border-zinc-800 shadow-md">
            <img
              src="https://images.unsplash.com/photo-1548199973-03cce0bbc87b?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0"
              alt="Araçta konforlu yolculuk yapan köpek"
              className="w-full h-auto object-cover max-h-[320px]"
              loading="lazy"
            />
            <div className="absolute bottom-3 left-3 flex items-center gap-2 rounded-full bg-zinc-900/85 backdrop-blur px-3 py-1 text-xs border border-zinc-700 text-zinc-200">
              <Camera className="w-4 h-4 text-yellow-300" /> Fotoğraf & Konum
              Paylaşımı
            </div>
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
              title: "Rezervasyon",
              desc: "Adres, saat ve pet bilgileri alınır.",
            },
            {
              icon: <ShieldCheck className="w-5 h-5" />,
              title: "Hazırlık",
              desc: "Kafes/kemer, temizlik ve rota kontrolü.",
            },
            {
              icon: <Clock className="w-5 h-5" />,
              title: "Yolculuk & Teslim",
              desc: "Anlık konum ve fotoğraf ile güvenli teslim.",
            },
          ].map((s, i) => (
            <motion.div
              key={s.title}
              {...card}
              transition={{ ...card.transition, delay: 0.05 * i }}
              className="rounded-2xl border border-zinc-800 bg-zinc-900 p-6 shadow-sm"
            >
              <div className="inline-flex items-center gap-2 text-yellow-300">
                {s.icon}
                <span className="text-sm tracking-wide text-zinc-300">
                  Adım {i + 1}
                </span>
              </div>
              <h4 className="mt-2 text-xl font-semibold text-zinc-100">
                {s.title}
              </h4>
              <p className="mt-2 text-zinc-300">{s.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ========= YENİ BÖLÜM 2: Güven & Hijyen ========= */}
      <section className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <motion.div {...fadeUp(0)} className="max-w-3xl mx-auto text-center">
          <span className="inline-flex items-center gap-2 bg-amber-500/15 border border-amber-400/30 text-amber-300 px-3 py-1 rounded-full text-xs">
            Güvenli Teslim
          </span>
          <h2 className="mt-3 text-3xl font-extrabold">
            Şeffaf süreç,{" "}
            <span className="bg-gradient-to-r from-amber-400 to-yellow-300 bg-clip-text text-transparent">
              düşük stres
            </span>{" "}
            ve hijyen
          </h2>
          <p className="mt-3 text-zinc-300">
            İşinizi zorlaştıran prosedürler yerine basit ve net adımlar.
            Dostlarınızın konforu ve güvenliği için gerekli ekipman ve temizlik
            standartları.
          </p>

          <div className="mt-6 grid grid-cols-1 sm:grid-cols-3 gap-3 text-left">
            {[
              "Kafes ve sabitleme kemeri",
              "Araç içi temizlik & dezenfeksiyon",
              "Şeffaf iletişim & güncellemeler",
            ].map((t) => (
              <div key={t} className="flex items-start gap-2">
                <CheckCircle2 className="mt-1 w-5 h-5 text-yellow-300" />
                <span className="text-zinc-200">{t}</span>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          {...fadeUp(0.1)}
          className="mt-8 md:mt-10 max-w-5xl mx-auto"
        >
          <div className="relative overflow-hidden rounded-2xl border border-zinc-800 shadow-md bg-zinc-900/60">
            <img
              src="https://images.unsplash.com/photo-1517849845537-4d257902454a?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0"
              alt="Mutlu köpek yolculuk sonrası"
              className="w-full h-auto object-cover max-h-[320px]"
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
            className="rounded-2xl border border-zinc-800 bg-gradient-to-r from-zinc-900 to-zinc-950 p-6 md:p-8 flex flex-col md:flex-row items-center justify-between gap-4"
          >
            <div>
              <h4 className="text-xl md:text-2xl font-bold">
                Dostunuzun yolculuğunu birlikte planlayalım
              </h4>
              <p className="text-zinc-300">
                81 ilde saat, rota ve ekipmanı netleştirip hemen fiyatlandırma
                gönderelim.
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
              <a
                href="tel:+90XXXXXXXXXX"
                className="bg-zinc-900 text-zinc-100 font-medium py-2.5 px-6 rounded-lg transition-all duration-300 border border-zinc-700 hover:bg-zinc-800"
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
