import { TimelineMax as Timeline, Power1, Expo } from "gsap";

export const AboutEnterTimeline = (node, delay) => {
	const timeline = new Timeline({ paused: true });
	const nav = node.querySelectorAll("nav");
	const content = node.querySelectorAll(".content");
	timeline
		.to(node, 0.5, {
			delay: 0.5,
			autoAlpha: 1,
			zIndex: 1,
			ease: Power1.easeIn
		})
		.to(
			nav,
			0.5,
			{
				transform: "translate(-0.5vw, 0vw) skew(0deg, 0deg)",
				ease: Power1.easeIn
			},
			"-=0.5"
		)
		.to(content, 3, { transform: "matrix(1, 0, 0, 1, 0, 0)", ease: Expo.easeOut }, "+=0.3");
	return timeline;
};

export const AboutExitTimeline = (node, delay) => {
	const timeline = new Timeline({ paused: true });
	const nav = node.querySelectorAll("nav");
	timeline
		.to(node, 0.5, {
			autoAlpha: 0,
			zIndex: 2,
			ease: Power1.easeOut
		})
		.to(
			nav,
			0.5,
			{
				transform: "translate(0vw, 8vh) skew(0deg, 5deg)",
				ease: Power1.easeOut
			},
			"-=0.5"
		);
	return timeline;
};
