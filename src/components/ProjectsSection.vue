<script setup>
import { useI18n } from 'vue-i18n'
import { RouterLink } from 'vue-router'
import { featuredProjects } from '../data/projects.js'
import ProjectCard from './ProjectCard.vue'

const { t } = useI18n()
</script>

<template>
  <section id="projects" class="border-t border-[#e3e3e3] px-8 md:px-14 lg:px-16 py-20 max-w-screen-xl mx-auto">

    <div class="flex items-end justify-between mb-10">
      <div>
        <div class="font-syne text-[11px] font-bold tracking-[2.5px] uppercase text-[#F4500A] mb-3">{{ t('projects.label') }}</div>
        <div class="font-syne font-extrabold text-[42px] tracking-[-1.5px] text-[#0e0e0e] leading-none">
          {{ t('projects.title') }} <em class="not-italic font-bold text-[#bbb]">{{ t('projects.title_em') }}</em>
        </div>
      </div>
      <RouterLink to="/projects"
         class="font-syne text-[12px] font-bold tracking-[0.4px] text-[#0e0e0e] border-[1.5px] border-[#e3e3e3] rounded-full px-5 py-[10px] no-underline flex items-center gap-2 transition-colors duration-200 hover:border-[#F4500A] hover:text-[#F4500A] whitespace-nowrap self-center group">
        {{ t('projects.all') }}
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" class="transition-transform duration-[250ms] group-hover:translate-x-[3px]"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
      </RouterLink>
    </div>

    <div class="grid grid-cols-1 md:grid-cols-3 gap-5">
      <ProjectCard v-for="(project, i) in featuredProjects" :key="project.slug"
                   :project="project"
                   :featured="i === 0"
                   :style="`animation: fadeUp .5s ${i * 80 + 200}ms ease both`" />
    </div>

  </section>
</template>

<style scoped>
@keyframes fadeUp {
  from { opacity: 0; transform: translateY(20px); }
  to   { opacity: 1; transform: translateY(0); }
}
</style>
