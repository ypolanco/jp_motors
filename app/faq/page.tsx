import Link from "next/link";
import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { FAQAccordion } from "@/components/FAQAccordion";
import { faqs } from "@/lib/data";
import { BOOK_HREF, site } from "@/lib/site";

export const metadata: Metadata = {
  title: "FAQ — Brakes, Oil Changes & Auto Repair Questions",
  description: "Answers about brake replacement, oil change intervals, check engine lights, estimates, appointments and parts at JP Motor Works.",
  alternates: { canonical: "/faq" },
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })),
};

export default function FAQPage() {
  return (
    <>
      <PageHero
        eyebrow="FAQ"
        title={
          <>
            Straight <span className="text-accent-text">Answers</span>
          </>
        }
        lede="The questions people ask most at the counter. Don’t see yours? Call or send it over with your booking."
      />
      <section className="wrap flex flex-wrap items-start gap-14 pb-28 pt-18">
        <div className="min-w-0 flex-[2_1_560px]">
          <FAQAccordion items={faqs} />
        </div>
        <aside className="flex min-w-0 flex-[1_1_320px] flex-col gap-5 rounded-3xl border border-line bg-panel p-8 lg:sticky lg:top-36">
          <span className="label text-accent-text">Still Wondering?</span>
          <h2 className="display text-[44px]">Ask JP Directly</h2>
          <p className="text-steel">Describe the issue and you’ll get a real answer — not a sales pitch.</p>
          <Link href={BOOK_HREF} className="btn btn-primary">
            Book Service
          </Link>
          <a href={site.phoneHref} className="btn btn-ghost">
            Call {site.phone}
          </a>
          <p className="label border-t border-line pt-4 text-[11px] text-steel">{site.hoursShort}</p>
        </aside>
      </section>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd).replace(/</g, "\\u003c") }} />
    </>
  );
}
