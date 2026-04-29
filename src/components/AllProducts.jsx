import { getProducts } from "@/lib/data";
import React from "react";
import ProductCard from "./ProductCard";
import Link from "next/link";
import { AiOutlineArrowRight } from "react-icons/ai";

const AllProducts = async () => {
  const products = await getProducts();
  console.log(products, "--- All Products ---");
  const { name, brand, price, rating, image, stock, category } = products;

  return (
    <div className="bg-orange-50">
      <div className="container mx-auto px-4 py-12">
        <div className="flex justify-between items-center">
          <div className="mb-12 border-l-8 border-[#1C1007] pl-6">
            <h2 className="md:text-5xl text-5xl font-bold font-serif text-[#1C1007] tracking-tight">
              All <span className="text-orange-500">Products</span>
            </h2>
            <p className="text-gray-900/60 mt-2 font-medium">
              Explore our full range of summer essentials.
            </p>
          </div>
          <Link
            href={"/products"}
            className="text-lg border-2 border-orange-200 px-4 py-1 rounded-xl font-medium text-orange-500 hover:underline"
          >
            View All Products
            <AiOutlineArrowRight className="inline-block ml-1" />
          </Link>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {products.map((product) => (
            <div key={product.id}>
              <ProductCard product={product} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AllProducts;
