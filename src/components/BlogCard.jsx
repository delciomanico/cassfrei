import { Link } from 'react-router-dom'
import { Calendar, Clock, ArrowRight } from 'lucide-react'
import { readingTime } from '../lib/posts.js'

const monthsPt = ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun', 'Jul', 'Ago', 'Set', 'Out', 'Nov', 'Dez']

function formatShortDate(iso) {
  const date = new Date(iso)
  return `${date.getDate()} ${monthsPt[date.getMonth()]} ${date.getFullYear()}`
}

function BlogCard({ post }) {
  return (
    <article className="blog-entry" data-aos="fade-up">
      <div className="blog-entry__media" style={{ backgroundImage: `url('${post.image}')` }}>
        <Link to={`/blog/${post.slug}`} className="blog-entry__media-link" aria-hidden="true" tabIndex={-1} />
        {post.tags?.[0] && <span className="blog-entry__tag">{post.tags[0]}</span>}
      </div>
      <div className="blog-entry__body">
        <div className="blog-entry__meta">
          <span><Calendar size={14} /> {formatShortDate(post.date)}</span>
          <span><Clock size={14} /> {readingTime(post.body)} min</span>
        </div>
        <h3 className="blog-entry__title">
          <Link to={`/blog/${post.slug}`}>{post.title}</Link>
        </h3>
        <p className="blog-entry__excerpt">{post.excerpt}</p>
        <Link to={`/blog/${post.slug}`} className="blog-entry__cta">
          Ler mais <ArrowRight size={15} />
        </Link>
      </div>
    </article>
  )
}

export default BlogCard
