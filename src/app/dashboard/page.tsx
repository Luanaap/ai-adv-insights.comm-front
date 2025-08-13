import { MainLayout } from "@/components/layout/MainLayout";
import { Text } from "@chakra-ui/react";

export default function DashboardPage() {
  return (
    <MainLayout>
      <Text fontSize="2xl" fontWeight="bold" color="gray.800" mb={2}>
        Dashboard
      </Text>
      <Text color="gray.600" mb={6}>
        Em breve métricas e visualizações do seu ambiente.
      </Text>
    </MainLayout>
  );
}
