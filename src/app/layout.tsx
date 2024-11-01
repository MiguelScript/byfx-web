import type { Metadata } from "next";
import "./globals.css";
import { Bebas_Neue, Montserrat } from "next/font/google";

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
				className={`antialiased h-screen bg-[#1B1B1B] text-[#F3F3F3] font-sans mb-4`}
			>
				{children}
			</body>
		</html>
	);
}
