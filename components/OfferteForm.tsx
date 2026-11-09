"use client";

import { FormEvent, useMemo, useState } from "react";
import Link from "next/link";
import { content } from "@/content";

type Fields = {
  naam: string;
  telefoon: string;
  email: string;
  adres: string;
  diensten: string[];
  gebouw: string;
  meters: string;
  opmerkingen: string;
  privacy: boolean;
};

const empty: Fields = {
  naam: "",
  telefoon: "",
  email: "",
  adres: "",
  diensten: [],
  gebouw: "",
  meters: "",
  opmerkingen: "",
  privacy: false,
};

function summary(fields: Fields) {
  const gebouw = content.gebouwtypes.find((item) => item.value === fields.gebouw)?.label ?? "Niet ingevuld";
  return [
    "Offerteaanvraag — J & J Alferink Schilderwerken",
    "",
    `Naam: ${fields.naam}`,
    `Telefoon: ${fields.telefoon}`,
    `E-mail: ${fields.email}`,
    `Adres/plaats: ${fields.adres || "Niet ingevuld"}`,
    `Diensten: ${fields.diensten.join(", ") || "Niet ingevuld"}`,
    `Gebouwtype: ${gebouw}`,
    `Oppervlak: ${fields.meters ? `${fields.meters} m²` : "Niet ingevuld"}`,
    `Opmerkingen: ${fields.opmerkingen || "Geen"}`,
    "",
    "Dit bericht is opgesteld in het conceptformulier.",
    "Het is pas verstuurd als u het zelf in uw mailprogramma verzendt.",
  ].join("\n");
}

function mailto(fields: Fields) {
  const subject = encodeURIComponent("Offerteaanvraag");
  const body = encodeURIComponent(summary(fields));
  return `${content.contact.emailHref}?subject=${subject}&body=${body}`;
}

