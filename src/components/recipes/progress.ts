import { defineSlotRecipe } from "@chakra-ui/react";

export const progressSlotRecipe = defineSlotRecipe({
	slots: ["root", "track", "range", "label", "valueText"],
	className: "chakra-progress",
	base: {
		root: {
			textStyle: "sm",
			position: "relative",
		},
		track: {
			overflow: "hidden",
			position: "relative",
			bgColor: "disabled",
			outline: "none",
			boxShadow: "none",
			height: "4px",
			maxH: "4px",
		},
		range: {
			boxSizing: "content-box",
			display: "flex",
			alignItems: "center",
			justifyContent: "center",
			transitionProperty: "width, height",
			transitionDuration: "slow",
			borderRight: "4px",
			borderRightStyle: "solid",
			borderRightColor: "primary.bg",
			borderLeft: "none",
			borderTop: "none",
			borderBottom: "none",
			height: "4px",
			bgColor: "primary.500",
			_indeterminate: {
				"--animate-from-x": "-40%",
				"--animate-to-x": "100%",
				position: "absolute",
				willChange: "left",
				minWidth: "50%",
				animation: "position 1s ease infinite normal none running",
				backgroundImage: `linear-gradient(to right, transparent 0%, var(--track-color) 50%, transparent 100%)`,
			},
		},
		label: {
			display: "inline-flex",
			fontWeight: "medium",
			alignItems: "center",
			gap: "1",
		},
		valueText: {
			textStyle: "xs",
			lineHeight: "1",
			fontWeight: "medium",
		},
	},

	variants: {
		variant: {
			default: {
				track: {
					bgColor: "disabled",
				},
				range: {
					bgColor: "primary.500",
				},
			},
		},

		shape: {
			square: {},
			rounded: {
				track: {
					borderRadius: "l1",
				},
			},
			full: {
				track: {
					borderRadius: "full",
				},
			},
		},

		striped: {
			true: {
				range: {
					backgroundImage: `linear-gradient(45deg, var(--stripe-color) 25%, transparent 25%, transparent 50%, var(--stripe-color) 50%, var(--stripe-color) 75%, transparent 75%, transparent)`,
					backgroundSize: `var(--stripe-size) var(--stripe-size)`,
					"--stripe-size": "1rem",
					"--stripe-color": {
						_light: "rgba(255, 255, 255, 0.3)",
						_dark: "rgba(0, 0, 0, 0.3)",
					},
				},
			},
		},

		animated: {
			true: {
				range: {
					"--animate-from": "var(--stripe-size)",
					animation: "bg-position 1s linear infinite",
				},
			},
		},

		size: {
			xs: {
				track: { h: "1.5" },
			},
			sm: {
				track: { h: "2" },
			},
			md: {
				track: { h: "2.5" },
			},
			lg: {
				track: { h: "3" },
			},
			xl: {
				track: { h: "4" },
			},
		},
	},

	defaultVariants: {
		variant: "default",
		size: "md",
		shape: "rounded",
	},
});
