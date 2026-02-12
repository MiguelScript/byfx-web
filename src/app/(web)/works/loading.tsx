import Skeleton from "react-loading-skeleton";

export default function Loading() {
	return (
		<>
			<div className="pt-6">
				<div className="grid grid-cols-1 lg:grid-cols-2 lg:gap-x-12">
					<div className="hidden lg:flex justify-center  md:justify-end">
						<div className="team-img-container ">
							<Skeleton
								baseColor="#202020"
								highlightColor="#444"
								containerClassName="rounded-[30px] lg:w-[400px] "
								className="h-[200px] lg:h-[600px]  rounded-[30px]"
							/>
						</div>
					</div>
					<div className="pl-2 lg:pl-0 xl:pt-12 max-w-2xl">
						<div className="flex justify-center xl:justify-start gap-3 xl:gap-4 items-center">
							<Skeleton
								count={3}
								baseColor="#202020"
								highlightColor="#444"
								containerClassName="rounded-[30px] w-[80vw] lg:w-[40vw] "
								className="  h-[50px]  rounded-[30px]"
							/>
						</div>
						{/* <div className="text-lg pt-4 text-[#888888] font-sans font-normal leading-[22px] xl:pr-12 2xl:pr-4">
							<PortableText value={teamContent.description} />
						</div> */}
						<div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 mt-10 gap-y-8 mx-auto gap-x-12 mb-12">
							<Skeleton
								baseColor="#202020"
								highlightColor="#444"
								containerClassName="rounded-[30px] w-[80wx] lg:w-[200px] "
								className=" h-[80px] lg:h-[200px]  rounded-[30px]"
							/>
							<Skeleton
								baseColor="#202020"
								highlightColor="#444"
								containerClassName="rounded-[30px]  w-[80wx] lg:w-[200px] "
								className=" h-[80px] lg:h-[200px]  rounded-[30px]"
							/>
							<Skeleton
								baseColor="#202020"
								highlightColor="#444"
								containerClassName="rounded-[30px] w-[80wx] lg:w-[200px] "
								className=" h-[80px] lg:h-[200px] rounded-[30px]"
							/>
						</div>
						<Skeleton
							baseColor="#202020"
							highlightColor="#444"
							containerClassName=" rounded-[30px]  w-[80vw] lg:w-[40vw] "
							className="  h-[50px] lg:w-[50px]  rounded-[30px]"
						/>
					</div>
				</div>
			</div>
			<div className="py-6"></div>
		</>
	);
}
