"use client";
import React from "react";
import { proyect } from "@/types/service";
import { useSwiperSlide } from "swiper/react";
import Skeleton from "react-loading-skeleton";
import Image from "next/image";

const imgExtensions = ["jpg", "jpeg", "png", "gif", "bmp"];
const svgExtensions = ["svg"];

const getFileType = (link: string): "img" | "video" | "svg" | null => {
	const partes = link.split(".");
	const extension = partes[partes.length - 1].toLowerCase(); // Convertimos a minúsculas para una comparación más robusta

	if (imgExtensions.includes(extension)) {
		return "img";
	}

	if (svgExtensions.includes(extension)) {
		return "svg";
	}

	return "video";

};

export const AssetSection = ({
	proyect,
	isLoading,
	setIsLoading,
}: {
	proyect: proyect;
	isLoading: boolean;
	setIsLoading: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
	const swiperSlide = useSwiperSlide();
	const link =
		proyect.resourceType === "file" ? proyect.file.asset.url : proyect.link;
	const fileType = getFileType(link);

	return (
		<div className="py-3 px-4 bg-[#F2F2F21A] rounded-[20px] mb-6 flex justify-center relative">
			<div className="2xl:w-[1100px] 2xl:h-[600px] overflow-hidden flex justify-center items-center">
				{isLoading && (
					<Skeleton
						baseColor="#202020"
						highlightColor="#444"
						containerClassName="w-full h-full rounded-[20px]"
						className="h-full w-full !rounded-[20px]"
					/>
				)}
				{swiperSlide.isActive === true && fileType === "video" && (
					<iframe
						width="100%"
						height="100%"
						src={link}
						title="video player"
						frameBorder="0"
						allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
						referrerPolicy="strict-origin-when-cross-origin"
						allowFullScreen
						className={`rounded-[20px] ${isLoading ? "invisible absolute" : "visible"}`}
						onLoad={() => {
							if (swiperSlide.isActive === true) {
								setIsLoading(false);
							}
						}}
					></iframe>
				)}
				{swiperSlide.isActive === true && fileType === "img" && (
					<Image
						width={1000}
						height={900}
						src={link}
						alt={proyect.title}
						className={`rounded-[20px] bg-contain w-full h-full  ${isLoading ? "invisible absolute" : "visible"}`}
						onLoad={() => {
							if (swiperSlide.isActive === true) {
								setIsLoading(false);
							}
						}}
					/>
				)}
				{swiperSlide.isActive === true && fileType === "svg" && (
					<Image
						width={400}
						height={400}
						src={link}
						alt={proyect.title}
						className={`rounded-[20px] bg-contain ${isLoading ? "invisible absolute" : "visible"}`}
						onLoad={() => {
							if (swiperSlide.isActive === true) {
								setIsLoading(false);
							}
						}}
					/>
				)}
			</div>
		</div>
	);
};
