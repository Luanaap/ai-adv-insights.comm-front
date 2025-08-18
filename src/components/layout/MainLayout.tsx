"use client";

import { useState } from "react";
import { Box } from "@chakra-ui/react";
import { Header } from "../header";
import { Sidebar } from "../sidebar";

interface MainLayoutProps {
  children: React.ReactNode;
}

export function MainLayout({ children }: MainLayoutProps) {
  const [sidebarVisible, setSidebarVisible] = useState(true);
  const toggleSidebar = () => setSidebarVisible(v => !v);
  const SIDEBAR_WIDTH = 220;
  const SIDEBAR_COLLAPSED_WIDTH = 56;

  return (
    <Box minHeight="100vh">
      <Header />
      <Sidebar isVisible={sidebarVisible} onToggle={toggleSidebar} />
      <Box
        ml={sidebarVisible ? `${SIDEBAR_WIDTH}px` : `${SIDEBAR_COLLAPSED_WIDTH}px`}
        pt="88px"
        transition="margin-left 0.3s ease"
        minHeight="100vh"
      >
        <Box pt="0" pr="32px" pl="0px">
          {children}
        </Box>
      </Box>
    </Box>
  );
}
