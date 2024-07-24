import "../app/globals.css";
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
