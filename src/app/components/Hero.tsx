import React from "react";
import Image from "next/image";
function Hero() {
  return (
    <div className=" mt-12 w-full">
      <div className="relative  aspect-custom w-full overflow-hidden md:aspect-video">
        <Image
          src={"https://d2h6dxozyuyc92.cloudfront.net/hero.jpg"}
          alt="hero"
          fill={true}
          className="absolute object-cover"
        />
        <div className=" absolute aspect-custom w-full bg-custom-gradient md:aspect-video"></div>
        <div className=" absolute left-0 top-0 flex w-full flex-col items-center justify-center gap-2 rounded-2xl bg-slate-100  bg-opacity-25 p-6 text-white">
          <div className="relative h-20 w-16">
            <Image
              alt="palestine"
              fill={true}
              className="objec-cover absolute"
              src={"https://d2h6dxozyuyc92.cloudfront.net/palestine.png"}
            />
          </div>
          <h1 className="text-3xl font-bold">
            <span className="text-black">نحن</span>
            {" نقف "}
            <span className="text-green-700">مع</span>{" "}
            <span className="text-red-700">فلسطين</span> !
          </h1>
          <p className="text-center font-light  ">
            نتبرع بدينار من كل عملية شراء لاخواننا في غزة عن طريق الهلال الأحمر
            التونسي . ان شاء الله في ميزان حسناتكم
          </p>
          {/*<p className="font-light">تبرع عن طريق الهلال الأحمر التونسي</p>
           <button className=" rounded-full bg-white px-6 py-2 text-blue-900 hover:bg-slate-200">
            تبرع الآن
          </button> */}
        </div>
        <div className="absolute bottom-0 left-0  flex w-full flex-col gap-4 p-6 text-white">
          <h1 className="text-3xl font-bold">نزلة وحدة و كل شيء بين يديك</h1>
          <p className="font-light">
            {" "}
            نقدم لكم منتوجات أصلية و ذات جودة عالية مع توصيل مجاني لكامل تراب
            الجمهورية
          </p>
          <button className="flex w-max items-center gap-4 rounded-full bg-white p-4 text-blue-900 hover:bg-slate-200">
            اكتشف الآن
            <img
              width="32"
              height="32"
              src="https://img.icons8.com/ios/50/000000/long-arrow-left--v1.png"
              alt="long-arrow-left--v1"
            />
          </button>
        </div>
      </div>
    </div>
  );
}

export default Hero;
