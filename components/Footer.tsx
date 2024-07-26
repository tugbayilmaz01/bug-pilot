import { FC } from "react";

const Footer: FC = () => {
	return (
		<footer className="bg-black text-white py-6 ">
			<div className="max-w-screen-lg mx-auto px-4">
				<div className="flex flex-col md:flex-row justify-between items-center"></div>
				<div className="text-sm manrope">Contact Us</div>
				<div className="text-sm space-mono-regular">tugbayill01@gmail.com</div>
				<div className="text-center mt-4">
					<p className="text-sm space-mono-regular">
						&copy; {new Date().getFullYear()}
						<span className="green-text-color "> Resolve.</span> All rights reserved.
					</p>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
