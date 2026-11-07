import { useCallback } from 'react'
import { useCollection } from './useCollection.js'

const mapText = (entry) => ({ key: entry.key, value: entry.value })

// Textos editáveis do site (componente "site-texts": campos `key` e `value`).
// t('home.about.title', 'Sobre Nós') devolve o valor do CMS para essa chave ou, se não
// existir (ou o CMS não responder), o texto por omissão passado no código.
export function useTexts() {
  const { items } = useCollection('site-texts', [], { map: mapText })

  return useCallback(
    (key, fallback) => {
      const found = items.find((item) => item.key === key)
      return found?.value ? found.value : fallback
    },
    [items],
  )
}
