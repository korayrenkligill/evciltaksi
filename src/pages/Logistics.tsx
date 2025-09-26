import { motion, easeOut } from "framer-motion";
import {
  Package,
  Truck,
  Boxes,
  Cog,
  Car,
  CheckCircle2,
  ArrowRight,
  ChevronRight,
  MapPin,
  ShieldCheck,
} from "lucide-react";
import { Link } from "react-router-dom";

// Ortak animasyon presetleri
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
 *  LOJİSTİK ANA SAYFA
 *  (Alt sayfaların kısa tanıtımı + yönlendirmeler)
 * =======================================================*/
export default function LogisticsPage() {
  const services = [
    {
      name: "Parsiyel Taşımacılık",
      desc: "Parça yükler için ekonomik ve güvenli sevkiyat.",
      to: "/lojistik/parsiyel",
      icon: <Package className="w-5 h-5" />,
      bullets: ["Düzenli çıkışlar", "Hasarsızlık odağı", "POD/teslim raporu"],
      img: "https://images.pexels.com/photos/4484079/pexels-photo-4484079.jpeg",
    },
    {
      name: "Karayolu Taşımacılık",
      desc: "Türkiye geneli komple/parsiyel karayolu çözümleri.",
      to: "/lojistik/karayolu",
      icon: <Truck className="w-5 h-5" />,
      bullets: ["81 il kapsama", "Rota optimizasyonu", "Canlı takip"],
      img: "https://images.pexels.com/photos/2199293/pexels-photo-2199293.jpeg",
    },
    {
      name: "Parça Yük Taşımacılık",
      desc: "Küçük hacimler için hızlı ve esnek teslimat.",
      to: "/lojistik/parca-yuk",
      icon: <Boxes className="w-5 h-5" />,
      bullets: ["Hızlı konsolidasyon", "Şehir içi+arası", "SLA uyarıları"],
      img: "https://images.pexels.com/photos/6169660/pexels-photo-6169660.jpeg",
    },
    {
      name: "Yedek Parça Taşımacılık",
      desc: "Otomotiv/makine yedek parçaları için güvenli taşıma.",
      to: "/lojistik/yedek-parca",
      icon: <Cog className="w-5 h-5" />,
      bullets: ["Kırılgan paketleme", "İzlenebilir süreç", "Acil sevkiyat"],
      img: "https://images.pexels.com/photos/4484072/pexels-photo-4484072.jpeg",
    },
    {
      name: "Panelvan Taşımacılık",
      desc: "Şehir içi küçük hacimli ekspres çözümler.",
      to: "/lojistik/panelvan",
      icon: <Truck className="w-5 h-5" />,
      bullets: ["Kapıdan kapıya", "Saatlik planlama", "Esnek rota"],
      img: "https://images.pexels.com/photos/6170157/pexels-photo-6170157.jpeg",
    },
    {
      name: "Minivan Taşımacılık",
      desc: "Küçük ölçekli yüklerde ekonomik ve hızlı teslimat.",
      to: "/lojistik/minivan",
      icon: <Car className="w-5 h-5" />,
      bullets: ["Aynı gün çıkış", "Dinamik fiyat", "Şehir içi odak"],
      img: "https://images.pexels.com/photos/1402787/pexels-photo-1402787.jpeg",
    },
  ];

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
              <MapPin className="w-4 h-4" /> Lojistik Çözümlerimiz
            </motion.span>

            <motion.h1
              {...fadeUp(0.05)}
              className="mt-4 text-3xl md:text-4xl font-extrabold tracking-[-0.01em]"
            >
              81 il, tek panel: ihtiyacınıza göre modüler hizmetler
            </motion.h1>

            <motion.p
              {...fadeUp(0.1)}
              className="mt-4 text-slate-700 text-lg leading-relaxed"
            >
              Parsiyelden minivana; planlama, takip ve teslim süreçlerini
              dijital olarak yöneterek hasarsız ve zamanında teslimat deneyimi
              sunuyoruz.
            </motion.p>
          </div>

          <motion.div
            {...fadeUp(0.1)}
            className="relative overflow-hidden rounded-2xl border border-slate-200 shadow-md"
          >
            <img
              src="https://images.pexels.com/photos/2199293/pexels-photo-2199293.jpeg"
              alt="Lojistik ağı"
              className="w-full h-auto object-cover max-h-[360px]"
              loading="lazy"
            />
            <div className="absolute bottom-3 left-3 flex items-center gap-2 rounded-full bg-white/90 backdrop-blur px-3 py-1 text-xs border border-slate-200">
              <ShieldCheck className="w-4 h-4 text-emerald-600" /> Hasarsızlık &
              Şeffaflık
            </div>
          </motion.div>
        </div>
      </section>

      {/* ====== HİZMET KARTLARI ====== */}
      <section className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 md:py-14">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s, i) => (
            <motion.div
              key={s.name}
              {...card}
              transition={{ ...card.transition, delay: 0.05 * i }}
              className="group rounded-2xl border border-slate-200 bg-white/90 backdrop-blur supports-[backdrop-filter]:bg-white/60 p-6 hover:border-sky-300/60 hover:shadow-lg transition-colors shadow-sm"
            >
              <div className="inline-flex items-center gap-2 text-sky-700">
                {s.icon}
              </div>
              <h3 className="mt-2 text-xl font-semibold">{s.name}</h3>
              <p className="mt-2 text-slate-600">{s.desc}</p>
              <ul className="mt-3 space-y-1">
                {s.bullets.map((b) => (
                  <li
                    key={b}
                    className="flex items-start gap-2 text-sm text-slate-600"
                  >
                    <CheckCircle2 className="mt-0.5 w-4 h-4 text-sky-600" /> {b}
                  </li>
                ))}
              </ul>
              <div className="mt-4 flex items-center gap-2">
                <Link
                  to={s.to}
                  className="inline-flex items-center gap-2 text-sky-700 font-medium"
                >
                  Detay <ChevronRight className="w-4 h-4" />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ====== CTA ŞERİDİ ====== */}
      <section className="relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
          <motion.div
            {...fadeUp(0)}
            className="rounded-2xl border border-slate-200 bg-gradient-to-r from-sky-50 to-blue-50 p-6 md:p-8 flex flex-col md:flex-row items-center justify-between gap-4"
          >
            <div>
              <h4 className="text-xl md:text-2xl font-bold">
                Hangi çözüm uygun? Birlikte seçelim.
              </h4>
              <p className="text-slate-600">
                İhtiyacınızı paylaşın; rota, süre ve maliyeti netleştirelim.
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

