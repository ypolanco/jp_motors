"use client";

import { useId, useState } from "react";
import { Minus, Plus } from "lucide-react";

export function FAQAccordion({ items, defaultOpen = 0 }: { items: { q: string; a: string }[]; defaultOpen?: number }) {
  const [open, setOpen] = useState<number>(defaultOpen);
  const uid = useId();

  return (
    <div className="border-t border-line">
      {items.map((f, i) => {
        const isOpen = open === i;
        const panelId = `${uid}-panel-${i}`;
        const btnId = `${uid}-btn-${i}`;
        return (
          <div key={f.q} className="border-b border-line">
            <h2>
              <button
                id={btnId}
                type="button"
                aria-expanded={isOpen}
                aria-controls={panelId}
                onClick={() => setOpen(isOpen ? -1 : i)}
                className="flex w-full items-center justify-between gap-5 py-6 text-left font-display text-[clamp(22px,2vw,28px)] font-extrabold leading-tight transition-colors hover:text-accent-text"
              >
                <span className="flex items-baseline gap-5">
                  <span className="label text-accent-text">{String(i + 1).padStart(2, "0")}</span>
                  <span>{f.q}</span>
                </span>
                <span
                  className={`flex size-10 shrink-0 items-center justify-center rounded-2xl border ${
                    isOpen ? "border-accent bg-accent text-navy" : "border-line-strong"
                  }`}
                >
                  {isOpen ? <Minus className="size-[18px]" aria-hidden /> : <Plus className="size-[18px]" aria-hidden />}
                </span>
              </button>
            </h2>
            <div id={panelId} role="region" aria-labelledby={btnId} hidden={!isOpen}>
              <p className="max-w-[820px] pb-7 pl-0 pr-4 text-[17px] text-steel-light sm:pl-13 sm:pr-15">{f.a}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
