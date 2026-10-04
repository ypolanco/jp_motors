import Link from "next/link";
import { CalendarDays, Navigation, Phone } from "lucide-react";
import { BOOK_HREF, site } from "@/lib/site";

const item = "flex min-h-16 flex-col items-center justify-center gap-1 font-sans text-[14px] font-bold";

/** Sticky Call / Book / Directions bar, phones only. */
export function MobileActionBar() {
  return (
    <nav
      aria-label="Quick actions"
      className="fixed inset-x-0 bottom-0 z-50 grid grid-cols-3 border-t border-line-strong bg-ink pb-[env(safe-area-inset-bottom)] shadow-[0_-8px_24px_rgb(24_35_61/0.12)] md:hidden"
    >
      <a href={site.phoneHref} className={`${item} text-bone`}>
        <Phone className="size-5" aria-hidden />
        Call
      </a>
      <Link href={BOOK_HREF} className={`${item} bg-accent font-extrabold text-navy`}>
        <CalendarDays className="size-5" aria-hidden />
        Book a visit
      </Link>
      <a href={site.directionsUrl} target="_blank" rel="noopener noreferrer" className={`${item} text-bone`}>
        <Navigation className="size-5" aria-hidden />
        Directions
      </a>
    </nav>
  );
}
