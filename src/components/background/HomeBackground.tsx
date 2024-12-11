"use client";

import { usePathname } from "next/navigation";
import { useEffect } from "react";

export default function HomeBackground() {
	const pathname = usePathname();

	useEffect(() => {
		if (pathname === "/") {
			return document.body.classList.add("show-bg-home");
		}

		document.body.classList.remove("show-bg-home");
	}, [pathname]);

	// return <div className="bg-home"></div>;
	return <></>
}
