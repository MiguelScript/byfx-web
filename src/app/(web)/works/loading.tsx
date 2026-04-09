import Skeleton from "react-loading-skeleton";

const SKELETON_COUNT = 9;

export default function Loading() {
	return (
		<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
			{Array.from({ length: SKELETON_COUNT }).map((_, i) => (
				<div key={i} className="aspect-[4/3] 2xl:h-[360px] 2xl:aspect-auto">
					<Skeleton
						baseColor="#1A1A1A"
						highlightColor="#2a2a2a"
						className="!h-full !w-full"
						containerClassName="block h-full w-full"
					/>
				</div>
			))}
		</div>
	);
}
