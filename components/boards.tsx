import Link from "next/link";

export function BonSheet({
  stamp,
  title,
  rows,
  className = "",
}: {
  stamp: string;
  title?: string;
  rows: { mark: string; text: string }[];
  className?: string;
}) {
  return (
    <div className={`werkbon ${className}`}>
      <div className="flex flex-wrap items-baseline justify-between gap-2 border-b border-dashed border-ink px-4 py-3">
        <p className="stamp">{stamp}</p>
        {title ? <p className="font-mono text-[0.68rem] tracking-[0.12em] text-ink uppercase">{title}</p> : null}
      </div>
      <ul>
        {rows.map((row) => (
          <li
            key={row.mark}
            className="grid gap-1 border-b border-dashed border-ink/25 px-4 py-3 last:border-b-0 sm:grid-cols-[10.5rem_1fr] sm:items-baseline"
          >
            <span className="font-mono text-[0.72rem] tracking-[0.08em] text-ink uppercase">{row.mark}</span>
            <span className="text-[1.05rem] leading-relaxed">{row.text}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export function PlaceRail({
  places,
}: {
  places: { label: string; href: string }[];
}) {
  return (
    <ul className="flex flex-wrap gap-2">
      {places.map((place) => (
        <li key={place.label}>
          <Link
            href={place.href}
            className="inline-flex min-h-11 items-center border border-dashed border-ink bg-white px-3 font-mono text-[0.72rem] tracking-[0.08em] text-ink uppercase"
          >
            {place.label}
          </Link>
        </li>
      ))}
    </ul>
  );
}
