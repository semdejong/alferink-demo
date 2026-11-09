import type { Metadata } from "next";
import { BonSheet } from "@/components/boards";
import Noodbord from "@/components/Noodbord";
import { ContactCard, OfferteLink, PageHero, PhoneLink } from "@/components/ui";

export const metadata: Metadata = {
  title: "Contact",
  description: "J & J Alferink Schilderwerken, Huurnerhof 7, 7481 EK Haaksbergen. Bel 06-54244846 of mail voor een vrijblijvende offerte.",
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Haaksbergen"
        title="Neem vrijblijvend contact op"
        lede="Drie manieren, zonder omweg. Bellen heeft de voorkeur. Voor glas dat per direct vervangen moet worden, gebruikt u de 24-uur glasservice."
      />
      <div className="mx-auto grid max-w-6xl items-stretch gap-8 px-5 pt-10 lg:grid-cols-2">
        <ContactCard />
        <BonSheet
          className="h-full"
          stamp="Drie wegen"
          title="Huurnerhof 7"
          rows={[
            { mark: "Bellen", text: "06-54244846. De snelste weg, ook wanneer een ruit per direct vervangen moet worden." },
            { mark: "Mailen", text: "info@alferink-schilderwerken.nl. Voor een vraag of om een afspraak te maken." },
            { mark: "Offerte", text: "Het formulier opent uw mailprogramma. Er wordt niets stil verstuurd." },
          ]}
        />
      </div>
      <div className="mx-auto flex max-w-6xl flex-col gap-3 px-5 py-6 sm:flex-row">
        <PhoneLink />
        <OfferteLink />
      </div>
      <div className="mx-auto max-w-6xl px-5 pb-12">
        <BonSheet
          stamp="Handig om te noemen"
          title="Voor een belletje of een offerte"
          rows={[
            { mark: "Naam", text: "Wie belt of mailt, en een telefoonnummer waarop wij u terug kunnen vinden." },
            { mark: "Plaats", text: "Waar het werk zit. Wij werken vanuit Haaksbergen, in Twente, de Achterhoek en Salland, en ook daarbuiten." },
            { mark: "Werk", text: "Schilderwerk, behang, glas, spuitwerk of een dak. Eén klus of meerdere, bijvoorbeeld bij een verhuizing." },
            { mark: "Glas", text: "Moet een ruit per direct worden vervangen, zeg dat erbij. Dan hoort het bij de 24-uur glasservice." },
          ]}
        />
      </div>
      <section data-section="glasservice" className="bg-ink py-8">
        <div className="mx-auto max-w-6xl px-5">
          <Noodbord heading="p" />
        </div>
      </section>
    </>
  );
}
