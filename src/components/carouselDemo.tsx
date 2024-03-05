import * as React from "react";


import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const Array = [
  { url: "img/Layer-1065.png", alt: "layer-1065" },
  { url: "img/Layer-1066.png", alt: "layer-1066" },
  { url: "img/Layer-1067.png", alt: "layer-1066" },
  { url: "img/Layer-1068.png", alt: "layer-1066" },
  { url: "img/Layer-1069.png", alt: "layer-1066" },
  { url: "img/Layer-1070.png", alt: "layer-1066" },
  { url: "img/Layer-1071.png", alt: "layer-1066" },
  { url: "img/Layer-1075.png", alt: "layer-1066" },
  { url: "img/Layer-1076.png", alt: "layer-1066" },
  { url: "img/Layer-1077.png", alt: "layer-1066" },
];

export function CarouselSize() {
  return (
    <Carousel
      opts={{
        align: "center",
        loop:true,
    
       

      }}
      className="w-full max-w-screen-md"
    >
      <CarouselContent>
        {Array.map((item:any, index) => (
          <CarouselItem key={index} className="md:basis-6/12 lg:basis-4/12">
            <div className="p-1">
              <div className=" flex justify-center items-center h-44 object-cover">
                
                  {/* <span className="text-3xl font-semibold">{index + 1}</span> */}
                  <img className=" object-cover" src={item.url} alt={item.alt}/>
                
              </div>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
}
