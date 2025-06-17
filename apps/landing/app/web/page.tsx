import Link from "next/link";
import PixelCard from "../../components/PixelCard/PixelCard";

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
					<PixelCard key={element?.text}>
						<div className={"absolute"}>
							<pre>{element?.text}</pre>
						</div>
					</PixelCard>
				</Link>
			))}
		</div>
	);
};

export default Page;
