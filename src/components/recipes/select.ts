import { defineSlotRecipe } from "@chakra-ui/react";

export const selectSlotRecipe = defineSlotRecipe({
	className: "minerva-select",
	slots: [
		"root",
		"trigger",
		"content",
		"indicator",
		"indicatorGroup",
		"item",
		"control",
		"itemText",
		"itemGroup",
		"itemGroupLabel",
		"label",
		"valueText",
	],
	base: {
		root: {
			display: "flex",
			flexDirection: "column",
			gap: "1.5",
			width: "full",
		},
		trigger: {
			display: "flex",
			alignItems: "center",
			justifyContent: "space-between",
			width: "full",
			minH: "var(--select-trigger-height)",
			px: "var(--select-trigger-padding-x)",
			borderRadius: "12",
			userSelect: "none",
			textAlign: "start",
			focusVisibleRing: "inside",
			_placeholderShown: {
				color: "fg.muted",
			},
			_disabled: {
				layerStyle: "disabled",
			},
			_invalid: {
				borderColor: "border.error",
			},
			_focusVisible: {
				outline: "none",
			},
		},
		indicatorGroup: {
			display: "flex",
			alignItems: "center",
			gap: "1",
			pos: "absolute",
			right: "0",
			top: "0",
			bottom: "0",
			px: "var(--select-trigger-padding-x)",
			pointerEvents: "none",
		},
		indicator: {
			display: "flex",
			alignItems: "center",
			justifyContent: "center",
			color: { base: "fg.muted", _disabled: "fg.subtle", _invalid: "fg.error" },
		},
		content: {
			display: "flex",
			flexDirection: "column",
			zIndex: "dropdown",
			borderRadius: "l2",
			borderLeft: "1px",
			borderTop: "1px",
			borderRight: "1px",
			borderColor: "black.16",
			borderStyle: "solid",
			maxH: "72",
			overflowY: "auto",
			boxShadow: "md",
			_open: {
				animationStyle: "slide-fade-in",
				animationDuration: "fast",
				p: "0",
			},
			_closed: {
				animationStyle: "slide-fade-out",
				animationDuration: "fastest",
			},
		},
		item: {
			fontSize: "body.base",
			color: "black.96",
			borderRadius: "0",
			borderBottom: "1px",
			borderColor: "black.16",
			borderStyle: "solid",
			position: "relative",
			userSelect: "none",
			display: "flex",
			alignItems: "center",
			cursor: "option",
			justifyContent: "space-between",
			flex: "1",
			textAlign: "start",
			_highlighted: {
				bg: { _light: "bg.muted", _dark: "bg.emphasized" },
			},
			_disabled: {
				pointerEvents: "none",
				opacity: "0.5",
			},
			_icon: {
				width: "4",
				height: "4",
			},
			_hover: {
				bgColor: "hover.base",
				color: "black.96",
				cursor: "pointer",
			},
			_selected: {
				bgColor: "primary.500",
				color: "white",
			},
		},
		control: {
			pos: "relative",
		},
		itemText: {
			flex: "1",
		},
		itemGroup: {
			_first: { mt: "0" },
		},
		itemGroupLabel: {
			py: "1",
			fontWeight: "medium",
		},
		label: {
			fontWeight: "medium",
			userSelect: "none",
			textStyle: "sm",
			_disabled: {
				layerStyle: "disabled",
			},
		},
		valueText: {
			lineClamp: "1",
			maxW: "80%",
			fontSize: "body.base",
		},
	},

	variants: {
		variant: {
			outline: {
				trigger: {
					bg: "transparent",
					borderTop: "none",
					borderLeft: "none",
					borderRight: "none",
					borderBottom: "1px solid #5C5C5C",
					_expanded: {
						borderColor: "primary.200",
						borderBottom: "1px solid black.64",
					},
					_placeholder: {
						color: "black.64",
						fontFamily: "BTGPactualSans",
						fontSize: "body.base",
					},
					_focusVisible: {
						borderColor: "primary.200",
					},
				},
				item: {
					py: "16px",
				},
			},
			subtle: {
				trigger: {
					bg: "transparent",
					borderTop: "none",
					borderLeft: "none",
					borderRight: "none",
					borderBottom: "none !important",
					_expanded: {
						borderColor: "primary.200",
						borderBottom: "1px solid black.64",
					},
					_placeholder: {
						color: "black.64",
						fontFamily: "BTGPactualSans",
						fontSize: "body.base",
					},
					_focusVisible: {
						borderColor: "primary.200",
					},
				},
				item: {
					py: "16px",
				},
			},
		},
	},

	defaultVariants: {
		variant: "outline",
	},
});
