import { motion, easeOut } from "framer-motion";
import { Phone, Mail, Headset } from "lucide-react";

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
              <Headset className="w-4 h-4" /> İletişim
            </motion.span>

            <motion.h1
              {...fadeUp(0.05)}
              className="mt-4 text-3xl md:text-4xl font-extrabold tracking-[-0.01em]"
            >
              Doğrudan ekibimize bağlanın.
            </motion.h1>

            <motion.p
              {...fadeUp(0.1)}
              className="mt-4 text-slate-700 text-lg leading-relaxed"
            >
              Form yok, bekleme yok. Aşağıdaki yetkililerle doğrudan görüşebilir
              veya şirket e-postasına tek tıkla mail atabilirsiniz.
            </motion.p>

            <motion.div {...fadeUp(0.15)} className="mt-6 flex flex-wrap gap-3">
              {["7/24 operasyon desteği", "Teklif & fiyatlandırma"].map((t) => (
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
              src="https://images.unsplash.com/photo-1587560699334-cc4ff634909a?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Destek ekibi"
              className="w-full h-auto object-cover max-h-[360px]"
              loading="lazy"
            />
          </motion.div>
        </div>
      </section>

      {/* ====== Şirket E-postası (Tek e-posta) ====== */}
      <section className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 md:py-14">
        <motion.div
          {...fadeUp(0)}
          className="rounded-2xl border border-slate-200 bg-white/90 backdrop-blur supports-[backdrop-filter]:bg-white/60 p-6 md:p-8 shadow-sm"
        >
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div>
              <div className="text-sm text-slate-600">Şirket e-postası</div>
              <div className="mt-1 text-xl md:text-2xl font-extrabold tracking-tight">
                {companyEmail}
              </div>
              <p className="mt-2 text-slate-600">
                Tüm yazışmalar için tek adres — ilgili ekip yönlendirmesi
                tarafımızdan yapılır.
              </p>
            </div>
            <div className="flex gap-3">
              <a
                href={`mailto:${companyEmail}`}
                className="group bg-gradient-to-r from-sky-500 to-blue-600 hover:from-sky-500 hover:to-blue-500 text-white font-semibold py-2.5 px-6 rounded-lg transition-all duration-300 border border-sky-500/20 shadow-md"
              >
                <span className="inline-flex items-center gap-2">
                  Mail Gönder
                  <Mail className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </span>
              </a>
            </div>
          </div>
        </motion.div>
      </section>

      {/* ====== Sorumlular (2 kişi) ====== */}
      <section className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-12 md:pb-16">
        <motion.h2 {...fadeUp(0)} className="text-2xl md:text-3xl font-bold">
          Doğrudan İletişim
        </motion.h2>
        <div className="mt-6 grid md:grid-cols-2 gap-6">
          {contacts.map((c, i) => (
            <motion.div
              key={c.name}
              {...card}
              transition={{ ...card.transition, delay: 0.05 * i }}
              className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm"
            >
              <div className="flex items-start gap-4">
                <img
                  src={c.avatar}
                  alt={c.name}
                  className="w-16 h-16 rounded-xl object-cover border border-slate-200"
                  loading="lazy"
                />
                <div className="flex-1">
                  <div className="text-lg font-semibold text-slate-900">
                    {c.name}
                  </div>
                  <div className="text-sm text-slate-600">{c.role}</div>
                  {/* <ul className="mt-3 space-y-1 text-sm text-slate-600">
                    {c.highlights.map((h) => (
                      <li key={h} className="flex items-start gap-2">
                        <ChevronRight className="mt-0.5 w-4 h-4 text-sky-600" />{" "}
                        {h}
                      </li>
                    ))}
                  </ul> */}

                  <div className="mt-4 flex flex-wrap gap-2">
                    <a
                      href={`tel:${c.phone.replace(/\s/g, "")}`}
                      className="inline-flex items-center gap-2 rounded-lg border border-slate-200 bg-white px-3 py-2 text-sm font-medium hover:bg-slate-50"
                    >
                      <Phone className="w-4 h-4" /> {c.phone}
                    </a>
                    <a
                      href={`mailto:${c.email}`}
                      className="inline-flex items-center gap-2 rounded-lg border border-slate-200 bg-white px-3 py-2 text-sm font-medium hover:bg-slate-50"
                    >
                      <Mail className="w-4 h-4" /> {c.email}
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </main>
  );
}
