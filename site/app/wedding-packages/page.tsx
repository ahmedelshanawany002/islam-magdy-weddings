import type { Metadata } from "next";
import Image from "next/image";
import { site } from "@/lib/site-config";
import { packageImages } from "@/lib/packages";
import ScrollReveal from "@/components/ScrollReveal";
import ContactBand from "@/components/ContactBand";

export const metadata: Metadata = {
  title: `Wedding Packages — ${site.brandName}`,
  description: "Wedding photography packages, pricing and coverage details.",
};

export default function WeddingPackagesPage() {
  return (
    <main className="bg-ink">
      <section className="relative h-[78svh] w-full overflow-hidden sm:h-[86svh]">
        <Image
          src="/packages/hero.jpg"
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover"
          style={{ objectPosition: "50% 22%" }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/10 to-ink/25" />
        <div className="relative flex h-full flex-col items-start justify-end px-6 pb-14 sm:px-12 sm:pb-16 lg:px-20">
          <p className="font-sans text-[0.72rem] font-light tracking-wide2 text-brass-soft">
            Coverage &amp; pricing
          </p>
          <h1 className="mt-3 font-display text-[2rem] font-normal text-paper sm:text-[2.6rem]">
            Wedding Packages
          </h1>
        </div>
      </section>

      <section className="mx-auto max-w-2xl px-5 py-16 sm:px-8 sm:py-24">
        <div className="flex flex-col gap-16 sm:gap-20">
          {packageImages.map((pkg, i) => (
            <ScrollReveal key={pkg.src} delay={i === 0 ? 0 : 0.05}>
              <Image
                src={pkg.src}
                alt={pkg.alt}
                width={pkg.width}
                height={pkg.height}
                sizes="(max-width: 640px) 100vw, 640px"
                className="h-auto w-full rounded-sm"
              />
            </ScrollReveal>
          ))}
        </div>
      </section>

      <ContactBand
        heading="Have a date in mind?"
        body="Reach out on WhatsApp or Instagram to check availability and talk through your day."
      />
    </main>
  );
}
