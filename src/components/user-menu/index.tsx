"use client";

import React from "react";
import { Menu, Box } from "@chakra-ui/react";

export type UserMenuItem = {
  key: string;
  label: string;
  separatorAbove?: boolean;
  onClick?: () => void;
};

export type UserMenuProps = {
  open: boolean;
  onOpenChange?: (open: boolean) => void;
  onToggle?: () => void;
  items?: UserMenuItem[];
  onProfile?: () => void;
  onSettings?: () => void;
  onLogout?: () => void;
};

export function UserMenu({ open, onOpenChange, onToggle, items, onProfile, onSettings, onLogout }: UserMenuProps) {
  const computedItems: UserMenuItem[] = items ?? [
    { key: "profile", label: "Meu perfil", onClick: onProfile },
    { key: "settings", label: "Configurações", onClick: onSettings },
    { key: "sep-logout", label: "-", separatorAbove: true },
    { key: "logout", label: "Sair", onClick: onLogout },
  ];
  return (
    <Menu.Root
      open={open}
      onOpenChange={(d) => onOpenChange?.(((d as any).open ?? false) as boolean)}
      positioning={{ placement: "bottom-end", gutter: 8 }}
    >
    <Menu.Trigger asChild>
        <Box
          as="button"
          aria-expanded={open}
          display="flex"
          alignItems="center"
          justifyContent="center"
          w="40px"
          h="27px"
          borderRadius="md"
          cursor="pointer"
      ml="4"
          mr="0"
          _hover={{ bg: "whiteAlpha.100" }}
          _active={{ bg: "whiteAlpha.200" }}
          onClick={(e) => {
            e.stopPropagation();
            onToggle?.();
          }}
        >
          <svg
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            style={{
              transform: open ? "rotate(180deg)" : "rotate(0deg)",
              transition: "transform 0.2s ease",
            }}
          >
            <path
              d="M4 6l4 4 4-4"
              stroke="white"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </Box>
      </Menu.Trigger>
      <Menu.Positioner mt="2">
          <Menu.Content minW="220px" borderRadius="md" p="2" bg="white">
            {computedItems.map((item) => (
              <React.Fragment key={item.key}>
                {item.separatorAbove ? <Menu.Separator /> : null}
                {item.label !== "-" ? (
                  <Menu.Item
                    value={item.key}
                    onClick={() => {
                      item.onClick?.();
                      onOpenChange?.(false);
                    }}
                  >
                    {item.label}
                  </Menu.Item>
                ) : null}
              </React.Fragment>
            ))}
          </Menu.Content>
        </Menu.Positioner>
    </Menu.Root>
  );
}
