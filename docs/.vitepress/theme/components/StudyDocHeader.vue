<script setup lang="ts">
import { computed } from 'vue'
import { useData, withBase } from 'vitepress'
import { getStudyPageMeta } from './studyPageData'

const { page, frontmatter } = useData()
const locale = computed<'en' | 'fr'>(() =>
  page.value.relativePath.startsWith('fr/') ? 'fr' : 'en',
)
const meta = computed(() => getStudyPageMeta(page.value.relativePath, locale.value))
const title = computed(() => String(frontmatter.value.title || page.value.title || 'GH-300 Study Guide'))
const homeLink = computed(() => withBase(locale.value === 'fr' ? '/fr/' : '/'))
</script>

<template>
  <div class="study-page-header" :lang="locale">
    <nav
      class="study-breadcrumb"
      :aria-label="locale === 'fr' ? 'Fil d'Ariane' : 'Breadcrumb'"
    >
      <a :href="homeLink" :aria-label="locale === 'fr' ? 'Accueil' : 'Home'">⌂</a>
      <span aria-hidden="true">›</span>
      <a :href="homeLink">
        {{ locale === 'fr' ? 'Guide d’étude GH-300' : 'GH-300 Study Guide' }}
      </a>
      <span aria-hidden="true">›</span>
      <span aria-current="page">{{ title }}</span>
    </nav>

    <header class="study-page-hero">
      <div class="study-hero-icon" aria-hidden="true">{{ meta.icon }}</div>
      <div class="study-hero-copy">
        <div class="study-hero-eyebrow">
          {{ locale === 'fr' ? 'Guide d’étude GH-300' : 'GH-300 Study Guide' }}
        </div>
        <h1>{{ title }}</h1>
        <p>{{ meta.summary }}</p>
        <div class="study-hero-badges">
          <span><b aria-hidden="true">◎</b>{{ meta.weightLabel }}: {{ meta.weight }}</span>
          <span><b aria-hidden="true">▥</b>{{ meta.level }}</span>
          <span>
            <b aria-hidden="true">◷</b>
            {{ locale === 'fr' ? 'Temps estimé' : 'Estimated time' }}: {{ meta.time }}
          </span>
        </div>
      </div>
      <img
        class="study-hero-art"
        :src="withBase('/assets/images/gh300/gh300-study-hero.png')"
        alt=""
        loading="lazy"
      />
    </header>
  </div>
</template>
