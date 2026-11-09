import Image from "next/image";
import Link from "next/link";
import { content } from "@/content";
import {
  behangPhotos,
  damwandPhoto,
  featuredPhotos,
  glasPhoto,
  schilderAlgemeen,
} from "@/lib/jobs";
import type { JobPhoto } from "@/lib/jobs";
import FrameImage from "@/components/FrameImage";
import Noodbord from "@/components/Noodbord";
import { PlaceRail } from "@/components/boards";
import {
  ContactCard,
  FaqList,
  Kitlijn,
  MailLink,
  NoodBadge,
  OfferteLink,
  PhoneLink,
  SectionHeading,
  SplitBar,
} from "@/components/ui";

const services: { href: string; title: string; text: string; photo: JobPhoto; urgent?: boolean }[] = [
  {
    href: "/schilderwerk",
    title: "Schilderwerk",
    text: "Binnen- en buitenschilderwerk: kozijnen, deuren en het sausen van plafonds en wanden. Muren, plafond en kozijnen kunnen ook gespoten worden voor een strakke afwerking. Met een onderhoudscontract houden wij woning of pand periodiek bij.",
    photo: schilderAlgemeen[0],
  },
  {
    href: "/glaswerk",
    title: "Glaswerk",
    text: "HR++ glas, Triple glas, hardglas, gefigureerd glas, glas in lood, veiligheidsglas, spiegels en hardglazen deuren. Kleinschalig en projectmatig. Tien jaar garantie op isolerende beglazing, geplaatst volgens NEN, CE en KOMO.",
    photo: glasPhoto,
    urgent: true,
  },
  {
    href: "/behangwerk",
    title: "Behangwerk",
    text: "Vinyl, vliesbehang, glasweefsel en normaal behang. Elk soort heeft een eigen uitstraling. Wij adviseren u op maat, voor woning en bedrijfspand.",
    photo: behangPhotos[0],
  },
  {
    href: "/spuitwerk",
    title: "Spuitwerk en dakcoating",
    text: "Deuren, kozijnen, wanden en plafonds, en damwandplaten en houten wanden. Dak reinigen en een nieuwe dakcoating, waardoor uw dak er weer als nieuw uitziet en de dakpannen langer meegaan.",
    photo: damwandPhoto,
  },
];

