"use client";

import Link from "next/link";
import { useState } from "react";
import { ArrowRight } from "lucide-react";
import { catalog, categoryIcon, serviceCategories, type ServiceCategory } from "@/lib/data";
import { icons } from "@/lib/icons";
import { BOOK_HREF } from "@/lib/site";
import { FilterChips } from "./FilterChips";

type Filter = "All" | ServiceCategory;
const options: readonly Filter[] = ["All", ...serviceCategories];

export function ServicesExplorer() {
  const [filter, setFilter] = useState<Filter>("All");
  const list = filter === "All" ? catalog : catalog.filter((s) => s.category === filter);

  return (
    <>
      <FilterChips label="Filter services by category" options={options} value={filter} onChange={setFilter} />
      <p className="label mb-8 mt-4 text-steel" aria-live="polite">
        Showing {list.length} services
      </p>
      <div className="grid grid-cols-[repeat(auto-fill,minmax(min(380px,100%),1fr))] gap-5">
        {list.map((s) => {
          const Icon = icons[categoryIcon[s.category]];
          return (
            <article key={s.title} className="card group flex flex-col gap-4 p-7">
              <div className="flex items-center justify-between">
                <span className="label tag text-accent-text">{s.category}</span>
                <span className="flex size-11 items-center justify-center rounded-2xl border border-line-strong text-accent-text">
                  <Icon className="size-[22px]" aria-hidden />
                </span>
              </div>
              <h2 className="display text-[32px] leading-none">{s.title}</h2>
              <p className="text-steel">{s.desc}</p>
              <div className="flex flex-col gap-2.5 border-t border-dashed border-line-strong pt-4">
                <span className="label text-[11px] text-steel">Typical symptoms</span>
                <ul className="flex flex-wrap gap-1.5">
                  {s.symptoms.map((y) => (
                    <li key={y} className="rounded-full border border-line bg-ink px-2.5 py-1 text-sm text-steel-light">
                      {y}
                    </li>
                  ))}
                </ul>
              </div>
              <Link href={BOOK_HREF} className="text-link mt-auto pt-2">
                Book this service
                <ArrowRight className="size-[18px] transition-transform group-hover:translate-x-1" aria-hidden />
              </Link>
            </article>
          );
        })}
      </div>
    </>
  );
}
