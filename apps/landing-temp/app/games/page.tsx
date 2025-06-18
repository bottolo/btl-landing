import Link from "next/link";
import PixelCard from "../../components/PixelCard/PixelCard";

const galleryElements = [
	{ image: "", text: "noclip", link: "/web" },
	{ image: "", text: "octant", link: "/games" },
	{ image: "", text: "visio", link: "/about" },
	{ image: "", text: "apus", link: "/web" },
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
