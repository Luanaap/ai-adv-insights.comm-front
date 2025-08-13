"use client";

import {
  Text,
  Image,
  Portal,
  Select,
  Flex,
  createListCollection,
} from "@chakra-ui/react";
import { TAvaliableLanguages } from "./LanguageSelector.types";
import { useEffect, useState } from "react";
import { useLanguageSelectorRules } from ".";

const languageOptions = [
  { label: "English", value: "en", shortLabel: "EN", flag: "/flags/us_flag.png" },
  { label: "Português", value: "pt-BR", shortLabel: "PT-BR", flag: "/flags/br_flag.png" },
  { label: "Español", value: "es", shortLabel: "ES", flag: "/flags/es_flag.png" },
];

const languages = createListCollection({
  items: languageOptions.map(({ label, value }) => ({ label, value })),
});

function getDefaultLanguage() {
  // Protege contra SSR: window não existe no servidor
  if (typeof window === "undefined") {
    return "en"; // fallback seguro para SSR
  }
  
  const cached = window.localStorage.getItem("defaultLanguage");
  if (cached) {
    return cached;
  }
  return navigator.language.replace("-US", "");
}

export default function LanguageSelector() {
  const { handleChangeLanguage } = useLanguageSelectorRules();
  const [currentLang, setCurrentLang] = useState<string>("en"); // inicializa com fallback seguro

  // Configura a linguagem correta no lado do cliente
  useEffect(() => {
    const defaultLang = getDefaultLanguage();
    setCurrentLang(defaultLang);
  }, []);

  useEffect(() => {
    if (typeof window !== "undefined") {
      window.localStorage.setItem("defaultLanguage", currentLang);
    }
    handleChangeLanguage(currentLang as TAvaliableLanguages);
  }, [currentLang])

  return (
    <Select.Root
      collection={languages}
      value={[currentLang]}
      onValueChange={(value) => {
        setCurrentLang(value.items[0].value)
      }}
      size="sm"
      width="auto"
    >
      <Select.HiddenSelect />

      <Select.Control
        border="none"
        bg="transparent"
        p="0"
        _hover={{ bg: "transparent" }}
      >
        <Select.Trigger
          px="8"
          py="1"
          w="100%"
          display="flex"
          alignItems="center"
          justifyContent="space-between"
          border="none"
          bg="transparent"
          _hover={{ bg: "transparent" }}
          _expanded={{ bg: "transparent" }}
          _focus={{ boxShadow: "none" }}
        >
          <Flex align="center" gap="0.25rem">
            <Image
              src={languageOptions.find((opt) => opt.value === currentLang)?.flag}
              alt={currentLang}
              w="20px"
              h="14px"
            />
            <Text fontSize="sm" gap="0.50rem" fontWeight="medium" color="white">
              {
                languageOptions.find((opt) => opt.value === currentLang)
                  ?.shortLabel
              }
            </Text>
          </Flex>

          <Select.IndicatorGroup>
            <Select.Indicator>
              <svg
                fill="white"
                width="12"
                height="12"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M5.516 7.548a.75.75 0 011.06 0L10 10.973l3.424-3.425a.75.75 0 111.06 1.06l-4 4a.75.75 0 01-1.06 0l-4-4a.75.75 0 010-1.06z" />
              </svg>
            </Select.Indicator>
          </Select.IndicatorGroup>
        </Select.Trigger>
      </Select.Control>

      <Portal>
        <Select.Positioner>
          <Select.Content bg="white" color="black" borderRadius="md" boxShadow="md">
            {languageOptions.map((lang) => (
              <Select.Item
                key={lang.value}
                item={{ label: lang.label, value: lang.value }}
              >
                <Flex align="center" gap="0.5rem">
                  <Image src={lang.flag} alt={lang.label} w="20px" h="14px" />
                  <Text>{lang.label}</Text>
                </Flex>
                <Select.ItemIndicator />
              </Select.Item>
            ))}
          </Select.Content>
        </Select.Positioner>
      </Portal>
    </Select.Root>
  );
}
