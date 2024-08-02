import { FC, useEffect, useRef, useState } from "react";

const Slider: FC = () => {
	const sliderRef = useRef<HTMLDivElement>(null);
	const [scrolling, setScrolling] = useState(true);
	const scrollStep = 1;

	useEffect(() => {
		const slider = sliderRef.current;
		let animationFrameId: number;

		const scroll = () => {
			if (slider && scrolling) {
				slider.scrollLeft += scrollStep;

				if (slider.scrollLeft >= slider.scrollWidth / 2) {
					slider.scrollLeft = 0;
				}

				animationFrameId = requestAnimationFrame(scroll);
			}
		};

		const startScroll = () => {
			setScrolling(true);
			animationFrameId = requestAnimationFrame(scroll);
		};

		const stopScroll = () => {
			setScrolling(false);
			cancelAnimationFrame(animationFrameId);
		};

		if (slider) {
			slider.addEventListener("mouseenter", stopScroll);
			slider.addEventListener("mouseleave", startScroll);
			startScroll();
		}

		return () => {
			cancelAnimationFrame(animationFrameId);
			if (slider) {
				slider.removeEventListener("mouseenter", stopScroll);
				slider.removeEventListener("mouseleave", startScroll);
			}
		};
	}, [scrolling]);

	return (
		<div
			className="overflow-hidden whitespace-nowrap flex items-center main-green-color manrope"
			style={{ height: "55px", width: "100%", position: "relative" }}
			ref={sliderRef}
		>
			<div className="inline-block px-3">
				Streamline your bug management process, enhancing workflow and boosting efficiency.
			</div>
			<div className="inline-block px-3">
				Experience improved performance and productivity with intuitive bug-tracking tools.
			</div>
			<div className="inline-block px-3">
				Transform your bug-handling process for faster and easier issue resolution.
			</div>

			<div className="inline-block px-3">
				Streamline your bug management process, enhancing workflow and boosting efficiency.
			</div>
			<div className="inline-block px-3">
				Experience improved performance and productivity with intuitive bug-tracking tools.
			</div>
			<div className="inline-block px-3">
				Transform your bug-handling process for faster and easier issue resolution.
			</div>
		</div>
	);
};

export default Slider;
