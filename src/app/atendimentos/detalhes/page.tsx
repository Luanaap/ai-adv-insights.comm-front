import { Suspense } from 'react';
import { MainLayout } from '@/components/layout/MainLayout';
import DetalhesContent from './components/DetalhesContent';

export default function AtendimentosDetalhesPage() {
  return (
    <MainLayout>
      <Suspense fallback={<div style={{ padding:24 }}>Carregando...</div>}>
        <DetalhesContent />
      </Suspense>
    </MainLayout>
  );
}
