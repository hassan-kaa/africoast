import Hero from "./components/Hero";

import Categories from "./components/Categories";
import BestSellers from "./components/BestSellers";
import Services from "./components/Services";
import Carousel from "./components/Carousel";
import CarouselCard from "./components/CarouselCard";

export default function Home() {
  return (
    <div className="m-0 flex flex-col items-center gap-2 ">
      {/* <Hero />
      <Categories />
      <Services />
      <BestSellers /> */}
      <Carousel>
        <CarouselCard />
        <CarouselCard />
        <CarouselCard />
        <CarouselCard />
      </Carousel>
    </div>
  );
}
