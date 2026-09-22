// Helper Functions

export const ChangeBGColor = (bg, cursor) => {
	let root = document.documentElement;
	let home = document.querySelector(".home");
	root.style.setProperty("--root-color-bg", bg);
	cursor && home.style.setProperty("--color-cursor", cursor);
};

export const GetPath = fullPath => {
	return fullPath === "/" ? fullPath : "/" + fullPath.split("/")[1];
};
