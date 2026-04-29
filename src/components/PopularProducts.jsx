import React from "react";
import { IoStar, IoArrowForward } from "react-icons/io5";

const products = [
  {
    id: 1,
    name: "Classic Linen Shirt",
    price: 89.0,
    rating: 4.8,
    image:
      "https://images.unsplash.com/photo-1594932224016-046085259994?q=80&w=800&auto=format&fit=crop",
  },
  {
    id: 2,
    name: "Ocean Breeze Shorts",
    price: 55.0,
    rating: 4.9,
    image:
      "https://images.unsplash.com/photo-1591195853828-11db59a44f6b?q=80&w=800&auto=format&fit=crop",
  },
  {
    id: 3,
    name: "Tropical Straw Hat",
    price: 42.0,
    rating: 4.7,
    image:
      "https://images.unsplash.com/photo-1521311587563-6a3fb9fbafa7?q=80&w=800&auto=format&fit=crop",
  },
];

const PopularProducts = () => {
  return (
    <section className="bg-[#FAF8F1] py-16 px-4">
      <div className="container mx-auto">
        <div className="flex justify-between items-end mb-10">
          <div>
            <h2 className="text-3xl md:text-4xl font-serif text-[#1C1007] mb-2">
              Popular Products
            </h2>
            <p className="text-[#1C1007]/60">
              Our most-loved summer essentials.
            </p>
          </div>
          <button className="text-[#FD6C17] font-bold flex items-center gap-2 hover:underline">
            View All <IoArrowForward />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {products.map((product) => (
            <div
              key={product.id}
              className="group bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-[#E8E4D8]"
            >
              {/* Product Image */}
              <div className="relative aspect-[4/5] overflow-hidden bg-[#E8E4D8]">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full flex items-center gap-1 shadow-sm">
                  <IoStar className="text-[#FBA919]" />
                  <span className="text-sm font-bold text-[#1C1007]">
                    {product.rating}
                  </span>
                </div>
              </div>

              {/* Product Info */}
              <div className="p-6">
                <h3 className="text-xl font-medium text-[#1C1007] mb-2">
                  {product.name}
                </h3>
                <div className="flex items-center justify-between mb-6">
                  <span className="text-2xl font-bold text-[#FD6C17]">
                    ${product.price.toFixed(2)}
                  </span>
                  <span className="text-sm text-[#1C1007]/40">
                    Free Shipping
                  </span>
                </div>

                {/* View Details Button */}
                <button className="w-full py-3 rounded-xl border-2 border-[#1C1007] text-[#1C1007] font-bold hover:bg-[#1C1007] hover:text-white transition-colors duration-300">
                  View Details
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PopularProducts;
