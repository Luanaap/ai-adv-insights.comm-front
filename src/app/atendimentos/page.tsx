import { MainLayout } from "@/components/layout/MainLayout";
import { Box, Flex, Text } from "@chakra-ui/react";
import { RecordRow } from "@/components/data-grid/types";
import AtendimentosClient from "./AtendimentosClient";

export default function AtendimentosPage() {
  const data: RecordRow[] = [
    {
      interaction_date: '2025-08-01',
      leader_name: 'Maria Silva',
      agent_name: 'João Paulo',
      island_name: 'Cobrança',
      channel_name: 'Telefone',
      external_id: 'EXT-991',
      case_number: 'C-1001',
      client_phone_number: '+55 11 99999-1111',
      attributes: [
        { label: 'Conduta de atendimento', type: 'success' },
        { label: 'Ação do atendimento', type: 'success' },
        { label: 'Atenção', type: 'danger' },
        { label: 'Confirmação de siglos', type: 'warning' },
        { label: 'Cordialidade', type: 'success' },
        { label: 'Fraseologia e encerramento', type: 'success' },
        { label: 'Imagem corporativa', type: 'success' },
        { label: 'Informes do processo', type: 'success' }
      ],
      date_type: 'contact',
      status: 'Concluído',
      note: 9,
      audio_duration: 312
    },
    {
      interaction_date: '2025-08-02',
      leader_name: 'Marcos Lima',
      agent_name: 'Ana Souza',
      island_name: 'Suporte',
      channel_name: 'WhatsApp',
      external_id: 'EXT-992',
      case_number: 'C-1002',
      client_phone_number: '+55 21 98888-2222',
      attributes: [
        { label: 'Cordialidade', type: 'success' },
        { label: 'Postura', type: 'warning' },
        { label: 'Fraseologia e encerramento', type: 'success' },
        { label: 'Imagem corporativa', type: 'success' },
        { label: 'Informes do processo', type: 'success' }
      ],
      date_type: 'contestation',
      status: 'Em análise',
      note: 7,
      audio_duration: 845
    }
  ];

  return (
    <MainLayout>
      <Flex direction="column" height="calc(100vh - 72px - 17px)" minH="0" gap={4}>
        <Box>
          <Text fontSize="2xl" fontWeight="bold" color="gray.800" mb={2}>Atendimentos</Text>
          <Text color="gray.600" mb={2}>Consulte áudios, transcrições e avaliações dos atendimentos que realizados aos nossos clientes</Text>
        </Box>
        <Box flex="1" minH="0">
          <AtendimentosClient data={data} />
        </Box>
      </Flex>
    </MainLayout>
  );
}
