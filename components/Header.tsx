"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useId, useRef, useState } from "react";
import { usePathname } from "next/navigation";
import { content } from "@/content";
import { Kitlijn, NoodBadge, OfferteLink, PhoneLink } from "@/components/ui";

function active(pathname: string, href: string) {
  return pathname === href || pathname.startsWith(`${href}/`);
}

export default function Header() {
  const pathname = usePathname();
  const menuId = useId();
  const dienstenId = useId();
  const [open, setOpen] = useState(false);
  const [diensten, setDiensten] = useState(false);
  const menuButton = useRef<HTMLButtonElement>(null);
  const dienstenWrap = useRef<HTMLDivElement>(null);
  const { company, contact, nav } = content;

  useEffect(() => {
    setOpen(false);
    setDiensten(false);
  }, [pathname]);

  useEffect(() => {
    if (!open) return;
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = previous;
      window.removeEventListener("keydown", onKey);
      menuButton.current?.focus();
    };
  }, [open]);

  useEffect(() => {
    if (!diensten) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setDiensten(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [diensten]);

  return (
    <div className="sticky top-0 z-50">
    <header data-section="masthead" className="bg-white">
      <a href="#inhoud" className="skip">
        Naar inhoud
      </a>
      <div className="mx-auto flex max-w-6xl items-center gap-3 px-4 py-2.5 lg:gap-6 lg:px-5">
        <Link href="/" className="shrink-0" aria-label={company.name}>
          <Image
            src={company.logo}
            alt={company.name}
            width={company.logoWidth}
            height={company.logoHeight}
            className="h-12 w-auto sm:h-14"
          />
        </Link>

        <nav className="ml-auto hidden items-center gap-5 lg:flex" aria-label="Hoofdmenu">
          <div
            ref={dienstenWrap}
            className="relative"
            onBlur={(event) => {
              if (!event.currentTarget.contains(event.relatedTarget as Node | null)) setDiensten(false);
            }}
          >
            <button
              type="button"
              className="stamp stamp-ink inline-flex min-h-11 items-center gap-1"
              aria-expanded={diensten}
              aria-controls={dienstenId}
              onClick={() => setDiensten((value) => !value)}
            >
              Diensten
              <span aria-hidden="true">{diensten ? "▴" : "▾"}</span>
            </button>
            {diensten ? (
              <div id={dienstenId} className="absolute top-full left-0 z-50 mt-1 min-w-56 border border-ink bg-white p-2">
                <ul>
                  {content.diensten.map((item) => (
                    <li key={item.href}>
                      <Link
                        href={item.href}
                        aria-current={active(pathname, item.href) ? "page" : undefined}
                        className="flex min-h-11 items-center px-2 text-base text-ink hover:bg-papier"
                      >
                        {item.label}
                      </Link>
                    </li>
                  ))}
                  <li>
                    <Link href="/diensten" className="flex min-h-11 items-center px-2 text-base text-link">
                      Alle diensten
                    </Link>
                  </li>
                </ul>
              </div>
            ) : null}
          </div>
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              aria-current={active(pathname, item.href) ? "page" : undefined}
              className={`stamp stamp-ink inline-flex min-h-11 items-center ${active(pathname, item.href) ? "underline decoration-glas decoration-2 underline-offset-8" : ""}`}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="ml-auto flex items-center gap-2 lg:ml-0 lg:gap-3">
          <span className="hidden xl:inline-flex">
            <NoodBadge />
          </span>
          <PhoneLink
            variant="text"
            className="inline-flex min-h-11 items-center font-mono text-[0.92rem] text-ink underline decoration-glas decoration-2 underline-offset-4 sm:text-base"
          >
            {contact.phoneDisplay}
          </PhoneLink>
          <span className="hidden lg:inline-flex">
            <OfferteLink>Offerte</OfferteLink>
          </span>
          <button
            ref={menuButton}
            type="button"
            className="inline-flex h-11 w-11 items-center justify-center border border-ink lg:hidden"
            aria-expanded={open}
            aria-controls={menuId}
            onClick={() => setOpen((value) => !value)}
          >
            <span className="sr-only">{open ? "Menu sluiten" : "Menu openen"}</span>
            {open ? (
              <span aria-hidden="true" className="relative block h-4 w-4">
                <span className="absolute top-1.5 left-0 block h-0.5 w-4 rotate-45 bg-ink" />
                <span className="absolute top-1.5 left-0 block h-0.5 w-4 -rotate-45 bg-ink" />
              </span>
            ) : (
              <span aria-hidden="true" className="flex w-5 flex-col gap-1.5">
                <span className="block h-0.5 bg-ink" />
                <span className="block h-0.5 bg-ink" />
                <span className="block h-0.5 bg-ink" />
              </span>
            )}
          </button>
        </div>
      </div>
      <Kitlijn draw />
      </header>
      <div data-section="glasservice-strip" className="flex items-center justify-between gap-3 border-b border-[#5E5A54] bg-[#D4D0C6] px-4 py-2 lg:hidden">
        <p className="font-mono text-[0.68rem] tracking-[0.14em] text-ink">24-UUR GLASSERVICE</p>
        <PhoneLink variant="nu" className="min-h-11 px-3">
          Bel nu
        </PhoneLink>
      </div>

      {open ? (
        <nav id={menuId} aria-label="Mobiel menu" className="max-h-[calc(100dvh-8rem)] overflow-y-auto border-t border-ink/15 bg-white lg:hidden">
          <p className="stamp px-5 pt-4">Diensten</p>
          <ul>
            {content.diensten.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="flex min-h-12 items-center px-5 text-lg">
                  {item.label}
                </Link>
              </li>
            ))}
            <li>
              <Link href="/diensten" className="flex min-h-12 items-center px-5 text-lg text-link">
                Alle diensten
              </Link>
            </li>
          </ul>
          <ul className="border-t border-ink/15">
            {nav.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="flex min-h-12 items-center px-5 text-lg">
                  {item.label}
                </Link>
              </li>
            ))}
            <li>
              <Link href="/offerte" data-cta="offerte" className="flex min-h-12 items-center px-5 text-lg">
                Offerte
              </Link>
            </li>
          </ul>
          <div className="flex flex-col gap-3 px-5 py-4">
            <PhoneLink />
            <OfferteLink />
          </div>
        </nav>
      ) : null}
    </div>
  );
}
