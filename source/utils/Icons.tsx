const Icons: any = {
	Thunderstorm: { unicode: "\ue31d", emoji: "⛈" },
	Drizzle: { unicode: "\ue319", emoji: "🌧" },
	Rain: { unicode: "\ue318", emoji: "🌧" },
	Snow: { unicode: "\ue308", emoji: "❄️" },
	Mist: { unicode: "\uf75f", emoji: "🌫" },
	Smoke: { unicode: "\ue35c", emoji: "🚬" },
	Haze: { unicode: "\ue3ae", emoji: "🌫" },
	Fog: { unicode: "\ue303", emoji: "🌫" },
	Sand: { unicode: "\ue37a", emoji: "🌫" },
	Dust: { unicode: "\ue35d", emoji: "🌫" },
	Ash: { unicode: "\ue3c0", emoji: "🌫" },
	Squall: { unicode: "\ue3c6", emoji: "🌫" },
	Tornado: { unicode: "\ue351", emoji: "🌪️" },
	Clear: { unicode: "\ue30d", emoji: "☀️" },
	Clouds: { unicode: "\ue30c", emoji: "☁️" },
};

export const getIcon = (main: string) => {
	const icon = Icons?.[`${main}`]?.emoji;
	return icon;
};
