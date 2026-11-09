import Link from "next/link";
import { content } from "@/content";

export function Kitlijn({
  tone = "blauw",
  draw = false,
  className = "w-full",
}: {
  tone?: "blauw" | "groen";
  draw?: boolean;
  className?: string;
}) {
  return (
    <span
      className={`kitlijn ${tone === "groen" ? "kitlijn-groen" : ""} ${draw ? "kitlijn-draw" : ""} ${className}`}
      aria-hidden="true"
    />
  );
}

export function SplitBar() {
  return (
    <div data-section="verdeling" className="grid grid-cols-2 text-white">
      <p className="stamp flex min-h-11 items-center bg-blad-text px-4 !text-white sm:px-6">Schilder</p>
      <p className="stamp flex min-h-11 items-center justify-end bg-glas px-4 !text-white sm:px-6">
        Glas & spuit
      </p>
    </div>
  );
}

export function NoodBadge({ href = "/glaswerk#glasservice" }: { href?: string }) {
  return (
    <Link href={href} className="nood-badge">
      <i className="rivet rivet-inline" aria-hidden="true" />
      24-uur glasservice
      <i className="rivet rivet-inline" aria-hidden="true" />
    </Link>
  );
}

export function PhoneLink({
  variant = "bel",
  className = "",
  children,
}: {
  variant?: "bel" | "nu" | "text";
  className?: string;
  children?: React.ReactNode;
}) {
  const { contact } = content;
  const style = variant === "nu" ? "btn btn-nu" : variant === "bel" ? "btn btn-bel" : "";
  return (
    <a href={contact.phoneHref} data-cta="bellen" className={`${style} ${className}`.trim()}>
      {children ?? `Bel ${contact.phoneDisplay}`}
    </a>
  );
}

export function MailLink({ className = "", children }: { className?: string; children?: React.ReactNode }) {
  return (
    <a href={content.contact.emailHref} data-cta="mail" className={className}>
      {children ?? content.contact.email}
    </a>
  );
}

export function OfferteLink({
  className = "btn btn-offerte",
  children = "Vrijblijvende offerte",
}: {
  className?: string;
  children?: React.ReactNode;
}) {
  return (
    <Link href="/offerte" data-cta="offerte" className={className}>
      {children}
    </Link>
  );
}

export function PageHero({
  eyebrow,
  title,
  lede,
}: {
  eyebrow: string;
  title: string;
  lede: string;
}) {
  return (
    <header data-section="pagina-kop" className="mx-auto max-w-6xl px-5 pt-10 pb-2 md:pt-14">
      <p className="stamp">{eyebrow}</p>
      <h1 className="mt-2 max-w-3xl font-display text-[2.15rem] font-bold leading-[1.12] text-ink md:text-5xl">
        {title}
      </h1>
      <Kitlijn draw className="mt-4 w-16" />
      <p className="mt-4 max-w-2xl text-[1.125rem] leading-[1.6]">{lede}</p>
    </header>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  id,
}: {
  eyebrow?: string;
  title: string;
  id?: string;
}) {
  return (
    <div className="max-w-3xl">
      {eyebrow ? <p className="stamp">{eyebrow}</p> : null}
      <h2 id={id} className="mt-1 font-display text-[1.75rem] font-bold leading-tight text-ink md:text-[2.05rem]">
        {title}
      </h2>
      <Kitlijn className="mt-3 w-14" />
    </div>
  );
}

export function FaqList() {
  return (
    <div className="border-t border-ink/15">
      {content.faqs.map((item) => (
        <details key={item.q} className="group border-b border-ink/15">
          <summary className="flex min-h-12 cursor-pointer list-none items-center justify-between gap-4 py-3 font-display text-xl font-bold text-ink">
            {item.q}
            <span className="font-mono text-sm text-glas group-open:hidden" aria-hidden="true">
              +
            </span>
            <span className="hidden font-mono text-sm text-glas group-open:inline" aria-hidden="true">
              –
            </span>
          </summary>
          <p className="max-w-3xl pb-4 text-[1.05rem] leading-relaxed">{item.a}</p>
        </details>
      ))}
    </div>
  );
}

export function ContactCard() {
  const { contact } = content;
  return (
    <address className="werkbon p-5 md:p-6">
      <p className="stamp">Contact</p>
      <p className="mt-2 font-display text-2xl font-bold text-ink">{content.company.name}</p>
      <Kitlijn className="mt-3 w-12" />
      <p className="mt-4">
        {contact.street}
        <br />
        {contact.postalCode} {contact.city}
      </p>
      <p className="mt-3">
        <PhoneLink variant="text" className="font-mono text-link underline decoration-glas/40 underline-offset-4">
          {contact.phoneDisplay}
        </PhoneLink>
      </p>
      <p className="mt-1">
        <MailLink className="text-link underline decoration-glas/40 underline-offset-4" />
      </p>
      <p className="mt-3">
        <a
          href={contact.mapsHref}
          target="_blank"
          rel="noopener noreferrer"
          className="text-link underline decoration-glas/40 underline-offset-4"
        >
          {contact.mapsLabel}
        </a>
      </p>
    </address>
  );
}

export function ClosingCta({
  title = "Vrijblijvend contact",
  text = "Heeft u een vraag of wilt u een vrijblijvende offerte? Bel of mail ons. Voor glas dat per direct vervangen moet worden, belt u de 24-uur glasservice.",
}: {
  title?: string;
  text?: string;
}) {
  return (
    <section data-section="afsluiting" className="bg-white">
      <div className="mx-auto grid max-w-6xl gap-8 px-5 py-14 md:grid-cols-[1.2fr_0.8fr] md:py-16">
        <div>
          <SectionHeading eyebrow="Haaksbergen" title={title} />
          <p className="mt-4 max-w-xl">{text}</p>
          <div className="mt-6 flex flex-col gap-3 sm:flex-row">
            <PhoneLink />
            <OfferteLink />
          </div>
          <p className="mt-4 text-base text-kit">
            Mail: <MailLink className="text-link underline decoration-glas/40 underline-offset-4" />
          </p>
        </div>
        <ContactCard />
      </div>
    </section>
  );
}
