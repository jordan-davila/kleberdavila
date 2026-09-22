import { HomeExitTimeline, HomeEnterTimeline } from "./Home";
import { WorkExitTimeline, WorkEnterTimeline } from "./Work";
import { ProjectsExitTimeline, ProjectsEnterTimeline } from "./Projects";
import { AboutExitTimeline, AboutEnterTimeline } from "./About";
import { ContactExitTimeline, ContactEnterTimeline } from "./Contact";
import { ChangeBGColor, GetPath } from "../Helpers";
import { Pages } from "../Pages";
import _ from "lodash";

export const Play = (fullPath, node) => {
	let timeline;
	let path = GetPath(fullPath);

	let { colors } = _.find(Pages, ["path", path]);
	colors && ChangeBGColor(colors.bg);

	path === "/" && (timeline = HomeEnterTimeline(node));
	path === "/work" && (timeline = WorkEnterTimeline(node));
	path === "/projects" && (timeline = ProjectsEnterTimeline(node));
	path === "/about" && (timeline = AboutEnterTimeline(node));
	path === "/contact" && (timeline = ContactEnterTimeline(node));
	path === "/404" && (timeline = ProjectsEnterTimeline(node));

	window.loadPromise.then(() => requestAnimationFrame(() => timeline.play()));
};

export const Exit = (fullPath, node) => {
	let timeline;
	let path = GetPath(fullPath);

	path === "/" && (timeline = HomeExitTimeline(node));
	path === "/work" && (timeline = WorkExitTimeline(node));
	path === "/projects" && (timeline = ProjectsExitTimeline(node));
	path === "/about" && (timeline = AboutExitTimeline(node));
	path === "/contact" && (timeline = ContactExitTimeline(node));
	path === "/404" && (timeline = ProjectsExitTimeline(node));

	timeline.play();
};
