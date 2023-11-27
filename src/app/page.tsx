import Hero from "./components/Hero";

import Categories from "./components/Categories";
import BestSellers from "./components/BestSellers";
import Services from "./components/Services";
import Blogs from "./components/Blogs";

export default function Home() {
  return (
    <div className="m-0 flex flex-col items-center gap-2 ">
      <Hero />
      <Categories />
      <BestSellers />
      <Services />
      <Blogs />
    </div>
  );
}
