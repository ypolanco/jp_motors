import Link from "next/link";
import { BOOK_HREF } from "@/lib/site";

export default function NotFound() {
  return (
    <section className="border-b border-line">
      <div className="wrap flex flex-col items-start gap-6 py-32">
        <span className="label text-accent-text">Error 404</span>
        <h1 className="display text-[clamp(46px,7.2vw,115px)]">
          Wrong <span className="text-accent-text">Bay.</span>
        </h1>
        <p className="max-w-[520px] text-lg text-steel-light">That page isn’t here. Head back to the shop floor, or book your service.</p>
        <div className="flex flex-wrap gap-3.5">
          <Link href="/" className="btn btn-ghost">
            Back Home
          </Link>
          <Link href={BOOK_HREF} className="btn btn-primary">
            Book Service
          </Link>
        </div>
      </div>
    </section>
  );
}
