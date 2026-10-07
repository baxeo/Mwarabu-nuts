import type { Metadata } from "next";
import { fobGradePrices } from "@/lib/site-data";
import PrintPricesButton from "@/components/PrintPricesButton";

export const metadata: Metadata = {
  title: "FOB Grade Prices | MWARABU NUTS",
  description: "FOB prices in USD per kilo of cashew kernel by grade.",
};

export default function FobPricesPage() {
  return (
    <div className="section-shell py-10 md:py-16">
      <div className="fob-price-document mx-auto max-w-4xl">
        <div className="fob-price-controls mb-6 flex flex-col gap-4 border-b border-[#dfe7e1] pb-5 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="mb-2 text-sm font-semibold uppercase tracking-[0.18em] text-[#1a7a4d]">
              Export grade schedule
            </p>
            <h1 className="text-3xl font-bold text-[#0f3c2f] md:text-4xl">
              FOB cashew prices
            </h1>
            <p className="mt-2 text-sm text-[#4b5563]">
              All prices are USD per kilogram of kernel.
            </p>
          </div>
          <PrintPricesButton />
        </div>

        <h1 className="fob-price-title mb-4 hidden text-2xl font-bold text-black print:block">
          Grade Designation Grade Prices (USD)
        </h1>
        <div id="grade-prices" className="overflow-x-auto">
          <table className="fob-price-table min-w-[520px]">
            <thead>
              <tr>
                <th scope="col">S/NO</th>
                <th scope="col">Grade Designation</th>
                <th scope="col">Grade prices (USD)</th>
              </tr>
            </thead>
            <tbody>
              {fobGradePrices.map(({ grade, price }, index) => (
                <tr key={grade}>
                  <td>{index + 1}</td>
                  <td>{grade}</td>
                  <td>{price.toFixed(2)}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <section id="price-remarks" className="fob-price-remarks mt-8 p-4">
          <h2 className="mb-2 border-b-2 border-black pb-2 text-lg font-semibold">
            REMARKS
          </h2>
          <div className="space-y-1 text-sm leading-6 md:text-base">
            <p>Price is FOB Price, Dar es port as a discharge port.</p>
            <p>FOB Price is calculated per Kilo of Kernel.</p>
            <p>FOB Price does not includes either port charges except those paid to Clearing agent.</p>
            <p>FOB Price does not includes SGS certification charges.</p>
          </div>
        </section>
      </div>
    </div>
  );
}
