"use client";
import React, { useState } from "react";
import { proyect } from "@/types/service";
import { A11y, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { ProyectsSlide } from "./ProyectsSlide";
import Image from "next/image";

export const ProyectCarousel = ({ proyects }: { proyects: proyect[] }) => {
	const [isLoading, setIsLoading] = useState(true);

	return (
		<div className="flex justify-center">
			<div className="flex flex-col 2xl:pt-[270px] mx-4">
				<div className="custom-prev">
					<Image
						src="/assets/icons/arrow.svg"
						alt="next"
						width={12}
						height={12}
						className="relative -left-[2px]"
					/>
				</div>
			</div>
			<Swiper
				modules={[Navigation, A11y]}
				slidesPerView={1}
				/* onSwiper={(swiper) => console.log(swiper)}*/
				onSlideChange={() => {
					setIsLoading(true);
				}}
				className="max-w-[1100px] !mx-0"
				loop
				spaceBetween={50}
				navigation={{
					nextEl: ".custom-next",
					prevEl: ".custom-prev",
				}}
			>
				{proyects.map((proyect, idx) => (
					<SwiperSlide key={idx} className="">
						<ProyectsSlide
							key={proyect._id}
							proyect={proyect}
							isLoading={isLoading}
							setIsLoading={setIsLoading}
						/>
					</SwiperSlide>
				))}
			</Swiper>
			<div className="flex flex-col 2xl:pt-[270px] mx-4">
				<div className="custom-next rounded-[20px] ">
					<Image
						src="/assets/icons/arrow.svg"
						alt="next"
						width={12}
						height={12}
						className="relative -left-[2px]"
					/>
				</div>
			</div>
		</div>
	);
};
