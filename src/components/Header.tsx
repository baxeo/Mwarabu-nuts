"use client";

import Link from "next/link";
import { useState } from "react";
import {
  Boxes,
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
  "/retail": ShoppingBag,
  "/wholesale": Boxes,
  "/export": Globe2,
  "/#contact": Phone,
} as const;

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-[#dfe7e1] bg-[#f7f4ee]/95 backdrop-blur-md">
      <div className="section-shell flex items-center justify-between gap-4 py-4">
        <Link href="/" className="flex items-center gap-3" onClick={() => setOpen(false)}>
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#0f3c2f] text-lg font-bold text-[#f4efe6]">
            M
          </div>
          <p className="text-lg font-black tracking-tight text-[#0f3c2f]">MWARABU NUTS</p>
        </Link>

        <nav className="hidden items-center gap-4 text-sm font-medium text-[#374151] xl:flex">
          {navItems.map((item) => {
            const Icon = navIcons[item.href as keyof typeof navIcons];
            return (
              <Link key={item.href} href={item.href} className="inline-flex items-center gap-1.5 transition hover:text-[#0f3c2f]">
                {Icon ? <Icon size={14} /> : null}
                {item.label}
              </Link>
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
        <nav id="mobile-navigation" className="border-t border-[#dfe7e1] bg-[#f7f4ee] py-4 xl:hidden">
          <div className="section-shell flex flex-col gap-2 text-sm font-medium text-[#0f3c2f]">
            {navItems.map((item) => {
              const Icon = navIcons[item.href as keyof typeof navIcons];
              return (
                <Link key={item.href} href={item.href} onClick={() => setOpen(false)} className="inline-flex min-h-11 items-center gap-2 rounded-xl px-2 py-2 hover:bg-white">
                  {Icon ? <Icon size={16} /> : null}
                  {item.label}
                </Link>
              );
            })}
            <a
              href="https://wa.me/255712935493?text=Hello%20Mwarabu%20Nuts%2C%20I%20would%20like%20a%20quote%20for%20cashew%20pricing."
              className="brand-button brand-button-primary justify-center"
            >
              Request a quote
            </a>
          </div>
        </nav>
      ) : null}
    </header>
  );
}
