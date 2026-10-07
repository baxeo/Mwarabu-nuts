"use client";

import Link from "next/link";
import { useState } from "react";
import {
  Boxes,
  CircleDollarSign,
  ChevronDown,
  Globe2,
  Home,
  Images,
  Menu,
  MessageCircle,
  Package,
  Phone,
  ShoppingBag,
  X,
} from "lucide-react";
import { navItems } from "@/lib/site-data";

const navIcons = {
  "/": Home,
  "/products": Package,
  "/gallery": Images,
  "/fob-prices": CircleDollarSign,
  "/retail": ShoppingBag,
  "/wholesale": Boxes,
  "/export": Globe2,
  "/#contact": Phone,
} as const;

const navSections: Record<string, { label: string; href: string }[]> = {
  "/": [
    { label: "Overview", href: "/" },
    { label: "Prices", href: "/#prices" },
    { label: "Featured products", href: "/#featured-products" },
    { label: "Cashew gallery", href: "/#cashew-gallery" },
    { label: "Retail", href: "/#retail-info" },
    { label: "Wholesale", href: "/#wholesale-info" },
    { label: "Export supply", href: "/#export-supply" },
    { label: "Trade process", href: "/#how-it-works" },
    { label: "Request a quote", href: "/#request-quote" },
    { label: "Contact", href: "/#contact" },
  ],
  "/products": [
    { label: "Overview", href: "/products" },
    { label: "Product catalogue", href: "/products#product-catalogue" },
  ],
  "/gallery": [
    { label: "Overview", href: "/gallery" },
    { label: "Stock details", href: "/gallery#stock-overview" },
    { label: "Photo gallery", href: "/gallery#stock-photos" },
  ],
  "/fob-prices": [
    { label: "Overview", href: "/fob-prices" },
    { label: "Grade prices", href: "/fob-prices#grade-prices" },
    { label: "FOB remarks", href: "/fob-prices#price-remarks" },
  ],
  "/retail": [
    { label: "Overview", href: "/retail" },
    { label: "Pack sizes", href: "/retail#pack-sizes" },
    { label: "Customer journey", href: "/retail#customer-journey" },
    { label: "Featured products", href: "/retail#retail-products" },
  ],
  "/wholesale": [
    { label: "Overview", href: "/wholesale" },
    { label: "Price tiers", href: "/wholesale#price-tiers" },
    { label: "Business buyers", href: "/wholesale#business-buyers" },
  ],
  "/export": [
    { label: "Overview", href: "/export" },
    { label: "Volume options", href: "/export#volume-options" },
    { label: "Buyer support", href: "/export#buyer-support" },
    { label: "Inquiry form", href: "/export#inquiry-form" },
  ],
  "/#contact": [
    { label: "Contact details", href: "/#contact" },
    { label: "Request a quote", href: "/#request-quote" },
  ],
};

function sectionMenuId(href: string, viewport: "desktop" | "mobile") {
  const key = href.replace(/[^a-z0-9]+/gi, "-").replace(/^-|-$/g, "") || "home";
  return `${viewport}-sections-${key}`;
}

