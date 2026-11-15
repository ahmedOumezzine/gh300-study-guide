<script setup lang="ts">
import { computed, onBeforeUnmount, onMounted, ref } from 'vue'
import { useData, withBase } from 'vitepress'

type StudyNote = {
  id: string
  title: string
  intro?: string
  bullets?: string[]
  questions?: string[]
  steps?: string[]
  closing?: string
}

type PageCopy = {
  title: string
  breadcrumbHome: string
  breadcrumb: string
  summary: string
  objectivesTitle: string
  objectives: string[]
  coverageTitle: string
  coverageIntro: string
  coverageRows: { objective: string; section: string; href: string }[]
  notesTitle: string
  notes: StudyNote[]
  principlesTitle: string
  principleQuestion: string
  principles: { name: string; question: string }[]
  harmsTitle: string
  harmHeading: string
  mitigationHeading: string
  harms: { harm: string; mitigation: string }[]
  checklistTitle: string
  checklist: string[]
  referencesTitle: string
  references: { label: string; href: string }[]
  tocTitle: string
  toc: { label: string; href: string }[]
  infoTitle: string
  examWeight: string
  level: string
  time: string
  type: string
  tipTitle: string
  tip: string
  resourceTitle: string
  resourceType: string
  resourceBody: string
  resourceButton: string
  previous: string
  previousLink: string
  next: string
  nextLink: string
  examWeightValue: string
  levelValue: string
  timeValue: string
  typeValue: string
}

