import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Seo from '../components/Seo.jsx'
import ValueCard from '../components/ValueCard.jsx'
import ServiceCard from '../components/ServiceCard.jsx'
import ProjectCard from '../components/ProjectCard.jsx'
import Counter from '../components/Counter.jsx'
import values from '../data/values.js'
import { consultoriaServices, estudosServices } from '../data/services.js'
import projects from '../data/projects.js'

const slides = [
  {
    image: '/images/foto-drone-equipa.jpg',
    subheading: 'Bem-vindo à Cassfrei-SIGT',
    heading: 'Sistemas de Informação e Gestão Territorial',
  },
  {
    image: '/images/foto-seminario-toponimia.jpg',
    subheading: 'Consultoria em Engenharia, Geologia e Arquitectura',
    heading: 'Tranquilidade e Agilidade em Cada Projecto',
  },
]

const homeServices = [...consultoriaServices.slice(0, 2), ...estudosServices.slice(0, 4)]

function Home() {
  const [current, setCurrent] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((index) => (index + 1) % slides.length)
    }, 6000)
    return () => clearInterval(timer)
  }, [])

  const yearsActive = new Date().getFullYear() - 2013

  const goToSlide = (offset) => {
    setCurrent((index) => (index + offset + slides.length) % slides.length)
  }

  return (
    <>
      <Seo
        raw
        title="Cassfrei-SIGT, Lda — Engenharia, Geologia, Cadastro Predial e SIG | Luanda, Angola"
        description="Cassfrei-SIGT, Lda é uma empresa angolana de consultoria em Engenharia, Geologia e Arquitectura, especialista em Cadastro Predial, Cartografia, Planeamento Urbano e Sistemas de Informação Geográfica (SIG) em Luanda, Angola."
        path="/"
      />
      <section className="home-slider">
        <div className="slider-track" style={{ transform: `translateX(-${current * 100}%)` }}>
          {slides.map((slide) => (
            <div className="slider-item" key={slide.image} style={{ backgroundImage: `url(${slide.image})` }}>
              <div className="overlay"></div>
              <div className="container">
                <div className="row no-gutters slider-text align-items-center justify-content-start">
                  <div className="col-md-8">
                    <span className="subheading">{slide.subheading}</span>
                    <h1 className="mb-4">{slide.heading}</h1>
                    <p>
                      <Link to="/o-que-fazemos" className="btn btn-primary px-4 py-3 mt-3">O Que Fazemos</Link>
                      <Link to="/contactos" className="btn btn-white px-4 py-3 mt-3 ml-3">Fale Connosco</Link>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="slider-arrows">
          <button type="button" aria-label="Slide anterior" onClick={() => goToSlide(-1)}>
            <span className="icon-chevron-left"></span>
          </button>
          <button type="button" aria-label="Slide seguinte" onClick={() => goToSlide(1)}>
            <span className="icon-chevron-right"></span>
          </button>
        </div>
      </section>

      <section className="ftco-section">
        <div className="container">
          <div className="row justify-content-center mb-5 pb-2">
            <div className="col-md-8 text-center heading-section">
              <h2 className="mb-4">Sobre Nós</h2>
              <p>As nossas actividades reflectem tranquilidade e agilidade para o cliente. Faz parte da nossa missão sensibilizar os nossos clientes para que tomem decisões mais sustentáveis no seu dia a dia.</p>
            </div>
          </div>
          <div className="row align-items-center">
            <div className="col-md-6 mb-4 mb-md-0">
              <div className="about-photo" style={{ backgroundImage: 'url(/images/foto-reuniao-sala.jpg)' }}></div>
            </div>
            <div className="col-md-6 pl-md-5">
              <p>A CASSFREI – Sistemas de Informação e Gestão Territorial, Lda é uma empresa de consultoria e prestação de serviços, formada com capitais exclusivamente angolanos, criada para a orientação e execução técnica de trabalhos de Cartografia Geológica, Gestão do Território, Planeamento Urbano, Cadastro Predial, Topografia e Sistemas de Informação Geográfica.</p>
              <p>Trabalhamos lado a lado com instituições públicas e privadas em Angola, com rigor técnico e soluções sustentáveis, adaptadas à realidade do território nacional.</p>
              <Link to="/sobre" className="btn btn-outline-primary px-4 py-2 mt-2">Sobre Nós</Link>
            </div>
          </div>
        </div>
      </section>

      <section className="ftco-section bg-light">
        <div className="container">
          <div className="row justify-content-center mb-5 pb-2">
            <div className="col-md-8 text-center heading-section">
              <h2 className="mb-4">Nossos Valores</h2>
            </div>
          </div>
          <div className="row">
            {values.map((value) => (
              <div className="col-md-6 col-lg-3 mb-4" key={value.title}>
                <ValueCard {...value} />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="ftco-intro ftco-no-pb img" style={{ backgroundImage: 'url(/images/foto-drone-equipa.jpg)' }}>
        <div className="container">
          <div className="row justify-content-center mb-5">
            <div className="col-md-10 text-center heading-section heading-section-white">
              <h2 className="mb-0">Rigor Técnico no Terreno, em Todo o Território</h2>
            </div>
          </div>
        </div>
      </section>

      <section className="ftco-counter" id="section-counter">
        <div className="container">
          <div className="row d-md-flex align-items-center justify-content-center">
            <div className="wrapper">
              <div className="row d-md-flex align-items-center">
                <Counter icon="icon-institution" target={7} label="Instituições Públicas Servidas" />
                <Counter icon="icon-briefcase" target={6} label="Instituições Privadas Servidas" />
                <Counter icon="icon-map" target={7} label="Projectos de Referência" />
                <Counter icon="icon-calendar" target={yearsActive} label="Anos de Actuação" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="ftco-section">
        <div className="container">
          <div className="row justify-content-center mb-5 pb-2">
            <div className="col-md-8 text-center heading-section">
              <h2 className="mb-4">O Que Fazemos</h2>
              <p>Consultoria e prestação de serviços nas áreas de Cadastro, Cartografia, Planeamento Urbano e Sistemas de Informação Geográfica, a nível público e privado.</p>
            </div>
          </div>
          <div className="row no-gutters">
            {homeServices.map((service) => (
              <div className="col-lg-4 d-flex" key={service.title}>
                <ServiceCard icon={service.icon} title={service.title} text={service.text} />
              </div>
            ))}
          </div>
          <div className="row justify-content-center mt-4">
            <Link to="/o-que-fazemos" className="btn btn-outline-primary px-4 py-2">Ver Todos os Serviços</Link>
          </div>
        </div>
      </section>

      <section className="ftco-intro ftco-no-pb img" style={{ backgroundImage: 'url(/images/foto-apresentacao-cadastro.jpg)' }}>
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-9 col-md-8 d-flex align-items-center heading-section heading-section-white">
              <h2 className="mb-3 mb-md-0">Soluções Híbridas e Sustentáveis para o Território</h2>
            </div>
            <div className="col-lg-3 col-md-4">
              <p className="mb-0"><Link to="/contactos" className="btn btn-white py-3 px-4">Pedir Orçamento</Link></p>
            </div>
          </div>
        </div>
      </section>

      <section className="ftco-section ftco-no-pb">
        <div className="container-fluid px-0">
          <div className="row no-gutters justify-content-center mb-5">
            <div className="col-md-7 text-center heading-section">
              <h2 className="mb-4">Projectos de Referência</h2>
              <p>Alguns dos trabalhos que desenvolvemos com instituições públicas e privadas em Angola.</p>
            </div>
          </div>
          <div className="row no-gutters">
            {projects.map((project) => (
              <div className="col-md-3" key={project.slug}>
                <ProjectCard project={project} />
              </div>
            ))}
          </div>
          <div className="row no-gutters justify-content-center mt-4 mb-5">
            <Link to="/projectos" className="btn btn-primary px-4 py-2">Ver Todos os Projectos</Link>
          </div>
        </div>
      </section>
    </>
  )
}

export default Home
