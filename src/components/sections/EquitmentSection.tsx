"use client";

import { urlFor } from "@/sanity/lib/client";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

export function EquitmentSection({
  equitment,
}: {
  equitment: {
    name: string;
    image: string;
    size: number;
  }[];
}) {
  const slides = [...equitment, ...equitment, ...equitment];

  return (
    <div className="flex flex-col items-center mt-16 app-container mx-auto">
      <p className="text-base lg:text-lg font-normal text-[#FFFFFF4D]">
        Equipos con los que trabajamos
      </p>
      <div className="equipment-carousel w-full pt-6 overflow-hidden">
        <Swiper
          modules={[Autoplay]}
          slidesPerView="auto"
          loop={true}
          speed={2500}
          autoplay={{ delay: 0, disableOnInteraction: false, pauseOnMouseEnter: false }}
          allowTouchMove={false}
          loopAdditionalSlides={equitment.length}
        >
          {slides.map((item, idx) => (
            <SwiperSlide key={idx} style={{ width: "auto" }}>
              <div className="flex items-center justify-center px-8 ">
                <Image
                  src={urlFor(item.image).url()}
                  width={item.size}
                  height={item.size}
                  alt={item.name}
                  className="opacity-50"
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}
