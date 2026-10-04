import { Camera, Star, Wrench } from "lucide-react";
import Image from "next/image";
import type { SVGProps } from "react";

/** Sunny circle with a wrench. */
export function LogoMark({ size = 44 }: { size?: number }) {
  return (
    <span className="flex shrink-0 items-center justify-center rounded-full bg-accent text-navy" style={{ width: size, height: size }} aria-hidden>
      <Wrench className="size-1/2" strokeWidth={2.2} />
    </span>
  );
}

/**
 * Image slot. Renders a labelled placeholder until `src` is provided,
 * so real photos can be dropped in later without layout changes.
 */
export function Photo({
  src,
  alt,
  label,
  className = "",
  sizes = "(min-width: 1024px) 50vw, 100vw",
  priority,
}: {
  src?: string;
  alt: string;
  label: string;
  className?: string;
  sizes?: string;
  priority?: boolean;
}) {
  if (src) {
    return <Image src={src} alt={alt} fill sizes={sizes} priority={priority} className={`object-cover ${className}`} />;
  }
  return (
    <div role="img" aria-label={alt} className={`photo-placeholder absolute inset-0 flex items-end p-4 text-steel ${className}`}>
      <span className="label flex items-center gap-2">
        <Camera className="size-4 shrink-0" aria-hidden />
        {label}
      </span>
    </div>
  );
}

export function Stars({ rating = 5, className = "size-[18px]" }: { rating?: number; className?: string }) {
  return (
    <span className="flex gap-0.5 text-star" role="img" aria-label={`${rating} out of 5 stars`}>
      {Array.from({ length: 5 }, (_, i) => (
        <Star key={i} className={className} fill={i < rating ? "currentColor" : "none"} strokeWidth={i < rating ? 0 : 1.5} aria-hidden />
      ))}
    </span>
  );
}

// Lucide 1.x dropped brand icons, so these are drawn here.
type IconProps = SVGProps<SVGSVGElement>;
const base = { viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: 2, strokeLinecap: "round", strokeLinejoin: "round", "aria-hidden": true } as const;

export function YouTubeIcon(p: IconProps) {
  return (
    <svg {...base} {...p}>
      <path d="M2.5 17a24 24 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.6 49.6 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24 24 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.6 49.6 0 0 1-16.2 0A2 2 0 0 1 2.5 17" />
      <path d="m10 15 5-3-5-3z" />
    </svg>
  );
}
export function InstagramIcon(p: IconProps) {
  return (
    <svg {...base} {...p}>
      <rect x="2" y="2" width="20" height="20" rx="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <path d="M17.5 6.5h.01" />
    </svg>
  );
}
export function FacebookIcon(p: IconProps) {
  return (
    <svg {...base} {...p}>
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    </svg>
  );
}
export function TikTokIcon(p: IconProps) {
  return (
    <svg {...base} {...p}>
      <path d="M9 12a4 4 0 1 0 4 4V2a5 5 0 0 0 5 5" />
    </svg>
  );
}

/** Play button used on video thumbnails; scales on parent `group` hover. */
export function PlayBadge({ size = "md" }: { size?: "sm" | "md" | "lg" }) {
  const dims = { sm: "size-9", md: "size-16", lg: "size-22" }[size];
  const icon = { sm: "size-3.5", md: "size-6", lg: "size-8" }[size];
  return (
    <span
      className={`absolute left-1/2 top-1/2 flex ${dims} -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border-2 border-white bg-white/90 text-navy transition duration-200 group-hover:scale-110 group-hover:border-accent group-hover:bg-accent group-hover:text-navy`}
    >
      <svg viewBox="0 0 24 24" className={`${icon} translate-x-px`} aria-hidden="true">
        <path d="M7 4l13 8-13 8z" fill="currentColor" />
      </svg>
    </span>
  );
}
