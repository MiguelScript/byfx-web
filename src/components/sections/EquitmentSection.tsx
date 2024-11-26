import { urlFor } from "@/sanity/lib/client";
import Image from "next/image";

export function EquitmentSection({
	equitment,
}: {
	equitment: {
		name: string;
		image: string;
		size: number;
	}[];
}) {
	return (
		<div className="flex flex-wrap gap-8 lg:grid-cols-4 lg:gap-12 pt-6">
			{equitment.map((item, idx: number) => (
				<div key={idx} className="flex items-center justify-center w-fit">
					<Image
						src={urlFor(item.image).url()}
						width={item.size}
						height={item.size}
						alt="logo"
					/>
				</div>
			))}
		</div>
	);
}