const english: PageCopy = {
  title: 'Use GitHub Copilot responsibly',
  breadcrumbHome: 'GH-300 Study Guide',
  breadcrumb: 'Use GitHub Copilot responsibly',
  summary:
    'This domain represents 15–20% of the GH-300 exam. Focus on recognising risk, applying human judgement, and validating every AI-assisted change before it reaches users.',
  objectivesTitle: 'Objectives',
  objectives: [
    'Describe risks and limitations of Generative AI tools.',
    'Describe ethical and responsible AI usage.',
    'Identify potential harms and mitigation strategies of AI usage.',
    'Explain the need to validate AI output.',
    'Identify how to operate GitHub Copilot responsibly.',
  ],
  coverageTitle: 'Official exam coverage',
  coverageIntro:
    'The Microsoft study guide places this domain in two skill areas. This table maps each official objective to the notes below.',
  coverageRows: [
    {
      objective: 'Describe risks and limitations of Generative AI tools',
      section: 'Risks and limitations',
      href: '#risks-and-limitations',
    },
    {
      objective: 'Describe ethical and responsible AI usage',
      section: 'Responsible AI principles',
      href: '#responsible-ai-principles',
    },
    {
      objective: 'Identify potential harms and mitigation strategies of AI usage',
      section: 'Match a harm to a mitigation',
      href: '#harm-to-mitigation',
    },
    {
      objective: 'Explain the need to validate AI output',
      section: 'Validate before accepting',
      href: '#validate-before-accepting',
    },
    {
      objective: 'Identify how to operate GitHub Copilot responsibly',
      section: 'Responsible operation workflow',
      href: '#responsible-operation-workflow',
    },
  ],
  notesTitle: 'Study notes',
  notes: [
    {
      id: 'risks-and-limitations',
      title: 'Risks and limitations',
      intro: 'Copilot generates suggestions from patterns in its available context. A suggestion can be plausible and still be wrong, incomplete, insecure, biased, or unsuitable for the project.',
      bullets: [
        'A model can invent an API, misuse a library, or misunderstand a requirement.',
        'A suggestion can contain security defects such as injection risks, unsafe deserialisation, or hard-coded secrets.',
        'Training patterns can be outdated, biased, or inconsistent with the team’s standards.',
        'A limited context window can hide constraints in other files, services, or business rules.',
        'The same request can produce different results, so generated code is not a deterministic specification.',
      ],
    },
    {
      id: 'responsible-ai-principles',
      title: 'Responsible AI principles in practice',
      intro: 'Use fairness, reliability and safety, privacy and security, inclusiveness, transparency, and accountability as a review lens. In a GH-300 scenario, ask:',
      questions: [
        'Who could be affected by this output?',
        'Can the result be explained and tested?',
        'Does the change expose personal, confidential, or proprietary information?',
        'Who reviews and accepts the final change?',
      ],
      closing: 'The developer and organisation remain responsible for the software they ship. Copilot assists with the work; it does not own the decision.',
    },
    {
      id: 'validate-before-accepting',
      title: 'Validate before accepting',
      intro: 'Treat a suggestion as a draft. Check its behaviour against the requirement, run existing tests, add tests for new paths, inspect error handling and edge cases, and verify every API or dependency it references. Apply normal code review, security scanning, licensing review, and release controls.',
    },
    {
      id: 'responsible-operation-workflow',
      title: 'Responsible operation workflow',
      intro: 'Use this sequence when a scenario asks how to operate Copilot responsibly:',
      steps: [
        'Define the task and boundaries. State the requirement, permitted data, affected users, and acceptance criteria before prompting.',
        'Choose the smallest useful context. Exclude secrets, personal data, and unrelated proprietary material. Follow repository and organisation policies.',
        'Treat the response as untrusted draft output. Check APIs, dependencies, assumptions, permissions, error handling, and edge cases.',
        'Validate with evidence. Run tests, security and quality checks, licence review, and a focused human code review.',
        'Keep human ownership. Record who approved the change, what was checked, and what monitoring or rollback is available after release.',
      ],
      closing: 'Do not accept plausible output blindly or assume a policy setting makes generated code correct.',
    },
  ],
  principlesTitle: 'Six principles as a review lens',
  principleQuestion: 'Question for a Copilot-assisted change',
  principles: [
    {
      name: 'Fairness',
      question: 'Could the code or data disadvantage a group of users?',
    },
    {
      name: 'Reliability and safety',
      question: 'Does it fail safely and behave as intended under stress?',
    },
    {
      name: 'Privacy and security',
      question: 'Does it protect secrets, personal data, and permissions?',
    },
    {
      name: 'Inclusiveness',
      question: 'Can people with different abilities and backgrounds use the result?',
    },
    {
      name: 'Transparency',
      question: 'Can a reviewer understand the origin, assumptions, and behaviour?',
    },
    {
      name: 'Accountability',
      question: 'Is a named human responsible for the accepted change?',
    },
  ],
  harmsTitle: 'Match a harm to a mitigation',
  harmHeading: 'Potential harm',
  mitigationHeading: 'Useful mitigation',
  harms: [
    {
      harm: 'Incorrect or fabricated logic',
      mitigation: 'Tests, API verification, edge-case review',
    },
    {
      harm: 'Insecure implementation',
      mitigation: 'Threat modelling, code review, static analysis, dependency checks',
    },
    {
      harm: 'Sensitive data in context',
      mitigation: 'Content exclusions, secret scanning, prompt hygiene',
    },
    {
      harm: 'Biased or outdated behaviour',
      mitigation: 'Inclusive requirements, current standards, representative tests',
    },
    {
      harm: 'Licence or attribution concern',
      mitigation: 'Public-code matching controls and human licence review',
    },
    {
      harm: 'Blind acceptance',
      mitigation: 'Small diffs, approval gates, and explicit ownership',
    },
  ],
  checklistTitle: 'Practice checklist',
  checklist: [
    'Reproduce the requirement in a test or acceptance criterion.',
    'Review generated code line by line before accepting it.',
    'Check secrets, personal data, permissions, and external input handling.',
    'Run tests and security tools; investigate warnings instead of suppressing them.',
    'Record a human reviewer and why the change is safe to ship.',
  ],
  referencesTitle: 'Official references',
  references: [
    {
      label: 'GH-300 study guide',
      href: 'https://learn.microsoft.com/en-us/credentials/certifications/resources/study-guides/gh-300',
    },
    {
      label: 'Responsible AI with GitHub Copilot',
      href: 'https://learn.microsoft.com/en-us/training/modules/responsible-ai-with-github-copilot/',
    },
    {
      label: 'GitHub Copilot documentation',
      href: 'https://docs.github.com/en/copilot',
    },
    { label: 'GitHub Trust Center', href: 'https://github.com/trust-center' },
  ],
  tocTitle: 'On this page',
  toc: [
    { label: 'Objectives', href: '#objectives' },
    { label: 'Official exam coverage', href: '#official-exam-coverage' },
    { label: 'Study notes', href: '#study-notes' },
    { label: 'Six principles', href: '#six-principles' },
    { label: 'Match a harm to a mitigation', href: '#harm-to-mitigation' },
    { label: 'Practice checklist', href: '#practice-checklist' },
    { label: 'Official references', href: '#official-references' },
  ],
  infoTitle: 'Domain information',
  examWeight: 'Exam weight',
  level: 'Level',
  time: 'Estimated time',
  type: 'Type',
  tipTitle: 'Study tip',
  tip: 'Focus on validating results, recognising risks, and applying security best practices.',
  resourceTitle: 'Related resource',
  resourceType: 'Practice lab',
  resourceBody: 'Put the ideas into practice in a guided scenario.',
  resourceButton: 'Open the lab',
  previous: 'Previous',
  previousLink: 'Official GH-300 domains',
  next: 'Next',
  nextLink: 'Use GitHub Copilot features',
  examWeightValue: '15–20%',
  levelValue: 'Intermediate',
  timeValue: '~ 20 min',
  typeValue: 'GH-300 domain',
}

