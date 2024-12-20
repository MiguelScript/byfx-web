import React from "react";
import { Spinner } from "../spinners/Spinner";

const buttonVariants = {
	dark: "btn-dark",
	default: "btn-default",
};

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
	variant?: string;
	classNames?: string;
	disabled?: boolean;
	isLoading?: boolean;
}
export const Button = ({
	children,
	variant = "default",
	type = "button",
	classNames = "",
	disabled,
	isLoading = false,
}: ButtonProps) => {
	return (
		<button
			disabled={disabled || isLoading}
			type={type}
			className={` px-8 py-2 rounded-[15px] ${buttonVariants[variant as keyof typeof buttonVariants]} ${classNames}`}
		>
			{!isLoading && children}
			{isLoading && <Spinner h="h-4" w="w-4" />}
		</button>
	);
};
