import Link from "next/link";
import React, { useState } from "react";

export const NavItem = ({
	path,
	name,
	isActive,
	currentPathPosition,
	position,
	onClick,
}: {
	path: string;
	name: string;
	isActive: boolean;
	onClick: () => void;
	currentPathPosition: number;
	position: number;
}) => {
	const [animation, setAnimation] = useState("");
	const getAnimation = (currentPathPosition: number, position: number) => {
		if (currentPathPosition === position) {
			return "";
		}

		return currentPathPosition < position
			? "animate__slideInLeft"
			: "animate__slideInRight";
	};

	return (
		<div
			className="min-h-[50px] flex flex-col"
			onClick={() => {
				setAnimation(getAnimation(currentPathPosition, position));
				onClick();
			}}
		>
			<Link href={path}>
				<p className="text-2xl">{name}</p>
			</Link>
			<div
				className={`${isActive ? "block" : "hidden"} ${isActive ? animation : ""} animate__animated animate__faster flex justify-center items-center`}
			>
				<div className=" w-3 h-3 bg-[#ACFF6A] rounded-full"></div>
			</div>
		</div>
	);
};
