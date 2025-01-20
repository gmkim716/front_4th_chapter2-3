export const highlightText = (text: string, query: string) => {
  if (!query) return text
  const regex = new RegExp(query, "gi")
  return text.replace(regex, (match) => `<span class="highlight">${match}</span>`)
}
