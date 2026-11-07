import { useMemo, useState } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import PageHeader from '../components/PageHeader.jsx'
import Seo from '../components/Seo.jsx'
import GalleryLightbox from '../components/GalleryLightbox.jsx'
import MediaTile from '../components/MediaTile.jsx'
import galeria from '../data/galeria.js'
import { useCollection } from '../hooks/useCollection.js'
import { useTexts } from '../hooks/useTexts.js'
import { fromMedia } from '../lib/cms-maps.js'
import { breadcrumbJsonLd } from '../lib/seo.js'

const PAGE_SIZE = 9

// Páginas a mostrar: primeira, última e vizinhas da actual; intervalos omitidos = null (…).
function pageItems(current, total) {
  const sorted = [...new Set([1, total, current - 1, current, current + 1])]
    .filter((n) => n >= 1 && n <= total)
    .sort((a, b) => a - b)
  return sorted.flatMap((n, i) => (i > 0 && n - sorted[i - 1] > 1 ? [null, n] : [n]))
}

function Galeria() {
  const t = useTexts()
  const { items: media } = useCollection('gallery', galeria, { map: fromMedia })
  const categories = useMemo(() => [...new Set(media.map((item) => item.categoria).filter(Boolean))], [media])
  const [activeIndex, setActiveIndex] = useState(null)
  const [category, setCategory] = useState('Todas')
  const [page, setPage] = useState(1)

  const filtered = category === 'Todas' ? media : media.filter((i) => i.categoria === category)
  const totalPages = Math.max(1, Math.ceil(filtered.length / PAGE_SIZE))
  const current = Math.min(page, totalPages)
  const start = (current - 1) * PAGE_SIZE
  const visible = filtered.slice(start, start + PAGE_SIZE)

  const selectCategory = (c) => {
    setCategory(c)
    setPage(1)
  }

  const closeLightbox = () => setActiveIndex(null)
  const showPrev = () => setActiveIndex((index) => (index - 1 + filtered.length) % filtered.length)
  const showNext = () => setActiveIndex((index) => (index + 1) % filtered.length)

  return (
    <>
      <Seo
        title="Galeria"
        description="Galeria de fotos e vídeos da Cassfrei-SIGT: equipa em levantamentos de terreno, seminários e reuniões institucionais em Luanda, Angola."
        path="/galeria"
        jsonLd={breadcrumbJsonLd([{ name: 'Início', path: '/' }, { name: 'Galeria', path: '/galeria' }])}
      />
      <PageHeader title="Galeria" />

      <section className="media-page">
        <div className="container">
          <div className="media-page__bar">
            <h2 className="media-page__heading">{t('galeria.title', 'Fotos e vídeos')}</h2>
            {categories.length > 1 && (
              <div className="media-page__filters" role="group" aria-label="Filtrar por categoria">
                {['Todas', ...categories].map((c) => (
                  <button
                    key={c}
                    type="button"
                    className={`media-page__chip${category === c ? ' is-active' : ''}`}
                    aria-pressed={category === c}
                    onClick={() => selectCategory(c)}
                  >
                    {c}
                  </button>
                ))}
              </div>
            )}
          </div>

          <div className="media-page__grid">
            {visible.map((item, i) => (
              <MediaTile key={item.src || item.youtube || item.file} item={item} onOpen={() => setActiveIndex(start + i)} />
            ))}
          </div>

          {totalPages > 1 && (
            <nav className="news-pager" aria-label="Paginação da galeria">
              <button type="button" className="news-pager__btn" disabled={current === 1} onClick={() => setPage(current - 1)} aria-label="Página anterior">
                <ChevronLeft size={18} />
              </button>
              {pageItems(current, totalPages).map((n, i) =>
                n === null ? (
                  <span key={`gap-${i}`} className="news-pager__gap">…</span>
                ) : (
                  <button
                    key={n}
                    type="button"
                    className={`news-pager__btn${n === current ? ' is-active' : ''}`}
                    aria-current={n === current ? 'page' : undefined}
                    onClick={() => setPage(n)}
                  >
                    {n}
                  </button>
                ),
              )}
              <button type="button" className="news-pager__btn" disabled={current === totalPages} onClick={() => setPage(current + 1)} aria-label="Página seguinte">
                <ChevronRight size={18} />
              </button>
            </nav>
          )}
        </div>
      </section>

      {activeIndex !== null && (
        <GalleryLightbox items={filtered} index={activeIndex} onClose={closeLightbox} onPrev={showPrev} onNext={showNext} />
      )}
    </>
  )
}

export default Galeria
