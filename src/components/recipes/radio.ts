import { defineSlotRecipe } from "@chakra-ui/react";

export const radioCardSlotRecipe = defineSlotRecipe({
	className: "minerva-radio-card",
	slots: ["root", "item", "itemIndicator"],
	base: {
		root: {
			borderColor: "primary.200",
		},
		item: {
			boxShadow: "none",
			borderWidth: "2px",
			borderStyle: "solid",
			borderColor: "primary.200",
		},
	},

	variants: {
		variant: {
			outline: {
				item: {
					py: "16px",
					borderColor: "black.16",
					borderWidth: "1px",
					borderStyle: "solid",
					boxShadow: "none",
					bg: "transparent",
					color: "black",
					_checked: {
						borderWidth: "2px",
						boxShadow: "none",
						bg: "transparent",
						color: "black",
						borderColor: "primary.200",
					},
				},
				itemIndicator: {},
			},
		},
	},

	defaultVariants: {
		variant: "outline",
	},
});
