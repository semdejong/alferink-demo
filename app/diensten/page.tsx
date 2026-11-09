import type { Metadata } from "next";
import Link from "next/link";
import FrameImage from "@/components/FrameImage";
import { ClosingCta, Kitlijn, NoodBadge, PageHero, SplitBar } from "@/components/ui";
import { featuredPhotos } from "@/lib/jobs";

export const metadata: Metadata = {
  title: "Diensten",
  description:
    "Schilderwerk, 24-uur glasservice, behangwerk, spuitwerk en dakcoating door J & J Alferink vanuit Haaksbergen.",
};

const items = [
  {
    href: "/schilderwerk",
    title: "Schilderwerk",
    text: "Binnen en buiten: kozijnen, deuren, sausen van plafonds en wanden, ook gespoten, plus onderhoudscontracten.",
    photo: featuredPhotos[0],
  },
  {
    href: "/glaswerk",
    title: "Glaswerk",
    text: "HR++, Triple, hardglas, glas in lood en meer. Tien jaar garantie op isolerende beglazing en een 24-uur glasservice.",
    photo: featuredPhotos[2],
    urgent: true,
  },
  {
    href: "/behangwerk",
    title: "Behangwerk",
    text: "Vinyl, vliesbehang, glasweefsel en normaal behang, met advies op maat.",
    photo: featuredPhotos[3],
  },
  {
    href: "/spuitwerk",
    title: "Spuitwerk en dak",
    text: "Deuren, kozijnen, wanden, plafonds, damwand en houten wanden. Dakreiniging en dakcoating.",
    photo: featuredPhotos[6],
  },
];

export default function DienstenPage() {
  return (
    <>
      <PageHero
        eyebrow="Vanuit Haaksbergen"
        title="Onze werkzaamheden"
        lede="Schilderen, glas zetten, behangen, spuiten en dakcoating. Voor particulieren, bedrijven, woningbouwcorporaties, gemeenten en instellingen."
      />
      <div className="mx-auto max-w-6xl px-5 py-8">
        <SplitBar />
        <div className="mt-6 grid gap-4 md:grid-cols-2">
          {items.map((item) => (
            <article key={item.href} className="werkbon">
              <FrameImage photo={item.photo} sizes="(max-width: 768px) 100vw, 560px" />
              <div className="p-5">
                <div className="flex flex-wrap items-center gap-3">
                  <h2 className="font-display text-2xl font-bold">{item.title}</h2>
                  {item.urgent ? <NoodBadge /> : null}
                </div>
                <Kitlijn className="mt-3 w-12" />
                <p className="mt-3">{item.text}</p>
                <Link href={item.href} className="mt-4 inline-flex min-h-11 items-center text-link underline underline-offset-4">
                  Naar {item.title.toLowerCase()}
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
      <ClosingCta />
    </>
  );
}
