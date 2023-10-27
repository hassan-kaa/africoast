import Image from "next/image";
import React from "react";

function CategoryCard() {
  return (
    <div className="flex w-full flex-col items-center gap-4 rounded-2xl pb-4 shadow-lg  ">
      <div className="relative aspect-square w-full overflow-hidden rounded-2xl">
        <Image
          alt="category"
          fill={true}
          src={"/hero.jpg"}
          className="absolute object-cover"
        />
      </div>
      <h1 className="text-xl font-bold text-blue-900">عنوان الفئة</h1>
      <button className="flex w-max items-center gap-4 rounded-full bg-slate-200 px-4 py-2 text-blue-900">
        اكتشف المزيد
        <img
          width="32"
          height="32"
          src="https://img.icons8.com/ios/50/000000/long-arrow-left--v1.png"
          alt="long-arrow-left--v1"
        />
      </button>
    </div>
  );
}

export default CategoryCard;
