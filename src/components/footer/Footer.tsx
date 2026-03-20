import Image from "next/image";
import React from "react";
import socialNetworks from "@/types/socialNetwork";
import Link from "next/link";
import { navbarData } from "@/constants/NavbarData";
import { getServices } from "@/sanity/sanity-utils";
import { ButtonIcon } from "../buttons/ButtonIcon";

export default async function Footer({
  socialNetworks,
}: {
  socialNetworks: socialNetworks[];
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
              className="2xl:w-[110px]"
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
        <div className="ml-28 min-h-[40px]">
          <Link href={"/contact"} className="">
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
          </Link>
        </div>
      </div>
      <div className="app-container mx-auto mt-4 w-full">
        <h2 className="text-xl 2xl:text-3xl font-mono">Servicios</h2>
        <div className="flex flex-wrap justify-start gap-x-8 w-full mt-4">
          {services.map((service) => (
            <Link
              key={service._id}
              href={`/service/${service._id}`}
              className="text-center text-[#FFFFFF80] underline hover:opacity-80 flex items-center"
            >
              {service.name}
            </Link>
          ))}
        </div>
      </div>
      <div className="app-container w-full mx-auto flex flex-wrap justify-between gap-x-16 mt-4">
        <div>
          <p className="font-mono uppercase font-normal text-[30px]">
            teléfono
          </p>
          <p className="text-[#FFFFFF80] font-light  text-[15px]">+58 424-597 40 70</p>
        </div>
        <div>
          <p className="font-mono uppercase font-normal text-[30px]">
            dirección
          </p>
          <p className="text-[#FFFFFF80] font-light text-[15px]">Barquisimeto - Venezuela</p>
        </div>
        <div>
          <p className="font-mono uppercase font-normal text-[30px]">mail</p>
          <p className="text-[#FFFFFF80] font-light text-[15px]">byfx.pro@gmail.com</p>
        </div>
        <div>
          <p className="font-mono uppercase font-normal text-[30px]">social</p>
          <div className="flex  gap-x-2">
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
      </div>
      <div className="app-container mx-auto mt-8 mb-4 text-[#FFFFFF4D] text-[12px]">
        <p>2024 - BYFX PRODUCTORA AUDIOVISUAL | Diseñado por <a href="https://www.byux.art" target="_blank" className="underline hover:opacity-80">www.byux.art</a></p>
      </div>
    </div>
  );
}
