import { FC } from "react";

const Header: FC = () => {
	return (
		<div className="flex flex-col items-center justify-center bg-color py-6">
			<h2 className="text-4xl anton-regular">Resolve</h2>
			<div className="flex items-baseline gap-x-28 py-6 manrope text-color text-sm">
				<a href="">Features</a>
				{/* 	<a href="">How It Works</a> */}
				<a href="">Thoughts</a>
				<a href="">Contact</a>
				<div className="flex gap-x-4 ml-24">
					<button className="border border-black rounded-md py-2 px-5">Log In</button>
					<button className="green-color py-2 px-3 rounded-md">Register</button>
				</div>
			</div>
		</div>
	);
};

export default Header;
