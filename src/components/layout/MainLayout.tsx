"use client";

import { useState } from "react";
import { Box, Flex } from "@chakra-ui/react";
import { Header } from "../header";
import { Sidebar } from "../sidebar";

interface MainLayoutProps {
  children: React.ReactNode;
}

export function MainLayout({ children }: MainLayoutProps) {
  const [sidebarVisible, setSidebarVisible] = useState(true);
  const toggleSidebar = () => setSidebarVisible(v => !v);

  return (
    <Box minHeight="100vh">
      <Header />
      <Sidebar isVisible={sidebarVisible} onToggle={toggleSidebar} />
      <Box
        ml={sidebarVisible ? "220px" : "0px"}
        mt="17px"
        transition="margin-left 0.3s ease"
        minHeight="calc(100vh - 72px)"
      >
        <Box
          pt="0"
          pr="32px"
          pl="0px"
        >
          {children}
        </Box>
      </Box>
    </Box>
  );
}
