"use client";

import { useState } from "react";
import { videoCategories, videos, type VideoCategory } from "@/lib/data";
import { FilterChips } from "./FilterChips";
import { VideoCard } from "./VideoCard";

type Tab = "Latest Videos" | VideoCategory;
const tabs: readonly Tab[] = ["Latest Videos", ...videoCategories];

export function VideoHub() {
  const [tab, setTab] = useState<Tab>("Latest Videos");
  const list = tab === "Latest Videos" ? videos.slice(0, 6) : videos.filter((v) => v.category === tab);

  return (
    <>
      <div className="mb-8 flex flex-wrap items-end justify-between gap-6">
        <h2 className="display text-[clamp(32px,4.3vw,58px)]">{tab}</h2>
        <span className="label text-steel" aria-live="polite">
          {list.length} videos
        </span>
      </div>
      <div className="mb-10">
        <FilterChips label="Video categories" options={tabs} value={tab} onChange={setTab} />
      </div>
      <div className="grid grid-cols-[repeat(auto-fill,minmax(min(360px,100%),1fr))] gap-x-6 gap-y-8">
        {list.map((v) => (
          <VideoCard key={v.title} video={v} />
        ))}
      </div>
    </>
  );
}
