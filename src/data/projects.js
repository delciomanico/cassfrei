// AGT e GPL já usam fotos reais da empresa; os restantes ficam com placeholder de marca
// (`placeholder: true`) até haver fotografia real desses projectos específicos.
const projects = [
  {
    slug: 'cabo-ledo',
    title: 'Cabo Ledo',
    client: 'Gabinete de Gestão do Pólo de Desenvolvimento Turístico de Cabo Ledo',
    period: '2013 – 2015',
    image: '/images/project-1.jpg',
    placeholder: true,
    summary: 'Implementação do Gabinete de Cadastro e Sistemas de Informação Geográfica no Pólo de Desenvolvimento Turístico de Cabo Ledo.',
    body: [
      'A Cassfrei-SIGT implementou o Gabinete de Cadastro e Sistemas de Informação Geográfica ao serviço do Pólo de Desenvolvimento Turístico de Cabo Ledo, apoiando a gestão técnica do território na região.',
      'O trabalho incluiu a inventariação dos equipamentos sociais existentes no perímetro afecto ao Pólo Turístico, bem como o estudo dos indicadores sociais e demográficos da população residente na área de intervenção.',
    ],
    stats: [
      { label: 'Habitantes cadastrados', value: '7 897' },
      { label: 'Crianças', value: '41%' },
      { label: 'Jovens', value: '31%' },
      { label: 'Adultos', value: '17%' },
      { label: 'Adolescentes', value: '9%' },
      { label: 'Idosos', value: '2%' },
    ],
  },
  {
    slug: 'agt',
    title: 'AGT',
    client: 'Administração Geral Tributária (AGT)',
    period: '2015',
    image: '/images/foto-apresentacao-cadastro.jpg',
    summary: 'Projecção e materialização dos limites de jurisdição da 3ª Região Tributária de Angola e das suas Repartições Fiscais.',
    body: [
      'A Cassfrei-SIGT realizou a projecção e materialização dos limites de jurisdição da 3ª Região Tributária de Angola, abrangendo as Repartições Fiscais de Luanda (1ª a 4ª), Ambriz, Cacuaco, Caxito, Icolo e Bengo, Quiçama e Viana.',
      'O projecto incluiu uma análise estatística e descritiva do binómio jurisdição-área, identificando as zonas cinzentas na cobertura da base tributária e apoiando a Administração Geral Tributária na gestão territorial das suas repartições.',
    ],
  },
  {
    slug: 'gpl',
    title: 'GPL',
    client: 'Governo da Província de Luanda (GPL)',
    period: '2017 – 2018',
    image: '/images/foto-seminario-toponimia.jpg',
    summary: 'Estudos e procedimentos toponímicos da Província de Luanda e caracterização de zonas de risco de inundação.',
    body: [
      'Para o Governo da Província de Luanda, a Cassfrei-SIGT desenvolveu estudos e procedimentos toponímicos abrangendo toda a Província de Luanda.',
      'O trabalho incluiu ainda estudos e a caracterização das zonas susceptíveis ao risco de inundação nos Municípios de Luanda e de Kilamba Kiaxi, apoiando o planeamento urbano e a prevenção de riscos na região.',
    ],
  },
  {
    slug: 'pna',
    title: 'PNA',
    client: 'Comando Provincial da Polícia de Luanda (PNA)',
    period: '2016 – 2018',
    image: '/images/project-4.jpg',
    placeholder: true,
    summary: 'Levantamento das infraestruturas policiais e projecção dos Territórios Operacionais dos Comandos de Divisão.',
    body: [
      'A Cassfrei-SIGT efectuou o levantamento das infraestruturas policiais existentes na Província de Luanda para o Comando Provincial da Polícia Nacional.',
      'O projecto incluiu a projecção dos Territórios Operacionais dos Comandos de Divisão de Kilamba Kiaxi, de Talatona e de Viana, apoiando o planeamento operacional da actividade policial na região.',
    ],
  },
  {
    slug: 'gpsl',
    title: 'GPSL',
    client: 'Gabinete Provincial de Saúde de Luanda (GPSL)',
    period: '2018 – 2020',
    image: '/images/project-5.jpg',
    placeholder: true,
    summary: 'Definição e projecção das Redes Sanitárias Municipais da Província de Luanda.',
    body: [
      'Para o Gabinete Provincial de Saúde de Luanda, a Cassfrei-SIGT definiu e projectou as Redes Sanitárias Municipais da Província de Luanda, e realizou a inventariação das Unidades Sanitárias (Postos de Saúde, Centros de Saúde e Hospitais) existentes.',
      'O projecto incluiu a projecção das novas Subáreas de Cuidados Obstétricos, abrangendo as Áreas Centro-Norte e Sul de Luanda, apoiando a organização territorial da rede de cuidados de saúde materna.',
    ],
  },
  {
    slug: 'empul',
    title: 'EMPUL, SA',
    client: 'EMPUL, SA',
    period: '2020 – 2021',
    image: '/images/project-6.jpg',
    placeholder: true,
    summary: 'Levantamento cadastral e requalificação do Morro da Cal – Panguila, Província do Bengo.',
    body: [
      'A Cassfrei-SIGT realizou o levantamento cadastral e o projecto de requalificação do Morro da Cal, em Panguila, Província do Bengo, para a EMPUL, SA.',
      'O trabalho apoiou o ordenamento urbano da área de intervenção, com base num levantamento cadastral rigoroso do território.',
    ],
  },
  {
    slug: 'gemini',
    title: 'GEMINI, SA',
    client: 'GEMINI, SA',
    period: '2021',
    image: '/images/project-7.jpg',
    placeholder: true,
    summary: 'Levantamento topográfico e projecto do Clube 21 — restaurante, sala de conferências e áreas de lazer.',
    body: [
      'Para a GEMINI, SA, a Cassfrei-SIGT realizou o levantamento topográfico e o projecto do Clube 21, um empreendimento que integra restaurante, sala de conferências, bungalows, campo de práticas, zona de tiro ao alvo e paintball.',
      'O projecto combinou o rigor técnico do levantamento topográfico com o desenho de um espaço de lazer multifuncional.',
    ],
  },
]

export default projects
