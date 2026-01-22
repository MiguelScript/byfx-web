import React from "react";

export const ButtonIcon = ({ children, className }: { children: React.ReactNode, className?: string }) => {
	return (
		<button className={`bg-[#F2F2F21A] p-3 rounded-[20px] ${className}`}>{children}</button>
	);
};
