import { content } from "@/content";
import DutyDial from "@/components/DutyDial";
import { PhoneLink } from "@/components/ui";

export default function Noodbord({
  compact = false,
  heading = "h2",
}: {
  compact?: boolean;
  heading?: "h2" | "p";
}) {
  const Title = heading;
  return (
    <div className={`noodbord ${compact ? "px-4 py-4" : "px-4 py-5 sm:px-7 sm:py-7"}`}>
      <i className="rivet top-2.5 left-2.5" aria-hidden="true" />
      <i className="rivet top-2.5 right-2.5" aria-hidden="true" />
      <i className="rivet bottom-2.5 left-2.5" aria-hidden="true" />
      <i className="rivet right-2.5 bottom-2.5" aria-hidden="true" />
      <p className="pr-4 pl-4 text-center font-mono text-[0.68rem] tracking-[0.16em] text-ink sm:text-left">
        24-UUR GLASSERVICE · HAAKSBERGEN
      </p>
      <div className={`mt-4 flex flex-col items-center gap-5 ${compact ? "" : "sm:flex-row sm:items-center"}`}>
        <DutyDial className={compact ? "w-28 shrink-0" : "w-36 shrink-0 sm:w-44"} />
        <div className={compact ? "text-center" : "text-center sm:text-left"}>
          <Title className={`font-display font-bold text-ink ${compact ? "text-2xl" : "text-3xl md:text-4xl"}`}>
            24-uur glasservice
          </Title>
          <p className={`mt-2 text-ink ${compact ? "text-base" : "text-lg"}`}>
            Moet uw glas per direct worden vervangen? Wij komen snel naar u toe om het glaswerk te repareren.
          </p>
          <PhoneLink variant="nu" className="mt-4">
            Bel nu · {content.contact.phoneDisplay}
          </PhoneLink>
        </div>
      </div>
    </div>
  );
}
