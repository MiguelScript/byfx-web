import Skeleton from "react-loading-skeleton";

export default function Loading() {
	return (
		<div className="w-full flex justify-center mt-4 2xl:mt-8">
			<div className="2xl:w-[1100px] 2xl:h-[600px] overflow-hidden">
				<Skeleton
					baseColor="#202020"
					highlightColor="#444"
					containerClassName="w-full h-full rounded-[20px]"
					className="h-full !rounded-[20px]"
				/>
			</div>
		</div>
	);
}
