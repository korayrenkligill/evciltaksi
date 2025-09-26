import React, { useMemo, useState } from "react";
import { motion, easeOut } from "framer-motion";
import {
  PawPrint,
  Star,
  Quote,
  Filter,
  Clock,
  MapPin,
  ArrowRight,
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

// Sahte yorum datası (gerçek müşteri bilgisi değildir)
const TESTIMONIALS = [
  {
    id: "t1",
    name: "Selin A.",
    pet: "Moka (Kedi)",
    avatar:
      "https://images.unsplash.com/photo-1544006659-f0b21884ce1d?q=80&w=300&auto=format&fit=crop",
    service: "Veteriner Transferi",
    route: "Kadıköy → Göztepe",
    rating: 5,
    date: "2025-09-12",
    photos: [
      "https://images.unsplash.com/photo-1593139253167-1b1f4e1b6159?q=80&w=400&auto=format&fit=crop",
    ],
    text: "Moka vet yolunda hiç strese girmedi. Kafesi sabitlendi, sürücü her 20 dakikada fotoğraf attı. Randevu saatine tam vaktinde vardık.",
  },
  {
    id: "t2",
    name: "Burak K.",
    pet: "Zeytin (Köpek)",
    avatar:
      "https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?q=80&w=300&auto=format&fit=crop",
    service: "Şehir İçi Ekspres",
    route: "Beşiktaş → Nişantaşı",
    rating: 5,
    date: "2025-09-08",
    photos: [],
    text: "Kapıdan kapıya hizmet çok rahat. Zeytin araca biner binmez kemerle sabitlendi. Canlı konum bağlantısı sayesinde içim rahattı.",
  },
  {
    id: "t3",
    name: "Ece D.",
    pet: "Loki (Kedi)",
    avatar:
      "https://images.unsplash.com/photo-1545167622-3a6ac756afa4?q=80&w=300&auto=format&fit=crop",
    service: "Havalimanı Transferi",
    route: "Ataşehir → Sabiha Gökçen",
    rating: 4,
    date: "2025-09-03",
    photos: [
      "https://images.unsplash.com/photo-1517849845537-4d257902454a?q=80&w=400&auto=format&fit=crop",
    ],
    text: "Uçuş saati öncesi doğru zamanda yola çıktık. Terminal kuralları ve evraklar konusunda yardımcı oldular. Sadece trafikten dolayı 10 dk gecikme oldu ama planı etkileyen bir şey olmadı.",
  },
  {
    id: "t4",
    name: "Mert Y.",
    pet: "Şans (Köpek)",
    avatar:
      "https://images.unsplash.com/photo-1527980965255-d3b416303d12?q=80&w=300&auto=format&fit=crop",
    service: "Uzun Mesafe",
    route: "İzmir → Bursa",
    rating: 5,
    date: "2025-08-29",
    photos: [
      "https://images.unsplash.com/photo-1518020382113-a7e8fc38eac9?q=80&w=400&auto=format&fit=crop",
    ],
    text: "Mola planı, su ve ped hazırlığı mükemmeldi. Şans sakin kaldı, araç çok temiz ve klimalıydı. Fotoğraflarla anlık bilgilendirme yaptılar.",
  },
  {
    id: "t5",
    name: "Gizem T.",
    pet: "Bambi (Kedi)",
    avatar:
      "https://images.unsplash.com/photo-1552374196-c4e7ffc6e126?q=80&w=300&auto=format&fit=crop",
    service: "Grup Taşıma (Çoklu Pet)",
    route: "Üsküdar → Maslak",
    rating: 5,
    date: "2025-08-20",
    photos: [],
    text: "Aynı rotada iki kedi daha vardı, her biri ayrı kafeste ve çok hijyenikti. Ekonomik olduğu için tercih ettik, pişman olmadık.",
  },
  {
    id: "t6",
    name: "Onur S.",
    pet: "Mia (Köpek)",
    avatar:
      "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=300&auto=format&fit=crop",
    service: "Özel İhtiyaç",
    route: "Bakırköy → Florya",
    rating: 5,
    date: "2025-08-15",
    photos: [],
    text: "Mia biraz yaşlı ve hareketi kısıtlı. Çok nazik davrandılar, araca binişini bile aceleye getirmediler. Tam puan!",
  },
  {
    id: "t7",
    name: "Deniz R.",
    pet: "Toby (Köpek)",
    avatar:
      "https://images.unsplash.com/photo-1541534401786-2077eed87a72?q=80&w=300&auto=format&fit=crop",
    service: "Şehir İçi Ekspres",
    route: "Karşıyaka → Bornova",
    rating: 4,
    date: "2025-08-10",
    photos: [],
    text: "Hızlı geldiler, iletişim sürekli. Biraz trafik vardı ama ETA güncellemeleri sayesinde hazırlıklıydık.",
  },
  {
    id: "t8",
    name: "Ahu B.",
    pet: "Boncuk (Kedi)",
    avatar:
      "https://images.unsplash.com/photo-1544005316-04ae1b3ba3a2?q=80&w=300&auto=format&fit=crop",
    service: "Veteriner Transferi",
    route: "Konak → Alsancak",
    rating: 5,
    date: "2025-07-28",
    photos: [],
    text: "Kafes sabitlemesi ve sessiz sürüş çok iyi. Boncuk normalde çok miyavlar, bu kez gayet sakindi.",
  },
];

const FILTERS = [
  "Tümü",
  "Veteriner Transferi",
  "Havalimanı Transferi",
  "Şehir İçi Ekspres",
  "Uzun Mesafe",
  "Grup Taşıma (Çoklu Pet)",
  "Özel İhtiyaç",
];

export default function TestimonialsPage() {
  const data = useMemo(() => {
    let rows = [...TESTIMONIALS];
    return rows;
  }, []);

  const avg = useMemo(() => {
    const total = TESTIMONIALS.reduce((s, r) => s + r.rating, 0);
    return (total / TESTIMONIALS.length).toFixed(1);
  }, []);

  const dist = useMemo(() => {
    const d = [0, 0, 0, 0, 0, 0]; // index 1..5
    TESTIMONIALS.forEach((r) => (d[r.rating] += 1));
    return d;
  }, []);

  return (
    <main className="relative text-zinc-100 bg-gradient-to-b from-zinc-900 via-zinc-900 to-zinc-950">
      {/* Amber halo */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-24 -left-24 h-80 w-80 rounded-full blur-3xl opacity-20 bg-amber-500/30" />
        <div className="absolute -bottom-24 -right-24 h-96 w-96 rounded-full blur-3xl opacity-10 bg-yellow-400/20" />
      </div>

      {/* Hero */}
      <section className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 md:pt-20">
        <div>
          <motion.span
            {...fadeUp(0)}
            className="inline-flex items-center gap-2 bg-amber-500/15 border border-amber-400/30 text-amber-300 px-3 py-1 rounded-full text-xs tracking-wide"
          >
            <PawPrint className="w-4 h-4" /> Müşteri Yorumları
          </motion.span>
          <motion.h1
            {...fadeUp(0.05)}
            className="mt-4 text-3xl md:text-4xl font-extrabold tracking-[-0.01em]"
          >
            Şefkatli taşımanın gerçek hikâyeleri
          </motion.h1>
          <motion.p
            {...fadeUp(0.1)}
            className="mt-4 text-zinc-300 text-lg leading-relaxed"
          >
            Her yolculuk sonrası müşterilerimizden geri bildirim alıyoruz.
            Aşağıdaki yorumlar sahte örneklerdir ve yalnızca tasarım amaçlıdır.
          </motion.p>

          {/* Rating özet */}
          <motion.div {...fadeUp(0.15)} className="mt-6 grid grid-cols-3 gap-4">
            <div className="rounded-xl border border-zinc-800 bg-zinc-900/60 p-4 text-center">
              <div className="text-3xl font-extrabold text-yellow-300">
                {avg}
              </div>
              <div className="text-xs text-zinc-400 mt-1">Ortalama Puan</div>
            </div>
            <div className="col-span-2 rounded-xl border border-zinc-800 bg-zinc-900/60 p-4">
              {[5, 4, 3, 2, 1].map((n) => {
                const count = dist[n];
                const pct = Math.round((count / TESTIMONIALS.length) * 100);
                return (
                  <div
                    key={n}
                    className="flex items-center gap-2 mb-2 last:mb-0"
                  >
                    <div className="w-8 text-sm text-zinc-300">{n}★</div>
                    <div className="h-2 flex-1 rounded-full bg-zinc-800 overflow-hidden">
                      <div
                        className="h-full bg-yellow-400"
                        style={{ width: `${pct}%` }}
                      />
                    </div>
                    <div className="w-10 text-right text-xs text-zinc-400">
                      {pct}%
                    </div>
                  </div>
                );
              })}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Yorum Kartları – modern, resimli grid */}
      <section className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 md:py-14">
        <div className="grid [grid-template-columns:repeat(auto-fill,minmax(280px,1fr))] gap-6">
          {data.map((r, i) => (
            <motion.article
              key={r.id}
              {...card}
              transition={{ ...card.transition, delay: 0.03 * i }}
              className="relative overflow-hidden rounded-2xl border border-zinc-800 bg-zinc-900/70 backdrop-blur p-5 hover:border-yellow-400/40 hover:shadow-yellow-500/10"
            >
              {/* Üst şerit */}
              <div className="flex items-start gap-3">
                <img
                  src={r.avatar}
                  alt={r.name}
                  className="h-10 w-10 rounded-full object-cover border border-zinc-800"
                />
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 flex-wrap">
                    <h3 className="font-semibold text-zinc-100 truncate">
                      {r.name}
                    </h3>
                    <span className="text-xs text-zinc-400">•</span>
                    <span className="text-xs text-zinc-400 truncate">
                      {r.pet}
                    </span>
                  </div>
                  <div className="mt-0.5 flex items-center gap-2 text-xs text-zinc-400">
                    <MapPin className="w-3.5 h-3.5" /> {r.route}
                  </div>
                </div>
                <div className="shrink-0">
                  <div className="inline-flex items-center gap-1 rounded-full bg-amber-500/15 border border-amber-400/30 px-2 py-0.5">
                    <Star className="w-3.5 h-3.5 text-yellow-300" />
                    <span className="text-xs text-yellow-300">
                      {r.rating}.0
                    </span>
                  </div>
                </div>
              </div>

              {/* Metin */}
              <p className="mt-3 text-sm text-zinc-300 leading-relaxed">
                <span className="inline-flex -translate-y-0.5">
                  <Quote className="w-4 h-4 text-yellow-300" />
                </span>{" "}
                {r.text}
              </p>

              {/* Etiketler */}
              <div className="mt-3 flex flex-wrap items-center gap-2">
                <span className="rounded-full border border-zinc-800 bg-zinc-950/60 px-2.5 py-1 text-xs text-zinc-300">
                  {r.service}
                </span>
                <span className="rounded-full border border-zinc-800 bg-zinc-950/60 px-2.5 py-1 text-xs text-zinc-300 flex items-center gap-1">
                  <Clock className="w-3.5 h-3.5" />{" "}
                  {new Date(r.date).toLocaleDateString("tr-TR")}
                </span>
                {r.photos.length > 0 && (
                  <span className="rounded-full border border-zinc-800 bg-zinc-950/60 px-2.5 py-1 text-xs text-zinc-300 inline-flex items-center gap-1">
                    <Camera className="w-3.5 h-3.5" /> {r.photos.length}{" "}
                    fotoğraf
                  </span>
                )}
              </div>

              {/* Opsiyonel foto – arka plan image overlay */}
              {r.photos[0] && (
                <img
                  src={r.photos[0]}
                  alt="yolculuk"
                  className="absolute inset-0 h-full w-full object-cover opacity-10 pointer-events-none"
                />
              )}
            </motion.article>
          ))}
        </div>

        {/* Boş durum */}
        {data.length === 0 && (
          <div className="mt-6 rounded-xl border border-zinc-800 bg-zinc-900/60 p-8 text-center text-zinc-400">
            Aramanıza uygun yorum bulunamadı.
          </div>
        )}
      </section>

      {/* CTA Şeridi */}
      <section className="relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
          <motion.div
            {...fadeUp(0)}
            className="rounded-2xl border border-zinc-800 bg-gradient-to-r from-zinc-900 to-zinc-950 p-6 md:p-8 flex flex-col md:flex-row items-center justify-between gap-4"
          >
            <div>
              <h4 className="text-xl md:text-2xl font-bold">
                Siz de deneyiminizi paylaşın
              </h4>
              <p className="text-zinc-300">
                Yeni yorumlar planlama ve kaliteyi iyileştirir. Dostlarımız için
                daha da iyi olalım.
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
