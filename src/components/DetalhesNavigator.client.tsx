'use client'

import { useEffect } from 'react'

export default function DetalhesNavigator() {
  useEffect(() => {
    function handler(e: Event) {
      const target = e.target as HTMLElement | null
      if (!target) return

      const el = target.closest('button, a') as HTMLElement | null
      if (!el) return

      const text = (el.textContent || '').trim().toLowerCase()
      if (text === 'detalhes' || text === 'detalhe' || text.includes('detalhes')) {
        const href = el.getAttribute('data-href') || el.getAttribute('href') || '/atendimentos/detalhes'
        if (el.tagName.toLowerCase() === 'a' && href) {
          return
        }

        if (href) {
          window.location.href = href
        }
      }
    }

    document.addEventListener('click', handler)
    return () => document.removeEventListener('click', handler)
  }, [])

  return null
}
