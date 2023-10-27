import React from "react";
import CategoryCard from "./CategoryCard";

function Categories() {
  return (
    <div className="flex w-full flex-col gap-4 p-8 ">
      <h1 className="text-3xl font-bold text-blue-900">الفئات</h1>
      <div className="grid w-full grid-cols-1 gap-4  md:grid-cols-2 lg:grid-cols-3 lg:gap-8">
        <CategoryCard />
        <CategoryCard />
        <CategoryCard />
        <CategoryCard />
      </div>
    </div>
  );
}

export default Categories;
