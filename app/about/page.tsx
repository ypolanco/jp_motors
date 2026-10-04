import Link from "next/link";
import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { Photo, YouTubeIcon } from "@/components/ui";
import { aboutStory } from "@/lib/data";
import { BOOK_HREF } from "@/lib/site";
import { images } from "@/lib/images";

export const metadata: Metadata = {
  title: "About JP — Your Mechanic",
  description:
    "Meet JP, the mechanic behind JP Motor Works: brake and maintenance specialist, honest repairs, and a YouTube channel that teaches people about their cars.",
  alternates: { canonical: "/about" },
};

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About JP Motor Works"
        title={
          <>
            Meet <span className="text-accent-text">JP</span>
          </>
        }
        size="text-[clamp(58px,8.6vw,130px)]"
        lede={
          <div className="flex flex-col gap-4">
            <p className="text-steel-light">
              JP is a mechanic who believes you should understand what’s happening with your vehicle — not get handed a confusing repair bill and a shrug.
            </p>
            <p className="text-base text-steel">
              That’s the whole idea behind JP Motor Works: do the work right, explain it plainly, and let you decide what happens next.
            </p>
          </div>
        }
        actions={
          <>
            <Link href={BOOK_HREF} className="btn btn-primary">
              Book With JP
            </Link>
            <Link href="/youtube" className="btn btn-ghost">
              Watch Him Work
            </Link>
          </>
        }
        visual={
          <div className="group relative aspect-[4/5] max-h-[680px] overflow-hidden rounded-3xl border border-line">
            <div className="absolute inset-0 transition-transform duration-700 group-hover:scale-[1.04]">
              <Photo src={images.garageLift} alt="A car raised on a lift in the garage" label="JP in the garage, by the lift" priority />
            </div>
            <span className="label absolute left-4 top-4 rounded-full bg-accent px-2.5 py-1.5 font-bold text-navy">Owner · Lead Mechanic</span>
          </div>
        }
      />

      <section aria-label="JP’s story" className="wrap py-28">
        <div className="grid grid-cols-[repeat(auto-fit,minmax(min(480px,100%),1fr))] gap-x-16">
          {aboutStory.map((s, i) => (
            <article key={s.label} className="reveal flex gap-7 border-t border-line py-10">
              <span className="display w-18 shrink-0 text-[56px] text-line-strong">{String(i + 1).padStart(2, "0")}</span>
              <div className="flex flex-col gap-3">
                <span className="label text-accent-text">{s.label}</span>
                <h2 className="display text-4xl leading-none">{s.title}</h2>
                <p className="text-lg text-steel-light">{s.text}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="bg-accent text-navy">
        <figure className="wrap flex flex-col gap-7 py-26">
          <svg width="64" height="48" viewBox="0 0 64 48" aria-hidden="true">
            <path d="M0 48V28C0 12 8 2 26 0v10c-9 2-13 7-13 16h13v22z M38 48V28c0-16 8-26 26-28v10c-9 2-13 7-13 16h13v22z" fill="currentColor" />
          </svg>
          <blockquote className="display max-w-[1180px] text-[clamp(32px,4.6vw,69px)] leading-[0.95]">
            If I’m working on your car, I want you to understand what I’m fixing and why.
          </blockquote>
          <figcaption className="label text-[13px] font-bold">— JP, JP Motor Works</figcaption>
        </figure>
      </section>

      <section className="wrap py-26">
        <div className="grid grid-cols-[repeat(auto-fit,minmax(min(300px,100%),1fr))] gap-4">
          {[
            ["The shop floor", "A mechanic at work on the shop floor", images.shopFloor],
            ["Tool wall", "Tools hanging on a workshop wall", images.toolWall],
            ["Filming a brake job", "Video camera set up to film", images.videoCamera],
          ].map(([label, alt, src]) => (
            <div key={label} className="group relative aspect-[4/3] overflow-hidden rounded-3xl border border-line">
              <div className="absolute inset-0 transition-transform duration-700 group-hover:scale-[1.04]">
                <Photo src={src} alt={alt} label={label} sizes="(min-width: 1024px) 33vw, 100vw" />
              </div>
            </div>
          ))}
        </div>
        <div className="mt-16 flex flex-wrap items-center justify-between gap-7 rounded-3xl border border-line bg-panel p-8 sm:p-10">
          <div className="flex items-center gap-5">
            <span className="flex size-16 shrink-0 items-center justify-center rounded-2xl bg-accent text-navy">
              <YouTubeIcon className="size-8" />
            </span>
            <span className="flex flex-col gap-1">
              <span className="display text-[34px]">Seen Him on YouTube?</span>
              <span className="text-steel">Same guy, same bay, same straight answers.</span>
            </span>
          </div>
          <div className="flex flex-wrap gap-3">
            <Link href="/youtube" className="btn btn-ghost">
              Watch Videos
            </Link>
            <Link href={BOOK_HREF} className="btn btn-primary">
              Book Service
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
