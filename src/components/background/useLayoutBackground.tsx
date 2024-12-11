"use client";

import { usePathname } from "next/navigation";
import { useEffect } from "react";

export const useLayoutBackground = () => {
	const pathname = usePathname();

	useEffect(() => {
		document.body.classList.remove("show-bg-home");
		document.body.classList.remove("bg-services");
		document.body.classList.remove("bg-team");

		if (pathname === "/") {
			return document.body.classList.add("show-bg-home");
		}

		if (pathname === "/services") {
			return document.body.classList.add("bg-services");
		}

		if (pathname === "/team") {
			return document.body.classList.add("bg-team");
		}
	}, [pathname]);
};
