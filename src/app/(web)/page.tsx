import { Social } from "@/components/footer/Social";
import { getHomeTexts, getSocialInfoHome } from "@/sanity/sanity-utils";

export default async function Home() {
	const socialNetworks = await getSocialInfoHome();
	const texts = await getHomeTexts();
	const content = texts[0].content;
	const highlight = content.split("*").filter((x) => x !== "");

	return (
		<>

			<div className="px-4 lg:px-0 flex flex-col grow xl:px-48">
				<div className="lg:pt-8 font-mono grow flex flex-col tracking-[0.015em] text-7xl xl:text-7xl xl:leading-[60px] max-w-md 2xl:text-8xl 2xl:leading-[100px] 2xl:max-w-xl">
					<div className="flex flex-col justify-end md:justify-center grow pb-8 lg:pb-0">
						<h1 className=" text-[#ACFF6A]">{highlight[0]}</h1>
						<h1 className="">{highlight[1]}</h1>
						<h1 className=" text-[#ACFF6A]">{highlight[2]}</h1>
						<h1 className="">{highlight[3]}</h1>
					</div>
				</div>

				<div className="pt-8 2xl:pt-12 pb-4 2xl:pb-10">
					<Social socialNetworks={socialNetworks} />
					<p className="font-mono tracking-[0.20em] text-center pt-8 2xl:pt-12">
						Todos los derechos reservados por byfx.pro | Powered by: byfx since
						2018
					</p>
				</div>
			</div>
		</>
	);
}
