import type { ReactNode } from "react";

export function CTASection({ title, text, actions }: { title: ReactNode; text?: ReactNode; actions: ReactNode }) {
  return (
    <section className="border-t border-line">
      <div className="">
        <div className="wrap flex flex-wrap items-center justify-between gap-8 py-24">
          <div className="flex max-w-[760px] flex-col gap-3.5">
            <h2 className="display text-[clamp(35px,4.6vw,69px)]">{title}</h2>
            {text ? <p className="text-lg text-steel-light">{text}</p> : null}
          </div>
          <div className="flex flex-wrap gap-3">{actions}</div>
        </div>
      </div>
    </section>
  );
}
