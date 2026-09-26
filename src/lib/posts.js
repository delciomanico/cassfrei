const WORDS_PER_MINUTE = 200

// Parágrafos que começam por "## " são tratados como subtítulo (ver BlogPost.jsx) —
// não contam para a estimativa de leitura como texto corrido.
export function readingTime(body) {
  const words = body
    .filter((paragraph) => !paragraph.startsWith('## '))
    .join(' ')
    .trim()
    .split(/\s+/)
    .filter(Boolean).length

  return Math.max(1, Math.round(words / WORDS_PER_MINUTE))
}
