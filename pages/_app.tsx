import "../app/globals.css"; // Adjust the path as necessary
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function App({
	Component,
	pageProps,
}: {
	Component: React.ElementType;
	pageProps: any;
}) {
	return <Component {...pageProps} className={inter.className} />;
}
