'use client';

import Image from "next/image";
import { useState } from "react";
import { FileCheck, Globe2, Package, Ship } from "lucide-react";

export default function ExportPage() {
  const [submitted, setSubmitted] = useState(false);

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const payload = Object.fromEntries(formData.entries());

    const response = await fetch("/api/export-inquiry", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });

    const result = await response.json();
    if (result.success) {
      setSubmitted(true);
      event.currentTarget.reset();
    }
  }

  return (
    <div className="section-shell py-12 md:py-20">
      <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
        <div>
          <div className="relative mb-8 min-h-[220px] overflow-hidden rounded-[24px]">
            <Image src="/images/cashew-warehouse.jpg" alt="Export warehouse stock of Tanzanian cashews" fill unoptimized className="object-cover" sizes="50vw" />
          </div>
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.22em] text-[#1a7a4d]">
            Export & bulk cashew
          </p>
          <h1 className="text-4xl font-bold text-[#0f3c2f] md:text-5xl">
            15+ MT? Let&apos;s talk business.
          </h1>
          <p className="mt-5 max-w-xl text-lg leading-8 text-[#374151]">
            For importers, distributors, processors, manufacturers and institutional buyers seeking Tanzanian cashews at commercial scale.
          </p>

          <div id="volume-options" className="mt-8 grid gap-4 sm:grid-cols-2">
            {[
              { label: "15 MT", icon: Package },
              { label: "20 MT", icon: Package },
              { label: "25 MT", icon: Package },
              { label: "50 MT", icon: Ship },
              { label: "100 MT+", icon: Ship },
              { label: "Container quantities", icon: Ship },
              { label: "Repeat contracts", icon: FileCheck },
              { label: "Seasonal supply", icon: Globe2 },
            ].map(({ label, icon: Icon }) => (
              <div key={label} className="flex items-center gap-3 rounded-2xl border border-[#dfe7e1] bg-[#f8faf8] px-4 py-3 text-sm font-medium text-[#0f3c2f]">
                <Icon size={16} />
                {label}
              </div>
            ))}
          </div>

          <div id="buyer-support" className="mt-8 soft-card p-5 text-sm leading-7 text-[#374151]">
            <p className="font-semibold text-[#0f3c2f]">Export buyer support</p>
            <ul className="mt-3 space-y-2">
              <li>• Origin and quality assurance</li>
              <li>• Grades, product options and packaging</li>
              <li>• Volume and shipping arrangements</li>
              <li>• Documentation and destination planning</li>
              <li>• Commercial terms and due diligence review</li>
            </ul>
          </div>
        </div>

        <div id="inquiry-form" className="soft-card p-6 md:p-8">
          <h2 className="text-2xl font-semibold text-[#0f3c2f]">Export inquiry form</h2>
          {submitted ? (
            <div className="mt-6 rounded-2xl border border-[#d7f0dc] bg-[#edf9f1] p-5 text-sm text-[#0f3c2f]">
              Thank you. Your export inquiry has been received. Our trade team will review your requirements and contact you.
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="mt-6 grid gap-4 md:grid-cols-2">
              <label className="flex flex-col gap-2 text-sm text-[#374151]">
                Full Name *
                <input name="fullName" required className="rounded-xl border border-[#dfe7e1] bg-white px-3 py-3 outline-none ring-0 transition focus:border-[#1a7a4d]" />
              </label>
              <label className="flex flex-col gap-2 text-sm text-[#374151]">
                Company *
                <input name="company" required className="rounded-xl border border-[#dfe7e1] bg-white px-3 py-3 outline-none transition focus:border-[#1a7a4d]" />
              </label>
              <label className="flex flex-col gap-2 text-sm text-[#374151] md:col-span-2">
                Business Email *
                <input type="email" name="businessEmail" required className="rounded-xl border border-[#dfe7e1] bg-white px-3 py-3 outline-none transition focus:border-[#1a7a4d]" />
              </label>
              <label className="flex flex-col gap-2 text-sm text-[#374151]">
                Phone / WhatsApp *
                <input name="phone" required className="rounded-xl border border-[#dfe7e1] bg-white px-3 py-3 outline-none transition focus:border-[#1a7a4d]" />
              </label>
              <label className="flex flex-col gap-2 text-sm text-[#374151]">
                Country *
                <input name="country" required className="rounded-xl border border-[#dfe7e1] bg-white px-3 py-3 outline-none transition focus:border-[#1a7a4d]" />
              </label>
              <label className="flex flex-col gap-2 text-sm text-[#374151]">
                Product *
                <input name="product" className="rounded-xl border border-[#dfe7e1] bg-white px-3 py-3 outline-none transition focus:border-[#1a7a4d]" />
              </label>
              <label className="flex flex-col gap-2 text-sm text-[#374151]">
                Grade
                <input name="grade" className="rounded-xl border border-[#dfe7e1] bg-white px-3 py-3 outline-none transition focus:border-[#1a7a4d]" />
              </label>
              <label className="flex flex-col gap-2 text-sm text-[#374151]">
                Quantity Required *
                <select name="quantityRequired" defaultValue="15 MT" className="rounded-xl border border-[#dfe7e1] bg-white px-3 py-3 outline-none transition focus:border-[#1a7a4d]">
                  <option value="15 MT">15 MT</option>
                  <option value="20 MT">20 MT</option>
                  <option value="25 MT">25 MT</option>
                  <option value="50 MT">50 MT</option>
                  <option value="100 MT+">100 MT+</option>
                  <option value="Custom">Custom</option>
                </select>
              </label>
              <label className="flex flex-col gap-2 text-sm text-[#374151]">
                Destination *
                <input name="destination" required className="rounded-xl border border-[#dfe7e1] bg-white px-3 py-3 outline-none transition focus:border-[#1a7a4d]" />
              </label>
              <label className="flex flex-col gap-2 text-sm text-[#374151]">
                Port
                <input name="port" className="rounded-xl border border-[#dfe7e1] bg-white px-3 py-3 outline-none transition focus:border-[#1a7a4d]" />
              </label>
              <label className="flex flex-col gap-2 text-sm text-[#374151]">
                Packaging
                <input name="packaging" className="rounded-xl border border-[#dfe7e1] bg-white px-3 py-3 outline-none transition focus:border-[#1a7a4d]" />
              </label>
              <label className="flex flex-col gap-2 text-sm text-[#374151]">
                Target Delivery Date
                <input name="targetDeliveryDate" type="date" className="rounded-xl border border-[#dfe7e1] bg-white px-3 py-3 outline-none transition focus:border-[#1a7a4d]" />
              </label>
              <label className="flex flex-col gap-2 text-sm text-[#374151]">
                Preferred Currency
                <select name="currency" defaultValue="USD" className="rounded-xl border border-[#dfe7e1] bg-white px-3 py-3 outline-none transition focus:border-[#1a7a4d]">
                  <option value="USD">USD</option>
                  <option value="EUR">EUR</option>
                  <option value="TZS">TZS</option>
                </select>
              </label>
              <label className="flex flex-col gap-2 text-sm text-[#374151]">
                Incoterm
                <select name="incoterm" defaultValue="FOB" className="rounded-xl border border-[#dfe7e1] bg-white px-3 py-3 outline-none transition focus:border-[#1a7a4d]">
                  <option value="FOB">FOB</option>
                  <option value="CIF">CIF</option>
                  <option value="EXW">EXW</option>
                  <option value="DAP">DAP</option>
                </select>
              </label>
              <label className="flex flex-col gap-2 text-sm text-[#374151] md:col-span-2">
                Additional Requirements
                <textarea name="additionalRequirements" rows={4} className="rounded-xl border border-[#dfe7e1] bg-white px-3 py-3 outline-none transition focus:border-[#1a7a4d]" />
              </label>

              <div className="md:col-span-2">
                <p className="mb-3 text-sm font-semibold text-[#0f3c2f]">Customer type</p>
                <div className="grid gap-2 sm:grid-cols-2 md:grid-cols-3">
                  {[
                    "Importer",
                    "Distributor",
                    "Processor",
                    "Manufacturer",
                    "Retailer",
                    "Food Service",
                    "Other",
                  ].map((type) => (
                    <label key={type} className="flex items-center gap-2 text-sm text-[#374151]">
                      <input type="checkbox" name="customerType" value={type} />
                      {type}
                    </label>
                  ))}
                </div>
              </div>

              <div className="md:col-span-2">
                <button type="submit" className="brand-button brand-button-primary w-full justify-center">
                  Submit export inquiry
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
