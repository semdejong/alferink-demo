import type { Metadata } from "next";
import Link from "next/link";
import { BonSheet } from "@/components/boards";
import Gallery from "@/components/Gallery";
import { ClosingCta, PageHero } from "@/components/ui";
import { glasBehangGroups } from "@/lib/jobs";

export const metadata: Metadata = {
  title: "Behangwerk",
  description:
    "Behangwerk in Haaksbergen: vinyl, vliesbehang, glasweefsel en normaal behang, met advies op maat. Bel 06-54244846.",
};

export default function BehangwerkPage() {
  return (
    <>
      <PageHero
        eyebrow="Diensten · Haaksbergen"
        title="Behangwerk voor strakke wanden"
        lede="De wanden zijn een belangrijk aspect van een woning of pand. Ze kunnen de sfeer maken of breken. De afwerking loopt van muurverf tot diverse soorten behang."
      />
      <div className="mx-auto grid max-w-6xl items-start gap-8 px-5 py-10 lg:grid-cols-2">
        <BonSheet
          stamp="Inhoud · behang"
          title="Advies op maat"
          rows={[
            { mark: "Vinyl", text: "Een van de designs. Elk soort heeft een eigen uitstraling en vormgeving." },
            { mark: "Vliesbehang", text: "Te combineren met het schilderwerk eromheen, als de rest van de ruimte ook meegaat." },
            { mark: "Glasweefsel", text: "Een stevige wandafwerking, naast vinyl, vlies en normaal behang." },
            { mark: "Normaal", text: "Ook klassiek behang behoort tot het werk. Wij helpen u kiezen wat bij de ruimte past." },
            { mark: "Sausen", text: "Liever een gladde wand dan behang? Plafonds en wanden sausen wij ook." },
          ]}
        />
        <div className="space-y-4">
          <p>
            Voor een gepast advies op maat kunt u bij Alferink Schilderwerken terecht. Wij helpen u graag om uw wensen
            uit te voeren, in huis en in een bedrijfspand.
          </p>
          <p>
            Neem contact op wanneer u meer informatie wilt of een project voor ons heeft. Gaat het om een kale wand die
            eerst geschilderd moet worden, dan hoort dat bij{" "}
            <Link href="/schilderwerk" className="text-link underline underline-offset-4">
              schilderwerk
            </Link>
            .
          </p>
        </div>
      </div>
      <div className="mx-auto max-w-6xl px-5 pb-16">
        <Gallery groups={[glasBehangGroups[1]]} />
      </div>
      <ClosingCta title="Behang of een hele verhuizing" text="Heeft u meerdere klussen, bijvoorbeeld bij een verhuizing? Vraag een vrijblijvende offerte op maat, of bel even." />
    </>
  );
}
