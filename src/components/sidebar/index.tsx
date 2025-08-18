"use client";

import { Box, Flex, Text, Button } from "@chakra-ui/react";
import { CustomIcon } from "@/infra/icon";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface SidebarProps {
  isVisible: boolean;
  onToggle: () => void;
}

interface MenuItem {
  icon: string;
  label: string;
  path: string;
}

const menuItems: MenuItem[] = [
  { icon: "customer-service", label: "Atendimentos", path: "/atendimentos" },
  { icon: "indicators", label: "Dashboard", path: "/dashboard" }
];

export function Sidebar({ isVisible, onToggle }: SidebarProps) {
  const pathname = usePathname();
  return (
    <>
      <Box
        position="fixed"
        left={"6px"}
        top={"88px"}
        transition="width 0.3s ease"
        overflow="hidden"
        zIndex={1000}
        css={{
          '&::-webkit-scrollbar': {
            display: 'none'
          },
          msOverflowStyle: 'none',
          scrollbarWidth: 'none'
        }}
      >
        {isVisible && (
          <Flex direction="column" pt={1}>
            {menuItems.map((item) => {
              const active = pathname?.startsWith(item.path);
              return (
                <Link key={item.path} href={item.path} style={{ textDecoration: 'none' }}>
                  <Flex
                    align="center"
                    px={6}
                    py={3}
                    cursor="pointer"
                    bg={active ? "primary.50" : "transparent"}
                    _hover={{
                      bg: active ? "primary.50" : "gray.100"
                    }}
                  >
                    <Flex w="24px" justify="center">
                      <CustomIcon 
                        name={item.icon as any}
                        iconSize={20}
                        customColor="#1D4F91"
                      />
                    </Flex>
                    <Text
                      ml={3}
                      fontSize="14px"
                      fontWeight={active ? "600" : "400"}
                      color="gray.700"
                    >
                      {item.label}
                    </Text>
                  </Flex>
                </Link>
              );
            })}

            <Flex
              align="center"
              pl={4}
              pr={6}
              py={5}
              cursor="pointer"
              onClick={onToggle}
              _hover={{
                bg: "gray.100"
              }}
            >
              <Flex w="24px" justify="center">
                <CustomIcon 
                  name="menu-unpin"
                  iconSize={20}
                  customColor="#0f172a"
                />
              </Flex>
              <Text
                ml={3}
                fontSize="14px"
                fontWeight="400"
                color="gray.700"
              >
                Ocultar menu
              </Text>
            </Flex>
          </Flex>
        )}
      </Box>
      
      {!isVisible && (
        <Button
          position="fixed"
          left="8px"
          top="92px"
          width="40px"
          height="40px"
          bg="white"
          border="1px solid"
          borderColor="gray.200"
          borderRadius="md"
          onClick={onToggle}
          zIndex={1001}
          _hover={{
            bg: "gray.50"
          }}
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <CustomIcon 
            name="stack-burger-menu" 
            iconSize={18}
            customColor="#6B7280"
          />
        </Button>
      )}
    </>
  );
}
