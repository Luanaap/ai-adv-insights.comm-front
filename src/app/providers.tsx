"use client";

import React from "react";
import { ChakraProvider } from "@chakra-ui/react";
import { system } from "@/components";
import DetalhesNavigator from "@/components/DetalhesNavigator.client";

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ChakraProvider value={system}>
      <DetalhesNavigator />
      {children}
    </ChakraProvider>
  );
}
