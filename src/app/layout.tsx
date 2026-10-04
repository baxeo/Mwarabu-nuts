import type { Metadata } from "next";
import Link from "next/link";
import { Geist, Geist_Mono } from "next/font/google";
import { Camera, Mail, MessageCircle } from "lucide-react";
import "./globals.css";
import { contactInfo, navItems } from "@/lib/site-data";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "MWARABU NUTS | Tanzanian Cashews",
  description:
    "Retail, wholesale and export cashew sourcing from Tanzania. Quality cashew nuts for retail customers, businesses and international buyers.",
};

function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-[#dfe7e1] bg-[#f7f4ee]/95 backdrop-blur-md">
      <div className="section-shell flex items-center justify-between gap-4 py-4">
        <Link href="/" className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#0f3c2f] text-lg font-bold text-[#f4efe6]">
            M
          </div>
          <div>
            <p className="text-lg font-black tracking-tight text-[#0f3c2f]">MWARABU NUTS</p>
          </div>
        </Link>

        <nav className="hidden items-center gap-6 text-sm font-medium text-[#374151] lg:flex">
          {navItems.map((item) => (
            <Link key={item.href} href={item.href} className="transition hover:text-[#0f3c2f]">
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <div className="hidden rounded-full border border-[#dfe7e1] bg-white px-3 py-2 text-xs font-semibold text-[#0f3c2f] sm:flex">
            EN <span className="px-1 text-[#6b7280]">|</span> SW
          </div>
          <a href="https://wa.me/255712935493?text=Hello%20Mwarabu%20Nuts%2C%20I%20would%20like%20a%20quote%20for%20cashew%20pricing." className="brand-button brand-button-primary hidden md:inline-flex">
            Request a quote
          </a>
          <Link href="/retail" className="brand-button brand-button-secondary hidden md:inline-flex">
            Shop now
          </Link>
        </div>
      </div>
    </header>
  );
}

function Footer() {
  return (
    <footer className="bg-[#0f3c2f] py-12 text-[#edf3ef]">
      <div className="section-shell grid gap-8 md:grid-cols-3">
        <div>
          <p className="text-xl font-black tracking-tight">MWARABU NUTS</p>
          <p className="mt-4 max-w-sm text-sm leading-7 text-[#dfe7e1]">
            Tanzanian cashews from origin to your market. Retail, wholesale and export supply built for serious buyers.
          </p>
        </div>
        <div>
          <h3 className="text-sm font-semibold uppercase tracking-[0.2em] text-[#d4b06a]">Quick links</h3>
          <ul className="mt-4 space-y-3 text-sm text-[#edf3ef]">
            <li><Link href="/products">Products</Link></li>
            <li><Link href="/wholesale">Wholesale</Link></li>
            <li><Link href="/export">Export 15+ MT</Link></li>
            <li><Link href="/#contact">Contact</Link></li>
          </ul>
        </div>
        <div>
          <h3 className="text-sm font-semibold uppercase tracking-[0.2em] text-[#d4b06a]">Contact</h3>
          <ul className="mt-4 space-y-3 text-sm text-[#edf3ef]">
            <li className="flex items-center gap-2"><MessageCircle size={16} /> <a href={contactInfo.whatsapp}>WhatsApp</a></li>
            <li className="flex items-center gap-2"><Mail size={16} /> <a href={`mailto:${contactInfo.email}`}>{contactInfo.email}</a></li>
            <li className="flex items-center gap-2"><Camera size={16} /> <a href={contactInfo.instagram}>Instagram</a></li>
            <li>{contactInfo.location}</li>
          </ul>
        </div>
      </div>
      <div className="section-shell mt-8 border-t border-white/10 pt-6 text-xs text-[#dfe7e1]">
        © 2026 Mwarabu Nuts. Prices are indicative and commercial terms are confirmed per inquiry.
      </div>
    </footer>
  );
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable}`}>
      <body className="min-h-screen bg-[#f7f4ee] text-[#111827] antialiased">
        <Header />
        <main>{children}</main>
        <Footer />
        <a
          href={contactInfo.whatsapp}
          target="_blank"
          rel="noreferrer"
          className="fixed bottom-5 right-5 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#25d366] text-2xl shadow-lg shadow-emerald-900/20 transition hover:scale-105"
          aria-label="Chat on WhatsApp"
        >
          💬
        </a>
      </body>
    </html>
  );
}
