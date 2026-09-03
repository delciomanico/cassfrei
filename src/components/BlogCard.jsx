import { Link } from 'react-router-dom'

const monthsPt = ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun', 'Jul', 'Ago', 'Set', 'Out', 'Nov', 'Dez']

function BlogCard({ post }) {
  const date = new Date(post.date)
  const day = date.getDate()
  const month = monthsPt[date.getMonth()]
  const year = date.getFullYear()

  return (
    <div className="blog-entry" data-aos="fade-up">
      <Link to={`/blog/${post.slug}`} className="block-20 d-flex align-items-end" style={{ backgroundImage: `url('${post.image}')` }}>
        <div className="meta-date text-center p-2">
          <span className="day">{day}</span>
          <span className="mos">{month}</span>
          <span className="yr">{year}</span>
        </div>
      </Link>
      <div className="text bg-white p-4">
        <h3 className="heading"><Link to={`/blog/${post.slug}`}>{post.title}</Link></h3>
        <p>{post.excerpt}</p>
        <div className="d-flex align-items-center mt-4">
          <p className="mb-0">
            <Link to={`/blog/${post.slug}`} className="btn btn-primary">Ler Mais <span className="ion-ios-arrow-round-forward"></span></Link>
          </p>
        </div>
      </div>
    </div>
  )
}

export default BlogCard
