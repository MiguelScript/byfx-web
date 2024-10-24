import React from "react";

export const ButtonIcon = ({ children }: { children: React.ReactNode }) => {
	return (
		<button className="bg-[#F2F2F21A] p-3 rounded-[20px]">{children}</button>
	);
};
