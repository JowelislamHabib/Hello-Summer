import { getProducts } from "@/lib/data";
import React from "react";
import { IoStar, IoArrowForward } from "react-icons/io5";
import ProductCard from "./ProductCard";

const PopularProducts = async () => {
  const products = await getProducts();

  return (
    <section className="bg-[#FAF8F1] py-16 px-4">
      <di className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 container mx-auto">
        {products.map((product) => (
          <div key={product.id}>
            <ProductCard product={product} />
          </div>
        ))}
      </di>
    </section>
  );
};

export default PopularProducts;
