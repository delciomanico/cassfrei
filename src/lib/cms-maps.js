// Conversão das entradas do Dynamix-CMS para o formato que os componentes já usam (o mesmo de
// src/data/*). Cada função `from*` recebe uma entrada da API — { id, slug, ...campos,
// publishedAt } — e devolve o item da UI. Os campos esperados em cada componente do CMS estão
// documentados em docs/dynamix.md.
import {
  AlertTriangle, ArrowUpRight, Briefcase, Building2, CalendarDays, Database, FlaskConical,
  Gavel, Globe, GraduationCap, Handshake, Landmark, Leaf, Map, MapPin, Monitor, Rocket,
  ShieldCheck, Signpost, Store,
} from 'lucide-react'

// Ícones disponíveis para o campo "icon" (nome do ícone Lucide, ex.: "Handshake").
const icons = {
  AlertTriangle, ArrowUpRight, Briefcase, Building2, CalendarDays, Database, FlaskConical,
  Gavel, Globe, GraduationCap, Handshake, Landmark, Leaf, Map, MapPin, Monitor, Rocket,
  ShieldCheck, Signpost, Store,
}

export function iconByName(name, fallback = MapPin) {
  if (typeof name !== 'string') return fallback
  const key = name.replace(/[^a-z0-9]/gi, '').toLowerCase()
  const found = Object.keys(icons).find((k) => k.toLowerCase() === key)
  return found ? icons[found] : fallback
}

// Parágrafos: aceita uma lista JSON ou um texto em que os parágrafos se separam por linha em
// branco. Uma linha a começar por "## " continua a ser um subtítulo (ver BlogPost.jsx).
export function paragraphs(value) {
  if (Array.isArray(value)) return value.filter(Boolean).map(String)
  if (typeof value !== 'string') return []
  return value.split(/\n\s*\n|\r\n\s*\r\n/).map((p) => p.trim()).filter(Boolean)
}

// Listas: aceita lista JSON ou texto separado por vírgulas.
export function list(value) {
  if (Array.isArray(value)) return value.filter(Boolean).map(String)
  if (typeof value !== 'string') return []
  return value.split(',').map((v) => v.trim()).filter(Boolean)
}

const json = (value) => (Array.isArray(value) ? value : [])
const bool = (value) => value === true || value === 'true'

export const fromHeroSlide = (e) => ({ image: e.image, kicker: e.kicker, title: e.title, text: e.text })

export const fromValue = (e) => ({ icon: iconByName(e.icon, Handshake), title: e.title, text: e.text })

export const fromService = (e) => ({
  icon: iconByName(e.icon),
  title: e.title,
  abbr: e.abbr || undefined,
  text: e.text,
  group: e.group === 'estudos' ? 'estudos' : 'consultoria',
})

export const fromStat = (e) => ({ icon: iconByName(e.icon, Landmark), target: Number(e.value) || 0, label: e.label })

export const fromProject = (e) => ({
  slug: e.slug,
  title: e.title,
  client: e.client,
  period: e.period,
  image: e.image,
  placeholder: !e.image,
  summary: e.summary,
  body: paragraphs(e.body),
  stats: json(e.stats).length ? json(e.stats) : undefined,
})

export const fromPost = (e) => ({
  slug: e.slug,
  title: e.title,
  date: e.date || e.publishedAt,
  excerpt: e.excerpt,
  image: e.image,
  tags: list(e.tags),
  body: paragraphs(e.body),
  gallery: json(e.gallery),
})

export const fromFormacao = (e) => ({
  slug: e.slug,
  title: e.title,
  modality: e.modality || 'Presencial',
  text: e.text,
  image: e.image,
  placeholder: !e.image,
  vagasAbertas: bool(e.vagas_abertas ?? e.vagasAbertas),
  googleFormUrl: e.google_form_url || e.googleFormUrl || null,
})

export const fromMedia = (e) => ({
  tipo: e.tipo === 'video' ? 'video' : 'foto',
  categoria: e.categoria || undefined,
  caption: e.caption || e.title,
  src: e.image || e.src,
  thumb: e.thumb || undefined,
  youtube: e.youtube || undefined,
  file: e.file || undefined,
  destaque: bool(e.destaque),
})

export const fromTeamMember = (e) => ({ name: e.name, role: e.role, email: e.email || null, image: e.image })

export const fromClient = (e) => ({ name: e.name, period: e.period, tipo: e.tipo === 'privada' ? 'privada' : 'publica' })
