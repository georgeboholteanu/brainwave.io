import Link from "next/link";
import React from "react";

type CustomButtonProps = {
	buttonName?: string;
	buttonStyles?: string;
	buttonLink?: string;
};

const CustomButton: React.FC<CustomButtonProps> = ({
	buttonName,
	buttonStyles,
	buttonLink,
}) => {
	return (
		<div className={`${buttonStyles}`}>
			<Link href={`${buttonLink}`}>{buttonName}</Link>
		</div>
	);
};

export default CustomButton;
