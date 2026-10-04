"use client";

import { useState } from "react";
import { reviewFilters, reviews, type ReviewService } from "@/lib/data";
import { FilterChips } from "./FilterChips";
import { ReviewCard } from "./ReviewCard";

type Filter = "All" | ReviewService;
const options: readonly Filter[] = ["All", ...reviewFilters];

export function ReviewsExplorer() {
  const [filter, setFilter] = useState<Filter>("All");
  const list = filter === "All" ? reviews : reviews.filter((r) => r.service === filter);

  return (
    <>
      <div className="mb-9 flex flex-wrap items-center justify-between gap-4">
        <FilterChips label="Filter reviews by service" options={options} value={filter} onChange={setFilter} />
        <span className="label text-steel" aria-live="polite">
          {list.length} reviews · sample content
        </span>
      </div>
      <div className="grid grid-cols-[repeat(auto-fill,minmax(min(360px,100%),1fr))] gap-5">
        {list.map((r) => (
          <ReviewCard key={r.name} review={r} source="Google" />
        ))}
      </div>
    </>
  );
}
