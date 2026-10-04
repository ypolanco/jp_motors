"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { CalendarDays, Menu, Phone, X } from "lucide-react";
import { BOOK_HREF, navLinks, site } from "@/lib/site";
import { LogoMark } from "./ui";
import { MobileNav } from "./MobileNav";

export function isActive(pathname: string, href: string) {
  return href === "/" ? pathname === "/" : pathname.startsWith(href);
}

export function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  // Close the drawer whenever the route changes.
  const [lastPath, setLastPath] = useState(pathname);
  if (pathname !== lastPath) {
    setLastPath(pathname);
    setOpen(false);
  }

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header className="sticky top-0 z-40 border-b border-line bg-ink/95 backdrop-blur">
      <div className="bg-sky">
        <div className="wrap label flex flex-wrap items-center justify-between gap-3 py-2 text-[#0e3f7a]">
          <span className="flex items-center gap-2">
            <span className="size-2 rounded-full bg-[#1f7a4d]" />
            Friendly, honest car care{site.city ? ` · ${site.city}, ${site.state}` : ""}
          </span>
          <span className="flex items-center gap-5">
            <span className="hidden md:inline">{site.hoursShort}</span>
            <a href={site.phoneHref} className="flex items-center gap-1.5 text-bone hover:text-accent-text">
              <Phone className="size-3.5 text-accent-text" aria-hidden />
              {site.phone}
            </a>
          </span>
        </div>
      </div>

      <div className="wrap flex h-[76px] max-w-[1360px] items-center justify-between gap-6">
        <Link href="/" aria-label={`${site.name} home`} className="flex shrink-0 items-center gap-3">
          <LogoMark />
          <span className="flex flex-col gap-[3px]">
            <span className="font-display text-[23px] font-extrabold leading-none tracking-[-0.01em]">JP Motor Works</span>
            <span className="text-[13px] font-semibold text-steel">Brakes · Oil changes · Repairs</span>
          </span>
        </Link>

        <nav aria-label="Main" className="hidden items-center gap-5 xl:flex">
          {navLinks.map((l) => {
            const active = isActive(pathname, l.href);
            return (
              <Link
                key={l.href}
                href={l.href}
                aria-current={active ? "page" : undefined}
                className={`whitespace-nowrap border-b-[3px] pb-[24px] pt-[27px] font-sans text-[15px] font-semibold transition-colors hover:text-accent-text ${
                  active ? "border-accent text-bone" : "border-transparent text-bone"
                }`}
              >
                {l.label}
              </Link>
            );
          })}
        </nav>

        <div className="flex shrink-0 items-center gap-2.5">
          <Link href={BOOK_HREF} className="btn btn-primary hidden min-h-12 px-5 text-[17px] sm:inline-flex">
            <CalendarDays className="size-[18px]" aria-hidden />
            Book a visit
          </Link>
          <button
            type="button"
            onClick={() => setOpen((o) => !o)}
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            aria-controls="mobile-nav"
            className="flex size-12 items-center justify-center rounded-full border border-line-strong bg-panel xl:hidden"
          >
            {open ? <X className="size-[22px]" aria-hidden /> : <Menu className="size-[22px]" aria-hidden />}
          </button>
        </div>
      </div>

      <MobileNav open={open} pathname={pathname} />
    </header>
  );
}
