import React from "react";
import Link from "next/link";
import Image from "next/image";

type Partner = {
	name: string;
	logo: string;
	url: string;
	tier: string;
};

// const tierBorderMap = {
//   [Tier.Title]:           "w-[15rem]      sm:w-72           md:w-72       lg:w-80       2xl:w-[19rem]",
//   [Tier.Gold]:            "w-[12.75rem]   sm:w-[14.75rem]   md:w-[16rem]  lg:w-72       2xl:w-[19rem]",
//   [Tier.Silver]:          "w-[11rem]      sm:w-52           md:w-60       lg:w-[16rem]  2xl:w-[17rem] ",
//   [Tier.Bronze]:          "w-32           sm:w-40           md:w-[12rem]  lg:w-[14rem]  2xl:w-[16rem]",
//   [Tier.Rowdy_Partner]:   "w-[7rem]       sm:w-32           md:w-40       lg:w-[11rem]  2xl:w-[13rem]",
//   [Tier.In_Kind_Partner]: "w-[6rem]       sm:w-[7rem]       md:w-32       lg:w-40       2xl:w-52",
// };

const tierColorMap: { [key: string]: string } = {
	["Title Sponsor"]: "text-purple-500",
	["Gold Sponsor"]: "text-yellow-600",
	["Silver Sponsor"]: "text-gray-400",
	["Bronze Sponsor"]: "text-amber-800",
	["Rowdy Partner"]: "text-blue-500",
	["Rowdy In-Kind"]: "text-red-500",
};

function PartnerCard({
	partner,
	is_title,
}: {
	partner: Partner;
	is_title: boolean;
}) {
	return (
		<Link
			href={partner?.url}
			target="_blank"
			className="group relative flex flex-col items-center transition-transform duration-300 ease-in-out hover:-translate-y-2"
		>
			<div className="relative h-[160px] w-[160px] sm:h-[180px] sm:w-[180px] md:h-[200px] md:w-[200px]">
				<Image
					src="/img/planet.png"
					alt="Planet base"
					fill
					className="absolute object-contain"
					priority
				/>
				<Image
					src={`/img/partner-logos/${partner.logo}`}
					alt={`${partner.name} logo`}
					fill
					className="absolute object-contain p-6"
				/>
			</div>
			<h2 className="pt-2 text-center text-sm sm:text-md">{partner.name}</h2>
		</Link>
	);
}

export default PartnerCard;