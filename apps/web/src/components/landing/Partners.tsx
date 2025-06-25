import partnerData from "./partners.json";
import PartnerCard from "./PartnerCard";
import Image from "next/image";

type Partner = {
	name: string;
	logo: string;
	url: string;
	tier: string;
};

export default function Partners() {
	// Christian Walker: Aware of weird bug from 1280px to 1286 px where background dissapears
	const marathon: Partner = {
		name: "Marathon",
		logo: "marathon_logo.svg",
		url: "https://www.marathonpetroleum.com/",
		tier: "Title Sponsor",
	};

	const tiers = [
		"Title Sponsor",
		"Gold Sponsor",
		"Silver Sponsor",
		"Bronze Sponsor",
		"Rowdy Partner",
		"Rowdy In-Kind",
	];

	return (
		<section className="relative flex min-h-screen w-full flex-col items-center justify-center gap-y-10 border-y-2 border-muted-foreground">
			{tiers.map((tier) => {
				const tierPartners = partnerData.partners.filter((p) => p.tier === tier);

				if (tierPartners.length === 0) return null;

				return (
					<div key={tier} className="w-full">
						<h2 className="mb-4 text-center text-2xl font-bold">{tier}</h2>
						<div className="relative overflow-x-auto no-scrollbar">
							<div className="flex w-max space-x-6 px-4 py-2">
								{tierPartners.map((partner) => (
									<PartnerCard key={partner.name} partner={partner} is_title={false} />
								))}
							</div>
						</div>
					</div>
				);
			})}
		</section>
	);
}
