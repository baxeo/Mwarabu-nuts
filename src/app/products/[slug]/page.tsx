import Link from "next/link";
import Image from "next/image";
import { connection } from "next/server";
import { notFound } from "next/navigation";
import { Leaf } from "lucide-react";
import { getProducts } from "@/lib/product-store";

export default async function ProductDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  await connection();
  const { slug } = await params;
  const products = await getProducts();
  const product = products.find((item) => item.slug === slug);

  if (!product) {
    notFound();
  }

  return (
    <div className="section-shell py-12 md:py-20">
      <div className="mb-8 flex flex-wrap items-center gap-3 text-sm text-[#4b5563]">
        <Link href="/products" className="font-medium text-[#0f3c2f]">Products</Link>
        <span>›</span>
        <span>{product.name}</span>
      </div>

      <div className="max-w-4xl space-y-6">
          <div className="relative h-80 overflow-hidden rounded-2xl bg-[#edf7f1] text-[#0f3c2f]">
            {product.image ? <Image src={product.image} alt={product.name} fill unoptimized className="object-cover" sizes="(max-width: 768px) 100vw, 800px" /> : <Leaf size={40} strokeWidth={1.5} />}
          </div>
          <div>
            <p className="mb-2 text-sm font-semibold uppercase tracking-[0.2em] text-[#1a7a4d]">
              {product.category}
            </p>
            <h1 className="text-4xl font-bold text-[#0f3c2f]">{product.name}</h1>
          </div>

          <p className="text-base leading-7 text-[#374151]">{product.description}</p>

          <div className="grid gap-3 text-sm text-[#1f2937] sm:grid-cols-2">
            <div className="soft-card p-4"><span className="font-semibold">Grade:</span> {product.grade}</div>
            <div className="soft-card p-4"><span className="font-semibold">Origin:</span> {product.origin}</div>
            <div className="soft-card p-4"><span className="font-semibold">Processing:</span> {product.processing}</div>
            <div className="soft-card p-4"><span className="font-semibold">Availability:</span> {product.availability}</div>
            <div className="soft-card p-4"><span className="font-semibold">Stock / volume:</span> {product.stockQuantity}</div>
            <div className="soft-card p-4"><span className="font-semibold">Packaging:</span> {product.packaging}</div>
            <div className="soft-card p-4"><span className="font-semibold">MOQ:</span> {product.exportMOQ}</div>
          </div>

          <div className="soft-card p-5">
            <p className="text-sm uppercase tracking-[0.2em] text-[#1a7a4d]">Pricing</p>
            <div className="mt-4 grid gap-3 sm:grid-cols-3">
              <div>
                <p className="text-xs uppercase tracking-wide text-[#6b7280]">Retail</p>
                <p className="text-xl font-bold text-[#0f3c2f]">{product.retailPrice}</p>
              </div>
              <div>
                <p className="text-xs uppercase tracking-wide text-[#6b7280]">Wholesale</p>
                <p className="text-xl font-bold text-[#0f3c2f]">{product.wholesaleFrom}</p>
              </div>
              <div>
                <p className="text-xs uppercase tracking-wide text-[#6b7280]">Export</p>
                <p className="text-xl font-bold text-[#0f3c2f]">{product.exportMOQ}</p>
              </div>
            </div>
          </div>

          <div className="flex flex-wrap gap-3">
            <Link href="/retail" className="brand-button brand-button-primary">Buy now</Link>
            <Link href="/wholesale" className="brand-button brand-button-secondary">Request wholesale quote</Link>
            <Link href="/export" className="brand-button brand-button-primary">Request export quote</Link>
            <a href={`https://wa.me/255712935493?text=${encodeURIComponent(`Hello Mwarabu Nuts, I am interested in ${product.name} for sample and pricing.`)}`} className="brand-button brand-button-secondary">WhatsApp us</a>
          </div>

          <p className="text-xs text-[#6b7280]">
            Last updated: {product.lastUpdated}. Prices and availability are confirmed for each inquiry.
          </p>
        </div>
    </div>
  );
}
