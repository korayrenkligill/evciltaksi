import { useEffect, useState, type ReactNode } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import {
  Boxes,
  Car,
  ChevronDown,
  Cog,
  Menu,
  Package,
  Truck,
  TruckElectric,
} from "lucide-react";
import { HoverCard } from "@mantine/core";
import { motion, type Variants } from "framer-motion";
import { atom, useAtom, useSetAtom } from "jotai";

// --- Basit media query hook'u
function useMediaQuery(query: string) {
  const [matches, setMatches] = useState<boolean>(() => {
    if (typeof window === "undefined") return false;
    return window.matchMedia(query).matches;
  });

  useEffect(() => {
    if (typeof window === "undefined") return;
    const mql = window.matchMedia(query);
    const onChange = (e: MediaQueryListEvent) => setMatches(e.matches);
    // Safari uyumluluğu
    if (mql.addEventListener) mql.addEventListener("change", onChange);
    else mql.addListener(onChange);
    setMatches(mql.matches);
    return () => {
      if (mql.removeEventListener) mql.removeEventListener("change", onChange);
      else mql.removeListener(onChange);
    };
  }, [query]);

  return matches;
}

const isNavOpenAtom = atom<boolean>(false);

interface NavbarLinkType {
  name: string;
  path: string;
  type: "link" | "dropdown";
  children?: {
    name: string;
    path: string;
    description: string;
    icon: ReactNode;
    iconBackground?: string;
  }[];
}

const navigations: NavbarLinkType[] = [
  {
    name: "Yorumlar",
    path: "/yorumlar",
    type: "link",
  },
  { name: "Hizmetlerimiz", path: "/hizmetlerimiz", type: "link" },
  { name: "Neden Biz?", path: "/neden-biz", type: "link" },
  { name: "İletişim", path: "/iletisim", type: "link" },
];

const NavigationLink = ({
  nav,
  isShrink,
}: {
  nav: NavbarLinkType;
  isShrink: boolean;
}) => {
  const setIsNavOpen = useSetAtom(isNavOpenAtom);

  return (
    <NavLink
      to={nav.path}
      onClick={() => setIsNavOpen(false)}
      className={({ isActive }) =>
        `${
          isActive
            ? `text-yellow-300 ${
                isShrink ? "text-lg" : "text-lg md:text-xl font-black"
              }`
            : `text-white ${
                isShrink ? "text-lg" : "text-lg md:text-xl font-black"
              }`
        } p-3 md:p-0 border-b-2 border-transparent hover:border-yellow-500 md:hover:border-transparent md:hover:bg-transparent uppercase transition-colors`
      }
    >
      {nav.name}
    </NavLink>
  );
};

const NavigationDropdown = ({
  nav,
  isShrink,
  isDesktop,
}: {
  nav: NavbarLinkType;
  isShrink: boolean;
  isDesktop: boolean;
}) => {
  const [isDetailOpen, setIsDetailOpen] = useState(false);
  const setIsNavOpen = useSetAtom(isNavOpenAtom);

  // Desktop'ta HoverCard; mobilde tıklayınca aç/kapa
  if (isDesktop)
    return (
      <HoverCard width={500} shadow="md" zIndex={1000}>
        <HoverCard.Target>
          <div
            className={`text-black ${
              isShrink ? "text-lg" : "text-lg md:text-xl"
            } p-3 md:p-0 border-b-2 border-transparent hover:border-yellow-500 md:hover:border-transparent md:hover:bg-transparent cursor-pointer uppercase flex items-center gap-1`}
          >
            {nav.name} <ChevronDown size={20} className="inline" />
          </div>
        </HoverCard.Target>
        <HoverCard.Dropdown>
          {nav.children?.map((child) => (
            <NavLink
              key={child.name}
              to={child.path}
              className={({ isActive }) =>
                `${
                  isActive
                    ? "text-yellow-600"
                    : "text-zinc-600 hover:text-yellow-500"
                } block p-2`
              }
            >
              <div className="flex items-center gap-2">
                <div
                  className={`w-[60px] h-[60px] rounded-md flex items-center justify-center ${child.iconBackground}`}
                >
                  {child.icon}
                </div>
                <div className="flex-1 flex flex-col">
                  <p className="uppercase">{child.name}</p>
                  <p className="line-clamp-2 font-normal opacity-80 leading-tight">
                    {child.description}
                  </p>
                </div>
              </div>
            </NavLink>
          ))}
        </HoverCard.Dropdown>
      </HoverCard>
    );

  // Mobilde açılır menü
  return (
    <div>
      <button
        type="button"
        onClick={() => setIsDetailOpen((s) => !s)}
        className={`text-black p-3 md:p-0 border-b-2 border-transparent cursor-pointer flex items-center gap-1 text-lg`}
      >
        <span className=" text-black-600 text-lg uppercase">{nav.name}</span>
        <ChevronDown size={20} className="inline" />
      </button>

      {isDetailOpen && (
        <div className="flex flex-col gap-2 ml-2">
          {nav.children?.map((child) => (
            <NavLink
              key={child.name}
              onClick={() => setIsNavOpen(false)}
              to={child.path}
              className={({ isActive }) =>
                `${
                  isActive
                    ? "text-yellow-600"
                    : "text-zinc-600 hover:text-yellow-500"
                } block p-2`
              }
            >
              <div className="flex items-center gap-2">
                <div
                  className={`w-[60px] h-[60px] rounded-md flex items-center justify-center ${child.iconBackground}`}
                >
                  {child.icon}
                </div>
                <div className="flex-1 flex flex-col">
                  <p className="uppercase">{child.name}</p>
                  <p className="line-clamp-2 font-normal opacity-80 leading-tight">
                    {child.description}
                  </p>
                </div>
              </div>
            </NavLink>
          ))}
        </div>
      )}
    </div>
  );
};

