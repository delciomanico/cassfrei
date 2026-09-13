// Formações/cursos baseados no portefólio de serviços da Cassfrei-SIGT (ver services.js e
// Sobre.jsx). Todas as inscrições estão temporariamente encerradas — quando houver vagas
// abertas, actualizar "vagasAbertas" para true e preencher "googleFormUrl" com o link real
// do Google Form de pré-inscrição.
//
// "image" usa fotos reais já existentes em public/images/ (ver src/data/galeria.js). Quando
// houver uma foto própria de cada formação, substituir aqui — ou remover "image" e adicionar
// "placeholder: true" para usar o gradiente de marca em vez de uma foto genérica.
const formacoes = [
  {
    slug: 'sig-engenharia-geologia-saude',
    image: '/images/foto-drone-equipa.jpg',
    title: 'Sistemas de Informação Geográfica (SIG)',
    modality: 'Presencial',
    text: 'Programa prático para técnicos de Engenharia, Geologia e Saúde que precisam de usar SIG no seu dia a dia de trabalho — captura, análise e produção de mapas a partir de casos reais.',
    vagasAbertas: false,
    googleFormUrl: null,
  },
  {
    slug: 'cadastro-predial-urbano',
    image: '/images/foto-apresentacao-cadastro.jpg',
    title: 'Cadastro Predial e Urbano',
    modality: 'Presencial',
    text: 'Fundamentos e boas práticas de levantamento e organização da informação predial e urbana ao serviço da gestão do território.',
    vagasAbertas: false,
    googleFormUrl: null,
  },
  {
    slug: 'cartografia-mapas-tematicos',
    image: '/images/foto-reuniao-corredor.jpg',
    title: 'Cartografia e Mapas Temáticos',
    modality: 'Presencial',
    text: 'Produção de mapas temáticos e cartografia geológica de apoio ao planeamento e à tomada de decisão.',
    vagasAbertas: false,
    googleFormUrl: null,
  },
  {
    slug: 'topografia-aplicada',
    image: '/images/foto-drone-equipa.jpg',
    title: 'Topografia Aplicada',
    modality: 'Presencial',
    text: 'Técnicas de topografia aplicadas a levantamentos de terreno e apoio a projectos de engenharia.',
    vagasAbertas: false,
    googleFormUrl: null,
  },
  {
    slug: 'analise-geo-riscos',
    image: '/images/foto-reuniao-sala.jpg',
    title: 'Análise de Geo-riscos',
    modality: 'Presencial',
    text: 'Identificação e caracterização de riscos geológicos e geográficos para apoio à decisão.',
    vagasAbertas: false,
    googleFormUrl: null,
  },
  {
    slug: 'toponimia-nomenclatura-territorial',
    image: '/images/foto-seminario-toponimia.jpg',
    title: 'Toponímia e Nomenclatura Territorial',
    modality: 'Presencial',
    text: 'Estudos e procedimentos para a implementação da toponímia e da nomenclatura territorial.',
    vagasAbertas: false,
    googleFormUrl: null,
  },
]

export default formacoes
