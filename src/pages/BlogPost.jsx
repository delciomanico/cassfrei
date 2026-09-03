import { Link, useParams } from 'react-router-dom'
import PageHeader from '../components/PageHeader.jsx'
import Seo from '../components/Seo.jsx'
import posts from '../data/posts.js'
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
              <p className="text-muted mb-4">{formatDate(post.date)}</p>

              <p>
                <img src={post.image} alt={post.title} className="img-fluid" />
              </p>

              {post.body.map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}

              <p className="mt-5">
                <Link to="/blog" className="btn btn-outline-primary px-4 py-2">Voltar ao Blog</Link>
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default BlogPost
