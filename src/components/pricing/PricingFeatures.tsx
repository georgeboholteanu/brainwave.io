import React from "react";

import Image from "next/image";

const PricingCards = [
	{
		title: "Check our features",
		description:
			"With lots of unique blocks, you can easily build a page without coding. Build your next consultancy website within few minutes.",
		image: "/assets/icons/quick-setup.svg",
	},
	{
		title: "Create custom orders",
		description:
			"With lots of unique blocks, you can easily build a page without coding. Build your next landing page.",
		image: "/assets/icons/custom-orders.svg",
	},
	{
		title: "Multiple coupons",
		description:
			"With lots of unique blocks, you can easily build a page without coding. Build your next landing page.",
		image: "/assets/icons/multiple-coupons.svg",
	},
	{
		title: "Organize your campaigns",
		description:
			"With lots of unique blocks, you can easily build a page without coding. Build your next landing page.",
		image: "/assets/icons/organize-campaigns.svg",
	},
	{
		title: "Manage customers",
		description:
			"With lots of unique blocks, you can easily build a page without coding. Build your next consultancy website within few minutes.",
		image: "/assets/icons/manage-customers.svg",
	},
	{
		title: "Track progress fast",
		description:
			"With lots of unique blocks, you can easily build a page without coding. Build your next consultancy website within few minutes.",
		image: "/assets/icons/track-progress.svg",
	},
];
const PricingFeatures = () => {
	return (
		<div className="mt-20 md:mt-40  mx-5 flex flex-col items-center justify-center gap-5">
			<div>
				<h2 className="font-gilroyExtraBold text-3xl md:text-5xl text-center">
					Check our features
				</h2>
				<p className="text-[19px] text-center mt-10">
					With lots of unique blocks, you can easily build a page
					without coding. <br />
					Build your next consultancy website within few minutes.
				</p>
			</div>
			{/* FEATURES LIST */}
			<div className="mx-auto mt-20 container gap-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
				{PricingCards.map((card) => (
					<div key={card.title} className="flex gap-6 items-start">
						<Image src={card.image} alt="" width={70} height={70} />
						<div className="flex flex-col gap-4">
							<h5 className="font-gilroyExtraBold text-xl">
								{card.title}
							</h5>
							<p className="text-[17px] opacity-70">
								{card.description}
							</p>
						</div>
					</div>
				))}
			</div>
		</div>
	);
};

export default PricingFeatures;
