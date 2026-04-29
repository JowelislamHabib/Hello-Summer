import { getProducts } from "@/lib/data";

export default async function Home() {
  const products = await getProducts();
  console.log(products);
  return (
    <>
      <div>
        <h1>This is homepage</h1>
      </div>
    </>
  );
}
