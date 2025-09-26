type City = { x: number; y: number; label: string };

const cities: City[] = [
  { x: 180, y: 140, label: "Aliağa" },
  { x: 280, y: 160, label: "Balçova" },
  { x: 380, y: 170, label: "Bayındır" },
  { x: 580, y: 180, label: "Bayraklı" },
  { x: 680, y: 160, label: "Bergama" },
  { x: 140, y: 220, label: "İzmir" },
  { x: 320, y: 240, label: "Manisa" },
  { x: 200, y: 280, label: "Gaziemir" },
  { x: 520, y: 140, label: "Bornova" },
  { x: 450, y: 120, label: "Çeşme" },
  { x: 350, y: 120, label: "Buca" },
  { x: 420, y: 240, label: "Menderes" },
];

function qPath(x1: number, y1: number, x2: number, y2: number, lift = -20) {
  const cx = (x1 + x2) / 2;
  const cy = (y1 + y2) / 2 + lift;
  return `M${x1},${y1} Q${cx},${cy} ${x2},${y2}`;
}

export default function TurkeyCoverageDark() {
  return (
    <section className="relative rounded-2xl bg-gradient-to-br from-zinc-900 via-zinc-950 to-black p-4 md:p-6">
      <div className="aspect-[3/2] w-full overflow-hidden rounded-xl relative ">
        <svg
          viewBox="0 0 800 400"
          className="absolute inset-0 h-full w-full scale-125"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <linearGradient id="routeGradient" x1="0" y1="0" x2="1" y2="0">
              <stop offset="0%" stopColor="#fbbf24" />
              <stop offset="50%" stopColor="#f59e0b" />
              <stop offset="100%" stopColor="#facc15" />
            </linearGradient>
            <filter
              id="dropShadow"
              x="-50%"
              y="-50%"
              width="200%"
              height="200%"
            >
              <feDropShadow
                dx="0"
                dy="1"
                stdDeviation="2"
                floodColor="#000"
                floodOpacity="0.6"
              />
            </filter>
          </defs>

          {/* Rotalar */}
          <g opacity="0.9">
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

            <path
              d={qPath(200, 280, 420, 240, -25)}
              stroke="url(#routeGradient)"
              strokeWidth="2.5"
              fill="none"
              strokeLinecap="round"
            />
          </g>

          {/* Şehirler */}
          {cities.map((city, index) => (
            <g key={city.label}>
              <circle
                cx={city.x}
                cy={city.y}
                r="12"
                fill="#facc15"
                opacity="0.25"
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

              <circle
                cx={city.x}
                cy={city.y}
                r="6"
                fill="#f59e0b"
                stroke="black"
                strokeWidth="2"
                filter="url(#dropShadow)"
              />
              <circle
                cx={city.x}
                cy={city.y}
                r="3"
                fill="white"
                opacity="0.9"
              />

              <text
                x={city.x + 10}
                y={city.y - 8}
                fontSize="11"
                fontWeight="500"
                fill="#fefce8"
                className="select-none"
                filter="url(#dropShadow)"
              >
                {city.label}
              </text>
            </g>
          ))}
        </svg>
      </div>

      {/* Etiketler */}
      <div className="absolute bottom-4 left-4 flex flex-wrap gap-2">
        {[
          "81 İl Kapsama",
          "1.200+ Güzergah",
          "Günlük Sefer",
          "7/24 Hizmet",
        ].map((badge) => (
          <span
            key={badge}
            className="rounded-full border border-amber-500/40 bg-amber-500/10 backdrop-blur-sm px-3 py-1 text-xs font-medium text-amber-300 shadow-sm hover:bg-amber-500/20 transition-colors"
          >
            {badge}
          </span>
        ))}
      </div>
    </section>
  );
}
