import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { BOOK_HREF, navLinks, site } from "@/lib/site";

export function MobileNav({ open, pathname }: { open: boolean; pathname: string }) {
  if (!open) return null;
  return (
    <nav
      id="mobile-nav"
      aria-label="Mobile"
      className="max-h-[calc(100dvh-120px)] overflow-y-auto border-t border-line bg-ink px-5 pb-6 pt-1 xl:hidden"
    >
      <ul>
        {navLinks.map((l) => {
          const active = l.href === "/" ? pathname === "/" : pathname.startsWith(l.href);
          return (
            <li key={l.href} className="border-b border-line">
              <Link
                href={l.href}
                aria-current={active ? "page" : undefined}
                className={`flex min-h-[54px] items-center justify-between font-display text-2xl font-bold ${
                  active ? "text-accent-text" : "text-bone"
                }`}
              >
                {l.label}
                <ArrowRight className="size-5 text-accent-text" aria-hidden />
              </Link>
            </li>
          );
        })}
      </ul>
      <div className="mt-5 grid grid-cols-2 gap-2.5">
        <a href={site.phoneHref} className="btn btn-ghost px-4 text-lg">
          Call Now
        </a>
        <Link href={BOOK_HREF} className="btn btn-primary px-4 text-lg">
          Book Service
        </Link>
      </div>
    </nav>
  );
}
