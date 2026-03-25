import Image from "next/image";
import React from "react";
import socialNetworks from "@/types/socialNetwork";
import Link from "next/link";
import { navbarData } from "@/constants/NavbarData";
import { getServices } from "@/sanity/sanity-utils";
import { ButtonIcon } from "../buttons/ButtonIcon";

const SOCIAL_ICON_CONFIG: Record<string, { path: string; size: number }> = {
  facebook: { path: "/assets/icons/facebook-black.svg", size: 22 },
  instagram: { path: "/assets/icons/instagram-black.svg", size: 22 },
  tiktok: { path: "/assets/icons/tiktok-black.svg", size: 20 },
  twitter: { path: "/assets/icons/twitter-black.svg", size: 22 },
  youtube: { path: "/assets/icons/youtube-black.svg", size: 24 },
  linkedin: { path: "/assets/icons/linkedin-black.svg", size: 22 },
  behance: { path: "/assets/icons/behance-black.svg", size: 22 },
};

const getSocialIconConfig = (networkName: string) => {
  return SOCIAL_ICON_CONFIG[networkName] || { path: "/assets/icons/default.svg", size: 22 };
};

export default async function Footer({
  socialNetworks,
  whatsappLink,
}: {
  socialNetworks: socialNetworks[];
  whatsappLink: string;
}) {
  const services = await getServices();

  return (
    <div className="flex flex-col gap-10 justify-center bg-[#000000] py-10 px-4">
      <div className="app-container  mx-auto w-full flex justify-between items-center">
        <div className="">
          <Link href={"/"} className="">
            <Image
              src="/assets/img/logo-byfx.png"
              width={110}
              height={110}
              alt="logo"
              className="w-[120px] 2xl:w-[110px]"
            ></Image>
          </Link>
        </div>
        <div className="hidden lg:flex items-center justify-center font-mono grow">
          <div className="flex gap-x-16 items-center">
            {navbarData
              .filter((item) => item.navWeb === true)
              .map((item, idx) => (
                <Link key={idx} href={item.path}>
                  <p className="text-lg 2xl:text-xl text-[#FFFFFF80]">
                    {item.name}
                  </p>
                </Link>
              ))}
          </div>
        </div>
        <div className="lg:ml-28 min-h-[40px]">
          <a
            href={whatsappLink}
            target="_blank"
            className="bg-[#ACFF6A] text-[#202020] rounded-[100px] py-2.5  relative px-6 font-mono flex items-center justify-center gap-x-2"
          >
            <Image
              src={"/assets/icons/whatsapp-icon.svg"}
              width={"25"}
              height={"25"}
              alt="logo"
              className=""
            />
            <p className="text-lg 2xl:text-2xl">IR A WHATSAPP</p>
          </a>
        </div>
      </div>
      <div className="app-container mx-auto block lg:hidden w-full">
        <p className="font-mono uppercase font-normal text-xl tracking-wider">social</p>
        <div className="flex  gap-x-4 mt-2 lg:mt-0">
          {socialNetworks.map((network) => {
            const config = getSocialIconConfig(network.name);
            
            return (
              <a href={network.url} target="_blank" key={network.name}>
                <ButtonIcon className="!bg-[#FFFFFF] rounded-full">
                  <Image
                    src={config.path}
                    alt={network.name}
                    height={config.size}
                    width={config.size}
                    className="text-[#000000] fill-[#000000]"
                  />
                </ButtonIcon>
              </a>
            );
          })}
        </div>
      </div>
      <div className="app-container mx-auto mt-4 w-full">
        <h2 className="text-xl 2xl:text-3xl font-mono tracking-wider">
          Servicios
        </h2>
        <div className="flex flex-col lg:flex-row gap-y-5 lg:gap-y-0 flex-wrap justify-start gap-x-8 w-full mt-4">
          {services.map((service) => (
            <Link
              key={service._id}
              href={`/service/${service._id}`}
              className="text-center text-sm lg:text-base text-[#ffffff60] underline hover:opacity-80 flex items-center font-light tracking-tight"
            >
              {service.name}
            </Link>
          ))}
        </div>
      </div>
      <div className="app-container w-full mx-auto flex flex-col-reverse lg:flex-row flex-wrap gap-y-10 lg:gap-y-0 justify-between gap-x-16 lg:mt-4">
        <div>
          <p className="font-mono uppercase font-normal text-lg lg:text-[30px] mb-1">
            teléfono
          </p>
          <p className="text-[#FFFFFF80] font-light text-sm lg:text-[15px]">
            +58 424-597 40 70
          </p>
        </div>
        <div>
          <p className="font-mono uppercase font-normal text-lg lg:text-[30px] mb-1">
            dirección
          </p>
          <p className="text-[#FFFFFF80] font-light text-sm lg:text-[15px]">
            Barquisimeto - Venezuela
          </p>
        </div>
        <div>
          <p className="font-mono uppercase font-normal text-lg lg:text-[30px] mb-1">
            mail
          </p>
          <p className="text-[#FFFFFF80] font-light text-sm lg:text-[15px]">
            byfx.pro@gmail.com
          </p>
        </div>
        <div className="hidden lg:block">
          <p className="font-mono uppercase font-normal text-[30px] leading-6 mb-2">social</p>
          <div className="flex  gap-x-4">
            {socialNetworks.map((network) => {
              const config = getSocialIconConfig(network.name);
              
              return (
                <a href={network.url} target="_blank" key={network.name}>
                  <ButtonIcon className="!bg-[#FFFFFF] rounded-full">
                    <Image
                      src={config.path}
                      alt={network.name}
                      height={config.size}
                      width={config.size}
                      className="text-[#FFFFFF] fill-[#FFFFFF]"
                    />
                  </ButtonIcon>
                </a>
              );
            })}
          </div>
        </div>
      </div>
      <div className="app-container mx-auto mt-8 mb-4 text-[#FFFFFF4D] text-[12px]">
        <p>
          2024 - BYFX PRODUCTORA AUDIOVISUAL | Diseñado por{" "}
          <a
            href="https://www.byux.art"
            target="_blank"
            className="underline hover:opacity-80"
          >
            www.byux.art
          </a>
        </p>
      </div>
    </div>
  );
}
