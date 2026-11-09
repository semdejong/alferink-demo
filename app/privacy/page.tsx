import type { Metadata } from "next";
import { content } from "@/content";
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
      <div className="mx-auto max-w-3xl space-y-4 px-5 py-10">
        <p>
          {company.name}, {contact.street}, {contact.postalCode} {contact.city}. E-mail:{" "}
          <MailLink className="text-link underline underline-offset-4" />. Telefoon:{" "}
          <PhoneLink variant="text" className="text-link underline underline-offset-4">
            {contact.phoneDisplay}
          </PhoneLink>
          .
        </p>
        <p>
          Een offerteaanvraag opent uw eigen mailprogramma met een bericht aan {contact.email}. Er wordt vanaf deze
          site niets automatisch verzonden. Het bericht komt pas bij ons binnen als u het zelf verstuurt. Bewaar geen
          gegevens in dit formulier: de invoer blijft in uw browser tot u de pagina verlaat.
        </p>
        <p>
          Op deze conceptsite staat een cookieloos meetpunt van Sleads. Het script telt paginaweergaven voor deze demo
          en plaatst geen trackingcookie. Er is geen account, geen nieuwsbrief en geen advertentiepixel.
        </p>
        <p>
          Wilt u iets nawragen of een bericht laten schrappen dat u ons gemaild heeft, schrijf dan naar{" "}
          <MailLink className="text-link underline underline-offset-4" />.
        </p>
      </div>
    </>
  );
}
