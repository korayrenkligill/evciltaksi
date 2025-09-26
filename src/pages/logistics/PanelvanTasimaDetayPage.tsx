import { motion, easeOut } from "framer-motion";
import {
  Truck,
  Package,
  ShieldCheck,
  Route,
  Clock,
  Thermometer,
  ClipboardCheck,
  ArrowRight,
  CheckCircle2,
  LayoutGrid,
  MoveRight,
} from "lucide-react";
import { Link } from "react-router-dom";
import { useState } from "react";

// <Header /> altına yerleştir.
const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.2 },
  transition: { duration: 0.8, ease: easeOut, delay },
});

const card = {
  initial: { opacity: 0, y: 14, scale: 0.98 },
  whileInView: { opacity: 1, y: 0, scale: 1 },
  viewport: { once: true, amount: 0.2 },
  transition: { duration: 0.6, ease: easeOut },
};

export default function PanelvanTasimaDetayPage() {
  const [tab, setTab] = useState<"panelvan" | "kamyonet">("panelvan");

  return (
    <main className="relative bg-gradient-to-b from-slate-50 via-white to-sky-50 text-slate-900">
      {/* ====== HERO (kolaj + breadcrumb) ====== */}
      <section className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 md:pt-20">
        <div className="mt-6 grid lg:grid-cols-[320px,1fr] gap-10">
          {/* Sticky hızlı özellik rayı (tamamen yeni) */}
          <aside className="lg:sticky lg:top-24 z-20 h-max">
            <motion.div
              {...fadeUp(0)}
              className="rounded-2xl border border-emerald-200 bg-white/90 backdrop-blur p-5 shadow-sm"
            >
              <div className="font-semibold mb-3 flex items-center gap-2">
                <LayoutGrid className="w-4 h-4 text-emerald-600" />
                Hızlı Özellikler
              </div>
              <ul className="space-y-3 text-sm">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="mt-0.5 w-4 h-4 text-emerald-600" />
                  8–15 m³, 800–1500 kg kapasite
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="mt-0.5 w-4 h-4 text-emerald-600" />
                  Şehir içi erişim, kapalı kasa güvenliği
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="mt-0.5 w-4 h-4 text-emerald-600" />
                  Canlı takip & ETA, POD paylaşımı
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="mt-0.5 w-4 h-4 text-emerald-600" />
                  İsteğe bağlı ısı kontrollü seçenek
                </li>
              </ul>

              <div className="mt-5 grid grid-cols-3 gap-2 text-center">
                {[
                  { l: "Zamanında", v: "%98+" },
                  { l: "Hasarsız", v: "%99+" },
                  { l: "Kapsam", v: "81 il" },
                ].map((m) => (
                  <div
                    key={m.l}
                    className="rounded-xl border border-emerald-200 p-3"
                  >
                    <div className="text-[10px] text-slate-500">{m.l}</div>
                    <div className="text-sm font-semibold">{m.v}</div>
                  </div>
                ))}
              </div>
            </motion.div>
          </aside>

          {/* İçerik gövdesi */}
          <div>
            <div className="grid relative z-10 lg:grid-cols-2 gap-6 items-start">
              <div>
                <motion.h1
                  {...fadeUp(0.02)}
                  className="text-3xl md:text-4xl font-extrabold tracking-[-0.01em]"
                >
                  Panelvan Taşımacılık
                </motion.h1>
                <motion.p
                  {...fadeUp(0.06)}
                  className="mt-3 text-slate-700 text-lg leading-relaxed"
                >
                  Dar sokaklardan AVM rampalarına kadar yüksek erişim
                  kabiliyetine sahip, hızlı yükleme/boşaltma ve düşük hasar
                  riskiyle şehir içi ve kısa/orta mesafe taşımaları optimize
                  ediyoruz.
                </motion.p>

                <motion.div
                  {...fadeUp(0.1)}
                  className="mt-4 flex gap-2 flex-wrap"
                >
                  {["Kapıdan kapıya", "Hızlı erişim", "SLA & KPI"].map((t) => (
                    <span
                      key={t}
                      className="rounded-full border border-teal-200 bg-white px-3 py-1.5 text-sm text-slate-700"
                    >
                      {t}
                    </span>
                  ))}
                </motion.div>
              </div>

              {/* Kolaj: iki görsel + diyagonal badge (farklı hero) */}
              <motion.div
                {...fadeUp(0.08)}
                className="relative grid grid-cols-2 gap-3"
              >
                <div className="rounded-xl overflow-hidden border border-teal-200 shadow-sm">
                  <img
                    src="https://images.unsplash.com/photo-1573376670774-4427757f7963?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    alt="Panelvan şehir içi"
                    className="w-full h-48 object-cover"
                    loading="lazy"
                  />
                </div>
                <div className="rounded-xl overflow-hidden border border-emerald-200 shadow-sm translate-y-6">
                  <img
                    src="https://images.pexels.com/photos/5025646/pexels-photo-5025646.jpeg"
                    alt="Yükleme alanı"
                    className="w-full h-48 object-cover"
                    loading="lazy"
                  />
                </div>

                <div className="pointer-events-none absolute -top-3 -right-3 rotate-3">
                  <div className="bg-gradient-to-r from-emerald-500 to-teal-500 text-white text-xs font-semibold px-3 py-1 rounded-md shadow">
                    Hızlı & Güvenli
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* ====== Panelvan Nedir? (çizgili bölüm ayırıcı) ====== */}
      <section className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="border border-slate-200 rounded-2xl bg-white">
          <div className="grid md:grid-cols-3">
            <motion.div {...fadeUp(0)} className="p-6 md:col-span-2">
              <h2 className="text-xl md:text-2xl font-bold">Panelvan Nedir?</h2>
              <p className="mt-3 text-slate-700">
                Şehir içi ve kısa/orta mesafelerde çevik manevra, hızlı yükleme
                ve erişilebilirlik sağlayan kapalı kasa ticari araç. Küçük/orta
                hacimli yüklerde hız ve güvenlik avantajı sunar.
              </p>
              <ul className="mt-4 space-y-2 text-sm text-slate-700">
                {[
                  "Konut/iş yeri/AVM gibi noktalara doğrudan erişim",
                  "Kısa duraklarla çoklu teslimat esnekliği",
                  "Kırılgan ürünler için düşük riskli taşıma",
                ].map((b) => (
                  <li key={b} className="flex items-start gap-2">
                    <CheckCircle2 className="mt-0.5 w-4 h-4 text-emerald-600" />
                    {b}
                  </li>
                ))}
              </ul>
            </motion.div>
            <motion.div
              {...fadeUp(0.04)}
              className="p-6 border-t md:border-t-0 md:border-l border-slate-200 bg-slate-50 rounded-b-2xl md:rounded-b-none md:rounded-r-2xl"
            >
              <div className="font-semibold mb-3 flex items-center gap-2">
                <Truck className="w-4 h-4 text-teal-700" />
                Kapasite Özeti
              </div>
              <dl className="grid grid-cols-2 gap-3 text-sm">
                <div>
                  <dt className="text-slate-500">Hacim</dt>
                  <dd className="font-semibold">8–15 m³</dd>
                </div>
                <div>
                  <dt className="text-slate-500">Taşıma</dt>
                  <dd className="font-semibold">800–1500 kg</dd>
                </div>
                <div>
                  <dt className="text-slate-500">İç Ölçüler</dt>
                  <dd className="font-semibold">U 2.5–3.2 m</dd>
                </div>
                <div>
                  <dt className="text-slate-500">Isı Kontrollü</dt>
                  <dd className="font-semibold">Opsiyonel</dd>
                </div>
              </dl>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ====== Kullanım Senaryoları (yatay zaman çizgisi — yeni görünüm) ====== */}
      <section className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <motion.h3 {...fadeUp(0)} className="text-2xl md:text-3xl font-bold">
          Kullanım Senaryoları
        </motion.h3>

        <div className="mt-6 overflow-x-auto">
          <div className="min-w-[720px] bg-white rounded-2xl border border-emerald-200 p-5">
            <div className="relative flex items-stretch justify-between">
              {[
                {
                  h: "E-ticaret Transfer",
                  p: "Depo → mağaza/son kullanıcı.",
                  icon: <Package className="w-4 h-4" />,
                },
                {
                  h: "Servis & Yedek Parça",
                  p: "Acil parça, gün içi teslim.",
                  icon: <ClipboardCheck className="w-4 h-4" />,
                },
                {
                  h: "Mağazalar Arası",
                  p: "Hızlı iç transfer turları.",
                  icon: <Route className="w-4 h-4" />,
                },
                {
                  h: "Soğutmalı Dağıtım",
                  p: "Seçili lokasyonlarda ısı kontrollü.",
                  icon: <Thermometer className="w-4 h-4" />,
                },
              ].map((s, i, arr) => (
                <div key={s.h} className="flex-1 px-3">
                  <div className="flex items-center gap-2 text-sm font-semibold">
                    <span className="text-emerald-700">{s.icon}</span>
                    {s.h}
                  </div>
                  <div className="text-xs text-slate-600 mt-1">{s.p}</div>
                  <div className="mt-4 relative">
                    <div className="h-1 bg-gradient-to-r from-emerald-200 to-teal-200 rounded-full" />
                    <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-5 h-5 rounded-full border-2 border-emerald-400 bg-white" />
                  </div>
                  {i < arr.length - 1 && (
                    <div className="text-emerald-600 text-xs mt-2 flex items-center gap-1">
                      Sonraki adım <MoveRight className="w-4 h-4" />
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ====== Özellik Satırları (sol renk bandı — farklı tasarım) ====== */}
      <section className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="grid md:grid-cols-2 gap-6">
          {[
            {
              h: "Güvenli Taşıma",
              p: "İç sabitleme, bağlama ve sigortalama politikaları.",
              icon: <ShieldCheck className="w-5 h-5" />,
              band: "from-teal-600 to-cyan-600",
            },
            {
              h: "Hızlı Yükleme/Boşaltma",
              p: "Dar alanlara uygun erişim, rampa uyumluluğu.",
              icon: <Clock className="w-5 h-5" />,
              band: "from-emerald-700 to-lime-600",
            },
          ].map((c, i) => (
            <motion.div
              key={c.h}
              {...card}
              transition={{ ...card.transition, delay: 0.05 * i }}
              className="relative rounded-2xl border border-slate-200 bg-white p-6 pl-16 shadow-sm"
            >
              <div
                className={`absolute inset-y-0 left-0 w-10 rounded-l-2xl bg-gradient-to-b ${c.band}`}
              />
              <div className="flex items-center gap-2 font-semibold">
                <span className="text-emerald-700">{c.icon}</span>
                {c.h}
              </div>
              <p className="mt-2 text-slate-600 text-sm">{c.p}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ====== Sekmeli Karşılaştırma (Panelvan / Kamyonet) — yeni UI ====== */}
      <section className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="rounded-2xl border border-emerald-200 bg-white p-6">
          <div className="flex items-center gap-2">
            <button
              onClick={() => setTab("panelvan")}
              className={`px-4 py-2 rounded-lg text-sm font-semibold border ${
                tab === "panelvan"
                  ? "bg-emerald-50 border-emerald-300 text-emerald-700"
                  : "bg-white border-slate-200 text-slate-700"
              }`}
            >
              Panelvan
            </button>
            <button
              onClick={() => setTab("kamyonet")}
              className={`px-4 py-2 rounded-lg text-sm font-semibold border ${
                tab === "kamyonet"
                  ? "bg-emerald-50 border-emerald-300 text-emerald-700"
                  : "bg-white border-slate-200 text-slate-700"
              }`}
            >
              Kamyonet
            </button>
          </div>

          <div className="mt-5 overflow-x-auto">
            <table className="min-w-[560px] w-full text-sm">
              <thead>
                <tr className="text-left text-slate-500">
                  <th className="py-2 pr-4">Kriter</th>
                  <th className="py-2 pr-4">
                    {tab === "panelvan" ? "Panelvan" : "Kamyonet"}
                  </th>
                  <th className="py-2">Açıklama</th>
                </tr>
              </thead>
              <tbody className="align-top">
                {[
                  {
                    k: "Hacim",
                    pv: "8–15 m³",
                    km: "15–25+ m³",
                    a: "Araç tipine göre değişir.",
                  },
                  {
                    k: "Taşıma",
                    pv: "800–1500 kg",
                    km: "1500–3500+ kg",
                    a: "Yükün niteliğine göre hesaplanır.",
                  },
                  {
                    k: "Erişim",
                    pv: "Şehir içi alanlara yüksek uygunluk",
                    km: "Bazı noktalarda kısıtlar olabilir",
                    a: "Rampalar, site içi, dar sokaklar vb.",
                  },
                  {
                    k: "Senaryo",
                    pv: "Gün içi, çok duraklı dağıtım",
                    km: "Daha yüksek hacimli rotalar",
                    a: "Operasyonun hedeflerine göre seçilir.",
                  },
                ].map((row) => (
                  <tr key={row.k} className="border-t border-slate-200">
                    <td className="py-3 pr-4 font-medium">{row.k}</td>
                    <td className="py-3 pr-4">
                      {tab === "panelvan" ? row.pv : row.km}
                    </td>
                    <td className="py-3 text-slate-600">{row.a}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* ====== Medya Şeridi (farklı yapı) ====== */}
      <section className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="grid md:grid-cols-3 gap-4">
          {[
            "https://images.pexels.com/photos/4569340/pexels-photo-4569340.jpeg",
            "https://images.pexels.com/photos/4569338/pexels-photo-4569338.jpeg",
            "https://images.pexels.com/photos/4246095/pexels-photo-4246095.jpeg",
          ].map((src, i) => (
            <motion.div
              key={src}
              {...card}
              transition={{ ...card.transition, delay: 0.05 * i }}
              className="rounded-2xl overflow-hidden border border-slate-200"
            >
              <img
                src={src}
                className="w-full h-44 object-cover"
                loading="lazy"
              />
            </motion.div>
          ))}
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
