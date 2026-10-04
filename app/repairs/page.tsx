import Link from "next/link";
import { PageHero } from "@/components/PageHero";
import { Eyebrow } from "@/components/SectionHeader";
import { icons } from "@/lib/icons";
import { diagnosticSteps, repairCategories } from "@/lib/data";
import { pageMetadata } from "@/lib/seo";
import { BOOK_HREF, inCity, site } from "@/lib/site";

export const metadata = pageMetadata({
  keyword: "Auto Repair & Auto Diagnostics",
  description:
    "Engine, cooling, suspension, steering, electrical, starting & charging, sensors and check engine light repair. Not sure what’s wrong? Schedule diagnostics with JP Motor Works.",
  path: "/repairs",
});

export default function RepairsPage() {
  return (
    <>
      <PageHero
        eyebrow={`Service 03 · ${inCity("Auto Repair")}`}
        title={
          <>
            Repairs, <span className="text-accent-text">Done Right.</span>
          </>
        }
        size="text-[clamp(43px,6.5vw,98px)]"
        lede="Brakes and lube are the specialty — but JP is a full mechanic. Here’s the rest of what comes through the bay, from engine leaks to electrical gremlins."
        actions={
          <>
            <Link href={BOOK_HREF} className="btn btn-primary">
              Book a Repair
            </Link>
            <a href="#diagnose" className="btn btn-ghost">
              Not Sure What’s Wrong?
            </a>
          </>
        }
      />

      <section aria-label="Repair categories" className="wrap py-26">
        <div className="grid grid-cols-[repeat(auto-fill,minmax(min(290px,100%),1fr))] gap-4">
          {repairCategories.map((c, i) => {
            const Icon = icons[c.icon];
            return (
              <article key={c.title} className="card reveal flex flex-col gap-3.5 p-6.5">
                <span className="flex items-start justify-between">
                  <span className="flex size-12 items-center justify-center rounded-2xl border border-line-strong bg-ink text-accent-text">
                    <Icon className="size-6" aria-hidden />
                  </span>
                  <span className="label text-steel-dim">{String(i + 1).padStart(2, "0")}</span>
                </span>
                <h2 className="display text-[30px] leading-none">{c.title}</h2>
                <p className="text-base text-steel">{c.text}</p>
                <p className="label mt-auto border-t border-dashed border-line-strong pt-3.5 text-[11px] leading-relaxed text-steel-light">
                  <span className="text-accent-text">Signs ·</span> {c.signs}
                </p>
              </article>
            );
          })}
        </div>
      </section>

      <section id="diagnose" aria-labelledby="diagnose-title" className="border-t border-line bg-panel-2">
        <div className="wrap flex flex-wrap items-start gap-14 py-28">
          <div className="flex flex-[1_1_400px] flex-col gap-6">
            <Eyebrow>Diagnostics</Eyebrow>
            <h2 id="diagnose-title" className="display text-[clamp(37px,5vw,75px)]">
              Not Sure What’s <span className="text-accent-text">Wrong?</span>
            </h2>
            <p className="max-w-[480px] text-[19px] text-steel-light">
              That’s the job. A code tells you where to look — not what to replace. JP tests until the cause is confirmed, then explains it before any parts get
              ordered.
            </p>
            <div className="flex flex-wrap gap-3.5">
              <Link href={BOOK_HREF} className="btn btn-primary min-h-16 text-[21px]">
                Schedule Diagnostics
              </Link>
              <a href={site.phoneHref} className="btn btn-ghost">
                Call First
              </a>
            </div>
          </div>
          <ol className="flex flex-[1_1_480px] flex-col gap-3">
            {diagnosticSteps.map((s, i) => (
              <li key={s.title} className="flex gap-6 rounded-3xl border border-line bg-ink p-7">
                <span className="display w-18 shrink-0 text-[64px] text-accent-text">{String(i + 1).padStart(2, "0")}</span>
                <span className="flex flex-col gap-2">
                  <span className="display text-[30px]">{s.title}</span>
                  <span className="text-steel">{s.text}</span>
                </span>
              </li>
            ))}
          </ol>
        </div>
      </section>
    </>
  );
}