export default function Header() {
  const [open, setOpen] = useState(false);
  const [expandedItem, setExpandedItem] = useState<string | null>(null);

  function toggleSections(href: string) {
    setExpandedItem((current) => current === href ? null : href);
  }

  function closeMenus() {
    setOpen(false);
    setExpandedItem(null);
  }

  return (
    <header className="sticky top-0 z-50 border-b border-[#dfe7e1] bg-[#f7f4ee]/95 backdrop-blur-md">
      <div className="section-shell flex items-center justify-between gap-4 py-4">
        <Link href="/" className="flex items-center gap-3" onClick={() => setOpen(false)}>
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#0f3c2f] text-lg font-bold text-[#f4efe6]">
            M
          </div>
          <p className="text-lg font-black tracking-tight text-[#0f3c2f]">MWARABU NUTS</p>
        </Link>

        <nav aria-label="Main navigation" className="hidden items-center gap-1 text-sm font-medium text-[#374151] xl:flex">
          {navItems.map((item) => {
            const Icon = navIcons[item.href as keyof typeof navIcons];
            const sections = navSections[item.href];
            const menuId = sectionMenuId(item.href, "desktop");
            return (
              <div key={item.href} className="relative flex items-center">
                <Link href={item.href} onClick={closeMenus} className="inline-flex min-h-11 items-center gap-1.5 rounded-lg px-2 transition hover:bg-white hover:text-[#0f3c2f]">
                  {Icon ? <Icon size={14} /> : null}
                  {item.label}
                </Link>
                <button
                  type="button"
                  className="inline-flex h-9 w-7 items-center justify-center rounded-md hover:bg-white"
                  aria-label={`${expandedItem === item.href ? "Hide" : "Show"} ${item.label} sections`}
                  aria-expanded={expandedItem === item.href}
                  aria-controls={menuId}
                  onClick={() => toggleSections(item.href)}
                >
                  <ChevronDown size={14} className={`transition-transform ${expandedItem === item.href ? "rotate-180" : ""}`} />
                </button>
                {expandedItem === item.href ? (
                  <ul id={menuId} className="absolute left-0 top-full z-50 mt-2 max-h-[70vh] w-60 overflow-y-auto rounded-lg border border-[#dfe7e1] bg-white p-2 shadow-xl">
                    {sections.map((section) => (
                      <li key={section.href}>
                        <Link href={section.href} onClick={closeMenus} className="inline-flex min-h-11 w-full items-center rounded-md px-3 py-2 text-sm text-[#374151] hover:bg-[#edf7f1] hover:text-[#0f3c2f]">
                          {section.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                ) : null}
              </div>
            );
          })}
        </nav>

        <div className="flex items-center gap-3">
          <div className="hidden rounded-full border border-[#dfe7e1] bg-white px-3 py-2 text-xs font-semibold text-[#0f3c2f] 2xl:flex">
            EN <span className="px-1 text-[#6b7280]">|</span> SW
          </div>
          <a
            href="https://wa.me/255712935493?text=Hello%20Mwarabu%20Nuts%2C%20I%20would%20like%20a%20quote%20for%20cashew%20pricing."
            className="brand-button brand-button-primary hidden 2xl:inline-flex"
          >
            <MessageCircle size={16} className="mr-2" />
            Request a quote
          </a>
          <Link href="/retail" className="brand-button brand-button-secondary hidden 2xl:inline-flex">
            <ShoppingBag size={16} className="mr-2" />
            Shop now
          </Link>
          <button
            type="button"
            className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-[#dfe7e1] bg-white text-[#0f3c2f] xl:hidden"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            aria-controls="mobile-navigation"
            onClick={() => setOpen((value) => !value)}
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {open ? (
        <nav id="mobile-navigation" aria-label="Mobile navigation" className="border-t border-[#dfe7e1] bg-[#f7f4ee] py-4 xl:hidden">
          <ul className="section-shell flex flex-col gap-2 text-sm font-medium text-[#0f3c2f]">
            {navItems.map((item) => {
              const Icon = navIcons[item.href as keyof typeof navIcons];
              const sections = navSections[item.href];
              const menuId = sectionMenuId(item.href, "mobile");
              return (
                <li key={item.href}>
                  <div className="flex items-center gap-1">
                    <Link href={item.href} onClick={closeMenus} className="inline-flex min-h-11 flex-1 items-center gap-2 rounded-xl px-2 py-2 hover:bg-white">
                      {Icon ? <Icon size={16} /> : null}
                      {item.label}
                    </Link>
                    <button
                      type="button"
                      className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-xl hover:bg-white"
                      aria-label={`${expandedItem === item.href ? "Hide" : "Show"} ${item.label} sections`}
                      aria-expanded={expandedItem === item.href}
                      aria-controls={menuId}
                      onClick={() => toggleSections(item.href)}
                    >
                      <ChevronDown size={16} className={`transition-transform ${expandedItem === item.href ? "rotate-180" : ""}`} />
                    </button>
                  </div>
                  {expandedItem === item.href ? (
                    <ul id={menuId} className="ml-4 border-l border-[#dfe7e1] pl-3">
                      {sections.map((section) => (
                        <li key={section.href}>
                          <Link href={section.href} onClick={closeMenus} className="inline-flex min-h-11 w-full items-center rounded-md px-3 py-2 text-sm text-[#4b5563] hover:bg-white hover:text-[#0f3c2f]">
                            {section.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  ) : null}
                </li>
              );
            })}
            <li>
              <a
                href="https://wa.me/255712935493?text=Hello%20Mwarabu%20Nuts%2C%20I%20would%20like%20a%20quote%20for%20cashew%20pricing."
                className="brand-button brand-button-primary justify-center"
              >
                Request a quote
              </a>
            </li>
          </ul>
        </nav>
      ) : null}
    </header>
  );
}