const menuVariants: Variants = {
  closed: {
    opacity: 0,
    y: -8,
    pointerEvents: "none",
    transition: { duration: 0.2, ease: "linear" },
  },
  open: {
    opacity: 1,
    y: 0,
    pointerEvents: "auto",
    transition: { duration: 0.2, ease: "linear" },
  },
};

const Navigation = () => {
  const navigation = useNavigate();
  const isDesktop = useMediaQuery("(min-width: 768px)");

  const [isShrink, setIsShrink] = useState(false);
  const [isNavOpen, setIsNavOpen] = useAtom(isNavOpenAtom);

  // Sadece MOBİL→DESKTOP geçişinde menüyü kapat.
  useEffect(() => {
    if (isDesktop) setIsNavOpen(false);
  }, [isDesktop, setIsNavOpen]);

  // Scroll ile shrink
  useEffect(() => {
    const handleScroll = () => setIsShrink(window.scrollY > 50);
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Menü açıkken scroll kilidi (iOS jank'ı azaltır)
  useEffect(() => {
    const root = document.documentElement;
    if (!isDesktop && isNavOpen) {
      const prev = root.style.overflow;
      root.style.overflow = "hidden";
      return () => {
        root.style.overflow = prev;
      };
    }
  }, [isDesktop, isNavOpen]);

  return (
    <nav
      className={`${
        isShrink
          ? "h-[80px] bg-zinc-800 text-white border-b border-zinc-950/10 md:shadow-md"
          : `h-[150px] ${isNavOpen ? "bg-zinc-800" : "bg-white/0"}`
      } transition-[background-color,height] duration-200 ease-linear fixed top-0 z-[999] w-screen overflow-hidden flex items-center justify-center text-black`}
    >
      <div className="container flex flex-col md:flex-row md:items-center md:justify-between px-4">
        <div className="flex items-center justify-between gap-4">
          <img
            onClick={() => navigation("/")}
            src="https://placehold.co/700x400"
            alt="logo"
            className="h-[60px] cursor-pointer"
          />
          <button
            type="button"
            className="md:hidden text-white"
            onClick={() => setIsNavOpen((s) => !s)}
            aria-expanded={isNavOpen}
            aria-controls="primary-navigation"
            aria-label="Menüyü aç/kapat"
          >
            <Menu size={30} />
          </button>
        </div>

        <motion.div
          id="primary-navigation"
          variants={menuVariants}
          initial={false}
          animate={isDesktop || isNavOpen ? "open" : "closed"}
          className={`
            ${
              isShrink
                ? "md:top-auto md:h-auto top-[80px]"
                : "md:top-auto md:h-auto top-[150px]"
            }
            ${isDesktop ? "relative md:flex" : "fixed"}
            left-0 md:left-auto
            ${isDesktop ? "w-auto" : "w-screen"}
            ${isDesktop ? "h-auto" : "overflow-y-auto"}
            md:relative md:top-0
            flex flex-col md:flex-row md:items-center gap-2 md:gap-12
            md:py-0 py-4 px-6 md:px-0
            bg-zinc-800 md:bg-white/0
          `}
          style={
            isDesktop
              ? undefined
              : {
                  // iOS için 100svh; eski cihazlarda min-h-screen fallback zaten nav'da
                  height: `calc(100svh - ${isShrink ? 80 : 150}px)`,
                }
          }
        >
          {navigations.map((nav) =>
            nav.type === "dropdown" ? (
              <NavigationDropdown
                key={nav.name}
                nav={nav}
                isShrink={isShrink}
                isDesktop={isDesktop}
              />
            ) : (
              <NavigationLink key={nav.name} nav={nav} isShrink={isShrink} />
            )
          )}
        </motion.div>
      </div>
    </nav>
  );
};

export default Navigation;
