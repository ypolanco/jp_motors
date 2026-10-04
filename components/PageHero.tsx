import type { ReactNode } from "react";

/** Inner-page hero: eyebrow, big title, lede, actions, optional visual on the right. */
export function PageHero({
  eyebrow,
  title,
  lede,
  actions,
  visual,
  size = "text-[clamp(40px,6vw,92px)]",
}: {
  eyebrow: ReactNode;
  title: ReactNode;
  lede?: ReactNode;
  actions?: ReactNode;
  visual?: ReactNode;
  size?: string;
}) {
  return (
    <section className="overflow-hidden border-b border-line">
      <div className="wrap flex flex-wrap items-center gap-12 pb-18 pt-16 md:pt-20">
        <div className="flex min-w-0 flex-[1.3_1_540px] flex-col gap-6">
          <span className="label text-accent-text">{eyebrow}</span>
          <h1 className={`display ${size}`}>{title}</h1>
          {lede ? <div className="max-w-[640px] text-[clamp(18px,1.6vw,21px)] text-steel-light">{lede}</div> : null}
          {actions ? <div className="flex flex-wrap gap-3.5">{actions}</div> : null}
        </div>
        {visual ? <div className="min-w-0 flex-[1_1_380px]">{visual}</div> : null}
      </div>
    </section>
  );
}
