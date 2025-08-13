"use client";
import { defineRecipe } from "@chakra-ui/react";

export const inputRecipe = defineRecipe({
	className: "minerva-input",
	variants: {
		variant: {
			main: {
				fontSize: "body.base",
				height: "38px",
				fontFamily: "BTGPactualSans",
				color: "black",
				bgColor: "white",
				border: "none",
				borderRadius: "4px",
				outlineStyle: "solid",
				outlineWidth: "1px",
				outlineColor: "#00000029",
				_placeholder: {
					color: "black.64",
				},
				_focus: {
					borderRadius: "4px",
					border: "none",
					outlineStyle: "solid",
					outlineWidth: "1px",
					outlineColor: "#00000029",
				},
				_focusVisible: {
					borderRadius: "4px",
					border: "none",
					outlineStyle: "solid",
					outlineWidth: "1px",
					outlineColor: "#00000029",
				},
			},
			outline: {
				fontSize: "body.base",
				borderBottom: "1px solid black",
				fontWeight: 400,
				height: "38px",
				paddingLeft: "0px",
				fontFamily: "BTGPactualSans",
				color: "black",
				bgColor: "transparent",
				borderTop: "0px",
				borderLeft: "0px",
				borderRight: "0px",
				borderRadius: "0px",
				outlineStyle: "none",
				_placeholder: {
					color: "black.64",
				},
				_focus: {
					borderColor: "primary.200",
					outline: "none",
				},
				_focusVisible: {
					borderColor: "primary.200",
					outline: "none",
				},
			},
		},
	},
	defaultVariants: {
		variant: "main",
	},
});
