import { useState } from 'react'
import { Search } from 'lucide-react'
import PageHeader from '../components/PageHeader.jsx'
import Seo from '../components/Seo.jsx'
import GalleryLightbox from '../components/GalleryLightbox.jsx'
import galeria from '../data/galeria.js'
import { breadcrumbJsonLd } from '../lib/seo.js'

function Galeria() {
  const [activeIndex, setActiveIndex] = useState(null)

  const closeLightbox = () => setActiveIndex(null)
  const showPrev = () => setActiveIndex((index) => (index - 1 + galeria.length) % galeria.length)
  const showNext = () => setActiveIndex((index) => (index + 1) % galeria.length)

  return (
    <>
      <Seo
        title="Galeria"
        description="Galeria de fotos da Cassfrei-SIGT: equipa em levantamentos de terreno, seminários e reuniões institucionais em Luanda, Angola."
        path="/galeria"
        jsonLd={breadcrumbJsonLd([{ name: 'Início', path: '/' }, { name: 'Galeria', path: '/galeria' }])}
      />
      <PageHeader title="Galeria" />

      <section className="ftco-section ftco-no-pb">
        <div className="container-fluid px-0">
          <div className="row no-gutters justify-content-center mb-5">
            <div className="col-md-7 text-center heading-section">
              <h2 className="mb-4">Fotos</h2>
              <p>Alguns momentos do nosso trabalho no terreno e em eventos institucionais.</p>
            </div>
          </div>
          <div className="row no-gutters">
            {galeria.map((item, index) => (
              <div className="col-md-4 col-6" key={item.src}>
                <div
                  className="gallery img d-flex justify-content-center align-items-center"
                  style={{ backgroundImage: `url(${item.src})` }}
                  role="button"
                  tabIndex={0}
                  onClick={() => setActiveIndex(index)}
                  onKeyDown={(event) => {
                    if (event.key === 'Enter' || event.key === ' ') setActiveIndex(index)
                  }}
                >
                  <div className="icon d-flex align-items-center justify-content-center">
                    <Search size={20} color="#fff" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {activeIndex !== null && (
        <GalleryLightbox
          items={galeria}
          index={activeIndex}
          onClose={closeLightbox}
          onPrev={showPrev}
          onNext={showNext}
        />
      )}
    </>
  )
}

export default Galeria
