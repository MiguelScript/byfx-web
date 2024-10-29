import { Navbar } from "@/components/navbar/Navbar";
import "animate.css";

export default function layout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<div className="app-bg px-8 w-full h-full flex flex-col">
			<Navbar />
			<main className="flex flex-col grow">{children}</main>
		</div>
	);
}
