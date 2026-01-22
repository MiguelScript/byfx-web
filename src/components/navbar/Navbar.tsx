"use client";

import React, { useState } from "react";
import { NavItem } from "./NavItem";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { navbarData } from "@/constants/NavbarData";
import Link from "next/link";
import { NavbarMobile } from "./NavbarMobile";

export const Navbar = () => {
  const pathname = usePathname();
  const [currentPathPosition, setCurrentPathPosition] = useState(
    navbarData.findIndex((item) => item.path === pathname),
  );

  return (
    <nav className="flex sticky top-0 z-50 px-4 xl:px-16 xl:pt-6 xl:pb-6 pb-4 pt-4 lg:pt-0 border-b border-[#FFFFFF1A] bg-[#18181833] backdrop-blur-3xl">
      <div className="app-container  mx-auto w-full flex justify-between items-center">
        <div className="">
          <Link
            href={"/"}
            className=""
            onClick={() => setCurrentPathPosition(0)}
          >
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
                <NavItem
                  key={idx}
                  position={idx}
                  path={item.path}
                  name={item.name}
                  isActive={pathname === item.path}
                  onClick={() => setCurrentPathPosition(idx)}
                  currentPathPosition={currentPathPosition}
                />
              ))}
          </div>
        </div>
        <div className="ml-28 min-h-[40px]">
          <Link
            href={"/contact"}
            className=""
            onClick={() => setCurrentPathPosition(3)}
          >
            <button className="bg-[#ffffff] text-[#000000] rounded-[100px] py-2 px-10  relative">
              <p className="text-lg 2xl:text-xl relative z-10 font-mono">Cotizar</p>
            </button>
          </Link>
        </div>
      </div>

      <NavbarMobile />
    </nav>
  );
};
