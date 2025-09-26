import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Target } from "lucide-react";

type Props = {
  badgeText?: string;
  title: React.ReactNode;
  subtitle?: string;
  description?: string;
  button: React.ReactNode;
  indicators?: boolean;
  minimal?: boolean;
};

const Header = (props: Props) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const backgroundSlides = [
    "https://images.pexels.com/photos/93398/pexels-photo-93398.jpeg",
    "https://images.pexels.com/photos/13682891/pexels-photo-13682891.jpeg",
    "https://images.pexels.com/photos/11053643/pexels-photo-11053643.jpeg",
    "https://images.pexels.com/photos/11053640/pexels-photo-11053640.jpeg",
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % backgroundSlides.length);
    }, 7000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div
      className={`relative ${
        !props.minimal ? "min-h-screen" : "min-h-[25vh]"
      } overflow-hidden`}
    >
      {/* Background Slideshow */}
      <AnimatePresence>
        <motion.div
          key={currentSlide}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0.35 }}
          transition={{ duration: 1.2, ease: "linear" }}
          className="absolute inset-0 w-full h-full"
          style={{
            backgroundImage: `url(${backgroundSlides[currentSlide]})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            filter: "brightness(0.75)",
          }}
        />
      </AnimatePresence>
      <div className="absolute bg-gradient-to-b bg-white/60 via-white/0 to-slate-50 z-10 w-full h-full" />

      {/* Main Content */}
      <div
        className={`relative z-20 ${
          !props.minimal ? "min-h-screen" : "min-h-[25vh]:"
        } flex items-center justify-center px-4 sm:px-6 lg:px-8`}
      >
        <div className="max-w-7xl mx-auto w-full py-20">
          {/* Hero */}
          <div className="text-center mb-16 mt-[100px]">
            <motion.div
              initial={{ opacity: 0, y: 60 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.0, ease: "easeOut" }}
              className="mb-8"
            >
              {props.badgeText && (
                <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md px-4 py-1 rounded-full border border-white/20 mb-4 shadow-[0_0_30px_rgba(56,189,248,0.15)]">
                  <Target className="w-5 h-5 text-blue-500" />
                  <span className="text-zinc-950/90 font-medium text-sm tracking-wide">
                    {props.badgeText}
                  </span>
                </div>
              )}

              <div className="space-y-1">
                {props.title}

                {props.subtitle && (
                  <h3 className="text-[28px] md:text-[34px] font-bold">
                    <motion.span
                      initial={{ opacity: 0, y: -14 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{
                        duration: 0.9,
                        ease: "easeOut",
                        delay: 0.12,
                      }}
                      className="bg-gradient-to-r from-zinc-950/90 to-zinc-950/70 bg-clip-text text-transparent"
                    >
                      {props.subtitle}
                    </motion.span>
                  </h3>
                )}
              </div>
            </motion.div>

            {props.description && (
              <motion.p
                initial={{ opacity: 0, y: 32 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.9, delay: 0.35, ease: "easeOut" }}
                className="text-lg sm:text-2xl text-zinc-950/85 max-w-4xl mx-auto mb-10 leading-relaxed font-light"
              >
                {props.description}
              </motion.p>
            )}

            {props.button}
          </div>

          {/* Progress Indicators */}
          {props.indicators && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.9, delay: 1.2 }}
              className="flex justify-center mt-14"
            >
              <div className="flex items-center gap-3 bg-black/10 backdrop-blur-md px-4 py-2 rounded-full border border-black/20 shadow-[0_0_30px_rgba(59,130,246,0.15)]">
                {backgroundSlides.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentSlide(index)}
                    className={`relative h-2 rounded-full transition-all duration-500 overflow-hidden ${
                      index === currentSlide
                        ? "w-8 bg-blue-700"
                        : "w-2 bg-zinc-950 hover:bg-white/50"
                    }`}
                    aria-label={`Slide ${index + 1}`}
                  >
                    {index === currentSlide && (
                      <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: "100%" }}
                        transition={{ duration: 7, ease: "linear" }}
                        className="absolute inset-0 bg-gradient-to-r from-white/30 to-white/50"
                      />
                    )}
                  </button>
                ))}
              </div>
            </motion.div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Header;
