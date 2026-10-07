"use client";

import { Printer } from "lucide-react";

export default function PrintPricesButton() {
  return (
    <button type="button" onClick={() => window.print()} className="brand-button brand-button-primary">
      <Printer size={16} className="mr-2" /> Print / Save as PDF
    </button>
  );
}
