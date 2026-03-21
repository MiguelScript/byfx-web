import { getFeaturedWorks } from "@/sanity/sanity-utils";
import { CardFeaturedWork } from "../cards/CardFeaturedWork";
import Link from "next/link";
import { ArrowRightIcon } from "@radix-ui/react-icons";

export default async function WorksSection() {
  const featuredWorks = await getFeaturedWorks();

  return (
    <div className="app-container lg:pt-24 mx-auto z-10 app-bg w-full">
      <h2 className="text-center text-2xl 2xl:text-[50px] font-normal text-[#FFFFFF] font-mono mb-4">
        Trabajos realizados
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 mx-auto gap-x-8">
        {featuredWorks.slice(0, 3).map((service) => (
          <CardFeaturedWork
            key={service._id}
            _id={service._id}
            name={service.name}
            description={service.description}
            image={service.image}
          />
        ))}
      </div>
      <div className="py-4 flex justify-center">
        <Link href="/works" className="text-center text-[#FFFFFF] underline hover:opacity-80 flex items-center">
          Ver trabajos
          <ArrowRightIcon className="w-6 h-6 ml-2" />
        </Link>
      </div>
    </div>
  );
}
