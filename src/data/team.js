// Equipa da Cassfrei-SIGT. Sem "image" o cartão mostra um bloco de cor com ícone genérico
// em vez de inventar uma fotografia da pessoa (ver TeamCard.jsx). "image" aponta para um
// caminho em /public/images/. "email" é opcional — só aparece o ícone de contacto quando
// preenchido.
const team = [
  {
    name: 'Nadine Guimarães',
    role: 'Directora Geral',
    email: 'nadine.guimarães@hotmail.com',
  },
  {
    name: 'Artur Freitas',
    role: 'Engenheiro Geógrafo e Co-fundador',
    email: 'arthuca3@gmail.com',
  },
  {
    name: 'Delcio Monarca Dulo Manico',
    role: 'Chefe do Departamento de TIC',
    email: null,
    image: '/images/delcio_foto.jpeg',
  },
  {
    name: 'Co-fundador',
    role: null,
    email: null,
    image: '/images/label3.jpeg',
  },
]

export default team
