<script setup lang="ts">
import { computed } from 'vue'
import { useData, withBase } from 'vitepress'
import { getStudyPageMeta } from './studyPageData'

const props = defineProps<{ mobile?: boolean }>()
const { page } = useData()
const locale = computed(() => (page.value.relativePath.startsWith('fr/') ? 'fr' : 'en') as 'en' | 'fr')
const meta = computed(() => getStudyPageMeta(page.value.relativePath, locale.value))
const resourceHref = computed(() => withBase(meta.value.resourcePath))
</script>

<template>
  <div class="study-doc-rail" :class="{ 'study-doc-rail-mobile': props.mobile }" :lang="locale">
    <section class="study-card study-info-card">
      <h2><span class="rail-icon" aria-hidden="true">ⓘ</span>{{ locale === 'fr' ? 'Infos de la page' : 'Page information' }}</h2>
      <dl>
        <div><dt>{{ meta.weightLabel }}</dt><dd>{{ meta.weight }}</dd></div>
        <div><dt>{{ locale === 'fr' ? 'Niveau' : 'Level' }}</dt><dd>{{ meta.level }}</dd></div>
        <div><dt>{{ locale === 'fr' ? 'Temps estimé' : 'Estimated time' }}</dt><dd>{{ meta.time }}</dd></div>
        <div><dt>{{ locale === 'fr' ? 'Type' : 'Type' }}</dt><dd>{{ meta.type }}</dd></div>
      </dl>
    </section>

    <section class="study-card study-tip-card">
      <h2><span class="rail-icon" aria-hidden="true">♧</span>{{ meta.tipTitle }}</h2>
      <p>{{ meta.tip }}</p>
    </section>

    <section class="study-card study-resource-card">
      <h2><span class="rail-icon" aria-hidden="true">♧</span>{{ meta.resourceTitle }}</h2>
      <div class="resource-type"><span aria-hidden="true">♧</span><strong>{{ meta.resourceKind }}</strong></div>
      <p>{{ meta.resourceText }}</p>
      <a class="resource-button" :href="resourceHref">
        {{ meta.resourceButton }} <span aria-hidden="true">→</span>
      </a>
    </section>
  </div>
</template>
