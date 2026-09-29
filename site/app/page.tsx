import Image from "next/image";
import Link from "next/link";
import { site } from "@/lib/site-config";
import SocialIcons from "@/components/SocialIcons";
import HomeReveal from "@/components/HomeReveal";

export default function HomePage() {
  return (
    <main className="relative h-[100svh] w-full overflow-hidden bg-ink">
      <Image
        src="/home/hero.jpg"
        alt=""
        fill
        priority
        sizes="100vw"
        className="object-cover"
        style={{ objectPosition: "68% 32%" }}
      />
      {/* Grounding scrim so text stays legible without flattening the photo */}
      <div className="absolute inset-0 bg-gradient-to-t from-ink/85 via-ink/10 to-ink/30" />
      <div className="absolute inset-0 bg-gradient-to-r from-ink/45 via-transparent to-transparent" />

      <HomeReveal>
        <div className="relative flex h-full w-full flex-col justify-end px-6 pb-16 sm:px-12 sm:pb-20 lg:px-20 lg:pb-24">
          <div className="max-w-md">
            <h1 className="font-display text-[2.15rem] font-normal leading-[1.12] text-paper sm:text-[2.75rem] lg:text-[3.2rem]">
              {site.brandName}
            </h1>

            <div className="mt-9 flex flex-wrap items-center gap-4">
              <Link
                href="/wedding-packages"
                className="rounded-full border border-paper/40 px-6 py-2.5 font-sans text-[0.8rem] font-light tracking-wide text-paper transition-all duration-300 ease-editorial hover:border-brass-soft hover:text-brass-soft sm:text-[0.85rem]"
              >
                Wedding Packages
              </Link>
              <Link
                href="/portfolio"
                className="rounded-full border border-paper/40 px-6 py-2.5 font-sans text-[0.8rem] font-light tracking-wide text-paper transition-all duration-300 ease-editorial hover:border-brass-soft hover:text-brass-soft sm:text-[0.85rem]"
              >
                Portfolio
              </Link>
            </div>

            <SocialIcons className="mt-8" />
          </div>
        </div>
      </HomeReveal>
    </main>
  );
}
