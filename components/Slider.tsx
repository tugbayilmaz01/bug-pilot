import { FC, useEffect, useRef, useState } from "react";

const Slider: FC = () => {
	const sliderRef = useRef<HTMLDivElement>(null);
	const [scrolling, setScrolling] = useState(true);
	const scrollStep = 1;

	useEffect(() => {
		const slider = sliderRef.current;
		let animationFrameId: number;

		const startScroll = () => {
			const scroll = () => {
				if (slider && scrolling) {
					slider.scrollLeft += scrollStep;

					if (slider.scrollLeft >= slider.scrollWidth / 2) {
						slider.scrollLeft = 0;
					}

					animationFrameId = requestAnimationFrame(scroll);
				}
			};

			scroll();
		};

		const stopScroll = () => {
			setScrolling(false);
			cancelAnimationFrame(animationFrameId);
		};

		if (slider) {
			slider.addEventListener("mouseenter", stopScroll);
			slider.addEventListener("mouseleave", () => {
				setScrolling(true);
				startScroll();
			});
			startScroll();
		}

		return () => {
			stopScroll();
			if (slider) {
				slider.removeEventListener("mouseenter", stopScroll);
				slider.removeEventListener("mouseleave", () => {
					setScrolling(true);
					startScroll();
				});
			}
		};
	}, [scrolling]);

	return (
		<div
			className="overflow-hidden whitespace-nowrap flex items-center green-color manrope"
			style={{ height: "50px", width: "100%", position: "relative" }}
			ref={sliderRef}
		>
			<div className="inline-block px-4">
				Streamline your bug management process, enhancing workflow and boosting efficiency.
			</div>
			<div className="inline-block px-4">
				Experience improved performance and productivity with intuitive bug-tracking tools.
			</div>
			<div className="inline-block px-4">
				Transform your bug-handling process for faster and easier issue resolution.
			</div>

			<div className="inline-block px-4">
				Streamline your bug management process, enhancing workflow and boosting efficiency
			</div>
			<div className="inline-block px-4">
				Experience improved performance and productivity with intuitive bug-tracking tools
			</div>
			<div className="inline-block px-4">
				Transform your bug-handling process for faster and easier issue resolution
			</div>
		</div>
	);
};

export default Slider;
