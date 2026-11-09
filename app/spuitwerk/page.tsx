import type { Metadata } from "next";
import Link from "next/link";
import { BonSheet } from "@/components/boards";
import FrameImage from "@/components/FrameImage";
import Gallery from "@/components/Gallery";
import { ClosingCta, Kitlijn, PageHero } from "@/components/ui";
import { bolswardNa, bolswardVoor, damwandPhoto, garagebox, sauswerk, spuit2017 } from "@/lib/jobs";

export const metadata: Metadata = {
  title: "Spuitwerk en dakcoating",
  description:
    "Spuitwerk van deuren, kozijnen, wanden, damwand en hout, plus dakreiniging en dakcoating. Klussen uit 2016 en 2017, vanuit Haaksbergen.",
};

export default function SpuitwerkPage() {
  return (
    <>
      <PageHero
        eyebrow="Diensten · Haaksbergen"
        title="Spuitwerk met een strakke afwerking"
        lede="Met ons spuitwerk krijgt u een strakke afwerking van deuren, kozijnen, wanden en plafonds. Er zijn verschillende mogelijkheden qua structuur en kleur."
      />
      <div className="mx-auto grid max-w-6xl items-start gap-8 px-5 py-10 lg:grid-cols-[1.1fr_0.9fr]">
        <div className="space-y-4">
          <BonSheet
            stamp="Inhoud · spuitwerk"
            title="Strakke afwerking"
            rows={[
              { mark: "Deuren", text: "Deuren, kozijnen, wanden en plafonds, met keuze in structuur en kleur." },
              { mark: "Damwand", text: "Gespecialiseerd in het spuiten van damwandplaten en houten wanden." },
              { mark: "Dak", text: "Dakreiniging en een nieuwe dakcoating, zodat het dak er weer als nieuw uitziet." },
              { mark: "Pannen", text: "Een goede coating geeft de dakpannen een langere levensduur." },
              { mark: "Weer", text: "Zo krijgen wisselende weersomstandigheden minder grip op het dak." },
            ]}
          />
          <div className="prose-tight space-y-4">
          <p>Tevens zijn wij gespecialiseerd in het spuiten van damwandplaten en houten wanden.</p>
          <p>
            Daarnaast bent u bij ons aan het juiste adres wanneer uw dak schoongemaakt moet worden of wanneer uw dak
            een nieuwe dakcoating nodig heeft. Hierdoor ziet uw dak er weer als nieuw uit en hebben de dakpannen een
            langere levensduur. Met een goede dakcoating voorkomt u dat de wisselende weersomstandigheden grip krijgen
            op uw dak.
          </p>
          <p>
            Heeft u vragen over spuitwerk? Wij adviseren u graag vrijblijvend. Bel{" "}
            <a href="tel:+31654244846" data-cta="bellen" className="text-link underline underline-offset-4">
              06-54244846
            </a>{" "}
            of vraag een{" "}
            <Link href="/offerte" data-cta="offerte" className="text-link underline underline-offset-4">
              vrijblijvende offerte
            </Link>
            .
          </p>
          </div>
        </div>
        <figure className="werkbon">
          <FrameImage photo={damwandPhoto} sizes="(max-width: 1024px) 100vw, 480px" />
          <figcaption className="werkbon-caption">{damwandPhoto.stamp}</figcaption>
        </figure>
      </div>

      <div className="mx-auto max-w-6xl px-5 pb-16">
        <h2 className="font-display text-3xl font-bold">Klussen 2017</h2>
        <Kitlijn className="mt-3 w-14" />
        <nav aria-label="Klussen 2017" className="mt-4 flex max-w-full flex-wrap gap-x-4 gap-y-1">
          {spuit2017.map((group) => (
            <a key={group.id} href={`#${group.id}`} className="inline-flex min-h-11 max-w-full items-center font-mono text-xs tracking-wide text-link uppercase">
              {group.title}
            </a>
          ))}
        </nav>
        <div className="mt-8">
          <Gallery groups={spuit2017} />
        </div>

        <h2 className="mt-14 font-display text-3xl font-bold">Klussen 2016</h2>
        <Kitlijn className="mt-3 w-14" />
        <p className="mt-3 max-w-2xl">Hieronder een aantal foto’s van een klus in Bolsward.</p>
        <div className="mt-6 grid min-w-0 gap-10 lg:grid-cols-2 [&>*]:min-w-0">
          <Gallery groups={[bolswardVoor]} />
          <Gallery groups={[bolswardNa]} />
        </div>
        <div className="mt-10">
          <Gallery groups={[garagebox, sauswerk]} />
        </div>
      </div>
      <ClosingCta />
    </>
  );
}
