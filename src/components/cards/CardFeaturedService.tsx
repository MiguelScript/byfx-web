import service from "@/types/service";
import Link from "next/link";
import React from "react";

export const CardFeaturedService = ({
  _id,
  name,
  description,
  image,
}: Pick<service, "name" | "description" | "image" | "_id">) => {
  return (
    <Link
      href={`services/${_id}`}
      className="group  flex flex-col backdrop-blur-lg  lg:max-w-none  min-h-[300px] lg:py-4"
    >
      <div className="lg:mt-4 grow gap-1 mb-6 lg:mb-2 max-w-80 mx-auto">
        <h3 className="text-lg xl:text-xl font-bold text-[#FFFFFF]">
          {name}
        </h3>
        <p className="text-xs xl:text-sm leading-[14px] text-[#8C8C8C] font-normal min-h-14">
          {description}
        </p>
      </div>
      <div className="overflow-hidden h-64 w-full">
        <div
          className="bg-[#1B1B1B] w-full lg:w-[600px] h-[250px] bg-cover transition-transform duration-500 ease-in-out group-hover:scale-125"
          style={{ backgroundImage: `url(${image})`, backgroundPosition: "center" }}
        >
          {/* <Image
					src={image}
					alt="service-image"
					width={300}
					height={200}
					className="group-hover:opacity-60 opacity-25 rounded-[20px] service-image"
				/> */}
        </div>
      </div>
    </Link>
  );
};
