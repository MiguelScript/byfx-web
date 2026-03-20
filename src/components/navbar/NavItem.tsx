import Link from "next/link";
import React from "react";

export const NavItem = ({
  path,
  name,
  isActive,
  onClick,
  navigation,
}: {
  path: string;
  name: string;
  isActive: boolean;
  onClick: () => void;
  navigation: boolean;
}) => {
  return (
    <div className="flex flex-col">
      {navigation ? (
        <Link href={path} onClick={onClick}>
          <p
            className={`text-lg 2xl:text-xl transition-colors duration-200 ${
              isActive ? "text-[#FFFFFF]" : "text-[#F3F3F380] hover:text-[#FFFFFF]"
            }`}
          >
            {name}
          </p>
        </Link>
      ) : (
        <div onClick={onClick} className="cursor-pointer">
          <p
            className={`text-lg 2xl:text-xl transition-colors duration-200 ${
              isActive ? "text-[#FFFFFF]" : "text-[#F3F3F380] hover:text-[#FFFFFF]"
            }`}
          >
            {name}
          </p>
        </div>
      )}
    </div>
  );
};
