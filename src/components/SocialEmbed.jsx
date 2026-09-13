import { useEffect } from 'react'

const INSTAGRAM_SCRIPT_SRC = 'https://www.instagram.com/embed.js'

// Carrega o script oficial de embeds da Instagram uma única vez (é ele que transforma o
// <blockquote> abaixo no cartão rico do post) e pede-lhe para processar embeds sempre que a
// lista de posts mudar — sem isto, blockquotes adicionados depois do primeiro carregamento
// ficam por converter.
function useInstagramEmbeds(dependency) {
  useEffect(() => {
    function process() {
      window.instgrm?.Embeds?.process()
    }

    const existing = document.querySelector(`script[src="${INSTAGRAM_SCRIPT_SRC}"]`)
    if (existing) {
      process()
      return
    }

    const script = document.createElement('script')
    script.src = INSTAGRAM_SCRIPT_SRC
    script.async = true
    script.onload = process
    document.body.appendChild(script)
  }, [dependency])
}

function InstagramEmbed({ url, caption }) {
  return (
    <blockquote
      className="instagram-media"
      data-instgrm-permalink={url}
      data-instgrm-version="14"
      style={{ background: '#fff', border: 0, borderRadius: 4, margin: '0 auto', maxWidth: 540, width: '100%' }}
    >
      <a href={url} target="_blank" rel="noreferrer">{caption || 'Ver publicação no Instagram'}</a>
    </blockquote>
  )
}

function FacebookEmbed({ url, caption }) {
  const src = `https://www.facebook.com/plugins/post.php?href=${encodeURIComponent(url)}&show_text=true&width=500`

  return (
    <div className="social-embed-facebook">
      <iframe
        src={src}
        title={caption || 'Publicação no Facebook'}
        width="500"
        height="600"
        style={{ border: 'none', overflow: 'hidden', maxWidth: '100%' }}
        scrolling="no"
        frameBorder="0"
        allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
      ></iframe>
    </div>
  )
}

function SocialEmbed({ post }) {
  useInstagramEmbeds(post.url)

  return (
    <div className="social-embed-card" data-aos="fade-up">
      {post.platform === 'instagram' ? (
        <InstagramEmbed url={post.url} caption={post.caption} />
      ) : (
        <FacebookEmbed url={post.url} caption={post.caption} />
      )}
    </div>
  )
}

export default SocialEmbed
