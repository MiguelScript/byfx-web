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
		navbarData.findIndex((item) => item.path === pathname)
	);

	return (
		<nav className="flex px-4 xl:px-16 xl:pt-10 pb-4 pt-4 lg:pt-0">
			<div className="grow">
				<Link href={"/"} className="" onClick={() => setCurrentPathPosition(0)}>
					<Image
						src="/assets/img/logo-byfx.png"
						width={120}
						height={120}
						alt="logo"
						className="2xl:w-[150px]"
					></Image>
				</Link>
			</div>
			<div className="hidden lg:flex items-center font-mono tracking-[.25em]">
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
				<div className="ml-28 min-h-[40px] relative -top-3">
					<Link
						href={"/contact"}
						className=""
						onClick={() => setCurrentPathPosition(3)}
					>
						<button className="btn-cotizar rounded-[15px] py-2  relative w-[200px]">
							<p className="text-xl 2xl:text-2xl relative z-10">Cotizar</p>
						</button>
					</Link>
				</div>
			</div>
			<NavbarMobile />
		</nav>
	);
};
