import Image from "next/image";
import React from "react";

function BestSellerCard() {
  return (
    <div className="flex w-full flex-col items-center gap-4 overflow-hidden rounded-xl bg-slate-100 p-4">
      <div className="relative aspect-square w-full p-4">
        <Image
          src={"/product.png"}
          alt="best-seller"
          fill={true}
          className="absolute object-cover"
        />
      </div>
      <h1 className="text xl font-bold text-blue-900">إسم المنتج</h1>
      <h2 className="text-lg font-light text-blue-800">اسم الفئة</h2>
      <h2 className="text-lg font-light text-blue-800">السعر : 29د</h2>
    </div>
  );
}

export default BestSellerCard;
