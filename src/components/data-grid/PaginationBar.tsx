"use client";
import { Flex, Text, Button } from "@chakra-ui/react";
import { Table } from "@tanstack/react-table";
import { RecordRow } from "./types";

interface PaginationBarProps {
  table: Table<RecordRow>;
}

export function PaginationBar({ table }: PaginationBarProps) {
  const state = table.getState();
  const pageIndex = state.pagination.pageIndex;
  const pageSize = state.pagination.pageSize;
  const rowCount = table.getRowCount();

  const start = pageIndex * pageSize + 1;
  const end = Math.min((pageIndex + 1) * pageSize, rowCount);

  return (
    <Flex my="8px" align="center" w="100%">
      <Flex align="center">
        <select style={{ width: '72px' }} value={pageSize} onChange={(e: React.ChangeEvent<HTMLSelectElement>) => table.setPageSize(Number(e.target.value))}>
          {[10,20,30,40,50].map(size => <option key={size} value={size}>{size}</option>)}
        </select>
        <Text ml="8px" fontSize="16px" color="#00000080" fontWeight="400">Linhas por página</Text>
      </Flex>
      <Flex ml="auto" align="center">
        <Text>{start}-{end} de {rowCount.toLocaleString()}</Text>
  <Button ml="8px" onClick={() => table.previousPage()} disabled={!table.getCanPreviousPage()}>{'<'}</Button>
  <Button ml="8px" onClick={() => table.nextPage()} disabled={!table.getCanNextPage()}>{'>'}</Button>
      </Flex>
    </Flex>
  );
}
