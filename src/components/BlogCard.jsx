import { Link } from 'react-router-dom'
import { Clock, ArrowRight } from 'lucide-react'
import { readingTime } from '../lib/posts.js'

const monthsPt = ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun', 'Jul', 'Ago', 'Set', 'Out', 'Nov', 'Dez']

function formatShortDate(iso) {
  const date = new Date(iso)
  return `${date.getDate()} ${monthsPt[date.getMonth()]} ${date.getFullYear()}`
}

// Notícia: "lead" é a manchete (foto grande + título grande), "row" é uma linha compacta
// da lista "Mais notícias" (miniatura + título).
function BlogCard({ post, variant = 'row' }) {
  const href = `/blog/${post.slug}`
  const tag = post.tags?.[0]

  return (
    <article className={`news-item news-item--${variant}`} data-aos="fade-up">
      <Link to={href} className="news-item__media" tabIndex={-1} aria-hidden="true">
        <img src={post.image} alt="" loading={variant === 'lead' ? 'eager' : 'lazy'} />
      </Link>
      <div className="news-item__body">
        <div className="news-item__meta">
          {tag && <span className="news-item__tag">{tag}</span>}
          <time dateTime={post.date}>{formatShortDate(post.date)}</time>
          <span className="news-item__read"><Clock size={13} /> {readingTime(post.body)} min</span>
        </div>
        <h3 className="news-item__title">
          <Link to={href}>{post.title}</Link>
        </h3>
        {variant === 'lead' && <p className="news-item__excerpt">{post.excerpt}</p>}
        {variant === 'lead' && (
          <Link to={href} className="news-item__cta">Ler notícia <ArrowRight size={16} /></Link>
        )}
      </div>
    </article>
  )
}

export default BlogCard
