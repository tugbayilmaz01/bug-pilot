import { FC, useState } from "react";
import Slider from "@/components/Slider";
import Image from "../../public/assets/bug-pilot.png";
import Footer from "./Footer";

const Landing: FC = () => {
	const features = [
		{
			title: "Report Issues Easily",
			explanation: "Quickly document and track bugs with our user-friendly interface.",
		},
		{
			title: "Track Your Progress",
			explanation: "Monitor the status of each issue and stay updated on resolutions.",
		},
		{
			title: "Assign Tasks to Team",
			explanation: "Delegate tasks effectively to team members with clear responsibilities.",
		},
		{
			title: "Resolve Bugs Efficiently",
			explanation: "Address and fix issues promptly to maintain productivity.",
		},
		{
			title: "Communicate Within Platform",
			explanation: "Discuss bugs and solutions directly within the platform.",
		},
		{
			title: "Verify Fixes Thoroughly",
			explanation: "Ensure that resolved issues are thoroughly tested and fixed.",
		},
		{
			title: "Analyze Trends and Patterns",
			explanation: "Identify recurring issues and trends to prevent future problems.",
		},
	];

	const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
	return (
		<div className="relative">
			<div className="bg-color">
				<Slider />
				<div className="flex flex-row items-center justify-between px-8 pt-8 mx-6">
					<p className="manrope text-4xl max-w-2xl mb-24">
						Enhance your company’s efficiency and streamline issue resolution with our intuitive bug
						tracker!
					</p>

					<div className="flex-shrink-0 w-1/3 max-w-lg">
						<img src={Image.src} alt="developer-image" className="w-full h-auto" />
					</div>
				</div>
			</div>
			<div className="h-screen p-12">
				<div className="max-w-4xl mx-auto p-6 bg-color shadow-lg rounded-lg">
					<div className="manrope text-3xl font-bold mb-12 text-gray-800">
						Getting started with Resolve
					</div>
					<div className="flex flex-col space-y-4">
						{features.map((feature, index) => (
							<div
								key={index}
								className="flex items-start space-x-4 cursor-pointer"
								onClick={() => setSelectedIndex(index)}
							>
								<div className="flex-shrink-0">
									<div
										className={`w-4 h-4 border-2 rounded-full ${
											selectedIndex === index ? "main-green-color" : "border-gray-400"
										}`}
									></div>
								</div>
								<div className="flex-1 manrope">
									<div
										className={`text-lg font-semibold text-base ${
											selectedIndex === index ? "text-gray-800" : "text-gray-400"
										}`}
									>
										{feature.title}
									</div>
									{selectedIndex === index && (
										<p className="mt-2 text-gray-600">{feature.explanation}</p>
									)}
								</div>
							</div>
						))}
					</div>
				</div>
			</div>
			<Footer />
		</div>
	);
};

export default Landing;
