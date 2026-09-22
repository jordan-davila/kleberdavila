import { TimelineMax as Timeline, Power1, Expo } from "gsap";

export const WorkEnterTimeline = (node, delay) => {
	const timeline = new Timeline({ paused: true });
	const nav = node.querySelectorAll("nav");
	const navLinks = node.querySelectorAll(".content a");
	const content = node.querySelectorAll(".content");

	let moveUpLeftSkew = "translate(-0.5vw, 0vw) skew(0deg, 0deg)";
	let moveUpSkew = "translate(0vw, 0vw) skew(0deg, 0deg)";

	timeline
		.to(node, 0.5, { delay: 0.5, autoAlpha: 1, zIndex: 1, ease: Power1.easeIn })
		.to(navLinks, 0.5, { transform: moveUpLeftSkew, ease: Power1.easeIn }, "-=0.5")
		.to(nav, 0.5, { transform: moveUpSkew, ease: Power1.easeIn }, "-=0.5")
		.to(navLinks, 0, { transition: "0.8s cubic-bezier(0.77, 0, 0.175, 1)" }) // Reset Trnastion
		.to(content, 3, { transform: "matrix(1, 0, 0, 1, 0, 0)", ease: Expo.easeOut }, "-=0.3");

	return timeline;
};

export const WorkExitTimeline = (node, delay) => {
	const timeline = new Timeline({ paused: true });
	const nav = node.querySelectorAll("nav");
	const navLinks = node.querySelectorAll(".content a");
	const content = node.querySelectorAll(".content");

	let moveDownSkew = "translate(0vw, 8vh) skew(0deg, 5deg)";

	timeline
		.to(node, 0.5, { autoAlpha: 0, zIndex: 2, ease: Power1.easeOut })
		.to([navLinks, nav, content], 0.5, { transform: moveDownSkew, ease: Power1.easeOut }, "-=0.5");

	return timeline;
};
