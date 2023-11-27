import React from "react";
import Carousel from "./Carousel";
import BlogCard from "./BlogCard";

function Blogs() {
  return (
    <div className="flex w-full flex-col gap-4  ">
      <h1 className="text-3xl font-bold text-blue-900">اقرأ عن منتجاتنا</h1>
      <Carousel>
        <BlogCard />
        <BlogCard />
        <BlogCard />
        <BlogCard />
      </Carousel>
    </div>
  );
}

export default Blogs;
