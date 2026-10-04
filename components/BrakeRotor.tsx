// Drilled rotor + caliper illustration. Geometry is computed once at module load.

const C = 200;

function dot(x: number, y: number, r: number) {
  return `M${(x - r).toFixed(1)},${y.toFixed(1)}a${r},${r} 0 1,0 ${2 * r},0a${r},${r} 0 1,0 ${-2 * r},0`;
}
function polar(deg: number, r: number): [number, number] {
  const t = (deg * Math.PI) / 180;
  return [C + r * Math.cos(t), C + r * Math.sin(t)];
}
function pt(deg: number, r: number) {
  const [x, y] = polar(deg, r);
  return `${x.toFixed(1)},${y.toFixed(1)}`;
}

const holes = [
  [116, 16, 0],
  [138, 20, 9],
  [160, 24, 0],
]
  .flatMap(([radius, count, offset]) =>
    Array.from({ length: count }, (_, i) => {
      const [x, y] = polar((i / count) * 360 + offset, radius);
      return dot(x, y, 4.2);
    }),
  )
  .join("");

const lugs = Array.from({ length: 5 }, (_, j) => {
  const [x, y] = polar(j * 72 - 90, 42);
  return dot(x, y, 7.5);
}).join("");

const [a0, a1, ro, ri] = [-78, -12, 204, 146];
const caliper = `M${pt(a0, ro)}A${ro},${ro} 0 0,1 ${pt(a1, ro)}L${pt(a1, ri)}A${ri},${ri} 0 0,0 ${pt(a0, ri)}Z`;
const bolts = [-66, -24].map((d) => dot(...polar(d, 175), 6)).join("");

export function BrakeRotor({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="-10 -10 420 420" className={className} role="img" aria-label="Drilled brake rotor with an orange caliper">
      <circle cx={C} cy={C} r={190} fill="#25282C" stroke="#4A5057" strokeWidth={2} />
      <circle cx={C} cy={C} r={176} fill="none" stroke="#33373C" />
      <circle cx={C} cy={C} r={152} fill="none" stroke="#33373C" />
      <circle cx={C} cy={C} r={130} fill="none" stroke="#2E3236" />
      <path d={holes} fill="#0E0F10" />
      <circle cx={C} cy={C} r={98} fill="#1B1D20" stroke="#4A5057" strokeWidth={2} />
      <circle cx={C} cy={C} r={66} fill="#2C3035" stroke="#4A5057" />
      <path d={lugs} fill="#0E0F10" />
      <circle cx={C} cy={C} r={22} fill="#0E0F10" stroke="#4A5057" />
      <path d={caliper} fill="#FFC83D" stroke="#FFC83D" strokeWidth={16} strokeLinejoin="round" />
      <path d={bolts} fill="#0E0F10" />
    </svg>
  );
}
