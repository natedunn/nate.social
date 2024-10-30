export type Platform = {
	name: string;
	text: string;
	url?: string;
	emoji: string;
	tier: number;
};

const platforms: Platform[] = [
	{
		name: "Bluesky",
		text: "nate.social",
		url: "https://bsky.app/profile/nate.social",
		emoji: "🦋",
		tier: 1,
	},
	{
		name: "GitHub",
		text: "natedunn",
		url: "https://github.com/natedunn",
		emoji: "🐙",
		tier: 1,
	},
	{
		name: "Retro",
		text: "natedunn",
		emoji: "📸",
		tier: 1,
	},
	{
		name: "Discord",
		text: "natedunn",
		emoji: "💬",
		tier: 1,
	},
	{
		name: "RAD",
		text: "natedunn",
		url: "https://superrad.app/user/natedunn",
		emoji: "⭐",
		tier: 1,
	},
	{
		name: "Posts",
		text: "natedunn",
		emoji: "📝",
		url: "https://posts.cv/natedunn",
		tier: 2,
	},
	{
		name: "Twitter",
		text: "natedunn",
		url: "https://twitter.com/natedunn",
		emoji: "🐦",
		tier: 2,
	},
	{
		name: "LinkedIn",
		text: "nate-dunn",
		url: "https://www.linkedin.com/in/nate-dunn",
		emoji: "🟦",
		tier: 2,
	},
	{
		name: "Instagram",
		text: "natedunn",
		url: "https://www.instagram.com/natedunn",
		emoji: "🌄",
		tier: 2,
	},
	{
		name: "Threads",
		text: "natedunn",
		url: "https://threads.net/@natedunn",
		emoji: "🧵",
		tier: 2,
	},
	{
		name: "Mastodon",
		text: "natedunn@hachyderm.io",
		url: "https://hachyderm.io/@natedunn",
		emoji: "🐘",
		tier: 2,
	},
	{
		name: "Email",
		text: "hello@natedunn.net",
		url: "mailto:hello@natedunn.net",
		emoji: "📧",
		tier: 3,
	},
	{
		name: "Website",
		text: "natedunn.net",
		url: "https://natedunn.net",
		emoji: "🌐",
		tier: 3,
	},
];

export default platforms;
