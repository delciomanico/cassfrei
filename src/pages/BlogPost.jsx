import { Link, useParams } from 'react-router-dom'
import PageHeader from '../components/PageHeader.jsx'
import posts from '../data/posts.js'

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

  return (
    <>
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
