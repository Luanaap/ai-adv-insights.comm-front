import { defineRecipe } from "@chakra-ui/react";

export const radiomarkRecipe = defineRecipe({
	className: "minerva-radiomark",
	base: {
		display: "inline-flex",
		alignItems: "center",
		justifyContent: "center",
		flexShrink: 0,
		verticalAlign: "top",
		color: "white",
		borderWidth: "1px",
		borderColor: "border",
		borderRadius: "full",
		bg: "white",
		cursor: "radio",
		_focusVisible: {
			outline: "2px solid",
			outlineColor: "primary.500",
			outlineOffset: "2px",
		},
		_invalid: {
			colorPalette: "red",
			borderColor: "red.500",
		},
		_disabled: {
			opacity: "0.5",
			cursor: "disabled",
		},

		"& .dot": {
			height: "100%",
			width: "100%",
			borderRadius: "full",
			bg: "primary.500",
			scale: "0.4",
		},
	},

	variants: {
		variant: {
			solid: {
				borderWidth: "1px",
				borderColor: "primary.500",
				bg: "white",
				_checked: {
					bg: "white",
					color: "colorPalette.contrast",
					borderColor: "primary.500",
				},
			},
		},
	},

	defaultVariants: {
		variant: "solid",
	},
});
