import { Social } from "@/components/footer/Social";
import { getHomeTexts, getSocialInfo } from "@/sanity/sanity-utils";

export default async function Home() {
	const socialNetworks = await getSocialInfo();
	const texts = await getHomeTexts();
	const content = texts[0].content;
	const highlight = content.split("*").filter((x) => x !== "");

	return (
		<div className="flex flex-col grow xl:px-48">
			<div className="2xl:pt-8 font-mono grow flex flex-col tracking-[0.10em] text-4xl xl:text-7xl xl:leading-[60px] 2xl:text-8xl 2xl:leading-[100px] max-w-xl">
				<div className="flex flex-col justify-center grow">
					<h1 className=" text-[#ACFF6A]">{highlight[0]}</h1>
					<h1 className="">{highlight[1]}</h1>
					<h1 className=" text-[#ACFF6A]">{highlight[2]}</h1>
					<h1 className="">{highlight[3]}</h1>
				</div>
			</div>

			<div className="pt-12 pb-10">
				<Social socialNetworks={socialNetworks} />
				<p className="font-mono tracking-[0.20em] text-center pt-12">
					Todos los derechos reservados por byfx.pro | Powered by: byfx since
					2018
				</p>
			</div>
		</div>
	);
}
