// Cada entrada é um post do blog. Para publicar um novo artigo, adicionar aqui um novo objecto
// com um "slug" único — não é necessário nenhum CMS ou backend.
// "tags" (opcional) mostra badges no cartão e no artigo. "body" é uma lista de parágrafos;
// uma linha a começar por "## " é tratada como subtítulo (ver BlogPost.jsx). "gallery"
// (opcional) é uma lista de { src, caption } que aparece como mini-galeria no fim do artigo,
// com a mesma lightbox da página /galeria.
const posts = [
  {
    slug: 'representacao-internacional-da-cassfrei',
    title: 'CASSFREI leva a experiência angolana a palcos internacionais',
    date: '2026-09-26',
    excerpt: 'O nosso co-fundador representou a CASSFREI-SIGT na Esri User Conference (San Diego), no Fórum do World Bank sobre Concessões de Terra e no Programa de Modernização Cadastral de Luanda, pelo IGCA.',
    image: '/images/label5.jpeg',
    tags: ['Representação Internacional'],
    body: [
      'A CASSFREI-SIGT tem vindo a reforçar a sua presença em fóruns e conferências internacionais — um esforço para trazer para Angola as práticas mais actuais em Cadastro, Geologia e Sistemas de Informação Geográfica, e para mostrar, também lá fora, o trabalho que fazemos dentro do país.',
      '## Esri User Conference — San Diego',
      'O nosso co-fundador representou a CASSFREI-SIGT na Esri User Conference, em San Diego, um dos maiores encontros mundiais dedicados a Sistemas de Informação Geográfica. Milhares de profissionais e organizações de todo o mundo reúnem-se para partilhar avanços em cartografia digital, análise espacial e gestão de dados territoriais — áreas centrais do trabalho da CASSFREI-SIGT em Angola.',
      '## Fórum do World Bank sobre Concessões de Terra',
      'A CASSFREI-SIGT esteve também representada no Fórum do World Bank sobre Concessões de Terra, enquadrado no programa "Diversifica Mais" do Governo de Angola em parceria com o World Bank — uma iniciativa voltada para desbloquear o potencial de desenvolvimento nacional através de uma gestão mais eficiente do território e dos recursos.',
      '## Programa de Modernização Cadastral de Luanda — IGCA',
      'Mais perto de casa, o nosso co-fundador integrou o Programa de Modernização Cadastral de Luanda, realizado pelo IGCA — um passo importante para um cadastro predial mais moderno, rigoroso e acessível na capital.',
      'Estas participações reflectem um objectivo simples: mostrar que a CASSFREI-SIGT tem representação também fora de Angola, e não só dentro do país — trazendo para o mercado angolano o que de mais actual se discute internacionalmente sobre território, cadastro e geo-informação.',
    ],
    gallery: [
      {
        src: '/images/label4.jpeg',
        caption: 'Na plenária da Esri User Conference, em San Diego',
      },
      {
        src: '/images/label1.jpeg',
        caption: 'Numa sessão da Esri User Conference, em San Diego',
      },
      {
        src: '/images/label2.jpeg',
        caption: 'No Fórum do World Bank sobre Concessões de Terra, com representantes do Governo de Angola e do World Bank',
      },
    ],
  },
  {
    slug: 'bem-vindos-ao-nosso-blog',
    title: 'Bem-vindos ao Blog da Cassfrei-SIGT',
    date: '2026-01-01',
    excerpt: 'Este espaço vai reunir artigos, novidades e reflexões da equipa da Cassfrei-SIGT sobre Engenharia, Geologia, Cadastro e Sistemas de Informação Geográfica.',
    image: '/images/image_1.jpg',
    tags: ['Blog'],
    body: [
      'Este é o primeiro artigo do blog da Cassfrei-SIGT, Lda. Nas próximas semanas iremos partilhar aqui novidades sobre os nossos projectos, reflexões técnicas sobre Cadastro, Cartografia e Sistemas de Informação Geográfica, e outros temas relevantes para o sector.',
      'Fique atento — há sempre mais território para explorar.',
    ],
  },
]

export default posts