export default function Home() {
  const { hero, company } = content;
  return (
    <>
      <section data-section="hero" className="mx-auto grid max-w-6xl items-center gap-6 px-5 py-6 lg:grid-cols-[1.15fr_0.85fr] lg:py-8">
        <figure className="werkbon">
          <FrameImage
            photo={{ src: hero.image, w: hero.imageWidth, h: hero.imageHeight, alt: hero.imageAlt }}
            sizes="(max-width: 1024px) 100vw, 640px"
            preload
          />
          <figcaption className="werkbon-caption">{hero.stamp}</figcaption>
        </figure>
        <div className="rise">
          <p className="stamp">{hero.eyebrow}</p>
          <h1 className="mt-2 font-display text-[2.15rem] font-bold leading-[1.12] text-ink md:text-[2.7rem]">
            {hero.title}
          </h1>
          <Kitlijn draw className="mt-4 w-20" />
          <p className="mt-4">{hero.lede}</p>
          <div className="mt-6 flex flex-col gap-3 sm:flex-row">
            <PhoneLink />
            <OfferteLink />
          </div>
        </div>
      </section>

      <section id="glasservice" data-section="glasservice" className="bg-ink py-8 md:py-12">
        <div className="mx-auto max-w-6xl px-5">
          <Kitlijn tone="groen" draw className="mb-6 w-24" />
          <Noodbord />
        </div>
      </section>

      <section data-section="feiten" className="border-b border-ink/15 bg-white">
        <ul className="mx-auto flex max-w-6xl flex-wrap items-center px-3 py-1">
          {content.facts.map((fact, index) => (
            <li key={fact} className="flex items-center">
              <span className="px-2 py-3 font-mono text-[0.72rem] tracking-[0.08em] text-ink uppercase">{fact}</span>
              {index < content.facts.length - 1 ? <span className="punch" aria-hidden="true" /> : null}
            </li>
          ))}
        </ul>
      </section>

      <section data-section="diensten" className="mx-auto max-w-6xl px-5 py-14 md:py-16">
        <SectionHeading eyebrow="Werkzaamheden" title="Schilderen, glas, behang en spuitwerk" />
        <div className="mt-8 space-y-5">
          {services.map((service) => (
            <article key={service.href} className="werkbon grid md:grid-cols-[18rem_1fr]">
              <div className="relative aspect-[4/3] overflow-hidden md:aspect-auto md:h-full md:min-h-56">
                <FrameImage photo={service.photo} sizes="(max-width: 768px) 100vw, 288px" fit="fill" />
              </div>
              <div className="p-5 md:p-6">
                <div className="flex flex-wrap items-center gap-3">
                  <h3 className="font-display text-2xl font-bold">{service.title}</h3>
                  {service.urgent ? <NoodBadge /> : null}
                </div>
                <Kitlijn className="mt-3 w-12" />
                <p className="mt-3 max-w-2xl text-[1.05rem]">{service.text}</p>
                <Link href={service.href} className="mt-4 inline-flex min-h-11 items-center text-link underline decoration-glas/40 underline-offset-4">
                  Meer over {service.title.toLowerCase()}
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>

      <SplitBar />

      <section data-section="projecten" className="bg-white py-14 md:py-16">
        <div className="mx-auto max-w-6xl px-5">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <SectionHeading eyebrow="Uitgevoerd werk" title="Foto’s van klussen" />
            <Link href="/projecten" className="inline-flex min-h-11 items-center text-link underline decoration-glas/40 underline-offset-4">
              Alle projecten
            </Link>
          </div>
          <p className="mt-4 max-w-2xl text-base text-kit">
            Een selectie uit het archief, met de benamingen zoals wij die bij de foto’s zetten.
          </p>
          <ul className="snap-row mt-6">
            {featuredPhotos.map((photo) => (
              <li key={photo.id}>
                <Link href={`/projecten#${photo.id}`} className="werkbon block">
                  <FrameImage photo={photo} sizes="(max-width: 768px) 84vw, 280px" fit="cover" />
                  <span className="werkbon-caption block">{photo.stamp}</span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section data-section="waarom" className="mx-auto max-w-6xl px-5 py-14 md:py-16">
        <SectionHeading eyebrow="Waarom zaken doen met ons" title="Afspraken die wij nakomen" />
        <ul className="mt-8 grid gap-3 sm:grid-cols-2">
          {content.reasons.map((reason) => (
            <li key={reason.title} className="border border-dashed border-ink bg-white px-4 py-4">
              <div className="flex items-center gap-3">
                <span className="punch" aria-hidden="true" />
                <p className="font-display text-xl font-bold">{reason.title}</p>
              </div>
              <p className="mt-2 text-base leading-relaxed">{reason.text}</p>
            </li>
          ))}
        </ul>
      </section>

      <section data-section="over" className="bg-white">
        <div className="mx-auto grid max-w-6xl items-center gap-8 px-5 py-14 md:grid-cols-[0.9fr_1.1fr] md:py-16">
          <figure className="werkbon">
            <FrameImage
              photo={{ src: company.bus, w: company.busWidth, h: company.busHeight, alt: company.busAlt }}
              sizes="(max-width: 768px) 100vw, 480px"
            />
            <figcaption className="werkbon-caption">BEDRIJFSBUS · HAAKSBERGEN</figcaption>
          </figure>
          <div>
            <SectionHeading eyebrow="Over Johan" title="Alferink Schilderwerken sinds 1997" />
            <div className="prose-tight mt-4 max-w-xl">
              <p>{content.aboutLead}</p>
              <p>{content.staff}</p>
              <p>
                Wij schilderen woningen, bedrijfspanden, scholen, bruggen, windmolens, villa’s en landhuizen. Voor
                gemeenten hoort daar ook werk aan monumentale panden, parkeermeters en gemeente paaltjes bij.
              </p>
            </div>
            <Image
              src={company.keurmerken}
              alt={company.keurmerkenAlt}
              width={company.keurmerkenWidth}
              height={company.keurmerkenHeight}
              className="mt-5 h-8 w-auto"
            />
            <Link href="/over-johan" className="mt-4 inline-flex min-h-11 items-center text-link underline decoration-glas/40 underline-offset-4">
              Meer over het bedrijf
            </Link>
          </div>
        </div>
      </section>

      <section data-section="werkgebied" className="border-y border-ink/15">
        <div className="mx-auto max-w-6xl px-5 py-10">
          <p className="stamp">Werkgebied</p>
          <p className="mt-2 font-display text-2xl font-bold leading-tight md:text-3xl">
            Haaksbergen · Twente · Achterhoek · Salland
          </p>
          <Kitlijn className="mt-3 w-16" />
          <p className="mt-3 max-w-2xl">{content.area}</p>
          <p className="stamp mt-8">Op de werkbon</p>
          <p className="mt-2 max-w-2xl text-base">
            Plaatsen die bij de foto’s staan. Het vaste werkgebied blijft Twente, Achterhoek en Salland, en ook daarbuiten.
          </p>
          <div className="mt-4">
            <PlaceRail places={content.archivePlaces} />
          </div>
          <ul className="mt-8 flex flex-wrap gap-x-4 gap-y-2 border-t border-ink/15 pt-4">
            {content.voorWie.map((name) => (
              <li key={name} className="font-mono text-[0.72rem] tracking-[0.08em] uppercase">
                {name}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section data-section="faq" className="mx-auto max-w-6xl px-5 py-14 md:py-16">
        <SectionHeading eyebrow="Vragen" title="Kort antwoord" />
        <div className="mt-6">
          <FaqList />
        </div>
      </section>

      <section data-section="contact" className="bg-white">
        <div className="mx-auto grid max-w-6xl gap-8 px-5 py-14 md:grid-cols-2 md:py-16">
          <div>
            <SectionHeading title="Contact" eyebrow="Huurnerhof 7" />
            <p className="mt-4 max-w-xl">Heeft u vragen of wilt u een vrijblijvende offerte? Bel of mail ons.</p>
            <div className="mt-6 flex flex-col gap-3 sm:flex-row">
              <PhoneLink />
              <OfferteLink />
            </div>
            <p className="mt-4 text-base">
              Mail: <MailLink className="text-link underline underline-offset-4" />
            </p>
          </div>
          <ContactCard />
        </div>
      </section>
    </>
  );
}
