import { Routes, Route, useLocation, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import Main from "../layouts/Main";
import Header from "../components/header/Header";
import HomePage from "./Home";
import AboutPage from "./AboutUs";
import WhyUsPage from "./WhyUs";
import ContactPage from "./Contact";
import ScrollToTop from "../utils/ScrollToTop";
import LogisticsPage from "./Logistics";
import ParsiyelTasimaDetayPage from "./logistics/ParsiyelTasimaDetayPage";
import KarayoluTasimaDetayPage from "./logistics/KarayoluTasimaDetayPage";
import ParcaYukTasimaDetayPage from "./logistics/ParcaYukTasimaDetayPage";
import YedekParcaTasimaDetayPage from "./logistics/YedekParcaTasimaDetayPage";
import PanelvanTasimaDetayPage from "./logistics/PanelvanTasimaDetayPage";
import MinivanTasimaDetayPage from "./logistics/MinivanTasimaDetayPage";
import { ArrowRight, Phone } from "lucide-react";

export function AnimatedRoutes() {
  const location = useLocation();
  const navigation = useNavigate();

  return (
    <>
      <ScrollToTop />
      <Main>
        <Routes location={location} key={location.pathname}>
          <Route
            path="/"
            element={
              <div className="h-full flex-1">
                <Header
                  title={
                    <h2 className="text-4xl md:text-5xl font-extrabold leading-tight tracking-[-0.02em]">
                      <span className="text-zinc-950/95">
                        Yükünüz hafiflesin,{" "}
                      </span>
                      <motion.span
                        initial={{ opacity: 0, y: 18 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.9, ease: "easeOut" }}
                        className="bg-gradient-to-r from-blue-500 via-blue-600 to-sky-600 bg-clip-text text-transparent drop-shadow-sm"
                      >
                        işiniz hızlansın.
                      </motion.span>
                    </h2>
                  }
                  button={
                    <motion.div
                      initial={{ opacity: 0, y: 28 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{
                        duration: 0.9,
                        delay: 0.55,
                        ease: "easeOut",
                      }}
                      className="flex flex-col sm:flex-row gap-4 justify-center items-center"
                    >
                      <motion.button
                        onClick={() => navigation("/iletisim")}
                        whileHover={{ scale: 1.05 }}
                        className="group bg-gradient-to-r from-sky-700 to-blue-600 hover:from-sky-400 hover:to-blue-500 text-white font-semibold py-2.5 px-7 rounded-lg text-lg transition-all duration-300 shadow-2xl hover:shadow-sky-400/25"
                      >
                        <span className="flex items-center gap-2">
                          İletişime Geç
                          <Phone className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        </span>
                      </motion.button>

                      <motion.button
                        onClick={() => navigation("/lojistik")}
                        whileHover={{ scale: 1.05 }}
                        className="bg-zinc-950/70 backdrop-blur-md hover:bg-zinc-950/40 text-white font-medium py-2.5 px-7 rounded-lg text-lg transition-all duration-300 border border-zinc-950 hover:border-zinc-950/40"
                      >
                        Hizmetlerimiz
                      </motion.button>
                    </motion.div>
                  }
                  badgeText="Akıllı, Şeffaf, Çevik Lojistik"
                  subtitle="Gerçek lojistik dijitalde planlanır, sahada kazanılır."
                  description="Biz hız ve güveni getiriyoruz; siz işinize odaklanın."
                  indicators={true}
                  minimal={false}
                />
                <HomePage />
              </div>
            }
          />
          <Route
            path="/hakkimizda"
            element={
              <div>
                <Header
                  title={
                    <h2 className="text-4xl md:text-5xl font-extrabold leading-tight tracking-[-0.02em]">
                      <span className="text-zinc-950/95">
                        Bizim hikâyemiz,{" "}
                      </span>
                      <motion.span
                        initial={{ opacity: 0, y: 18 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.9, ease: "easeOut" }}
                        className="bg-gradient-to-r from-sky-700 to-blue-600 hover:from-sky-400 hover:to-blue-500 bg-clip-text text-transparent drop-shadow-sm"
                      >
                        sizin güveniniz.
                      </motion.span>
                    </h2>
                  }
                  button={
                    <motion.div
                      initial={{ opacity: 0, y: 28 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{
                        duration: 0.9,
                        delay: 0.55,
                        ease: "easeOut",
                      }}
                      className="flex flex-col sm:flex-row gap-4 justify-center items-center"
                    >
                      <motion.button
                        onClick={() => navigation("/iletisim")}
                        whileHover={{ scale: 1.05 }}
                        className="bg-zinc-950/70 backdrop-blur-md hover:bg-zinc-950/40 text-white font-medium py-2.5 px-7 rounded-lg text-lg transition-all duration-300 border border-zinc-950 hover:border-zinc-950/40"
                      >
                        İletişime Geç
                      </motion.button>
                    </motion.div>
                  }
                  badgeText="Deneyim, Güven, Vizyon"
                  subtitle="Yola çıktığımız ilk günden bugüne, işimizi tutkuyla yapıyoruz."
                  description="Müşterilerimiz için şeffaf, çevik ve güvenilir lojistik çözümleri geliştiriyoruz. Bizim için başarı, uzun vadeli iş ortaklıkları kurmak ve sektöre değer katmaktır."
                  indicators={true}
                  minimal={false}
                />

                <AboutPage />
              </div>
            }
          />
          <Route
            path="/neden-biz"
            element={
              <div>
                <Header
                  title={
                    <h2 className="text-4xl md:text-5xl font-extrabold leading-tight tracking-[-0.02em]">
                      <span className="text-zinc-950/95">
                        Neden bizi seçmelisiniz?{" "}
                      </span>
                    </h2>
                  }
                  button={
                    <motion.div
                      initial={{ opacity: 0, y: 28 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{
                        duration: 0.9,
                        delay: 0.55,
                        ease: "easeOut",
                      }}
                      className="flex flex-col sm:flex-row gap-4 justify-center items-center"
                    >
                      <motion.button
                        whileHover={{ scale: 1.05 }}
                        className="group bg-gradient-to-r from-indigo-600 to-blue-600 hover:from-indigo-500 hover:to-blue-500 text-white font-semibold py-2.5 px-7 rounded-lg text-lg transition-all duration-300 shadow-2xl hover:shadow-indigo-400/25"
                      >
                        <span className="flex items-center gap-2">
                          Hizmetlerimizi Keşfedin
                          <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        </span>
                      </motion.button>

                      <motion.button
                        whileHover={{ scale: 1.05 }}
                        className="bg-zinc-950/70 backdrop-blur-md hover:bg-zinc-950/40 text-white font-medium py-2.5 px-7 rounded-lg text-lg transition-all duration-300 border border-zinc-950 hover:border-zinc-950/40"
                      >
                        Referanslarımız
                      </motion.button>
                    </motion.div>
                  }
                  badgeText="Hız, Güven, Şeffaflık"
                  subtitle="Çünkü fark yaratıyoruz."
                  description="Dinamik yapımız ve müşteri odaklı yaklaşımımızla, taşımalarınızı güvenli ve zamanında gerçekleştiriyor, süreci sizin için kolaylaştırıyoruz."
                  indicators={true}
                  minimal={false}
                />

                <WhyUsPage />
              </div>
            }
          />
          <Route
            path="/iletisim"
            element={
              <div>
                <Header
                  title={
                    <h2 className="text-4xl md:text-5xl font-extrabold leading-tight tracking-[-0.02em]">
                      <span className="text-zinc-950/95">
                        Sorularınız mı var?{" "}
                      </span>
                      <motion.span
                        initial={{ opacity: 0, y: 18 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.9, ease: "easeOut" }}
                        className="bg-gradient-to-r from-sky-500 via-blue-600 to-cyan-600 bg-clip-text text-transparent drop-shadow-sm"
                      >
                        Hemen bize ulaşın.
                      </motion.span>
                    </h2>
                  }
                  button={
                    <motion.div
                      initial={{ opacity: 0, y: 28 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{
                        duration: 0.9,
                        delay: 0.55,
                        ease: "easeOut",
                      }}
                      className="flex flex-col sm:flex-row gap-4 justify-center items-center"
                    >
                      <motion.button
                        whileHover={{ scale: 1.05 }}
                        className="group bg-gradient-to-r from-sky-600 to-blue-600 hover:from-sky-500 hover:to-blue-500 text-white font-semibold py-2.5 px-7 rounded-lg text-lg transition-all duration-300 shadow-2xl hover:shadow-sky-400/25"
                      >
                        <span className="flex items-center gap-2">
                          <Phone className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                          Hemen Ara
                        </span>
                      </motion.button>

                      <motion.button
                        whileHover={{ scale: 1.05 }}
                        className="bg-zinc-950/70 backdrop-blur-md hover:bg-zinc-950/40 text-white font-medium py-2.5 px-7 rounded-lg text-lg transition-all duration-300 border border-zinc-950 hover:border-zinc-950/40"
                      >
                        Mail Gönder
                      </motion.button>
                    </motion.div>
                  }
                  badgeText="Her Zaman Ulaşılabilir"
                  subtitle="7/24 yanınızdayız."
                  description="İster telefonla, ister e-posta üzerinden bizimle iletişime geçebilirsiniz. Sorularınıza en kısa sürede yanıt veriyoruz."
                  indicators={false}
                  minimal={false}
                />

                <ContactPage />
              </div>
            }
          />
          <Route
            path="/lojistik"
            element={
              <div>
                <Header
                  title={
                    <h2 className="text-4xl md:text-5xl font-extrabold leading-tight tracking-[-0.02em]">
                      <motion.span
                        initial={{ opacity: 0, y: 18 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.9, ease: "easeOut" }}
                        className="bg-gradient-to-r from-blue-500 via-blue-600 to-sky-600 bg-clip-text text-transparent drop-shadow-sm "
                      >
                        Genç, Hızlı
                      </motion.span>
                    </h2>
                  }
                  button={
                    <motion.div
                      initial={{ opacity: 0, y: 28 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{
                        duration: 0.9,
                        delay: 0.55,
                        ease: "easeOut",
                      }}
                      className="flex flex-col sm:flex-row gap-4 justify-center items-center"
                    >
                      <motion.button
                        whileHover={{ scale: 1.05 }}
                        className="group transition-all bg-zinc-950/70 backdrop-blur-md hover:bg-zinc-950/40 text-white font-medium py-2.5 px-7 rounded-lg text-lg border border-zinc-950 hover:border-zinc-950/40"
                      >
                        <span className="flex items-center gap-2">
                          İletişime Geç
                          <Phone className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        </span>
                      </motion.button>
                    </motion.div>
                  }
                  minimal={true}
                  badgeText="Lojistik"
                />
                <LogisticsPage />
              </div>
            }
          />
          <Route
            path="/parsiyel-tasimacilik"
            element={
              <div>
                <Header
                  title={
                    <h2 className="text-4xl md:text-5xl font-extrabold leading-tight tracking-[-0.02em]">
                      <motion.span
                        initial={{ opacity: 0, y: 18 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.9, ease: "easeOut" }}
                        className="bg-gradient-to-r from-blue-500 via-blue-600 to-sky-600 bg-clip-text text-transparent drop-shadow-sm "
                      >
                        Parsiyel Taşımacılık
                      </motion.span>
                    </h2>
                  }
                  button={
                    <motion.div
                      initial={{ opacity: 0, y: 28 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{
                        duration: 0.9,
                        delay: 0.55,
                        ease: "easeOut",
                      }}
                      className="flex flex-col sm:flex-row gap-4 justify-center items-center"
                    >
                      <motion.button
                        whileHover={{ scale: 1.05 }}
                        className="group transition-all bg-zinc-950/70 backdrop-blur-md hover:bg-zinc-950/40 text-white font-medium py-2.5 px-7 rounded-lg text-lg border border-zinc-950 hover:border-zinc-950/40"
                      >
                        <span className="flex items-center gap-2">
                          İletişime Geç
                          <Phone className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        </span>
                      </motion.button>
                    </motion.div>
                  }
                  minimal={true}
                />
                <ParsiyelTasimaDetayPage />
              </div>
            }
          />
          <Route
            path="/kara-yolu-tasimacilik"
            element={
              <div>
                <Header
                  title={
                    <h2 className="text-4xl md:text-5xl font-extrabold leading-tight tracking-[-0.02em]">
                      <motion.span
                        initial={{ opacity: 0, y: 18 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.9, ease: "easeOut" }}
                        className="bg-gradient-to-r from-blue-500 via-blue-600 to-sky-600 bg-clip-text text-transparent drop-shadow-sm "
                      >
                        Kara Yolu Taşımacılık
                      </motion.span>
                    </h2>
                  }
                  button={
                    <motion.div
                      initial={{ opacity: 0, y: 28 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{
                        duration: 0.9,
                        delay: 0.55,
                        ease: "easeOut",
                      }}
                      className="flex flex-col sm:flex-row gap-4 justify-center items-center"
                    >
                      <motion.button
                        whileHover={{ scale: 1.05 }}
                        className="group transition-all bg-zinc-950/70 backdrop-blur-md hover:bg-zinc-950/40 text-white font-medium py-2.5 px-7 rounded-lg text-lg border border-zinc-950 hover:border-zinc-950/40"
                      >
                        <span className="flex items-center gap-2">
                          İletişime Geç
                          <Phone className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        </span>
                      </motion.button>
                    </motion.div>
                  }
                  minimal={true}
                />
                <KarayoluTasimaDetayPage />
              </div>
            }
          />
          <Route
            path="/parca-yuk-tasimacilik"
            element={
              <div>
                <Header
                  title={
                    <h2 className="text-4xl md:text-5xl font-extrabold leading-tight tracking-[-0.02em]">
                      <motion.span
                        initial={{ opacity: 0, y: 18 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.9, ease: "easeOut" }}
                        className="bg-gradient-to-r from-blue-500 via-blue-600 to-sky-600 bg-clip-text text-transparent drop-shadow-sm "
                      >
                        Parça Yük Taşımacılık
                      </motion.span>
                    </h2>
                  }
                  button={
                    <motion.div
                      initial={{ opacity: 0, y: 28 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{
                        duration: 0.9,
                        delay: 0.55,
                        ease: "easeOut",
                      }}
                      className="flex flex-col sm:flex-row gap-4 justify-center items-center"
                    >
                      <motion.button
                        whileHover={{ scale: 1.05 }}
                        className="group transition-all bg-zinc-950/70 backdrop-blur-md hover:bg-zinc-950/40 text-white font-medium py-2.5 px-7 rounded-lg text-lg border border-zinc-950 hover:border-zinc-950/40"
                      >
                        <span className="flex items-center gap-2">
                          İletişime Geç
                          <Phone className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        </span>
                      </motion.button>
                    </motion.div>
                  }
                  minimal={true}
                />
                <ParcaYukTasimaDetayPage />
              </div>
            }
          />
          <Route
            path="/yedek-parca-tasimacilik"
            element={
              <div>
                <Header
                  title={
                    <h2 className="text-4xl md:text-5xl font-extrabold leading-tight tracking-[-0.02em]">
                      <motion.span
                        initial={{ opacity: 0, y: 18 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.9, ease: "easeOut" }}
                        className="bg-gradient-to-r from-blue-500 via-blue-600 to-sky-600 bg-clip-text text-transparent drop-shadow-sm "
                      >
                        Yedek Parça Taşımacılık
                      </motion.span>
                    </h2>
                  }
                  button={
                    <motion.div
                      initial={{ opacity: 0, y: 28 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{
                        duration: 0.9,
                        delay: 0.55,
                        ease: "easeOut",
                      }}
                      className="flex flex-col sm:flex-row gap-4 justify-center items-center"
                    >
                      <motion.button
                        whileHover={{ scale: 1.05 }}
                        className="group transition-all bg-zinc-950/70 backdrop-blur-md hover:bg-zinc-950/40 text-white font-medium py-2.5 px-7 rounded-lg text-lg border border-zinc-950 hover:border-zinc-950/40"
                      >
                        <span className="flex items-center gap-2">
                          İletişime Geç
                          <Phone className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        </span>
                      </motion.button>
                    </motion.div>
                  }
                  minimal={true}
                />
                <YedekParcaTasimaDetayPage />
              </div>
            }
          />
          <Route
            path="/panelvan-tasimacilik"
            element={
              <div>
                <Header
                  title={
                    <h2 className="text-4xl md:text-5xl font-extrabold leading-tight tracking-[-0.02em]">
                      <motion.span
                        initial={{ opacity: 0, y: 18 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.9, ease: "easeOut" }}
                        className="bg-gradient-to-r from-blue-500 via-blue-600 to-sky-600 bg-clip-text text-transparent drop-shadow-sm "
                      >
                        Panelvan Taşımacılık
                      </motion.span>
                    </h2>
                  }
                  button={
                    <motion.div
                      initial={{ opacity: 0, y: 28 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{
                        duration: 0.9,
                        delay: 0.55,
                        ease: "easeOut",
                      }}
                      className="flex flex-col sm:flex-row gap-4 justify-center items-center"
                    >
                      <motion.button
                        whileHover={{ scale: 1.05 }}
                        className="group transition-all bg-zinc-950/70 backdrop-blur-md hover:bg-zinc-950/40 text-white font-medium py-2.5 px-7 rounded-lg text-lg border border-zinc-950 hover:border-zinc-950/40"
                      >
                        <span className="flex items-center gap-2">
                          İletişime Geç
                          <Phone className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        </span>
                      </motion.button>
                    </motion.div>
                  }
                  minimal={true}
                />
                <PanelvanTasimaDetayPage />
              </div>
            }
          />
          <Route
            path="/minivan-tasimacilik"
            element={
              <div>
                <Header
                  title={
                    <h2 className="text-4xl md:text-5xl font-extrabold leading-tight tracking-[-0.02em]">
                      <motion.span
                        initial={{ opacity: 0, y: 18 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.9, ease: "easeOut" }}
                        className="bg-gradient-to-r from-blue-500 via-blue-600 to-sky-600 bg-clip-text text-transparent drop-shadow-sm "
                      >
                        Minivan Taşımacılık
                      </motion.span>
                    </h2>
                  }
                  button={
                    <motion.div
                      initial={{ opacity: 0, y: 28 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{
                        duration: 0.9,
                        delay: 0.55,
                        ease: "easeOut",
                      }}
                      className="flex flex-col sm:flex-row gap-4 justify-center items-center"
                    >
                      <motion.button
                        whileHover={{ scale: 1.05 }}
                        className="group transition-all bg-zinc-950/70 backdrop-blur-md hover:bg-zinc-950/40 text-white font-medium py-2.5 px-7 rounded-lg text-lg border border-zinc-950 hover:border-zinc-950/40"
                      >
                        <span className="flex items-center gap-2">
                          İletişime Geç
                          <Phone className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        </span>
                      </motion.button>
                    </motion.div>
                  }
                  minimal={true}
                />
                <MinivanTasimaDetayPage />
              </div>
            }
          />
        </Routes>
      </Main>
    </>
  );
}
