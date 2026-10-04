import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import type { Video } from "@/lib/data";
import { site } from "@/lib/site";
import { PlayBadge } from "./ui";

export function videoHref(v: Video) {
  return v.youtubeId ? `https://www.youtube.com/watch?v=${v.youtubeId}` : site.social.youtube;
}

export function videoThumb(v: Video) {
  return v.thumbnail ?? (v.youtubeId ? `https://i.ytimg.com/vi/${v.youtubeId}/hqdefault.jpg` : undefined);
}

export function Thumbnail({ video, play = "md", className = "" }: { video: Video; play?: "sm" | "md" | "lg"; className?: string }) {
  const thumb = videoThumb(video);
  return (
    <div className={`relative aspect-video overflow-hidden rounded-3xl border border-line ${className}`}>
      <div className="absolute inset-0 transition-transform duration-700 group-hover:scale-105">
        {thumb ? (
          <Image src={thumb} alt="" fill sizes="(min-width: 1024px) 33vw, 100vw" className="object-cover" />
        ) : (
          <div className="photo-placeholder absolute inset-0" />
        )}
      </div>
      <PlayBadge size={play} />
      <span className="label absolute bottom-3 right-3 rounded-full bg-ink px-2 py-1">{video.duration}</span>
    </div>
  );
}

export function VideoCard({ video }: { video: Video }) {
  return (
    <a href={videoHref(video)} target="_blank" rel="noopener noreferrer" className="group flex flex-col gap-3.5">
      <Thumbnail video={video} />
      <span className="label text-[11px] text-accent-text">{video.category}</span>
      <span className="text-xl font-bold leading-tight transition-colors group-hover:text-accent-text">{video.title}</span>
      <span className="label flex items-center gap-1.5 text-[11px] text-steel">
        Watch on YouTube
        <ArrowUpRight className="size-3.5" aria-hidden />
      </span>
    </a>
  );
}

export function ShortCard({ title, href = site.social.youtube }: { title: string; href?: string }) {
  return (
    <a href={href} target="_blank" rel="noopener noreferrer" className="group relative block aspect-[9/16] overflow-hidden rounded-3xl border border-line">
      <span className="photo-placeholder absolute inset-0 transition-transform duration-700 group-hover:scale-105" />
      <span className="absolute right-3 top-3 flex size-8 items-center justify-center rounded-full bg-ink/85 transition group-hover:bg-accent group-hover:text-navy">
        <svg viewBox="0 0 24 24" className="size-3" aria-hidden="true">
          <path d="M7 4l13 8-13 8z" fill="currentColor" />
        </svg>
      </span>
      <span className="absolute inset-x-3 bottom-3 text-[15px] font-bold leading-tight">{title}</span>
    </a>
  );
}
