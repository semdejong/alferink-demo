import type { Metadata } from "next";
import { BonSheet } from "@/components/boards";
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
      <div className="mx-auto grid max-w-6xl items-start gap-8 px-5 py-12 lg:grid-cols-[1.15fr_0.85fr]">
        <BonSheet
          stamp="Glassoorten op de bon"
          title="Kleinschalig en projectmatig"
          rows={[
            { mark: "HR++ glas", text: "Isolerende beglazing. Daarop geldt tien jaar garantie." },
            { mark: "Triple glas", text: "Ook isolerend. Dezelfde tien jaar garantie." },
            { mark: "Hardglas", text: "Gehard glas, van een enkel raam tot een heel project." },
            { mark: "Gefigureerd glas", text: "Glas met een figuur in het oppervlak." },
            { mark: "Glas in lood", text: "Loodglas in het kozijn. Een voorbeeld staat hieronder." },
            { mark: "Veiligheidsglas", text: "Glas met extra bescherming, kleinschalig en projectmatig." },
            { mark: "Spiegels", text: "Spiegels plaatsen hoort bij het glaswerk." },
            { mark: "Hardglazen deuren", text: "Deuren van hardglas, naast het zetten van ruiten." },
          ]}
        />
        <div className="space-y-4">
          <div className="werkbon p-5">
            <div className="flex items-start gap-4">
              <DutyDial className="w-24 shrink-0" />
              <div>
                <p className="stamp">Garantie en norm</p>
                <p className="mt-2">
                  Bij ons heeft u tien jaar garantie op isolerende beglazing. De beglazing wordt geplaatst volgens
                  NEN, CE en KOMO normen.
                </p>
              </div>
            </div>
          </div>
          <BonSheet
            stamp="Plaatsing"
            rows={[
              { mark: "Schaal", text: "Kleinschalig én projectmatig. Eén ruit of een heel pand." },
              { mark: "Advies", text: "Wij komen graag langs voor een vrijblijvende offerte." },
              { mark: "Breuk", text: "Per direct vervangen? Bel de 24-uur glasservice, dan komen wij snel." },
            ]}
          />
        </div>
      </div>
      <div className="mx-auto max-w-6xl px-5 pb-4">
        <h2 className="font-display text-3xl font-bold">Glas in lood</h2>
        <Kitlijn className="mt-3 w-14" />
        <p className="mt-3 max-w-2xl">Een van de glassoorten uit het werk, geplaatst in een wit kozijn.</p>
      </div>
      <div className="mx-auto max-w-6xl px-5 pb-16">
        <Gallery groups={[glasBehangGroups[0]]} showTitles={false} />
      </div>
      <ClosingCta
        title="Glas per direct of een offerte"
        text="Voor een breuk belt u de 24-uur glasservice. Voor advies op maat komen wij graag langs voor een vrijblijvende offerte."
      />
    </>
  );
}