const french: PageCopy = {
  title: 'Utiliser GitHub Copilot de manière responsable',
  breadcrumbHome: 'Guide d’étude GH-300',
  breadcrumb: 'Utiliser GitHub Copilot de manière responsable',
  summary:
    'Ce domaine représente 15 à 20 % de l’examen GH-300. Il faut reconnaître les risques, exercer son jugement humain et valider chaque modification assistée par l’IA avant sa livraison.',
  objectivesTitle: 'Objectifs',
  objectives: [
    'Décrire les risques et les limites des outils d’IA générative.',
    'Décrire une utilisation éthique et responsable de l’IA.',
    'Identifier les préjudices possibles et les mesures d’atténuation.',
    'Expliquer pourquoi les résultats de l’IA doivent être validés.',
    'Identifier comment utiliser GitHub Copilot de manière responsable.',
  ],
  coverageTitle: 'Couverture officielle de l’examen',
  coverageIntro:
    'Le guide d’étude Microsoft place ce domaine dans deux groupes de compétences. Le tableau relie chaque objectif officiel aux notes ci-dessous.',
  coverageRows: [
    {
      objective: 'Décrire les risques et les limites des outils d’IA générative',
      section: 'Risques et limites',
      href: '#risques-et-limites',
    },
    {
      objective: 'Décrire une utilisation éthique et responsable de l’IA',
      section: 'Principes d’IA responsable',
      href: '#principes-dia-responsable',
    },
    {
      objective: 'Identifier les préjudices possibles et les mesures d’atténuation',
      section: 'Relier un préjudice à une atténuation',
      href: '#prejudice-et-attenuation',
    },
    {
      objective: 'Expliquer pourquoi les résultats de l’IA doivent être validés',
      section: 'Valider avant d’accepter',
      href: '#valider-avant-daccepter',
    },
    {
      objective: 'Identifier comment utiliser GitHub Copilot de manière responsable',
      section: 'Workflow d’utilisation responsable',
      href: '#workflow-utilisation-responsable',
    },
  ],
  notesTitle: 'Notes d’étude',
  notes: [
    {
      id: 'risques-et-limites',
      title: 'Risques et limites',
      intro: 'Copilot produit des suggestions à partir des modèles présents dans le contexte disponible. Une suggestion peut sembler plausible tout en étant fausse, incomplète, vulnérable, biaisée ou inadaptée au projet.',
      bullets: [
        'Le modèle peut inventer une API, mal utiliser une bibliothèque ou mal comprendre une exigence.',
        'Le code peut contenir une vulnérabilité, comme une injection, une désérialisation dangereuse ou un secret codé en dur.',
        'Les modèles peuvent reproduire des pratiques anciennes, biaisées ou contraires aux standards de l’équipe.',
        'Un contexte limité peut masquer des contraintes dans d’autres fichiers, services ou règles métier.',
        'Une même requête peut produire des résultats différents : le code généré n’est pas une spécification déterministe.',
      ],
    },
    {
      id: 'principes-dia-responsable',
      title: 'Principes d’IA responsable en pratique',
      intro: 'Utilisez l’équité, la fiabilité et la sécurité, la confidentialité et la sécurité, l’inclusion, la transparence et la responsabilité comme grille de revue. Dans un scénario GH-300, demandez-vous :',
      questions: [
        'Qui pourrait être touché par ce résultat ?',
        'Peut-on expliquer et tester le résultat ?',
        'La modification révèle-t-elle des données personnelles, confidentielles ou propriétaires ?',
        'Qui relit et accepte la modification finale ?',
      ],
      closing: 'Le développeur et l’organisation restent responsables du logiciel livré. Copilot aide au travail, mais ne prend pas la décision.',
    },
    {
      id: 'valider-avant-daccepter',
      title: 'Valider avant d’accepter',
      intro: 'Traitez chaque suggestion comme une ébauche. Vérifiez son comportement par rapport au besoin, exécutez les tests existants, ajoutez des tests pour les nouveaux chemins, examinez la gestion des erreurs et les cas limites, puis vérifiez chaque API ou dépendance citée. Appliquez la revue de code, les contrôles de sécurité, la vérification des licences et les étapes normales de livraison.',
    },
    {
      id: 'workflow-utilisation-responsable',
      title: 'Workflow d’utilisation responsable',
      intro: 'Utilisez cette séquence lorsqu’un scénario demande comment utiliser Copilot de manière responsable :',
      steps: [
        'Définir la tâche et ses limites. Précisez le besoin, les données autorisées, les utilisateurs concernés et les critères d’acceptation avant le prompt.',
        'Choisir le contexte utile minimal. Excluez les secrets, les données personnelles et les informations propriétaires sans rapport. Respectez les politiques du dépôt et de l’organisation.',
        'Traiter la réponse comme une ébauche non fiable. Vérifiez les API, les dépendances, les hypothèses, les permissions, les erreurs et les cas limites.',
        'Valider avec des preuves. Exécutez les tests et les contrôles de sécurité et de qualité, vérifiez les licences et demandez une revue humaine ciblée.',
        'Conserver la responsabilité humaine. Notez qui a approuvé la modification, les contrôles effectués et le suivi ou le retour arrière prévu après la livraison.',
      ],
      closing: 'N’acceptez pas aveuglément une suggestion plausible et ne supposez pas qu’une politique rend le code généré correct.',
    },
  ],
  principlesTitle: 'Six principes comme grille de revue',
  principleQuestion: 'Question pour une modification assistée par Copilot',
  principles: [
    {
      name: 'Équité',
      question: 'Le code ou les données peuvent-ils défavoriser un groupe d’utilisateurs ?',
    },
    {
      name: 'Fiabilité et sécurité',
      question: 'Le résultat échoue-t-il de manière sûre et se comporte-t-il comme prévu ?',
    },
    {
      name: 'Confidentialité et sécurité',
      question: 'Les secrets, les données personnelles et les permissions sont-ils protégés ?',
    },
    {
      name: 'Inclusion',
      question: 'Des personnes aux capacités et profils différents peuvent-elles utiliser le résultat ?',
    },
    {
      name: 'Transparence',
      question: 'Un relecteur peut-il comprendre l’origine, les hypothèses et le comportement ?',
    },
    {
      name: 'Responsabilité',
      question: 'Une personne nommée est-elle responsable du changement accepté ?',
    },
  ],
  harmsTitle: 'Relier un préjudice à une atténuation',
  harmHeading: 'Préjudice possible',
  mitigationHeading: 'Atténuation utile',
  harms: [
    {
      harm: 'Logique incorrecte ou inventée',
      mitigation: 'Tests, vérification des API et revue des cas limites',
    },
    {
      harm: 'Implémentation vulnérable',
      mitigation: 'Modélisation des menaces, revue de code et analyse statique',
    },
    {
      harm: 'Donnée sensible dans le contexte',
      mitigation: 'Exclusions de contenu, détection de secrets et hygiène des prompts',
    },
    {
      harm: 'Comportement biaisé ou ancien',
      mitigation: 'Exigences inclusives, standards actuels et tests représentatifs',
    },
    {
      harm: 'Problème de licence ou d’attribution',
      mitigation: 'Filtrage du code public et revue humaine des licences',
    },
    {
      harm: 'Acceptation aveugle',
      mitigation: 'Petites différences, approbation et responsabilité explicite',
    },
  ],
  checklistTitle: 'Liste de vérification',
  checklist: [
    'Reproduisez le besoin dans un test ou un critère d’acceptation.',
    'Relisez le code généré ligne par ligne avant de l’accepter.',
    'Vérifiez les secrets, les données personnelles, les permissions et les entrées externes.',
    'Exécutez les tests et outils de sécurité ; examinez les avertissements.',
    'Identifiez le relecteur humain et la raison pour laquelle le changement est sûr.',
  ],
  referencesTitle: 'Références officielles',
  references: [
    {
      label: 'Guide d’étude GH-300',
      href: 'https://learn.microsoft.com/fr-fr/credentials/certifications/resources/study-guides/gh-300',
    },
    {
      label: 'IA responsable avec GitHub Copilot',
      href: 'https://learn.microsoft.com/en-us/training/modules/responsible-ai-with-github-copilot/',
    },
    {
      label: 'Documentation GitHub Copilot',
      href: 'https://docs.github.com/fr/copilot',
    },
    { label: 'GitHub Trust Center', href: 'https://github.com/trust-center' },
  ],
  tocTitle: 'Sur cette page',
  toc: [
    { label: 'Objectifs', href: '#objectifs' },
    { label: 'Couverture officielle', href: '#couverture-officielle' },
    { label: 'Notes d’étude', href: '#notes-detude' },
    { label: 'Six principes', href: '#six-principes' },
    {
      label: 'Relier préjudice et atténuation',
      href: '#prejudice-et-attenuation',
    },
    { label: 'Liste de vérification', href: '#liste-de-verification' },
    { label: 'Références officielles', href: '#references-officielles' },
  ],
  infoTitle: 'Infos du domaine',
  examWeight: 'Poids dans l’examen',
  level: 'Niveau',
  time: 'Temps estimé',
  type: 'Type',
  tipTitle: 'Conseil',
  tip: 'Concentrez-vous sur la validation des résultats, la reconnaissance des risques et les bonnes pratiques de sécurité.',
  resourceTitle: 'Ressource associée',
  resourceType: 'Atelier pratique',
  resourceBody: 'Mettez ces notions en pratique dans un scénario guidé.',
  resourceButton: 'Accéder à l’atelier',
  previous: 'Précédent',
  previousLink: 'Domaines officiels GH-300',
  next: 'Suivant',
  nextLink: 'Utiliser les fonctionnalités de GitHub Copilot',
  examWeightValue: '15–20 %',
  levelValue: 'Intermédiaire',
  timeValue: '~ 20 min',
  typeValue: 'Domaine GH-300',
}

