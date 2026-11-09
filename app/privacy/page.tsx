import type { Metadata } from "next";
import { content } from "@/content";
import { BonSheet } from "@/components/boards";
import { MailLink, PageHero, PhoneLink } from "@/components/ui";

export const metadata: Metadata = {
  title: "Privacy",
  description: "Privacyverklaring van deze conceptsite van J & J Alferink Schilderwerken in Haaksbergen.",
};

export default function PrivacyPage() {
  const { company, contact } = content;
  return (
    <>
      <PageHero
        eyebrow="Conceptsite"
        title="Privacy"
        lede="Deze pagina hoort bij een conceptwebsite voor J & J Alferink Schilderwerken. Het is een voorstel en geen afgesloten overeenkomst."
      />
      <div className="mx-auto grid max-w-3xl gap-4 px-5 py-10">
        <p>
          {company.name}, {contact.street}, {contact.postalCode} {contact.city}. E-mail:{" "}
          <MailLink className="text-link underline underline-offset-4" />. Telefoon:{" "}
          <PhoneLink variant="text" className="text-link underline underline-offset-4">
            {contact.phoneDisplay}
          </PhoneLink>
          .
        </p>
        <BonSheet
          stamp="Wie"
          rows={[
            {
              mark: "Bedrijf",
              text: `${company.name}, ${contact.street}, ${contact.postalCode} ${contact.city}.`,
            },
            { mark: "Bereikbaar", text: `${contact.email} en ${contact.phoneDisplay}.` },
          ]}
        />
        <BonSheet
          stamp="Uw bericht"
          rows={[
            { mark: "Formulier", text: "Een offerteaanvraag opent uw eigen mailprogramma. Vanaf deze site wordt niets automatisch verzonden." },
            { mark: "Bewaren", text: "De invoer blijft in uw browser tot u de pagina verlaat. Het formulier slaat niets op." },
            { mark: "Inbox", text: "Het bericht komt pas bij ons binnen als u het zelf verstuurt." },
          ]}
        />
        <BonSheet
          stamp="Meten"
          rows={[
            { mark: "Demo", text: "Op deze conceptsite staat een cookieloos meetpunt van Sleads. Het telt paginaweergaven voor deze demo." },
            { mark: "Niet", text: "Geen trackingcookie, geen account, geen nieuwsbrief en geen advertentiepixel." },
          ]}
        />
        <BonSheet
          stamp="Vraag"
          rows={[
            {
              mark: "Schrappen",
              text: "Wilt u iets nawragen of een bericht laten schrappen dat u ons gemaild heeft, schrijf dan naar het e-mailadres hierboven.",
            },
          ]}
        />
      </div>
    </>
  );
}
