import type { Review } from "@/lib/data";
import { Stars } from "./ui";

export function ReviewCard({ review, source }: { review: Review; source?: string }) {
  return (
    <figure className="card reveal m-0 flex flex-col gap-4.5 p-7.5">
      <div className="flex items-center justify-between gap-3">
        <Stars rating={review.rating} />
        <span className="label tag text-bone">{review.service}</span>
      </div>
      <blockquote className="text-lg leading-relaxed text-steel-light">“{review.text}”</blockquote>
      <figcaption className="mt-auto flex items-center justify-between gap-3 border-t border-line pt-4">
        <span className="flex items-center gap-3">
          <span className="display flex size-11 items-center justify-center rounded-full bg-line text-xl" aria-hidden>
            {review.name.charAt(0)}
          </span>
          <span className="flex flex-col">
            <span className="font-bold">{review.name}</span>
            <span className="label text-[11px] text-steel">{review.vehicle}</span>
          </span>
        </span>
        {source ? <span className="label text-[10px] text-steel">{source}</span> : null}
      </figcaption>
    </figure>
  );
}
