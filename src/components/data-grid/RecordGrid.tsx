"use client";
import React from 'react';
import { 
  Box, 
  Button, 
  Flex, 
  Text, 
  Spacer, 
  Badge,
  Portal,
  Table,
  chakra,
  Input,
  HStack,
  VStack
} from '@chakra-ui/react';
import { createColumnHelper, flexRender, getCoreRowModel, getSortedRowModel, getFilteredRowModel, getPaginationRowModel, useReactTable, SortingState, PaginationState } from '@tanstack/react-table';
import { RecordRow, RecordGridProps, AttributeTag } from './types';
import { FiltersSection, FiltersState } from './FiltersSection';
import { AttributesModal } from './AttributesModal';

const Select: any = chakra('select');
const useColorModeValue = (l: any, _d: any) => l;

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
  
  const [filters, setFilters] = React.useState<FiltersState>({
    bpo: '',
    dateType: '',
    island: '',
    channel: '',
    date: '',
    search: ''
  });
  
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
    setModalState({ isOpen: true, attributes, title: rowTitle });
  };

  const closeAttributesModal = () => {
    setModalState({ isOpen: false, attributes: [], title: '' });
  };

  const renderAttributesCell = (attributes: (string | AttributeTag)[] | undefined, row: RecordRow) => {
    if (!attributes || attributes.length === 0) {
      return <Text fontSize="12px" color="#666">-</Text>;
    }

    const getAttributeProps = (attr: string | AttributeTag) => {
      if (typeof attr === 'string') {
        return { label: attr, type: 'default' } as AttributeTag;
      }
      return attr as AttributeTag;
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
            <Badge key={index} px="6px" py="2px" borderRadius="12px" fontSize="10px" bg={colors.bg} color={colors.color} maxW="80px" overflow="hidden" textOverflow="ellipsis" whiteSpace="nowrap">
              {label}
            </Badge>
          );
        })}
        {remainingCount > 0 && (
          <Button size="xs" variant="ghost" fontSize="10px" color="#666" minW="auto" h="20px" px="6px" onClick={() => openAttributesModal(attributes, `${row.agent_name} - ${row.case_number}`)} _hover={{ bg: '#F3F4F6' }}>
            +{remainingCount}
          </Button>
        )}
      </Flex>
    );
  };

  const columnHelper = createColumnHelper<RecordRow>();
  const headerText = (text: string) => (
    <Text
      color={color}
      fontSize={{ sm: '12px', lg: '14px' }}
      fontWeight='400'
      whiteSpace='nowrap'
      overflow='hidden'
      textOverflow='ellipsis'
      maxW='100%'
    >
      {text}
    </Text>
  );
  const cellText = (text: any) => (
    <Text
      color={color}
      fontSize={{ sm: '12px', lg: '14px' }}
      fontWeight='400'
      whiteSpace='nowrap'
      overflow='hidden'
      textOverflow='ellipsis'
      maxW='100%'
    >
      {text}
    </Text>
  );

  const columns = [
    columnHelper.accessor('interaction_date',{ id:'interaction_date', header:()=>headerText('Data do Atendimento'), cell:i=>cellText(i.getValue()), filterFn:'arrIncludesSome'}),
    columnHelper.accessor('leader_name',{ id:'leader_name', header:()=>headerText('Líder'), cell:i=>cellText(i.getValue()), filterFn:'arrIncludesSome'}),
    columnHelper.accessor('agent_name',{ id:'agent_name', header:()=>headerText('Atendente'), cell:i=>cellText(i.getValue()), filterFn:'arrIncludesSome'}),
    columnHelper.accessor('island_name',{ id:'island_name', header:()=>headerText('Ilha'), cell:i=>cellText(i.getValue()), filterFn:'arrIncludesSome'}),
    columnHelper.accessor('channel_name',{ id:'channel_name', header:()=>headerText('Canal'), cell:i=>cellText(i.getValue()), filterFn:'arrIncludesSome'}),
    columnHelper.accessor('external_id',{ id:'external_id', header:()=>headerText('Id'), cell:i=>cellText(i.getValue()), filterFn:'arrIncludesSome'}),
    columnHelper.accessor('case_number',{ id:'case_number', header:()=>headerText('Caso'), cell:i=>cellText(i.getValue()), filterFn:'arrIncludesSome'}),
    columnHelper.accessor('client_phone_number',{ id:'client_phone_number', header:()=>headerText('Telefone'), cell:i=>cellText(i.getValue()), filterFn:'arrIncludesSome'}),
    columnHelper.accessor('attributes', { id:'attributes', header:()=>headerText('Atributos'), cell: info => renderAttributesCell(info.getValue(), info.row.original), filterFn:'arrIncludesSome' }),
    columnHelper.accessor('date_type',{ id:'date_type', header:()=>headerText('Tipo de Data'), cell:i=>cellText(i.getValue()==='contestation'?'Contestação':'Contato'), filterFn:'arrIncludesSome'}),
    columnHelper.accessor('status',{ id:'status', header:()=>headerText('Status'), cell:i=>cellText(i.getValue()), filterFn:'arrIncludesSome'}),
    columnHelper.accessor('note',{ id:'note', header:()=>headerText('Nota'), cell:i=>cellText(i.getValue()), filterFn:'inNumberRange'}),
    columnHelper.accessor('audio_duration',{ id:'audio_duration', header:()=>headerText('Duração'), cell:i=>cellText(parseAudioDuration(i.getValue())), filterFn:'inNumberRange'}),
    columnHelper.display({ id:'actions', header:()=>'', cell:info=> <Button color={textColor} variant='outline' size='sm' onClick={()=>onDetail(info.row.original)}>Detalhes</Button>, size: 70, minSize: 70, maxSize: 70, enableSorting: false })
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
  
  const COL_WIDTHS: Record<string, number> = {
    interaction_date: 130,
    leader_name: 120,
    agent_name: 140,
    island_name: 110,
    channel_name: 110,
    external_id: 90,
    case_number: 110,
    client_phone_number: 150,
    attributes: 170,
    date_type: 120,
    status: 110,
    note: 80,
    audio_duration: 110,
    actions: 100
  };
  const getColWidth = (id: string) => (COL_WIDTHS[id] ?? 110);
  const ACTIONS_COL_WIDTH = COL_WIDTHS.actions;

  return (
    <Box flexDirection='column' w='100%' pl="0">
  <Box mt={2} mb={2}>
  <FiltersSection
        filters={filters}
        onChange={setFilters}
        onClear={() => setFilters({ bpo:'', dateType:'', island:'', channel:'', date:'', search:'' })}
  />
  </Box>

      <Table.ScrollArea borderWidth="0" rounded="md" maxH="500px" w="100%" overflowX="auto" bg="transparent">
        <Box as="div" bg="white" borderWidth="1px" rounded="md" minW="100%" w="max-content" position="relative">
        <Table.Root size="sm" style={{ width: 'max-content', minWidth: '100%', tableLayout: 'fixed' }} css={{
          "& [data-sticky]": { position: "sticky", zIndex: 10, bg: "white" },
          "& [data-sticky=end]": { right: "0", boxShadow: "inset 8px 0px 8px -8px rgba(0, 0, 0, 0.16)" },
          "& [data-sticky=start]": { left: "0", boxShadow: "inset -8px 0px 8px -8px rgba(0, 0, 0, 0.16)" },
          "& th, & td": { paddingInline: '12px', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }
        }}>
          <Table.Header>
            {table.getHeaderGroups().map(hg => (
              <Table.Row key={hg.id}>
                {hg.headers.map(header => {
                  const isActions = header.column.id === 'actions';
                  return (
                    <Table.ColumnHeader
                      key={header.id}
                      data-sticky={isActions ? "end" : undefined}
                      minW={`${getColWidth(header.column.id)}px`}
                      w={`${getColWidth(header.column.id)}px`}
                      maxW={`${getColWidth(header.column.id)}px`}
                      cursor={!isActions ? 'pointer' : 'default'}
                      onClick={!isActions ? header.column.getToggleSortingHandler() : undefined}
                      style={isActions ? { position: 'sticky', right: 0, zIndex: 10, backgroundColor: 'white' } : {}}
                    >
                      {isActions ? (
                        <Text fontSize='14px' fontWeight='400' color={color}>Detalhes</Text>
                      ) : (
                        <Flex justifyContent='space-between' align='center'>
                          {flexRender(header.column.columnDef.header, header.getContext())}
                          {{ asc:' ↑', desc:' ↓' }[header.column.getIsSorted() as string] ?? null}
                        </Flex>
                      )}
                    </Table.ColumnHeader>
                  );
                })}
              </Table.Row>
            ))}
          </Table.Header>

          <Table.Body>
            {table.getRowModel().rows.map(row => (
              <Table.Row key={row.id}>
                {row.getVisibleCells().map(cell => {
                  const isActions = cell.column.id === 'actions';
                  return (
                    <Table.Cell
                      key={cell.id}
                      data-sticky={isActions ? "end" : undefined}
                      minW={`${getColWidth(cell.column.id)}px`}
                      w={`${getColWidth(cell.column.id)}px`}
                      maxW={`${getColWidth(cell.column.id)}px`}
                      style={isActions ? { position: 'sticky', right: 0, zIndex: 10, backgroundColor: 'white' } : {}}
                    >
                      {flexRender(cell.column.columnDef.cell, cell.getContext())}
                    </Table.Cell>
                  );
                })}
              </Table.Row>
            ))}
          </Table.Body>
        </Table.Root>
        </Box>
      </Table.ScrollArea>
      
      <Flex my='8px' px='0px'>
        <Flex align='center'>
          <Select w='72px' fontSize='16px' bg='transparent' border='none' outline='none' _focus={{ outline: 'none', boxShadow: 'none' }} value={pagination.pageSize} onChange={(e:any)=> table.setPageSize(Number(e.target.value))}>
            {[10,20,30,40,50].map(ps => <option key={ps} value={ps}>{ps}</option>)}
          </Select>
          <Text ml='8px' fontSize='16px' color='#00000080' fontWeight='400'>Linhas por página</Text>
        </Flex>
        <Spacer />
        <Flex align='center' fontSize='14px' gap='4px'>
          <Text mr='12px'>{firstIndex}-{lastIndex} de {table.getRowCount().toLocaleString()}</Text>
          <Button size='sm' variant='ghost' onClick={()=>table.previousPage()} disabled={!table.getCanPreviousPage()}>{'<'}</Button>
          {Array.from({length: Math.min(table.getPageCount(), 10)}, (_, i) => (
            <Button key={i} size='sm' variant={pagination.pageIndex === i ? 'solid' : 'ghost'} bg={pagination.pageIndex === i ? '#3182CE' : 'transparent'} color={pagination.pageIndex === i ? 'white' : '#718096'} _hover={{ bg: pagination.pageIndex === i ? '#2C5AA0' : '#E2E8F0' }} onClick={() => table.setPageIndex(i)} minW='32px' h='32px'>
              {i + 1}
            </Button>
          ))}
          {table.getPageCount() > 10 && <Text px='2'>...</Text>}
          <Button size='sm' variant='ghost' onClick={()=>table.nextPage()} disabled={!table.getCanNextPage()}>{'>'}</Button>
        </Flex>
      </Flex>
      
      <AttributesModal isOpen={modalState.isOpen} onClose={closeAttributesModal} attributes={modalState.attributes} title={modalState.title} />
    </Box>
  );
}

export default RecordGrid;
