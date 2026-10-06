import Link from "next/link";
import Image from "next/image";
import { connection } from "next/server";
import {
  BadgeCheck,
  Boxes,
  Camera,
  ClipboardCheck,
  Clock,
  Factory,
  FileText,
  Globe2,
  Handshake,
  Leaf,
  Mail,
  MapPin,
  MessageCircle,
  PackageSearch,
  ShieldCheck,
  ShoppingBag,
  Store,
  Truck,
} from "lucide-react";
import {
  cashewGallery,
  journeySteps,
  retailPackages,
  socialPosts,
  storyPillars,
  whatsappLink,
  wholesalePriceRanges,
} from "@/lib/site-data";
import { getProducts } from "@/lib/product-store";
import QuoteForm from "@/components/QuoteForm";

const buyerTypes = [
  { icon: Store, title: "Retail", text: "For everyday customers and small purchases." },
  { icon: Boxes, title: "Wholesale", text: "For businesses buying larger quantities." },
  { icon: Globe2, title: "Export 15+ MT", text: "For international and bulk buyers." },
];

export default async function HomePage() {
  await connection();
  const products = await getProducts();

  return (
    <div>
      <section className="section-shell py-10 md:py-16">
        <div className="grid items-center gap-8 lg:grid-cols-[1.05fr_0.95fr]">
          <div>
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.22em] text-[#1a7a4d]">
              Tanzania&apos;s trusted cashew partner
            </p>
            <h1 className="max-w-xl text-5xl font-black leading-[1.06] tracking-[-0.05em] text-[#0f3c2f] md:text-6xl">
              Tanzanian Cashews. From Origin to Your Market.
            </h1>
            <p className="mt-5 max-w-xl text-lg leading-8 text-[#4b5563]">
              Quality cashew nuts sourced from Tanzania for retail customers, wholesalers and serious international buyers.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <Link href="/retail" className="brand-button brand-button-primary">
                Shop retail
              </Link>
              <Link href="/wholesale" className="brand-button brand-button-secondary">
                View wholesale
              </Link>
              <Link href="/export" className="brand-button brand-button-primary">
                Start export inquiry
              </Link>
            </div>

            <div className="mt-8 grid gap-4 md:grid-cols-3">
              {buyerTypes.map(({ icon: Icon, title, text }) => (
                <div key={title} className="soft-card p-4">
                  <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-full bg-[#edf7f1] text-[#0f3c2f]">
                    <Icon size={18} />
                  </div>
                  <p className="text-xs uppercase tracking-[0.18em] text-[#6b7280]">{title}</p>
                  <p className="mt-2 text-lg font-semibold text-[#0f3c2f]">{title === "Retail" ? "Small orders" : title === "Wholesale" ? "Business supply" : "Bulk and global"}</p>
                  <p className="mt-2 text-sm text-[#4b5563]">{text}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="grid gap-3">
            <div className="relative min-h-[240px] overflow-hidden rounded-[28px] md:min-h-[280px]">
              <Image
                src="/images/cashew-ww180.jpg"
                alt="WW 180 Tanzanian cashew kernels"
                fill
                priority
                unoptimized
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
            <div className="grid grid-cols-2 gap-3">
              <div className="relative min-h-[150px] overflow-hidden rounded-[22px]">
                <Image src="/images/cashew-ww320.jpg" alt="WW 320 cashew kernels" fill unoptimized className="object-cover" sizes="25vw" />
              </div>
              <div className="relative min-h-[150px] overflow-hidden rounded-[22px]">
                <Image src="/images/cashew-warehouse.jpg" alt="Cashew warehouse in Tanzania" fill unoptimized className="object-cover" sizes="25vw" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="prices" className="section-shell py-8 md:py-12">
        <div className="mb-8 flex items-end justify-between gap-3">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[#1a7a4d]">Latest cashew prices</p>
            <h2 className="mt-3 text-4xl font-bold text-[#0f3c2f]">Cashew prices</h2>
          </div>
          <p className="text-xs text-[#4b5563]">Last updated: 2026-10-04</p>
        </div>

        <div className="grid gap-6 lg:grid-cols-3">
          <div className="soft-card p-6">
            <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-full bg-[#edf7f1] text-[#0f3c2f]">
              <ShoppingBag size={18} />
            </div>
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#1a7a4d]">Retail price</p>
            <h3 className="mt-5 text-2xl font-bold text-[#0f3c2f]">Retail</h3>
            <div className="mt-5 space-y-3 text-sm text-[#374151]">
              {retailPackages.map((item) => (
                <div key={item.packageName} className="flex items-center justify-between border-b border-[#edf1ee] pb-2 last:border-0">
                  <span>{item.packageName}</span>
                  <span className="font-semibold text-[#0f3c2f]">{item.price}</span>
                </div>
              ))}
            </div>
            <Link href="/retail" className="brand-button brand-button-primary mt-6 w-full justify-center">Buy now</Link>
          </div>

          <div className="soft-card p-6">
            <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-full bg-[#edf7f1] text-[#0f3c2f]">
              <Boxes size={18} />
            </div>
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#1a7a4d]">Wholesale price</p>
            <h3 className="mt-5 text-2xl font-bold text-[#0f3c2f]">Wholesale</h3>
            <div className="mt-5 space-y-3 text-sm text-[#374151]">
              {wholesalePriceRanges.slice(0, 4).map((item) => (
                <div key={item.quantity} className="flex items-center justify-between border-b border-[#edf1ee] pb-2 last:border-0">
                  <span>{item.quantity}</span>
                  <span className="font-semibold text-[#0f3c2f]">{item.pricePerKg}</span>
                </div>
              ))}
            </div>
            <Link href="/wholesale" className="brand-button brand-button-primary mt-6 w-full justify-center">
              Request wholesale price
            </Link>
          </div>

          <div className="soft-card p-6">
            <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-full bg-[#edf7f1] text-[#0f3c2f]">
              <Factory size={18} />
            </div>
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#1a7a4d]">Export price</p>
            <h3 className="mt-5 text-2xl font-bold text-[#0f3c2f]">Export 15+ MT</h3>
            <div className="mt-5 space-y-3 text-sm text-[#374151]">
              <p><span className="font-semibold text-[#0f3c2f]">Product:</span> Cashew kernels</p>
              <p><span className="font-semibold text-[#0f3c2f]">Grade:</span> W320 / W240</p>
              <p><span className="font-semibold text-[#0f3c2f]">MOQ:</span> 15 MT</p>
              <p><span className="font-semibold text-[#0f3c2f]">Destination:</span> Worldwide</p>
              <p><span className="font-semibold text-[#0f3c2f]">Currency:</span> USD / EUR / TZS</p>
            </div>
            <Link href="/export" className="brand-button brand-button-primary mt-6 w-full justify-center">
              Request export quote
            </Link>
          </div>
        </div>

        <p className="mt-6 text-xs text-[#4b5563]">
          Prices are indicative and may change depending on grade, quantity, availability, destination and market conditions.
        </p>
      </section>

      <section className="section-shell py-12 md:py-16">
        <div className="mb-8 flex items-end justify-between gap-3">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[#1a7a4d]">Featured products</p>
            <h2 className="mt-3 text-4xl font-bold text-[#0f3c2f]">Fresh from Tanzania</h2>
          </div>
          <Link href="/products" className="hidden text-sm font-semibold text-[#0f3c2f] md:inline-flex">
            See all products →
          </Link>
        </div>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {products.map((product) => (
            <article key={product.id} className="soft-card overflow-hidden">
              <div className="relative flex h-56 items-center justify-center bg-[#edf7f1] text-[#0f3c2f]">
                {product.image ? <Image src={product.image} alt={product.name} fill unoptimized className="object-cover" sizes="(max-width: 768px) 100vw, 33vw" /> : <Leaf size={32} strokeWidth={1.5} />}
              </div>
              <div className="p-5">
                <div className="flex items-center justify-between gap-3">
                  <span className="text-xs font-semibold uppercase tracking-[0.18em] text-[#1a7a4d]">{product.category}</span>
                  <span className="text-xs text-[#4b5563]">{product.availability}</span>
                </div>
                <h3 className="mt-4 text-2xl font-semibold text-[#0f3c2f]">{product.name}</h3>
                <p className="mt-3 text-sm leading-6 text-[#4b5563]">{product.description}</p>
                <div className="mt-4 space-y-2 text-sm text-[#1f2937]">
                  <p><span className="font-semibold">Grade:</span> {product.grade}</p>
                  <p><span className="font-semibold">Retail:</span> {product.retailPrice}</p>
                  <p><span className="font-semibold">Wholesale:</span> {product.wholesaleFrom}</p>
                  <p><span className="font-semibold">Stock:</span> {product.stockQuantity}</p>
                </div>
                <div className="mt-5 flex gap-3">
                  <Link href={`/products/${product.slug}`} className="brand-button brand-button-secondary flex-1 justify-center">
                    View product
                  </Link>
                  <Link href="/retail" className="brand-button brand-button-primary flex-1 justify-center">Buy</Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="bg-[#0f3c2f] py-12 text-[#f7f4ee] md:py-16">
        <div className="section-shell">
          <div className="mb-8">
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[#d4b06a]">Why Mwarabu Nuts?</p>
            <h2 className="mt-3 text-4xl font-bold">Built around clarity, trust and commercial simplicity.</h2>
          </div>
          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {storyPillars.map((item, index) => (
              <div key={item} className="rounded-3xl border border-white/10 bg-white/5 p-5">
                <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-full bg-[#d4b06a]/25 text-[#f7f4ee]">
                  {index === 0 ? <Leaf size={18} /> : index === 1 ? <MessageCircle size={18} /> : index === 2 ? <ShieldCheck size={18} /> : index === 3 ? <Store size={18} /> : index === 4 ? <Truck size={18} /> : <BadgeCheck size={18} />}
                </div>
                <p className="text-xl font-semibold">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-shell py-12 md:py-16">
        <div className="mb-8">
          <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[#1a7a4d]">Cashew grades in stock</p>
          <h2 className="mt-3 text-4xl font-bold text-[#0f3c2f]">See the nuts before you buy.</h2>
        </div>
        <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-5">
          {cashewGallery.map((item) => (
            <article key={item.title} className="soft-card overflow-hidden">
              <div className="relative h-44">
                <Image src={item.src} alt={item.title} fill unoptimized className="object-cover" sizes="(max-width: 768px) 100vw, 20vw" />
              </div>
              <div className="p-4">
                <p className="text-lg font-semibold text-[#0f3c2f]">{item.title}</p>
                <p className="mt-1 text-sm text-[#4b5563]">{item.caption}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="section-shell py-12 md:py-16">
        <div className="grid gap-6 lg:grid-cols-[1fr_1fr]">
          <div className="soft-card p-8">
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[#1a7a4d]">Retail shop</p>
            <h2 className="mt-3 text-4xl font-bold text-[#0f3c2f]">Simple buying for households and gifting.</h2>
            <p className="mt-4 text-base leading-7 text-[#4b5563]">
              From 250g gift packs to household orders, retail customers can quickly compare size, price and availability before placing a WhatsApp order.
            </p>
            <div className="mt-6 space-y-3 text-sm text-[#374151]">
              {retailPackages.map((item) => (
                <div key={item.packageName} className="flex items-center justify-between rounded-2xl border border-[#dfe7e1] bg-[#f9faf8] px-4 py-3">
                  <span>{item.packageName}</span>
                  <span className="font-semibold text-[#0f3c2f]">{item.price}</span>
                </div>
              ))}
            </div>
            <Link href="/retail" className="brand-button brand-button-primary mt-6">Shop retail</Link>
          </div>

          <div className="soft-card p-8">
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[#1a7a4d]">Wholesale</p>
            <h2 className="mt-3 text-4xl font-bold text-[#0f3c2f]">Clear pricing for business buyers.</h2>
            <p className="mt-4 text-base leading-7 text-[#4b5563]">
              Suitable for supermarkets, restaurants, distributors and resellers seeking reliable supply and simple communication.
            </p>
            <div className="mt-6 grid gap-3 sm:grid-cols-2">
              {wholesalePriceRanges.slice(0, 4).map((item) => (
                <div key={item.quantity} className="rounded-2xl border border-[#dfe7e1] bg-[#f9faf8] p-4">
                  <p className="text-xs uppercase tracking-[0.18em] text-[#6b7280]">{item.quantity}</p>
                  <p className="mt-2 text-lg font-bold text-[#0f3c2f]">{item.pricePerKg}</p>
                </div>
              ))}
            </div>
            <Link href="/wholesale" className="brand-button brand-button-secondary mt-6">View wholesale</Link>
          </div>
        </div>
      </section>

      <section className="bg-[#f1ece2] py-12 md:py-16">
        <div className="section-shell">
          <div className="mb-8">
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[#1a7a4d]">Export 15+ MT</p>
            <h2 className="mt-3 text-4xl font-bold text-[#0f3c2f]">Commercial supply for international buyers.</h2>
          </div>
          <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
            <div className="soft-card p-8">
              <ul className="space-y-4 text-base leading-7 text-[#374151]">
                <li>• 15 MT to 100 MT+ supply discussions</li>
                <li>• Container quantities and repeat contract options</li>
                <li>• Grade, packaging and destination planning</li>
                <li>• Documentation and commercial due diligence review</li>
              </ul>
            </div>
            <div className="soft-card overflow-hidden">
              <div className="relative h-56">
                <Image src="/images/cashew-packed-blocks.jpg" alt="Vacuum packed cashew lots" fill unoptimized className="object-cover" sizes="50vw" />
              </div>
              <div className="flex items-center justify-center p-8 text-center">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#1a7a4d]">Need volume?</p>
                <h3 className="mt-3 text-3xl font-bold text-[#0f3c2f]">15+ MT? Let&apos;s talk.</h3>
                <Link href="/export" className="brand-button brand-button-primary mt-6">Request export quotation</Link>
              </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="how-it-works" className="section-shell py-12 md:py-16">
        <div className="mb-8 text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[#1a7a4d]">How it works</p>
          <h2 className="mt-3 text-4xl font-bold text-[#0f3c2f]">A simple trade process</h2>
        </div>

        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {journeySteps.map((step, index) => {
            const Icon = [PackageSearch, ClipboardCheck, FileText, Handshake][index] ?? PackageSearch;
            return (
            <div key={step.title} className="soft-card p-6">
              <div className="mb-3 flex h-11 w-11 items-center justify-center rounded-full bg-[#edf7f1] text-[#0f3c2f]">
                <Icon size={18} />
              </div>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#d4b06a]">0{index + 1}</p>
              <h3 className="mt-4 text-2xl font-semibold text-[#0f3c2f]">{step.title}</h3>
              <p className="mt-3 text-sm leading-6 text-[#4b5563]">{step.detail}</p>
            </div>
            );
          })}
        </div>
      </section>

      <section className="bg-[#0f3c2f] py-12 text-[#f7f4ee] md:py-16">
        <div className="section-shell grid items-center gap-8 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[#d4b06a]">Quality & sourcing</p>
            <h2 className="mt-3 text-4xl font-bold">Quality you can verify.</h2>
          </div>
          <div className="space-y-4 text-base leading-8 text-[#edf3ef]">
            <p>
              Serious commercial orders should be based on product specifications, grade, available lots, sample review where appropriate, quantity, documentation and agreed commercial terms.
            </p>
            <p>Actual availability, specifications and commercial terms are confirmed for each inquiry.</p>
            <div className="relative mt-4 h-64 overflow-hidden rounded-[24px]">
              <Image src="/images/cashew-warehouse.jpg" alt="Origin warehouse stock of Tanzanian cashews" fill unoptimized className="object-cover" sizes="(max-width: 1024px) 100vw, 60vw" />
            </div>
          </div>
        </div>
      </section>

      <section id="our-story" className="section-shell py-12 md:py-16">
        <div className="grid gap-8">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[#1a7a4d]">Our story</p>
            <h2 className="mt-3 text-4xl font-bold text-[#0f3c2f]">From Tanzania. Built for serious buyers.</h2>
            <div className="mt-5 space-y-4 text-base leading-8 text-[#374151]">
              <p>
                Mwarabu Nuts connects buyers with Tanzanian cashew through clear sample-led conversations, transparent sourcing and direct communication.
              </p>
              <p>
                We support retail, wholesale and bulk export buyers with practical trade discussions rooted in origin, quality and commercial clarity.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section-shell py-12 md:py-16">
        <div className="mb-8">
          <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[#1a7a4d]">Follow our cashew journey</p>
          <h2 className="mt-3 text-4xl font-bold text-[#0f3c2f]">Instagram / social proof</h2>
        </div>
        <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
          {socialPosts.map((post) => (
            <div key={post.title} className="soft-card overflow-hidden">
              <div className="relative h-48">
                <Image src={post.image} alt={post.title} fill unoptimized className="object-cover" sizes="(max-width: 768px) 100vw, 25vw" />
              </div>
              <p className="p-4 text-lg font-semibold text-[#0f3c2f]">{post.title}</p>
            </div>
          ))}
        </div>
        <div className="mt-6 text-center">
          <a href="https://www.instagram.com/mwarabu_nuts/" target="_blank" rel="noreferrer" className="brand-button brand-button-primary">
            Follow @mwarabu_nuts
          </a>
        </div>
      </section>

      <section id="request-quote" className="section-shell py-12 md:py-16">
        <div className="soft-card p-8 md:p-10">
          <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[#1a7a4d]">Request a quote</p>
              <h2 className="mt-3 text-4xl font-bold text-[#0f3c2f]">Tell us what you need.</h2>
              <p className="mt-4 text-base leading-7 text-[#4b5563]">
                Whether you need a retail order, wholesale supply, or a 15+ MT export quotation, we will help you move to the next commercial step quickly.
              </p>
              <div className="mt-5 flex gap-3">
                <a href={whatsappLink("Hello Mwarabu Nuts, I would like a quote for cashew nuts and supply details.")} className="brand-button brand-button-primary justify-center">
                  <MessageCircle size={16} className="mr-2" /> WhatsApp us
                </a>
              </div>
            </div>
            <QuoteForm />
          </div>
        </div>
      </section>

      <section id="contact" className="section-shell py-12 md:py-16">
        <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[#1a7a4d]">Contact</p>
            <h2 className="mt-3 text-4xl font-bold text-[#0f3c2f]">Talk to the Mwarabu Nuts team.</h2>
            <div className="mt-6 space-y-3 text-base text-[#374151]">
              <p className="flex items-center gap-2"><MessageCircle size={18} className="text-[#1a7a4d]" /><span className="font-semibold text-[#0f3c2f]">WhatsApp:</span> <a href="https://wa.me/255712935493">+255 712 935 493</a></p>
              <p className="flex items-center gap-2"><Mail size={18} className="text-[#1a7a4d]" /><span className="font-semibold text-[#0f3c2f]">Email:</span> <a href="mailto:trade@mwarabunuts.com">trade@mwarabunuts.com</a></p>
              <p className="flex items-center gap-2"><Camera size={18} className="text-[#1a7a4d]" /><span className="font-semibold text-[#0f3c2f]">Instagram:</span> <a href="https://www.instagram.com/mwarabu_nuts/" target="_blank" rel="noreferrer">@mwarabu_nuts</a></p>
              <p className="flex items-center gap-2"><MapPin size={18} className="text-[#1a7a4d]" /><span className="font-semibold text-[#0f3c2f]">Location:</span> Tanzania</p>
              <p className="flex items-center gap-2"><Clock size={18} className="text-[#1a7a4d]" /><span className="font-semibold text-[#0f3c2f]">Business hours:</span> Mon - Sat: 8:00 AM - 6:00 PM EAT</p>
            </div>
          </div>
          <div className="soft-card p-6">
            <div className="flex flex-col gap-3">
              <a href={whatsappLink("Hello Mwarabu Nuts, I would like to buy cashew nuts and confirm the current availability.")} target="_blank" rel="noreferrer" className="brand-button brand-button-primary justify-center"><MessageCircle size={16} className="mr-2" /> WhatsApp</a>
              <a href="mailto:trade@mwarabunuts.com" className="brand-button brand-button-secondary justify-center">Send email</a>
              <a href="https://www.instagram.com/mwarabu_nuts/" target="_blank" rel="noreferrer" className="brand-button brand-button-secondary justify-center">Instagram</a>
              <Link href="/export" className="brand-button brand-button-primary justify-center">Request a quote</Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
