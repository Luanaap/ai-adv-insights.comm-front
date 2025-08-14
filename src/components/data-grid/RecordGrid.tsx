"use client";
import React from 'react';
import { 
  Box, 
  Button, 
  Flex, 
  Text, 
  Spacer, 
  chakra, 
  Badge,
  Portal
} from '@chakra-ui/react';
import { createColumnHelper, flexRender, getCoreRowModel, getSortedRowModel, getFilteredRowModel, getPaginationRowModel, useReactTable, SortingState, PaginationState } from '@tanstack/react-table';
import { RecordRow, RecordGridProps, AttributeTag } from './types';

const CKTable: any = chakra('table');
const Thead: any = chakra('thead');
const Tbody: any = chakra('tbody');
const Tr: any = chakra('tr');
const Th: any = chakra('th');
const Td: any = chakra('td');
const Select: any = chakra('select');
const useColorModeValue = (l: any, _d: any) => l;

function Card(props: React.PropsWithChildren<{ px?: any; flexDirection?: string; w?: string }>) {
  const { px, children, flexDirection, w } = props;
  return <Box bg="white" borderRadius="8px" boxShadow="sm" display="flex" flexDirection={flexDirection} w={w} px={px} p={px ? undefined : 0}>{children}</Box>;
}

function AttributesModal({ isOpen, onClose, attributes, title }: {
  isOpen: boolean;
  onClose: () => void;
  attributes: (string | AttributeTag)[];
  title: string;
}) {
  if (!isOpen) return null;

  const getAttributeProps = (attr: string | AttributeTag) => {
    if (typeof attr === 'string') {
      return { label: attr, type: 'default' };
    }
    return attr;
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
              {title} - Todos os Atributos
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

function parseAudioDuration(seconds: number) {
  if (seconds < 60) return `${seconds}s`;
  if (seconds < 3600) {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes}m e ${remainingSeconds}s`;
  }
  const hours = Math.floor(seconds / 3600);
  const minutes = Math.floor((seconds % 3600) / 60);
  const remainingSeconds = seconds % 60;
  return `${hours}h ${minutes}m e ${remainingSeconds}s`;
}

export function RecordGrid({ data, onDetail }: RecordGridProps) {
  const [sorting, setSorting] = React.useState<SortingState>([]);
  const bgColor = useColorModeValue('white', 'dark.900');
  const textColor = useColorModeValue('black', 'white');
  const borderColor = useColorModeValue('#00000029', 'grey');
  const color = useColorModeValue('black', 'white');
  const [pagination, setPagination] = React.useState<PaginationState>({ pageIndex: 0, pageSize: 10 });
  
  // Estado do modal de atributos
  const [modalState, setModalState] = React.useState<{
    isOpen: boolean;
    attributes: (string | AttributeTag)[];
    title: string;
  }>({
    isOpen: false,
    attributes: [],
    title: ''
  });

  const openAttributesModal = (attributes: (string | AttributeTag)[], rowTitle: string) => {
    setModalState({
      isOpen: true,
      attributes,
      title: rowTitle
    });
  };

  const closeAttributesModal = () => {
    setModalState({
      isOpen: false,
      attributes: [],
      title: ''
    });
  };

  const renderAttributesCell = (attributes: (string | AttributeTag)[] | undefined, row: RecordRow) => {
    if (!attributes || attributes.length === 0) {
      return <Text fontSize="12px" color="#666">-</Text>;
    }

    const getAttributeProps = (attr: string | AttributeTag) => {
      if (typeof attr === 'string') {
        return { label: attr, type: 'default' };
      }
      return attr;
    };

    const getAttributeColor = (type?: string) => {
      switch (type) {
        case 'success':
        case 'Cordialidade':
          return { bg: '#DCFCE7', color: '#166534' };
        case 'warning':
        case 'Postura':
          return { bg: '#FEF3C7', color: '#D97706' };
        case 'danger':
          return { bg: '#FEE2E2', color: '#DC2626' };
        default:
          return { bg: '#E5E7EB', color: '#374151' };
      }
    };

    const visibleAttributes = attributes.slice(0, 2);
    const remainingCount = attributes.length - 2;

    return (
      <Flex align="center" gap="4px" wrap="wrap">
        {visibleAttributes.map((attr, index) => {
          const { label, type } = getAttributeProps(attr);
          const colors = getAttributeColor(type);
          return (
            <Badge
              key={index}
              px="6px"
              py="2px"
              borderRadius="12px"
              fontSize="10px"
              bg={colors.bg}
              color={colors.color}
              maxW="80px"
              overflow="hidden"
              textOverflow="ellipsis"
              whiteSpace="nowrap"
            >
              {label}
            </Badge>
          );
        })}
        
        {remainingCount > 0 && (
          <Button
            size="xs"
            variant="ghost"
            fontSize="10px"
            color="#666"
            minW="auto"
            h="20px"
            px="6px"
            onClick={() => openAttributesModal(attributes, `${row.agent_name} - ${row.case_number}`)}
            _hover={{ bg: '#F3F4F6' }}
          >
            +{remainingCount}
          </Button>
        )}
      </Flex>
    );
  };

  const columnHelper = createColumnHelper<RecordRow>();
  const headerText = (text: string) => <Text color={color} fontSize={{ sm:'12px', lg:'14px' }} fontWeight='400'>{text}</Text>;
  const cellText = (text: any) => <Text color={color} fontSize={{ sm:'12px', lg:'14px' }} fontWeight='400'>{text}</Text>;

  const columns = [
    columnHelper.accessor('interaction_date',{ id:'interaction_date', header:()=>headerText('Data do Atendimento'), cell:i=>cellText(i.getValue()), filterFn:'arrIncludesSome'}),
    columnHelper.accessor('leader_name',{ id:'leader_name', header:()=>headerText('Líder'), cell:i=>cellText(i.getValue()), filterFn:'arrIncludesSome'}),
    columnHelper.accessor('agent_name',{ id:'agent_name', header:()=>headerText('Atendente'), cell:i=>cellText(i.getValue()), filterFn:'arrIncludesSome'}),
    columnHelper.accessor('island_name',{ id:'island_name', header:()=>headerText('Ilha'), cell:i=>cellText(i.getValue()), filterFn:'arrIncludesSome'}),
    columnHelper.accessor('channel_name',{ id:'channel_name', header:()=>headerText('Canal'), cell:i=>cellText(i.getValue()), filterFn:'arrIncludesSome'}),
    columnHelper.accessor('external_id',{ id:'external_id', header:()=>headerText('Id'), cell:i=>cellText(i.getValue()), filterFn:'arrIncludesSome'}),
    columnHelper.accessor('case_number',{ id:'case_number', header:()=>headerText('Caso'), cell:i=>cellText(i.getValue()), filterFn:'arrIncludesSome'}),
    columnHelper.accessor('client_phone_number',{ id:'client_phone_number', header:()=>headerText('Telefone'), cell:i=>cellText(i.getValue()), filterFn:'arrIncludesSome'}),
    columnHelper.accessor('attributes', { 
      id:'attributes', 
      header:()=>headerText('Atributos'), 
      cell: info => renderAttributesCell(info.getValue(), info.row.original),
      filterFn:'arrIncludesSome'
    }),
    columnHelper.accessor('date_type',{ id:'date_type', header:()=>headerText('Tipo de Data'), cell:i=>cellText(i.getValue()==='contestation'?'Contestação':'Contato'), filterFn:'arrIncludesSome'}),
    columnHelper.accessor('status',{ id:'status', header:()=>headerText('Status'), cell:i=>cellText(i.getValue()), filterFn:'arrIncludesSome'}),
    columnHelper.accessor('note',{ id:'note', header:()=>headerText('Nota'), cell:i=>cellText(i.getValue()), filterFn:'inNumberRange'}),
    columnHelper.accessor('audio_duration',{ id:'audio_duration', header:()=>headerText('Duração'), cell:i=>cellText(parseAudioDuration(i.getValue())), filterFn:'inNumberRange'}),
    columnHelper.display({ 
      id:'actions', 
      header:()=>'', 
      cell:info=> <Button color={textColor} variant='outline' size='sm' onClick={()=>onDetail(info.row.original)}>Detalhes</Button>,
      size: 70,
      minSize: 70,
      maxSize: 70
    })
  ];

  const table = useReactTable({
    data,
    columns,
    state:{ pagination, sorting },
    onSortingChange:setSorting,
    getCoreRowModel:getCoreRowModel(),
    getSortedRowModel:getSortedRowModel(),
    getFilteredRowModel:getFilteredRowModel(),
    getPaginationRowModel:getPaginationRowModel(),
    onPaginationChange:setPagination,
  });

  const firstIndex = pagination.pageIndex * pagination.pageSize + 1;
  const possibleLast = (pagination.pageIndex + 1) * pagination.pageSize;
  const lastIndex = possibleLast > table.getRowCount() ? table.getRowCount() : possibleLast;

  return (
    <Box flexDirection='column' w='100%'>
      <Card flexDirection='column' w='100%' px='0px'>
        <Box bg={bgColor} borderColor={borderColor} borderRadius='4px' borderWidth='1px' position='relative' maxH='500px' overflowY='auto' display='inline-block'>
          <Box 
            overflowX='auto'
            display='inline-block'
            css={{
              '&::-webkit-scrollbar': {
                height: '8px',
                width: '8px',
              },
              '&::-webkit-scrollbar-track': {
                background: '#f1f1f1',
                borderRadius: '4px',
              },
              '&::-webkit-scrollbar-thumb': {
                background: '#c1c1c1',
                borderRadius: '4px',
              },
              '&::-webkit-scrollbar-thumb:hover': {
                background: '#a8a8a8',
              },
              '&::-webkit-scrollbar-corner': {
                background: '#f1f1f1',
              },
            }}
          >
            <CKTable 
              variant='simple'
              size='sm'
              style={{ display: 'inline-table', margin: 0 }}
              css={{
                borderCollapse: 'collapse',
                 '& th:last-child, & td:last-child': {
                   position: 'sticky',
                   right: '0',
                   backgroundColor: bgColor,
                   zIndex: '1',
                   boxShadow: 'inset 8px 0px 8px -8px rgba(0, 0, 0, 0.16)',
                   borderLeft: `1px solid ${borderColor}`,
                 },
                '& th:last-child': {
                  zIndex: '2',
                }
              }}
            >
              <Thead position='sticky' top='0' bg={bgColor} zIndex='3'>
                {table.getHeaderGroups().map(hg => (
                  <Tr key={hg.id}>
                    {hg.headers.map(header => {
                      const isActions = header.column.id === 'actions';
                      return (
                        <Th key={header.id} borderColor={borderColor} cursor={!isActions?'pointer':'default'} onClick={!isActions? header.column.getToggleSortingHandler(): undefined} sx={{ textTransform:'none' }} minW={isActions?'70px':'150px'} py='4px' px={isActions?'2px':'8px'} textAlign={isActions?'center':'left'}>
                          <Flex justifyContent={isActions?'center':'space-between'} align='center' minH='32px'>
                            {isActions ? (
                              <Text fontSize='14px' fontWeight='400' color={color}>Detalhes</Text>
                            ) : (
                              <>
                                {flexRender(header.column.columnDef.header, header.getContext())}
                                {{ asc:' ↑', desc:' ↓' }[header.column.getIsSorted() as string] ?? null}
                              </>
                            )}
                          </Flex>
                        </Th>
                      );
                    })}
                  </Tr>
                ))}
              </Thead>
              <Tbody>
                {table.getRowModel().rows.map(row => (
                  <Tr key={row.id}>
                    {row.getVisibleCells().map(cell => {
                      const isActions = cell.column.id === 'actions';
                      return (
                        <Td key={cell.id} borderColor={borderColor} minW={isActions?'70px':'150px'} py='4px' px={isActions?'2px':'8px'} textAlign={isActions?'center':'left'}>
                          {flexRender(cell.column.columnDef.cell, cell.getContext())}
                        </Td>
                      );
                    })}
                  </Tr>
                ))}
              </Tbody>
            </CKTable>
          </Box>
        </Box>
      </Card>
      
      <Flex my='8px' px='0px'>
        <Flex align='center'>
          <Select 
            w='72px' 
            fontSize='16px' 
            bg='transparent'
            border='none'
            outline='none'
            _focus={{ outline: 'none', boxShadow: 'none' }}
            value={pagination.pageSize} 
            onChange={(e:any)=> table.setPageSize(Number(e.target.value))}
          >
            {[10,20,30,40,50].map(ps => <option key={ps} value={ps}>{ps}</option>)}
          </Select>
          <Text ml='8px' fontSize='16px' color='#00000080' fontWeight='400'>Linhas por página</Text>
        </Flex>
        <Spacer />
        <Flex align='center' fontSize='14px' gap='4px'>
          <Text mr='12px'>{firstIndex}-{lastIndex} de {table.getRowCount().toLocaleString()}</Text>
          <Button size='sm' variant='ghost' onClick={()=>table.previousPage()} disabled={!table.getCanPreviousPage()}>{'<'}</Button>
          
          {Array.from({length: Math.min(table.getPageCount(), 10)}, (_, i) => {
            const pageNum = i + 1;
            const isActive = pagination.pageIndex === i;
            return (
              <Button
                key={i}
                size='sm'
                variant={isActive ? 'solid' : 'ghost'}
                bg={isActive ? '#3182CE' : 'transparent'}
                color={isActive ? 'white' : '#718096'}
                _hover={{ bg: isActive ? '#2C5AA0' : '#E2E8F0' }}
                onClick={() => table.setPageIndex(i)}
                minW='32px'
                h='32px'
              >
                {pageNum}
              </Button>
            );
          })}
          
          {table.getPageCount() > 10 && <Text px='2'>...</Text>}
          
          <Button size='sm' variant='ghost' onClick={()=>table.nextPage()} disabled={!table.getCanNextPage()}>{'>'}</Button>
        </Flex>
      </Flex>
      
      <AttributesModal
        isOpen={modalState.isOpen}
        onClose={closeAttributesModal}
        attributes={modalState.attributes}
        title={modalState.title}
      />
    </Box>
  );
}

export default RecordGrid;