/* =========================================================
 *  ALT SAYFALAR (Her hizmet için detay sayfası)
 *  Not: İçerikleri örnek; metinleri/görselleri özelleştirebilirsiniz.
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
            className="mt-4 text-slate-700 text-lg leading-relaxed"
          >
            {subtitle}
          </motion.p>
        </div>
        <motion.div
          {...fadeUp(0.1)}
          className="relative overflow-hidden rounded-2xl border border-slate-200 shadow-md"
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
            className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm"
          >
            <div className="flex items-start gap-2 text-slate-700">
              <CheckCircle2 className="mt-0.5 w-5 h-5 text-sky-600" /> {t}
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
          className="rounded-2xl border border-slate-200 bg-gradient-to-r from-sky-50 to-blue-50 p-6 md:p-8 flex flex-col md:flex-row items-center justify-between gap-4"
        >
          <div>
            <h4 className="text-xl md:text-2xl font-bold">Hemen planlayalım</h4>
            <p className="text-slate-600">
              İhtiyaca göre rota ve araç tipini belirleyip en uygun maliyetle
              başlatıyoruz.
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
  );
}

/* ---- 1) Parsiyel Taşımacılık ---- */
export function ParsiyelTasimaPage() {
  return (
    <main className="relative bg-gradient-to-b from-slate-50 via-white to-sky-50 text-slate-900">
      <ServiceHero
        title="Parsiyel Taşımacılık"
        subtitle="Aynı araçta birden fazla yük konsolide edilerek ekonomik ve güvenli sevkiyat sağlanır. Düzenli çıkış ve teslim görünürlüğü ile planlar sadeleşir."
        img="https://images.pexels.com/photos/6169660/pexels-photo-6169660.jpeg"
      />
      <ServiceBullets
        items={[
          "Düzenli hatlar ve zaman pencereleri",
          "POD/teslim raporları",
          "Hasarsızlık ve izlenebilirlik",
        ]}
      />
      <ServiceCTA />
    </main>
  );
}

