import type { Metadata } from "next";
import Image from "next/image";
import { content } from "@/content";
import { BonSheet } from "@/components/boards";
import FrameImage from "@/components/FrameImage";
import { schilderAlgemeen } from "@/lib/jobs";
import { ClosingCta, Kitlijn, PageHero } from "@/components/ui";

export const metadata: Metadata = {
  title: "Over Johan Alferink",
  description:
    "Alferink Schilderwerken is in 1997 opgericht door Johan Alferink in Haaksbergen. Schilder-, glas-, behang- en spuitwerk voor particulieren en zakelijke opdrachtgevers.",
};

const opdrachtgevers = [
  {
    title: "Particulieren",
    paragraphs: [
      "Wij verzorgen spuitwerk, schilderwerk, het zetten van glas en behangwerk voor woning en pand. Daarnaast kunt u een onderhoudscontract afsluiten, zodat er periodiek onderhoud aan uw woning wordt gedaan.",
      "Voor advies op maat kunt u bij ons terecht, ook rondom het huis. Gaat u verhuizen en heeft u meerdere klussen? Vraag dan een offerte op maat. Die is vrijblijvend.",
    ],
  },
  {
    title: "Bedrijven",
    paragraphs: [
      "Een goede uitstraling is een visitekaartje van uw bedrijf. Wij zijn actief in schilder-, onderhoud- en glaswerk en maken duidelijke afspraken. Met een onderhoudscontract blijft het bedrijfspand bijgehouden.",
      "Heeft u vragen, neem dan contact op of bel vrijblijvend. Wij komen graag langs om de situatie te bekijken en daarna een vrijblijvende offerte te maken.",
    ],
  },
  {
    title: "Woningbouwcorporaties",
    paragraphs: [
      "Schilderwerk hoort bij de uitstraling van iedere woning. Goed schilderwerk ondersteunt de duurzaamheid van het object en heeft op de lange termijn een kostenbesparend effect.",
      "Voor vragen kunt u vrijblijvend contact opnemen. Wij adviseren graag over de mogelijkheden.",
    ],
  },
  {
    title: "Instellingen",
    paragraphs: [
      "Vele ondergronden hebben aandacht nodig. Wij brengen al jarenlang kleur en bescherming aan en zorgen voor strak en verzorgd onderhoud aan het pand van de instelling. Dat kan bijvoorbeeld een school zijn.",
      "Strak en verzorgd schilderwerk zorgt voor sfeer en rust. Heeft u vragen, neem dan gerust contact op.",
    ],
  },
  {
    title: "Gemeenten",
    paragraphs: [
      "Naast kleinere projecten hebben wij jarenlange ervaring met grotere projecten. Het schilderwerk voor gemeenten leveren wij professioneel en correct af.",
      "Zo kunt u denken aan het schilderen van monumentale panden, parkeermeters of gemeente paaltjes.",
    ],
  },
];

export default function OverJohanPage() {
  const { company } = content;
  return (
    <>
      <PageHero
        eyebrow="Het bedrijf · sinds 1997"
        title="Johan Alferink, schilder en glaszetter in Haaksbergen"
        lede={content.aboutLead}
      />
      <div className="mx-auto grid max-w-6xl items-start gap-8 px-5 py-10 lg:grid-cols-[0.9fr_1.1fr]">
        <figure className="werkbon">
          <FrameImage
            photo={{ src: company.bus, w: company.busWidth, h: company.busHeight, alt: company.busAlt }}
            sizes="(max-width: 1024px) 100vw, 520px"
          />
          <figcaption className="werkbon-caption">BEDRIJFSBUS · HAAKSBERGEN</figcaption>
        </figure>
        <div className="prose-tight space-y-4">
          <p>
            Alferink Schilderwerken is opgericht in 1997 door Johan Alferink. Wij zijn gespecialiseerd in het
            schilderen van allerlei constructies zoals woningen, bedrijfspanden en scholen. Daarnaast kunt u denken aan
            industriële en grotere opdrachten zoals het schilderen van bruggen, windmolens, villa’s en landhuizen.
          </p>
          <p>{content.staff}</p>
          <p>{content.area}</p>
          <p>Onze klantenkring bestaat uit particulieren, bedrijven, woningbouwcorporaties, gemeenten en instellingen.</p>
          <Image
            src={company.keurmerken}
            alt={company.keurmerkenAlt}
            width={company.keurmerkenWidth}
            height={company.keurmerkenHeight}
            className="h-10 w-auto"
          />
        </div>
      </div>

      <div className="mx-auto grid max-w-6xl items-start gap-8 px-5 pb-12 lg:grid-cols-[1.1fr_0.7fr]">
        <BonSheet
          stamp="Werkbon · constructies"
          title="Sinds 1997"
          rows={[
            { mark: "Woningen", text: "Binnen- en buitenschilderwerk, glas, behang en onderhoud aan huis." },
            { mark: "Bedrijfspanden", text: "Schilder-, onderhoud- en glaswerk, zodat het pand er verzorgd bij staat." },
            { mark: "Scholen", text: "Onderhoud aan een instelling, bijvoorbeeld een school: strak en verzorgd." },
            { mark: "Bruggen", text: "Grotere en industriële opdrachten, naast het werk aan huis." },
            { mark: "Windmolens", text: "Ook molens schilderen wij. Op de foto staat de bus bij een windmolen." },
            { mark: "Villa’s", text: "Villa’s en landhuizen horen bij de grotere particuliere opdrachten." },
            { mark: "Gemeente", text: "Monumentale panden, parkeermeters en gemeente paaltjes." },
          ]}
        />
        <figure className="werkbon">
          <FrameImage photo={schilderAlgemeen[2]} sizes="(max-width: 1024px) 100vw, 420px" />
          <figcaption className="werkbon-caption">{schilderAlgemeen[2].stamp}</figcaption>
        </figure>
      </div>

      <section id="opdrachtgevers" data-section="opdrachtgevers" className="bg-white">
        <div className="mx-auto max-w-6xl px-5 py-14">
          <p className="stamp">Opdrachtgevers</p>
          <h2 className="mt-1 font-display text-3xl font-bold">Wij staan voor iedereen klaar</h2>
          <Kitlijn className="mt-3 w-14" />
          <div className="mt-8 grid gap-8 md:grid-cols-2">
            {opdrachtgevers.map((item) => (
              <article key={item.title}>
                <h3 className="font-display text-2xl font-bold">{item.title}</h3>
                <Kitlijn className="mt-2 w-10" />
                {item.paragraphs.map((paragraph) => (
                  <p key={paragraph} className="mt-3 text-[1.05rem]">
                    {paragraph}
                  </p>
                ))}
              </article>
            ))}
          </div>
        </div>
      </section>
      <ClosingCta />
    </>
  );
}
