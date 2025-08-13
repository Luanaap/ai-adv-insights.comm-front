"use client";
import React from "react";
import { RecordGrid } from "@/components/data-grid/RecordGrid";
import { RecordRow } from "@/components/data-grid/types";

export default function AtendimentosClient({ data }: { data: RecordRow[] }) {
  const [loading, setLoading] = React.useState(true);
  React.useEffect(() => {
    const t = setTimeout(() => setLoading(false), 1200); // simula fetch
    return () => clearTimeout(t);
  }, []);

  const handleDetail = (row: RecordRow) => {
    console.log('Detalhes do registro', row);
  };

  return <RecordGrid data={loading ? [] : data} isLoading={loading} onDetail={handleDetail} title="Atendimentos" />;
}
