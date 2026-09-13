import { writeFileSync } from 'node:fs'
import { fileURLToPath } from 'node:url'
import { dirname, resolve } from 'node:path'
import projects from '../src/data/projects.js'
import posts from '../src/data/posts.js'

const SITE_URL = 'https://cassfrei.com'
const __dirname = dirname(fileURLToPath(import.meta.url))
const today = new Date().toISOString().slice(0, 10)

const staticRoutes = [
  { path: '/', changefreq: 'weekly', priority: '1.0' },
  { path: '/sobre', changefreq: 'monthly', priority: '0.8' },
  { path: '/o-que-fazemos', changefreq: 'monthly', priority: '0.9' },
  { path: '/formacoes', changefreq: 'monthly', priority: '0.8' },
  { path: '/galeria', changefreq: 'monthly', priority: '0.6' },
  { path: '/projectos', changefreq: 'monthly', priority: '0.8' },
  { path: '/blog', changefreq: 'weekly', priority: '0.6' },
  { path: '/contactos', changefreq: 'yearly', priority: '0.7' },
]

const projectRoutes = projects.map((project) => ({
  path: `/projectos/${project.slug}`,
  changefreq: 'yearly',
  priority: '0.6',
}))

const postRoutes = posts.map((post) => ({
  path: `/blog/${post.slug}`,
  changefreq: 'monthly',
  priority: '0.5',
  lastmod: post.date,
}))

const routes = [...staticRoutes, ...projectRoutes, ...postRoutes]

const body = routes
  .map(
    (route) => `  <url>
    <loc>${SITE_URL}${route.path}</loc>
    <lastmod>${route.lastmod || today}</lastmod>
    <changefreq>${route.changefreq}</changefreq>
    <priority>${route.priority}</priority>
  </url>`
  )
  .join('\n')

const xml = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${body}\n</urlset>\n`

writeFileSync(resolve(__dirname, '../dist/sitemap.xml'), xml)
console.log(`sitemap.xml gerado com ${routes.length} URLs em dist/sitemap.xml`)
