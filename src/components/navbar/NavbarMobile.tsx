"use client";

import { Drawer } from "vaul";
import React, { useState } from "react";
import Image from "next/image";
import { navbarData } from "@/constants/NavbarData";
import Link from "next/link";

export const NavbarMobile = () => {
	const [isOpen, setIsOpen] = useState(false);
	return (
		<Drawer.Root direction="top" open={isOpen} onOpenChange={setIsOpen}>
			<Drawer.Trigger className="lg:hidden relative flex h-10 flex-shrink-0 items-center justify-center gap-2 transition-all hover:bg-[#1A1A19]">
				<Image
					src="/assets/icons/nav-icon.svg"
					alt="nav"
					width={26}
					height={26}
				/>
			</Drawer.Trigger>
			<Drawer.Portal>
				<Drawer.Overlay className="fixed inset-0 bg-black/40" />
				<Drawer.Content
					className=" top-0 w-screen fixed z-10 outline-none flex backdrop-blur-lg"
					// The gap between the edge of the screen and the drawer is 8px in this case.
				>
					<div className="bg-[#F2F2F21A] w-full grow py-3 px-5 flex flex-col items-start rounded-b-2xl">
						<Drawer.Title className="font-medium mb-2 pl-7 pt-1 text-zinc-900 flex justify-start">
							<Link href={"/"} className="" onClick={() => setIsOpen(false)}>
								<Image
									src="/assets/img/logo-byfx.png"
									width={150}
									height={150}
									alt="logo"
								></Image>
							</Link>
						</Drawer.Title>
						<div className="w-full">
							<Drawer.Description className="text-zinc-600 mb-2">
								<div className="flex flex-col mx-auto gap-y-4 mt-4">
									{navbarData.map((item, idx) => (
										<Link
											key={idx}
											href={item.path}
											className="text-[#F3F3F3] text-lg font-mono tracking-[0.20em] px-4 py-2 w-full rounded-[15px] bg-[#F2F2F21A]"
											onClick={() => setIsOpen(false)}
										>
											{item.name}
										</Link>
									))}
								</div>
							</Drawer.Description>
						</div>
					</div>
				</Drawer.Content>
			</Drawer.Portal>
		</Drawer.Root>
	);
};
