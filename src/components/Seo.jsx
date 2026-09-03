import { useEffect } from 'react'
import { SITE_NAME, SITE_URL, absoluteUrl } from '../lib/seo.js'

const DEFAULT_IMAGE = absoluteUrl('/images/foto-drone-equipa.jpg')

function setMetaTag(attr, key, content) {
  if (!content) return
  let el = document.head.querySelector(`meta[${attr}="${key}"]`)
  if (!el) {
    el = document.createElement('meta')
    el.setAttribute(attr, key)
    document.head.appendChild(el)
  }
  el.setAttribute('content', content)
}

function setCanonical(href) {
  let el = document.head.querySelector('link[rel="canonical"]')
  if (!el) {
    el = document.createElement('link')
    el.setAttribute('rel', 'canonical')
    document.head.appendChild(el)
  }
  el.setAttribute('href', href)
}

function setJsonLdList(items) {
  const baseId = 'page-jsonld'
  const list = items ? (Array.isArray(items) ? items : [items]) : []

  list.forEach((item, index) => {
    const id = `${baseId}-${index}`
    let el = document.getElementById(id)
    if (!el) {
      el = document.createElement('script')
      el.type = 'application/ld+json'
      el.id = id
      document.head.appendChild(el)
    }
    el.textContent = JSON.stringify(item)
  })

  let i = list.length
  let stale
  while ((stale = document.getElementById(`${baseId}-${i}`))) {
    stale.remove()
    i += 1
  }
}

function Seo({ title, description, path = '/', image, noindex = false, raw = false, jsonLd }) {
  useEffect(() => {
    const fullTitle = raw ? title : `${title} | ${SITE_NAME}`
    document.title = fullTitle

    const canonical = absoluteUrl(path)
    const ogImage = image ? absoluteUrl(image) : DEFAULT_IMAGE

    setMetaTag('name', 'description', description)
    setMetaTag('name', 'robots', noindex ? 'noindex, follow' : 'index, follow')
    setCanonical(canonical)

    setMetaTag('property', 'og:type', 'website')
    setMetaTag('property', 'og:site_name', SITE_NAME)
    setMetaTag('property', 'og:title', fullTitle)
    setMetaTag('property', 'og:description', description)
    setMetaTag('property', 'og:url', canonical)
    setMetaTag('property', 'og:image', ogImage)
    setMetaTag('property', 'og:locale', 'pt_AO')

    setMetaTag('name', 'twitter:card', 'summary_large_image')
    setMetaTag('name', 'twitter:title', fullTitle)
    setMetaTag('name', 'twitter:description', description)
    setMetaTag('name', 'twitter:image', ogImage)

    setJsonLdList(jsonLd)
  }, [title, description, path, image, noindex, raw, jsonLd])

  return null
}

export { SITE_URL, SITE_NAME }
export default Seo
