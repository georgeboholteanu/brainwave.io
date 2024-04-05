import Link from "next/link";
import CustomButton from "./CustomButton";

type NavbarProps = {
	containerStyles: string;
	linkStyles: string;
};

const navLinks = [
	{ path: "/", name: "Demos" },
	{ path: "/pages", name: "Pages" },
	{ path: "/support", name: "Support" },
	{ path: "/contact", name: "Contact" },
];

const Navbar: React.FC<NavbarProps> = ({ containerStyles, linkStyles }) => {
	return (
		<nav className={`${containerStyles}`}>
			{navLinks.map((link, index) => {
				return (
					<Link
						href={link.path}
						key={index}
						className={` ${linkStyles}`}
					>
						{link.name}
					</Link>
				);
			})}
			<span className="text-gray-300 font-thin"> | </span>
			<Link href="/signin" className={`${linkStyles}`}>
				Sign In
			</Link>
            <CustomButton buttonName="Sign Up" buttonStyles="px-6 py-3 rounded-md text-sm text-white bg-indigo-600" />
		</nav>
	);
};

export default Navbar;
