import { TimelineMax as Timeline, Power1, Expo } from "gsap";

export const HomeEnterTimeline = (node, delay) => {
	const timeline = new Timeline({ paused: true });
	const nav = node.querySelectorAll("nav");
	const navLinks = node.querySelectorAll("nav a");
	const h1 = node.querySelectorAll("header h1");
	const h2 = node.querySelectorAll("header h2");
	const footerLinks = node.querySelectorAll("footer a");
	const line = node.querySelectorAll(".line");

	timeline
		.to(node, 0.5, {
			autoAlpha: 1,
			zIndex: 1,
			ease: Power1.easeIn
		})
		.to(
			[navLinks, h1, h2, footerLinks, line],
			0.5,
			{
				transform: "translate(0vw, 0vw) skew(0deg, 0deg)",
				ease: Power1.easeIn
			},
			"-=0.5"
		)
		.to([navLinks, line], 0, { transition: "0.8s cubic-bezier(0.77, 0, 0.175, 1)" }) // Reset Trnastion
		.to(nav, 3, { scaleX: 1, scaleY: 1, ease: Expo.easeOut }, "+=0.3");

	return timeline;
};

export const HomeExitTimeline = (node, delay) => {
	const timeline = new Timeline({ paused: true });
	const nav = node.querySelectorAll("nav");
	const navLinks = node.querySelectorAll("nav a");
	const h1 = node.querySelectorAll("header h1");
	const h2 = node.querySelectorAll("header h2");
	const footerLinks = node.querySelectorAll("footer a");
	const line = node.querySelectorAll(".line");

	timeline
		.to(node, 0.5, {
			autoAlpha: 0,
			zIndex: 2,
			ease: Power1.easeOut
		})
		.to(
			[navLinks, h1, h2, footerLinks, line, nav],
			0.5,
			{
				transform: "translate(0vw, 8vh) skew(0deg, 5deg)",
				ease: Power1.easeOut
			},
			"-=0.5"
		);

	return timeline;
};