/* ---- 2) Karayolu Taşımacılık ---- */
export function KarayoluTasimaPage() {
  return (
    <main className="relative bg-gradient-to-b from-slate-50 via-white to-sky-50 text-slate-900">
      <ServiceHero
        title="Karayolu Taşımacılık"
        subtitle="Komple/parsiyel çözümlerle 81 ilde aynı standartta hizmet. Rota optimizasyonu ve canlı takip ile zamanında teslim."
        img="https://images.pexels.com/photos/2199293/pexels-photo-2199293.jpeg"
      />
      <ServiceBullets
        items={[
          "81 il kapsama",
          "Rota ve doluluk optimizasyonu",
          "Gerçek zamanlı ETA & bildirimler",
        ]}
      />
      <ServiceCTA />
    </main>
  );
}

/* ---- 3) Parça Yük Taşımacılık ---- */
export function ParcaYukTasimaPage() {
  return (
    <main className="relative bg-gradient-to-b from-slate-50 via-white to-sky-50 text-slate-900">
      <ServiceHero
        title="Parça Yük Taşımacılık"
        subtitle="Küçük hacimli yüklerde hızlı konsolidasyon ve esnek teslim seçenekleri. Şehir içi/şehirler arası karma rotalarda verimlilik."
        img="https://images.pexels.com/photos/6169660/pexels-photo-6169660.jpeg"
      />
      <ServiceBullets
        items={[
          "Hızlı konsolidasyon",
          "SLA uyarıları",
          "Şehir içi + şehirler arası dağıtım",
        ]}
      />
      <ServiceCTA />
    </main>
  );
}

/* ---- 4) Yedek Parça Taşımacılık ---- */
export function YedekParcaTasimaPage() {
  return (
    <main className="relative bg-gradient-to-b from-slate-50 via-white to-sky-50 text-slate-900">
      <ServiceHero
        title="Yedek Parça Taşımacılık"
        subtitle="Otomotiv ve makine sektörlerine özel; kırılgan paketleme, barkod takip ve acil sevkiyat protokolleri ile güvenli taşıma."
        img="https://images.pexels.com/photos/4484072/pexels-photo-4484072.jpeg"
      />
      <ServiceBullets
        items={[
          "Kırılgan ve değerli yük prosedürleri",
          "Barkod/seri numarası takibi",
          "Acil hatta öncelikli teslim",
        ]}
      />
      <ServiceCTA />
    </main>
  );
}

/* ---- 5) Panelvan Taşımacılık ---- */
export function PanelvanTasimaPage() {
  return (
    <main className="relative bg-gradient-to-b from-slate-50 via-white to-sky-50 text-slate-900">
      <ServiceHero
        title="Panelvan Taşımacılık"
        subtitle="Şehir içi küçük hacimli yüklerde hızlı, esnek ve kapıdan kapıya teslim. Dar sokak ve hassas teslim noktaları için ideal."
        img="https://images.pexels.com/photos/6170157/pexels-photo-6170157.jpeg"
      />
      <ServiceBullets
        items={["Saatlik planlama", "Esnek rota", "Kapıdan kapıya"]}
      />
      <ServiceCTA />
    </main>
  );
}

/* ---- 6) Minivan Taşımacılık ---- */
export function MinivanTasimaPage() {
  return (
    <main className="relative bg-gradient-to-b from-slate-50 via-white to-sky-50 text-slate-900">
      <ServiceHero
        title="Minivan Taşımacılık"
        subtitle="Küçük ölçekli ve öncelikli yüklerde ekonomik, hızlı ve esnek teslimat."
        img="https://images.pexels.com/photos/1402787/pexels-photo-1402787.jpeg"
      />
      <ServiceBullets
        items={["Aynı gün çıkış", "Dinamik fiyatlama", "Şehir içi odak"]}
      />
      <ServiceCTA />
    </main>
  );
}
