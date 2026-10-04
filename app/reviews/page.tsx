import Link from "next/link";
import { PenLine } from "lucide-react";
import { PageHero } from "@/components/PageHero";
import { ReviewsExplorer } from "@/components/ReviewsExplorer";
import { CTASection } from "@/components/CTASection";
import { Stars } from "@/components/ui";
import { pageMetadata } from "@/lib/seo";
import { BOOK_HREF, inCity, site } from "@/lib/site";

export const metadata = pageMetadata({
  keyword: "Mechanic Reviews",
  description: "Customer reviews of JP Motor Works for brake repair, oil changes, diagnostics and auto repair.",
  path: "/reviews",
});

export default function ReviewsPage() {
  return (
    <>
      <PageHero
        eyebrow={`Reviews · ${inCity("Auto Mechanic")}`}
        title={
          <>
            What Customers <span className="text-accent-text">Say</span>
          </>
        }
        actions={
          <>
            <Link href={BOOK_HREF} className="btn btn-primary">
              Book Your Service
            </Link>
            <a href={site.googleReviewUrl} target="_blank" rel="noopener noreferrer" className="btn btn-ghost">
              <PenLine className="size-5" aria-hidden />
              Leave a Review
            </a>
          </>
        }
        visual={
          <div className="ml-auto flex max-w-[380px] flex-col gap-3.5 rounded-3xl border border-line bg-panel px-8 py-7">
            <span className="label text-steel">Google Rating</span>
            <span className="flex items-center gap-4">
              <span className="display text-[88px]">{site.googleRating}</span>
              <span className="flex flex-col gap-1.5">
                <Stars className="size-5" />
                <span className="label text-steel">{site.googleReviewCount} reviews</span>
              </span>
            </span>
            <span className="label text-[10px] text-steel-dim">Google Reviews feed · integration slot</span>
          </div>
        }
      />
      <section className="wrap pb-28 pt-14">
        <ReviewsExplorer />
      </section>
      <CTASection
        title={
          <>
            Been In the <span className="text-accent-text">Bay?</span>
          </>
        }
        text="A quick review helps more than you’d think — and helps the next person find an honest mechanic."
        actions={
          <>
            <a href={site.googleReviewUrl} target="_blank" rel="noopener noreferrer" className="btn btn-ghost min-h-16">
              Leave a Review
            </a>
            <Link href={BOOK_HREF} className="btn btn-primary min-h-16 text-[21px]">
              Book Your Service
            </Link>
          </>
        }
      />
    </>
  );
}
