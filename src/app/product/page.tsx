"use client";
import Image from "next/image";
import React from "react";
import { NextUIProvider } from "@nextui-org/react";
function Product() {
  return (
    <NextUIProvider>
      <div className="flex w-full flex-col  gap-4 ">
        <div className="w-full bg-slate-100 p-12">
          <div className="relative flex aspect-square w-full  items-center justify-center ">
            <Image
              src={"/product.png"}
              alt="product"
              fill={true}
              className="absolute object-contain"
            />
          </div>
        </div>
        <div className="flex w-full flex-col gap-4 bg-white p-4 ">
          <h1 className="text-xl font-bold text-blue-900">اسم المنتج</h1>
          <h2 className="text-lg font-medium text-blue-900">49 دينار </h2>
          <h2 className="text-sm font-light text-blue-900">
            ستارة المظلة هي ملحق أساسي لحماية سيارتك من أشعة الشمس والحرارة
            وأعين المتطفلين. تم تصميم هذه الستارة بحيث يسهل تركيبها واستخدامها
            مصنوعة من مواد عالية الجودة ، ستارة الظل الشمسية متينة ومقاومة
            للعوامل الجوية ، مما يجعلها مثالية للاستخدام في الهواء الطلق. كما أن
            لديها طبقة من الأشعة فوق
          </h2>
          <button className="flex w-full justify-center rounded-lg bg-blue-900 p-4 font-bold text-white hover:bg-blue-800">
            اظف للمشتريات
          </button>
          <h2 className="text-center text-sm font-light text-green-700">
            التوصيل مجاني كامل تراب الجمهورية 📍
          </h2>
        </div>
      </div>
    </NextUIProvider>
  );
}

export default Product;
