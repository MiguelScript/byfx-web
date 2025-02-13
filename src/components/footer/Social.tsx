import Image from "next/image";
import React from "react";
import { ButtonIcon } from "../buttons/ButtonIcon";
import socialNetworks from "@/types/socialNetwork";

export const Social = ({
	socialNetworks,
}: {
	socialNetworks: socialNetworks[];
}) => {
	return (
		<div className="flex gap-10 justify-center">
			{socialNetworks.map((network) => (
				<a href={network.url} target="_blank" key={network.name}>
					<ButtonIcon>
						<Image
							src={network?.image ?? "noiamge.jpg"}
							alt={network.name}
							height={network.imgSize ?? 30}
							width={network.imgSize ?? 30}
							className="text-[#F2F2F21A]"
						/>
					</ButtonIcon>
				</a>
			))}
		</div>
	);
};
