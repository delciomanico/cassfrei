import { useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { Calendar, Clock } from 'lucide-react'
import PageHeader from '../components/PageHeader.jsx'
import Seo from '../components/Seo.jsx'
import GalleryLightbox from '../components/GalleryLightbox.jsx'
import posts from '../data/posts.js'
import { readingTime } from '../lib/posts.js'
import { breadcrumbJsonLd, absoluteUrl, SITE_NAME } from '../lib/seo.js'

const monthsPt = [
  'janeiro', 'fevereiro', 'março', 'abril', 'maio', 'junho',
  'julho', 'agosto', 'setembro', 'outubro', 'novembro', 'dezembro',
]

function formatDate(iso) {
  const date = new Date(iso)
  return `${date.getDate()} de ${monthsPt[date.getMonth()]} de ${date.getFullYear()}`
}

function BlogPost() {
  const { slug } = useParams()
  const post = posts.find((item) => item.slug === slug)
  const [activeIndex, setActiveIndex] = useState(null)

  if (!post) {
    return (
      <>
        <Seo title="Artigo Não Encontrado" description="Não encontrámos o artigo que procura." path={`/blog/${slug || ''}`} noindex />
        <PageHeader title="Artigo não encontrado" />
        <section className="ftco-section">
          <div className="container text-center">
            <p>Não encontrámos o artigo que procura.</p>
            <Link to="/blog" className="btn btn-primary">Voltar ao Blog</Link>
          </div>
        </section>
      </>
    )
  }

  const gallery = post.gallery || []
  const closeLightbox = () => setActiveIndex(null)
  const showPrev = () => setActiveIndex((index) => (index - 1 + gallery.length) % gallery.length)
  const showNext = () => setActiveIndex((index) => (index + 1) % gallery.length)

  const articleJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: post.title,
    description: post.excerpt,
    image: absoluteUrl(post.image),
    datePublished: post.date,
    author: { '@type': 'Organization', name: SITE_NAME },
    publisher: { '@type': 'Organization', name: SITE_NAME },
    mainEntityOfPage: absoluteUrl(`/blog/${post.slug}`),
  }

  return (
    <>
      <Seo
        title={post.title}
        description={post.excerpt}
        path={`/blog/${post.slug}`}
        image={post.image}
        jsonLd={[
          breadcrumbJsonLd([
            { name: 'Início', path: '/' },
            { name: 'Blog', path: '/blog' },
            { name: post.title, path: `/blog/${post.slug}` },
          ]),
          articleJsonLd,
        ]}
      />
      <PageHeader title={post.title} />

      <section className="ftco-section">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8">
              <div className="post-cover" style={{ backgroundImage: `url('${post.image}')` }}></div>

              <div className="post-meta">
                <span className="post-meta__item"><Calendar size={15} /> {formatDate(post.date)}</span>
                <span className="post-meta__item"><Clock size={15} /> {readingTime(post.body)} min de leitura</span>
              </div>

              {post.tags?.length > 0 && (
                <div className="post-tags">
                  {post.tags.map((tag) => (
                    <span className="post-tags__pill" key={tag}>{tag}</span>
                  ))}
                </div>
              )}

              <div className="post-content">
                {post.body.map((paragraph, index) => (
                  paragraph.startsWith('## ')
                    ? <h3 key={index}>{paragraph.slice(3)}</h3>
                    : <p key={index}>{paragraph}</p>
                ))}
              </div>

              {gallery.length > 0 && (
                <div className="post-gallery">
                  {gallery.map((item, index) => (
                    <button
                      type="button"
                      key={item.src}
                      className="post-gallery__item"
                      style={{ backgroundImage: `url(${item.src})` }}
                      aria-label={item.caption || 'Ver foto ampliada'}
                      onClick={() => setActiveIndex(index)}
                    />
                  ))}
                </div>
              )}

              <p className="mt-5">
                <Link to="/blog" className="btn btn-outline-primary px-4 py-2">Voltar ao Blog</Link>
              </p>
            </div>
          </div>
        </div>
      </section>

      {activeIndex !== null && (
        <GalleryLightbox
          items={gallery}
          index={activeIndex}
          onClose={closeLightbox}
          onPrev={showPrev}
          onNext={showNext}
        />
      )}
    </>
  )
}

export default BlogPost
