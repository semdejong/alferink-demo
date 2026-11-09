import type { Metadata } from "next";
import OfferteForm from "@/components/OfferteForm";
import Noodbord from "@/components/Noodbord";
import { PageHero, PhoneLink } from "@/components/ui";
import { content } from "@/content";

export const metadata: Metadata = {
  title: "Vrijblijvende offerte",
  description:
    "Vraag een vrijblijvende offerte aan bij J & J Alferink in Haaksbergen. Het formulier opent uw mailprogramma. Bel 06-54244846.",
};

export default function OffertePage() {
  return (
    <>
      <PageHero
        eyebrow="Vrijblijvend"
        title="Offerte aanvragen"
        lede="Vul het formulier in. Uw mailprogramma opent met een leesbaar bericht aan ons. Wij ontvangen het pas wanneer u het zelf verzendt. U kunt ook bellen."
      />
      <div className="mx-auto grid max-w-6xl items-start gap-8 px-5 py-10 lg:grid-cols-[1.25fr_0.75fr]">
        <OfferteForm />
        <aside className="space-y-4">
          <Noodbord compact heading="p" />
          <div className="werkbon p-4">
            <p className="stamp">Liever bellen</p>
            <p className="mt-2 text-base">
              {content.contact.street}, {content.contact.postalCode} {content.contact.city}
            </p>
            <PhoneLink className="mt-4" />
          </div>
        </aside>
      </div>
    </>
  );
}
