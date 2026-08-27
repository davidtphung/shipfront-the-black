import type { Metadata } from "next";
import { contactPage, site } from "@/data/site-copy";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Contact",
};

export default function ContactPage() {
  return (
    <article className="mx-auto max-w-[800px] px-5 pt-28 pb-20 sm:px-8">
      <p className="font-mono text-[12px] tracking-[0.16em] text-accent uppercase">Contact</p>
      <h1 className="mt-4 text-[40px] leading-[1.08] font-semibold tracking-[-0.04em] text-paper sm:text-[56px]">
        {contactPage.title}
      </h1>
      <address className="mt-10 not-italic text-[18px] leading-relaxed text-paper">
        {site.address.name}
        <br />
        {site.address.street}
        <br />
        {site.address.cityLine}
      </address>
      <p className="mt-6 text-[16px] text-ink-2">
        {site.hours.weekdays}
        <br />
        {site.hours.weekend}
      </p>
      <p className="mt-6">
        <a className="text-[18px] text-accent" href={`mailto:${site.email}`}>
          {site.email}
        </a>
      </p>
      <div className="mt-10">
        <Button href="/get-a-quote/">Get a Quote</Button>
      </div>
    </article>
  );
}
