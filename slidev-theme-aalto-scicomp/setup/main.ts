import { defineAppSetup } from '@slidev/types'
// @ts-expect-error virtual module provided by Slidev (the deck headmatter config)
import configs from '/@slidev/configs'

// Optional colour palette from the deck headmatter (`themeConfig: { palette: 'scicomp-web' }`).
// The palette rules in styles/palettes.css apply under this <html> class.
// Optional title style (`themeConfig: { titles: 'aalto' }`), rules in styles/titles.css.
export default defineAppSetup(() => {
  if (typeof document === 'undefined')
    return
  const palette = configs.themeConfig?.palette
  if (palette)
    document.documentElement.classList.add(`asc-palette-${palette}`)
  const titles = configs.themeConfig?.titles
  if (titles)
    document.documentElement.classList.add(`asc-titles-${titles}`)
})
