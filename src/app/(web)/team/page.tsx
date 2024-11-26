import { Button } from "@/components/buttons/button";
import { AudioPlayer } from "@/components/player/AudioPlayer";
import { EquitmentSection } from "@/components/sections/EquitmentSection";
import { getTeamContent } from "@/sanity/sanity-utils";
import { PortableText } from "next-sanity";
import Image from "next/image";

export default async function Team() {
	const teamContent = await getTeamContent();
	const audio = teamContent.audio.asset.url;

	return (
		<>
			<div className="mt-6">
				<div className="grid grid-cols-1 lg:grid-cols-2 lg:gap-x-12">
					<div className="hidden lg:flex justify-center  md:justify-end">
						<div className="team-img-container ">
							<Image
								src={"/assets/img/team-img-min.jpg"}
								width={400}
								height={400}
								alt="logo"
								className="team-img"
							></Image>
						</div>
					</div>
					<div className="pl-2 lg:pl-0 xl:pt-12 font-mono text-[50px] leading-8 sm:text-6xl xl:text-7xl xl:leading-[60px] 2xl:text-8xl 2xl:leading-[100px] max-w-2xl">
						<div className="flex gap-2 items-center">
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
						<div className="flex gap-2 mt-4 2xl:mt-1 items-center">
							<h1 className=" ">somos</h1>
							<h1 className=" text-[#ACFF6A]">Productores</h1>
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
									href={""}
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
