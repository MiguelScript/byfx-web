"use client";

import React, { useEffect, useState, useRef } from "react";
import { createPortal } from "react-dom";
import { NavItem } from "./NavItem";
import { usePathname } from "next/navigation";
import { navbarData } from "@/constants/NavbarData";
import { NavbarMobile } from "./NavbarMobile";
import { ContactDrawer } from "@/components/drawers/ContactDrawer";
import Link from "next/link";
import { ChevronDownIcon } from "@radix-ui/react-icons";
import service from "@/types/service";

interface NavbarClientProps {
  services: service[];
  whatsapp: string;
  countries: string;
  servicesList: Array<{ _id: string; name: string; position: number }>;
}

export const NavbarClient = ({ services, countries }: NavbarClientProps) => {
  const pathname = usePathname();
  const [servicesOpen, setServicesOpen] = useState(false);
  const [navBottom, setNavBottom] = useState(0);
  const [mounted, setMounted] = useState(false);
  const triggerRef = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    const updateNavBottom = () => {
      const nav = document.getElementById("main-navbar");
      if (nav) setNavBottom(nav.getBoundingClientRect().bottom);
    };
    updateNavBottom();
    window.addEventListener("resize", updateNavBottom);
    window.addEventListener("scroll", updateNavBottom, { passive: true });
    return () => {
      window.removeEventListener("resize", updateNavBottom);
      window.removeEventListener("scroll", updateNavBottom);
    };
  }, []);

  useEffect(() => {
    if (!servicesOpen) return;
    const handleClickOutside = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (
        !target.closest("#services-dropdown-panel") &&
        !triggerRef.current?.contains(target)
      ) {
        setServicesOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [servicesOpen]);

  useEffect(() => {
    setServicesOpen(false);
  }, [pathname]);

  return (
    <>
      <div className="hidden lg:flex items-center justify-center font-mono grow">
        <div className="flex gap-x-16 items-center">
          {navbarData
            .filter((item) => item.navWeb === true)
            .map((item, idx) =>
              item.name === "Servicios" ? (
                <p
                  key={idx}
                  ref={triggerRef}
                  onClick={() => setServicesOpen((o) => !o)}
                  className={`flex items-center gap-1 text-lg 2xl:text-xl transition-colors duration-200 cursor-pointer select-none ${
                    pathname.startsWith("/services") || servicesOpen
                      ? "text-[#FFFFFF]"
                      : "text-[#F3F3F380] hover:text-[#FFFFFF]"
                  }`}
                >
                  {item.name}
                  <ChevronDownIcon
                    className={`w-4 h-4 transition-transform duration-200 ${servicesOpen ? "rotate-180" : "rotate-0"}`}
                  />
                </p>
              ) : (
                <NavItem
                  key={idx}
                  path={item.path}
                  name={item.name}
                  isActive={pathname === item.path}
                  navigation={item.navigation}
                  onClick={() => {}}
                />
              ),
            )}
        </div>
      </div>

      <div className="ml-28 min-h-[40px] hidden lg:block">
        <ContactDrawer countries={countries}>
          <button className="bg-[#ffffff] text-[#000000] rounded-[100px] py-2 px-10  relative">
            <p className="text-lg 2xl:text-xl relative z-10 font-mono">
              Cotizar
            </p>
          </button>
        </ContactDrawer>
      </div>

      <NavbarMobile />

      {mounted &&
        servicesOpen &&
        createPortal(
          <div
            id="services-dropdown-panel"
            style={{ top: navBottom }}
            className="fixed left-0 right-0 w-screen z-50 bg-[#ffffff] backdrop-blur-3xl py-4"
          >
            <div className="app-container mx-auto px-4 xl:px-16 py-4 flex flex-wrap gap-x-8 gap-y-2 justify-center items-center font-mono">
              {services.map((service) => (
                <div key={service._id} className="flex items-center">
                  <span className="mr-2 text-lg text-[#000000]">•</span>
                  <Link
                    href={`/services/${service._id}`}
                    className="uppercase text-xl text-[#000000] font-mono  transition-colors duration-200"
                  >
                    {service.name}
                  </Link>
                </div>
              ))}
            </div>
          </div>,
          document.body,
        )}
    </>
  );
};
