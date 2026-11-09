import type { Metadata } from "next";
import Link from "next/link";
import Gallery from "@/components/Gallery";
import { ClosingCta, PageHero } from "@/components/ui";
import { schilderGroups } from "@/lib/jobs";

export const metadata: Metadata = {
  title: "Schilderwerk",
  description:
    "Binnen- en buitenschilderwerk in Haaksbergen en omgeving: kozijnen, deuren, sauswerk en onderhoudscontracten. Bel 06-54244846.",
};

export default function SchilderwerkPage() {
  return (
    <>
      <PageHero
        eyebrow="Diensten · Haaksbergen"
        title="Schilderwerk voor woning en pand"
        lede="Goed schilderwerk zorgt voor een goede uitstraling van uw woning of bedrijfspand en heeft daarnaast een positieve invloed op de waarde van uw object."
      />
      <div className="mx-auto max-w-6xl space-y-4 px-5 py-8 prose-tight">
        <p>
          Bij Alferink Schilderwerken kunt u terecht voor binnen- en buitenschilderwerk, zoals het schilderen van
          kozijnen en deuren en het sausen van plafonds en wanden. Muren, plafond en kozijnen kunnen wij ook spuiten.
          Dat geeft een strakke afwerking. Meer daarover staat bij{" "}
          <Link href="/spuitwerk" className="text-link underline underline-offset-4">
            spuitwerk
          </Link>
          .
        </p>
        <p>
          Tevens bieden wij onderhoudscontracten aan, waardoor uw woning of pand periodiek wordt bijgehouden. Zo
          zorgen wij ervoor dat uw woning of pand goed in de verf staat. Uw eisen en wensen staan bij ons centraal.
        </p>
        <p>Hieronder foto’s van schilderwerk, een karwei saus- en schilderwerk in Hengelo, en een karwei in Doetinchem.</p>
      </div>
      <div className="mx-auto max-w-6xl px-5 pb-16">
        <Gallery groups={schilderGroups} />
      </div>
      <ClosingCta />
    </>
  );
}
