import React from "react";
import Header from "@/components/Header";

const LogIn: React.FC = () => {
	return (
		<div className="h-screen bg-color">
			<Header />
			<div className="flex items-center justify-center mt-12 manrope">
				<div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-sm">
					<div className="text-2xl mb-6 text-center">Log In</div>
					<div className="flex flex-col gap-y-4">
						<input
							type="email"
							placeholder="Email"
							className="border border-gray-300 p-2 rounded"
						/>
						<input
							type="password"
							placeholder="Password"
							className="border border-gray-300 p-2 rounded"
						/>
					</div>
					<button className="mt-6 w-full main-green-color text-black p-2 rounded hover:bg-purple-300">
						Log In
					</button>
				</div>
			</div>
		</div>
	);
};

export default LogIn;
