import Link from "next/link";
import React from "react";

type LogoProps = {
	containerStyles?: string;
	linkStyles?: string;
};
const Logo: React.FC<LogoProps> = ({ containerStyles, linkStyles }) => {
	return (
		<div className={`${containerStyles}`}>
			<Link href="/">
				<h1 className={`${linkStyles}`}>Brainwave.io</h1>
			</Link>
		</div>
	);
};

export default Logo;
