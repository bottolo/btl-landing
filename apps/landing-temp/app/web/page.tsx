"use client";

import dynamic from "next/dynamic";
import Link from "next/link";

const DynamicComponentWithNoSSR = dynamic(
	() => import("../../components/PixelCard/PixelCard"),
	{ ssr: false },
);

const galleryElements = [
	{ image: "", text: "cccd", link: "/web" },
	{ image: "", text: "mediation", link: "/games" },
	{ image: "", text: "pensiero selvaggio", link: "/about" },
	{ image: "", text: "eridanus", link: "/web" },
];
const Page = () => {
	return (
		<div className={"grid grid-cols-1 md:grid-cols-4 gap-4"}>
			{galleryElements.map((element) => (
				<Link href={element?.link} className={"cursor-pointer"}>
					<DynamicComponentWithNoSSR key={element?.text}>
						<div className={"absolute"}>
							<pre>{element?.text}</pre>
						</div>
					</DynamicComponentWithNoSSR>
				</Link>
			))}
		</div>
	);
};

export default Page;
