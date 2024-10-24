import React from "react";

const buttonVariants = {
	dark: "btn-dark",
	default: "btn-default",
};

export const Button = ({
	children,
	variant = "default",
}: {
	children: React.ReactNode;
	variant?: string;
}) => {
	return (
		<button
			className={` px-8 py-2 rounded-[15px] ${buttonVariants[variant as keyof typeof buttonVariants]}`}
		>
			{children}
		</button>
	);
};
