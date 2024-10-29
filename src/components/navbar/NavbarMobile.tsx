"use client";

import { Drawer } from "vaul";

import React from "react";
import Image from "next/image";

export const NavbarMobile = () => {
	return (
		<Drawer.Root direction="top">
			<Drawer.Trigger className="lg:hidden relative flex h-10 flex-shrink-0 items-center justify-center gap-2 transition-all hover:bg-[#1A1A19]">
				<Image src="/assets/icons/nav-icon.svg" alt="nav" width={26} height={26} />
			</Drawer.Trigger>
			<Drawer.Portal>
				<Drawer.Overlay className="fixed inset-0 bg-black/40" />
				<Drawer.Content
					className="right-2 top-2   w-screen   fixed z-10 outline-none flex"
					// The gap between the edge of the screen and the drawer is 8px in this case.
				>
					<div className="bg-zinc-50 w-full grow p-5 flex flex-col rounded-[16px]">
						<div className="max-w-md mx-auto">
							<Drawer.Title className="font-medium mb-2 text-zinc-900">
								It supports all directions.
							</Drawer.Title>
							<Drawer.Description className="text-zinc-600 mb-2">
								This one specifically is not touching the edge of the screen,
								but that&apos;s not required for a side drawer.
							</Drawer.Description>
						</div>
					</div>
				</Drawer.Content>
			</Drawer.Portal>
		</Drawer.Root>
	);
};
