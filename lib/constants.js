export const BUSINESS = {
  name: "Shree Siddhivinayak Jewellery",
  shortName: "SSJ",
  type: "Jewelry Wholesaler",
  instagramHandle: "shree_siddhivinayakjewellers",
  instagramUrl: "https://www.instagram.com/shree_siddhivinayakjewellers/",
  phone: "8668619899",
  phoneDisplay: "+91 86686 19899",
  whatsappNumber: "918668619899",
  address:
    "छत्रपती संभाजी मार्केट समोर, ग्रामीण पोलीस स्टेशन शेजारी, शनिवार पेठ, कराड 415110",
  city: "Karad",
  mapsQuery:
    "Shree Siddhivinayak Jewellery Chhatrapati Sambhaji Market Shaniwar Peth Karad 415110",
  heroImage:
    "https://images.unsplash.com/photo-1605100804763-247f67b3557e?auto=format&fit=crop&w=1800&q=85",
};

export const CATEGORIES = [
  "Rings",
  "Mangalsutra",
  "Earrings",
  "Necklace",
  "Bangles",
  "Chains",
  "Imitation Jewellery",
  "New Arrivals",
];

export const ALL_CATEGORY = "All Designs";

export const CATEGORY_IMAGES = {
  Rings:
    "https://images.unsplash.com/photo-1603561591411-07134e71a2a9?auto=format&fit=crop&w=900&q=80",
  Mangalsutra:
    "https://images.unsplash.com/photo-1617038260897-41a1f14a8ca0?auto=format&fit=crop&w=900&q=80",
  Earrings:
    "https://images.unsplash.com/photo-1630019852942-f89202989a59?auto=format&fit=crop&w=900&q=80",
  Necklace:
    "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?auto=format&fit=crop&w=900&q=80",
  Bangles:
    "https://images.unsplash.com/photo-1620656798579-1984d9e87df6?auto=format&fit=crop&w=900&q=80",
  Chains:
    "https://images.unsplash.com/photo-1611591437281-460bfbe1220a?auto=format&fit=crop&w=900&q=80",
  "Imitation Jewellery":
    "https://images.unsplash.com/photo-1617038220319-276d3cfab638?auto=format&fit=crop&w=900&q=80",
  "New Arrivals":
    "https://images.unsplash.com/photo-1602751584552-8ba73aad10e1?auto=format&fit=crop&w=900&q=80",
};

export function getWhatsAppLink(productTitle = "your latest jewellery designs") {
  const message = `Namaste Shree Siddhivinayak Jewellery, I want to enquire about ${productTitle}.`;
  return `https://wa.me/${BUSINESS.whatsappNumber}?text=${encodeURIComponent(message)}`;
}

export function getCallLink() {
  return `tel:+91${BUSINESS.phone}`;
}

export function getMapsEmbedUrl() {
  return `https://www.google.com/maps?q=${encodeURIComponent(
    BUSINESS.mapsQuery,
  )}&output=embed`;
}

export function getMapsUrl() {
  return `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
    BUSINESS.mapsQuery,
  )}`;
}
