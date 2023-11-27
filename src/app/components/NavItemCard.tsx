import Image from "next/image";
import Link from "next/link";
import React from "react";

type appProps = {
  bgGradient: string;
};

function NavItemCard({ bgGradient }: appProps) {
  return (
    <Link
      href={"/kitchen"}
      className={`${bgGradient} relative h-[140px] w-full gap-0 overflow-hidden rounded-lg`}
    >
      <div className="absolute flex h-full w-full flex-row-reverse">
        <div className=" relative  h-full w-1/2 ">
          <Image
            src={"https://d2h6dxozyuyc92.cloudfront.net/kitchen.jpg"}
            alt="kitchen"
            fill={true}
            className=" absolute object-cover"
          />
        </div>
      </div>
      <div
        className={` ${bgGradient} z-11 absolute h-full w-full  flex-col justify-center gap-1  text-blue-900 `}
      >
        <div className="w-1/2 p-6">
          <h1 className="text-lg font-medium">منتجات المطبخ</h1>
          <p className="text-lg font-light">اكتشف منتجاتنا الجديدة </p>
        </div>
      </div>
    </Link>
  );
}

export default NavItemCard;
