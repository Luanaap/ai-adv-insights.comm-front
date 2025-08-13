"use client";
import { defineRecipe } from "@chakra-ui/react";

export const buttonRecipe = defineRecipe({
	className: "minerva-button",
	variants: {
		variant: {
			main: {
				display: "flex",
				justifyContent: "center",
				fontFamily: "BTGPactualSans",
				alignItems: "center",
				fontSize: "body.sm",
				height: "30px",
				textStyle: "base",
				color: "white",
				bgColor: "primary.200",
				border: "none !important",
				outline: "none !important",
				_hover: {
					bgColor: "primary.100",
					_active: {
						bgColor: "primary.400",
					},
					_focus: {
						bgColor: "primary.400",
					},
				},
				_focus: {
					bgColor: "primary.400",
				},
				_disabled: {
					bgColor: "black.10",
					color: "black.40",
				},
			},
			outline: {
				fontSize: "body.sm",
				fontFamily: "BTGPactualSans",
				height: "30px",
				bgColor: "transparent",
				border: "1px solid #10408D",
				borderStyle: "solid",
				color: "black.96",
				textStyle: "base",
				_hover: {
					bgColor: "#00000029",
					border: "1px solid #234F96",
					_active: {
						bgColor: "#0000003D",
						border: "1px solid #0C316B",
					},
					_focus: {
						border: "1px solid #0C316B",
					},
				},
				_disabled: {
					border: "1px solid #00000066",
					color: "black.40",
				},
			},
			clean: {
				fontSize: "body.sm",
				fontFamily: "BTGPactualSans",
				height: "30px",
				bgColor: "transparent",
				color: "black.96",
				textStyle: "base",
				_hover: {
					bgColor: "transparent",
					_active: {},
					_focus: {},
				},
			},
			plain: {
				border: "none !important",
				outline: "none !important"
			}
		},
	},
	defaultVariants: {
		variant: "main",
	},
});
