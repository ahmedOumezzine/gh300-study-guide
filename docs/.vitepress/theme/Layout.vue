<script setup lang="ts">
import { computed } from 'vue'
import { useData } from 'vitepress'
import DefaultTheme from 'vitepress/theme'
import StudyDocHeader from './components/StudyDocHeader.vue'
import StudyDocRail from './components/StudyDocRail.vue'

const { page, frontmatter } = useData()

const isStudyPage = computed(() => {
  const relativePath = page.value.relativePath.replace(/\\/g, '/')
  const segments = relativePath.split('/').filter(Boolean)
  const slug = segments[0] === 'fr' ? segments[1] : segments[0]

  return Boolean(
    slug &&
      slug !== 'index' &&
      slug !== 'responsible-ai' &&
      frontmatter.value.layout !== 'home' &&
      frontmatter.value.layout !== false,
  )
})
</script>

<template>
  <DefaultTheme.Layout>
    <template #doc-before>
      <StudyDocHeader v-if="isStudyPage" />
    </template>
    <template #aside-outline-after>
      <StudyDocRail v-if="isStudyPage" />
    </template>
    <template #doc-after>
      <StudyDocRail v-if="isStudyPage" mobile />
    </template>
  </DefaultTheme.Layout>
</template>
