import Link from "next/link";
import { ArrowRight, Check } from "lucide-react";
import { BOOK_HREF, site } from "@/lib/site";
import { Photo, Stars } from "./ui";

/** Home hero. `photo` is the large, friendly shop image. */
export function Hero({ photo }: { photo?: string }) {
  return (
    <section aria-labelledby="hero-title" className="overflow-hidden border-b border-line">
      <div className="wrap flex flex-wrap items-center gap-14 pb-24 pt-16 md:pt-20">
        <div className="flex min-w-0 flex-[1_1_480px] flex-col gap-7">
          <span className="inline-flex items-center gap-2.5 self-start rounded-full bg-sky px-4 py-2 text-[15px] font-bold text-[#0e3f7a]">
            <span className="size-2 rounded-full bg-[#1f7a4d]" aria-hidden />
            {site.hoursShort}
          </span>
          <h1 id="hero-title" className="display text-[clamp(46px,6.2vw,84px)] leading-[0.98]">
            Car care that leaves you{" "}
            <span className="rounded-[18px] bg-accent px-3.5 [box-decoration-break:clone]">smiling.</span>
          </h1>
          <p className="max-w-[520px] text-[clamp(18px,1.6vw,20px)] leading-relaxed text-steel-light">
            Brakes, oil changes and everyday repairs from JP — a friendly mechanic who explains everything in plain English and never pushes
            work you don&rsquo;t need.
          </p>
          <div className="flex flex-wrap gap-3.5">
            <Link href={BOOK_HREF} className="btn btn-primary">
              Book a visit
              <ArrowRight className="size-5" strokeWidth={2.4} aria-hidden />
            </Link>
            <a href={site.phoneHref} className="btn btn-ghost">
              Call {site.phone}
            </a>
          </div>
          <div className="flex flex-wrap items-center gap-x-6 gap-y-3 text-steel-light">
            <span className="flex items-center gap-2">
              <Stars className="size-[18px]" />
              <strong className="text-bone">{site.googleRating}</strong> on Google · {site.googleReviewCount} reviews
            </span>
            <span>Serving {site.serviceArea}</span>
          </div>
        </div>

        <div className="relative min-w-0 flex-[1_1_440px] pl-6 pt-6">
          <div className="absolute -right-16 -top-10 size-[380px] rounded-full bg-accent" aria-hidden />
          <div className="absolute -bottom-7 left-0 size-[150px] rounded-full bg-sky" aria-hidden />
          <div className="relative h-[clamp(340px,40vw,520px)] overflow-hidden rounded-[36px] shadow-[0_30px_60px_-30px_rgb(24_35_61/0.45)]">
            <Photo
              src={photo}
              alt="A smiling mechanic with the hood up on a bright yellow car"
              label="Friendly shop photo"
              className="object-[60%_40%]"
              priority
            />
          </div>
          <div className="relative -ml-2 -mt-14 flex w-max max-w-[88%] items-center gap-3.5 rounded-[22px] bg-panel px-5 py-4 shadow-[0_16px_40px_-16px_rgb(24_35_61/0.35)]">
            <span className="flex size-11 shrink-0 items-center justify-center rounded-full bg-mint text-[#1f7a4d]">
              <Check className="size-[22px]" strokeWidth={2.6} aria-hidden />
            </span>
            <span className="flex flex-col gap-0.5">
              <strong>You see the price first</strong>
              <span className="text-sm text-steel">No work starts until you say yes.</span>
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
