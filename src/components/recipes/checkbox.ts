"use client";
import { defineSlotRecipe } from "@chakra-ui/react";

export const checkboxRecipe = defineSlotRecipe({
    slots: ["root", "control", "label"],
	className: "minerva-checkbox",
	base: {
        root: {
            border: "1px solid #10408D",
            borderRadius: "4px"
        }
    },
    variants: {
        variant: {
            solid: {
                control: {
                    "&:is([data-state=checked], [data-state=inderteminate])": {
                        background: "#10408D",
                        border: "1px solid #10408D"
                    }
                }
            }
        }
    },
    defaultVariants: {
        variant: "solid"
    }
});
