import type { Metadata } from "next";
import { site } from "@/lib/site-config";
import PortfolioGrid from "@/components/PortfolioGrid";

export const metadata: Metadata = {
  title: `Portfolio — ${site.brandName}`,
  description: "Wedding photography portfolio by Islam Magdi.",
};

export default function PortfolioPage() {
  return (
    <main className="bg-ink pb-16 pt-24 sm:pb-24 sm:pt-32">
      <div className="px-2 sm:px-4">
        <PortfolioGrid />
      </div>
    </main>
  );
}
