import { defineConfig, type DefaultTheme } from 'vitepress'

const domains = [
  { slug: 'responsible-ai', en: 'Use GitHub Copilot responsibly', fr: 'Utiliser GitHub Copilot de manière responsable' },
  { slug: 'copilot-features', en: 'Use GitHub Copilot features', fr: 'Utiliser les fonctionnalités de GitHub Copilot' },
  { slug: 'data-architecture', en: 'Understand GitHub Copilot data and architecture', fr: 'Comprendre les données et l’architecture de GitHub Copilot' },
  { slug: 'prompt-engineering', en: 'Apply prompt engineering and context crafting', fr: 'Appliquer la conception des prompts et du contexte' },
  { slug: 'developer-productivity', en: 'Improve developer productivity with GitHub Copilot', fr: 'Améliorer la productivité avec GitHub Copilot' },
  { slug: 'privacy-safeguards', en: 'Configure privacy, content exclusions, and safeguards', fr: 'Configurer la confidentialité, les exclusions de contenu et les protections' },
] as const

function navigation(language: 'en' | 'fr'): DefaultTheme.Config {
  const french = language === 'fr'
  const prefix = french ? '/fr/' : '/'
  const resources = { text: french ? 'Ressources' : 'Resources', link: `${prefix}resources/` }
  const labs = { text: french ? 'Ateliers' : 'Labs', link: `${prefix}labs/` }
  const examTips = { text: french ? 'Conseils d’examen' : 'Exam tips', link: `${prefix}exam-tips/` }
  const capabilities = {
    text: french ? 'Capacités et politiques de Copilot' : 'Copilot capabilities & policies',
    link: `${prefix}copilot-capabilities/`,
  }
  const domainLinks = domains.map(domain => ({
    text: domain[language],
    link: `${prefix}${domain.slug}/`,
  }))
  const studyLinks = [...domainLinks.slice(0, 2), capabilities, ...domainLinks.slice(2)]

  return {
    nav: [
      { text: french ? 'Domaines' : 'Study domains', items: studyLinks },
      labs,
      resources,
      examTips,
    ],
    sidebar: {
      [prefix]: [
        {
          text: french ? 'Domaines officiels GH-300' : 'Official GH-300 domains',
          items: studyLinks,
        },
        { text: french ? 'Préparation' : 'Preparation', items: [labs, resources, examTips] },
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
