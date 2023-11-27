import Image from "next/image";
import React from "react";

function Services() {
  return (
    <div className="flex w-[90%] flex-col gap-6 rounded-xl bg-gradient-to-r from-slate-200 to-pink-50 p-4 md:flex-row">
      <h1 className="text-center text-2xl font-bold text-blue-900"> خدماتنا</h1>
      <div className="flex flex-col items-center gap-4 p-8">
        <Image
          src={"https://img.icons8.com/ios-filled/100/delivery--v1.png"}
          width={80}
          height={80}
          alt="delivery"
        />
        <h1 className="text-2xl font-bold text-blue-900">التوصيل مجاني</h1>
        <p className="text-center text-lg font-light text-blue-900">
          نقدم لكم توصيل مجاني لكامل تراب الجمهورية في مدة وجيزة
        </p>
      </div>
      <div className="flex flex-col items-center gap-4 p-8">
        <Image
          src={"https://img.icons8.com/ios-filled/100/card-in-use.png"}
          width={80}
          height={80}
          alt="Payment"
        />
        <h1 className="text-2xl font-bold text-blue-900">الدفع عند الإستلام</h1>
        <p className="text-center text-lg font-light text-blue-900">
          يتم الدفع فقط عند التوصيل طلبكم
        </p>
      </div>
      <div className="flex flex-col items-center gap-4 p-8">
        <Image
          src={"https://img.icons8.com/ios-filled/100/service.png"}
          width={80}
          height={80}
          alt="service"
        />
        <h1 className="text-2xl font-bold text-blue-900">خدمات الحريف</h1>
        <p className="text-center text-lg font-light text-blue-900">
          لدينا فريق دعم على مدار الساعة و طول أيام الأسبوع على إستعداد للإجابة
          على اسئلتكم
        </p>
      </div>
    </div>
  );
}

export default Services;
