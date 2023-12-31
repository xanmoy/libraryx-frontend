export type SiteConfig = typeof siteConfig;

export const siteConfig = {
	name: "LibraryX",
	description: "Online Library Management System",
	navItems: [
		{
			label: "Home",
			href: "/",
		},
		{
			label: "Dashboard",
			href: "/dashboard",
		},
		{
			label: "Transaction",
			href: "/transaction",
		},
		{
			label: "Books",
			href: "/books",
		},
		// {
		// 	label: "Safety",
		// 	href: "/safety",
		// },
		{
			label: "About",
			href: "/about",
		}
	],
	navMenuItems: [
		{
			label: "Home",
			href: "/",
		},
		{
			label: "Dashboard",
			href: "/dashboard",
		},
		{
			label: "Transaction",
			href: "/transaction",
		},
		{
			label: "Books",
			href: "/books",
		},
		{
			label: "About",
			href: "/about",
		},
		{
			label: "Logout",
			href: "/logout",
		},
	],
	links: {
		github: "https://github.com/nextui-org/nextui",
		twitter: "https://twitter.com/getnextui",
		docs: "https://nextui.org",
		discord: "https://discord.gg/9b6yyZKmH4",
		sponsor: "https://patreon.com/jrgarciadev"
	},
};
