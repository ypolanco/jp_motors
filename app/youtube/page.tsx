import Link from "next/link";
import { PageHero } from "@/components/PageHero";
import { Eyebrow } from "@/components/SectionHeader";
import { VideoHub } from "@/components/VideoHub";
import { ShortCard, Thumbnail, videoHref } from "@/components/VideoCard";
import { CTASection } from "@/components/CTASection";
import { YouTubeIcon } from "@/components/ui";
import { featuredVideo, shorts } from "@/lib/data";
import { BOOK_HREF, site } from "@/lib/site";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "YouTube — Brake Jobs, Oil Changes & Mechanic Tips",
  description: "Watch JP turn wrenches: brake tutorials, maintenance tips, diagnostics, tool reviews and garage projects from a working mechanic.",
  alternates: { canonical: "/youtube" },
};

const subscribeHref = `${site.social.youtube}?sub_confirmation=1`;

export default function YouTubePage() {
  return (
    <>
      <PageHero
        eyebrow={
          <span className="flex items-center gap-2.5">
            <YouTubeIcon className="size-5" />
            JP Motor Works on YouTube
          </span>
        }
        title={
          <>
            The Garage, <span className="text-accent-text">On Camera.</span>
          </>
        }
        lede="Real jobs from the bay — explained step by step, mistakes and all. Learn what your car needs, or just watch it get fixed right."
        actions={
          <>
            <a href={subscribeHref} target="_blank" rel="noopener noreferrer" className="btn btn-primary">
              <YouTubeIcon className="size-[22px]" />
              Subscribe
            </a>
            <a href="#videos" className="btn btn-ghost">
              Browse Videos
            </a>
          </>
        }
        visual={
          <a href={videoHref(featuredVideo)} target="_blank" rel="noopener noreferrer" className="group flex flex-col gap-3.5">
            <div className="relative">
              <Thumbnail video={featuredVideo} play="lg" />
              <span className="label absolute left-4 top-4 rounded-full bg-accent px-2.5 py-1.5 font-bold text-navy">New</span>
            </div>
            <span className="display text-[32px] leading-none transition-colors group-hover:text-accent-text">{featuredVideo.title}</span>
          </a>
        }
      />

      <section id="videos" className="wrap py-24">
        <VideoHub />
      </section>

      <section aria-labelledby="shorts-title" className="border-y border-line bg-ink-deep">
        <div className="wrap py-24">
          <div className="mb-10 flex flex-wrap items-end justify-between gap-6">
            <div className="flex flex-col gap-3.5">
              <Eyebrow>Quick Hits</Eyebrow>
              <h2 id="shorts-title" className="display text-[clamp(32px,4.3vw,58px)]">
                YouTube Shorts
              </h2>
            </div>
            <a href={`${site.social.youtube}/shorts`} target="_blank" rel="noopener noreferrer" className="btn btn-ghost">
              All Shorts
            </a>
          </div>
          <div className="grid grid-cols-2 gap-3.5 sm:grid-cols-3 lg:grid-cols-6">
            {shorts.map((s) => (
              <ShortCard key={s} title={s} />
            ))}
          </div>
        </div>
      </section>

      <CTASection
        title={
          <>
            Subscribe to <span className="text-accent-text">JP Motor Works</span>
          </>
        }
        text="New videos from the bay. Watched one and want it fixed for you instead? Book a service."
        actions={
          <>
            <a href={subscribeHref} target="_blank" rel="noopener noreferrer" className="btn btn-primary min-h-16 text-[21px]">
              <YouTubeIcon className="size-6" />
              Subscribe
            </a>
            <Link href={BOOK_HREF} className="btn btn-ghost min-h-16">
              Book Service
            </Link>
          </>
        }
      />
    </>
  );
}
