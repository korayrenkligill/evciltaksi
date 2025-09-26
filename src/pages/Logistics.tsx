import { motion, easeOut } from "framer-motion";
import {
  PawPrint,
  Stethoscope,
  CarFront,
  Plane,
  Clock,
  CheckCircle2,
  ArrowRight,
  ChevronRight,
  MapPin,
  ShieldCheck,
  PhoneCall,
  Camera,
} from "lucide-react";
import { Link } from "react-router-dom";

// Animasyon presetleri
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

/* =========================================================
 *  PET TAKSİ ANA SAYFA (Dark + Amber/Yellow)
 * =======================================================*/
export default function PetTaxiPage() {
  const services = [
    {
      name: "Veteriner Transferi",
      desc: "Randevu saatine uygun, bekletmeyen güvenli ulaşım.",
      to: "/pet-taksi/veteriner-transferi",
      icon: <Stethoscope className="w-5 h-5" />,
      bullets: ["Randevuya zamanında", "Kafes/kemer sabitleme", "Anlık konum"],
      img: "https://images.unsplash.com/photo-1576201836106-db1758fd1c97?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.1.0",
    },
    {
      name: "Havalimanı Transferi",
      desc: "Uçuş saatine göre zaman planlı, evden terminale.",
      to: "/pet-taksi/havalimani-transferi",
      icon: <Plane className="w-5 h-5" />,
      bullets: [
        "Uçuşa göre kalkış",
        "Belge/kurallar uyumu",
        "Fotoğraf paylaşımı",
      ],
      img: "https://images.pexels.com/photos/33977895/pexels-photo-33977895.jpeg",
    },
    {
      name: "Şehir İçi Ekspres",
      desc: "Kısa mesafede hızlı ve konforlu ulaşım.",
      to: "/pet-taksi/sehir-ici-ekspres",
      icon: <CarFront className="w-5 h-5" />,
      bullets: ["Aynı gün çıkış", "Dinamik rota", "Kapıdan kapıya"],
      img: "https://images.unsplash.com/photo-1518020382113-a7e8fc38eac9?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.1.0",
    },
    {
      name: "Uzun Mesafe",
      desc: "Şehirler arası konforlu ve mola planlı yolculuk.",
      to: "/pet-taksi/uzun-mesafe",
      icon: <Clock className="w-5 h-5" />,
      bullets: ["Mola & su planı", "Sessiz/klimalı araç", "Takip bağlantısı"],
      img: "https://images.pexels.com/photos/18954332/pexels-photo-18954332.jpeg",
    },
    {
      name: "Grup Taşıma (Çoklu Pet)",
      desc: "Aynı rotada birden fazla dost için ekonomik seçenek.",
      to: "/pet-taksi/grup-tasima",
      icon: <PawPrint className="w-5 h-5" />,
      bullets: ["Ayrı kafesler", "Hijyen protokolü", "Planlı duraklar"],
      img: "https://images.unsplash.com/photo-1534361960057-19889db9621e?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.1.0",
    },
    {
      name: "Özel İhtiyaç",
      desc: "Yaşlı/engelli/diyetli dostlara özel taşıma.",
      to: "/pet-taksi/ozel-ihtiyac",
      icon: <ShieldCheck className="w-5 h-5" />,
      bullets: ["Veteriner talimatı", "Düşük stres", "Ekipman hazır"],
      img: "https://images.unsplash.com/photo-1530281700549-e82e7bf110d6?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.1.0",
    },
  ];

  return (
    <main className="relative text-zinc-100 bg-gradient-to-b from-zinc-900 via-zinc-900 to-zinc-950">
      {/* Arka plan süs: amber halo */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-24 -left-24 h-80 w-80 rounded-full blur-3xl opacity-20 bg-amber-500/30" />
        <div className="absolute -bottom-24 -right-24 h-96 w-96 rounded-full blur-3xl opacity-10 bg-yellow-400/20" />
      </div>

      {/* Grain */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.06] mix-blend-screen"
        style={{
          backgroundImage:
            "url('data:image/svg+xml;utf8,<svg xmlns=%22http://www.w3.org/2000/svg%22 width=%2240%22 height=%2240%22 viewBox=%220 0 40 40%22><filter id=%22n%22><feTurbulence type=%22fractalNoise%22 baseFrequency=%220.9%22 numOctaves=%222%22 stitchTiles=%22stitch%22/></filter><rect width=%2240%22 height=%2240%22 filter=%22url(%23n)%22 opacity=%220.22%22 fill=%22white%22/></svg>')",
        }}
      />

      {/* ====== HERO ====== */}
      <section className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 md:pt-20">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          <div>
            <motion.span
              {...fadeUp(0)}
              className="inline-flex items-center gap-2 bg-amber-500/15 border border-amber-400/30 text-amber-300 px-3 py-1 rounded-full text-xs tracking-wide"
            >
              <PawPrint className="w-4 h-4" /> Pet Taksi Hizmetlerimiz
            </motion.span>

            <motion.h1
              {...fadeUp(0.05)}
              className="mt-4 text-3xl md:text-4xl font-extrabold tracking-[-0.01em]"
            >
              Şefkatli sürüş, şeffaf süreç:{" "}
              <span className="bg-gradient-to-r from-amber-400 via-yellow-300 to-amber-400 bg-clip-text text-transparent">
                kapıdan kapıya güven
              </span>
            </motion.h1>

            <motion.p
              {...fadeUp(0.1)}
              className="mt-4 text-zinc-300 text-lg leading-relaxed"
            >
              Veteriner randevusu, kuaför, havalimanı ya da yeni yuvası...
              Dostlarınızı klimalı ve hijyenik araçlarımızla zamanında
              ulaştırıyoruz. Yol boyunca fotoğraf ve canlı konum paylaşımıyla
              içiniz rahat.
            </motion.p>

            {/* Badge şeridi */}
            <motion.div {...fadeUp(0.15)} className="mt-5 flex flex-wrap gap-3">
              {[
                "Anlık konum",
                "Kafes/kemer",
                "Hijyen protokolü",
                "7/24 iletişim",
              ].map((t) => (
                <span
                  key={t}
                  className="rounded-full border border-zinc-800 bg-zinc-900/60 px-3 py-1.5 text-sm text-zinc-200"
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
              <Link
                to="/hizmetlerimiz"
                className="bg-zinc-900 text-zinc-100 font-medium py-2.5 px-6 rounded-lg transition-all duration-300 border border-zinc-700 hover:bg-zinc-800"
              >
                Tüm Hizmetler
              </Link>
            </motion.div>
          </div>

          <motion.div
            {...fadeUp(0.1)}
            className="relative overflow-hidden rounded-2xl border border-zinc-800 shadow-md"
          >
            <img
              src="https://images.unsplash.com/photo-1548199973-03cce0bbc87b?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.1.0"
              alt="Pet taksi aracı ve köpek"
              className="w-full h-auto object-cover max-h-[360px]"
              loading="lazy"
            />
            <div className="absolute bottom-3 left-3 flex items-center gap-2 rounded-full bg-zinc-900/85 backdrop-blur px-3 py-1 text-xs border border-zinc-700 text-zinc-200">
              <Camera className="w-4 h-4 text-yellow-300" /> Fotoğraf & Konum
              Paylaşımı
            </div>
          </motion.div>
        </div>

        {/* Hızlı istatistikler */}
        <motion.div
          {...fadeUp(0.25)}
          className="mt-10 grid grid-cols-2 md:grid-cols-4 gap-3"
        >
          {[
            { k: "98%", v: "Zamanında Teslim" },
            { k: "7/24", v: "Canlı Destek" },
            { k: "500+", v: "Güvenli Yolculuk" },
            { k: "0", v: "Kayıp Bildirimi" },
          ].map((s, i) => (
            <div
              key={i}
              className="rounded-xl border border-zinc-800 bg-zinc-900/60 p-4 text-center"
            >
              <div className="text-2xl font-extrabold text-yellow-300">
                {s.k}
              </div>
              <div className="text-xs text-zinc-400 mt-1">{s.v}</div>
            </div>
          ))}
        </motion.div>
      </section>

      {/* ====== HİZMET KARTLARI (daha modern grid) ====== */}
      <section className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 md:py-14">
        <div className="grid [grid-template-columns:repeat(auto-fill,minmax(260px,1fr))] gap-6">
          {services.map((s, i) => (
            <motion.div
              key={s.name}
              {...card}
              transition={{ ...card.transition, delay: 0.05 * i }}
              className="group relative overflow-hidden rounded-2xl border border-zinc-800 bg-zinc-900/70 backdrop-blur p-5 shadow-sm hover:shadow-yellow-500/10 hover:border-yellow-400/40"
            >
              <div className="absolute inset-0 bg-gradient-to-t from-zinc-900/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="relative z-10 inline-flex items-center gap-2 text-yellow-300">
                {s.icon}
              </div>
              <h3 className="relative z-10 mt-2 text-xl font-semibold text-zinc-100">
                {s.name}
              </h3>
              <p className="relative z-10 mt-2 text-zinc-300">{s.desc}</p>

              <ul className="relative z-10 mt-3 space-y-1">
                {s.bullets.map((b) => (
                  <li
                    key={b}
                    className="flex items-start gap-2 text-sm text-zinc-300"
                  >
                    <CheckCircle2 className="mt-0.5 w-4 h-4 text-yellow-300" />{" "}
                    {b}
                  </li>
                ))}
              </ul>

              <img
                src={s.img}
                alt={s.name}
                className="absolute inset-0 h-full w-full object-cover opacity-20 group-hover:opacity-30 transition-opacity"
                loading="lazy"
              />

              <div className="relative z-10 mt-4 flex items-center gap-2">
                <Link
                  to={s.to}
                  className="inline-flex items-center gap-2 text-yellow-300 font-medium"
                >
                  Detay <ChevronRight className="w-4 h-4" />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ====== Adım Adım Süreç (timeline) ====== */}
      <section className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2 {...fadeUp(0)} className="text-2xl md:text-3xl font-bold">
          Yolculuk Nasıl İşler?
        </motion.h2>
        <div className="mt-6 grid md:grid-cols-4 gap-4">
          {[
            {
              t: "Rezervasyon",
              d: "Adres, saat ve pet bilgileri alınır.",
              i: <PhoneCall className="w-5 h-5" />,
            },
            {
              t: "Hazırlık",
              d: "Kafes/kemer ve temizlik kontrolleri.",
              i: <ShieldCheck className="w-5 h-5" />,
            },
            {
              t: "Yolculuk",
              d: "Konum & fotoğraf paylaşımları.",
              i: <Camera className="w-5 h-5" />,
            },
            {
              t: "Teslim",
              d: "Kapıdan kapıya güvenli teslim.",
              i: <MapPin className="w-5 h-5" />,
            },
          ].map((s, i) => (
            <motion.div
              key={s.t}
              {...card}
              transition={{ ...card.transition, delay: 0.05 * i }}
              className="rounded-2xl border border-zinc-800 bg-zinc-900/60 p-5"
            >
              <div className="inline-flex items-center gap-2 text-yellow-300">
                {s.i}
              </div>
              <div className="mt-2 font-semibold">{s.t}</div>
              <p className="text-zinc-300 text-sm mt-1">{s.d}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ====== FAQ (akordeon basit) ====== */}
      <section className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-10 md:py-14">
        <motion.h3 {...fadeUp(0)} className="text-2xl font-bold">
          Sık Sorulan Sorular
        </motion.h3>
        <div className="mt-5 divide-y divide-zinc-800 border border-zinc-800 rounded-2xl bg-zinc-900/60">
          {[
            {
              q: "Kafes zorunlu mu?",
              a: "Sürüş güvenliği için küçük/orta boylarda kafes ve sabitleme kemeri kullanıyoruz. Büyük ırklar için özel kemer çözümleri mevcut.",
            },
            {
              q: "Canlı konumu nasıl paylaşırım?",
              a: "Yolculuk başladığında size özel takip bağlantısı ve belirli periyotlarda fotoğraf gönderiyoruz.",
            },
            {
              q: "Ücretlendirme nasıl?",
              a: "Mesafe + süre temelli şeffaf fiyat. Ek durak ve bekleme süresi önceden bilgilendirilir.",
            },
          ].map((f, i) => (
            <details key={f.q} className="group open:bg-zinc-900/70">
              <summary className="cursor-pointer select-none list-none px-4 py-4 flex items-center justify-between">
                <span className="text-zinc-100 font-medium">{f.q}</span>
                <ChevronRight className="w-4 h-4 text-zinc-400 group-open:rotate-90 transition-transform" />
              </summary>
              <div className="px-4 pb-4 text-zinc-300 text-sm">{f.a}</div>
              {i !== 2 && <div className="h-px bg-zinc-800" />}
            </details>
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
                Dostunuz için en uygun planı birlikte çıkaralım
              </h4>
              <p className="text-zinc-300">
                Saat, rota ve ekipmanı netleştirelim; anında fiyatlandırma
                gönderelim.
              </p>
            </div>
            <div className="flex gap-3">
              <Link
                to="/iletisim"
                className="group bg-gradient-to-r from-amber-500 to-yellow-400 hover:from-amber-400 hover:to-yellow-300 text-zinc-900 font-semibold py-2.5 px-6 rounded-lg transition-all duration-300 border border-yellow-400/30 shadow-md"
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

/* =========================================================
 *  ALT SAYFALAR (Her hizmet için detay sayfası)
 *  — Dark tema + amber vurgular, modern içerik
 * =======================================================*/
function ServiceHero({
  title,
  subtitle,
  img,
}: {
  title: string;
  subtitle: string;
  img: string;
}) {
  return (
    <section className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 md:pt-20">
      <div className="grid lg:grid-cols-2 gap-10 items-center">
        <div>
          <motion.h1
            {...fadeUp(0)}
            className="text-3xl md:text-4xl font-extrabold tracking-[-0.01em]"
          >
            {title}
          </motion.h1>
          <motion.p
            {...fadeUp(0.05)}
            className="mt-4 text-zinc-300 text-lg leading-relaxed"
          >
            {subtitle}
          </motion.p>
        </div>
        <motion.div
          {...fadeUp(0.1)}
          className="relative overflow-hidden rounded-2xl border border-zinc-800 shadow-md"
        >
          <img
            src={img}
            alt={title}
            className="w-full h-auto object-cover max-h-[360px]"
            loading="lazy"
          />
        </motion.div>
      </div>
    </section>
  );
}

function ServiceBullets({ items }: { items: string[] }) {
  return (
    <section className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 md:py-14">
      <div className="grid md:grid-cols-3 gap-6">
        {items.map((t, i) => (
          <motion.div
            key={t}
            {...card}
            transition={{ ...card.transition, delay: 0.05 * i }}
            className="rounded-2xl border border-zinc-800 bg-zinc-900 p-6 shadow-sm"
          >
            <div className="flex items-start gap-2 text-zinc-300">
              <CheckCircle2 className="mt-0.5 w-5 h-5 text-yellow-300" /> {t}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

function ServiceCTA() {
  return (
    <section className="relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
        <motion.div
          {...fadeUp(0)}
          className="rounded-2xl border border-zinc-800 bg-gradient-to-r from-zinc-900 to-zinc-950 p-6 md:p-8 flex flex-col md:flex-row items-center justify-between gap-4"
        >
          <div>
            <h4 className="text-xl md:text-2xl font-bold">Hemen planlayalım</h4>
            <p className="text-zinc-300">
              Saat ve rota detaylarını paylaşın, en uygun planı oluşturalım.
            </p>
          </div>
          <div className="flex gap-3">
            <Link
              to="/iletisim"
              className="group bg-gradient-to-r from-amber-500 to-yellow-400 hover:from-amber-400 hover:to-yellow-300 text-zinc-900 font-semibold py-2.5 px-6 rounded-lg transition-all duration-300 border border-yellow-400/30 shadow-md"
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
  );
}

/* ---- 1) Veteriner Transferi ---- */
export function VeterinerTransferiPage() {
  return (
    <main className="relative bg-gradient-to-b from-zinc-900 via-zinc-900 to-zinc-950 text-zinc-100">
      <ServiceHero
        title="Veteriner Transferi"
        subtitle="Randevu saatine uygun zaman yönetimi, düşük stresli sürüş ve anlık bilgilendirme."
        img="https://images.unsplash.com/photo-1566837945700-30057527ade0?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0"
      />
      <ServiceBullets
        items={[
          "Randevuya zamanında",
          "Kafes/kemer sabitleme",
          "Takip bağlantısı",
        ]}
      />
      <ServiceCTA />
    </main>
  );
}

/* ---- 2) Havalimanı Transferi ---- */
export function HavalimaniTransferiPage() {
  return (
    <main className="relative bg-gradient-to-b from-zinc-900 via-zinc-900 to-zinc-950 text-zinc-100">
      <ServiceHero
        title="Havalimanı Transferi"
        subtitle="Uçuş planına uygun kalkış saatleri, terminal kurallarına uyum ve belge desteği."
        img="https://images.unsplash.com/photo-1476610182048-b716b8518aae?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0"
      />
      <ServiceBullets
        items={[
          "Uçuşa göre kalkış",
          "Kabin/kargo kuralları",
          "Fotoğraf paylaşımı",
        ]}
      />
      <ServiceCTA />
    </main>
  );
}

/* ---- 3) Şehir İçi Ekspres ---- */
export function SehirIciEkspresPage() {
  return (
    <main className="relative bg-gradient-to-b from-zinc-900 via-zinc-900 to-zinc-950 text-zinc-100">
      <ServiceHero
        title="Şehir İçi Ekspres"
        subtitle="Kısa mesafede hızlı, kapıdan kapıya ve konforlu transfer."
        img="https://images.unsplash.com/photo-1548199973-03cce0bbc87b?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0"
      />
      <ServiceBullets
        items={["Aynı gün çıkış", "Dinamik rota", "Anlık konum"]}
      />
      <ServiceCTA />
    </main>
  );
}

/* ---- 4) Uzun Mesafe ---- */
export function UzunMesafePage() {
  return (
    <main className="relative bg-gradient-to-b from-zinc-900 via-zinc-900 to-zinc-950 text-zinc-100">
      <ServiceHero
        title="Uzun Mesafe"
        subtitle="Şehirler arası düşük stresli sürüş, mola ve su planı ile konforlu yolculuk."
        img="https://images.unsplash.com/photo-1489440543286-a69330151c0a?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0"
      />
      <ServiceBullets
        items={["Mola & su planı", "Sessiz/klimalı araç", "Takip bağlantısı"]}
      />
      <ServiceCTA />
    </main>
  );
}

/* ---- 5) Grup Taşıma ---- */
export function GrupTasimaPage() {
  return (
    <main className="relative bg-gradient-to-b from-zinc-900 via-zinc-900 to-zinc-950 text-zinc-100">
      <ServiceHero
        title="Grup Taşıma (Çoklu Pet)"
        subtitle="Aynı rotada birden fazla dost için ekonomik ve hijyenik seçenek."
        img="https://images.unsplash.com/photo-1507146426996-ef05306b995a?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0"
      />
      <ServiceBullets
        items={["Ayrı kafesler", "Hijyen protokolü", "Planlı duraklar"]}
      />
      <ServiceCTA />
    </main>
  );
}

/* ---- 6) Özel İhtiyaç ---- */
export function OzelIhtiyacPage() {
  return (
    <main className="relative bg-gradient-to-b from-zinc-900 via-zinc-900 to-zinc-950 text-zinc-100">
      <ServiceHero
        title="Özel İhtiyaç"
        subtitle="Yaşlı, engelli veya diyetli dostlara özel taşıma ve veteriner talimatlarına uyum."
        img="https://images.unsplash.com/photo-1530281700549-e82e7bf110d6?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0"
      />
      <ServiceBullets
        items={["Veteriner talimatı", "Düşük stres", "Ekipman hazır"]}
      />
      <ServiceCTA />
    </main>
  );
}
