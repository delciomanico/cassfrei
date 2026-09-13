import PageHeader from '../components/PageHeader.jsx'
import Seo from '../components/Seo.jsx'
import BlogCard from '../components/BlogCard.jsx'
import SocialEmbed from '../components/SocialEmbed.jsx'
import posts from '../data/posts.js'
import socialPosts from '../data/socialPosts.js'
import { breadcrumbJsonLd } from '../lib/seo.js'

function Blog() {
  return (
    <>
      <Seo
        title="Blog"
        description="Artigos e novidades da Cassfrei-SIGT sobre Engenharia, Geologia, Cadastro Predial e Sistemas de Informação Geográfica em Angola."
        path="/blog"
        jsonLd={breadcrumbJsonLd([{ name: 'Início', path: '/' }, { name: 'Blog', path: '/blog' }])}
      />
      <PageHeader title="Blog" />

      <section className="ftco-section bg-light">
        <div className="container">
          {posts.length === 0 ? (
            <div className="row justify-content-center">
              <div className="col-md-8 text-center">
                <p>Ainda não há artigos publicados. Volte em breve.</p>
              </div>
            </div>
          ) : (
            <div className="row">
              {posts.map((post) => (
                <div className="col-md-6 col-lg-4" key={post.slug}>
                  <BlogCard post={post} />
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {socialPosts.length > 0 && (
        <section className="ftco-section">
          <div className="container">
            <div className="row justify-content-center mb-5 pb-2">
              <div className="col-md-8 text-center heading-section">
                <h2 className="mb-4">Também no Instagram e Facebook</h2>
                <p>As últimas publicações das nossas redes sociais.</p>
              </div>
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
