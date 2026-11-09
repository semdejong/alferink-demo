import type { Metadata } from "next";
import { PlaceRail } from "@/components/boards";
import Gallery from "@/components/Gallery";
import { ClosingCta, Kitlijn, PageHero } from "@/components/ui";
import { content } from "@/content";
import { projectGroups } from "@/lib/jobs";

export const metadata: Metadata = {
  title: "Projecten",
  description:
    "Fotoarchief van J & J Alferink: schilderwerk, glas, behang en spuitwerk, met de plaatsnamen die bij de klussen horen.",
};

export default function ProjectenPage() {
  return (
    <>
      <PageHero
        eyebrow="Archief"
        title="Projecten"
        lede="Bij Alferink Schilderwerken vinden wij klanttevredenheid zeer belangrijk. Hieronder vindt u een aantal projecten die naar tevredenheid zijn uitgevoerd."
      />
      <nav aria-label="Onderdelen" className="mx-auto flex max-w-6xl flex-wrap gap-x-5 gap-y-2 px-5 pt-6">
        {projectGroups.map((block) => (
          <a key={block.id} href={`#${block.id}`} className="inline-flex min-h-11 items-center stamp stamp-ink">
            {block.title}
          </a>
        ))}
      </nav>
      <div className="mx-auto max-w-6xl px-5 pt-6">
        <p className="stamp">Plaatsen op de foto’s</p>
        <p className="mt-2 max-w-2xl text-base">
          Geen kaart van het hele werkgebied. Dit zijn de plaatsen die bij de klussen in het archief staan, van
          Haaksbergen tot de Maasvlakte.
        </p>
        <div className="mt-4">
          <PlaceRail places={content.archivePlaces} />
        </div>
      </div>
      {projectGroups.map((block) => (
        <section key={block.id} id={block.id} data-section={block.id} className="mx-auto max-w-6xl px-5 py-12">
          <h2 className="font-display text-3xl font-bold">{block.title}</h2>
          <Kitlijn className="mt-3 w-14" />
          <p className="mt-3 max-w-2xl">
            {block.id === "groep-schilderwerk"
              ? "Binnen- en buitenschilderwerk, een karwei saus- en schilderwerk in Hengelo, en een karwei in Doetinchem."
              : block.id === "groep-glas-behang"
                ? "Glas in lood in een wit kozijn, en behang in twee uitvoeringen."
                : "Klussen uit 2017 en 2016. Bolsward staat apart: eerst de foto’s van voor de tijd, daarna die van na de tijd."}
          </p>
          <div className="mt-8">
            <Gallery groups={block.groups} />
          </div>
        </section>
      ))}
      <ClosingCta />
    </>
  );
}
