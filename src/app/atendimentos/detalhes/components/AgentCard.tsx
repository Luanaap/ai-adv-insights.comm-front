"use client";
import React from 'react';
import styles from '../page.module.css';

interface AgentCardProps {
  agent: string;
  id: string;
  leader: string;
  isExpanded: boolean;
  onToggle: () => void;
}

export default function AgentCard({ agent, id, leader, isExpanded, onToggle }: AgentCardProps) {
  return (
    <div className={styles.agentCard} style={{ position: 'relative' }}>
      <div style={{ position: 'absolute', top: 16, right: 16, display: 'flex', alignItems: 'center', gap: 8 }}>
        <div style={{ background: '#E8F3FF', color: '#1E6FF1', padding: '6px 10px', borderRadius: 16, fontSize: 12, fontWeight: 600, boxShadow: 'inset 0 0 0 1px rgba(30,111,241,0.08)' }}>
          ranking - não VIP
        </div>
        <button onClick={onToggle} style={{ background: 'none', border: 'none', padding: 4, cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" style={{ transform: `rotate(${isExpanded ? 180 : 0}deg)`, transition: 'transform 0.2s ease' }}>
            <path d="M4 6L8 10L12 6" stroke='#6b7280' strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>
      </div>
      <div style={{ display: 'flex', gap: 16, alignItems: 'center', marginBottom: 12 }}>
        <div style={{ width: 72, height: 72, borderRadius: '50%', background: '#2463eb', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff', fontWeight: 700, fontSize: 18 }}>{agent.split(' ').map(n=>n[0]).slice(0,2).join('')}</div>
        <div>
          <div style={{ fontSize: 18, fontWeight: 700 }}>{agent} {id ? <span style={{ fontWeight: 500, color: '#6b7280' }}>- {id}</span> : null}</div>
          <div style={{ fontSize: 13, color: '#6b7280', marginTop: 6 }}>06/08/2024</div>
        </div>
      </div>
      {isExpanded && (
        <div style={{ borderTop: '1px solid #eef2f7', paddingTop: 16 }}>
          <div style={{ display: 'flex', flexDirection: 'row', gap: 32, justifyContent: 'space-between' }}>
            {[{label:'Líder', value:leader},{label:'Empresa', value:'Cabério'},{label:'Canal', value:'Telefone'},{label:'ID', value:id || '453'}].map(item => (
              <div key={item.label} style={{ display:'flex', flexDirection:'column', alignItems:'flex-start' }}>
                <span style={{ fontSize:12, color:'#9aa3b2', marginBottom:6 }}>{item.label}</span>
                <span style={{ margin:0, fontWeight:700 }}>{item.value}</span>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
