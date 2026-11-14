import { defineConfig, type DefaultTheme } from 'vitepress'

const domains = [
  { slug: 'responsible-ai', en: 'Responsible AI', fr: 'IA responsable' },
  { slug: 'copilot-features', en: 'Copilot features', fr: 'Fonctionnalités de Copilot' },
  { slug: 'data-architecture', en: 'Data and architecture', fr: 'Données et architecture' },
  { slug: 'prompt-engineering', en: 'Prompt engineering', fr: 'Conception des requêtes' },
  { slug: 'developer-productivity', en: 'Developer productivity', fr: 'Productivité des développeurs' },
  { slug: 'privacy-safeguards', en: 'Privacy and safeguards', fr: 'Confidentialité et protections' },
] as const

function navigation(language: 'en' | 'fr'): DefaultTheme.Config {
  const french = language === 'fr'
  const prefix = french ? '/fr/' : '/'
  const resources = { text: french ? 'Ressources' : 'Resources', link: `${prefix}resources/` }
  const labs = { text: french ? 'Ateliers' : 'Labs', link: `${prefix}labs/` }

  const domainLinks = domains.map(domain => ({
    text: domain[language],
    link: `${prefix}${domain.slug}/`,
  }))

  return {
    nav: [
      { text: french ? 'Domaines' : 'Study domains', items: domainLinks },
      labs,
      resources,
    ],
    sidebar: {
      [prefix]: [
        {
          text: french ? 'Domaines de compétences' : 'Competency domains',
          items: domainLinks,
        },
        { text: french ? 'Préparation' : 'Preparation', items: [labs, resources] },
      ],
    },
  }
}

export default defineConfig({
  base: '/gh300-study-guide/',
  title: 'GH-300 Study Guide',
  head: [['link', { rel: 'icon', type: 'image/svg+xml', href: '/gh300-study-guide/favicon.svg' }]],
  locales: {
    root: {
      label: 'English',
      lang: 'en',
      description: 'Master GitHub Copilot and prepare for certification.',
      themeConfig: navigation('en'),
    },
    fr: {
      label: 'Français',
      lang: 'fr',
      title: 'Guide d’étude GH-300',
      description: 'Maîtrisez GitHub Copilot et préparez-vous à la certification.',
      themeConfig: {
        ...navigation('fr'),
        outline: { label: 'Sur cette page' },
        docFooter: { prev: 'Page précédente', next: 'Page suivante' },
        sidebarMenuLabel: 'Menu',
        returnToTopLabel: 'Retour en haut',
        langMenuLabel: 'Changer de langue',
        darkModeSwitchLabel: 'Apparence',
        lightModeSwitchTitle: 'Activer le thème clair',
        darkModeSwitchTitle: 'Activer le thème sombre',
        skipToContentLabel: 'Aller au contenu',
      },
    },
  },
  themeConfig: {
    socialLinks: [
      { icon: 'github', link: 'https://github.com/ahmedOumezzine/gh300-study-guide' },
    ],
    search: {
      provider: 'local',
      options: {
        locales: {
          fr: {
            translations: {
              button: { buttonText: 'Rechercher', buttonAriaLabel: 'Rechercher' },
              modal: {
                displayDetails: 'Afficher les détails',
                resetButtonTitle: 'Effacer la recherche',
                backButtonTitle: 'Fermer la recherche',
                noResultsText: 'Aucun résultat',
                footer: {
                  selectText: 'sélectionner',
                  selectKeyAriaLabel: 'Entrée',
                  navigateText: 'parcourir',
                  navigateUpKeyAriaLabel: 'Flèche haut',
                  navigateDownKeyAriaLabel: 'Flèche bas',
                  closeText: 'fermer',
                  closeKeyAriaLabel: 'Échap',
                },
              },
            },
          },
        },
      },
    },
  },
})