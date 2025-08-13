import { buttonRecipe } from "@/components/recipes/button";
import { inputRecipe } from "@/components/recipes/input";
import { progressSlotRecipe } from "@/components/recipes/progress";
import { radioCardSlotRecipe } from "@/components/recipes/radio";
import { radiomarkRecipe } from "@/components/recipes/radiomark";
import { selectSlotRecipe } from "@/components/recipes/select";
import { textStyles } from "@/components/recipes/text";
import { createSystem, defaultConfig, defineConfig, defineTokens } from "@chakra-ui/react";
import { globalCss } from "./global";
import { checkboxRecipe } from "@/components/recipes/checkbox";
import { tabsSlotRecipe } from "@/components/recipes/tabs";

const tokens = defineTokens({
  colors: {
    primary: {
      100: { value: "#3e75c0ff" },
      200: { value: "#195AB4" },
      300: { value: "#234F96" },
      400: { value: "#134489" },
      500: { value: "#10408D" },
      600: { value: "#4368B3" },
    },
    gray: {
      50: { value: "#f8fafc" },
      100: { value: "#f1f5f9" },
      200: { value: "#e2e8f0" },
      300: { value: "#cbd5e1" },
      400: { value: "#94a3b8" },
      500: { value: "#64748b" },
      600: { value: "#475569" },
      700: { value: "#334155" },
      800: { value: "#1f2937" },
      900: { value: "#0f172a" }
    }
  },
	fontSizes: {
		"heading.xs": { value: "18px" },
		"heading.sm": { value: "24px" },
		"heading.xl": { value: "28px" },
		"heading.base": { value: "32px" },
		"title.base": { value: "24px" },
		"title.sm": { value: "18px" },
		"body.base": { value: "16px" },
		"body.sm": { value: "14px" },
		"caption.2xs": { value: "10px" },
		"caption.base": { value: "12px" },
	},
  fonts: {
		body: { value: "BTGPactualSans" },
		heading: { value: "BTGPactualSans" },
	},
});

const config = defineConfig({
	theme: {
		textStyles,
		tokens,
		recipes: {
			button: buttonRecipe,
			input: inputRecipe,
			radiomark: radiomarkRecipe,
		},
		slotRecipes: {
			select: selectSlotRecipe,
			radioCard: radioCardSlotRecipe,
			progress: progressSlotRecipe,
			checkbox: checkboxRecipe,
			tabs: tabsSlotRecipe
		},
	},
	globalCss: globalCss,
});

export const system = createSystem(defaultConfig, config);

