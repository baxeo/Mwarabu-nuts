export type Product = {
  id: string;
  slug: string;
  name: string;
  category: string;
  image?: string;
  description: string;
  grade: string;
  origin: string;
  processing: string;
  availability: string;
  stockQuantity: string;
  retailPrice: string;
  wholesaleFrom: string;
  exportMOQ: string;
  packaging: string;
  lastUpdated: string;
};

export const products: Product[] = [
  {
    id: "1",
    slug: "raw-cashew-nuts-rcn",
    name: "Raw Cashew Nuts (RCN)",
    category: "Raw cashew",
    image: "/images/cashew-warehouse.jpg",
    stockQuantity: "Seasonal supply",
    description:
      "Tanzania-origin raw cashew nuts for processors and industrial buyers seeking consistent supply and traceable origin.",
    grade: "A, B, C export lots",
    origin: "Tanzania",
    processing: "Raw, natural",
    availability: "Seasonal supply / current lots available",
    retailPrice: "TZS 18,000 / kg",
    wholesaleFrom: "TZS 3,800 / kg",
    exportMOQ: "15 MT",
    packaging: "PP bags / bulk container lots",
    lastUpdated: "2026-10-04",
  },
  {
    id: "2",
    slug: "whole-cashew-kernels",
    name: "Whole Cashew Kernels",
    category: "Whole kernels",
    image: "/images/cashew-ww320.jpg",
    stockQuantity: "Current lots available",
    description:
      "Premium whole kernels for retail, gifting, food service, and export. Selected for appearance, size, and consistency.",
    grade: "W180, W210, W240, W320, W400",
    origin: "Tanzania",
    processing: "Roasted / natural / steamed",
    availability: "Current lots available",
    retailPrice: "TZS 28,000 / kg",
    wholesaleFrom: "TZS 6,900 / kg",
    exportMOQ: "15 MT",
    packaging: "Vacuum packs / 10kg cartons / 25kg packs",
    lastUpdated: "2026-10-04",
  },
  {
    id: "3",
    slug: "broken-cashew-kernels-pieces",
    name: "Broken Cashew Kernels / Pieces",
    category: "Broken pieces",
    image: "/images/cashew-ww450.jpg",
    stockQuantity: "Available on request",
    description:
      "Kitchen-ready broken kernels for bakery, confectionery, nut butters, and food production with reliable dosing.",
    grade: "Brokens / pieces / cut pieces",
    origin: "Tanzania",
    processing: "Sorted / graded",
    availability: "Available on request",
    retailPrice: "TZS 18,500 / kg",
    wholesaleFrom: "TZS 4,400 / kg",
    exportMOQ: "15 MT",
    packaging: "25kg / 50kg / custom packs",
    lastUpdated: "2026-10-04",
  },
  {
    id: "4",
    slug: "roasted-cashew-nuts",
    name: "Roasted Cashew Nuts",
    category: "Roasted nuts",
    image: "/images/cashew-ww180.jpg",
    stockQuantity: "Retail and wholesale availability",
    description:
      "Ready-to-sell roasted cashews for supermarkets, snack brands, and hospitality customers seeking crunchy, premium taste.",
    grade: "Roasted premium / salted / unsalted",
    origin: "Tanzania",
    processing: "Roasted / seasoned",
    availability: "Retail and wholesale availability",
    retailPrice: "TZS 32,000 / kg",
    wholesaleFrom: "TZS 7,750 / kg",
    exportMOQ: "15 MT",
    packaging: "Retail packs / 10kg boxes / bulk packs",
    lastUpdated: "2026-10-04",
  },
  {
    id: "5",
    slug: "cashew-butter-and-specialty-products",
    name: "Cashew Butter & Specialty Products",
    category: "Other cashew products",
    image: "/images/cashew-packed-blocks.jpg",
    stockQuantity: "Project-based requests",
    description:
      "Additional cashew-based products for value-added food manufacturing, ingredient sourcing and private-label programs.",
    grade: "Custom specification",
    origin: "Tanzania",
    processing: "Value-added / custom",
    availability: "Project-based requests",
    retailPrice: "TZS 25,000 / kg",
    wholesaleFrom: "TZS 5,800 / kg",
    exportMOQ: "15 MT",
    packaging: "Custom packing / private label options",
    lastUpdated: "2026-10-04",
  },
];

export const whatsappBase = "https://wa.me/255712935493";
export const whatsappLink = (text: string) => `${whatsappBase}?text=${encodeURIComponent(text)}`;

