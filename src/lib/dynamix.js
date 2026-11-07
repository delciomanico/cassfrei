// Cliente da API pública do Dynamix-CMS (https://dynamix.cassfrei.com).
//
// Contrato (ver docs/dynamix.md e o README do Dynamix-CMS):
//   GET {API}/public/{projecto}/content/{componente}?page&limit&sort&q&filter[campo]=valor
//     → { data: [ { id, slug, ...campos, publishedAt } ], meta: { total, page, limit, pages } }
//   Campos "image"/"file" já chegam como URL completa (…/public/{projecto}/media/{id}).
//   A API só ordena por data — por isso pedimos "sort=publishedAt" (mais antigo primeiro) e a
//   ordem de publicação no CMS é a ordem de apresentação.
//
// Qualquer falha (rede, timeout, 404, projecto/componente inexistente) devolve `null` e o site
// continua com o conteúdo estático de src/data/ — o CMS nunca pode partir o site.
const API = (import.meta.env.VITE_DYNAMIX_API_URL || 'https://dynamix.cassfrei.com/api/v1').replace(/\/$/, '')
const PROJECT = import.meta.env.VITE_DYNAMIX_PROJECT || 'cassfrei'
const ENABLED = import.meta.env.VITE_DYNAMIX_DISABLED !== 'true'
const TIMEOUT_MS = 5000
const PAGE_LIMIT = 100 // máximo da API

const cache = new Map()

async function getJson(url) {
  const controller = new AbortController()
  const timer = setTimeout(() => controller.abort(), TIMEOUT_MS)
  try {
    const response = await fetch(url, { signal: controller.signal, headers: { Accept: 'application/json' } })
    if (!response.ok) return null
    return await response.json()
  } catch {
    return null
  } finally {
    clearTimeout(timer)
  }
}

async function loadAll(component, sort) {
  const base = `${API}/public/${PROJECT}/content/${encodeURIComponent(component)}`
  const first = await getJson(`${base}?limit=${PAGE_LIMIT}&page=1&sort=${sort}`)
  if (!first || !Array.isArray(first.data)) return null

  const rows = [...first.data]
  const pages = first.meta?.pages ?? 1
  for (let page = 2; page <= pages; page += 1) {
    const next = await getJson(`${base}?limit=${PAGE_LIMIT}&page=${page}&sort=${sort}`)
    if (!next || !Array.isArray(next.data)) break
    rows.push(...next.data)
  }
  return rows
}

// Lista completa (todas as páginas) de um componente, ou `null` se o CMS não respondeu.
// Os pedidos repetidos na mesma sessão partilham a mesma promessa.
export function fetchCollection(component, { sort = 'publishedAt' } = {}) {
  if (!ENABLED) return Promise.resolve(null)
  const key = `${component}|${sort}`
  if (!cache.has(key)) cache.set(key, loadAll(component, sort))
  return cache.get(key)
}
