import Link from "next/link";
import { wholesalePriceRanges } from "@/lib/site-data";

export default function WholesalePage() {
  return (
    <div className="section-shell py-12 md:py-20">
      <div className="mb-10 max-w-3xl">
        <p className="mb-3 text-sm font-semibold uppercase tracking-[0.22em] text-[#1a7a4d]">
          Wholesale cashews
        </p>
        <h1 className="text-4xl font-bold text-[#0f3c2f] md:text-5xl">
          Supply retail, hospitality and distribution partners with confidence.
        </h1>
      </div>

      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {wholesalePriceRanges.map((item) => (
          <article key={item.quantity} className="soft-card p-6">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#1a7a4d]">
              {item.quantity}
            </p>
            <h2 className="mt-4 text-3xl font-bold text-[#0f3c2f]">{item.pricePerKg}</h2>
            <div className="mt-5 space-y-3 text-sm text-[#374151]">
              <p><span className="font-semibold text-[#0f3c2f]">MOQ:</span> {item.minOrder}</p>
              <p><span className="font-semibold text-[#0f3c2f]">Packaging:</span> {item.packaging}</p>
              <p><span className="font-semibold text-[#0f3c2f]">Available quantity:</span> Subject to current stock</p>
            </div>
            <Link href="/#request-quote" className="brand-button brand-button-primary mt-6 w-full justify-center">
              Request wholesale price
            </Link>
          </article>
        ))}
      </div>

      <div className="mt-12 soft-card p-6 md:p-8">
        <h2 className="text-2xl font-semibold text-[#0f3c2f]">Who we serve</h2>
        <div className="mt-5 flex flex-wrap gap-3 text-sm font-medium">
          {[
            "Supermarkets",
            "Restaurants",
            "Hotels",
            "Retailers",
            "Resellers",
            "Distributors",
            "Food businesses",
            "Corporate buyers",
          ].map((buyer) => (
            <span key={buyer} className="rounded-full border border-[#dfe7e1] bg-[#f7faf7] px-3 py-2 text-[#0f3c2f]">
              {buyer}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
