// Cada entrada é um post do blog. Para publicar um novo artigo, adicionar aqui um novo objecto
// com um "slug" único — não é necessário nenhum CMS ou backend.
const posts = [
  {
    slug: 'bem-vindos-ao-nosso-blog',
    title: 'Bem-vindos ao Blog da Cassfrei-SIGT',
    date: '2026-01-01',
    excerpt: 'Este espaço vai reunir artigos, novidades e reflexões da equipa da Cassfrei-SIGT sobre Engenharia, Geologia, Cadastro e Sistemas de Informação Geográfica.',
    image: '/images/image_1.jpg',
    body: [
      'Este é o primeiro artigo do blog da Cassfrei-SIGT, Lda. Nas próximas semanas iremos partilhar aqui novidades sobre os nossos projectos, reflexões técnicas sobre Cadastro, Cartografia e Sistemas de Informação Geográfica, e outros temas relevantes para o sector.',
      'Fique atento — há sempre mais território para explorar.',
    ],
  },
]

export default posts
