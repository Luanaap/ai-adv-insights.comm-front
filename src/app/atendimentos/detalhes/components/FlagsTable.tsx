"use client";
import React from 'react';
import styles from '../page.module.css';

const rows = [
  { peso:0, nome:'Ação do atendimento', status:'adequada' },
  { peso:10, nome:'Atenção', status:'inadequada' },
  { peso:10, nome:'Confirmação de sigilos', status:'naoAvaliada' },
  { peso:25, nome:'Cordialidade', status:'adequada' },
  { peso:15, nome:'Fraseologia e encerramento', status:'adequada' },
  { peso:0, nome:'Imagem corporativa', status:'adequada' },
  { peso:10, nome:'Informes do processo', status:'adequada' },
  { peso:25, nome:'Interação inicial', status:'adequada' },
  { peso:20, nome:'Linguagem', status:'adequada' },
  { peso:0, nome:'Objetividade', status:'adequada' },
  { peso:25, nome:'Pausa', status:'adequada' },
  { peso:100, nome:'Postura', status:'adequada' },
  { peso:0, nome:'Proatividade', status:'adequada' },
  { peso:0, nome:'Segurança', status:'adequada' },
];

export default function FlagsTable(){
  return (
    <div className={styles.flagsCard}>
      <table className={styles.flagsTable}>
        <thead>
          <tr>
            <th className={styles.weightCell}>Peso</th>
            <th className={styles.attrCell}>Atributo</th>
            <th className={styles.statusCell}>Conduta</th>
            <th className={styles.editCell}> </th>
          </tr>
        </thead>
        <tbody>
          {rows.map((row,i)=> (
            <tr key={i}>
              <td className={styles.weightCell}>{row.peso}</td>
              <td className={styles.attrCell}>{row.nome}</td>
              <td className={styles.statusCell}>
                <span className={`${styles.statusPill} ${row.status === 'adequada' ? styles.adequada : row.status === 'inadequada' ? styles.inadequada : styles.naoAvaliada}`}>
                  <span className={styles.statusDot} />
                  {row.status === 'adequada' ? 'Adequada' : row.status === 'inadequada' ? 'Inadequada' : 'Não avaliada'}
                </span>
              </td>
              <td className={styles.editCell}>
                <button className={styles.editButton} aria-label="Editar atributo">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#374151" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 20h9" />
                    <path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4Z" />
                  </svg>
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
