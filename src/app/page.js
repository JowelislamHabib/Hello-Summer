import AllProducts from "@/components/AllProducts";
import Brands from "@/components/Brands";
import HeroSlider from "@/components/HeroSlider";
import PopularProducts from "@/components/PopularProducts";
import Tips from "@/components/Tips";
import { getProducts } from "@/lib/data";

export default async function Home() {
  const products = await getProducts();
  console.log(products);
  return (
    <>
      <HeroSlider />
      <PopularProducts />
      <Tips />
      <AllProducts />
      <Brands />
    </>
  );
}
