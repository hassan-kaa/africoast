import Image from "next/image";
import React from "react";

function Services() {
  return (
    <div className="flex w-[90%] flex-col gap-6 rounded-xl bg-gradient-to-r from-slate-200 to-pink-50 p-4 md:flex-row">
      <div className="flex flex-col items-center gap-4 p-8">
        <Image src={"/next.svg"} width={100} height={100} alt="service" />
        <h1 className="text-2xl font-bold text-blue-900">Service name</h1>
        <p className="text-center text-lg font-light text-blue-900">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Assumenda
          debitis qui quisquam veniam eveniet, ipsa accusantium reiciendis? Iste
          dignissimos, rem dolor laboriosam nobis illum vel, reprehenderit,
          libero voluptas architecto quisquam.
        </p>
      </div>
      <div className="flex flex-col items-center gap-4 p-8">
        <Image src={"/next.svg"} width={48} height={48} alt="service" />
        <h1 className="text-2xl font-bold text-blue-900">Service name</h1>
        <p className="text-center text-lg font-light text-blue-900">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Assumenda
          debitis qui quisquam veniam eveniet, ipsa accusantium reiciendis? Iste
          dignissimos, rem dolor laboriosam nobis illum vel, reprehenderit,
          libero voluptas architecto quisquam.
        </p>
      </div>
      <div className="flex flex-col items-center gap-4 p-8">
        <Image src={"/next.svg"} width={48} height={48} alt="service" />
        <h1 className="text-2xl font-bold text-blue-900">Service name</h1>
        <p className="text-center text-lg font-light text-blue-900">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Assumenda
          debitis qui quisquam veniam eveniet, ipsa accusantium reiciendis? Iste
          dignissimos, rem dolor laboriosam nobis illum vel, reprehenderit,
          libero voluptas architecto quisquam.
        </p>
      </div>
    </div>
  );
}

export default Services;
