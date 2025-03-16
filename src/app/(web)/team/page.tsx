import { Button } from "@/components/buttons/button";
import { AudioPlayer } from "@/components/player/AudioPlayer";
import { EquitmentSection } from "@/components/sections/EquitmentSection";
import { getTeamContent, getWhatsappLink } from "@/sanity/sanity-utils";
import { Metadata } from "next";
import { PortableText } from "next-sanity";
import Image from "next/image";

export const metadata: Metadata = {
	title: "Byfx | Equipo",
};

export default async function Team() {
	const teamContent = await getTeamContent();
	console.log(teamContent);
	const audio = teamContent.audio.asset.url;
	const { url: whatsappLink } = await getWhatsappLink();

	return (
		<>
			<div className="pt-6 font-sans">
				<div className="grid grid-cols-1 lg:grid-cols-2 lg:gap-x-12">
					<div className="hidden lg:flex justify-center  md:justify-end">
						<div className="team-img-container ">
							<Image
								src={teamContent.image}
								width={400}
								height={400}
								alt="logo"
								className="team-img"
							></Image>
						</div>
					</div>
					<div className="pl-2 lg:pl-0 xl:pt-12 font-mono text-[60px] leading-8 sm:text-6xl xl:text-7xl xl:leading-[60px] 2xl:text-8xl 2xl:leading-[100px] max-w-2xl">
						<div className="flex gap-3 xl:gap-4 items-center">
							<h1 className="">somos</h1>
							<h1 className=" text-[#ACFF6A]">byfx</h1>
							<AudioPlayer
								audio={audio}
								classNames={{
									container: "hidden lg:flex",
									wave: "h-12 lg:h-8 2xl:h-12  w-40 lg:w-32 2xl:w-40",
									icon: "h-8 lg:h-3 2xl:h-8",
								}}
							/>
						</div>
						<div className="flex gap-3 xl:gap-4 mt-8 sm:mt-4 2xl:mt-1 items-start">
							<h1 className=" ">somos</h1>
							<div className="text-slider overflow-hidden max-[375px]:-top-4 -top-4 sm:-top-2 xl:-top-3 2xl:-top-2 w-[220px] max-[320px]:w-[200px] sm:w-[250px] h-[60px] xl:w-[450px] xl:h-[120px]">
								<span className="font-team2 max-[400px]:text-[55px] text-[59px] xl:text-[75px] 2xl:text-[100px] leading-[106px] capitalize max-[375px]:-top-[20px] -top-[20px] sm:-top-[18px] xl:-top-[13px] 2xl:top-[4px]">
									Productores
								</span>
								<span className="font-team1 text-[50px] xl:text-[65px] 2xl:text-[83px] leading-[106px] capitalize max-[375px]:-top-[15px] -top-[14px] sm:-top-[10px] xl:-top-[4px] 2xl:top-3">
									Profesionales
								</span>
								<span className="font-team3 text-[53px] xl:text-[65px] 2xl:text-[85px] leading-[106px] capitalize max-[375px]:-top-[22px] -top-[23px] sm:-top-[18px] xl:-top-[13px] 2xl:-top-[0px]">
									Proactivos
								</span>
							</div>
						</div>
						<AudioPlayer
							audio={audio}
							classNames={{
								container: "flex  lg:hidden w-fit mt-6 mb-2 xl:mt-4",
							}}
						/>

						<div className="text-lg pt-4 text-[#888888] font-sans font-normal leading-[22px] xl:pr-12 2xl:pr-4">
							<PortableText value={teamContent.description} />
						</div>
						<EquitmentSection equitment={teamContent.equitment} />
						<div className="max-h-8 mt-8">
							<Button classNames="flex">
								<a
									href={whatsappLink}
									target="_blank"
									className="text-[#ACFF6A] font-mono tracking-[0.25em] text-lg"
								>
									Ir a whatsapp
								</a>
							</Button>
						</div>
					</div>
				</div>
			</div>
			<div className="py-6"></div>
		</>
	);
}
