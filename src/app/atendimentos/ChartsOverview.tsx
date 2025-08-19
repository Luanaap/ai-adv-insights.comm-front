"use client";
import React from "react";
import { Box, Flex, Text, SimpleGrid } from "@chakra-ui/react";

type BarDatum = { label: string; value: number; color?: string };
interface ChartCardProps {
  title: string;
  period: string;
  data: BarDatum[];
}

const palette = ["#2D5BE3", "#4188FF", "#6AA6FF", "#0E2F78", "#2550B8", "#2D5BE3"];

const ChartCard: React.FC<ChartCardProps> = ({ title, period, data }) => (
  <Box bg="white" borderWidth="1px" borderColor="gray.200" rounded="md" p={3} display="flex" flexDirection="column" gap={2} overflow="hidden">
    <Flex align="start" justify="space-between" fontSize="sm">
      <Text fontWeight="semibold" color="gray.700">{title}</Text>
      <Text color="gray.500" fontSize="xs">{period}</Text>
    </Flex>
    <Box position="relative" pt={2} pb={1} flex="1" minH="160px">
      <Box position="absolute" inset={0} pointerEvents="none" backgroundImage="repeating-linear-gradient(to top, transparent, transparent 31px, rgba(0,0,0,0.04) 31px, rgba(0,0,0,0.04) 32px)" />
      <Flex align="end" justify="space-between" h="100%" px={1} position="relative" zIndex={1}>
        {data.map((d, idx) => {
          const height = Math.max(4, Math.min(100, d.value));
          const color = d.color || palette[idx % palette.length];
          return (
            <Flex key={d.label + idx} direction="column" align="center" flex="1" mx={1} minW="28px">
              <Text fontSize="9px" color="gray.600" mb={1}>{d.value}%</Text>
              <Box w="100%" flexGrow={0} h={`${height * 1.1}px`} transition="all .2s" bg={color} rounded="2px" />
              <Text mt={1} fontSize="9px" color="gray.500" textAlign="center" overflow="hidden" display="-webkit-box" style={{ WebkitLineClamp: 2, WebkitBoxOrient: 'vertical' }}>{d.label}</Text>
            </Flex>
          );
        })}
      </Flex>
    </Box>
  </Box>
);

export const ChartsOverview: React.FC = () => {
  const chart1: BarDatum[] = [
    { label: "BPO 001", value: 74 },
    { label: "BPO 001", value: 64 },
    { label: "BPO 001", value: 100 },
    { label: "BPO 001", value: 75 },
    { label: "BPO 001", value: 100 },
    { label: "BPO 001", value: 70 }
  ];
  const chart2: BarDatum[] = [
    { label: "Ilha 01", value: 74 },
    { label: "Ilha 01", value: 64 },
    { label: "Ilha 01", value: 100 },
    { label: "Ilha 01", value: 92 },
    { label: "Ilha 01", value: 46 },
    { label: "Ilha 01", value: 78 }
  ];
  return (
    <SimpleGrid columns={{ base: 1, md: 2 }} gap={4} mb={2}>
      <ChartCard title="Atendimentos por BPO" period="Julho 2025" data={chart1} />
      <ChartCard title="Atendimentos por Ilha" period="Julho 2025" data={chart2} />
    </SimpleGrid>
  );
};

export default ChartsOverview;
