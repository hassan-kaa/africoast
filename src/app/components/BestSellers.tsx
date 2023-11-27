import React from "react";
import BestSellerCard from "./BestSellerCard";
import Carousel from "./Carousel";

function BestSellers() {
  return (
    <div className="flex w-full flex-col gap-4  ">
      <h1 className="text-3xl font-bold text-blue-900">
        المنتجات الأكثر مبيعا
      </h1>
      <Carousel>
        <BestSellerCard />
        <BestSellerCard />
        <BestSellerCard />
      </Carousel>
    </div>
  );
}

export default BestSellers;
