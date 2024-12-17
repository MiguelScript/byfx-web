import type { Metadata } from "next";
import "./globals.css";
import "react-loading-skeleton/dist/skeleton.css";
import {
	Bebas_Neue,
	Montserrat,
	Amatic_SC,
	Alumni_Sans,
	Aguafina_Script,
} from "next/font/google";

const bebas_neue = Bebas_Neue({
	subsets: ["latin"],
	weight: "400",
	variable: "--font-bebas-neue",
});
const montserrat = Montserrat({
	subsets: ["latin"],
	variable: "--font-montserrat",
});
const alumniSans = Alumni_Sans({
	subsets: ["latin"],
	variable: "--font-alumni-sans",
});
const aguafinaScript = Aguafina_Script({
	subsets: ["latin"],
	weight: "400",
	variable: "--font-aguafina-script",
});
const amaticSc = Amatic_SC({
	subsets: ["latin"],
	weight: "400",
	variable: "--font-amatic-sc",
});

export const metadata: Metadata = {
	title: "Byfx",
	description: "Byfx | Producción de video Barquisimeto - Venezuela",
	applicationName: "Byfx Web",
	keywords: ["Byfx", "Dron", "Barquisimeto", "Venezuela"],
};


export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html
			lang="en"
			className={`${montserrat.variable} ${bebas_neue.variable} ${amaticSc.variable} ${alumniSans.variable} ${aguafinaScript.variable}`}
		>
			<body className={`h-screen bg-[#1B1B1B] text-[#F3F3F3] font-sans`}>
				{children}
			</body>
		</html>
	);
}
