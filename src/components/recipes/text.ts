import { defineTextStyles } from "@chakra-ui/react";

export const textStyles = defineTextStyles({
	base: {
		description: "The body text style - used in paragraphs",
		value: {
			fontFamily: "BTGPactualSans",
			fontWeight: "400",
			fontSize: "body.base",
			lineHeight: "24px",
			letterSpacing: "0",
			textDecoration: "None",
			textTransform: "None",
		},
	},
	bold: {
		description: "A bolder version",
		value: {
			fontFamily: "BTGPactualSans",
			fontWeight: "400",
			fontSize: "body.base",
			lineHeight: "24px",
			letterSpacing: "0",
			textDecoration: "None",
			textTransform: "None",
		},
	},
	light: {
		description: "A lighter version",
		value: {
			fontFamily: "BTGPactualSans",
			fontWeight: "400",
			fontSize: "body.base",
			lineHeight: "24px",
			letterSpacing: "0",
			textDecoration: "None",
			textTransform: "None",
		},
	},
});
