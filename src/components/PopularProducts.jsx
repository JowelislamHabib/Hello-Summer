import { getProducts } from "@/lib/data";
import React from "react";
import { IoStar, IoArrowForward } from "react-icons/io5";
import ProductCard from "./ProductCard";

const PopularProducts = async () => {
  const products = await getProducts();
  const popularProducts = products
    .filter((product) => product.rating >= 4.5)
    .slice(0, 4);

  return (
    <section className="bg-[#FFF4E6] py-16 px-4">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 ">
          {popularProducts.map((product) => (
            <div key={product.id}>
              <ProductCard product={product} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PopularProducts;
