import PageHeader from '../components/PageHeader.jsx'
import Seo from '../components/Seo.jsx'
import FormacaoCard from '../components/FormacaoCard.jsx'
import formacoes from '../data/formacoes.js'
import { breadcrumbJsonLd, absoluteUrl } from '../lib/seo.js'

const formacoesJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'ItemList',
  itemListElement: formacoes.map((formacao, index) => ({
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

function Formacoes() {
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

      <section className="ftco-section">
        <div className="container">
          <div className="row justify-content-center mb-5 pb-2">
            <div className="col-md-8 text-center heading-section">
              <h2 className="mb-4">Formações Presenciais</h2>
              <p>
                Partilhamos a nossa experiência técnica através de formações presenciais nas áreas em que
                actuamos. As inscrições estão de momento encerradas para todas as formações — assim que
                houver novas vagas, o botão de pré-inscrição é activado com o link do formulário.
              </p>
            </div>
          </div>
          <div className="row">
            {formacoes.map((formacao) => (
              <div className="col-md-6 col-lg-4 mb-4" key={formacao.slug}>
                <FormacaoCard formacao={formacao} />
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

export default Formacoes
