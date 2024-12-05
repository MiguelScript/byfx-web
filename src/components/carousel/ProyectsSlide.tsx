/* eslint-disable @typescript-eslint/no-explicit-any */
import { proyect } from "@/types/service";
import React from "react";
import { YoutubeVideo } from "../video/YoutubeVideo";

export const ProyectsSlide = ({
	proyect,
	isLoading,
	setIsLoading,
}: {
	proyect: proyect;
	isLoading: boolean;
	setIsLoading: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
	return (
		<>
			<div className="py-3 px-4 bg-[#F2F2F21A] rounded-[20px] mb-6 flex justify-center relative">
				{proyect.resourceType === "link" && (
					<YoutubeVideo
						link={proyect.link}
						isLoading={isLoading}
						setIsLoading={setIsLoading}
					/>
				)}
			</div>
			<div className="flex space-x-4 justify-center font-mono text-[28px]">
				<p className="text-[#ACFF6A]">
					cliente:
					<span className="ml-2 text-[#F3F3F3]">{proyect.client}</span>
				</p>
				<span>-</span>
				<p className="text-[#ACFF6A]">
					proyecto:
					<span className="ml-2 text-[#F3F3F3]">{proyect.title}</span>
				</p>
			</div>
		</>
	);
};
