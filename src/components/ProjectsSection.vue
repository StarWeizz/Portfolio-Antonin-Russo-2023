<script setup>
import { onMounted } from 'vue'
import { RouterLink } from 'vue-router'
import { featuredProjects } from '../data/projects.js'

const statusColors = {
  green:  '#16a34a',
  blue:   '#3b82f6',
  orange: '#f97316',
  red:    '#ef4444',
}

onMounted(() => {
  const observer = new IntersectionObserver(
    entries => entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible') }),
    { threshold: 0.05 }
  )
  document.querySelectorAll('#projects .fade-up').forEach(el => observer.observe(el))
})
</script>

<template>
  <section id="projects" class="border-t border-[#e2e8f0] px-8 md:px-14 lg:px-16 py-16 max-w-screen-lg mx-auto">

    <div class="fade-up flex items-baseline justify-between mb-8">
      <div>
        <h2 class="text-[26px] font-extrabold tracking-[-0.8px] text-[#0f172a]">Projets</h2>
        <p class="text-[12px] text-[#94a3b8] mt-1">Sélection de réalisations</p>
      </div>
      <RouterLink to="/projects"
        class="text-[12px] font-semibold text-[#4a6fa5] no-underline flex items-center gap-[5px] hover:text-[#0f172a] transition-colors duration-150">
        Voir tout
        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
          <path d="M5 12h14M12 5l7 7-7 7"/>
        </svg>
      </RouterLink>
    </div>

    <div class="fade-up">
      <RouterLink
        v-for="project in featuredProjects"
        :key="project.slug"
        :to="`/projects/${project.slug}`"
        class="group block py-5 border-b border-[#f1f5f9] first:border-t first:border-[#f1f5f9] no-underline hover:bg-[#fafbfd] -mx-3 px-3 transition-colors duration-150 rounded-[3px]">

        <div class="flex items-baseline justify-between gap-4 mb-[5px]">
          <div class="flex items-center gap-[10px]">
            <span class="text-[14px] font-semibold text-[#0f172a] group-hover:text-[#4a6fa5] transition-colors duration-150">
              {{ project.name }}
            </span>
            <span class="text-[10px] font-semibold text-[#4a6fa5] bg-[#eff6ff] px-2 py-[2px] rounded-[3px]">
              {{ project.type }}
            </span>
          </div>
          <span class="text-[11px] text-[#cbd5e1] whitespace-nowrap flex-shrink-0">{{ project.year }}</span>
        </div>

        <p class="text-[13px] text-[#475569] leading-[1.6] mb-[10px]">{{ project.summary }}</p>

        <div class="flex flex-wrap gap-[5px]">
          <span v-for="tag in project.tags" :key="tag"
                class="text-[10px] font-medium text-[#64748b] bg-[#f8fafc] border border-[#e2e8f0] px-[7px] py-[2px] rounded-[3px]">
            {{ tag }}
          </span>
        </div>

      </RouterLink>
    </div>

  </section>
</template>
