import {
  MapPin,
  Landmark,
  Building2,
  Gavel,
  AlertTriangle,
  GraduationCap,
  Database,
  FlaskConical,
  Signpost,
  Monitor,
  Store,
  Globe,
} from 'lucide-react'

export const consultoriaServices = [
  {
    icon: MapPin,
    title: 'Cadastro Predial e Urbano',
    abbr: 'CPU',
    text: 'Levantamento e organização da informação predial e urbana ao serviço da gestão do território.',
  },
  {
    icon: Landmark,
    title: 'Cadastro Fiscal de Contribuintes',
    abbr: 'CFC',
    text: 'Estruturação da base cadastral de contribuintes para apoio à administração tributária.',
  },
  {
    icon: Building2,
    title: 'Inventário de Equipamentos Colectivos',
    abbr: 'IEC',
    text: 'Levantamento e catalogação de equipamentos e infraestruturas colectivas.',
  },
  {
    icon: Gavel,
    title: 'Serviços Técnicos de Apoio às Autarquias',
    abbr: 'STAA',
    text: 'Apoio técnico especializado às autarquias na gestão do território e do património.',
  },
]

export const estudosServices = [
  {
    icon: AlertTriangle,
    title: 'Análise de Geo-riscos',
    text: 'Identificação e caracterização de riscos geológicos e geográficos para apoio à decisão.',
  },
  {
    icon: GraduationCap,
    title: 'Materiais de Apoio ao Ensino',
    text: 'Cartilhas, mapas e materiais de apoio ao estudo e ensino de Geografia, Geologia, História e Topografia.',
  },
  {
    icon: Database,
    title: 'Base de Dados Geoespacial Comercial',
    abbr: 'BDGC',
    text: 'Criação de base de dados geoespacial para gestão de estabelecimentos comerciais.',
  },
  {
    icon: FlaskConical,
    title: 'Estudos Geológico-Geotécnicos',
    text: 'Informações preliminares necessárias para a exploração mineira e agrícola.',
  },
  {
    icon: Signpost,
    title: 'Toponímia',
    text: 'Estudos e procedimentos para a implementação da toponímia.',
  },
  {
    icon: Monitor,
    title: 'Formação em SIG',
    text: 'Formação em Sistemas de Informação Geográfica aplicado à Engenharia, Geologia e Saúde.',
  },
  {
    icon: Store,
    title: 'Gestão Espacial e Monitoramento Comercial',
    abbr: 'MACBG',
    text: 'Plano de Gestão Espacial das Superfícies Comerciais Produtoras de Resíduos e Monitoramento de Alvarás Comerciais Baseado na Geo-localização.',
  },
  {
    icon: Globe,
    title: 'Mapas Temáticos',
    text: 'Produção de mapas temáticos para apoio ao planeamento e à decisão.',
  },
]

export default { consultoriaServices, estudosServices }
