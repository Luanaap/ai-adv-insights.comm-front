"use client";

import React, { PropsWithChildren, useEffect } from "react";
import { I18nextProvider } from "react-i18next";
import aiAssistI18n from "@/infra/i18n";

export function LanguageProvider({ children }: PropsWithChildren) {
  useEffect(() => {
    const updateLanguage = (event: Event) => {
      const { detail } = event as CustomEvent<{ language: string }>;
      aiAssistI18n.changeLanguage(detail.language);
    };

    window.addEventListener("language-change", updateLanguage);

    return () => {
      window.removeEventListener("language-change", updateLanguage);
    };
  }, []);

  return <I18nextProvider i18n={aiAssistI18n}>{children}</I18nextProvider>;
}
