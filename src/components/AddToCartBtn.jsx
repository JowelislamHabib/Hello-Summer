import React from "react";
import { IoCartOutline } from "react-icons/io5";

const AddToCartBtn = () => {
  return (
    <button
      onPress={() =>
        toast.success("You have upgraded your plan", {
          actionProps: {
            children: "Billing",
            className: "bg-success text-success-foreground",
          },
          description: "You can continue using HeroUI Chat",
        })
      }
      className="w-full py-5 bg-stone-900 text-stone-50 rounded-xl font-bold text-sm uppercase tracking-[0.2em] flex items-center justify-center gap-3 hover:bg-orange-500 transition-all active:scale-[0.98] shadow-xl shadow-stone-200 cursor-pointer"
    >
      <IoCartOutline size={20} />
      Add to Cart
    </button>
  );
};

export default AddToCartBtn;
