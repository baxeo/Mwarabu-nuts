'use client';

import Image from "next/image";
import { useEffect, useState } from "react";
import { LogOut, Plus, Save, Trash2 } from "lucide-react";
import type { Product } from "@/lib/site-data";

const inputClass = "w-full rounded-lg border border-[#dfe7e1] bg-white px-3 py-2.5 text-sm text-[#1f2937]";

function newProduct(): Product {
  const id = crypto.randomUUID();
  return {
    id,
    slug: `new-product-${id.slice(0, 8)}`,
    name: "New cashew product",
    category: "Cashew products",
    description: "",
    grade: "",
    origin: "Tanzania",
    processing: "",
    availability: "Available on request",
    stockQuantity: "0 kg",
    retailPrice: "",
    wholesaleFrom: "",
    exportMOQ: "15 MT",
    packaging: "",
    lastUpdated: new Date().toISOString().slice(0, 10),
  };
}

export default function AdminPage() {
  const [authenticated, setAuthenticated] = useState(false);
  const [checkingSession, setCheckingSession] = useState(true);
  const [password, setPassword] = useState("");
  const [products, setProducts] = useState<Product[]>([]);
  const [selectedId, setSelectedId] = useState("");
  const [saving, setSaving] = useState(false);
  const [uploading, setUploading] = useState(false);
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");
  const selected = products.find((product) => product.id === selectedId);

  async function loadProducts() {
    const response = await fetch("/api/admin/products", { cache: "no-store" });
    if (!response.ok) throw new Error("Could not load products.");
    const records = await response.json() as Product[];
    setProducts(records);
    setSelectedId((current) => current || records[0]?.id || "");
  }

  useEffect(() => {
    fetch("/api/admin/session")
      .then((response) => response.json())
      .then(async ({ authenticated: isAuthenticated }: { authenticated: boolean }) => {
        if (isAuthenticated) {
          setAuthenticated(true);
          await loadProducts();
        }
      })
      .catch(() => setError("Could not connect to the admin service."))
      .finally(() => setCheckingSession(false));
  }, []);

  async function signIn(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setError("");
    const response = await fetch("/api/admin/session", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ password }),
    });
    const result = await response.json();
    if (!response.ok) {
      setError(result.error ?? "Sign-in failed.");
      return;
    }
    setAuthenticated(true);
    setPassword("");
    await loadProducts();
  }

  function updateField(field: keyof Product, value: string) {
    if (!selected) return;
    setProducts((current) => current.map((product) =>
      product.id === selected.id ? { ...product, [field]: value } : product
    ));
    setMessage("");
  }

  function addProduct() {
    const product = newProduct();
    setProducts((current) => [...current, product]);
    setSelectedId(product.id);
    setMessage("New product added. Save changes to publish it.");
  }

  function removeProduct() {
    if (!selected || !window.confirm(`Remove ${selected.name} from the catalogue?`)) return;
    const remaining = products.filter((product) => product.id !== selected.id);
    setProducts(remaining);
    setSelectedId(remaining[0]?.id ?? "");
    setMessage("Product removed from the draft. Save changes to confirm.");
  }

  async function saveChanges() {
    setSaving(true);
    setError("");
    setMessage("");
    try {
      const response = await fetch("/api/admin/products", {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(products),
      });
      const result = await response.json();
      if (!response.ok) throw new Error(result.error ?? "Could not save changes.");
      setProducts(result as Product[]);
      setMessage("Changes saved and published to the storefront.");
    } catch (saveError) {
      setError(saveError instanceof Error ? saveError.message : "Could not save changes.");
    } finally {
      setSaving(false);
    }
  }

  async function uploadImage(file: File | undefined) {
    if (!file || !selected) return;
    setUploading(true);
    setError("");
    const formData = new FormData();
    formData.set("file", file);
    try {
      const response = await fetch("/api/admin/upload", { method: "POST", body: formData });
      const result = await response.json();
      if (!response.ok) throw new Error(result.error ?? "Image upload failed.");
      updateField("image", result.image);
      setMessage("Image uploaded. Save changes to publish it with this product.");
    } catch (uploadError) {
      setError(uploadError instanceof Error ? uploadError.message : "Image upload failed.");
    } finally {
      setUploading(false);
    }
  }

  async function signOut() {
    await fetch("/api/admin/session", { method: "DELETE" });
    setAuthenticated(false);
    setProducts([]);
    setSelectedId("");
  }

  if (checkingSession) {
    return <div className="section-shell py-20 text-sm text-[#4b5563]">Checking admin access...</div>;
  }

  if (!authenticated) {
    return (
      <div className="section-shell flex min-h-[65vh] items-center justify-center py-12">
        <form onSubmit={signIn} className="w-full max-w-md border-l-4 border-[#1a7a4d] bg-[#f9faf8] p-7">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#1a7a4d]">MWARABU NUTS</p>
          <h1 className="mt-3 text-3xl font-bold text-[#0f3c2f]">Admin sign in</h1>
          <label className="mt-6 block text-sm font-medium text-[#374151]" htmlFor="admin-password">Password</label>
          <input id="admin-password" type="password" autoComplete="current-password" required value={password} onChange={(event) => setPassword(event.target.value)} className={`${inputClass} mt-2`} />
          {error && <p role="alert" className="mt-3 text-sm text-red-700">{error}</p>}
          <button className="brand-button brand-button-primary mt-5 w-full justify-center" type="submit">Sign in</button>
        </form>
      </div>
    );
  }

  return (
    <div className="section-shell py-10 md:py-14">
      <header className="mb-8 flex flex-wrap items-end justify-between gap-4 border-b border-[#dfe7e1] pb-5">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#1a7a4d]">Store management</p>
          <h1 className="mt-2 text-3xl font-bold text-[#0f3c2f]">Products, stock & pricing</h1>
        </div>
        <div className="flex gap-2">
          <button type="button" onClick={addProduct} className="brand-button brand-button-secondary"><Plus size={16} className="mr-2" /> Add product</button>
          <button type="button" onClick={signOut} aria-label="Sign out" title="Sign out" className="brand-button brand-button-secondary px-3"><LogOut size={17} /></button>
        </div>
      </header>

      <div className="grid gap-8 lg:grid-cols-[250px_minmax(0,1fr)]">
        <aside>
          <h2 className="mb-3 text-xs font-semibold uppercase tracking-[0.16em] text-[#6b7280]">Product catalogue ({products.length})</h2>
          <div className="divide-y divide-[#dfe7e1] border-y border-[#dfe7e1]">
            {products.map((product) => (
              <button key={product.id} type="button" onClick={() => setSelectedId(product.id)} className={`w-full px-3 py-3 text-left ${selectedId === product.id ? "bg-[#edf7f1] text-[#0f3c2f]" : "text-[#4b5563] hover:bg-[#f9faf8]"}`}>
                <span className="block text-sm font-semibold">{product.name}</span>
                <span className="mt-1 block text-xs">Stock: {product.stockQuantity}</span>
              </button>
            ))}
          </div>
        </aside>

        {selected ? (
          <section className="min-w-0">
            <div className="mb-5 flex flex-wrap items-center justify-between gap-3 border-b border-[#dfe7e1] pb-4">
              <h2 className="text-xl font-semibold text-[#0f3c2f]">Edit product details</h2>
              <button type="button" onClick={removeProduct} className="inline-flex items-center gap-2 px-2 py-2 text-sm text-red-700 hover:bg-red-50"><Trash2 size={16} /> Remove</button>
            </div>

            <div className="mb-6 grid gap-5 md:grid-cols-[180px_1fr]">
              <div className="relative flex aspect-square items-center justify-center overflow-hidden rounded-lg border border-[#dfe7e1] bg-[#edf7f1]">
                {selected.image ? <Image src={selected.image} alt={`${selected.name} product`} fill unoptimized className="object-cover" sizes="180px" /> : <span className="px-4 text-center text-sm text-[#4b5563]">No product photo</span>}
              </div>
              <div className="flex flex-col justify-center gap-3">
                <label htmlFor="product-photo" className="text-sm font-semibold text-[#0f3c2f]">Product photo</label>
                <input id="product-photo" type="file" accept="image/jpeg,image/png,image/webp" onChange={(event) => void uploadImage(event.target.files?.[0])} className="block w-full text-sm text-[#4b5563] file:mr-3 file:rounded-md file:border-0 file:bg-[#edf7f1] file:px-3 file:py-2 file:font-semibold file:text-[#0f3c2f]" />
                <p className="text-xs text-[#6b7280]">JPG, PNG or WebP, maximum 5 MB. {uploading ? "Uploading..." : ""}</p>
                {selected.image && <button type="button" onClick={() => updateField("image", "")} className="w-fit text-xs text-red-700 underline">Remove current photo</button>}
              </div>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {([
                ["name", "Product name"], ["slug", "URL slug"], ["category", "Category"], ["grade", "Grade / specification"],
                ["origin", "Origin"], ["processing", "Processing"], ["availability", "Availability"], ["stockQuantity", "Stock quantity / available volume"],
                ["retailPrice", "Retail price"], ["wholesaleFrom", "Wholesale price"], ["exportMOQ", "Export minimum order"], ["packaging", "Packaging"],
              ] as const).map(([field, label]) => (
                <label key={field} className="block text-sm font-medium text-[#374151]">{label}
                  <input className={`${inputClass} mt-1.5`} value={selected[field] ?? ""} onChange={(event) => updateField(field, event.target.value)} />
                </label>
              ))}
              <label className="block text-sm font-medium text-[#374151] sm:col-span-2">Product description
                <textarea className={`${inputClass} mt-1.5 min-h-24`} value={selected.description} onChange={(event) => updateField("description", event.target.value)} />
              </label>
            </div>

            <footer className="mt-6 flex flex-wrap items-center gap-4 border-t border-[#dfe7e1] pt-5">
              <button type="button" onClick={() => void saveChanges()} disabled={saving || uploading} className="brand-button brand-button-primary"><Save size={16} className="mr-2" /> {saving ? "Saving..." : "Save and publish"}</button>
              <span className="text-xs text-[#6b7280]">Last updated: {selected.lastUpdated}</span>
              {message && <p role="status" className="text-sm text-green-800">{message}</p>}
              {error && <p role="alert" className="text-sm text-red-700">{error}</p>}
            </footer>
          </section>
        ) : (
          <p className="py-8 text-sm text-[#4b5563]">No products yet. Add a product to start your catalogue.</p>
        )}
      </div>
    </div>
  );
}
