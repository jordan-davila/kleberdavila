import Home from "./pages/Home";
import Work from "./pages/Work";
import Projects from "./pages/Projects";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Error404 from "./pages/Error404";

export const Pages = [
	{
		id: 0,
		isMainMenu: false,
		name: "Home",
		path: "/",
		params: "",
		colors: { text: "#2c2a2a", bg: "#fbfbfb", cursor: "#2c2a2a" },
        modelColor: 0x2c2a2a,
		component: Home
	},
	{
		id: 1,
		isMainMenu: true,
		name: "About",
		path: "/about",
		params: "",
		colors: { text: "#f2efe8", bg: "#2c2a2a", cursor: "#f73c3c" },
        modelColor: 0xf2efe8,
		component: About
	},
	{
		id: 2,
		isMainMenu: true,
		name: "Work",
		path: "/work",
		params: "",
		colors: { text: "#f73c3c", bg: "#2c2a2a", cursor: "#fbfbfb" },
        modelColor: 0xf73c3c,
		component: Work
	},
	{
		id: 3,
		isMainMenu: true,
		name: "Contact",
		path: "/contact",
		params: "",
		colors: { text: "#fbfbfb", bg: "#f73c3c", cursor: "#2c2a2a" },
        modelColor: 0xffffff,
		component: Contact
	},
	{
		id: 4,
		isMainMenu: false,
		name: "Projects",
		path: "/projects",
		params: "/:slug",
		colors: { text: "#f73c3c", bg: "#2c2a2a", cursor: "#fbfbfb" },
        modelColor: 0xffffff,
		component: Projects
	},
	{
		id: 5,
		isMainMenu: false,
		name: "Error404",
		path: "/404",
		params: "",
		colors: { text: "#fbfbfb", bg: "#f73c3c", cursor: "#2c2a2a" },
        modelColor: 0xffffff,
		component: Error404
	}
];
