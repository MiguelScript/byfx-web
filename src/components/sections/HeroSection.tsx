import socialNetworks from "@/types/socialNetwork";
import Image from "next/image";
import { ButtonIcon } from "../buttons/ButtonIcon";

export function HeroSection({
  socialNetworks,
}: {
  socialNetworks: socialNetworks[];
}) {
  return (
    <div className="pt-24 px-12 relative">
      <div className="absolute top-[296px] left-1/2 -translate-x-1/2 w-[400px] h-[270px] bg-[#D9D9D9] bg-opacity-50 blur-[180px]"></div>
      <div className="flex">
        <div className="app-container mx-auto relative pb-2">
          <div className="flex items-center justify-center mb-2 pt-12">
            <h1 className="hero-title tracking-[0.015em] text-7xl xl:text-7xl xl:leading-[60px] 2xl:text-[130px] 2xl:leading-[100px] font-mono">
              hacemos videos geniales
            </h1>
          </div>
          <p className="px-[55px] text-[#FFFFFFB2] text-center xl:text-[20px] font-light">
            En <strong className="font-semibold">BYFX</strong> ofrecemos servicios de{" "}
            <strong className="font-semibold">producción audiovisual </strong>
            para marcas, empresas y agencias creativas que quieren destacar con
            identidad, calidad visual e <strong className="font-semibold">storytelling</strong> real.
          </p>
        </div>

        <div className="flex flex-col gap-5 justify-center">
          {socialNetworks.map((network) => (
            <a href={network.url} target="_blank" key={network.name}>
              <ButtonIcon className="!bg-[#000000] rounded-full">
                <Image
                  src={network?.image ?? "noiamge.jpg"}
                  alt={network.name}
                  height={network.imgSize ?? 22}
                  width={network.imgSize ?? 22}
                  className="text-[#FFFFFF] fill-[#FFFFFF]"
                />
              </ButtonIcon>
            </a>
          ))}
        </div>
      </div>
      <div className="flex justify-center relative -top-2 mb-12">
        <button className="bg-[#ACFF6A] text-[#202020] rounded-[100px] py-[8px]  relative px-6 font-mono flex items-center justify-center gap-x-2">
          <Image
            src={"/assets/icons/whatsapp-icon.svg"}
            width={"25"}
            height={"25"}
            alt="logo"
            className=""
          />
          <p className="text-xl 2xl:text-2xl">IR A WHATSAPP</p>
        </button>
      </div>
      <div className="flex justify-center mt-8">
        <div className="w-[60%] h-[3px] bg-gradient-to-r from-[#191919] via-[#D9D9D9] to-[#191919]"></div>
      </div>
    </div>
  );
}
