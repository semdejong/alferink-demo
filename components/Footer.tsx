import Image from "next/image";
import Link from "next/link";
import { content } from "@/content";
import { Kitlijn, MailLink, PhoneLink } from "@/components/ui";

export default function Footer() {
  const { company, contact, nav } = content;
  return (
    <footer data-section="footer" className="bg-ink text-white">
      <Kitlijn tone="groen" />
      <div className="mx-auto grid max-w-6xl gap-10 px-5 py-12 md:grid-cols-4">
        <div className="md:col-span-1">
          <p className="font-display text-xl font-bold">{company.shortName}</p>
          <p className="mt-2 text-base text-white/85">Schilder, glas en spuitwerk vanuit Haaksbergen, sinds 1997.</p>
          <Image
            src={company.keurmerken}
            alt={company.keurmerkenAlt}
            width={company.keurmerkenWidth}
            height={company.keurmerkenHeight}
            className="mt-4 h-9 w-auto bg-white p-1"
          />
        </div>
        <div>
          <p className="stamp stamp-light">Diensten</p>
          <ul className="mt-3 space-y-2 text-base">
            {content.diensten.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="underline decoration-white/30 underline-offset-4">
                  {item.label}
                </Link>
              </li>
            ))}
            <li>
              <Link href="/diensten" className="underline decoration-white/30 underline-offset-4">
                Alle diensten
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <p className="stamp stamp-light">Pagina’s</p>
          <ul className="mt-3 space-y-2 text-base">
            {nav.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="underline decoration-white/30 underline-offset-4">
                  {item.label}
                </Link>
              </li>
            ))}
            <li>
              <Link href="/over-johan#opdrachtgevers" className="underline decoration-white/30 underline-offset-4">
                Opdrachtgevers
              </Link>
            </li>
            <li>
              <Link href="/offerte" data-cta="offerte" className="underline decoration-white/30 underline-offset-4">
                Offerte
              </Link>
            </li>
            <li>
              <Link href="/privacy" className="underline decoration-white/30 underline-offset-4">
                Privacy
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <p className="stamp stamp-light">Contact</p>
          <address className="mt-3 space-y-2 text-base">
            <p>
              {contact.street}
              <br />
              {contact.postalCode} {contact.city}
            </p>
            <p>
              <PhoneLink variant="text" className="underline decoration-white/40 underline-offset-4">
                {contact.phoneDisplay}
              </PhoneLink>
            </p>
            <p>
              <MailLink className="underline decoration-white/40 underline-offset-4" />
            </p>
          </address>
        </div>
      </div>
      <div className="border-t border-white/15">
        <div className="mx-auto flex max-w-6xl flex-col gap-2 px-5 py-4 text-sm text-white/80 sm:flex-row sm:items-center sm:justify-between">
          <p>{content.footer.text}</p>
          <a href="https://sleads.nl" target="_blank" rel="noopener noreferrer" className="underline underline-offset-4">
            Concept door Sleads
          </a>
        </div>
      </div>
    </footer>
  );
}
