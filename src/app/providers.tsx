"use client";

import React from "react";
import { ChakraProvider } from "@chakra-ui/react";
import { system } from "@/components";

export function Providers({ children }: { children: React.ReactNode }) {
  return <ChakraProvider value={system}>{children}</ChakraProvider>;
}
