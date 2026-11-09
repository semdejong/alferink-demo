import type { Metadata } from "next";
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
        lede="Bel, mail of vraag een offerte. Voor glas dat per direct vervangen moet worden, gebruikt u de 24-uur glasservice."
      />
      <div className="mx-auto grid max-w-6xl gap-8 px-5 py-10 lg:grid-cols-2">
        <ContactCard />
        <div className="flex flex-col items-start gap-4">
          <PhoneLink />
          <OfferteLink />
        </div>
      </div>
      <section data-section="glasservice" className="bg-ink py-8">
        <div className="mx-auto max-w-6xl px-5">
          <Noodbord heading="p" />
        </div>
      </section>
    </>
  );
}
