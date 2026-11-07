// Fotos e vídeos de actividades da Cassfrei-SIGT (ver assets-novos/LEIA-ME.md para a origem).
// Usado na secção "Em Acção" da Home e na página /galeria.
//
// Campos de cada item:
//   tipo       'foto' (por omissão) ou 'video'
//   categoria  usada nos filtros da Galeria
//   caption    legenda (e título acessível)
//   destaque   (opcional) true para ser o item grande da Home
//   Foto:   src = '/images/....jpg'
//   Vídeo:  thumb = capa ('/images/....jpg'; no YouTube é opcional) e UMA destas:
//             youtube = 'ID_DO_VIDEO'  (recomendado — o site só incorpora, não pesa)
//             file    = '/videos/nome.mp4'  (MP4 curto, até ~15 MB; pôr em public/videos/)
//   Exemplo:
//   { tipo: 'video', categoria: 'Campo', youtube: 'dQw4w9WgXcQ', caption: 'Levantamento com drone' },
const galeria = [
  {
    src: '/images/foto-drone-equipa.jpg',
    categoria: 'Campo',
    caption: 'Equipa em levantamento com drone',
  },
  {
    src: '/images/foto-seminario-toponimia.jpg',
    categoria: 'Eventos',
    caption: 'Seminário de Toponímia',
  },
  {
    src: '/images/foto-apresentacao-cadastro.jpg',
    categoria: 'Eventos',
    caption: 'Apresentação sobre Cadastro Técnico',
  },
  {
    src: '/images/foto-reuniao-sala.jpg',
    categoria: 'Institucional',
    caption: 'Reunião institucional',
  },
  {
    src: '/images/foto-reuniao-corredor.jpg',
    categoria: 'Institucional',
    caption: 'Reunião com parceiros',
  },
  {
    src: '/images/label5.jpeg',
    categoria: 'Representação Internacional',
    caption: 'Representação da CASSFREI na Esri User Conference – San Diego (Co-fundador)',
  },
  {
    src: '/images/label4.jpeg',
    categoria: 'Representação Internacional',
    caption: 'Representação da CASSFREI na Esri User Conference – San Diego (Co-fundador)',
  },
  {
    src: '/images/label1.jpeg',
    categoria: 'Representação Internacional',
    caption: 'Representação da CASSFREI na Esri User Conference – San Diego (Co-fundador)',
  },
  {
    src: '/images/label2.jpeg',
    categoria: 'Representação Internacional',
    caption: 'Representação da CASSFREI no Fórum do World Bank sobre Concessões de Terra (Co-fundador)',
  },
]

export default galeria
