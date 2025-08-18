"use client";
import React from 'react';
import styles from '../page.module.css';

export default function EvaluationPanel(){
  return (
    <div className={styles.pageEvalCard}>
      <div className={styles.trophyBox}>
        <img src="/trofeu.svg" alt="Troféu" />
      </div>
      <div className={styles.evalContent}>
        <div className={styles.stars}>
          {[1,2,3,4,5].map((star, index) => (
            <svg key={index} viewBox="0 0 24 24" fill={index < 4 ? '#111111' : '#D9D9D9'} xmlns="http://www.w3.org/2000/svg">
              <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" />
            </svg>
          ))}
        </div>
        <div className={styles.score}>4.0</div>
        <div className={styles.desc}>Nota para este atendimento</div>
      </div>
    </div>
  );
}
