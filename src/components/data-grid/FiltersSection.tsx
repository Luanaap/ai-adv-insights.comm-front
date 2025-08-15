"use client";

import React from "react";
import { Box, Button, HStack, Input, Text, chakra, Flex } from "@chakra-ui/react";
import { CustomIcon } from "@/infra/icon";

export interface FiltersState {
  bpo: string;
  dateType: string;
  island: string;
  channel: string;
  date: string;
  search: string;
}

export interface FiltersSectionProps {
  filters: FiltersState;
  onChange: (next: FiltersState) => void;
  onClear: () => void;
}

const Select: any = chakra('select');

export function FiltersSection({ filters, onChange, onClear }: FiltersSectionProps) {
  return (
    <Flex w="100%" align="center" gap="16px" mb="16px" mt="8px" pt="4px" pb="6px" position="relative" zIndex={10}>
      <Box flex="1 1 auto" overflowX="auto" pr="4px" css={{
        '&::-webkit-scrollbar': { height: '6px' },
        '&::-webkit-scrollbar-track': { background: 'transparent' },
        '&::-webkit-scrollbar-thumb': { background: '#D1D5DB', borderRadius: '3px' }
      }}>
        <HStack as="div" gap="12px" minW="max-content" whiteSpace="nowrap" align="center">
        <Select
          value={filters.bpo}
          onChange={(e: React.ChangeEvent<HTMLSelectElement>) => onChange({ ...filters, bpo: e.target.value })}
          placeholder="BPO"
          size="sm"
          bg="white"
          borderColor="#D1D5DB"
          borderWidth="1px"
          borderRadius="6px"
          minW="120px"
          maxW="120px"
          h="36px"
          fontSize="14px"
          _hover={{ borderColor: "#9CA3AF" }}
          _focus={{ borderColor: "#3B82F6", boxShadow: "0 0 0 1px #3B82F6" }}
        >
          <option value="bpo1">BPO 1</option>
          <option value="bpo2">BPO 2</option>
          <option value="bpo3">BPO 3</option>
        </Select>

  <Select
          value={filters.dateType}
          onChange={(e: React.ChangeEvent<HTMLSelectElement>) => onChange({ ...filters, dateType: e.target.value })}
          placeholder="Tipo de data"
          size="sm"
          bg="white"
          borderColor="#D1D5DB"
          borderWidth="1px"
          borderRadius="6px"
          minW="120px"
          maxW="120px"
          h="36px"
          fontSize="14px"
          _hover={{ borderColor: "#9CA3AF" }}
          _focus={{ borderColor: "#3B82F6", boxShadow: "0 0 0 1px #3B82F6" }}
        >
          <option value="contact">Contato</option>
          <option value="contestation">Contestação</option>
        </Select>

  <Select
          value={filters.island}
          onChange={(e: React.ChangeEvent<HTMLSelectElement>) => onChange({ ...filters, island: e.target.value })}
          placeholder="Ilha"
          size="sm"
          bg="white"
          borderColor="#D1D5DB"
          borderWidth="1px"
          borderRadius="6px"
          minW="120px"
          maxW="120px"
          h="36px"
          fontSize="14px"
          _hover={{ borderColor: "#9CA3AF" }}
          _focus={{ borderColor: "#3B82F6", boxShadow: "0 0 0 1px #3B82F6" }}
        >
          <option value="cobranca">Cobrança</option>
          <option value="suporte">Suporte</option>
          <option value="vendas">Vendas</option>
        </Select>

  <Select
          value={filters.channel}
          onChange={(e: React.ChangeEvent<HTMLSelectElement>) => onChange({ ...filters, channel: e.target.value })}
          placeholder="Canal"
          size="sm"
          bg="white"
          borderColor="#D1D5DB"
          borderWidth="1px"
          borderRadius="6px"
          minW="120px"
          maxW="120px"
          h="36px"
          fontSize="14px"
          _hover={{ borderColor: "#9CA3AF" }}
          _focus={{ borderColor: "#3B82F6", boxShadow: "0 0 0 1px #3B82F6" }}
        >
          <option value="telefone">Telefone</option>
          <option value="whatsapp">WhatsApp</option>
          <option value="email">Email</option>
          <option value="chat">Chat</option>
        </Select>

  <Input
          type="date"
          value={filters.date}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => onChange({ ...filters, date: e.target.value })}
          placeholder="dd/mm/aaaa"
          size="sm"
          bg="white"
          borderColor="#D1D5DB"
          borderWidth="1px"
          borderRadius="6px"
          minW="125px"
          maxW="125px"
          h="36px"
          fontSize="14px"
          _hover={{ borderColor: "#9CA3AF" }}
          _focus={{ borderColor: "#3B82F6", boxShadow: "0 0 0 1px #3B82F6" }}
          position="relative"
          zIndex={2}
        />
      </HStack>
    </Box>

    <HStack flexShrink={0} gap="12px" align="center">
      <Text
        fontSize="14px"
        color="#6B7280"
        fontWeight="400"
        cursor="pointer"
        _hover={{ color: "#374151" }}
        onClick={onClear}
        whiteSpace="nowrap"
      >
        Limpar filtros
      </Text>
              <Button
                size="sm"
                variant="outline"
                bg="white"
                borderColor="#3B82F6"
                color="#1F2937"
                fontSize="14px"
                h="36px"
                px="16px"
                _hover={{ bg: "#F8FAFC" }}
                _active={{ bg: "#F1F5F9" }}
              >
                Filtros
                <Box ml="8px">
                  <CustomIcon
                    name="tools-filter"
                    iconSize={16}
                    customColor="#000000"
                  />
                </Box>
              </Button>
              <Box position="relative" minW="280px" w="280px" zIndex={2} mt="1px">
                <Input
                  value={filters.search}
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) => onChange({ ...filters, search: e.target.value })}
                  placeholder="Busque pelo Id, caso ou telefone"
                  size="sm"
                  bg="white"
                  borderColor="#D1D5DB"
                  borderWidth="1px"
                  borderRadius="6px"
                  h="36px"
                  fontSize="14px"
                  pl="40px"
                  _hover={{ borderColor: "#9CA3AF" }}
                  _focus={{ borderColor: "#3B82F6", boxShadow: "0 0 0 1px #3B82F6" }}
                />
                <Box
                  position="absolute"
                  left="12px"
                  top="50%"
                  transform="translateY(-50%)"
                  zIndex="1"
                >
                  <CustomIcon
                    name="tools-search"
                    iconSize={20}
                    customColor="#000000"
                  />
                </Box>
              </Box>
    </HStack>
  </Flex>
  );
}
