import Link from "next/link";
import { PhoneLink } from "@/components/ui";

export default function NotFound() {
  return (
    <div className="mx-auto max-w-3xl px-5 py-16">
      <p className="stamp">404</p>
      <h1 className="mt-2 font-display text-4xl font-bold">Deze pagina bestaat niet</h1>
      <p className="mt-4">Het adres klopt niet, of de pagina is verplaatst.</p>
      <div className="mt-6 flex flex-col gap-3 sm:flex-row">
        <Link href="/" className="btn btn-line">
          Naar de homepage
        </Link>
        <PhoneLink />
      </div>
    </div>
  );
}
