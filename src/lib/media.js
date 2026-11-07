// Ajudantes para itens da galeria (ver src/data/galeria.js).
export const isVideo = (item) => item.tipo === 'video'

// Imagem de capa: a "thumb" indicada, a miniatura do YouTube, ou a própria foto.
export function mediaThumb(item) {
  if (item.thumb) return item.thumb
  if (item.youtube) return `https://i.ytimg.com/vi/${item.youtube}/hqdefault.jpg`
  return item.src
}
