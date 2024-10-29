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
		<nav className="flex px-4 xl:px-16 xl:pt-10 pb-4">
			<div className="grow">
				<Image
					src="/assets/img/logo-byfx.png"
					width={150}
					height={150}
					alt="logo"
				></Image>
			</div>
			<div className="hidden lg:flex items-center font-mono tracking-[.25em]">
				<div className="flex gap-x-16 items-center">
					{navbarData.map((item, idx) => (
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
				<div className="ml-32 min-h-[40px]">
					<button className="rounded-[20px] px-8 py-2   btn-cotizar">
						<Link
							href={"contact"}
							className=""
							onClick={() => setCurrentPathPosition(3)}
						>
							<p className="text-2xl">Cotizar</p>
						</Link>
					</button>
				</div>
			</div>
			<NavbarMobile />
		</nav>
	);
};
