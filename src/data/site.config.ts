interface SiteConfig {
	author: string
	title: string
	description: string
	lang: string
	ogLocale: string
	shareMessage: string
	paginationSize: number
}


export const siteConfig: SiteConfig = {
  author: 'LautaroDev',
  title: 'Lautaro Develops',
  description: 'Mi blog personal sobre desarrollo web y tecnología',
  lang: 'es-AR',  
  ogLocale: 'es_AR',
  shareMessage: '¡Comparte esta publicación interesante con tus amigos!',
  paginationSize: 10,  
};
