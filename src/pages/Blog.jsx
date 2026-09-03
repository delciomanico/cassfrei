import PageHeader from '../components/PageHeader.jsx'
import BlogCard from '../components/BlogCard.jsx'
import posts from '../data/posts.js'

function Blog() {
  return (
    <>
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
    </>
  )
}

export default Blog
