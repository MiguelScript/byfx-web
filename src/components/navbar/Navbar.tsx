import React from "react";
import { NavbarClient } from "./NavbarClient";
import { getServices } from "@/sanity/sanity-utils";
import Image from "next/image";
import Link from "next/link";

export const Navbar = async () => {
  const services = await getServices();

  return (
    <nav className="flex sticky top-0 z-50 px-4 xl:px-16 xl:pt-6 xl:pb-6 pb-4 pt-4 lg:pt-0 border-b border-[#FFFFFF1A] bg-[#18181833] backdrop-blur-3xl">
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
        <NavbarClient services={services} />
      </div>
    </nav>
  );
};
