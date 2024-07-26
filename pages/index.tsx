// pages/index.tsx
import { FC } from "react";
import Header from "@/components/Header";
import Landing from "@/components/Landing"; // Adjust the path as necessary

const HomePage: FC = () => {
	return (
		<div>
			<Header />
			<Landing />
		</div>
	);
};

export default HomePage;
