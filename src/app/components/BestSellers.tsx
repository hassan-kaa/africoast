import React from "react";
import BestSellerCard from "./BestSellerCard";

function BestSellers() {
  return (
    <div className="flex w-full flex-col gap-4 p-8 ">
      <h1 className="text-3xl font-bold text-blue-900">
        المنتجات الأكثر مبيعا
      </h1>
      <div className="grid w-full grid-cols-1 gap-4  md:grid-cols-2 lg:grid-cols-3 lg:gap-8">
        <BestSellerCard />
        <BestSellerCard />
        <BestSellerCard />
      </div>
    </div>
  );
}

export default BestSellers;
