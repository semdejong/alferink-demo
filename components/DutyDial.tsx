const hours = Array.from({ length: 24 }, (_, hour) => hour);
const marked = [0, 6, 12, 18];

function point(hour: number, radius: number) {
  const angle = (hour / 24) * Math.PI * 2 - Math.PI / 2;
  return {
    x: 100 + Math.cos(angle) * radius,
    y: 100 + Math.sin(angle) * radius,
  };
}

export default function DutyDial({ className = "w-40" }: { className?: string }) {
  return (
    <svg viewBox="0 0 200 200" className={className} role="img" aria-label="24-uurswijzerplaat, wijzer op nu">
      <circle cx="100" cy="100" r="96" fill="#ffffff" stroke="#121D1F" strokeWidth="2" />
      <circle cx="100" cy="100" r="78" fill="none" stroke="#0674CB" strokeWidth="1.5" />
      {hours.map((hour) => {
        const major = hour % 6 === 0;
        const outer = point(hour, 90);
        const inner = point(hour, major ? 68 : 78);
        return (
          <line
            key={hour}
            x1={inner.x}
            y1={inner.y}
            x2={outer.x}
            y2={outer.y}
            stroke="#0674CB"
            strokeWidth={major ? 2.4 : 1.2}
          />
        );
      })}
      {marked.map((hour) => {
        const pos = point(hour, 56);
        return (
          <text
            key={hour}
            x={pos.x}
            y={pos.y}
            textAnchor="middle"
            dominantBaseline="middle"
            fill="#121D1F"
            fontSize="13"
            fontFamily="var(--font-plex), ui-monospace, monospace"
          >
            {hour}
          </text>
        );
      })}
      <g className="dial-hand">
        <circle cx="100" cy="100" r="90" fill="transparent" />
        <line x1="100" y1="108" x2="100" y2="34" stroke="#C62828" strokeWidth="3.5" strokeLinecap="butt" />
      </g>
      <circle cx="100" cy="100" r="4.5" fill="#121D1F" />
    </svg>
  );
}
