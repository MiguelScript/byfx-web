import Image from "next/image";

const eq = [
	{
		src: "/assets/img/logo-dji.svg",
		size: 60,
	},
	{
		src: "/assets/img/logo-apple.svg",
		size: 30,
	},
	{
		src: "/assets/img/logo-sony.svg",
		size: 110,
	},
	{
		src: "/assets/img/logo-smallrig.svg",
		size: 110,
	},
];
export function EquitmentSection({ equitment }: { equitment: any }) {
	console.log(equitment);
	return (
		<div className="flex flex-wrap gap-4 lg:grid-cols-4 lg:gap-12 pt-6">
			{eq.map((item: { src: string; size: number }, idx: number) => (
				<div key={idx} className="flex items-center justify-center w-fit">
					<Image
						src={item.src}
						width={item.size}
						height={item.size}
						alt="logo"
					></Image>
				</div>
			))}
		</div>
	);
}
