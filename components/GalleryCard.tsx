import Image from "next/image";
import { ChevronsLeftRight } from "lucide-react";
import type { GalleryItem } from "@/lib/data";
import { Photo } from "./ui";

export function GalleryCard({ item }: { item: GalleryItem }) {
  return (
    <article className="card reveal group flex flex-col overflow-hidden">
      <div className="relative aspect-[4/3] overflow-hidden border-b border-line">
        {item.kind === "beforeAfter" ? (
          <>
            <div className="absolute inset-0 grid grid-cols-2 transition-transform duration-700 group-hover:scale-105">
              {(["before", "after"] as const).map((side) => {
                const src = side === "before" ? item.beforeSrc : item.afterSrc;
                return (
                  <div key={side} className={`relative ${side === "before" ? "bg-sand" : ""}`}>
                    {src ? (
                      <Image src={src} alt={`${item.vehicle} ${side}`} fill sizes="25vw" className="object-cover" />
                    ) : (
                      <div className="photo-placeholder absolute inset-0 flex items-end p-4 text-steel">
                        <span className="label">{side}</span>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
            <span className="absolute inset-y-0 left-1/2 w-0.5 -translate-x-1/2 bg-accent" aria-hidden />
            <span className="absolute left-1/2 top-1/2 flex size-9 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-accent text-navy" aria-hidden>
              <ChevronsLeftRight className="size-[18px]" />
            </span>
          </>
        ) : item.kind === "clip" && item.src ? (
          <video src={item.src} muted loop playsInline autoPlay className="absolute inset-0 size-full object-cover" aria-label={item.desc} />
        ) : (
          <div className="absolute inset-0 transition-transform duration-700 group-hover:scale-105">
            <Photo src={item.src} alt={`${item.service} on a ${item.vehicle}`} label={item.photo} sizes="(min-width: 1024px) 33vw, 100vw" />
          </div>
        )}
        {item.kind === "clip" && (
          <span className="label absolute bottom-3.5 right-3.5 flex items-center gap-1.5 rounded-full bg-ink px-2.5 py-1.5">
            <svg viewBox="0 0 24 24" className="size-2.5" aria-hidden="true">
              <path d="M7 4l13 8-13 8z" fill="currentColor" />
            </svg>
            Clip
          </span>
        )}
        <span className="label tag absolute left-3.5 top-3.5 text-bone">{item.service}</span>
      </div>
      <div className="flex flex-col gap-2 px-6 pb-6.5 pt-5.5">
        <h3 className="display text-[26px] leading-none">{item.vehicle}</h3>
        <p className="text-[15px] text-steel">{item.desc}</p>
      </div>
    </article>
  );
}
