import { useEffect, useMemo, useState } from 'react'
import { Link } from 'react-router-dom'
import { ArrowUpRight } from 'lucide-react'
import Seo from '../components/Seo.jsx'
import ProjectCard from '../components/ProjectCard.jsx'
import ValuesSection from '../components/ValuesSection.jsx'
import FieldImpact from '../components/FieldImpact.jsx'
import GalleryLightbox from '../components/GalleryLightbox.jsx'
import MediaTile from '../components/MediaTile.jsx'
import galeria from '../data/galeria.js'
import projects from '../data/projects.js'
import { useCollection } from '../hooks/useCollection.js'
import { useServices } from '../hooks/useServices.js'
import { useTexts } from '../hooks/useTexts.js'
import { fromHeroSlide, fromMedia, fromProject } from '../lib/cms-maps.js'

// Conteúdo por omissão (fallback) — o CMS (Dynamix) substitui-o quando tem conteúdo publicado.
const fallbackHeroSlides = [
  {
    image: '/images/foto-drone-equipa.jpg',
    kicker: 'Bem-vindo à Cassfrei-SIGT',
    title: 'O Território, A Solução',
    text: 'Organizações ambiciosas em Angola confiam na Cassfrei-SIGT para apoiar decisões mais sustentáveis sobre cadastro, cartografia e gestão do território.',
  },
  {
    image: '/images/foto-apresentacao-cadastro.jpg',
    kicker: 'Cadastro e Cartografia',
    title: 'Rigor técnico no terreno',
    text: 'Cadastro predial, topografia e cartografia geológica executados com precisão, para dar segurança a cada decisão sobre o território.',
  },
  {
    image: '/images/foto-seminario-toponimia.jpg',
    kicker: 'Sistemas de Informação Geográfica',
    title: 'Dados que orientam o futuro',
    text: 'Planeamento urbano e gestão territorial apoiados em SIG, ao lado de instituições públicas e privadas em Angola.',
  },
]

const HERO_INTERVAL = 7000

// Montra "Em Acção": um item em destaque (marcado com "destaque", senão o primeiro vídeo,
// senão a primeira foto) e mais quatro à direita.
function pickShowcase(items) {
  const featured = items.find((i) => i.destaque) || items.find((i) => i.tipo === 'video') || items[0]
  return [featured, ...items.filter((i) => i !== featured).slice(0, 4)]
}

