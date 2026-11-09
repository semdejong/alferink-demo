import type { Metadata } from "next";
import Gallery from "@/components/Gallery";
import { ClosingCta, PageHero } from "@/components/ui";
import { content } from "@/content";
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
        lede="De wanden bepalen voor een groot deel de sfeer in huis of bedrijfspand. Behang is er in verschillende designs; elk soort heeft een eigen uitstraling."
      />
      <div className="mx-auto max-w-6xl px-5 py-8">
        <ul className="grid border-t border-ink/15 sm:grid-cols-2">
          {content.behangTypes.map((type) => (
            <li key={type} className="border-b border-ink/15 py-3 font-display text-xl font-bold">
              {type}
            </li>
          ))}
        </ul>
        <p className="mt-6 max-w-2xl">
          Voor een gepast advies op maat kunt u bij Alferink Schilderwerken terecht. Wij helpen u graag om uw wensen
          uit te voeren. Neem contact op wanneer u meer informatie wilt of een project voor ons heeft.
        </p>
      </div>
      <div className="mx-auto max-w-6xl px-5 pb-16">
        <Gallery groups={[glasBehangGroups[1]]} />
      </div>
      <ClosingCta />
    </>
  );
}
