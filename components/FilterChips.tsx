"use client";

export function FilterChips<T extends string>({
  options,
  value,
  onChange,
  label,
}: {
  options: readonly T[];
  value: T;
  onChange: (v: T) => void;
  label: string;
}) {
  return (
    <div role="group" aria-label={label} className="flex flex-wrap gap-2">
      {options.map((o) => {
        const on = o === value;
        return (
          <button
            key={o}
            type="button"
            aria-pressed={on}
            onClick={() => onChange(o)}
            className={`min-h-11 rounded-full border-2 px-4.5 font-sans text-[16px] font-bold transition-colors ${
              on ? "border-accent bg-accent text-navy" : "border-line-strong text-bone hover:border-bone"
            }`}
          >
            {o}
          </button>
        );
      })}
    </div>
  );
}
