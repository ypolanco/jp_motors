import Link from "next/link";
import { PageHero } from "@/components/PageHero";
import { ServicesExplorer } from "@/components/ServicesExplorer";
import { CTASection } from "@/components/CTASection";
import { pageMetadata } from "@/lib/seo";
import { BOOK_HREF, inCity, site } from "@/lib/site";

export const metadata = pageMetadata({
  keyword: "Auto Repair Services — Brakes, Oil Change & Diagnostics",
  description: "Every service at JP Motor Works: brake repair, oil changes, maintenance, engine, electrical, suspension, diagnostics and fluid service.",
  path: "/services",
});

export default function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow={inCity("Auto Repair & Maintenance")}
        title={
          <>
            Every Service, <span className="text-accent-text">One Bay.</span>
          </>
        }
        lede="Brakes and lube are the specialty. Here’s everything else JP handles — with the symptoms that usually bring people in."
        actions={
          <Link href={BOOK_HREF} className="btn btn-primary">
            Book Service
          </Link>
        }
      />
      <section className="wrap pb-28 pt-12">
        <ServicesExplorer />
      </section>
      <CTASection
        title="Don’t See It Listed?"
        text="Describe what the car is doing. If it’s a job JP takes on, you’ll get a time. If it isn’t, he’ll tell you who to call."
        actions={
          <>
            <Link href={BOOK_HREF} className="btn btn-primary">
              Book Service
            </Link>
            <a href={site.phoneHref} className="btn btn-ghost">
              Call {site.phone}
            </a>
          </>
        }
      />
    </>
  );
}