export default function OfferteForm() {
  const [fields, setFields] = useState<Fields>(empty);
  const [errors, setErrors] = useState<string[]>([]);
  const [sent, setSent] = useState<Fields | null>(null);

  const href = useMemo(() => (sent ? mailto(sent) : ""), [sent]);

  function update<K extends keyof Fields>(key: K, value: Fields[K]) {
    setFields((current) => ({ ...current, [key]: value }));
  }

  function toggleDienst(label: string) {
    setFields((current) => {
      const has = current.diensten.includes(label);
      return {
        ...current,
        diensten: has ? current.diensten.filter((item) => item !== label) : [...current.diensten, label],
      };
    });
  }

  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const next: string[] = [];
    if (!fields.naam.trim()) next.push("Vul uw naam in.");
    if (!fields.telefoon.trim()) next.push("Vul uw telefoonnummer in.");
    if (!fields.email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(fields.email)) next.push("Vul een geldig e-mailadres in.");
    if (fields.diensten.length === 0) next.push("Kies minstens één dienst.");
    if (!fields.gebouw) next.push("Kies een gebouwtype.");
    if (!fields.privacy) next.push("Vink de privacyverklaring aan.");
    setErrors(next);
    if (next.length) {
      setSent(null);
      return;
    }
    const snapshot = { ...fields, diensten: [...fields.diensten] };
    setSent(snapshot);
    window.location.href = mailto(snapshot);
  }

  return (
    <form className="space-y-5" onSubmit={onSubmit} noValidate>
      <p className="border border-ink bg-white p-4 text-base leading-relaxed">
        Dit is een concept; uw mailprogramma opent met het bericht. Er wordt niets automatisch verstuurd. Liever direct
        contact? Bel{" "}
        <a href={content.contact.phoneHref} data-cta="bellen" className="text-link underline underline-offset-4">
          {content.contact.phoneDisplay}
        </a>{" "}
        of mail{" "}
        <a href={content.contact.emailHref} data-cta="mail" className="text-link underline underline-offset-4">
          {content.contact.email}
        </a>
        .
      </p>

      {errors.length > 0 ? (
        <div role="alert" className="border border-signaal bg-white p-4 text-base text-signaal">
          <p className="font-display text-lg font-bold">Controleer het formulier</p>
          <ul className="mt-2 list-disc pl-5">
            {errors.map((error) => (
              <li key={error}>{error}</li>
            ))}
          </ul>
        </div>
      ) : null}

      <div className="grid gap-4 sm:grid-cols-2">
        <label className="field">
          <span>Naam *</span>
          <input name="naam" autoComplete="name" value={fields.naam} onChange={(event) => update("naam", event.target.value)} required />
        </label>
        <label className="field">
          <span>Telefoon *</span>
          <input
            name="telefoon"
            autoComplete="tel"
            inputMode="tel"
            value={fields.telefoon}
            onChange={(event) => update("telefoon", event.target.value)}
            required
          />
        </label>
        <label className="field sm:col-span-2">
          <span>E-mail *</span>
          <input
            name="email"
            type="email"
            autoComplete="email"
            value={fields.email}
            onChange={(event) => update("email", event.target.value)}
            required
          />
        </label>
        <label className="field sm:col-span-2">
          <span>Adres / plaats</span>
          <input name="adres" autoComplete="street-address" value={fields.adres} onChange={(event) => update("adres", event.target.value)} />
        </label>
      </div>

      <fieldset>
        <legend className="stamp stamp-ink">Diensten *</legend>
        <div className="mt-3 grid gap-2 sm:grid-cols-2">
          {content.offerteDiensten.map((dienst) => (
            <label key={dienst} className="check">
              <input
                type="checkbox"
                name="dienst"
                checked={fields.diensten.includes(dienst)}
                onChange={() => toggleDienst(dienst)}
              />
              <span>{dienst}</span>
            </label>
          ))}
        </div>
      </fieldset>

      <fieldset>
        <legend className="stamp stamp-ink">Gebouwtype *</legend>
        <div className="mt-3 flex flex-col gap-2">
          {content.gebouwtypes.map((item) => (
            <label key={item.value} className="check">
              <input
                type="radio"
                name="gebouw"
                value={item.value}
                checked={fields.gebouw === item.value}
                onChange={() => update("gebouw", item.value)}
              />
              <span>{item.label}</span>
            </label>
          ))}
        </div>
      </fieldset>

      <label className="field max-w-xs">
        <span>Oppervlak in m² (optioneel)</span>
        <input
          name="meters"
          inputMode="decimal"
          value={fields.meters}
          onChange={(event) => update("meters", event.target.value)}
        />
      </label>

      <label className="field">
        <span>Opmerkingen</span>
        <textarea name="opmerkingen" value={fields.opmerkingen} onChange={(event) => update("opmerkingen", event.target.value)} />
      </label>

      <label className="check">
        <input type="checkbox" checked={fields.privacy} onChange={(event) => update("privacy", event.target.checked)} />
        <span>
          Ik heb de <Link href="/privacy" className="text-link underline underline-offset-4">privacyverklaring</Link> gelezen. *
        </span>
      </label>

      <button type="submit" className="btn btn-offerte" data-cta="mail">
        Open het mailbericht
      </button>

      <noscript>
        <p className="text-base">
          Zonder JavaScript mailt u zelf naar{" "}
          <a href={content.contact.emailHref} data-cta="mail">
            {content.contact.email}
          </a>{" "}
          of belt u {content.contact.phoneDisplay}.
        </p>
      </noscript>

      {sent ? (
        <div role="status" className="border border-ink bg-white p-4">
          <p className="font-display text-xl font-bold">Uw mailprogramma opent met dit bericht</p>
          <p className="mt-2 text-base">
            Dit is een concept; uw mailprogramma opent met het bericht. Verstuur de e-mail zelf. Er is nog niets
            aangekomen bij ons. Opent er niets? Gebruik de knop hieronder, of bel {content.contact.phoneDisplay}.
          </p>
          <a href={href} data-cta="mail" className="btn btn-bel mt-4">
            Open het bericht opnieuw
          </a>
          <pre className="mt-4 overflow-x-auto bg-papier p-3 font-mono text-xs leading-relaxed whitespace-pre-wrap">{summary(sent)}</pre>
        </div>
      ) : null}
    </form>
  );
}
