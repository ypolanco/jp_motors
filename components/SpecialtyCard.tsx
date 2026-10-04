import Link from "next/link";
import { ArrowRight, Check } from "lucide-react";
import { icons, type IconName } from "@/lib/icons";
import { Photo } from "./ui";

export function SpecialtyCard({
  n,
  icon,
  label,
  title,
  items,
  cta,
  href,
  photo,
  photoSrc,
}: {
  n: string;
  icon: IconName;
  label: string;
  title: string;
  items: string[];
  cta: string;
  href: string;
  photo: string;
  photoSrc?: string;
}) {
  const Icon = icons[icon];
  return (
    <article className="card reveal group flex flex-col overflow-hidden">
      <div className="relative h-[260px] overflow-hidden border-b border-line">
        <div className="absolute inset-0 transition-transform duration-700 group-hover:scale-105">
          <Photo src={photoSrc} alt={photo} label={photo} />
        </div>
        <span className="display outline-num absolute right-5 top-3 text-[140px] [-webkit-text-stroke-color:rgb(255_255_255/0.7)]" aria-hidden>
          {n}
        </span>
        <span className="absolute left-5 top-5 flex size-14 items-center justify-center rounded-2xl bg-accent text-navy">
          <Icon className="size-7" aria-hidden />
        </span>
      </div>
      <div className="flex flex-1 flex-col gap-5 p-8">
        <span className="label text-steel">{label}</span>
        <h3 className="display text-[clamp(29px,2.9vw,40px)]">{title}</h3>
        <ul className="grid grid-cols-[repeat(auto-fit,minmax(min(200px,100%),1fr))] gap-x-5 gap-y-2.5">
          {items.map((it) => (
            <li key={it} className="flex items-start gap-2.5 text-steel-light">
              <Check className="mt-1 size-[18px] shrink-0 text-accent-text" aria-hidden />
              {it}
            </li>
          ))}
        </ul>
        <div className="mt-auto border-t border-line pt-5">
          <Link href={href} className="text-link">
            {cta}
            <ArrowRight className="size-[18px] transition-transform group-hover:translate-x-1" aria-hidden />
          </Link>
        </div>
      </div>
    </article>
  );
}
