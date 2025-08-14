"use client";

import { Box, Button, Flex, Text, Badge, Portal } from "@chakra-ui/react";
import React from "react";
import { AttributeTag } from "./types";

export function AttributesModal({ isOpen, onClose, attributes, title }: {
  isOpen: boolean;
  onClose: () => void;
  attributes: (string | AttributeTag)[];
  title: string;
}) {
  if (!isOpen) return null;

  const getAttributeProps = (attr: string | AttributeTag) => {
    if (typeof attr === 'string') {
      return { label: attr, type: 'default' } as AttributeTag;
    }
    return attr as AttributeTag;
  };

  const getStatusInfo = (type?: string) => {
    switch (type) {
      case 'success':
        return { label: 'Adequada', bg: '#DCFCE7', color: '#166534' };
      case 'warning':
        return { label: 'Não avaliada', bg: '#FEF3C7', color: '#D97706' };
      case 'danger':
        return { label: 'Inadequada', bg: '#FEE2E2', color: '#DC2626' };
      default:
        return { label: 'Adequada', bg: '#DCFCE7', color: '#166534' };
    }
  };

  return (
    <Portal>
      <Box
        position="fixed"
        top="0"
        left="0"
        right="0"
        bottom="0"
        bg="rgba(0, 0, 0, 0.5)"
        zIndex="9999"
        display="flex"
        alignItems="center"
        justifyContent="center"
        onClick={onClose}
      >
        <Box
          bg="white"
          borderRadius="8px"
          p="24px"
          maxW="400px"
          w="90%"
          maxH="500px"
          overflowY="auto"
          onClick={(e) => e.stopPropagation()}
        >
          <Flex justify="space-between" align="center" mb="20px">
            <Text fontSize="16px" fontWeight="600" color="#1F2937">
              {title}
            </Text>
            <Button size="sm" variant="ghost" onClick={onClose} color="#6B7280">
              ✕
            </Button>
          </Flex>
          
          <Box>
            {attributes.map((attr, index) => {
              const { label, type } = getAttributeProps(attr);
              const statusInfo = getStatusInfo(type);
              
              return (
                <Flex 
                  key={index} 
                  justify="space-between" 
                  align="center" 
                  py="12px"
                  borderBottom={index < attributes.length - 1 ? "1px solid #E5E7EB" : "none"}
                >
                  <Text fontSize="14px" color="#374151" fontWeight="400">
                    {label}
                  </Text>
                  <Badge
                    px="8px"
                    py="4px"
                    borderRadius="12px"
                    fontSize="12px"
                    bg={statusInfo.bg}
                    color={statusInfo.color}
                    fontWeight="500"
                  >
                    {statusInfo.label}
                  </Badge>
                </Flex>
              );
            })}
          </Box>
        </Box>
      </Box>
    </Portal>
  );
}
