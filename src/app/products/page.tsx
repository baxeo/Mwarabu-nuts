import Link from "next/link";
import Image from "next/image";
import { connection } from "next/server";
import { Images, Leaf } from "lucide-react";
import { getProducts } from "@/lib/product-store";

export default async function ProductsPage() {
  await connection();
  const products = await getProducts();

  return (
    <div className="section-shell py-12 md:py-20">
      <div className="mb-10 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
        <div>
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.22em] text-[#1a7a4d]">
            Product catalogue
          </p>
          <h1 className="text-4xl font-bold text-[#0f3c2f] md:text-5xl">
            Cashew products for every market.
          </h1>
        </div>
        <div className="flex flex-col gap-3 sm:flex-row">
          <Link href="/gallery" className="brand-button brand-button-secondary">
            <Images size={16} className="mr-2" /> View stock gallery
          </Link>
          <Link href="/export" className="brand-button brand-button-primary">
            Request export quote
          </Link>
        </div>
      </div>

      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {products.map((product) => (
          <article key={product.id} className="soft-card overflow-hidden">
            <div className="relative flex h-56 items-center justify-center bg-[#edf7f1] text-[#0f3c2f]">
              {product.image ? <Image src={product.image} alt={product.name} fill unoptimized className="object-cover" sizes="(max-width: 768px) 100vw, 33vw" /> : <Leaf size={32} strokeWidth={1.5} />}
            </div>
            <div className="space-y-4 p-5">
              <div className="flex items-center justify-between gap-3">
                <span className="rounded-full bg-[#edf7f1] px-2.5 py-1 text-xs font-semibold uppercase tracking-wide text-[#0f3c2f]">
                  {product.category}
                </span>
                <span className="text-xs text-[#4b5563]">{product.availability}</span>
              </div>
              <div>
                <h2 className="text-2xl font-semibold text-[#0f3c2f]">{product.name}</h2>
                <p className="mt-2 text-sm leading-6 text-[#4b5563]">{product.description}</p>
              </div>
              <div className="space-y-2 text-sm text-[#1f2937]">
                <p><span className="font-semibold">Grade:</span> {product.grade}</p>
                <p><span className="font-semibold">Origin:</span> {product.origin}</p>
                <p><span className="font-semibold">Retail:</span> {product.retailPrice}</p>
                <p><span className="font-semibold">Wholesale:</span> {product.wholesaleFrom}</p>
                <p><span className="font-semibold">Export MOQ:</span> {product.exportMOQ}</p>
                <p><span className="font-semibold">Stock:</span> {product.stockQuantity}</p>
              </div>
              <div className="flex gap-3 pt-2">
                <Link href={`/products/${product.slug}`} className="brand-button brand-button-secondary flex-1 justify-center">
                  View product
                </Link>
                <Link href="/retail" className="brand-button brand-button-primary flex-1 justify-center">
                  Buy
                </Link>
              </div>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
