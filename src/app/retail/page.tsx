import Link from "next/link";
import Image from "next/image";
import { connection } from "next/server";
import { Gift, Images, Leaf, ShoppingBag, Truck } from "lucide-react";
import { retailPackages, standardKgPriceLabel } from "@/lib/site-data";
import { getProducts } from "@/lib/product-store";

export default async function RetailPage() {
  await connection();
  const products = await getProducts();

  return (
    <div className="section-shell py-12 md:py-20">
      <div className="mb-10 flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
        <div>
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.22em] text-[#1a7a4d]">Retail shop</p>
          <h1 className="text-4xl font-bold text-[#0f3c2f] md:text-5xl">Cashews for homes, gifts and daily use.</h1>
          <p className="mt-4 max-w-2xl text-base text-[#4b5563]">
            Standard retail price is {standardKgPriceLabel}. Smaller packs are priced from the same kilogram rate.
          </p>
        </div>
        <div className="flex flex-col gap-3 sm:flex-row">
          <Link href="/gallery" className="brand-button brand-button-secondary">
            <Images size={16} className="mr-2" /> View stock gallery
          </Link>
          <Link href="/products" className="brand-button brand-button-primary">Browse products</Link>
        </div>
      </div>

      <div className="mb-10 grid gap-4 md:grid-cols-3">
        <div className="relative min-h-[180px] overflow-hidden rounded-[24px] md:col-span-2">
          <Image src="/images/cashew-ww180.jpg" alt="Retail cashew packs" fill unoptimized className="object-cover" sizes="66vw" />
        </div>
        <div className="relative min-h-[180px] overflow-hidden rounded-[24px]">
          <Image src="/images/cashew-ww450.jpg" alt="WW 450 cashew kernels" fill unoptimized className="object-cover" sizes="33vw" />
        </div>
      </div>

      <div className="grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
        <div className="soft-card p-6">
          <h2 className="mb-5 text-2xl font-semibold text-[#0f3c2f]">Popular retail sizes</h2>
          <div className="space-y-3">
            {retailPackages.map((pkg) => (
              <div key={pkg.packageName} className="flex flex-col gap-3 rounded-2xl border border-[#dfe7e1] bg-[#f9faf8] p-4 sm:flex-row sm:items-center sm:justify-between">
                <div>
                  <p className="font-semibold text-[#0f3c2f]">{pkg.packageName}</p>
                  <p className="text-sm text-[#4b5563]">{pkg.availability}</p>
                </div>
                <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
                  <p className="text-lg font-bold text-[#0f3c2f] sm:whitespace-nowrap">{pkg.price}</p>
                  <a
                    href={`https://wa.me/255712935493?text=${encodeURIComponent(`Hello Mwarabu Nuts, I am interested in ${pkg.packageName} of cashew nuts. Please confirm the price and availability.`)}`}
                    className="brand-button brand-button-primary"
                  >
                    Order via WhatsApp
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="soft-card p-6">
          <h2 className="text-2xl font-semibold text-[#0f3c2f]">Customer journey</h2>
          <ul className="mt-5 space-y-4 text-sm leading-6 text-[#374151]">
            <li className="flex items-start gap-2"><ShoppingBag size={16} className="mt-0.5 text-[#1a7a4d]" /> Browse products and see the standard {standardKgPriceLabel} retail rate.</li>
            <li className="flex items-start gap-2"><Gift size={16} className="mt-0.5 text-[#1a7a4d]" /> Choose a pack size for home use or gifting.</li>
            <li className="flex items-start gap-2"><Truck size={16} className="mt-0.5 text-[#1a7a4d]" /> Order on WhatsApp and share your delivery location.</li>
            <li className="flex items-start gap-2"><Leaf size={16} className="mt-0.5 text-[#1a7a4d]" /> We confirm stock and arrange delivery.</li>
          </ul>
        </div>
      </div>

      <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {products.slice(0, 3).map((product) => (
          <article key={product.id} className="soft-card overflow-hidden">
            <div className="relative flex h-48 items-center justify-center bg-[#edf7f1] text-[#0f3c2f]">
              {product.image ? <Image src={product.image} alt={product.name} fill unoptimized className="object-cover" sizes="(max-width: 768px) 100vw, 33vw" /> : <Leaf size={30} strokeWidth={1.5} />}
            </div>
            <div className="p-5">
              <div className="flex items-center justify-between gap-3">
                <h3 className="text-xl font-semibold text-[#0f3c2f]">{product.name}</h3>
                <span className="text-sm font-medium text-[#1a7a4d]">{product.retailPrice}</span>
              </div>
              <p className="mt-3 text-sm text-[#4b5563]">{product.description}</p>
              <p className="mt-2 text-xs text-[#4b5563]">Available: {product.stockQuantity}</p>
              <div className="mt-4 flex gap-3">
                <Link href={`/products/${product.slug}`} className="brand-button brand-button-secondary flex-1 justify-center">View</Link>
                <a href={`https://wa.me/255712935493?text=${encodeURIComponent(`Hello Mwarabu Nuts, I am interested in ${product.name}. I would like to order 1 kg. Please confirm current price and availability.`)}`} className="brand-button brand-button-primary flex-1 justify-center">Buy</a>
              </div>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
