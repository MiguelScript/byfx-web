import type { Metadata } from "next";
import "./globals.css";
import { Navbar } from "@/components/navbar/Navbar";
import { Bebas_Neue, Montserrat } from "next/font/google";
import 'animate.css';

const bebas_neue = Bebas_Neue({
	subsets: ["latin"],
	weight: "400",
	variable: "--font-bebas-neue",
});
const montserrat = Montserrat({
	subsets: ["latin"],
	variable: "--font-montserrat",
});

export const metadata: Metadata = {
	title: "Byfx",
	description: "Generated by create next app",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html
			lang="en"
			className={`${montserrat.variable} ${bebas_neue.variable} `}
		>
			<body
				className={`antialiased h-screen w-screen overflow-hidden bg-[#1B1B1B] text-[#F3F3F3] font-sans`}
			>
				<div className="app-bg px-8 w-full h-full flex flex-col">
					<Navbar />
					<main className="flex flex-col grow">{children}</main>
				</div>
			</body>
		</html>
	);
}