export const retailPackages = [
  { packageName: "250 g", price: "TZS 7,500", availability: "In stock" },
  { packageName: "500 g", price: "TZS 14,500", availability: "In stock" },
  { packageName: "1 kg", price: "TZS 28,000", availability: "In stock" },
  { packageName: "2 kg", price: "TZS 55,000", availability: "In stock" },
  { packageName: "5 kg", price: "TZS 130,000", availability: "Limited stock" },
];

export const wholesalePriceRanges = [
  { quantity: "10 kg", minOrder: "10 kg", pricePerKg: "TZS 6,900 / kg", packaging: "10kg retail cartons" },
  { quantity: "25 kg", minOrder: "25 kg", pricePerKg: "TZS 6,500 / kg", packaging: "25kg packs" },
  { quantity: "50 kg", minOrder: "50 kg", pricePerKg: "TZS 6,200 / kg", packaging: "50kg bags" },
  { quantity: "100 kg", minOrder: "100 kg", pricePerKg: "TZS 6,000 / kg", packaging: "PP bags" },
  { quantity: "500 kg", minOrder: "500 kg", pricePerKg: "TZS 5,700 / kg", packaging: "Bulk pack" },
  { quantity: "1 MT", minOrder: "1 MT", pricePerKg: "TZS 5,500 / kg", packaging: "Container-ready" },
];

export const exportBuyerTypes = [
  "Importer",
  "Distributor",
  "Processor",
  "Manufacturer",
  "Retailer",
  "Food Service",
  "Other",
];

export const storyPillars = [
  "Tanzanian Origin",
  "Direct Communication",
  "Quality-Focused",
  "Retail & Wholesale",
  "Export Ready",
  "Transparent Trade Process",
];

export const journeySteps = [
  {
    title: "Tell Us What You Need",
    detail: "Product, grade, quantity, destination, packaging and timing.",
  },
  {
    title: "Confirm Product & Quality",
    detail: "Samples and specifications can be discussed where applicable.",
  },
  {
    title: "Receive Commercial Terms",
    detail: "Pricing, availability, packaging, logistics and documentation.",
  },
  {
    title: "Confirm & Coordinate",
    detail: "Agreement, payment, shipping and delivery follow-up.",
  },
];

export const socialPosts = [
  { title: "WW 180 kernels", image: "/images/cashew-ww180.jpg" },
  { title: "WW 320 kernels", image: "/images/cashew-ww320.jpg" },
  { title: "WW 450 kernels", image: "/images/cashew-ww450.jpg" },
  { title: "Packed wholesale lots", image: "/images/cashew-packed-blocks.jpg" },
];

export const cashewGallery = [
  { src: "/images/cashew-ww180.jpg", title: "WW 180", caption: "Large premium whole kernels" },
  { src: "/images/cashew-ww320.jpg", title: "WW 320", caption: "Export-grade whole kernels" },
  { src: "/images/cashew-ww450.jpg", title: "WW 450", caption: "Value whole kernels" },
  { src: "/images/cashew-packed-blocks.jpg", title: "Vacuum packed", caption: "Wholesale-ready packing" },
  { src: "/images/cashew-warehouse.jpg", title: "Warehouse stock", caption: "Tanzanian origin lots" },
];

export const contactInfo = {
  whatsapp: "https://wa.me/255712935493",
  email: "trade@mwarabunuts.com",
  instagram: "https://www.instagram.com/mwarabu_nuts/",
  location: "Tanzania",
  businessHours: "Mon - Sat: 8:00 AM - 6:00 PM EAT",
};

export const salesHighlights = [
  "Retail ordering",
  "Wholesale pricing",
  "Export inquiry",
  "Trade documentation",
  "Sample-led buying",
  "Global buyer support",
];

export const homePageStats = [
  { label: "Retail orders", value: "24" },
  { label: "Wholesale inquiries", value: "40" },
  { label: "Export inquiries", value: "12" },
  { label: "Total requested volume", value: "1,250 MT" },
];

export const navItems = [
  { label: "Home", href: "/" },
  { label: "Products", href: "/products" },
  { label: "Retail", href: "/retail" },
  { label: "Wholesale", href: "/wholesale" },
  { label: "Export 15+ MT", href: "/export" },
  { label: "How It Works", href: "/#how-it-works" },
  { label: "Our Story", href: "/#our-story" },
  { label: "Contact", href: "/#contact" },
];
