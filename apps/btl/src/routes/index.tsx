import { createFileRoute, Link } from "@tanstack/react-router";
import PixelCard from "../blocks/Components/PixelCard/PixelCard.tsx";

export const Route = createFileRoute("/")({
	component: RouteComponent,
});

function RouteComponent() {
	const galleryElements = [
		{ image: "", text: "web apps", link: "/web" },
		{ image: "", text: "games", link: "/games" },
		{ image: "", text: "about", link: "/about" },
		{ image: "", text: "azazottostack", link: "/web" },
	];

	return (
		<div className={"relative grid grid-cols-1 md:grid-cols-4 gap-4"}>
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
}
