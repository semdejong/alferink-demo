import { OfferteLink, PhoneLink } from "@/components/ui";
import { content } from "@/content";

export default function StickyBar() {
  return (
    <div data-section="belbalk" className="fixed inset-x-0 bottom-0 z-40 grid grid-cols-2 border-t border-ink md:hidden">
      <PhoneLink className="rounded-none">Bel {content.contact.phoneDisplay}</PhoneLink>
      <OfferteLink className="btn btn-offerte rounded-none">Offerte</OfferteLink>
    </div>
  );
}
