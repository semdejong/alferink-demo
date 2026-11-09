import type { Metadata } from "next";
import Link from "next/link";
import { BonSheet } from "@/components/boards";
import Gallery from "@/components/Gallery";
import FrameImage from "@/components/FrameImage";
import { ClosingCta, PageHero } from "@/components/ui";
import { schilderAlgemeen, schilderGroups } from "@/lib/jobs";

export const metadata: Metadata = {
  title: "Schilderwerk",
  description:
    "Binnen- en buitenschilderwerk in Haaksbergen en omgeving: kozijnen, deuren, sauswerk en onderhoudscontracten. Bel 06-54244846.",
};

export default function SchilderwerkPage() {
  const windmill = schilderAlgemeen[2];
  const gevel = schilderAlgemeen[3];
  return (
    <>
      <PageHero
        eyebrow="Diensten · Haaksbergen"
        title="Schilderwerk voor woning en pand"
        lede="Goed schilderwerk zorgt voor een goede uitstraling van uw woning of bedrijfspand en heeft daarnaast een positieve invloed op de waarde van uw object."
      />
      <div className="mx-auto max-w-6xl px-5 py-10">
        <div className="grid items-start gap-8 lg:grid-cols-[1.15fr_0.85fr]">
          <BonSheet
            stamp="Inhoud · schilderwerk"
            title="Haaksbergen"
            rows={[
              { mark: "Binnen", text: "Kozijnen, deuren en het sausen van plafonds en wanden." },
              { mark: "Buiten", text: "Dezelfde zorg aan de gevel. Voor het hoge werk zetten wij een hoogwerker in." },
              { mark: "Spuiten", text: "Muren, plafond en kozijnen kunnen ook gespoten worden, voor een strakke afwerking." },
              { mark: "Onderhoud", text: "Met een onderhoudscontract wordt woning of pand periodiek bijgehouden, zodat het goed in de verf staat." },
              { mark: "Wensen", text: "Uw eisen en wensen staan bij ons centraal. Een tevreden klant is voor ons het uitgangspunt." },
            ]}
          />
          <figure className="werkbon">
            <FrameImage photo={gevel} sizes="(max-width: 1024px) 100vw, 480px" />
            <figcaption className="werkbon-caption">{gevel.stamp}</figcaption>
          </figure>
        </div>
        <figure className="werkbon mt-8">
          <span className="relative block aspect-[21/9] overflow-hidden bg-papier">
            <FrameImage photo={windmill} sizes="(max-width: 1152px) 100vw, 1100px" fit="fill" className="object-[center_30%]" />
          </span>
          <figcaption className="werkbon-caption">{windmill.stamp}</figcaption>
        </figure>
      </div>
      <div className="mx-auto max-w-6xl space-y-4 px-5 pb-6">
        <p>
          Het werk loopt van woningen en bedrijfspanden tot scholen, bruggen, windmolens, villa’s en landhuizen. Voor
          gemeenten schilderen wij ook monumentale panden, parkeermeters en gemeente paaltjes. Meer over gespoten
          afwerking staat bij{" "}
          <Link href="/spuitwerk" className="text-link underline underline-offset-4">
            spuitwerk
          </Link>
          .
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
