import PricingFeatures from "@/components/pricing/PricingFeatures";
import PricingHero from "@/components/pricing/PricingHero";
import PricingPlans from "@/components/pricing/PricingPlans";

export default function Home() {
	return (
		<div>
			<PricingHero />
			<PricingPlans />
			<PricingFeatures />
		</div>
	);
}
