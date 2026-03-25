"use client";

import React, { useState, useRef, useEffect } from "react";
import { createPortal } from "react-dom";
import Link from "next/link";
import { navbarData } from "@/constants/NavbarData";
import { ChevronDownIcon } from "@radix-ui/react-icons";
import service from "@/types/service";

interface FooterClientProps {
  services: service[];
}

export function FooterClient({ services }: FooterClientProps) {
  const [servicesOpen, setServicesOpen] = useState(false);
  const [footerTop, setFooterTop] = useState(0);
  const [mounted, setMounted] = useState(false);
  const triggerRef = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    const updateFooterTop = () => {
      const footer = document.getElementById("main-footer");
      if (footer) setFooterTop(footer.getBoundingClientRect().top);
    };
    updateFooterTop();
    window.addEventListener("resize", updateFooterTop);
    window.addEventListener("scroll", updateFooterTop, { passive: true });
    return () => {
      window.removeEventListener("resize", updateFooterTop);
      window.removeEventListener("scroll", updateFooterTop);
    };
  }, []);

  useEffect(() => {
    if (!servicesOpen) return;
    const handleClickOutside = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (
        !target.closest("#footer-services-dropdown-panel") &&
        !triggerRef.current?.contains(target)
      ) {
        setServicesOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [servicesOpen]);

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
                    servicesOpen
                      ? "text-[#FFFFFF]"
                      : "text-[#FFFFFF80] hover:text-[#FFFFFF]"
                  }`}
                >
                  {item.name}
                  <ChevronDownIcon
                    className={`w-4 h-4 transition-transform duration-200 ${servicesOpen ? "rotate-180" : "rotate-0"}`}
                  />
                </p>
              ) : (
                <Link key={idx} href={item.path}>
                  <p className="text-lg 2xl:text-xl text-[#FFFFFF80] hover:text-[#FFFFFF] transition-colors duration-200">
                    {item.name}
                  </p>
                </Link>
              ),
            )}
        </div>
      </div>

      {mounted &&
        servicesOpen &&
        createPortal(
          <div
            id="footer-services-dropdown-panel"
            style={{ bottom: `calc(100vh - ${footerTop}px)` }}
            className="fixed left-0 right-0 w-screen z-50 bg-[#ffffff] backdrop-blur-3xl py-4"
          >
            <div className="app-container mx-auto px-4 xl:px-16 py-4 flex flex-wrap gap-x-8 gap-y-2 justify-center items-center font-mono">
              {services.map((service) => (
                <div key={service._id} className="flex items-center">
                  <span className="mr-2 text-lg text-[#000000]">•</span>
                  <Link
                    href={`/services/${service._id}`}
                    className="uppercase text-xl text-[#000000] font-mono transition-colors duration-200"
                    onClick={() => setServicesOpen(false)}
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
}
