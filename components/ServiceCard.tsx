import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { icons, type IconName } from "@/lib/icons";

export function ServiceCard({
  title,
  desc,
  icon,
  href,
  index,
}: {
  title: string;
  desc: string;
  icon: IconName;
  href: string;
  index?: number;
}) {
  const Icon = icons[icon];
  return (
    <Link href={href} className="card reveal group flex min-h-[220px] flex-col gap-3.5 p-6.5">
      <span className="flex items-start justify-between">
        <span className="flex size-12 items-center justify-center rounded-2xl border border-line-strong bg-ink text-accent-text">
          <Icon className="size-6" aria-hidden />
        </span>
        {index !== undefined && <span className="label text-steel-dim">{String(index + 1).padStart(2, "0")}</span>}
      </span>
      <h3 className="display text-[28px] leading-none">{title}</h3>
      <p className="text-[15px] text-steel">{desc}</p>
      <span className="text-link mt-auto text-[15px]">
        Learn more
        <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" aria-hidden />
      </span>
    </Link>
  );
}
