import Link from "next/link";
import React from "react";

export const NavItem = ({
  path,
  name,
  isActive,
  onClick,
  navigation,
  onHover,
  onServicesClick,
}: {
  path: string;
  name: string;
  isActive: boolean;
  onClick: () => void;
  navigation: boolean;
  onHover?: (isHovering: boolean) => void;
  onServicesClick?: () => void;
}) => {
  const handleClick = () => {
    onClick();
    if (onServicesClick) {
      onServicesClick();
    }
  };

  return (
    <div
      className={`flex flex-col ${name === "Servicios" ? "services-nav-item" : ""}`}
      onMouseEnter={() => onHover && onHover(true)}
      onMouseLeave={() => onHover && onHover(false)}
    >
      {navigation ? (
        <Link href={path} onClick={handleClick}>
          <p
            className={`text-lg 2xl:text-xl ${isActive ? "text-[#FFFFFF]" : "text-[#F3F3F380]"}`}
          >
            {name}
          </p>
        </Link>
      ) : (
        <div onClick={handleClick} className="cursor-pointer">
          <p
            className={`text-lg 2xl:text-xl ${isActive ? "text-[#FFFFFF]" : "text-[#F3F3F380]"}`}
          >
            {name}
          </p>
        </div>
      )}
      {/* <div
				className={`${isActive ? "block" : "hidden"} ${isActive ? animation : ""} animate__animated animate__faster flex justify-center items-center`}
			>
				<div className=" w-2 h-2 bg-[#ACFF6A]"></div>
			</div> */}
    </div>
  );
};
