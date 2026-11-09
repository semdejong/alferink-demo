"use client";

import { useEffect, useId, useRef, useState } from "react";
import { createPortal } from "react-dom";
import FrameImage from "@/components/FrameImage";
import type { JobGroup, JobPhoto } from "@/lib/jobs";

type Flat = JobPhoto & { index: number };

export default function Gallery({ groups }: { groups: JobGroup[] }) {
  const reactId = useId();
  const flat: Flat[] = groups.flatMap((group) => group.photos).map((photo, index) => ({ ...photo, index }));
  const [open, setOpen] = useState<number | null>(null);
  const [mounted, setMounted] = useState(false);
  const closeRef = useRef<HTMLButtonElement>(null);
  const dialogRef = useRef<HTMLDivElement>(null);
  const isOpen = open !== null;

  useEffect(() => setMounted(true), []);

  useEffect(() => {
    if (!isOpen) return;
    const site = document.getElementById("site");
    const returnTo = document.activeElement as HTMLElement | null;
    site?.setAttribute("inert", "");
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    closeRef.current?.focus();
    return () => {
      site?.removeAttribute("inert");
      document.body.style.overflow = previous;
      returnTo?.focus();
    };
  }, [isOpen]);

  useEffect(() => {
    if (open === null) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(null);
      if (event.key === "ArrowRight") setOpen((current) => (current === null ? current : Math.min(flat.length - 1, current + 1)));
      if (event.key === "ArrowLeft") setOpen((current) => (current === null ? current : Math.max(0, current - 1)));
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, flat.length]);

  const active = open === null ? null : flat[open];

  return (
    <div className="min-w-0 space-y-10">
      {groups.map((group) => (
        <section key={group.id} id={group.id} aria-labelledby={`${reactId}-${group.id}`}>
          <h3 id={`${reactId}-${group.id}`} className="font-display text-2xl font-bold text-ink">
            {group.title}
          </h3>
          {group.note ? <p className="mt-1 max-w-2xl text-base text-kit">{group.note}</p> : null}
          <ul className="snap-row mt-4">
            {group.photos.map((photo) => {
              const index = flat.findIndex((item) => item.id === photo.id);
              return (
                <li key={photo.id} id={photo.id}>
                  <figure className="werkbon h-full">
                    <button
                      type="button"
                      className="block w-full text-left"
                      onClick={() => setOpen(index)}
                      aria-haspopup="dialog"
                      aria-labelledby={`${reactId}-cap-${photo.id}`}
                    >
                      <FrameImage photo={photo} sizes="(max-width: 768px) 84vw, 280px" />
                    </button>
                    <figcaption id={`${reactId}-cap-${photo.id}`} className="werkbon-caption">
                      {photo.stamp}
                    </figcaption>
                  </figure>
                </li>
              );
            })}
          </ul>
        </section>
      ))}

      {mounted && active
        ? createPortal(
            <div
              ref={dialogRef}
              role="dialog"
              aria-modal="true"
              aria-label={active.stamp}
              className="fixed inset-0 flex items-center justify-center p-4"
              style={{ zIndex: 80, background: "rgba(18, 29, 31, 0.94)" }}
              onClick={(event) => {
                if (event.target === event.currentTarget) setOpen(null);
              }}
            >
              <div className="flex max-h-full w-full max-w-5xl flex-col gap-3">
                <div className="flex items-center justify-between gap-3 text-white">
                  <p className="font-mono text-xs tracking-wide">
                    {open! + 1} / {flat.length}
                  </p>
                  <button ref={closeRef} type="button" className="btn btn-on-dark" onClick={() => setOpen(null)}>
                    Sluiten
                  </button>
                </div>
                <div className="flex min-h-0 items-center justify-center">
                  <FrameImage
                    photo={active}
                    sizes={`${Math.min(active.w, 1400)}px`}
                    className="h-auto max-h-[72vh] w-auto max-w-full"
                  />
                </div>
                <p className="werkbon-caption">{active.stamp}</p>
                <div className="flex gap-3">
                  <button
                    type="button"
                    className="btn btn-on-dark"
                    onClick={() => setOpen((current) => (current === null ? current : Math.max(0, current - 1)))}
                    disabled={open === 0}
                  >
                    Vorige
                  </button>
                  <button
                    type="button"
                    className="btn btn-on-dark"
                    onClick={() => setOpen((current) => (current === null ? current : Math.min(flat.length - 1, current + 1)))}
                    disabled={open === flat.length - 1}
                  >
                    Volgende
                  </button>
                </div>
              </div>
            </div>,
            document.body,
          )
        : null}
    </div>
  );
}
