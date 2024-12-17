/* eslint-disable @typescript-eslint/no-explicit-any */
import { proyect } from "@/types/service";
import React from "react";
import { AssetSection } from "../sections/AssetSection";

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
			<AssetSection
				proyect={proyect}
				isLoading={isLoading}
				setIsLoading={setIsLoading}
			/>
			<div className="flex lg:space-x-4 flex-wrap justify-start lg:justify-center font-mono text-[28px]">
				<p className="text-[#ACFF6A]">
					cliente:
					<span className="ml-2 text-[#F3F3F3]">{proyect.client}</span>
				</p>
				<span className="hidden lg:block">-</span>
				<p className="text-[#ACFF6A]">
					proyecto:
					<span className="ml-2 text-[#F3F3F3]">{proyect.title}</span>
				</p>
			</div>
		</>
	);
};
