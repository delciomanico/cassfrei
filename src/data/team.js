// Equipa da Cassfrei-SIGT. Sem "image" o cartão mostra um bloco de cor com ícone genérico
// em vez de inventar uma fotografia da pessoa (ver TeamCard.jsx). "image" aponta para um
// caminho em /public/images/. "email" é opcional — só aparece o ícone de contacto quando
// preenchido.
const team = [
  {
    name: 'Nadine Guimarães',
    role: 'Geóloga',
    email: 'nadine.guimarães@hotmail.com',
  },
  {
    name: 'Artur Freitas',
    role: 'Engenheiro Geógrafo',
    email: 'arthuca3@gmail.com',
  },
  {
    name: 'Delcio Monarca Dulo Manico',
    role: 'Desenvolvedor de Softwares',
    email: null,
    image: '/images/delcio_foto.jpeg',
  },
]

export default team
