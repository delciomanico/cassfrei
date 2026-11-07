import { Play } from 'lucide-react'
import { isVideo, mediaThumb } from '../lib/media.js'

// Miniatura clicável de uma foto ou vídeo; os vídeos mostram um botão de play.
function MediaTile({ item, onOpen, className = '' }) {
  return (
    <button
      type="button"
      className={`media-tile ${className}`.trim()}
      onClick={onOpen}
      aria-label={`${isVideo(item) ? 'Ver vídeo' : 'Ampliar foto'}: ${item.caption}`}
    >
      <img src={mediaThumb(item)} alt="" loading="lazy" />
      {isVideo(item) && (
        <span className="media-tile__play" aria-hidden="true"><Play size={22} fill="currentColor" /></span>
      )}
      <span className="media-tile__caption">
        {item.categoria && <small>{item.categoria}</small>}
        {item.caption}
      </span>
    </button>
  )
}

export default MediaTile
