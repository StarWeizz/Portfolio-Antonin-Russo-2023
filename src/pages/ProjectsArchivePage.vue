<script setup>
import { ref, computed } from 'vue'
import { RouterLink } from 'vue-router'
import { projects, statusColors } from '../data/projects.js'
import Navbar from '../components/Navbar.vue'
import Footer from '../components/Footer.vue'

const allTags = computed(() => {
  const set = new Set()
  projects.forEach(p => p.tags.forEach(tag => set.add(tag)))
  return ['Tous', ...Array.from(set).sort()]
})

const activeTag = ref('Tous')

const filtered = computed(() =>
  activeTag.value === 'Tous'
    ? projects
    : projects.filter(p => p.tags.includes(activeTag.value))
)

const getStatus = (p) => statusColors[p.statusColor] || statusColors.blue
</script>

<template>
  <Navbar />
  <main class="max-w-screen-xl mx-auto px-8 md:px-11 py-16">

    <div class="flex items-center gap-3 mb-3">
      <RouterLink to="/" class="font-figtree text-[12px] text-[#aaa] no-underline hover:text-[#4a6fa5] transition-colors">
        Accueil
      </RouterLink>
      <span class="text-[#e3e3e3]">/</span>
      <span class="font-figtree text-[12px] text-[#888]">Tous les projets</span>
    </div>

    <h1 class="font-syne font-extrabold text-[40px] tracking-[-2px] text-[#0e0e0e] mb-8">Tous les projets</h1>

    <div class="flex flex-wrap gap-2 mb-10">
      <button v-for="tag in allTags.slice(0, 20)" :key="tag"
              @click="activeTag = tag"
              class="font-syne text-[10px] font-bold px-3 py-[6px] rounded-full border transition-all duration-200"
              :class="activeTag === tag
                ? 'bg-[#0e0e0e] text-white border-[#0e0e0e]'
                : 'bg-white text-[#888] border-[#e3e3e3] hover:border-[#4a6fa5] hover:text-[#4a6fa5]'">
        {{ tag }}
      </button>
    </div>

    <div class="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4">
      <RouterLink v-for="project in filtered" :key="project.slug"
                  :to="`/projects/${project.slug}`"
                  class="group bg-white border border-[#e3e3e3] rounded-xl p-4 no-underline transition-all duration-200 hover:border-[#4a6fa5] hover:shadow-md">
        <div class="flex items-start justify-between mb-2">
          <span class="font-syne font-bold text-[13px] text-[#0e0e0e] leading-tight">{{ project.name }}</span>
          <span class="font-figtree text-[9px] font-semibold px-2 py-[2px] rounded-full flex-shrink-0 ml-2"
                :style="`background: ${getStatus(project).bg}; color: ${getStatus(project).text}`">
            {{ project.status }}
          </span>
        </div>
        <p class="font-figtree text-[11px] text-[#aaa] mb-3 leading-[1.5] line-clamp-2">{{ project.summary }}</p>
        <div class="flex flex-wrap gap-1">
          <span v-for="tag in project.tags.slice(0, 4)" :key="tag"
                class="font-figtree text-[9px] font-semibold text-[#888] bg-[#f4f4f4] border border-[#ebebeb] rounded px-[6px] py-[2px]">
            {{ tag }}
          </span>
        </div>
      </RouterLink>
    </div>

  </main>
  <Footer />
</template>
