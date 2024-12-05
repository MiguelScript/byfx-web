"use client";
import React from "react";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import { useSwiperSlide } from "swiper/react";

export const YoutubeVideo = ({
	link,
	isLoading,
	setIsLoading,
}: {
	link: string;
	isLoading: boolean;
	setIsLoading: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
	const swiperSlide = useSwiperSlide();

	return (
		<div className="2xl:w-[1100px] 2xl:h-[600px] overflow-hidden">
			{isLoading && (
				<Skeleton
					baseColor="#202020"
					highlightColor="#444"
					containerClassName="w-full h-full rounded-[20px]"
					className="h-full !rounded-[20px]"
				/>
			)}
			{swiperSlide.isActive === true && (
				<iframe
					width="100%"
					height="100%"
					src={link}
					title="YouTube video player"
					frameBorder="0"
					allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
					referrerPolicy="strict-origin-when-cross-origin"
					allowFullScreen
					className={`rounded-[20px]   ${isLoading ? "invisible" : "visible"}`}
					onLoad={() => {
						if (swiperSlide.isActive === true) {
							setIsLoading(false);
						}
					}}
				></iframe>
			)}
		</div>
	);
};
