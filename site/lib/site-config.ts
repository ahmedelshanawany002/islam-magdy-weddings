// ---------------------------------------------------------------------------
// SITE CONFIG
// This is the one file to edit for brand text and contact details.
// Image content is managed separately in /public (see /public/README.md).
// ---------------------------------------------------------------------------

export const site = {
  brandName: "Islam Magdi Weddings",
  photographerName: "Islam Magdi",
  seoTitle: "Islam Magdi Weddings | Wedding Photography",
  seoDescription:
    "Wedding photography by Islam Magdi. Timeless, cinematic wedding storytelling — packages and portfolio.",

  whatsappNumber: "201015845475", // international format, no plus/spaces
  whatsappMessage:
    "Hello Islam, I'm interested in your wedding photography packages.",

  instagramUrl: "https://www.instagram.com/islam.magdi.weddings/",
};

export function getWhatsAppUrl(message?: string) {
  const text = encodeURIComponent(message ?? site.whatsappMessage);
  return `https://wa.me/${site.whatsappNumber}?text=${text}`;
}
