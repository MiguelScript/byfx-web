import React from "react";
import Link from "next/link";
import service from "@/types/service";

interface ServicesDropdownProps {
  services: service[];
  isVisible: boolean;
  onMouseEnter: () => void;
  onMouseLeave: () => void;
}

export const ServicesDropdown = ({
  services,
  isVisible,
  onMouseEnter,
  onMouseLeave,
}: ServicesDropdownProps) => {
  if (!isVisible) return null;

  return (
    <div 
      className="services-dropdown absolute top-full left-0 right-0 bg-white border-b border-gray-200 shadow-lg z-40"
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      <div className="app-container mx-auto px-4 xl:px-16 py-4">
        <div className="flex flex-wrap gap-x-8 gap-y-2 justify-center items-center">
          {services.map((service, index) => (
            <div key={service._id} className="flex items-center">
              <Link 
                href={`/services/${service._id}`}
                className="text-black hover:text-gray-600 transition-colors duration-200 text-sm font-medium uppercase tracking-wide"
              >
                {service.name}
              </Link>
              {index < services.length - 1 && (
                <span className="ml-8 text-black">•</span>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