const { page } = useData()
const isFrench = computed(() => page.value.relativePath.startsWith('fr/'))
const copy = computed(() => (isFrench.value ? french : english))
const homeLink = computed(() => withBase(isFrench.value ? '/fr/' : '/'))
const nextLink = computed(() => withBase(isFrench.value ? '/fr/copilot-features/' : '/copilot-features/'))
const labLink = computed(() => withBase(isFrench.value ? '/fr/labs/' : '/labs/'))
const activeSection = ref('#objectives')
let sectionObserver: IntersectionObserver | undefined

onMounted(() => {
  if (!('IntersectionObserver' in window)) return

  sectionObserver = new IntersectionObserver(
    entries => {
      const active = entries
        .filter(entry => entry.isIntersecting)
        .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top)[0]

      if (active) activeSection.value = `#${active.target.id}`
    },
    { rootMargin: '-18% 0px -70% 0px', threshold: 0 },
  )

  for (const item of copy.value.toc) {
    const section = document.querySelector(item.href)
    if (section) sectionObserver.observe(section)
  }
})

onBeforeUnmount(() => sectionObserver?.disconnect())
</script>

<template>
  <div class="responsible-page" :lang="isFrench ? 'fr' : 'en'">
    <nav class="study-breadcrumb" :aria-label="isFrench ? 'Fil d’Ariane' : 'Breadcrumb'">
      <a :href="homeLink" aria-label="Home">⌂</a>
      <span aria-hidden="true">›</span>
      <a :href="homeLink">{{ copy.breadcrumbHome }}</a>
      <span aria-hidden="true">›</span>
      <span aria-current="page">{{ copy.breadcrumb }}</span>
    </nav>

    <div class="responsible-layout">
      <main class="responsible-main">
        <header class="domain-hero">
          <div class="hero-code-icon" aria-hidden="true">&lt;/&gt;</div>
          <div class="hero-copy">
            <div class="hero-eyebrow">{{ copy.breadcrumbHome }}</div>
            <h1>{{ copy.title }}</h1>
            <p>{{ copy.summary }}</p>
            <div class="domain-badges" aria-label="Domain details">
              <span><b aria-hidden="true">◎</b>{{ copy.examWeightValue }}</span>
              <span><b aria-hidden="true">▥</b>{{ copy.levelValue }}</span>
              <span><b aria-hidden="true">◷</b>{{ copy.timeValue }}</span>
            </div>
          </div>
          <img
            class="hero-art"
            :src="withBase('/assets/images/gh300/gh300-study-hero.png')"
            alt=""
            loading="lazy"
          />
        </header>

        <section class="study-card objectives-card" id="objectives">
          <h2><span class="section-icon" aria-hidden="true">◎</span>{{ copy.objectivesTitle }}</h2>
          <ul class="objective-list">
            <li v-for="objective in copy.objectives" :key="objective">
              <span aria-hidden="true">✓</span>{{ objective }}
            </li>
          </ul>
        </section>

        <section
          class="study-card coverage-card"
          :id="isFrench ? 'couverture-officielle' : 'official-exam-coverage'"
        >
          <h2><span class="section-icon" aria-hidden="true">▤</span>{{ copy.coverageTitle }}</h2>
          <p class="card-intro">{{ copy.coverageIntro }}</p>
          <div class="table-scroll">
            <table>
              <thead>
                <tr>
                  <th>{{ isFrench ? 'Objectif officiel' : 'Official objective' }}</th>
                  <th>{{ isFrench ? 'Où réviser' : 'Where to revise it' }}</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="row in copy.coverageRows" :key="row.objective">
                  <td>{{ row.objective }}</td>
                  <td><a :href="row.href"><span aria-hidden="true">↗</span>{{ row.section }}</a></td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        <section
          class="study-card notes-card"
          :id="isFrench ? 'notes-detude' : 'study-notes'"
        >
          <h2><span class="section-icon" aria-hidden="true">▣</span>{{ copy.notesTitle }}</h2>
          <div class="note-accordions">
            <details
              v-for="(note, index) in copy.notes"
              :key="note.id"
              class="study-accordion"
              :id="`accordion-${note.id}`"
            >
              <summary>
                <span class="note-number">{{ index + 1 }}</span>
                <span>{{ note.title }}</span>
                <span class="accordion-chevron" aria-hidden="true">⌄</span>
              </summary>
              <div class="note-body">
                <p v-if="note.intro">{{ note.intro }}</p>
                <ul v-if="note.bullets">
                  <li v-for="item in note.bullets" :key="item">{{ item }}</li>
                </ul>
                <ol v-if="note.questions">
                  <li v-for="item in note.questions" :key="item">{{ item }}</li>
                </ol>
                <ol v-if="note.steps">
                  <li v-for="item in note.steps" :key="item">{{ item }}</li>
                </ol>
                <p v-if="note.closing">{{ note.closing }}</p>
              </div>
            </details>
          </div>
        </section>

        <div class="study-pair">
          <section
            class="study-card table-card"
            :id="isFrench ? 'six-principes' : 'six-principles'"
          >
            <h2><span class="section-icon" aria-hidden="true">▱</span>{{ copy.principlesTitle }}</h2>
            <div class="table-scroll">
              <table>
                <thead>
                  <tr>
                    <th>{{ isFrench ? 'Principe' : 'Principle' }}</th>
                    <th>{{ copy.principleQuestion }}</th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="principle in copy.principles" :key="principle.name">
                    <td>{{ principle.name }}</td>
                    <td>{{ principle.question }}</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          <section
            class="study-card table-card"
            :id="isFrench ? 'prejudice-et-attenuation' : 'harm-to-mitigation'"
          >
            <h2><span class="section-icon green-icon" aria-hidden="true">⬡</span>{{ copy.harmsTitle }}</h2>
            <div class="table-scroll">
              <table>
                <thead>
                  <tr>
                    <th>{{ copy.harmHeading }}</th>
                    <th>{{ copy.mitigationHeading }}</th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="item in copy.harms" :key="item.harm">
                    <td>{{ item.harm }}</td>
                    <td>{{ item.mitigation }}</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>
        </div>

        <div class="study-pair lower-pair">
          <section
            class="study-card checklist-card"
            :id="isFrench ? 'liste-de-verification' : 'practice-checklist'"
          >
            <h2><span class="section-icon green-icon" aria-hidden="true">☑</span>{{ copy.checklistTitle }}</h2>
            <ul class="checklist">
              <li v-for="item in copy.checklist" :key="item">
                <label><input type="checkbox" /><span>{{ item }}</span></label>
              </li>
            </ul>
          </section>

          <section
            class="study-card references-card"
            :id="isFrench ? 'references-officielles' : 'official-references'"
          >
            <h2><span class="section-icon" aria-hidden="true">↗</span>{{ copy.referencesTitle }}</h2>
            <ul class="reference-list">
              <li v-for="reference in copy.references" :key="reference.href">
                <a :href="reference.href" target="_blank" rel="noopener noreferrer">
                  <span aria-hidden="true">↗</span>{{ reference.label }}
                </a>
              </li>
            </ul>
          </section>
        </div>

        <nav class="page-navigation" :aria-label="isFrench ? 'Navigation entre les pages' : 'Page navigation'">
          <a class="page-nav-link previous-link" :href="homeLink">
            <span class="page-nav-arrow" aria-hidden="true">←</span>
            <span><small>{{ copy.previous }}</small><strong>{{ copy.previousLink }}</strong></span>
          </a>
          <a class="page-nav-link next-link" :href="nextLink">
            <span><small>{{ copy.next }}</small><strong>{{ copy.nextLink }}</strong></span>
            <span class="page-nav-arrow" aria-hidden="true">→</span>
          </a>
        </nav>
      </main>

      <aside class="study-rail">
        <nav class="study-card toc-card" :aria-label="copy.tocTitle">
          <h2>
            <span class="rail-icon" aria-hidden="true">☷</span>
            {{ copy.tocTitle }}
          </h2>
          <ul>
            <li v-for="item in copy.toc" :key="item.href" :class="{ active: activeSection === item.href }">
              <a :href="item.href"><span aria-hidden="true">▪</span>{{ item.label }}</a>
            </li>
          </ul>
        </nav>

        <section class="study-card info-card">
          <h2>
            <span class="rail-icon" aria-hidden="true">ⓘ</span>
            {{ copy.infoTitle }}
          </h2>
          <dl>
            <div>
              <dt>{{ copy.examWeight }}</dt>
              <dd>{{ copy.examWeightValue }}</dd>
            </div>
            <div>
              <dt>{{ copy.level }}</dt>
              <dd>{{ copy.levelValue }}</dd>
            </div>
            <div>
              <dt>{{ copy.time }}</dt>
              <dd>{{ copy.timeValue }}</dd>
            </div>
            <div>
              <dt>{{ copy.type }}</dt>
              <dd>{{ copy.typeValue }}</dd>
            </div>
          </dl>
        </section>

        <section class="study-card tip-card">
          <h2>
            <span class="rail-icon" aria-hidden="true">♧</span>
            {{ copy.tipTitle }}
          </h2>
          <p>{{ copy.tip }}</p>
        </section>

        <section class="study-card resource-card">
          <h2>
            <span class="rail-icon" aria-hidden="true">♧</span>
            {{ copy.resourceTitle }}
          </h2>
          <div class="resource-type">
            <span aria-hidden="true">♧</span>
            <strong>{{ copy.resourceType }}</strong>
          </div>
          <p>{{ copy.resourceBody }}</p>
          <a class="resource-button" :href="labLink">{{ copy.resourceButton }} <span aria-hidden="true">→</span></a>
        </section>
      </aside>
    </div>
  </div>
</template>
