"use client";
import React from "react";
import Toggle from "react-toggle";
import "react-toggle/style.css";
import Link from "next/link";
import Image from "next/image";
import RightArrowSvg from "./RightArrowSvg";

const pricingPlans = [
	{
		name: "Starter",
		price: 19,
		features: [
			{ name: "Commercial Licence", available: true },
			{ name: "100+ HTML UI Elements", available: true },
			{ name: "01 Domain Support", available: true },
			{ name: "6 Months Premium support", available: false },
			{ name: "Lifetime Updates", available: false },
		],
	},
	{
		name: "Standard",
		price: 49,
		features: [
			{ name: "Commercial Licence", available: true },
			{ name: "100+ HTML UI Elements", available: true },
			{ name: "01 Domain Support", available: true },
			{ name: "6 Months Premium support", available: true },
			{ name: "Lifetime Updates", available: false },
		],
	},
	{
		name: "Premium",
		price: 99,
		features: [
			{ name: "Commercial Licence", available: true },
			{ name: "100+ HTML UI Elements", available: true },
			{ name: "01 Domain Support", available: true },
			{ name: "6 Months Premium support", available: true },
			{ name: "Lifetime Updates", available: true },
		],
	},
];

const PricingPlans = () => {
	const [toggled, setToggle] = React.useState(false);
	const [hover, setHover] = React.useState(false);

	const handleToggleChange = () => {
		setToggle(!toggled);
		console.log(toggled);
	};

	const handleHoverBtn = () => {
		setHover(!hover);
	};

	return (
		<div>
			{/* TOGGLE PLANS SECTION*/}
			<div className="flex mt-20 mx-3 gap-5 justify-center">
				<p>Monthly</p>
				<Toggle
					id="toggle-status"
					defaultChecked={toggled}
					aria-labelledby="toggle-label"
					onChange={handleToggleChange}
				/>
				<p>Yearly</p>
				<div className="py-1 px-4 text-xs rounded-full font-gilroyExtraBold uppercase text-secondary-color bg-secondary-color/10">
					SAVE 25%
				</div>
			</div>
			{/* PRICING PLANS */}
			<div
				className={`container mx-auto mt-12 gap-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3`}
			>
				{pricingPlans.map((plan) => {
					return (
						<div
							key={plan.name}
							className="flex flex-col mx-5 p-10 justify-between border border-border-color rounded-xl"
						>
							<p className="text-secondary-color uppercase font-gilroyExtraBold text-xs tracking-widest">
								{plan.name}
							</p>
							<p className="font-gilroyExtraBold text-md mt-10">
								<span className="text-2xl">$</span>
								<span className="text-6xl">{plan.price}</span>
								<span className="text-md font-gilroyLight">
									/month
								</span>
							</p>
							<p className="text-sm mt-2 text-primary-color/70">
								billed monthly
							</p>
							<div className="text-md my-8 flex flex-col gap-y-3">
								{plan.features.map((feature) => {
									if (feature.available) {
										return (
											<div
												key={feature.name}
												className="flex items-center gap-2"
											>
												<Image
													src={
														"/assets/icons/checked.svg"
													}
													alt=""
													width={17}
													height={12}
												/>
												<p className="">
													{feature.name}
												</p>
											</div>
										);
									} else {
										return (
											<div
												key={feature.name}
												className="flex items-center gap-3"
											>
												<Image
													src={
														"/assets/icons/unchecked.svg"
													}
													alt=""
													width={12}
													height={12}
												/>

												<p className="opacity-70">
													{feature.name}
												</p>
											</div>
										);
									}
								})}
							</div>
							<div>
								<button className="bg-secondary-color/10 hover:bg-secondary-color text-secondary-color hover:text-white transition-all w-[205px] flex items-center justify-between gap-4  px-6 py-4 rounded-lg ">
									<Link href="/signup">
										<span className="font-gilroyExtraBold text-md">
											Start free trial
										</span>
									</Link>

									<RightArrowSvg />
								</button>

								<p className="mt-4">No credit card required</p>
							</div>
						</div>
					);
				})}
			</div>
		</div>
	);
};

export default PricingPlans;