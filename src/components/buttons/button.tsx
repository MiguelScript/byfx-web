import React from "react";

const buttonVariants = {
	dark: "btn-dark",
	default: "btn-default",
};

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
	variant?: string;
	classNames?: string;
}
export const Button = ({
	children,
	variant = "default",
	type = "button",
	classNames = "",
}: ButtonProps) => {
	return (
		<button
			type={type}
			className={` px-8 py-2 rounded-[15px] ${buttonVariants[variant as keyof typeof buttonVariants]} ${classNames}`}
		>
			{children}
		</button>
	);
};
