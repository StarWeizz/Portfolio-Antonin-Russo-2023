<script setup>
import { computed } from 'vue'
import { useRoute, RouterLink } from 'vue-router'
import { useI18n } from 'vue-i18n'
import { getProjectBySlug, projects, statusColors } from '../data/projects.js'
import Navbar from '../components/Navbar.vue'
import Footer from '../components/Footer.vue'

const { t } = useI18n()
const route = useRoute()

const project = computed(() => getProjectBySlug(route.params.slug))
const status  = computed(() => project.value ? (statusColors[project.value.statusColor] || statusColors.blue) : null)

const currentIndex = computed(() => projects.findIndex(p => p.slug === route.params.slug))
const prevProject  = computed(() => currentIndex.value > 0 ? projects[currentIndex.value - 1] : null)
const nextProject  = computed(() => currentIndex.value < projects.length - 1 ? projects[currentIndex.value + 1] : null)
</script>

<template>
  <Navbar />

  <div v-if="!project" class="max-w-screen-xl mx-auto px-8 md:px-11 py-32 text-center">
    <div class="font-syne font-bold text-[24px] text-[#0e0e0e] mb-4">Projet introuvable</div>
    <RouterLink to="/projects" class="font-figtree text-[#F4500A] no-underline">{{ t('detail.back') }}</RouterLink>
  </div>

  <main v-else class="max-w-screen-xl mx-auto px-8 md:px-11">

    <div class="flex items-center gap-3 pt-10 mb-8">
      <RouterLink to="/projects" class="font-figtree text-[12px] text-[#aaa] no-underline hover:text-[#F4500A] transition-colors">{{ t('detail.back') }}</RouterLink>
      <span class="text-[#e3e3e3]">/</span>
      <span class="font-figtree text-[12px] text-[#888]">{{ project.name }}</span>
    </div>

    <div class="mb-12">
      <div class="flex items-start justify-between gap-4 flex-wrap">
        <div>
          <span class="font-figtree text-[10px] font-semibold text-[#F4500A] uppercase tracking-[1px]">{{ project.type }}</span>
          <h1 class="font-syne font-extrabold text-[42px] tracking-[-2px] text-[#0e0e0e] leading-none mt-1 mb-3">{{ project.name }}</h1>
          <div class="flex items-center gap-3">
            <span class="font-figtree text-[12px] text-[#aaa]">{{ project.date }}</span>
            <span class="font-figtree text-[10px] font-semibold px-2.5 py-1 rounded-full"
                  :style="`background: ${status.bg}; color: ${status.text}`">{{ project.status }}</span>
          </div>
        </div>
        <div class="flex gap-3">
          <a v-if="project.github" :href="project.github" target="_blank"
             class="btn-ripple font-syne text-[11px] font-bold bg-[#0e0e0e] text-white px-4 py-2.5 rounded-lg flex items-center gap-2 no-underline">
            <div class="ripple-bg" />
            <span>{{ t('detail.github') }}</span>
          </a>
          <a v-if="project.live" :href="project.live" target="_blank"
             class="font-syne text-[11px] font-bold border border-[#e3e3e3] text-[#0e0e0e] px-4 py-2.5 rounded-lg flex items-center gap-2 no-underline hover:border-[#F4500A] hover:text-[#F4500A] transition-colors">
            {{ t('detail.live') }}
            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>
          </a>
        </div>
      </div>

      <div class="flex flex-wrap gap-2 mt-5">
        <span v-for="tag in project.tags" :key="tag"
              class="font-figtree text-[10px] font-semibold text-[#666] bg-[#f4f4f4] border border-[#ebebeb] rounded-md px-2.5 py-1">
          {{ tag }}
        </span>
      </div>
    </div>

    <div class="grid grid-cols-1 md:grid-cols-[1fr_320px] gap-12 mb-16">
      <div class="space-y-10">

        <div v-if="project.problem">
          <h2 class="font-syne font-bold text-[18px] tracking-[-0.4px] text-[#0e0e0e] mb-3 flex items-center gap-3">
            <span class="w-1 h-5 bg-[#F4500A] rounded-full" />
            {{ t('detail.context') }}
          </h2>
          <p class="font-figtree text-[14px] text-[#555] leading-[1.8]">{{ project.problem }}</p>
        </div>

        <div v-if="project.solution">
          <h2 class="font-syne font-bold text-[18px] tracking-[-0.4px] text-[#0e0e0e] mb-3 flex items-center gap-3">
            <span class="w-1 h-5 bg-[#F4500A] rounded-full" />
            {{ t('detail.solution') }}
          </h2>
          <p class="font-figtree text-[14px] text-[#555] leading-[1.8]">{{ project.solution }}</p>
        </div>

        <div v-if="project.results">
          <h2 class="font-syne font-bold text-[18px] tracking-[-0.4px] text-[#0e0e0e] mb-3 flex items-center gap-3">
            <span class="w-1 h-5 bg-[#F4500A] rounded-full" />
            {{ t('detail.results') }}
          </h2>
          <p class="font-figtree text-[14px] text-[#555] leading-[1.8]">{{ project.results }}</p>
        </div>

      </div>

      <div class="self-start sticky top-[90px]">
        <div class="bg-white border border-[#e3e3e3] rounded-xl p-5">
          <div class="font-syne text-[10px] font-bold tracking-[1.5px] uppercase text-[#F4500A] mb-4">{{ t('detail.stack') }}</div>
          <div class="flex flex-wrap gap-2">
            <span v-for="tag in project.tags" :key="tag"
                  class="font-figtree text-[10px] font-semibold text-[#666] bg-[#f4f4f4] border border-[#ebebeb] rounded-md px-2.5 py-1">
              {{ tag }}
            </span>
          </div>
        </div>
      </div>
    </div>

    <div class="border-t border-[#e3e3e3] py-8 flex items-center justify-between">
      <RouterLink v-if="prevProject" :to="`/projects/${prevProject.slug}`"
                  class="font-syne text-[12px] font-bold text-[#888] no-underline flex items-center gap-2 hover:text-[#F4500A] transition-colors group">
        <svg class="transition-transform group-hover:-translate-x-[3px]" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M19 12H5M12 19l-7-7 7-7"/></svg>
        {{ prevProject.name }}
      </RouterLink>
      <span v-else />
      <RouterLink v-if="nextProject" :to="`/projects/${nextProject.slug}`"
                  class="font-syne text-[12px] font-bold text-[#888] no-underline flex items-center gap-2 hover:text-[#F4500A] transition-colors group">
        {{ nextProject.name }}
        <svg class="transition-transform group-hover:translate-x-[3px]" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
      </RouterLink>
    </div>

  </main>
  <Footer />
</template>
