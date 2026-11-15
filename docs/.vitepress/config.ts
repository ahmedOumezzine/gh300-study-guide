import { defineConfig, type DefaultTheme } from 'vitepress'
import type MarkdownIt from 'markdown-it'

function wrapStudySections(md: MarkdownIt) {
  md.core.ruler.after('block', 'study-section-cards', state => {
    const tokens: typeof state.tokens = []
    let sectionOpen = false

    const addHtml = (content: string) => {
      const token = new state.Token('html_block', '', 0)
      token.block = true
      token.content = content
      tokens.push(token)
    }

    for (const token of state.tokens) {
      if (token.type === 'heading_open' && token.tag === 'h2') {
        if (sectionOpen) addHtml('</section>\n')
        addHtml('<section class="study-section-card">\n')
        sectionOpen = true
      }
      tokens.push(token)
    }

    if (sectionOpen) addHtml('</section>\n')
    state.tokens = tokens
  })
}

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
  const exams = {
    text: french ? 'Examens' : 'Exams',
    link: french
      ? 'https://certiva.oumezzine.com/fr/examens/preparation-certification-gh-300'
      : 'https://certiva.oumezzine.com/en/exams/github-copilot-gh-300-practice',
  }
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
    siteTitle: 'Certiva',
    nav: [
      { text: french ? 'Accueil' : 'Home', link: prefix },
      exams,
      { text: french ? 'Parcours' : 'Learning paths', items: studyLinks },
      resources,
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
  markdown: { config: wrapStudySections },
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
    siteTitle: 'Certiva',
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
