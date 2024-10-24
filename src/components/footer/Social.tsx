import Image from "next/image";
import React from "react";
import { ButtonIcon } from "../buttons/ButtonIcon";

export const Social = () => {
	return (
		<div className="flex gap-10 justify-center">
			<ButtonIcon>
				<Image
					src="/assets/icons/instagram.svg"
					alt="instagram"
					height={30}
					width={30}
					className="text-[#F2F2F21A]"
				/>
			</ButtonIcon>

			<ButtonIcon>
				<Image
					src="/assets/icons/tiktok.svg"
					alt="tiktok"
					height={28}
					width={28}
					className="text-[#F2F2F21A]"
				/>
			</ButtonIcon>
			<ButtonIcon>
				<Image
					src="/assets/icons/youtube.svg"
					alt="youtube"
					height={30}
					width={30}
					className="text-[#F2F2F21A]"
				/>
			</ButtonIcon>
		</div>
	);
};
