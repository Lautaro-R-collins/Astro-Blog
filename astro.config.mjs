import { defineConfig } from 'astro/config'
import mdx from '@astrojs/mdx'
import sitemap from '@astrojs/sitemap'
import tailwind from '@astrojs/tailwind'
import react from '@astrojs/react' // Importa la integración de React
import { remarkReadingTime } from './src/utils/readTime.ts'

// https://astro.build/config
export default defineConfig({
	site: 'http://localhost:4321/', // Dominio WEB
	markdown: {
		remarkPlugins: [remarkReadingTime],
		drafts: true,
		shikiConfig: {
			theme: 'material-theme-palenight',
			wrap: true
		}
	},
	integrations: [
		mdx({
			syntaxHighlight: 'shiki',
			shikiConfig: {
				experimentalThemes: {
					light: 'vitesse-light',
					dark: 'material-theme-palenight',
				},
				wrap: true
			},
			drafts: true
		}),
		sitemap(),
		tailwind(),
		react() 
	]
})

