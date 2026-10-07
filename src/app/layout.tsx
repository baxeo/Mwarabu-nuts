import type { Metadata } from "next";
import Link from "next/link";
import { Geist, Geist_Mono } from "next/font/google";
import { Camera, Mail, MapPin, MessageCircle } from "lucide-react";
import "./globals.css";
import Header from "@/components/Header";
import { contactInfo } from "@/lib/site-data";

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
            <li><Link href="/gallery">Gallery</Link></li>
            <li><Link href="/retail">Retail</Link></li>
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
            <li className="flex items-center gap-2"><MapPin size={16} /> {contactInfo.location}</li>
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
          className="fixed bottom-5 right-5 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#25d366] text-white shadow-lg shadow-emerald-900/20 transition hover:scale-105"
          aria-label="Chat on WhatsApp"
        >
          <MessageCircle size={26} />
        </a>
      </body>
    </html>
  );
}