function Home() {
  const [slide, setSlide] = useState({ current: 0, prev: null })
  const [mediaIndex, setMediaIndex] = useState(null)
  const t = useTexts()
  const { items: heroSlides } = useCollection('hero-slides', fallbackHeroSlides, { map: fromHeroSlide })
  const { items: gallery } = useCollection('gallery', galeria, { map: fromMedia })
  const { items: projectList } = useCollection('projects', projects, { map: fromProject })
  const { consultoria, estudos } = useServices()
  // Se o CMS trocar a lista de slides, o índice guardado pode já não existir: normaliza-se.
  const currentSlide = slide.current % heroSlides.length
  const prevSlide = slide.prev !== null && slide.prev < heroSlides.length ? slide.prev : null
  const homeServices = [...consultoria.slice(0, 2), ...estudos.slice(0, 4)]
  const showcaseItems = useMemo(() => pickShowcase(gallery), [gallery])

  // Avança sozinho para o slide seguinte; guarda o anterior ("prev") para ficar por baixo
  // enquanto o novo entra pela direita.
  useEffect(() => {
    if (heroSlides.length < 2 || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return undefined
    const id = setInterval(() => {
      setSlide((s) => ({ current: (s.current + 1) % heroSlides.length, prev: s.current }))
    }, HERO_INTERVAL)
    return () => clearInterval(id)
  }, [heroSlides])

  return (
    <>
      <Seo
        raw
        title="Cassfrei-SIGT, Lda — Engenharia, Geologia, Cadastro Predial e SIG | Luanda, Angola"
        description="Consultoria em Engenharia, Geologia e Arquitectura: Cadastro Predial, Cartografia, Planeamento Urbano e SIG em Luanda, Angola."
        path="/"
      />
      <section className="hero-glass">
        {heroSlides.map((item, i) => {
          const state = i === currentSlide ? 'is-active' : i === prevSlide ? 'is-leaving' : ''
          return (
            <div key={item.title} className={`hero-glass__slide ${state}`} aria-hidden={i !== currentSlide}>
              <div className="hero-glass__bg" style={{ backgroundImage: `url(${item.image})` }} aria-hidden="true"></div>
              <div className="hero-glass__overlay" aria-hidden="true"></div>
              <div className="container hero-glass__container">
                <div className="hero-glass__content">
                  <span className="hero-glass__kicker">{item.kicker}</span>
                  {i === 0 ? <h1 className="hero-glass__title">{item.title}</h1> : <h2 className="hero-glass__title">{item.title}</h2>}
                  <p className="hero-glass__text">{item.text}</p>
                </div>
              </div>
            </div>
          )
        })}
      </section>

      <section className="about-home">
        <div className="container">
          <div className="about-home__grid">
            <div className="about-home__copy" data-aos="fade-up">
              <span className="about-home__kicker">{t('home.about.kicker', 'Quem somos')}</span>
              <h2 className="about-home__title">{t('home.about.title', 'Sobre Nós')}</h2>
              <p>
                {t('home.about.p1', 'A CASSFREI – Sistemas de Informação e Gestão Territorial, Lda é uma empresa de consultoria e prestação de serviços, formada com capitais exclusivamente angolanos, criada para a execução técnica de trabalhos de Cartografia, Gestão do Território, Planeamento Urbano, Cadastro Predial, Topografia e SIG.')}
              </p>
              <p>
                {t('home.about.p2', 'Trabalhamos lado a lado com instituições públicas e privadas em Angola, com rigor técnico e soluções sustentáveis, adaptadas à realidade do território nacional.')}
              </p>
              <Link to="/sobre" className="btn btn-primary px-4 py-3">{t('home.about.cta', 'Saber mais')}</Link>
            </div>
            <img className="about-home__img" data-aos="fade-up" src={t('home.about.image', '/images/foto-reuniao-sala.jpg')} alt="Reunião de trabalho da equipa da Cassfrei-SIGT" loading="lazy" />
          </div>
        </div>
      </section>

      <ValuesSection />

      <FieldImpact
        kicker={t('home.impact.kicker', 'Resultados no terreno')}
        title={t('home.impact.title', 'Rigor Técnico no Terreno, em Todo o Território')}
        text={t('home.impact.text', 'Do levantamento topográfico ao cadastro e à cartografia, cada projecto é executado com método, equipamento adequado e uma equipa que conhece o território.')}
        image={t('home.impact.image', '/images/foto-drone-equipa.jpg')}
        alt="Equipa da Cassfrei-SIGT em trabalho de campo com drone"
        cta={{ to: '/projectos', label: t('home.impact.cta', 'Ver Projectos de Referência') }}
      />

      <section className="what-we-do">
        <div className="container">
          <div className="what-we-do__head">
            <div className="what-we-do__intro" data-aos="fade-up">
              <span className="what-we-do__kicker">{t('home.services.kicker', 'Serviços')}</span>
              <h2 className="what-we-do__title">{t('home.services.title', 'O Que Fazemos')}</h2>
              <p className="what-we-do__lead">
                {t('home.services.lead', 'Consultoria e prestação de serviços nas áreas de Cadastro, Cartografia, Planeamento Urbano e Sistemas de Informação Geográfica, a nível público e privado.')}
              </p>
            </div>
            <Link to="/o-que-fazemos" className="btn btn-primary px-4 py-3 what-we-do__cta" data-aos="fade-up">
              {t('home.services.cta', 'Ver Todos os Serviços')} <ArrowUpRight size={18} className="ml-2" />
            </Link>
          </div>
          <div className="what-we-do__grid">
            {homeServices.map(({ icon: Icon, title, text }, i) => (
              <Link to="/o-que-fazemos" className="service-tile" key={title} data-aos="fade-up" data-aos-delay={(i % 3) * 80}>
                <Icon className="service-tile__icon" size={28} strokeWidth={1.6} aria-hidden="true" />
                <h3 className="service-tile__title">{title}</h3>
                <p className="service-tile__text">{text}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="showcase">
        <div className="container">
          <div className="showcase__head" data-aos="fade-up">
            <div>
              <span className="showcase__kicker">{t('home.showcase.kicker', 'Em acção')}</span>
              <h2 className="showcase__title">{t('home.showcase.title', 'O nosso trabalho em fotos e vídeos')}</h2>
            </div>
            <Link to="/galeria" className="btn btn-outline-primary px-4 py-3 showcase__cta">
              {t('home.showcase.cta', 'Ver galeria completa')} <ArrowUpRight size={18} className="ml-2" />
            </Link>
          </div>
          <div className="showcase__grid">
            {showcaseItems.map((item, i) => (
              <MediaTile
                key={item.src || item.youtube || item.file}
                item={item}
                className={i === 0 ? 'media-tile--feature' : ''}
                onOpen={() => setMediaIndex(i)}
              />
            ))}
          </div>
        </div>
      </section>

      {mediaIndex !== null && (
        <GalleryLightbox
          items={showcaseItems}
          index={mediaIndex}
          onClose={() => setMediaIndex(null)}
          onPrev={() => setMediaIndex((n) => (n - 1 + showcaseItems.length) % showcaseItems.length)}
          onNext={() => setMediaIndex((n) => (n + 1) % showcaseItems.length)}
        />
      )}

      <section className="ftco-intro ftco-no-pb img" style={{ backgroundImage: 'url(/images/foto-apresentacao-cadastro.jpg)' }}>
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-9 col-md-8 d-flex align-items-center heading-section heading-section-white">
              <h2 className="mb-3 mb-md-0">{t('home.cta.title', 'Soluções Híbridas e Sustentáveis para o Território')}</h2>
            </div>
            <div className="col-lg-3 col-md-4">
              <p className="mb-0"><Link to="/contactos" className="btn btn-white py-3 px-4">{t('home.cta.button', 'Pedir Orçamento')}</Link></p>
            </div>
          </div>
        </div>
      </section>

      <section className="ftco-section ftco-no-pb">
        <div className="container-fluid px-0">
          <div className="row no-gutters justify-content-center mb-5">
            <div className="col-md-7 text-center heading-section">
              <h2 className="mb-4">{t('home.projects.title', 'Projectos de Referência')}</h2>
              <p>{t('home.projects.lead', 'Alguns dos trabalhos que desenvolvemos com instituições públicas e privadas em Angola.')}</p>
            </div>
          </div>
          <div className="row no-gutters">
            {projectList.map((project) => (
              <div className="col-md-3" key={project.slug}>
                <ProjectCard project={project} />
              </div>
            ))}
          </div>
          <div className="row no-gutters justify-content-center mt-4 mb-5">
            <Link to="/projectos" className="btn btn-primary px-4 py-2">{t('home.projects.cta', 'Ver Todos os Projectos')}</Link>
          </div>
        </div>
      </section>
    </>
  )
}

export default Home
