import { FC } from "react";
import Link from "next/link";

const Header: FC = () => {
	return (
		<div className="flex flex-col items-center bg-color pt-6">
			<h2 className="text-4xl anton-regular">Resolve</h2>
			<div className="flex items-baseline gap-x-28 py-6 manrope text-color text-sm">
				<a href="">Home</a>
				<a href="">Features</a>
				<a href="">Contact</a>
				<div className="flex gap-x-4 ">
					<button className="border border-black rounded-md py-2 px-5">Log In</button>
					<button className="main-green-color py-2 px-4 rounded-md">
						<Link href="/signin">Sign in</Link>
					</button>
				</div>
			</div>
		</div>
	);
};

export default Header;
