import { FC } from "react";
import Link from "next/link";

const Header: FC = () => {
	return (
		<div className="flex flex-col items-center bg-color pt-6">
			<h2 className="text-4xl anton-regular">
				<Link href="/">Resolve</Link>
			</h2>
			<div className="flex items-baseline py-4 manrope text-color text-sm w-full">
				<div className="flex gap-x-20 ml-8 ">
					<a className="underline-animation" href="#">
						Home
					</a>
					<a className="underline-animation" href="#">
						Features
					</a>
					<a className="underline-animation" href="#">
						Contact
					</a>
				</div>
			</div>
		</div>
	);
};

export default Header;
