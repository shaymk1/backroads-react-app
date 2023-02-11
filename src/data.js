import tourImageOne from "./images/tour-1.jpeg";
import tourImageTwo from "./images/tour-2.jpeg";
import tourImageThree from "./images/tour-3.jpeg";
import tourImageFour from "./images/tour-4.jpeg";

// nav
export const pageLinks = [
	{
		id: 1,
		href: "#home",
		page: "home",
	},

	{
		id: 2,
		href: "#about",
		page: "about",
	},

	{
		id: 3,
		href: "#services",
		page: "services",
	},

	{
		id: 4,
		href: "#tours",
		page: "tours",
	},
];

export const socialLinks = [
	{
		id: 1,
		href: "https://www.twitter.com",
		icon: "fab fa-facebook",
	},

	{
		id: 2,
		href: "https://www.twitter.com",
		icon: "fab fa-twitter",
	},

	{
		id: 3,
		href: "https://www.twitter.com",
		icon: "fab fa-squarespace",
	},
];

// serives

export const services = [
	{
		id: 1,
		icon: "fas fa-wallet fa-fw",
		title: "Tibet Adventure",
		text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
	},

	{
		id: 2,
		icon: "fas fa-tree fa-fw",
		title: "endless hiking",
		text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
	},

	{
		id: 3,
		icon: "fas fa-socks fa-fw",
		title: "amazing comfort",
		text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
	},
];

// tours

export const tours = [
	{
		id: 1,
		img: tourImageOne,
		date: "august 26th, 2020",
		title: "Tibet Adventure",
		text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
		icon: "fas fa-map",
		location: "china",
		days: 6,
		price: "$2100",
	},

	{
		id: 2,
		img: tourImageTwo,
		date: "october 1th, 2020",
		title: "explore hong kong",
		text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
		icon: "fas fa-map",
		location: "hong kong",
		days: 8,
		price: "$5000",
	},

	{
		id: 3,
		img: tourImageThree,
		date: "october 1th, 2020",
		title: "best of java",
		text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
		icon: "fas fa-map",
		location: "indonesia",
		days: 11,
		price: "$1400",
	},

	{
		id: 4,
		img: tourImageFour,
		date: "december 5th, 2019",
		title: "kenya highlights",
		text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
		icon: "fas fa-map",
		location: "kenya",
		days: 20,
		price: "$3300",
	},
];
