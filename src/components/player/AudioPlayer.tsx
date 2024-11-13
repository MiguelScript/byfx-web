import Image from "next/image";
import React from "react";

interface AudioPlayerProps {
	classNames?: {
		container?: string;
		icon?: string;
		iconContainer?: string;
		wave?: string;
	};
}
export const AudioPlayer = ({ classNames }: AudioPlayerProps) => {
	return (
		<div
			className={`h-[55px] lg:h-[40px] 2xl:h-[55px] bg-[#F2F2F21A] rounded-[100px] flex items-center pl-1 pr-4 lg:pr-2 2xl:pr-4 gap-4 lg:gap-2 2xl:gap-4 relative lg:-top-1 ${classNames?.container}`}
		>
			<div
				className={`h-12 lg:h-8 2xl:h-12  w-12 lg:w-8 2xl:w-12  rounded-full bg-[#F2F2F21A] flex items-center justify-center hover:cursor-pointer hover:bg-[#1B1B1B] ${classNames?.iconContainer}`}
			>
				<Image
					src="/assets/icons/play-icon.svg"
					width={16}
					height={16}
					alt="logo"
					className={classNames?.icon}
				></Image>
			</div>

			<Image
				src="/assets/icons/wave.svg"
				width={150}
				height={150}
				alt="logo"
				className={classNames?.wave}
			></Image>
		</div>
	);
};
