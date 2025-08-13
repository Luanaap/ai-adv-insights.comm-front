import { IconButton } from "@chakra-ui/react";
import React, { ReactNode } from "react";
import hostI18n from "@/infra/i18n";
import { IAnchorComponentProps, TAvaliableLanguages } from "./LanguageSelector.types";


const DEFAULT_FLAGS_IMG: Record<string, ReactNode> = {
    en: <img src="/flags/us_flag.png" alt="en-flag" loading="lazy" width="25px" height="15px" />,
    "pt-BR": <img src="/flags/br_flag.png" alt="pt-flag" loading="lazy" width="25px" height="15px" />,
    es: <img src="/flags/es_flag.png" alt="es-flag" loading="lazy" width="25px" height="15px" />
};

export const DEFAULT_ANCHOR_COMPONENTS: Record<string, (props: IAnchorComponentProps) => React.ReactElement> = {
  en: (props: IAnchorComponentProps) => (
    <IconButton {...props} style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
      {DEFAULT_FLAGS_IMG.en}
    </IconButton>
  ),
  "pt-BR": (props: IAnchorComponentProps) => (
    <IconButton {...props} style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
      {DEFAULT_FLAGS_IMG["pt-BR"]}
    </IconButton>
  ),
  es: (props: IAnchorComponentProps) => (
    <IconButton {...props} style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
      {DEFAULT_FLAGS_IMG.es}
    </IconButton>
  )
};

export const useLanguageSelectorRules = () => {
  const handleChangeLanguage = (value: TAvaliableLanguages) => {
    hostI18n.changeLanguage(value);
    
    // Protege contra SSR
    if (typeof window !== "undefined") {
      localStorage.setItem("lang", value);
      const languageChangeEvent = new CustomEvent("language-change", {
        detail: { language: value }
      });
      window.dispatchEvent(languageChangeEvent);
    }
  };

  const options = [
    {
      onClick: () => handleChangeLanguage("en"),
      label: DEFAULT_FLAGS_IMG.en
    },
    {
      onClick: () => handleChangeLanguage("pt-BR"),
      label: DEFAULT_FLAGS_IMG["pt-BR"]
    },
    {
      onClick: () => handleChangeLanguage("es"),
      label: DEFAULT_FLAGS_IMG.es
    }
  ];

  return { options, handleChangeLanguage };
};
