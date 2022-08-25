import React from "react";
import Carousel from "./carousel";
import CarouselItem from "./carousel-item";
import Review from "./review";

const Testimonials: React.FC = () =>
  <Carousel className="bg-black text-white py-10 lg:py-20">
    <CarouselItem index={0}>
      <Review by="Profa Besnik">
        Ky grup gjithmone kan bo projekte fantastike dhe gjithmone i kam notu me pike maksimale.
      </Review>
    </CarouselItem>
    <CarouselItem index={1}>
      <Review by="Pixendriti">
        Agjencia ma e forte n&apos;bote per Kosove
      </Review>
    </CarouselItem>
    <CarouselItem index={2}>
      <Review by="Arditi">
        Nuk do ja kishim dalur dot pa ndihmen e Stackoverflow&apos;it
      </Review>
    </CarouselItem>
    <CarouselItem index={3}>
      <Review by="Profa Betim">
        A ka mundesi te Merkuren me shty per te Enjten?
      </Review>
    </CarouselItem>
    <CarouselItem index={4}>
      <Review by="Fyodor Dostoyevski">
        They go above and beyond to make sure you know what is being done and what it means for your business.
      </Review>
    </CarouselItem>
    <CarouselItem index={5}>
      <Review by="Migjeni">
        Veri fryne dhe me acarim u premton pallate te kristalta kojshive te mije qe ua kande shume andrrat e thata
      </Review>
    </CarouselItem>
  </Carousel>;

export default Testimonials;

