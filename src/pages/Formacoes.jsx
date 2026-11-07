import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Search } from 'lucide-react'
import PageHeader from '../components/PageHeader.jsx'
import Seo from '../components/Seo.jsx'
import FormacaoCard from '../components/FormacaoCard.jsx'
import formacoesData from '../data/formacoes.js'
import { useCollection } from '../hooks/useCollection.js'
import { useTexts } from '../hooks/useTexts.js'
import { fromFormacao } from '../lib/cms-maps.js'
import { breadcrumbJsonLd, absoluteUrl } from '../lib/seo.js'

const formacoesJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'ItemList',
  itemListElement: formacoesData.map((formacao, index) => ({
    '@type': 'ListItem',
    position: index + 1,
    item: {
      '@type': 'EducationalOccupationalProgram',
      name: formacao.title,
      description: formacao.text,
      educationalProgramMode: formacao.modality,
      provider: { '@type': 'ProfessionalService', name: 'Cassfrei-SIGT, Lda' },
      url: absoluteUrl('/formacoes'),
    },
  })),
}

const filters = [
  { id: 'todas', label: 'Todas' },
  { id: 'abertas', label: 'Vagas abertas' },
  { id: 'encerradas', label: 'Encerradas' },
]

function Formacoes() {
  const t = useTexts()
  const { items: formacoes } = useCollection('formacoes', formacoesData, { map: fromFormacao })
  const [query, setQuery] = useState('')
  const [filter, setFilter] = useState('todas')

  const leadFallback = formacoes.some((f) => f.vagasAbertas)
    ? 'Formações presenciais nas áreas em que actuamos. Há vagas abertas — faça já a sua pré-inscrição.'
    : 'Formações presenciais nas áreas em que actuamos. As inscrições estão de momento encerradas — assim que houver novas vagas, o botão de pré-inscrição é activado.'

  const counts = {
    todas: formacoes.length,
    abertas: formacoes.filter((f) => f.vagasAbertas).length,
    encerradas: formacoes.filter((f) => !f.vagasAbertas).length,
  }

  const term = query.trim().toLowerCase()
  const visible = formacoes.filter((f) => {
    if (filter === 'abertas' && !f.vagasAbertas) return false
    if (filter === 'encerradas' && f.vagasAbertas) return false
    return !term || `${f.title} ${f.text}`.toLowerCase().includes(term)
  })

  return (
    <>
      <Seo
        title="Formações"
        description="Formações presenciais da Cassfrei-SIGT em Cadastro Predial, Cartografia, Topografia, Geo-riscos, Toponímia e Sistemas de Informação Geográfica (SIG) em Luanda, Angola."
        path="/formacoes"
        jsonLd={[
          breadcrumbJsonLd([{ name: 'Início', path: '/' }, { name: 'Formações', path: '/formacoes' }]),
          formacoesJsonLd,
        ]}
      />
      <PageHeader title="Formações" />

      <section className="courses">
        <div className="container">
          <div className="courses__intro" data-aos="fade-up">
            <span className="courses__kicker">{t('formacoes.kicker', 'Centro de formação')}</span>
            <h2 className="courses__title">{t('formacoes.title', 'Aprenda com quem trabalha no terreno')}</h2>
            <p className="courses__lead">{t('formacoes.lead', leadFallback)}</p>
          </div>

          <div className="courses__layout">
            <aside className="courses__aside" aria-label="Pesquisa e filtros">
              <label className="courses__search">
                <Search size={18} aria-hidden="true" />
                <input
                  type="search"
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  placeholder="Pesquisar formações"
                  aria-label="Pesquisar formações"
                />
              </label>

              <fieldset className="courses__group">
                <legend>Estado</legend>
                {filters.map((f) => (
                  <label key={f.id} className={`courses__option${filter === f.id ? ' is-active' : ''}`}>
                    <input
                      type="radio"
                      name="estado"
                      checked={filter === f.id}
                      onChange={() => setFilter(f.id)}
                    />
                    <span>{f.label}</span>
                    <small>{counts[f.id]}</small>
                  </label>
                ))}
              </fieldset>

              <div className="courses__help">
                <h3>Formação à medida?</h3>
                <p>Preparamos um programa para a sua equipa ou instituição.</p>
                <Link to="/contactos" className="btn btn-primary btn-block py-2">Fale Connosco</Link>
              </div>
            </aside>

            <div className="courses__main">
              <p className="courses__count">
                {visible.length} {visible.length === 1 ? 'formação' : 'formações'}
              </p>
              {visible.length > 0 ? (
                <div className="courses__list">
                  {visible.map((formacao) => (
                    <FormacaoCard formacao={formacao} key={formacao.slug} />
                  ))}
                </div>
              ) : (
                <p className="courses__empty">Nenhuma formação corresponde à sua pesquisa.</p>
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Formacoes
