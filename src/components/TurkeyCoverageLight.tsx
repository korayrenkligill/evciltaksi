type City = { x: number; y: number; label: string };

const cities: City[] = [
  { x: 180, y: 140, label: "İstanbul" },
  { x: 280, y: 160, label: "Ankara" },
  { x: 380, y: 170, label: "Kayseri" },
  { x: 580, y: 180, label: "Diyarbakır" },
  { x: 680, y: 160, label: "Van" },
  { x: 140, y: 220, label: "İzmir" },
  { x: 320, y: 240, label: "Konya" },
  { x: 200, y: 280, label: "Antalya" },
  { x: 520, y: 140, label: "Samsun" },
  { x: 450, y: 120, label: "Trabzon" },
  { x: 350, y: 120, label: "Sinop" },
  { x: 420, y: 240, label: "Adana" },
];

// Basit eğri yolu (quadratic bezier curve)
function qPath(x1: number, y1: number, x2: number, y2: number, lift = -20) {
  const cx = (x1 + x2) / 2;
  const cy = (y1 + y2) / 2 + lift;
  return `M${x1},${y1} Q${cx},${cy} ${x2},${y2}`;
}

export default function TurkeyCoverageReal() {
  return (
    <section className="relative rounded-2xl bg-gradient-to-br from-blue-200/10 via-blue-100 to-blue-200/10 p-4 md:p-6">
      <div className="aspect-[3/2] w-full overflow-hidden rounded-xl relative ">
        <svg
          viewBox="0 0 800 400"
          className="absolute inset-0 h-full w-full scale-125"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            {/* Gradient tanımları */}

            <linearGradient id="routeGradient" x1="0" y1="0" x2="1" y2="0">
              <stop offset="0%" stopColor="#0284c7" />
              <stop offset="50%" stopColor="#0ea5e9" />
              <stop offset="100%" stopColor="#38bdf8" />
            </linearGradient>
          </defs>

          {/* Rotalar - Ana güzergahlar */}
          <g opacity="0.8">
            {/* İstanbul - Ankara - Kayseri - Diyarbakır - Van hattı */}
            <path
              d={qPath(180, 140, 280, 160, -15)}
              stroke="url(#routeGradient)"
              strokeWidth="3"
              fill="none"
              strokeLinecap="round"
              className="animate-pulse"
            />
            <path
              d={qPath(280, 160, 380, 170, -10)}
              stroke="url(#routeGradient)"
              strokeWidth="3"
              fill="none"
              strokeLinecap="round"
            />
            <path
              d={qPath(380, 170, 580, 180, -20)}
              stroke="url(#routeGradient)"
              strokeWidth="3"
              fill="none"
              strokeLinecap="round"
            />
            <path
              d={qPath(580, 180, 680, 160, -15)}
              stroke="url(#routeGradient)"
              strokeWidth="3"
              fill="none"
              strokeLinecap="round"
            />

            {/* İzmir - Konya - Adana hattı */}
            <path
              d={qPath(140, 220, 320, 240, 15)}
              stroke="url(#routeGradient)"
              strokeWidth="3"
              fill="none"
              strokeLinecap="round"
            />
            <path
              d={qPath(320, 240, 420, 240, -5)}
              stroke="url(#routeGradient)"
              strokeWidth="3"
              fill="none"
              strokeLinecap="round"
            />

            {/* Karadeniz kıyı hattı */}
            <path
              d={qPath(350, 120, 520, 140, 10)}
              stroke="url(#routeGradient)"
              strokeWidth="2.5"
              fill="none"
              strokeLinecap="round"
            />
            <path
              d={qPath(520, 140, 450, 120, -8)}
              stroke="url(#routeGradient)"
              strokeWidth="2.5"
              fill="none"
              strokeLinecap="round"
            />

            {/* Akdeniz kıyı hattı */}
            <path
              d={qPath(200, 280, 420, 240, -25)}
              stroke="url(#routeGradient)"
              strokeWidth="2.5"
              fill="none"
              strokeLinecap="round"
            />
          </g>

          {/* Şehir işaretleri */}
          {cities.map((city, index) => (
            <g key={city.label}>
              {/* Işık halesi efekti */}
              <circle
                cx={city.x}
                cy={city.y}
                r="12"
                fill="url(#cityGlow)"
                opacity="0.4"
              >
                <animate
                  attributeName="r"
                  values="8;16;8"
                  dur="3s"
                  begin={`${index * 0.2}s`}
                  repeatCount="indefinite"
                />
                <animate
                  attributeName="opacity"
                  values="0.6;0.2;0.6"
                  dur="3s"
                  begin={`${index * 0.2}s`}
                  repeatCount="indefinite"
                />
              </circle>

              {/* Ana şehir noktası */}
              <circle
                cx={city.x}
                cy={city.y}
                r="6"
                fill="#0ea5e9"
                stroke="white"
                strokeWidth="2"
                filter="url(#dropShadow)"
              />

              {/* İç nokta */}
              <circle
                cx={city.x}
                cy={city.y}
                r="3"
                fill="white"
                opacity="0.8"
              />

              {/* Şehir etiketi */}
              <text
                x={city.x + 10}
                y={city.y - 8}
                fontSize="11"
                fontWeight="500"
                fill="#0f172a"
                filter="url(#dropShadow)"
                className="select-none"
              >
                {city.label}
              </text>
            </g>
          ))}
        </svg>
      </div>
      {/* Alt bilgi etiketleri */}
      <div className="absolute bottom-4 left-4 flex flex-wrap gap-2">
        {[
          "81 İl Kapsama",
          "1.200+ Güzergah",
          "Günlük Sefer",
          "7/24 Hizmet",
        ].map((badge) => (
          <span
            key={badge}
            className="rounded-full border border-blue-200 bg-white/90 backdrop-blur-sm px-3 py-1 text-xs font-medium text-blue-900 shadow-sm hover:bg-blue-50 transition-colors"
          >
            {badge}
          </span>
        ))}
      </div>
    </section>
  );
}
