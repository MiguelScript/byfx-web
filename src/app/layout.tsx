import type { Metadata } from "next";
import "./globals.css";
import "react-loading-skeleton/dist/skeleton.css";
import {
	Bebas_Neue,
	Montserrat,
	Amatic_SC,
	Alumni_Sans,
	Aguafina_Script,
	Inter,
} from "next/font/google";
import { GoogleAnalytics } from "@/components/analytics/GoogleAnalytics";

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

const inter = Inter({
	subsets: ["latin"],
	variable: "--font-inter",
});

export const metadata: Metadata = {
	metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'https://byfx.pro'),
	title: {
		default: "BYFX - Producción de Video Profesional en Barquisimeto, Venezuela",
		template: "%s | BYFX Barquisimeto"
	},
	description: "Servicios profesionales de producción de video, fotografía aérea con drones, edición y post-producción en Barquisimeto, Venezuela. Expertos en contenido audiovisual para empresas y eventos.",
	applicationName: "Byfx Web",
	keywords: [
		"producción de video Barquisimeto",
		"video profesional Venezuela",
		"drones Barquisimeto",
		"fotografía aérea Venezuela",
		"edición de video Barquisimeto",
		"post-producción Venezuela",
		"contenido audiovisual Barquisimeto",
		"videografía profesional",
		"servicios multimedia Barquisimeto",
		"producción audiovisual Venezuela",
		"BYFX",
		"video corporativo Barquisimeto",
		"video eventos Venezuela"
	],
	authors: [{ name: "BYFX" }],
	creator: "BYFX",
	publisher: "BYFX",
	formatDetection: {
		email: false,
		address: true,
		telephone: true,
	},
	openGraph: {
		type: "website",
		locale: "es_VE",
		url: "/",
		siteName: "BYFX - Producción de Video Barquisimeto",
		title: "BYFX - Producción de Video Profesional en Barquisimeto, Venezuela",
		description: "Servicios profesionales de producción de video, fotografía aérea con drones, edición y post-producción en Barquisimeto, Venezuela.",
		images: [
			{
				url: "/og-image.jpg",
				width: 1200,
				height: 630,
				alt: "BYFX - Producción de Video Barquisimeto"
			}
		]
	},
	twitter: {
		card: "summary_large_image",
		title: "BYFX - Producción de Video Profesional en Barquisimeto, Venezuela",
		description: "Servicios profesionales de producción de video, fotografía aérea con drones, edición y post-producción en Barquisimeto, Venezuela.",
		images: ["/twitter-image.jpg"],
	},
	robots: {
		index: true,
		follow: true,
		googleBot: {
			index: true,
			follow: true,
			'max-video-preview': -1,
			'max-image-preview': 'large',
			'max-snippet': -1,
		},
	},
	alternates: {
		canonical: "/",
	},
};


export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html
			lang="es"
			className={`${montserrat.variable} ${bebas_neue.variable} ${amaticSc.variable} ${alumniSans.variable} ${aguafinaScript.variable} ${inter.variable}`}
		>
			<body className={`min-h-screen bg-[#1B1B1B] text-[#F3F3F3] font-sans`}>
				<GoogleAnalytics />
				{children}
			</body>
		</html>
	);
}
