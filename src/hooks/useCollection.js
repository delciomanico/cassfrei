import { useEffect, useState } from 'react'
import { fetchCollection } from '../lib/dynamix.js'

// Devolve a lista de um componente do Dynamix-CMS já convertida para o formato que a UI usa.
// - Arranca logo com `fallback` (conteúdo estático de src/data/) — sem "flash" nem espera.
// - Quando o CMS responde com pelo menos 1 entrada publicada, substitui o fallback.
// - Se o CMS falhar ou o componente estiver vazio, o fallback mantém-se.
// `ready` passa a true quando o pedido ao CMS terminou (com ou sem sucesso) — as páginas de
// detalhe usam-no para só mostrarem "não encontrado" depois de o CMS ter respondido.
// `map` converte uma entrada do CMS num item da UI e tem de ser uma função estável (de módulo).
export function useCollection(component, fallback, { map = (entry) => entry, sort } = {}) {
  const [state, setState] = useState({ items: fallback, source: 'fallback', ready: false })

  useEffect(() => {
    let active = true
    fetchCollection(component, { sort }).then((rows) => {
      if (!active) return
      if (!rows || rows.length === 0) setState((s) => ({ ...s, ready: true }))
      else setState({ items: rows.map(map), source: 'cms', ready: true })
    })
    return () => {
      active = false
    }
  }, [component, map, sort])

  return state
}
