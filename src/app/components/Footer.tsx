import Link from "next/link";
import React from "react";

function Footer() {
  return (
    <div className="flex w-full flex-col gap-6 bg-slate-100 p-10">
      <h1 className="text-xl font-bold text-blue-900">
        اشترك في مجتمعنا المصغر
      </h1>
      <p className="text-lg font-light text-blue-900">
        !انظم لنا و احصل على أحدث المنتوجات و تخفيضات خاصة
      </p>
      <div className="flex w-full justify-between rounded-full bg-white px-8 py-1 font-light text-blue-900">
        <input
          className="w-full p-4"
          type="text"
          placeholder="ادخل عنوانك الالكتروني..."
        />
        <img
          width="32"
          height="32"
          src="https://img.icons8.com/ios/50/000000/long-arrow-left.png"
          alt="long-arrow-left"
        />
      </div>
      <div className="flex w-4/5 items-center justify-between">
        <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white p-2">
          <img
            width="50"
            height="50"
            src="https://img.icons8.com/ios-filled/50/000000/facebook-new.png"
            alt="facebook-new"
          />
        </div>
        <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white p-2">
          <img
            width="50"
            height="50"
            src="https://img.icons8.com/ios/50/000000/instagram-new--v1.png"
            alt="instagram-new--v1"
          />
        </div>
        <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white p-2">
          <img
            width="50"
            height="50"
            src="https://img.icons8.com/ios-filled/50/000000/whatsapp--v1.png"
            alt="whatsapp--v1"
          />
        </div>
        <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white p-2">
          <img
            width="50"
            height="50"
            src="https://img.icons8.com/ios-filled/50/000000/gmail.png"
            alt="gmail"
          />
        </div>
      </div>
      <div className="flex flex-col gap-4 text-xl font-bold text-blue-900">
        <Link href={"#"}>الأسئلة الأكثر طرحا</Link>
        <Link href={"#"}>آراء المستخدمين</Link>
        <Link href={"#"}>تواصل معنا</Link>
        <Link href={"#"}>عن المتجر</Link>
        <Link href={"#"}>مزايا المشتركين</Link>
      </div>
    </div>
  );
}

export default Footer;
