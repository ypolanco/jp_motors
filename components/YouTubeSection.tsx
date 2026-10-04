import Link from "next/link";
import { featuredVideo, popularVideos, shorts, videos } from "@/lib/data";
import { Eyebrow } from "./SectionHeader";
import { YouTubeIcon } from "./ui";
import { ShortCard, Thumbnail, videoHref } from "./VideoCard";

/** Home-page YouTube block: featured + latest, popular repairs, shorts. */
export function YouTubeSection() {
  const latest = videos.slice(1, 4);
  return (
    <section aria-labelledby="yt-title" className="border-y border-line bg-ink-deep">
      <div className="wrap flex flex-col gap-12 py-28">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div className="flex max-w-[760px] flex-col gap-4">
            <Eyebrow>04 / On YouTube</Eyebrow>
            <h2 id="yt-title" className="display text-[clamp(35px,4.6vw,69px)]">
              Watch JP <span className="text-accent-text">Turn Wrenches</span>
            </h2>
            <p className="max-w-[620px] text-steel">
              JP shares repairs, maintenance tips, brake jobs, diagnostics, tools, projects, and real-world mechanic advice on YouTube.
            </p>
          </div>
          <Link href="/youtube" className="btn btn-primary">
            <YouTubeIcon className="size-[22px]" />
            Watch on YouTube
          </Link>
        </div>

        <div className="flex flex-wrap gap-6">
          <a href={videoHref(featuredVideo)} target="_blank" rel="noopener noreferrer" className="group flex min-w-0 flex-[2_1_560px] flex-col gap-4">
            <div className="relative">
              <Thumbnail video={featuredVideo} play="lg" />
              <span className="label absolute left-4 top-4 rounded-full bg-accent px-2.5 py-1.5 font-bold text-navy">Featured</span>
            </div>
            <span className="label text-steel">{featuredVideo.category}</span>
            <span className="display text-[clamp(28px,2.6vw,40px)] leading-none transition-colors group-hover:text-accent-text">{featuredVideo.title}</span>
          </a>

          <div className="flex min-w-0 flex-[1_1_340px] flex-col">
            <span className="label border-b border-line pb-3 text-accent-text">Latest Videos</span>
            {latest.map((v) => (
              <a key={v.title} href={videoHref(v)} target="_blank" rel="noopener noreferrer" className="group flex items-center gap-4 border-b border-line py-3.5">
                <Thumbnail video={v} play="sm" className="w-[150px] shrink-0" />
                <span className="flex min-w-0 flex-col gap-1.5">
                  <span className="label text-[11px] text-steel">{v.category}</span>
                  <span className="font-semibold leading-snug transition-colors group-hover:text-accent-text">{v.title}</span>
                </span>
              </a>
            ))}
          </div>
        </div>

        <div className="flex flex-wrap gap-10">
          <div className="flex min-w-0 flex-[1_1_420px] flex-col">
            <span className="label border-b border-line pb-3 text-accent-text">Popular Repair Videos</span>
            {popularVideos.map((v, i) => (
              <a key={v.title} href={videoHref(v)} target="_blank" rel="noopener noreferrer" className="group flex items-center gap-5 border-b border-line py-4.5">
                <span className="display outline-num w-16 shrink-0 text-5xl">{String(i + 1).padStart(2, "0")}</span>
                <span className="flex-1 text-lg font-semibold leading-snug transition-colors group-hover:text-accent-text">{v.title}</span>
                <span className="label shrink-0 text-steel">{v.duration}</span>
              </a>
            ))}
          </div>
          <div className="flex min-w-0 flex-[1_1_420px] flex-col gap-4">
            <span className="label border-b border-line pb-3 text-accent-text">Shorts</span>
            <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
              {shorts.slice(0, 4).map((s) => (
                <ShortCard key={s} title={s} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
