import service from "@/types/service";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export const CardService = ({
	_id,
	name,
	description,
	image,
}: Pick<service, "name" | "description" | "image" | "_id">) => {
	return (
		<Link
			href={`services/${_id}`}
			className="group mx-auto bg-[#F2F2F21A] flex flex-col backdrop-blur-lg  min-h-[300px] lg:w-[350px] rounded-[30px] py-4 px-6 hover:bg-[#F2F2F21A]"
		>
			<div className="bg-[#1B1B1B] rounded-[20px]">
				<Image
					src={image}
					alt="service-image"
					width={300}
					height={200}
					className="group-hover:opacity-60 opacity-25 rounded-[20px] service-image"
				/>
			</div>

			<div className="mt-4 grow gap-1">
				<h3 className="font-mono uppercase text-2xl text-[#FFFFFF] tracking-wider">
					{name}
				</h3>
				<p className="text-xs leading-[14px] text-[#888888] font-normal">
					{description}
				</p>
			</div>
			<p className="group-hover:text-[#ACFF6A] text-xs underline mt-2 text-right text-[#FFFFFF] pr-4">
				Ver Portafolio
			</p>
		</Link>
	);
};
