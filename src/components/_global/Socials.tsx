import Link from "next/link";
import React from "react";
import Image from "next/image";

const socialIcons = [
	{
		name: "Facebook",
		href: "https://facebook.com",
		path: "/assets/icons/facebook.svg",
	},
	{
		name: "Twitter",
		href: "https://twitter.com",
		path: "/assets/icons/twitter.svg",
	},
	{
		name: "Instagram",
		href: "https://instagram.com",
		path: "/assets/icons/instagram.svg",
	},
	{
		name: "Linkedin",
		href: "https://linkedin.com",
		path: "/assets/icons/linkedin.svg",
	},
];
const Socials = () => {
	return (
		<div className="flex space-x-8 mt-4 md:mt-0">
			{socialIcons.map((icon) => (
				<Link href={icon.href} key={icon.name} target="_blank">
					<Image
						src={icon.path}
						width={18}
						height={18}
						alt={icon.name}
					/>
				</Link>
			))}
		</div>
	);
};

export default Socials;
