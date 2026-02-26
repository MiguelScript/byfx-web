"use client";

import React, { useState, useEffect } from "react";
import { NavItem } from "./NavItem";
import { usePathname } from "next/navigation";
import { navbarData } from "@/constants/NavbarData";
import Link from "next/link";
import { NavbarMobile } from "./NavbarMobile";
import { ServicesDropdown } from "./ServicesDropdown";
import service from "@/types/service";

interface NavbarClientProps {
  services: service[];
}

export const NavbarClient = ({ services }: NavbarClientProps) => {
  const pathname = usePathname();
  const [showServicesDropdown, setShowServicesDropdown] = useState(false);
  const [isServicesClicked, setIsServicesClicked] = useState(false);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      if (
        isServicesClicked &&
        !target.closest(".services-dropdown") &&
        !target.closest(".services-nav-item")
      ) {
        setIsServicesClicked(false);
        setShowServicesDropdown(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isServicesClicked]);

  const handleServicesHover = (isHovering: boolean) => {
    if (!isServicesClicked) {
      setShowServicesDropdown(isHovering);
    }
  };

  const handleServicesClick = () => {
    setIsServicesClicked(!isServicesClicked);
    setShowServicesDropdown(!isServicesClicked);
  };

  return (
    <>
      <div className="hidden lg:flex items-center justify-center font-mono grow">
        <div className="flex gap-x-16 items-center">
          {navbarData
            .filter((item) => item.navWeb === true)
            .map((item, idx) => (
              <NavItem
                key={idx}
                path={item.path}
                name={item.name}
                isActive={pathname === item.path}
                navigation={item.navigation}
                onHover={
                  item.name === "Servicios" ? handleServicesHover : undefined
                }
                onServicesClick={
                  item.name === "Servicios" ? handleServicesClick : undefined
                }
                onClick={() => {}}
              />
            ))}
        </div>
      </div>
      <div className="ml-28 min-h-[40px]">
        <Link href={"/contact"} className="">
          <button className="bg-[#ffffff] text-[#000000] rounded-[100px] py-2 px-10  relative">
            <p className="text-lg 2xl:text-xl relative z-10 font-mono">
              Cotizar
            </p>
          </button>
        </Link>
      </div>

      <NavbarMobile />

      <ServicesDropdown
        services={services}
        isVisible={showServicesDropdown || isServicesClicked}
        onMouseEnter={() => !isServicesClicked && setShowServicesDropdown(true)}
        onMouseLeave={() =>
          !isServicesClicked && setShowServicesDropdown(false)
        }
      />
    </>
  );
};
