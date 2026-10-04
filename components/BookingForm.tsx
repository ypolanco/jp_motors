"use client";

import { useActionState } from "react";
import { ArrowRight, Check, Info } from "lucide-react";
import { requestAppointment, type FormState } from "@/app/actions";
import { bookingServices, bookingTimes } from "@/lib/data";
import { site } from "@/lib/site";

const initial: FormState = { status: "idle" };

const labelCls = "flex flex-col gap-2 font-sans text-[15px] font-semibold text-bone";
const inputCls =
  "min-h-[50px] w-full rounded-2xl border border-line-strong bg-ink px-3.5 py-3 font-sans text-base normal-case tracking-normal text-bone [color-scheme:light] placeholder:text-steel-dim aria-[invalid=true]:border-accent";

function Field({
  label,
  name,
  error,
  className = "",
  children,
}: {
  label: string;
  name: string;
  error?: string;
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <label className={`${labelCls} ${className}`} htmlFor={name}>
      {label}
      {children}
      {error ? (
        <span id={`${name}-error`} className="font-sans text-sm normal-case tracking-normal text-accent-text">
          {error}
        </span>
      ) : null}
    </label>
  );
}

/** Book Service section with the appointment request form. */
export function BookingForm() {
  const [state, action, pending] = useActionState(requestAppointment, initial);
  const err = state.errors ?? {};
  const invalid = (k: string) => (err[k] ? { "aria-invalid": true, "aria-describedby": `${k}-error` } : {});

  return (
    <section id="book" aria-labelledby="book-title" className="border-y border-line bg-butter">
      <div className="wrap flex flex-wrap items-start gap-14 py-24">
        <div className="flex flex-[1_1_360px] flex-col gap-6">
          <span className="font-bold text-accent-text">Book a visit</span>
          <h2 id="book-title" className="display text-[clamp(35px,4.3vw,63px)]">
            Ready when you are.
          </h2>
          <p className="max-w-[460px] text-lg text-steel-light">
            Tell JP what your car is doing, in your own words. You&rsquo;ll get a call or text back to confirm a time — and a straight answer on what it probably needs.
          </p>
          <div className="flex max-w-[460px] items-start gap-3.5 rounded-2xl border border-line-strong bg-ink px-5 py-4.5">
            <Info className="mt-0.5 size-[22px] shrink-0 text-accent-text" aria-hidden />
            <p className="text-[15px] text-steel-light">
              Submitting the form requests an appointment. JP Motor Works will confirm availability before the appointment is finalized.
            </p>
          </div>
          <div className="flex flex-col gap-2.5 font-sans text-[13px] text-steel">
            <span>
              Rather talk?{" "}
              <a href={site.phoneHref} className="text-accent-text hover:underline">
                {site.phone}
              </a>
            </span>
            <span>{site.hoursShort}</span>
          </div>
        </div>

        <div className="min-w-0 flex-[1.4_1_520px] rounded-3xl border border-line bg-panel">
          <div className="border-b border-line px-7 py-4 font-display text-xl font-bold">Request a time</div>

          {state.status === "success" ? (
            <div role="status" className="flex flex-col items-start gap-4.5 px-7 py-14">
              <span className="flex size-14 items-center justify-center rounded-2xl bg-accent text-navy">
                <Check className="size-7" strokeWidth={2.6} aria-hidden />
              </span>
              <h3 className="display text-[40px]">Thanks — got it!</h3>
              <p className="max-w-[460px] text-[17px] text-steel-light">
                Thanks — this is a request, not a confirmed booking yet. JP Motor Works will reach out to confirm availability.
              </p>
            </div>
          ) : (
            <form action={action} noValidate className="grid grid-cols-6 gap-4.5 p-7">
              {state.status === "error" && state.message ? (
                <p role="alert" className="col-span-6 rounded-2xl border border-accent px-4 py-3 text-accent-text">
                  {state.message}
                </p>
              ) : null}
              <Field label="Name" name="name" error={err.name} className="col-span-6">
                <input id="name" name="name" autoComplete="name" required placeholder="First and last name" className={inputCls} {...invalid("name")} />
              </Field>
              <Field label="Phone" name="phone" error={err.phone} className="col-span-6 sm:col-span-3">
                <input id="phone" name="phone" type="tel" autoComplete="tel" required placeholder="(555) 555-0123" className={inputCls} {...invalid("phone")} />
              </Field>
              <Field label="Email" name="email" error={err.email} className="col-span-6 sm:col-span-3">
                <input id="email" name="email" type="email" autoComplete="email" placeholder="you@email.com" className={inputCls} {...invalid("email")} />
              </Field>
              <Field label="Vehicle Year" name="year" error={err.year} className="col-span-6 sm:col-span-2">
                <input id="year" name="year" inputMode="numeric" maxLength={4} placeholder="2016" className={inputCls} {...invalid("year")} />
              </Field>
              <Field label="Make" name="make" className="col-span-6 sm:col-span-2">
                <input id="make" name="make" placeholder="Toyota" className={inputCls} />
              </Field>
              <Field label="Model" name="model" className="col-span-6 sm:col-span-2">
                <input id="model" name="model" placeholder="Camry" className={inputCls} />
              </Field>
              <Field label="Service Needed" name="service" error={err.service} className="col-span-6">
                <select id="service" name="service" required defaultValue="" className={inputCls} {...invalid("service")}>
                  <option value="" disabled>
                    Choose a service…
                  </option>
                  {bookingServices.map((s) => (
                    <option key={s}>{s}</option>
                  ))}
                </select>
              </Field>
              <Field label="Describe the Problem" name="problem" className="col-span-6">
                <textarea
                  id="problem"
                  name="problem"
                  rows={4}
                  placeholder="What are you hearing, feeling or seeing? When does it happen?"
                  className={`${inputCls} resize-y`}
                />
              </Field>
              <Field label="Preferred Date" name="date" className="col-span-6 sm:col-span-3">
                <input id="date" name="date" type="date" className={inputCls} />
              </Field>
              <Field label="Preferred Time" name="time" className="col-span-6 sm:col-span-3">
                <select id="time" name="time" className={inputCls} defaultValue={bookingTimes[bookingTimes.length - 1]}>
                  {bookingTimes.map((t) => (
                    <option key={t}>{t}</option>
                  ))}
                </select>
              </Field>
              <button type="submit" disabled={pending} className="btn btn-primary col-span-6 min-h-[60px] text-[21px] disabled:opacity-60">
                {pending ? "Sending…" : "Request a time"}
                <ArrowRight className="size-5" strokeWidth={2.6} aria-hidden />
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
