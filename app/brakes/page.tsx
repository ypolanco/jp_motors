import Link from "next/link";
import { ArrowRight, Check } from "lucide-react";
import { PageHero } from "@/components/PageHero";
import { SectionHeader } from "@/components/SectionHeader";
import { BrakeRotor } from "@/components/BrakeRotor";
import { CTASection } from "@/components/CTASection";
import { Photo } from "@/components/ui";
import { brakeProblems, brakeServices, brakeSteps } from "@/lib/data";
import { pageMetadata } from "@/lib/seo";
import { images } from "@/lib/images";
import { BOOK_HREF, inCity, site } from "@/lib/site";

export const metadata = pageMetadata({
  keyword: "Brake Repair & Brake Service",
  description:
    "Brake specialists for pads, rotors, calipers, fluid and lines. Grinding, squeaking, vibration or a soft pedal — JP Motor Works inspects the system and explains exactly what needs attention.",
  path: "/brakes",
});

const pad = (i: number) => String(i + 1).padStart(2, "0");

export default function BrakesPage() {
  return (
    <>
      <PageHero
        eyebrow={`Service 01 · ${inCity("Brake Repair")}`}
        title={
          <>
            Brake <span className="text-accent-text">Specialists</span>
          </>
        }
        size="text-[clamp(46px,6.8vw,101px)]"
        lede="From worn pads to vibrations, squeaks, grinding, and full brake replacements, JP Motor Works will inspect the system and explain exactly what needs attention."
        actions={
          <>
            <Link href={BOOK_HREF} className="btn btn-primary">
              Schedule a Brake Inspection
            </Link>
            <a href={site.phoneHref} className="btn btn-ghost">
              Call {site.phone}
            </a>
            <ul className="label flex w-full flex-wrap gap-x-6 gap-y-2 pt-2 text-steel">
              {["Measured, not guessed", "Old parts shown on request", "Estimate before work"].map((t) => (
                <li key={t} className="flex items-center gap-2">
                  <Check className="size-4 text-accent-text" aria-hidden />
                  {t}
                </li>
              ))}
            </ul>
          </>
        }
        visual={<BrakeRotor className="mx-auto aspect-square w-full max-w-[480px] drop-shadow-[0_30px_50px_rgb(24_35_61/0.25)]" />}
      />

      <section aria-labelledby="problems" className="wrap py-28">
        <SectionHeader
          id="problems"
          eyebrow="Symptoms"
          title="Common Brake Problems"
          aside={
            <span className="flex flex-wrap gap-4 text-bone">
              <span className="label flex items-center gap-2">
                <span className="size-3 rounded-full bg-accent" />
                Don’t wait
              </span>
              <span className="label flex items-center gap-2">
                <span className="size-3 rounded-full border-2 border-steel" />
                Get it checked soon
              </span>
            </span>
          }
        />
        <div className="grid grid-cols-[repeat(auto-fill,minmax(min(280px,100%),1fr))] gap-4">
          {brakeProblems.map((p, i) => (
            <article key={p.title} className="card reveal flex flex-col gap-3.5 p-6.5">
              <span className="flex items-center justify-between">
                <span className="display outline-num text-5xl">{pad(i)}</span>
                <span
                  className={`label rounded-full border-2 px-2.5 py-1 font-bold ${
                    p.urgent ? "border-accent bg-accent text-navy" : "border-steel text-steel-light"
                  }`}
                >
                  {p.urgent ? "Don’t wait" : "Check soon"}
                </span>
              </span>
              <h3 className="display text-[30px] leading-none">{p.title}</h3>
              <p className="text-base text-steel">{p.text}</p>
            </article>
          ))}
          <Link href={BOOK_HREF} className="flex flex-col justify-between gap-3.5 rounded-3xl bg-accent p-6.5 text-navy transition-transform hover:-translate-y-1">
            <span className="label font-bold">Hear one of these?</span>
            <span className="display text-4xl">Get It Looked At</span>
            <ArrowRight className="size-8" aria-hidden />
          </Link>
        </div>
      </section>

      <section aria-labelledby="brake-services" className="border-y border-line bg-panel-2">
        <div className="wrap flex flex-wrap gap-14 py-28">
          <div className="flex flex-[1_1_340px] flex-col gap-6">
            <SectionHeader id="brake-services" eyebrow="What We Do" title="Brake Services" />
            <p className="-mt-6 max-w-[420px] text-steel">
              Quality pads and rotors matched to how you drive, every slide and contact point cleaned and lubricated, and a road test before the keys come back.
            </p>
            <div className="relative mt-2 aspect-[4/3] overflow-hidden rounded-3xl border border-line">
              <Photo src={images.brakeCaliperCloseup} alt="Brake caliper and rotor on a wheel hub" label="Pads side by side: worn vs new" />
            </div>
          </div>
          <ol className="flex-[1.4_1_520px] border-t border-line">
            {brakeServices.map((s, i) => (
              <li key={s.title} className="flex items-baseline gap-6 border-b border-line py-6">
                <span className="label w-8 shrink-0 text-accent-text">{pad(i)}</span>
                <span className="flex flex-col gap-1.5">
                  <span className="display text-[32px] leading-none">{s.title}</span>
                  <span className="text-steel">{s.text}</span>
                </span>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section aria-labelledby="process" className="wrap py-28">
        <SectionHeader id="process" eyebrow="How a Brake Job Goes" title="No Surprises on the Bill" size="text-[clamp(29px,3.6vw,52px)]" />
        <ol className="grid grid-cols-[repeat(auto-fit,minmax(min(240px,100%),1fr))] border-t-2 border-accent">
          {brakeSteps.map((s, i) => (
            <li key={s.title} className="flex flex-col gap-2.5 pr-6 pt-7">
              <span className="display text-7xl text-line-strong">{pad(i)}</span>
              <span className="display text-[28px]">{s.title}</span>
              <span className="text-steel">{s.text}</span>
            </li>
          ))}
        </ol>
      </section>

      <CTASection
        title={
          <>
            Don’t Wait on <span className="text-accent-text">Brakes.</span>
          </>
        }
        text="An inspection takes less time than you think — and costs less than a rotor you didn’t need to ruin."
        actions={
          <Link href={BOOK_HREF} className="btn btn-primary min-h-16 text-[21px]">
            Schedule a Brake Inspection
          </Link>
        }
      />
    </>
  );
}
