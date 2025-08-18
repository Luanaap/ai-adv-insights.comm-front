"use client";
import React, { useState } from 'react';
import styles from '../page.module.css';
import { useSearchParams } from 'next/navigation';
import AgentCard from './AgentCard';
import ChatPanel from './ChatPanel';
import EvaluationPanel from './EvaluationPanel';
import FlagsTable from './FlagsTable';

export default function DetalhesContent() {
  const searchParams = useSearchParams();
  const agent = searchParams?.get('agent') || 'Atendente';
  const id = searchParams?.get('id') || '';
  const leader = searchParams?.get('leader') || 'José da Silva';
  const [isExpanded, setIsExpanded] = useState(true);

  return (
    <div style={{ minHeight: '100vh', paddingTop: 4, paddingBottom: 16 }} className={styles.contentWrapper}>
      <div style={{ display:'flex', alignItems:'center', justifyContent:'space-between', marginBottom:24 }}>
        <h1 style={{ fontSize: 20, fontWeight: 600, margin:0 }}>Detalhe do atendimento</h1>
        <a href="/atendimentos" style={{ display:'inline-flex', alignItems:'center', gap:6, fontSize:14, color:'#111', textDecoration:'none', fontWeight:500 }}>
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="#111" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M10 3L5 8l5 5" />
          </svg>
          Voltar
        </a>
      </div>
      <div className={styles.columnsRow}>
        <div className={styles.leftColumn}>
          <AgentCard agent={agent} id={id} leader={leader} isExpanded={isExpanded} onToggle={()=>setIsExpanded(e=>!e)} />
          <ChatPanel />
        </div>
        <div className={`${styles.flagsStack} ${styles.rightColumn}`} style={{ flex:'1 1 auto' }}>
          <EvaluationPanel />
          <FlagsTable />
        </div>
      </div>
    </div>
  );
}
