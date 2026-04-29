import { getProducts } from "@/lib/data";
import React from "react";
import { IoStar, IoArrowForward, IoFlameSharp } from "react-icons/io5";
import ProductCard from "./ProductCard";

const PopularProducts = async () => {
  const products = await getProducts();
  const popularProducts = products
    .filter((product) => product.rating >= 4.5)
    .slice(0, 4);

  return (
    <section className="bg-[#FFF4E6] py-16 px-4">
      <div className="container mx-auto">
        <div className="py-5">
          <div className="flex items-center justify-center">
            <div className="flex mb-2 uppercase text-orange-600 font-bold w-fit px-2 py-1 border-2 border-orange-400 rounded-4xl text-sm">
              <span>
                <IoFlameSharp size={22} />
              </span>
              Customer Favorites
            </div>
          </div>
          <h1 className="text-center text-5xl font-bold font-serif antialiased pb-4">
            Popular <span className="text-orange-600">Products</span>
          </h1>
        </div>
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
