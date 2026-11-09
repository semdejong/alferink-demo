/** Subtiele badge: markeert de site als concept van Sleads. Niet verwijderen in demo's. */
export default function SleadsBadge() {
  return (
    <a
      href="https://sleads.nl"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Concept door Sleads – bekijk sleads.nl"
      className="fixed top-[8.6rem] right-3 z-30 inline-flex items-center gap-1.5 rounded-[2px] border border-ink/15 bg-white px-2.5 py-1 text-[11px] font-medium text-kit md:top-auto md:right-4 md:bottom-4 md:text-xs print:hidden"
    >
      <span className="h-1.5 w-1.5 bg-blad" aria-hidden />
      Concept door <span className="font-semibold">Sleads</span>
    </a>
  );
}
