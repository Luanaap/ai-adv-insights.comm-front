"use client";
import React from "react";
import { useRouter } from 'next/navigation'
import { RecordGrid } from "@/components/data-grid/RecordGrid";
import { RecordRow } from "@/components/data-grid/types";

export default function AtendimentosClient({ data }: { data: RecordRow[] }) {
  const [loading, setLoading] = React.useState(true);
  const router = useRouter();

  React.useEffect(() => {
    const t = setTimeout(() => setLoading(false), 1200);
    return () => clearTimeout(t);
  }, []);

  const handleDetail = (row: RecordRow) => {
    const params = new URLSearchParams({ agent: row.agent_name, id: row.external_id });
    router.push(`/atendimentos/detalhes?${params.toString()}`);
  };

  return <RecordGrid data={loading ? [] : data} isLoading={loading} onDetail={handleDetail} title="Atendimentos" />;
}
