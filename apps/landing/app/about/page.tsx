import FuzzyText from "../../components/FuzzyText/FuzzyText";

const Page = () => {
	const randomPhrases = [
		"nothing will be said as there is nothing to be said about me and",
		"the end is never here",
		"we resonate while",
		"questions about meanings",
		"nothing",
		"nothing to be sorry for",
		"i wonder why",
		"we need to talk",
		"we need to exist",
		"we will cease to exist",
	];

	const generateRandomPosition = () => ({
		top: Math.random() * 85 + "%",
		left: Math.random() * 85 + "%",
	});

	return (
		<div className="absolute w-screen h-screen overflow-hidden bg-transparent">
			{Array.from({ length: 300 }, (_, index) => {
				const position = generateRandomPosition();
				return (
					<div
						key={index}
						className="absolute text-sm text-gray-700 whitespace-nowrap opacity-30"
						style={{
							top: position.top,
							left: position.left,
						}}
					>
						<FuzzyText fontSize={18} enableHover={true}>
							{randomPhrases[Math.floor(Math.random() * randomPhrases.length)]}
						</FuzzyText>
					</div>
				);
			})}
		</div>
	);
};

export default Page;
