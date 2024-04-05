import Link from "next/link";
import React from "react";
import Socials from "./Socials";

const footerMenu = [
	{
		title: "Company",
		links: [
			{ name: "About us", href: "/about" },
			{ name: "Contact us", href: "/contact" },
			{ name: "Careers", href: "/careers" },
			{ name: "Press", href: "/press" },
		],
	},
	{
		title: "Products",
		links: [
			{ name: "Features", href: "/features" },
			{ name: "Pricing", href: "/pricing" },
			{ name: "News", href: "/news" },
			{ name: "Help desk", href: "/help" },
			{ name: "Support", href: "/support" },
		],
	},
	{
		title: "Services",
		links: [
			{ name: "Digital Marketing", href: "/marketing" },
			{ name: "Content Writing", href: "/content" },
			{ name: "SEO for Business", href: "/seo" },
			{ name: "UI Design", href: "/uidesign" },
		],
	},
	{
		title: "Legal",
		links: [
			{ name: "Privacy Policy", href: "/privacy" },
			{ name: "Terms & Conditions", href: "/terms" },
			{ name: "Return Policy", href: "/returns" },
		],
	},
	{
		title: "Contact us",
		links: [
			{
				name: "support@brainwave.io",
				href: "mailto: support@brainwave.io",
			},
			{ name: "+133-394-3439-1435", href: "/" },
		],
	},
];
const Footer = () => {
	return (
		<footer className="bg-tertiary-color text-quaternary-color p-10 mt-28 w-full justify-center">
			<div className="container mx-auto grid grid-cols-2 lg:grid-cols-5 gap-8">
				{footerMenu.map((menu) => (
					<div key={menu.title}>
						<h5 className="text-white text-xs mb-6 opacity-65">
							{menu.title}
						</h5>
						<ul className="space-y-1">
							{menu.links.map((link) => (
								<li key={link.name}>
									<Link
										href={link.href}
										className="hover:text-white text-sm"
									>
										{link.name}
									</Link>
								</li>
							))}
						</ul>
					</div>
				))}
			</div>
			<div className="container mx-auto mt-8 border-t border-quinary-color pt-4 flex flex-col md:flex-row justify-between items-center">
				<p className="text-quaternary-color/65 text-xs">
					© 2024 Copyright, All Right Reserved, Made by Seiju_ui_ux
					with <span className="text-blue-500">❤</span>
				</p>
				<Socials />
			</div>
		</footer>
	);
};

export default Footer;
