import type { ReactNode } from "react";

export function Eyebrow({ children }: { children: ReactNode }) {
  return (
    <span className="label flex items-center gap-2.5 text-accent-text">
      <span className="h-0.5 w-7 bg-accent" aria-hidden />
      {children}
    </span>
  );
}

export function SectionHeader({
  eyebrow,
  title,
  aside,
  id,
  as: Tag = "h2",
  size = "text-[clamp(32px,4.3vw,63px)]",
}: {
  eyebrow: ReactNode;
  title: ReactNode;
  aside?: ReactNode;
  id?: string;
  as?: "h1" | "h2";
  size?: string;
}) {
  return (
    <div className="mb-12 flex flex-wrap items-end justify-between gap-6">
      <div className="flex max-w-[760px] flex-col gap-4">
        <Eyebrow>{eyebrow}</Eyebrow>
        <Tag id={id} className={`display ${size}`}>
          {title}
        </Tag>
      </div>
      {aside ? <div className="max-w-[440px] text-steel">{aside}</div> : null}
    </div>
  );
}
