"use client";

import { usePathname } from "next/navigation";
import { useEffect } from "react";

export const useLayoutBackground = () => {
	const pathname = usePathname();

	useEffect(() => {
		document.body.classList.remove("show-bg-home");
		document.body.classList.remove("bg-services");
		document.body.classList.remove("bg-team");

		
	}, [pathname]);
};
