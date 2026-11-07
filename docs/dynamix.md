# Conteúdo dinâmico (Dynamix-CMS)

O site lê o conteúdo da API pública do Dynamix (`https://dynamix.cassfrei.com`) e usa o conteúdo
estático de `src/data/` como **fallback**: se o CMS não responder, o projecto/componente não existir
ou o componente não tiver nada publicado, o site mostra o que está no código. O CMS nunca parte o site.

## Como funciona

- Cliente: `src/lib/dynamix.js` — `GET {API}/public/{projecto}/content/{componente}` com
  `limit=100&sort=publishedAt`, a seguir todas as páginas, timeout de 5 s, cache por sessão.
- Hooks: `useCollection(componente, fallback, { map })` (listas) e `useTexts()` → `t(chave, fallback)`
  (textos soltos). Arrancam logo com o fallback e trocam quando o CMS responde.
- Conversão: `src/lib/cms-maps.js` (`fromPost`, `fromService`, …) transforma a entrada do CMS no
  formato que os componentes já usavam.
- Ordem: a API só ordena por data, por isso **a ordem de publicação no CMS é a ordem no site**
  (publicar por ordem de apresentação; o mais antigo aparece primeiro). Excepção: o Blog ordena pela
  data do artigo (mais recente primeiro).
- Imagens e ficheiros: campos do tipo `image`/`file` chegam como URL completa
  (`…/public/{projecto}/media/{id}`); em campos `json` usa-se `media://<id>`.

## Configuração (build-time)

| Variável | Defeito | |
|---|---|---|
| `VITE_DYNAMIX_API_URL` | `https://dynamix.cassfrei.com/api/v1` | base da API |
| `VITE_DYNAMIX_PROJECT` | `cassfrei` | **slug do projecto no Dynamix** |
| `VITE_DYNAMIX_DISABLED` | — | `true` = ignora o CMS |

No Dokploy, definir como *Build Args* (o `Dockerfile` já os recebe). No CMS: Settings → domínios
autorizados deve incluir o domínio do site (vazio = qualquer origem).

## Componentes a criar no projecto (slug = nome do componente)

As chaves dos campos têm de ser `snake_case` (regra do Dynamix). Só entradas **published** aparecem. Tipos de campo do Dynamix entre parênteses.

| Componente | Campos | Usado em |
|---|---|---|
| `hero-slides` | `image` (image), `kicker` (text), `title` (text), `text` (textarea) | Home · banner |
| `values` | `icon` (text: Handshake, Rocket, ShieldCheck, Leaf…), `title`, `text` (textarea) | Home e Sobre · valores |
| `stats` | `icon` (text), `value` (number), `label` (text) | Home e Sobre · números |
| `services` | `group` (select: `consultoria` \| `estudos`), `icon`, `title`, `abbr`, `text` | Home e O Que Fazemos |
| `projects` | `title`, `client`, `period`, `image` (image), `summary` (textarea), `body` (richtext/textarea ou json — parágrafos), `stats` (json: `[{label, value}]`) | Home e Projectos |
| `posts` | `title`, `date` (date), `excerpt` (textarea), `image` (image), `tags` (json ou texto separado por vírgulas), `body` (texto, parágrafos separados por linha em branco; `## ` = subtítulo), `gallery` (json: `[{src: "media://id", caption}]`) | Blog |
| `formacoes` | `title`, `modality` (text), `text` (textarea), `image` (image), `vagas_abertas` (boolean), `google_form_url` (url) | Formações |
| `gallery` | `tipo` (select: `foto` \| `video`), `categoria`, `caption`, `image` (foto), `thumb` (image, vídeo), `youtube` (ID), `file` (file, MP4), `destaque` (boolean) | Home · Em acção e Galeria |
| `team` | `name`, `role`, `email` (email), `image` (image) | Sobre · equipa |
| `clients` | `tipo` (select: `publica` \| `privada`), `name`, `period` | Sobre · instituições |
| `site-texts` | `key` (text), `value` (textarea) | todos os títulos e textos soltos |

O `slug` de cada entrada é o do URL (`/projectos/{slug}`, `/blog/{slug}`).

## `site-texts` — chaves disponíveis

Cada chave tem o texto actual como fallback no código. Para mudar um texto, criar uma entrada com a
`key` e o novo `value`.

- Home: `home.about.{kicker,title,p1,p2,cta,image}`, `home.impact.{kicker,title,text,cta,image}`,
  `home.services.{kicker,title,lead,cta}`, `home.showcase.{kicker,title,cta}`, `home.cta.{title,button}`,
  `home.projects.{title,lead,cta}`
- Valores: `values.{kicker,title}`
- Sobre: `sobre.about.{kicker,title,p1,p2,image}`, `sobre.mission.{title,text}`,
  `sobre.impact.{kicker,title,image}`, `sobre.clients.{title,text,public,private}`, `sobre.team.title`
- O Que Fazemos: `servicos.consultoria.{title,text}`, `servicos.estudos.{title,text}`,
  `servicos.cta.{title,text}`
- Formações: `formacoes.{kicker,title,lead}`
- Blog: `blog.{title,more,social}` · Galeria: `galeria.title`

Para campos de imagem em `site-texts` (`*.image`) usar o URL do ficheiro da Media Library
(botão "Copiar URL").

## Fica estático (de propósito)

SEO e dados estruturados (`<title>`, descrições, JSON-LD, `sitemap.xml`) são gerados no build a partir
de `src/data/`. Para o conteúdo do CMS aparecer também nos motores de busca em tempo real seria preciso
pré-renderização — não está feita.

## Verificar

```bash
curl 'https://dynamix.cassfrei.com/api/v1/public/cassfrei/components'      # estrutura
curl 'https://dynamix.cassfrei.com/api/v1/public/cassfrei/content/values'  # conteúdo
```
No browser, DevTools → Network: pedidos a `/public/cassfrei/content/…`. Falhas 404 são esperadas
enquanto o componente não existir no CMS (o site usa o fallback).
