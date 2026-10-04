import Link from "next/link";
import { BOOK_HREF, inCity, site } from "@/lib/site";
import { FacebookIcon, InstagramIcon, LogoMark, TikTokIcon, YouTubeIcon } from "./ui";

const navigate = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "About JP", href: "/about" },
  { label: "Reviews", href: "/reviews" },
  { label: "FAQ", href: "/faq" },
  { label: "Contact", href: "/contact" },
];
const services = [
  { label: "Brake Repair", href: "/brakes" },
  { label: "Oil Changes", href: "/maintenance" },
  { label: "Maintenance", href: "/maintenance" },
  { label: "Diagnostics", href: "/repairs" },
  { label: "Suspension & Steering", href: "/repairs" },
  { label: "All Repairs", href: "/repairs" },
];
const socials = [
  { label: "YouTube", href: site.social.youtube, Icon: YouTubeIcon },
  { label: "Instagram", href: site.social.instagram, Icon: InstagramIcon },
  { label: "Facebook", href: site.social.facebook, Icon: FacebookIcon },
  { label: "TikTok", href: site.social.tiktok, Icon: TikTokIcon },
];

function ColHead({ children }: { children: React.ReactNode }) {
  return <h2 className="font-display text-lg font-bold text-white">{children}</h2>;
}

export function Footer() {
  return (
    <footer className="on-dark">
      <div className="wrap flex flex-col gap-14 pb-8 pt-18">
        <div className="flex flex-wrap items-end justify-between gap-8 border-b border-line pb-12">
          <div className="flex max-w-[760px] flex-col gap-6">
            <Link href="/" aria-label={`${site.name} home`} className="flex items-center gap-3">
              <LogoMark size={44} />
              <span className="font-display text-[28px] font-extrabold tracking-[-0.01em]">JP Motor Works</span>
            </Link>
            <p className="display text-[clamp(32px,4.3vw,60px)]">
              Friendly, honest car care. <span className="text-accent-text">See you soon!</span>
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            <Link href={BOOK_HREF} className="btn btn-primary">
              Book a visit
            </Link>
            <a href={site.phoneHref} className="btn btn-ghost">
              {site.phone}
            </a>
          </div>
        </div>

        <div className="grid grid-cols-[repeat(auto-fit,minmax(min(200px,100%),1fr))] gap-10">
          <div className="flex flex-col gap-3.5">
            <ColHead>Navigate</ColHead>
            {navigate.map((n) => (
              <Link key={n.label} href={n.href} className="text-steel-light hover:text-bone">
                {n.label}
              </Link>
            ))}
          </div>
          <div className="flex flex-col gap-3.5">
            <ColHead>Services</ColHead>
            {services.map((n) => (
              <Link key={n.label} href={n.href} className="text-steel-light hover:text-bone">
                {n.label}
              </Link>
            ))}
          </div>
          <div className="flex flex-col gap-3.5">
            <ColHead>YouTube</ColHead>
            <p className="text-steel-light">Brake jobs, oil changes, diagnostics and real shop advice, filmed in the bay.</p>
            <Link href="/youtube" className="text-link text-bone">
              <YouTubeIcon className="size-[22px] text-[#ff5a4f]" />
              Subscribe
            </Link>
          </div>
          <div className="flex flex-col gap-3.5">
            <ColHead>Contact</ColHead>
            <a href={site.phoneHref} className="hover:text-accent-text">
              {site.phone}
            </a>
            <a href={`mailto:${site.email}`} className="break-words text-steel-light hover:text-bone">
              {site.email}
            </a>
            <address className="not-italic text-steel-light">
              {site.address.street}
              <br />
              {site.address.locality}, {site.address.region} {site.address.postalCode}
            </address>
          </div>
          <div className="flex flex-col gap-3.5">
            <ColHead>Shop Hours</ColHead>
            <dl className="flex flex-col gap-2 font-sans text-[13px] text-steel-light">
              {site.hours.map((h) => (
                <div key={h.days} className="flex justify-between gap-4">
                  <dt>{h.days}</dt>
                  <dd>{h.time}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>

        <div className="flex flex-wrap items-center justify-between gap-5 border-t border-line pt-7">
          <ul className="flex gap-2.5">
            {socials.map(({ label, href, Icon }) => (
              <li key={label}>
                <a
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`${site.name} on ${label}`}
                  className="flex size-11 items-center justify-center rounded-2xl border border-line-strong transition-colors hover:border-accent hover:text-accent-text"
                >
                  <Icon className="size-5" />
                </a>
              </li>
            ))}
          </ul>
          <p className="label text-steel">
            © {new Date().getFullYear()} {site.name} · {inCity("Auto Repair & Brake Service")}
          </p>
        </div>
      </div>
    </footer>
  );
}
