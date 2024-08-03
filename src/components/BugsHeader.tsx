import { FC } from "react";
import Link from "next/link";

const BugsHeader: FC = () => {
	return (
		<div className="flex flex-col items-center bg-color pt-6">
			<h2 className="text-4xl anton-regular">
				<Link href="/">Resolve</Link>
			</h2>
			<div className="flex items-baseline py-4 manrope text-color text-sm w-full">
				<div className="flex gap-x-20 ml-8 ">
					<a className="underline-animation" href="#">
						Dashboard
					</a>
					<a className="underline-animation" href="#">
						Bugs
					</a>
					<a className="underline-animation" href="#">
						Profile
					</a>
				</div>
			</div>
		</div>
	);
};

export default BugsHeader;
