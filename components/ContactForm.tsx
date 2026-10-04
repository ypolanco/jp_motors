"use client";

import { useActionState } from "react";
import { sendMessage, type FormState } from "@/app/actions";

const initial: FormState = { status: "idle" };
const labelCls = "flex flex-col gap-2 font-sans text-[15px] font-semibold text-bone";
const inputCls =
  "min-h-[50px] w-full rounded-2xl border border-line-strong bg-ink px-3.5 py-3 font-sans text-base normal-case tracking-normal text-bone aria-[invalid=true]:border-accent";

export function ContactForm() {
  const [state, action, pending] = useActionState(sendMessage, initial);
  const err = state.errors ?? {};

  if (state.status === "success") {
    return (
      <p role="status" className="rounded-2xl border border-accent p-5 text-steel-light">
        Got it — JP will get back to you. For anything urgent, call the shop.
      </p>
    );
  }

  return (
    <form action={action} noValidate className="flex flex-col gap-4">
      {(["name", "contact"] as const).map((k) => (
        <label key={k} className={labelCls}>
          {k === "name" ? "Name" : "Phone or Email"}
          <input name={k} required autoComplete={k === "name" ? "name" : undefined} aria-invalid={!!err[k]} className={inputCls} />
          {err[k] ? <span className="font-sans text-sm normal-case tracking-normal text-accent-text">{err[k]}</span> : null}
        </label>
      ))}
      <label className={labelCls}>
        Message
        <textarea name="message" rows={4} placeholder="Question about a repair, pricing, parts…" aria-invalid={!!err.message} className={`${inputCls} resize-y`} />
        {err.message ? <span className="font-sans text-sm normal-case tracking-normal text-accent-text">{err.message}</span> : null}
      </label>
      <button type="submit" disabled={pending} className="btn btn-ghost w-full disabled:opacity-60">
        {pending ? "Sending…" : "Send Message"}
      </button>
    </form>
  );
}
