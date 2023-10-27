import Image from "next/image";
import Link from "next/link";
import React from "react";

function CarouselCard() {
  return (
    <div className="flex min-w-[320px] flex-col gap-2">
      <div className="relative aspect-square w-full rounded-lg">
        <Image
          src={"/hero.jpg"}
          alt="image"
          fill={true}
          className="absolute rounded-lg object-cover"
        />
      </div>
      <div className="flex w-full flex-col gap-2 p-4">
        <h1 className="w-full text-lg text-blue-900">
          ابدع واستمتع بتجربة فريدة مع تابلت الرسم والكتابة على شاشة الكريستال
          السائل!
        </h1>
        <Link href={"#"} className="text-lg text-blue-900 underline">
          اكتشف المزيد
        </Link>
      </div>
    </div>
  );
}

export default CarouselCard;
