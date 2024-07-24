import { FC } from "react";
import Header from "@/components/Header";
import Slider from "@/components/Slider";

const HomePage: FC = () => {
	return (
		<div>
			<Header />
			<Slider />
			<div className="bg-color h-screen">
				Enhance your company’s efficiency and streamline issue resolution with our intuitive bug
				tracker, designed to simplify management and boost productivity.
			</div>
		</div>
	);
};

export default HomePage;
