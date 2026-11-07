import { useMemo, useRef, useState } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import PageHeader from '../components/PageHeader.jsx'
import Seo from '../components/Seo.jsx'
import BlogCard from '../components/BlogCard.jsx'
import SocialEmbed from '../components/SocialEmbed.jsx'
import posts from '../data/posts.js'
import { useCollection } from '../hooks/useCollection.js'
import { useTexts } from '../hooks/useTexts.js'
import { fromPost } from '../lib/cms-maps.js'
import socialPosts from '../data/socialPosts.js'
import { breadcrumbJsonLd } from '../lib/seo.js'

const PAGE_SIZE = 8

// Lista de páginas a mostrar: sempre a primeira, a última e as vizinhas da actual; os
// intervalos omitidos aparecem como reticências (null).
function pageItems(current, total) {
  const pages = new Set([1, total, current - 1, current, current + 1])
  const sorted = [...pages].filter((n) => n >= 1 && n <= total).sort((a, b) => a - b)
  return sorted.flatMap((n, i) => (i > 0 && n - sorted[i - 1] > 1 ? [null, n] : [n]))
}

function Blog() {
  const t = useTexts()
  const { items: postList } = useCollection('posts', posts, { map: fromPost })
  const sortedPosts = useMemo(() => [...postList].sort((a, b) => new Date(b.date) - new Date(a.date)), [postList])
  const tags = useMemo(() => [...new Set(sortedPosts.flatMap((p) => p.tags || []))], [sortedPosts])
  const [tag, setTag] = useState('Todas')
  const [page, setPage] = useState(1)
  const topRef = useRef(null)
  const filtered = tag === 'Todas' ? sortedPosts : sortedPosts.filter((p) => p.tags?.includes(tag))
  const [lead, ...others] = filtered
  const totalPages = Math.max(1, Math.ceil(others.length / PAGE_SIZE))
  const current = Math.min(page, totalPages)
  const rest = others.slice((current - 1) * PAGE_SIZE, current * PAGE_SIZE)

  const selectTag = (name) => {
    setTag(name)
    setPage(1)
  }

  const goTo = (n) => {
    setPage(n)
    topRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  return (
    <>
      <Seo
        title="Blog"
        description="Artigos e novidades da Cassfrei-SIGT sobre Engenharia, Geologia, Cadastro Predial e Sistemas de Informação Geográfica em Angola."
        path="/blog"
        jsonLd={breadcrumbJsonLd([{ name: 'Início', path: '/' }, { name: 'Blog', path: '/blog' }])}
      />
      <PageHeader title="Blog" />

      <section className="news" ref={topRef}>
        <div className="container">
          {sortedPosts.length === 0 ? (
            <p className="news__empty">Ainda não há notícias publicadas. Volte em breve.</p>
          ) : (
            <>
              <div className="news__bar">
                <h2 className="news__heading">{t('blog.title', 'Últimas notícias')}</h2>
                {tags.length > 1 && (
                  <div className="news__filters" role="group" aria-label="Filtrar por categoria">
                    {['Todas', ...tags].map((t) => (
                      <button
                        key={t}
                        type="button"
                        className={`news__chip${tag === t ? ' is-active' : ''}`}
                        aria-pressed={tag === t}
                        onClick={() => selectTag(t)}
                      >
                        {t}
                      </button>
                    ))}
                  </div>
                )}
              </div>

              {current === 1 && <BlogCard post={lead} variant="lead" />}

              {rest.length > 0 && (
                <>
                  <h2 className="news__heading news__heading--sub">{t('blog.more', 'Mais notícias')}</h2>
                  <div className="news__list">
                    {rest.map((post) => (
                      <BlogCard post={post} variant="row" key={post.slug} />
                    ))}
                  </div>
                  {rest.length > 0 && (
                    <nav className="news-pager" aria-label="Paginação das notícias">
                      <button type="button" className="news-pager__btn" disabled={current === 1} onClick={() => goTo(current - 1)} aria-label="Página anterior">
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
                            onClick={() => goTo(n)}
                          >
                            {n}
                          </button>
                        ),
                      )}
                      <button type="button" className="news-pager__btn" disabled={current === totalPages} onClick={() => goTo(current + 1)} aria-label="Página seguinte">
                        <ChevronRight size={18} />
                      </button>
                    </nav>
                  )}
                </>
              )}
            </>
          )}
        </div>
      </section>

      {socialPosts.length > 0 && (
        <section className="news news--social">
          <div className="container">
            <div className="news__bar">
              <h2 className="news__heading">{t('blog.social', 'Nas redes sociais')}</h2>
            </div>
            <div className="row justify-content-center">
              {socialPosts.map((post) => (
                <div className="col-md-6 col-lg-4 mb-4" key={post.url}>
                  <SocialEmbed post={post} />
                </div>
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  )
}

export default Blog
