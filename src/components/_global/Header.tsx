import React from "react";
import Logo from "./Logo";
import Navbar from "./Navbar";

const Header = () => {
	return (
		<header className="container mx-auto flex items-center justify-between mt-4">
			<Logo containerStyles="text-xl font-gilroyExtraBold" />
			<Navbar
				containerStyles="gap-8 items-center hidden sm:flex"
				linkStyles="text-sm hover:text-primary-color font-gilroyExtraBold"
			/>
		</header>
	);
};

export default Header;
