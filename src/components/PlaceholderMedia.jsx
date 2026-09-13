// Usado sempre que ainda não existe fotografia/mapa real de um projecto — evita mostrar as
// imagens de stock genéricas do template (mockups de design gráfico) que não têm relação
// nenhuma com trabalho de SIG/cadastro/topografia. Substituir por foto real quando disponível
// (ver Fase 9 do plano — assets-novos/).
import { Map } from 'lucide-react'

function PlaceholderMedia({ icon: Icon = Map, className = '' }) {
  return (
    <div className={`placeholder-media d-flex align-items-center justify-content-center ${className}`.trim()}>
      <Icon size={48} strokeWidth={1.5} />
    </div>
  )
}

export default PlaceholderMedia
