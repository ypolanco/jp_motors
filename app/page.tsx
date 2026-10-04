import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Hero } from "@/components/Hero";
import { BookingForm } from "@/components/BookingForm";
import { Photo, YouTubeIcon } from "@/components/ui";
import { icons } from "@/lib/icons";
import { reviews, symptoms, visitSteps } from "@/lib/data";
import { images } from "@/lib/images";

const reviewTints = ["bg-butter", "bg-sky", "bg-mint"];

const happyDrivers = [
  { src: images.driverSunglasses, alt: "A woman in sunglasses smiling on a drive", position: "object-[70%_50%]" },
  { src: images.happyDriver, alt: "A smiling man behind the wheel", position: "object-[65%_50%]" },
  { src: images.driverWindow, alt: "A young woman smiling out of a car window", position: "object-[55%_50%]" },
  { src: images.familyCar, alt: "A mom and her daughter in their car", position: "object-[45%_50%]" },
];

function SectionIntro({ id, title, lede }: { id: string; title: string; lede: string }) {
  return (
    <div className="flex max-w-[680px] flex-col gap-3.5">
      <h2 id={id} className="display text-[clamp(36px,4.4vw,56px)]">
        {title}
      </h2>
      <p className="text-[19px] leading-relaxed text-steel-light">{lede}</p>
    </div>
  );
}

export default function HomePage() {
  return (
    <>
      <Hero photo={images.heroHappy} />

      {/* What's going on */}
      <section aria-labelledby="help-title" className="bg-panel">
        <div className="wrap flex flex-col gap-12 py-24">
          <SectionIntro id="help-title" title="What’s going on with your car?" lede="Pick what sounds familiar. No car talk needed — we’ll figure out the rest." />
          <div className="grid grid-cols-[repeat(auto-fit,minmax(min(340px,100%),1fr))] gap-5">
            {symptoms.map((s) => {
              const Icon = icons[s.icon];
              return (
                <Link
                  key={s.title}
                  href={s.href}
                  className={`group flex flex-col gap-4 rounded-[28px] p-7 transition-[transform,box-shadow] duration-200 hover:-translate-y-1 hover:shadow-[0_18px_40px_-18px_rgb(24_35_61/0.35)] ${s.tint}`}
                >
                  <span className="flex size-14 items-center justify-center rounded-[18px] bg-panel">
                    <Icon className="size-7" aria-hidden />
                  </span>
                  <h3 className="display text-[26px] leading-[1.1]">{s.title}</h3>
                  <p className="text-[17px] leading-normal text-steel-light">{s.text}</p>
                  <span className="mt-auto flex items-center gap-1.5 font-bold">
                    {s.cta}
                    <ArrowRight className="size-[18px] transition-transform group-hover:translate-x-1" strokeWidth={2.4} aria-hidden />
                  </span>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* How it works */}
      <section aria-labelledby="how-title" className="bg-sky">
        <div className="wrap flex flex-col gap-12 py-24">
          <SectionIntro id="how-title" title="Easy from start to finish" lede="No surprises, no pressure. Here’s what a visit looks like." />
          <ol className="grid grid-cols-[repeat(auto-fit,minmax(min(320px,100%),1fr))] gap-5">
            {visitSteps.map((s, i) => (
              <li key={s.title} className="flex flex-col gap-3.5 rounded-[28px] bg-panel p-8">
                <span className="flex size-13 items-center justify-center rounded-full bg-accent font-display text-2xl font-extrabold" aria-hidden>
                  {i + 1}
                </span>
                <h3 className="display text-[26px]">{s.title}</h3>
                <p className="text-[17px] leading-relaxed text-steel-light">{s.text}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Meet JP */}
      <section aria-labelledby="jp-title">
        <div className="wrap flex flex-wrap items-center gap-14 py-24">
          <div className="relative min-w-0 flex-[1_1_380px]">
            <div className="absolute -left-6 -top-6 size-[200px] rounded-full bg-accent" aria-hidden />
            <div className="relative h-[460px] overflow-hidden rounded-[36px]">
              <Photo alt="JP, the owner and mechanic, smiling in the shop" label="Photo of JP — smiling, in the shop" />
            </div>
          </div>
          <div className="flex min-w-0 flex-[1.2_1_480px] flex-col gap-6">
            <span className="font-bold text-accent-text">Meet your mechanic</span>
            <h2 id="jp-title" className="display text-[clamp(32px,4vw,52px)] leading-[1.08]">
              &ldquo;If I&rsquo;m working on your car, I want you to understand what I&rsquo;m fixing and why.&rdquo;
            </h2>
            <p className="text-[19px] leading-relaxed text-steel-light">
              That&rsquo;s JP. He runs the shop, does the work himself, and shares how-to videos on YouTube so you can see exactly what goes on
              under the hood.
            </p>
            <div className="flex flex-wrap gap-3.5">
              <Link href="/about" className="btn btn-dark">
                More about JP
              </Link>
              <Link href="/youtube" className="btn btn-ghost">
                <YouTubeIcon className="size-5 text-[#d93025]" />
                Watch on YouTube
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Reviews */}
      <section aria-labelledby="rev-title" className="border-t border-line bg-panel">
        <div className="wrap flex flex-col gap-12 py-24">
          <div className="flex flex-wrap items-end justify-between gap-5">
            <SectionIntro id="rev-title" title="Happy drivers, happy cars" lede="What people say after a visit." />
            <Link href="/reviews" className="text-link">
              Read all reviews <ArrowRight className="size-[18px]" aria-hidden />
            </Link>
          </div>
          <div className="flex flex-wrap items-stretch gap-6">
            <div className="grid min-h-[420px] min-w-0 flex-[1_1_380px] grid-cols-2 gap-3">
              {happyDrivers.map((d) => (
                <div key={d.src} className="relative min-h-[200px] overflow-hidden rounded-[28px]">
                  <Image src={d.src} alt={d.alt} fill sizes="(min-width: 1024px) 20vw, 50vw" className={`object-cover ${d.position}`} />
                </div>
              ))}
            </div>
            <div className="flex min-w-0 flex-[1.3_1_480px] flex-col gap-4.5">
              {reviews.slice(0, 3).map((r, i) => (
                <figure key={r.name} className={`flex flex-col gap-3 rounded-[26px] px-7 py-6.5 ${reviewTints[i]}`}>
                  <blockquote className="text-lg leading-relaxed">&ldquo;{r.text}&rdquo;</blockquote>
                  <figcaption className="text-[15px] font-bold text-steel-light">
                    {r.name} · {r.service}
                  </figcaption>
                </figure>
              ))}
            </div>
          </div>
        </div>
      </section>

      <BookingForm />
    </>
  );
}
