import Link from "next/link";
import { Check, TriangleAlert } from "lucide-react";
import { PageHero } from "@/components/PageHero";
import { SectionHeader } from "@/components/SectionHeader";
import { CTASection } from "@/components/CTASection";
import { Photo } from "@/components/ui";
import { icons } from "@/lib/icons";
import { maintenanceItems, mileageTimeline } from "@/lib/data";
import { pageMetadata } from "@/lib/seo";
import { images } from "@/lib/images";
import { BOOK_HREF, inCity } from "@/lib/site";

export const metadata = pageMetadata({
  keyword: "Oil Change & Car Maintenance",
  description: "Synthetic and conventional oil changes, fluid services, filters, battery checks, belts, hoses, tire inspection and scheduled car maintenance.",
  path: "/maintenance",
});

export default function MaintenancePage() {
  return (
    <>
      <PageHero
        eyebrow={`Service 02 · ${inCity("Oil Change & Maintenance")}`}
        title={
          <>
            Maintenance That <span className="text-accent-text">Keeps You Moving</span>
          </>
        }
        size="text-[clamp(40px,5.8vw,84px)]"
        lede="The right oil, the right filters, and a real set of eyes on everything else while the car’s on the lift. Cheap insurance against expensive repairs."
        actions={
          <>
            <Link href={BOOK_HREF} className="btn btn-primary">
              Schedule Maintenance
            </Link>
            <a href="#timeline" className="btn btn-ghost">
              Mileage Guide
            </a>
          </>
        }
        visual={
          <div className="relative h-[360px] overflow-hidden rounded-3xl border border-line sm:h-[480px]">
            <Photo src={images.oilFunnel} alt="Fresh oil being poured into an engine" label="Close-up: oil pour into a clean engine" />
            <div className="absolute inset-x-5 top-5 flex flex-wrap justify-between gap-2">
              <span className="label rounded-full bg-accent px-2.5 py-1.5 font-bold text-navy">Spec · LUBE</span>
              <span className="label rounded-full bg-ink px-2.5 py-1.5">OEM spec oil</span>
            </div>
          </div>
        }
      />

      <section aria-labelledby="included" className="wrap py-28">
        <SectionHeader
          id="included"
          eyebrow="What’s Included"
          title="Oil, Fluids & the Rest"
          aside="Every oil change includes a look-over. You’ll hear about anything worth knowing — and what can safely wait."
        />
        <div className="grid grid-cols-[repeat(auto-fill,minmax(min(280px,100%),1fr))] gap-4">
          {maintenanceItems.map((m) => {
            const Icon = icons[m.icon];
            return (
              <article key={m.title} className="card reveal flex flex-col gap-3.5 p-7">
                <span
                  className={`flex size-13 items-center justify-center rounded-2xl border border-line-strong ${
                    m.primary ? "bg-accent text-navy" : "bg-ink text-accent-text"
                  }`}
                >
                  <Icon className="size-[26px]" aria-hidden />
                </span>
                <h3 className="display text-[30px] leading-none">{m.title}</h3>
                <ul className="flex flex-col gap-2">
                  {m.items.map((x) => (
                    <li key={x} className="flex gap-2.5 text-base text-steel-light">
                      <span className="mt-[9px] size-1.5 shrink-0 bg-accent" aria-hidden />
                      {x}
                    </li>
                  ))}
                </ul>
              </article>
            );
          })}
        </div>
      </section>

      <section id="timeline" aria-labelledby="timeline-title" className="border-y border-line bg-panel-2">
        <div className="wrap py-28">
          <SectionHeader
            id="timeline-title"
            eyebrow="Mileage Guide"
            title="What’s Due, and When"
            aside="A general roadmap. Your owner’s manual is the final word — bring it in and JP will match the schedule to your exact vehicle."
          />
          <ol className="grid grid-cols-[repeat(auto-fit,minmax(min(220px,100%),1fr))] border-t-2 border-line-strong">
            {mileageTimeline.map((t, i) => {
              const last = i === mileageTimeline.length - 1;
              return (
                <li key={t.miles} className="relative pb-2 pr-6 pt-9">
                  <span
                    className={`absolute -top-[9px] left-0 size-4 border-[3px] border-panel-2 outline-2 ${
                      last ? "bg-accent outline-accent" : "bg-bone outline-bone"
                    }`}
                    aria-hidden
                  />
                  <span className={`display block text-[56px] ${last ? "text-accent-text" : ""}`}>{t.miles}</span>
                  <span className="label mb-4.5 mt-1.5 block text-steel">miles · {t.label}</span>
                  <ul className="flex flex-col gap-2.5">
                    {t.items.map((x) => (
                      <li key={x} className="flex gap-2.5 text-base text-steel-light">
                        <Check className="mt-1 size-4 shrink-0 text-accent-text" aria-hidden />
                        {x}
                      </li>
                    ))}
                  </ul>
                </li>
              );
            })}
          </ol>
          <div className="mt-12 flex max-w-[880px] items-start gap-3.5 rounded-2xl border border-line-strong bg-ink px-6 py-5">
            <TriangleAlert className="mt-0.5 size-[22px] shrink-0 text-accent-text" aria-hidden />
            <p className="text-base text-steel-light">
              Maintenance varies by manufacturer. Intervals shown are a general guide only — towing, short trips, extreme heat or cold, and dusty
              roads count as &ldquo;severe service&rdquo; and can shorten them. JP follows your vehicle&rsquo;s actual schedule.
            </p>
          </div>
        </div>
      </section>

      <CTASection
        title={
          <>
            Due for <span className="text-accent-text">Service?</span>
          </>
        }
        text="Tell us the mileage and we’ll tell you what’s actually due — nothing extra."
        actions={
          <Link href={BOOK_HREF} className="btn btn-primary min-h-16 text-[21px]">
            Schedule Maintenance
          </Link>
        }
      />
    </>
  );
}
