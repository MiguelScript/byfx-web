import { Button } from "@/components/buttons/button";
import { EquitmentSection } from "@/components/sections/EquitmentSection";
import { getTeamContent } from "@/sanity/sanity-utils";
import { PortableText } from "next-sanity";
import Image from "next/image";

export default async function Team() {
	const teamContent = await getTeamContent();
	console.log(teamContent);
	return (
		<>
			<div className="mt-6">
				<div className="grid grid-cols-1 lg:grid-cols-2 lg:gap-x-12 ">
					<div className="flex justify-center  md:justify-end">
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
					<div className="pt-12 font-mono text-5xl xl:text-7xl xl:leading-[60px] 2xl:text-8xl 2xl:leading-[100px] max-w-2xl">
						<div className="flex gap-2 items-center">
							<h1 className="">somos</h1>
							<h1 className=" text-[#ACFF6A]">byfx</h1>
							<div className="h-[55px] bg-[#F2F2F21A] rounded-[100px] flex items-center gap-4 pl-1 pr-4 relative xl:-top-1">
								<div className="h-12 w-12 rounded-full bg-[#F2F2F21A] flex items-center justify-center hover:cursor-pointer hover:bg-[#1B1B1B]">
									<Image
										src="/assets/icons/play-icon.svg"
										width={16}
										height={16}
										alt="logo"
									></Image>
								</div>

								<Image
									src="/assets/icons/wave.svg"
									width={150}
									height={150}
									alt="logo"
								></Image>
							</div>
						</div>
						<div className="flex gap-2 mt-4 2xl:mt-1 items-center">
							<h1 className=" ">somos</h1>
							<h1 className=" text-[#ACFF6A]">Productores</h1>
						</div>
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
