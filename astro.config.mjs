// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

// Site utilisateur GitHub Pages (dépôt Yagt0.github.io) : servi à la racine.
export default defineConfig({
  site: 'https://yagt0.github.io',
  trailingSlash: 'ignore',

  // Garde les espaces entre texte et balises (sinon « le<strong>pentest</strong> » se colle).
  compressHTML: false,

  devToolbar: { enabled: false },

  build: {
    format: 'directory',
  },

  vite: {
    plugins: [tailwindcss()],
  },
});