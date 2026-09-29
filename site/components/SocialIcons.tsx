import { getWhatsAppUrl, site } from "@/lib/site-config";

function InstagramGlyph() {
  return (
    <svg viewBox="0 0 24 24" fill="none" className="h-[18px] w-[18px]">
      <rect x="3" y="3" width="18" height="18" rx="5" stroke="currentColor" strokeWidth="1.3" />
      <circle cx="12" cy="12" r="4.2" stroke="currentColor" strokeWidth="1.3" />
      <circle cx="17.1" cy="6.9" r="1" fill="currentColor" />
    </svg>
  );
}

function WhatsAppGlyph() {
  return (
    <svg viewBox="0 0 24 24" fill="none" className="h-[18px] w-[18px]">
      <path
        d="M12 3.5a8.4 8.4 0 0 0-7.2 12.7L3.5 20.5l4.45-1.27A8.4 8.4 0 1 0 12 3.5Z"
        stroke="currentColor"
        strokeWidth="1.3"
      />
      <path
        d="M8.7 8.6c.15-.35.32-.36.46-.36.12 0 .26 0 .37.02.13.02.3-.05.47.36.18.44.6 1.5.65 1.6.06.12.1.26.02.42-.08.16-.12.26-.24.4-.12.14-.26.3-.37.4-.12.12-.25.24-.11.48.15.24.65 1.05 1.4 1.7.96.85 1.76 1.11 2 1.24.24.12.38.1.52-.06.15-.16.62-.7.78-.95.16-.24.32-.2.53-.12.22.08 1.4.65 1.64.77.24.12.4.18.46.28.06.1.06.58-.14 1.14-.2.56-1.16 1.1-1.6 1.17-.42.07-.95.1-1.53-.1a13 13 0 0 1-1.4-.5 10.4 10.4 0 0 1-3.85-3.32 9.3 9.3 0 0 1-1.5-2.9c-.19-.6-.26-1.2 0-1.7Z"
        fill="currentColor"
      />
    </svg>
  );
}

export default function SocialIcons({ className = "" }: { className?: string }) {
  return (
    <div className={`flex items-center gap-4 ${className}`}>
      <a
        href={site.instagramUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Open Instagram"
        className="text-paper/90 transition-colors duration-300 hover:text-brass-soft"
      >
        <InstagramGlyph />
      </a>
      <a
        href={getWhatsAppUrl()}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Message on WhatsApp"
        className="text-paper/90 transition-colors duration-300 hover:text-brass-soft"
      >
        <WhatsAppGlyph />
      </a>
    </div>
  );
}
