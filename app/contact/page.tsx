import { CalendarDays, Clock, Mail, MapPin, Navigation, Phone } from "lucide-react";
import { PageHero } from "@/components/PageHero";
import { BookingForm } from "@/components/BookingForm";
import { ContactForm } from "@/components/ContactForm";
import { pageMetadata } from "@/lib/seo";
import { inCity, site } from "@/lib/site";

export const metadata = pageMetadata({
  keyword: "Book Auto Service — Contact Your Mechanic",
  description: "Book brake repair, an oil change or auto repair with JP Motor Works. Phone, email, hours, service area and directions.",
  path: "/contact",
});

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow={`Contact · ${inCity("Auto Mechanic")}`}
        title={
          <>
            Book <span className="text-accent-text">Service</span>
          </>
        }
        size="text-[clamp(55px,8.6vw,132px)]"
        lede="Request a time online, call the shop, or stop by. Brakes, oil, diagnostics and repairs."
        actions={
          <>
            <a href="#book" className="btn btn-primary min-h-[68px] px-9 text-[22px]">
              <CalendarDays className="size-[22px]" aria-hidden />
              Book Service
            </a>
            <a href={site.phoneHref} className="btn btn-ghost min-h-[68px] text-[22px]">
              {site.phone}
            </a>
          </>
        }
      />

      <section className="wrap py-20">
        <div className="grid grid-cols-[repeat(auto-fit,minmax(min(260px,100%),1fr))] gap-4">
          <a href={site.phoneHref} className="card flex flex-col gap-3 p-7">
            <Phone className="size-7 text-accent-text" aria-hidden />
            <span className="label text-steel">Phone · tap to call</span>
            <span className="display text-[34px]">{site.phone}</span>
          </a>
          <a href={`mailto:${site.email}`} className="card flex flex-col gap-3 p-7">
            <Mail className="size-7 text-accent-text" aria-hidden />
            <span className="label text-steel">Email</span>
            <span className="break-words text-xl font-bold">{site.email}</span>
          </a>
          <div className="card flex flex-col gap-3 p-7">
            <Clock className="size-7 text-accent-text" aria-hidden />
            <span className="label text-steel">Business Hours</span>
            <dl className="flex flex-col gap-1.5 font-sans text-[13px] text-steel-light">
              {site.hours.map((h) => (
                <div key={h.days} className="flex justify-between">
                  <dt>{h.days}</dt>
                  <dd>{h.time}</dd>
                </div>
              ))}
            </dl>
          </div>
          <div className="card flex flex-col gap-3 p-7">
            <MapPin className="size-7 text-accent-text" aria-hidden />
            <span className="label text-steel">Service Area</span>
            <span className="text-xl font-bold">{site.serviceArea}</span>
            <span className="text-[15px] text-steel">{site.serviceAreaDetail}</span>
          </div>
        </div>

        <div className="mt-6 flex flex-wrap gap-6">
          <div className="relative min-h-[440px] min-w-0 flex-[1.4_1_520px] overflow-hidden rounded-3xl border border-line bg-sky">
            {site.mapEmbedUrl ? (
              <iframe
                src={site.mapEmbedUrl}
                title={`Map to ${site.name}`}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="absolute inset-0 size-full border-0"
              />
            ) : (
              <div className="absolute inset-0" aria-hidden>
                <span className="absolute inset-x-0 top-[46%] h-3.5 bg-panel" />
                <span className="absolute inset-y-0 left-[38%] w-3.5 bg-panel" />
                <span className="absolute left-[38%] top-[46%] flex -translate-x-1/2 -translate-y-full flex-col items-center">
                  <span className="label whitespace-nowrap rounded-full bg-accent px-2.5 py-1.5 font-bold text-navy">{site.name}</span>
                  <span className="h-5.5 w-0.5 bg-accent" />
                  <span className="-mt-0.5 size-3.5 rounded-full border-[3px] border-ink bg-accent" />
                </span>
                <span className="label absolute right-4 top-4 text-[10px] text-steel-dim">Google Maps embed</span>
              </div>
            )}
            <div className="absolute inset-x-5 bottom-5 flex flex-wrap items-end justify-between gap-3">
              <address className="flex flex-col gap-1 rounded-2xl border border-line bg-ink px-4 py-3.5 not-italic">
                <span className="font-bold">{site.address.street}</span>
                <span className="text-[15px] text-steel">
                  {site.address.locality}, {site.address.region} {site.address.postalCode}
                </span>
              </address>
              <a href={site.directionsUrl} target="_blank" rel="noopener noreferrer" className="btn btn-primary min-h-12 text-[17px]">
                <Navigation className="size-[18px]" aria-hidden />
                Get Directions
              </a>
            </div>
          </div>
          <div className="flex min-w-0 flex-[1_1_380px] flex-col gap-5 rounded-3xl border border-line bg-panel p-8">
            <div className="flex flex-col gap-2">
              <span className="label text-accent-text">General Question</span>
              <h2 className="display text-[40px]">Send a Message</h2>
            </div>
            <ContactForm />
          </div>
        </div>
      </section>

      <BookingForm />
    </>
  );
}
