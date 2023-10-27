"use client";
import Image from "next/image";
import React, { useState } from "react";
import NavItemCard from "./NavItemCard";
import Link from "next/link";

function Navbar() {
  const [toggle, setToggle] = useState(false);
  return (
    <div className="absolute z-10 flex w-full flex-col  gap-0 shadow-lg">
      <nav className="flex w-full items-center justify-between bg-white px-8 py-4">
        <div
          className="cursor-pointer"
          onClick={() => setToggle((prev) => !prev)}
        >
          {toggle == false ? (
            <Image
              width={32}
              height={32}
              src="https://img.icons8.com/fluency/48/000000/menu--v3.png"
              alt="menu--v3"
            />
          ) : (
            <Image
              width={32}
              height={32}
              src="https://img.icons8.com/ios-filled/50/000000/delete-sign--v1.png"
              alt="delete-sign"
            />
          )}
        </div>

        <h2 className="text-xl font-bold text-blue-800">Africoast</h2>

        <Image
          width={32}
          height={32}
          src="https://img.icons8.com/pastel-glyph/48/000000/shopping-cart--v2.png"
          alt="shopping-cart--v2"
        />
      </nav>
      {toggle && (
        <div className="flex min-h-[80vh] w-full flex-col gap-4 bg-white p-6">
          <NavItemCard bgGradient={"bg-custom-gradient-2"} />
          <NavItemCard bgGradient={"bg-custom-gradient-3"} />
          <NavItemCard bgGradient={"bg-custom-gradient-4"} />
          <button className="border-1 flex w-max items-center gap-4 rounded-full border-blue-900 bg-white px-4 py-2 text-blue-900 hover:bg-slate-50">
            جميع الفئات
            <img
              width="32"
              height="32"
              src="https://img.icons8.com/ios/50/000000/long-arrow-left--v1.png"
              alt="long-arrow-left--v1"
            />
          </button>
          <Link href={"#"} className=" font-bold text-blue-900">
            الأسئلة الأكثر طرحا
          </Link>
          <Link href={"#"} className=" font-bold text-blue-900">
            المنجات الجديدة
          </Link>
          <Link href={"#"} className=" font-bold text-blue-900">
            التخفيضات{" "}
          </Link>
          <Link href={"#"} className=" font-bold text-blue-900">
            تسجيل الدخول{" "}
          </Link>
        </div>
      )}
    </div>
  );
}

export default Navbar;
