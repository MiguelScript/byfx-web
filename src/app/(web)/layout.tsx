"use client";
import { useLayoutBackground } from "@/components/background/useLayoutBackground";
import { Navbar } from "@/components/navbar/Navbar";
import "animate.css";
import "swiper/css";

export default function Layout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	useLayoutBackground();
	return (
		<div className={`app-bg min-w-full min-h-screen `}>
			<div className="px-3 sm:px-8 flex flex-col min-h-screen">
				<Navbar />
				<main className="flex flex-col grow">{children}</main>
			</div>
		</div>
	);
}
