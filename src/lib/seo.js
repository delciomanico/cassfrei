export const SITE_URL = 'https://cassfrei.com'
export const SITE_NAME = 'Cassfrei-SIGT, Lda'

export function absoluteUrl(path = '/') {
  return `${SITE_URL}${path}`
}

export function breadcrumbJsonLd(items) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: absoluteUrl(item.path),
    })),
  }
}
