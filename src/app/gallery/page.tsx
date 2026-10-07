import Link from "next/link";
import { Camera, Images, Warehouse } from "lucide-react";
import GalleryGrid from "@/components/GalleryGrid";
import { standardKgPriceLabel } from "@/lib/site-data";

export const metadata = {
  title: "Gallery | MWARABU NUTS",
  description: "See Tanzanian cashew grades, vacuum packed lots and warehouse stock from Mwarabu Nuts.",
};

export default function GalleryPage() {
  return (
    <div className="section-shell py-12 md:py-20">
      <div className="mb-10 max-w-3xl">
        <p className="mb-3 inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.22em] text-[#1a7a4d]">
          <Images size={16} /> Cashew stock gallery
        </p>
        <h1 className="text-4xl font-bold text-[#0f3c2f] md:text-5xl">See the cashews before you buy.</h1>
        <p className="mt-5 text-lg leading-8 text-[#4b5563]">
          Real photos of WW 180, WW 320, WW 450 kernels, vacuum packed wholesale lots and origin warehouse stock. Retail and wholesale are priced at a standard {standardKgPriceLabel}.
        </p>
      </div>

      <div id="stock-overview" className="mb-10 grid gap-4 md:grid-cols-3">
        <div className="soft-card flex items-start gap-3 p-5">
          <Camera className="mt-1 text-[#1a7a4d]" size={20} />
          <div>
            <p className="font-semibold text-[#0f3c2f]">Current grades</p>
            <p className="mt-1 text-sm text-[#4b5563]">WW 180, WW 320 and WW 450 whole kernels.</p>
          </div>
        </div>
        <div className="soft-card flex items-start gap-3 p-5">
          <Images className="mt-1 text-[#1a7a4d]" size={20} />
          <div>
            <p className="font-semibold text-[#0f3c2f]">Packed lots</p>
            <p className="mt-1 text-sm text-[#4b5563]">Vacuum packed blocks ready for shops and distributors.</p>
          </div>
        </div>
        <div className="soft-card flex items-start gap-3 p-5">
          <Warehouse className="mt-1 text-[#1a7a4d]" size={20} />
          <div>
            <p className="font-semibold text-[#0f3c2f]">Origin warehouse</p>
            <p className="mt-1 text-sm text-[#4b5563]">Tanzanian stock held for retail, wholesale and export orders.</p>
          </div>
        </div>
      </div>

      <div id="stock-photos">
        <GalleryGrid />
      </div>

      <div className="mt-10 flex flex-wrap gap-3">
        <Link href="/retail" className="brand-button brand-button-primary">Shop retail</Link>
        <Link href="/wholesale" className="brand-button brand-button-secondary">View wholesale</Link>
      </div>
    </div>
  );
}
