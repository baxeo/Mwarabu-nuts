import { mkdir, readFile, rename, writeFile } from "node:fs/promises";
import path from "node:path";
import { products as seedProducts, type Product } from "@/lib/site-data";

const dataDirectory = path.join(process.cwd(), "data");
const productsPath = path.join(dataDirectory, "products.json");

export async function getProducts(): Promise<Product[]> {
  try {
    const contents = await readFile(productsPath, "utf8");
    return JSON.parse(contents) as Product[];
  } catch (error) {
    if ((error as NodeJS.ErrnoException).code === "ENOENT") {
      return seedProducts;
    }
    throw error;
  }
}

export async function saveProducts(nextProducts: Product[]): Promise<void> {
  await mkdir(dataDirectory, { recursive: true });
  const temporaryPath = `${productsPath}.tmp`;
  await writeFile(temporaryPath, JSON.stringify(nextProducts, null, 2), "utf8");
  await rename(temporaryPath, productsPath);
}