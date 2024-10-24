import React from "react";

export const CardGeneral = ({
	children,
	extraClass,
}: {
	children: React.ReactNode;
	extraClass?: string;
}) => {
	return (
		<div className={`bg-[#F2F2F21A] backdrop-blur-xl ${extraClass}`}>
			{children}
		</div>
	);
};
