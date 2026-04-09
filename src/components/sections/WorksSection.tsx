import { getFeaturedWorks } from "@/sanity/sanity-utils";
import { CardFeaturedWork } from "../cards/CardFeaturedWork";
import Link from "next/link";
import { ArrowRightIcon } from "@radix-ui/react-icons";
import Image from "next/image";
import { ButtonIcon } from "../buttons/ButtonIcon";

export default async function WorksSection({
  socialNetworks,
}: {
  socialNetworks: any[];
}) {
  const featuredWorks = await getFeaturedWorks();

  return (
    <section className=" app-bg w-full">
      <div className="flex flex-wrap gap-5 justify-center items-center lg:hidden py-6">
        {socialNetworks.map((network) => (
          <a href={network.url} target="_blank" key={network.name}>
            <ButtonIcon className="!bg-[#000000] rounded-full w-[50px] h-[50px] text-center">
              <Image
                src={network?.image ?? "noiamge.jpg"}
                alt={network.name}
                height={network.imgSize ?? 25}
                width={network.imgSize ?? 25}
                className="text-[#FFFFFF] fill-[#FFFFFF]"
              />
            </ButtonIcon>
          </a>
        ))}
      </div>
      <div className="app-container lg:pt-24 mx-auto z-10">
        <h2 className="text-center text-2xl 2xl:text-[50px] font-normal text-[#FFFFFF] font-mono mb-4 pt-8 lg:pt-0">
          Trabajos realizados
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 mx-auto gap-x-8">
          {featuredWorks.slice(0, 3).map((service) => (
            <CardFeaturedWork
              key={service._id}
              _id={service._id}
              name={service.titulo}
              description={service.cliente}
              image={service.imagen}
            />
          ))}
        </div>
        <div className="py-4 flex justify-center">
          <Link
            href="/works"
            className="text-center text-[#FFFFFF] underline hover:opacity-80 flex items-center"
          >
            Ver trabajos
            <ArrowRightIcon className="w-6 h-6 ml-2" />
          </Link>
        </div>
      </div>
    </section>
  );
}
