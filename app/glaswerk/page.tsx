import type { Metadata } from "next";
import Gallery from "@/components/Gallery";
import Noodbord from "@/components/Noodbord";
import DutyDial from "@/components/DutyDial";
import { ClosingCta, Kitlijn, PageHero } from "@/components/ui";
import { content } from "@/content";
import { glasBehangGroups } from "@/lib/jobs";

export const metadata: Metadata = {
  title: "Glaswerk en 24-uur glasservice",
  description:
    "Glaszetten vanuit Haaksbergen: HR++, Triple, hardglas, glas in lood en een 24-uur glasservice. Tien jaar garantie op isolerende beglazing.",
};

export default function GlaswerkPage() {
  return (
    <>
      <PageHero
        eyebrow="Diensten · 24-uur glasservice"
        title="Glaswerk, kleinschalig en projectmatig"
        lede="Door Alferink Schilderwerken worden diverse soorten glas geplaatst. Daarnaast kunt u bij ons terecht voor de aanschaf van isolerende en speciale beglazing."
      />
      <section id="glasservice" data-section="glasservice" className="bg-ink py-8 md:py-10">
        <div className="mx-auto max-w-6xl px-5">
          <Noodbord />
        </div>
      </section>
      <div className="mx-auto grid max-w-6xl gap-10 px-5 py-12 lg:grid-cols-[1.2fr_0.8fr]">
        <div>
          <h2 className="font-display text-3xl font-bold">Glassoorten</h2>
          <Kitlijn className="mt-3 w-14" />
          <ul className="mt-4 grid sm:grid-cols-2">
            {content.glassTypes.map((type) => (
              <li key={type} className="border-b border-ink/15 py-3 font-display text-xl font-bold">
                {type}
              </li>
            ))}
          </ul>
          <p className="mt-6">
            Wij zijn gespecialiseerd in het plaatsen van deze glassoorten, op kleinschalig en projectmatig niveau.
          </p>
        </div>
        <div className="werkbon p-5">
          <div className="flex items-start gap-4">
            <DutyDial className="w-24 shrink-0" />
            <div>
              <p className="stamp">Garantie</p>
              <p className="mt-2">
                Bij ons heeft u tien jaar garantie op isolerende beglazing. De beglazing wordt geplaatst volgens NEN,
                CE en KOMO normen.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="mx-auto max-w-6xl px-5 pb-16">
        <Gallery groups={[glasBehangGroups[0]]} />
      </div>
      <ClosingCta
        title="Glas per direct of een offerte"
        text="Voor een breuk belt u de 24-uur glasservice. Voor advies op maat komen wij graag langs voor een vrijblijvende offerte."
      />
    </>
  );
}
