import { useMemo } from 'react'
import { consultoriaServices, estudosServices } from '../data/services.js'
import { useCollection } from './useCollection.js'
import { fromService } from '../lib/cms-maps.js'

const fallback = [
  ...consultoriaServices.map((s) => ({ ...s, group: 'consultoria' })),
  ...estudosServices.map((s) => ({ ...s, group: 'estudos' })),
]

// Serviços do CMS (componente "services", campo `group` = consultoria | estudos) separados
// nos dois grupos que o site usa; sem CMS, os de src/data/services.js.
export function useServices() {
  const { items } = useCollection('services', fallback, { map: fromService })
  return useMemo(
    () => ({
      consultoria: items.filter((s) => s.group === 'consultoria'),
      estudos: items.filter((s) => s.group === 'estudos'),
    }),
    [items],
  )
}
