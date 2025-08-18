"use client"
import React, { useState, Suspense } from 'react'
import styles from './page.module.css'
import { MainLayout } from '@/components/layout/MainLayout'
import { useSearchParams } from 'next/navigation'

function DetalhesContent() {
  const searchParams = useSearchParams();
  const agent = searchParams?.get('agent') || 'Atendente';
  const id = searchParams?.get('id') || '';
  const leader = searchParams?.get('leader') || 'José da Silva';
  const [isExpanded, setIsExpanded] = useState(true);

  return (
    <div style={{ minHeight: '100vh', padding: 24 }}>
  <h1 style={{ fontSize: 20, fontWeight: 600, marginTop: 0, marginRight: 0, marginBottom: 16, marginLeft: 0 }}>Detalhe do atendimento</h1>

  <div style={{ display: 'flex', flexDirection: 'row', gap: 8, alignItems: 'flex-start', flexWrap: 'nowrap', overflowX: 'auto' }}>
          <aside style={{ position: 'relative', background: '#fff', borderRadius: 10, padding: 24, boxShadow: '0 4px 8px rgba(16,24,40,0.06)', border: '1px solid #e6eef8', minWidth: 520, maxWidth: 520, flex: '0 0 520px' }}>
            <div style={{ position: 'absolute', top: 16, right: 16, display: 'flex', alignItems: 'center', gap: 8 }}>
              <div style={{ 
                background: '#E8F3FF', 
                color: '#1E6FF1', 
                padding: '6px 10px', 
                borderRadius: 16, 
                fontSize: 12, 
                fontWeight: 600,
                boxShadow: 'inset 0 0 0 1px rgba(30,111,241,0.08)'
              }}>
                ranking - não VIP
              </div>
              <button 
                onClick={() => setIsExpanded(!isExpanded)}
                style={{ 
                  background: 'none',
                  border: 'none',
                  padding: 4,
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}
              >
                <svg 
                  width="16" 
                  height="16" 
                  viewBox="0 0 16 16" 
                  fill="none" 
                  style={{
                    transform: `rotate(${isExpanded ? 180 : 0}deg)`,
                    transition: 'transform 0.2s ease'
                  }}
                >
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
                <dl style={{ display: 'flex', flexDirection: 'row', gap: 32, justifyContent: 'space-between' }}>
                  <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
                    <dt style={{ fontSize: 12, color: '#9aa3b2', marginBottom: 6 }}>Líder</dt>
                    <dd style={{ margin: 0, fontWeight: 700 }}>{leader}</dd>
                  </div>

                  <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
                    <dt style={{ fontSize: 12, color: '#9aa3b2', marginBottom: 6 }}>Empresa</dt>
                    <dd style={{ margin: 0, fontWeight: 700 }}>Cabério</dd>
                  </div>

                  <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
                    <dt style={{ fontSize: 12, color: '#9aa3b2', marginBottom: 6 }}>Canal</dt>
                    <dd style={{ margin: 0, fontWeight: 700 }}>Telefone</dd>
                  </div>

                  <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
                    <dt style={{ fontSize: 12, color: '#9aa3b2', marginBottom: 6 }}>ID</dt>
                    <dd style={{ margin: 0, fontWeight: 700 }}>{id || '453'}</dd>
                  </div>
                </dl>
              </div>
            )}
          </aside>

          <div className={styles.pageEvalCard}>
            <div className={styles.trophyBox}>
              <img src="/trofeu.svg" alt="Troféu" />
            </div>

            <div className={styles.evalContent}>
              <div className={styles.stars}>
                {[1,2,3,4,5].map((star, index) => (
                  <svg
                    key={index}
                    viewBox="0 0 24 24"
                    fill={index < 4 ? '#111111' : '#D9D9D9'}
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" />
                  </svg>
                ))}
              </div>

              <div className={styles.score}>4.0</div>

              <div className={styles.desc}>Nota para este atendimento</div>
            </div>
          </div>
        </div>
      </div>
  );
}

export default function AtendimentosDetalhesPage() {
  return (
    <MainLayout>
      <Suspense fallback={<div style={{ padding:24 }}>Carregando...</div>}>
        <DetalhesContent />
      </Suspense>
    </MainLayout>
  );
}
