import { useEffect, useRef } from 'react'
import { X, ChevronLeft, ChevronRight } from 'lucide-react'

function GalleryLightbox({ items, index, onClose, onPrev, onNext }) {
  const containerRef = useRef(null)
  const closeButtonRef = useRef(null)

  useEffect(() => {
    const previouslyFocused = document.activeElement
    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    closeButtonRef.current?.focus()

    function handleKeyDown(event) {
      if (event.key === 'Escape') onClose()
      if (event.key === 'ArrowLeft') onPrev()
      if (event.key === 'ArrowRight') onNext()

      if (event.key === 'Tab') {
        const focusable = containerRef.current?.querySelectorAll('button')
        if (!focusable || focusable.length === 0) return
        const first = focusable[0]
        const last = focusable[focusable.length - 1]
        if (event.shiftKey && document.activeElement === first) {
          event.preventDefault()
          last.focus()
        } else if (!event.shiftKey && document.activeElement === last) {
          event.preventDefault()
          first.focus()
        }
      }
    }

    document.addEventListener('keydown', handleKeyDown)
    return () => {
      document.removeEventListener('keydown', handleKeyDown)
      document.body.style.overflow = previousOverflow
      previouslyFocused?.focus?.()
    }
  }, [onClose, onPrev, onNext])

  const item = items[index]
  if (!item) return null

  return (
    <div
      className="lightbox-overlay"
      role="dialog"
      aria-modal="true"
      aria-label={item.caption || 'Foto ampliada'}
      ref={containerRef}
      onClick={onClose}
    >
      <button ref={closeButtonRef} type="button" className="lightbox-close" aria-label="Fechar" onClick={onClose}>
        <X size={20} />
      </button>

      <button
        type="button"
        className="lightbox-nav lightbox-nav--prev"
        aria-label="Foto anterior"
        onClick={(event) => {
          event.stopPropagation()
          onPrev()
        }}
      >
        <ChevronLeft size={20} />
      </button>

      <figure className="lightbox-content" onClick={(event) => event.stopPropagation()}>
        <img src={item.src} alt={item.caption} />
        {item.caption && <figcaption>{item.caption}</figcaption>}
      </figure>

      <button
        type="button"
        className="lightbox-nav lightbox-nav--next"
        aria-label="Foto seguinte"
        onClick={(event) => {
          event.stopPropagation()
          onNext()
        }}
      >
        <ChevronRight size={20} />
      </button>
    </div>
  )
}

export default GalleryLightbox
