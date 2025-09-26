import { motion, easeOut } from "framer-motion";
import { Phone, Mail, Headset, PhoneCall } from "lucide-react";

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

export default function ContactPage() {
  const companyEmail = "info@orneklojistik.com"; // Şirket e-postası (tek e-posta)
  const contacts = [
    {
      name: "Koray Renkligil",
      role: "Operasyon Yöneticisi",
      phone: "+90 5XX XXX XX XX",
      email: companyEmail,
      avatar:
        "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg",
      highlights: ["Sevkiyat planlama", "Canlı takip & ETA", "SLA raporları"],
    },
    {
      name: "Ayşe Demir",
      role: "Operasyon Yöneticisi",
      phone: "+90 5YY YYY YY YY",
      email: companyEmail,
      avatar:
        "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg",
      highlights: ["Fiyatlama & teklif", "Sözleşme", "Deneme sevkiyatı"],
    },
  ];

  return (
    <main className="relative bg-gradient-to-b from-zinc-800 via-zinc-900 to-zinc-800 text-slate-900">
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
              className="inline-flex items-center gap-2 bg-white/10 border border-white/20 text-yellow-400 px-3 py-1 rounded-full text-xs tracking-wide shadow-lg shadow-amber-400/20"
            >
              <Headset className="w-4 h-4" /> İletişim
            </motion.span>

            <motion.h1
              {...fadeUp(0.05)}
              className="mt-4 text-3xl md:text-4xl font-extrabold text-yellow-500"
            >
              Doğrudan ekibimize bağlanın.
            </motion.h1>

            <motion.p
              {...fadeUp(0.1)}
              className="mt-4 text-white/70 text-lg leading-relaxed"
            >
              Form yok, bekleme yok. Aşağıdaki yetkililerle doğrudan görüşebilir
              veya şirket e-postasına tek tıkla mail atabilirsiniz.
            </motion.p>

            <motion.div {...fadeUp(0.15)} className="mt-6 flex flex-wrap gap-3">
              {["7/24 operasyon desteği", "Teklif & fiyatlandırma"].map((t) => (
                <span
                  key={t}
                  className="rounded-full border border-yellow-500/40 bg-yellow-500/20 px-3 py-1.5 text-sm text-yellow-300"
                >
                  {t}
                </span>
              ))}
            </motion.div>
          </div>

          <motion.div {...fadeUp(0.1)} className="relative overflow-hidden">
            <img
              src="/contact-dog.png"
              alt="Destek ekibi"
              className="w-full h-auto object-contain max-h-[360px]"
              loading="lazy"
            />
          </motion.div>
        </div>
      </section>

      {/* ====== Şirket E-postası (Tek e-posta) ====== */}
      <section className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 md:py-14">
        <motion.div
          {...fadeUp(0)}
          className="rounded-2xl border border-yellow-200 backdrop-blur supports-[backdrop-filter]:bg-yellow-200/20 p-6 md:p-8 shadow-sm"
        >
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div>
              <div className="text-sm text-slate-200">Şirket telefonu</div>
              <div className="mt-1 text-xl md:text-2xl font-extrabold tracking-tight text-white">
                {companyEmail}
              </div>
              <p className="mt-2 text-slate-100">
                Tüm yazışmalar için tek adres — ilgili ekip yönlendirmesi
                tarafımızdan yapılır.
              </p>
            </div>
            <div className="flex gap-3">
              <a
                href={`tel:${companyEmail}`}
                className="group bg-gradient-to-r from-amber-500 to-yellow-600 hover:from-amber-500 hover:to-yellow-500 text-white font-semibold py-2.5 px-6 rounded-lg transition-all duration-300 shadow-md"
              >
                <span className="inline-flex items-center gap-2">
                  Ara
                  <PhoneCall className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </span>
              </a>
            </div>
          </div>
        </motion.div>
      </section>
    </main>
  );
}
