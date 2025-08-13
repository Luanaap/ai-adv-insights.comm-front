import { defineGlobalStyles } from "@chakra-ui/react";

export const globalCss = defineGlobalStyles({
	"*": {
		"&::-webkit-scrollbar": {
			width: "4px",
			height: "4px",
		},
		"&::-webkit-scrollbar-track": {
			width: "6px",
			height: "6px",
			background: "transparent",
		},
		"&::-webkit-scrollbar-thumb": {
			background: "#B8BEC4",
			borderRadius: "24px",
		},
	},
});
