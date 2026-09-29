import { getWhatsAppUrl, site } from "@/lib/site-config";

export default function ContactBand({
  heading,
  body,
}: {
  heading: string;
  body: string;
}) {
  return (
    <section className="border-t border-paper/10 bg-ink-soft px-6 py-20 sm:px-12 sm:py-24">
      <div className="mx-auto max-w-prose text-center">
        <h2 className="font-display text-[1.6rem] font-normal text-paper sm:text-[2rem]">
          {heading}
        </h2>
        <p className="mt-4 font-sans text-[0.92rem] font-light leading-relaxed text-stone">
          {body}
        </p>
        <div className="mt-9 flex flex-wrap items-center justify-center gap-4">
          <a
            href={getWhatsAppUrl()}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full border border-paper/30 px-6 py-2.5 font-sans text-[0.82rem] font-light tracking-wide text-paper transition-all duration-300 ease-editorial hover:border-brass-soft hover:text-brass-soft"
          >
            Message on WhatsApp
          </a>
          <a
            href={site.instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full border border-paper/30 px-6 py-2.5 font-sans text-[0.82rem] font-light tracking-wide text-paper transition-all duration-300 ease-editorial hover:border-brass-soft hover:text-brass-soft"
          >
            View Instagram
          </a>
        </div>
      </div>
    </section>
  );
}
