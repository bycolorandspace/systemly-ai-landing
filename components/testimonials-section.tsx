import { Testimonial } from "@/types/general-types";
import TestimonialItem from "./testimonial-item";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import React from "react";

export default function TestimonialsSection({ data }: { data: Testimonial[] }) {
  const plugin = React.useRef(
    Autoplay({ delay: 4000, stopOnInteraction: true })
  );

  return (
    <section className="flex flex-col items-center justify-center w-full max-w-6xl px-4 py-8 min-h-screen">
      <h3 className="text-sm text-secondary mb-4">
        Traders are already winning
      </h3>
      <h2 className="text-4xl font-medium text-primary mb-8">
        What traders say
      </h2>
      {/* {Mobile testimonial} */}
      <div className="md:hidden w-full max-w-md">
        {
          data.map((testimonial, index) => (
            <div key={index} className="mb-8 last:mb-0">
              <TestimonialItem
                description={testimonial.description}
                name={testimonial.name}
                title={testimonial.title}
              />
            </div>
          ))[0] /* Show only the first testimonial on mobile */
        }
      </div>
      {/* Carousel for testimonials */}
      <Carousel
        plugins={[plugin.current]}
        className="hidden md:flex w-full max-w-xl"
        onMouseEnter={plugin.current.stop}
        onMouseLeave={plugin.current.reset}
      >
        <CarouselContent>
          {data.map((testimonial, index) => (
            <CarouselItem key={index}>
              <TestimonialItem
                description={testimonial.description}
                name={testimonial.name}
                title={testimonial.title}
              />
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </section>
  );
}
