"use client";

import { useState } from "react";
import { Send } from "lucide-react";
import { whatsappLink } from "@/lib/site-data";

export default function QuoteForm() {
  const [status, setStatus] = useState("");

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);
    const name = String(data.get("fullName") ?? "").trim();
    const company = String(data.get("company") ?? "").trim();
    const email = String(data.get("email") ?? "").trim();
    const need = String(data.get("need") ?? "").trim();
    const message = `Hello Mwarabu Nuts, I am ${name}${company ? ` from ${company}` : ""}. Email: ${email}. I need: ${need}`;
    setStatus("Opening WhatsApp so you can send this inquiry.");
    window.open(whatsappLink(message), "_blank", "noreferrer");
    form.reset();
  }

  return (
    <form onSubmit={handleSubmit} className="grid gap-4 md:grid-cols-2">
      <input name="fullName" required className="rounded-xl border border-[#dfe7e1] bg-white px-3 py-3 text-sm" placeholder="Full name" />
      <input name="company" className="rounded-xl border border-[#dfe7e1] bg-white px-3 py-3 text-sm" placeholder="Company" />
      <input name="email" type="email" required className="rounded-xl border border-[#dfe7e1] bg-white px-3 py-3 text-sm md:col-span-2" placeholder="Business email" />
      <input name="need" required className="rounded-xl border border-[#dfe7e1] bg-white px-3 py-3 text-sm md:col-span-2" placeholder="Product, quantity and destination" />
      <button type="submit" className="brand-button brand-button-primary md:col-span-2 justify-center">
        <Send size={16} className="mr-2" /> Submit inquiry
      </button>
      {status ? <p className="md:col-span-2 text-sm text-[#1a7a4d]">{status}</p> : null}
    </form>
  );
}
