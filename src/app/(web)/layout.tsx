import HomeBackground from "@/components/background/HomeBackground";
import { Navbar } from "@/components/navbar/Navbar";
import "animate.css";

export default function layout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<div className="app-bg min-w-full min-h-screen">
			<div className="px-8 flex flex-col min-h-screen">
				<Navbar />
				<main className="flex flex-col grow">{children}</main>
			</div>

			<HomeBackground />
		</div>
	);
}
