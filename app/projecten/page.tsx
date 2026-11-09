import type { Metadata } from "next";
import Gallery from "@/components/Gallery";
import { ClosingCta, Kitlijn, PageHero } from "@/components/ui";
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
      {projectGroups.map((block) => (
        <section key={block.id} id={block.id} data-section={block.id} className="mx-auto max-w-6xl px-5 py-12">
          <h2 className="font-display text-3xl font-bold">{block.title}</h2>
          <Kitlijn className="mt-3 w-14" />
          <div className="mt-8">
            <Gallery groups={block.groups} />
          </div>
        </section>
      ))}
      <ClosingCta />
    </>
  );
}
