"use client";
import React from 'react';
import styles from '../page.module.css';

const messages = [
  { id:1, who:'agent', name:'Marcos Muller', role:'Atendente', time:'15:34', text:'Olá, sou a Marcos, consultor do BTG Banking. Estou à disposição para te atender no que você precisar!' },
  { id:2, who:'client', name:'Daniela Matias', role:'Cliente', time:'15:37', text:'Olá Marcos. Estou com problema no pagamento da fatura do cartão. O aplicativo está dando problema. Isso aconteceu dois dias atrás e já testei ontem e hoje mas continua dando problema. Conseguem me ajudar? Não quero pagar pelo rotativo por um problema do aplicativo.' },
  { id:3, who:'agent', name:'Marcos Muller', role:'Atendente', time:'15:43', text:'Claro Daniela. Estou verificando o problema e já te retorno.' },
  { id:4, who:'client', name:'Daniela Matias', role:'Cliente', time:'15:44', text:'Ok.' },
  { id:5, who:'agent', name:'Marcos Muller', role:'Atendente', time:'15:45', text:'Daniela, verifiquei o ocorrido e não há nenhum problema com o aplicativo.' },
  { id:6, who:'client', name:'Daniela Matias', role:'Cliente', time:'15:46', text:'Como assim? Está dizendo que eu sou um mentirosa? Já lhe disse que o aplicativo está com problemas!' },
];

export default function ChatPanel(){
  return (
    <div className={styles.chatCard}>
      <div className={styles.chatSection}>
        <div className={styles.chatSearchWrapper}>
          <span className={styles.searchIcon} aria-hidden="true">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#6B7280" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="11" cy="11" r="8" />
              <path d="m21 21-4.35-4.35" />
            </svg>
          </span>
          <input type="text" placeholder="Label" className={styles.chatSearchInput} aria-label="Buscar na conversa" />
        </div>
        <div className={styles.messagesScroller}>
          {messages.map(m => (
            <div key={m.id} className={styles.messageRow} data-who={m.who}>
              <div className={styles.meta}>
                <span className={styles.metaName}>{m.name}</span>
                <span className={styles.metaRole}>({m.role})</span>
                <span className={styles.metaTime}>{m.time}</span>
              </div>
              <div className={styles.bubble}>
                {m.text.split(/(mentirosa?)/i).map((chunk,i) => (/mentirosa?/i.test(chunk) ? <mark key={i}>{chunk}</mark> : <React.Fragment key={i}>{chunk}</React.Fragment>))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
