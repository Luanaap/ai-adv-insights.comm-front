import React from 'react'
import { MainLayout } from '@/components/layout/MainLayout'

export default function DetalhesPage() {
  return (
    <MainLayout>
      <div style={{ minHeight: '100vh', background: '#f6f8fb', padding: 24 }}>
  <h1 style={{ fontSize: 20, fontWeight: 600, marginTop: 0, marginRight: 0, marginBottom: 16, marginLeft: 0 }}>Detalhe do atendimento</h1>

        <div style={{ display: 'grid', gridTemplateColumns: '360px 1fr', gap: 16 }}>
          <aside style={{ background: '#fff', borderRadius: 8, padding: 16, boxShadow: '0 1px 2px rgba(16,24,40,0.04)', border: '1px solid #e6eef8' }}>
            <div style={{ display: 'flex', gap: 12, alignItems: 'center', marginBottom: 12 }}>
              <div style={{ width: 56, height: 56, borderRadius: '50%', background: '#2463eb', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff', fontWeight: 700 }}>ML</div>
              <div>
                <div style={{ fontSize: 16, fontWeight: 700 }}>Michele Lacerda <span style={{ fontWeight: 500, color: '#6b7280' }}>- ID 453</span></div>
                <div style={{ fontSize: 12, color: '#6b7280', marginTop: 4 }}>06/08/2024</div>
              </div>
            </div>

            <div style={{ borderTop: '1px solid #eef2f7', paddingTop: 12 }}>
              <dl style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 8 }}>
                <div>
                  <dt style={{ fontSize: 12, color: '#9aa3b2' }}>Líder</dt>
                  <dd style={{ margin: 0, fontWeight: 600 }}>José da Silva</dd>
                </div>

                <div>
                  <dt style={{ fontSize: 12, color: '#9aa3b2' }}>Empresa</dt>
                  <dd style={{ margin: 0, fontWeight: 600 }}>Cabério</dd>
                </div>

                <div>
                  <dt style={{ fontSize: 12, color: '#9aa3b2' }}>Canal</dt>
                  <dd style={{ margin: 0, fontWeight: 600 }}>Telefone</dd>
                </div>

                <div>
                  <dt style={{ fontSize: 12, color: '#9aa3b2' }}>ID</dt>
                  <dd style={{ margin: 0, fontWeight: 600 }}>453</dd>
                </div>
              </dl>
            </div>
          </aside>

          <main style={{ background: '#fff', borderRadius: 8, padding: 16, minHeight: 400, border: '1px solid #eef2f7' }}>
          </main>
        </div>
      </div>
    </MainLayout>
  )
}
