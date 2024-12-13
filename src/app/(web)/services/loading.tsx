import Skeleton from "react-loading-skeleton";

export default function Loading() {
	return (
		<div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 mt-10 gap-y-8 mx-auto gap-x-12">
			<Skeleton
				baseColor="#202020"
				highlightColor="#444"
				containerClassName="rounded-[30px] lg:w-[350px] "
				className="  h-[410px]  rounded-[30px]"
			/>
			<Skeleton
				baseColor="#202020"
				highlightColor="#444"
				containerClassName="rounded-[30px]  lg:w-[350px] "
				className="  h-[410px]  rounded-[30px]"
			/>
			<Skeleton
				baseColor="#202020"
				highlightColor="#444"
				containerClassName="rounded-[30px] lg:w-[350px] "
				className="  h-[410px] rounded-[30px]"
			/>
			<Skeleton
				baseColor="#202020"
				highlightColor="#444"
				containerClassName="rounded-[30px] lg:w-[350px] "
				className="  h-[410px] rounded-[30px]"
			/>
			<Skeleton
				baseColor="#202020"
				highlightColor="#444"
				containerClassName="rounded-[30px] lg:w-[350px] "
				className="  h-[410px] rounded-[30px]"
			/>
			<Skeleton
				baseColor="#202020"
				highlightColor="#444"
				containerClassName="rounded-[30px] lg:w-[350px] "
				className="  h-[410px] rounded-[30px]"
			/>
		</div>
	);
}
