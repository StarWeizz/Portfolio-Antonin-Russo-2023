<script setup>
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'
import { RouterLink } from 'vue-router'
import { statusColors } from '../data/projects.js'

const props = defineProps({
  project: { type: Object, required: true },
  featured: { type: Boolean, default: false },
})

const { t } = useI18n()
const status = computed(() => statusColors[props.project.statusColor] || statusColors.blue)
</script>

<template>
  <RouterLink :to="`/projects/${project.slug}`"
     class="group bg-white border border-[#e3e3e3] rounded-[14px] overflow-hidden no-underline block transition-all duration-[250ms] ease-[cubic-bezier(.16,1,.3,1)] hover:-translate-y-[6px] hover:shadow-[0_16px_48px_rgba(0,0,0,.1)]"
     :class="{ 'md:col-span-2': featured }">

    <div class="relative overflow-hidden" :class="featured ? 'h-[260px]' : 'h-[190px]'">
      <img v-if="project.images && project.images[0]"
           :src="project.images[0]" :alt="project.name"
           class="w-full h-full object-cover transition-transform duration-400 group-hover:scale-[1.04]" />
      <div v-else class="w-full h-full bg-gradient-to-br from-[#f0ede8] to-[#e8e0d8] flex items-center justify-center">
        <span class="font-syne font-bold text-[40px] text-[#F4500A]/20">{{ project.name.charAt(0) }}</span>
      </div>
      <div class="absolute inset-0 bg-[#0e0e0e]/45 opacity-0 group-hover:opacity-100 transition-opacity duration-250 flex items-center justify-center">
        <div class="w-11 h-11 rounded-full bg-[#F4500A] flex items-center justify-center scale-[0.7] opacity-0 group-hover:opacity-100 group-hover:scale-100 transition-all duration-300 ease-[cubic-bezier(.16,1,.3,1)]">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2.5"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
        </div>
      </div>
      <span class="absolute top-3 left-3 font-syne text-[10px] font-bold tracking-[0.8px] uppercase px-3 py-1.5 rounded-full bg-white/90 text-[#0e0e0e] backdrop-blur-sm">
        {{ project.type }}
      </span>
    </div>

    <div class="p-6" :class="{ 'p-7': featured }">
      <div class="font-figtree text-[11px] font-medium text-[#bbb] tracking-[0.3px] mb-1.5">{{ project.date }}</div>
      <div class="font-syne font-extrabold text-[#0e0e0e] mb-2.5 tracking-[-0.4px] leading-[1.2]"
           :class="featured ? 'text-[21px]' : 'text-[17px]'">
        {{ project.name }}
      </div>
      <p class="font-figtree text-[13px] text-[#888] leading-[1.65] mb-4">{{ project.summary }}</p>

      <div class="flex flex-wrap gap-[5px] mb-4">
        <span v-for="tag in project.tags.slice(0, 5)" :key="tag"
              class="font-figtree text-[10px] font-semibold text-[#666] bg-[#f4f4f4] border border-[#ebebeb] rounded px-[8px] py-[4px]">
          {{ tag }}
        </span>
      </div>

      <div class="flex items-center justify-between border-t border-[#f2f2f2] pt-3.5">
        <span class="font-syne text-[12px] font-bold text-[#F4500A] flex items-center gap-[5px] transition-[gap] duration-200 group-hover:gap-[9px]">
          {{ t('projects.case_study') }}
          <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
        </span>
        <span class="font-figtree text-[10px] font-semibold px-2.5 py-1 rounded-full"
              :style="`background: ${status.bg}; color: ${status.text}`">
          {{ project.status }}
        </span>
      </div>
    </div>
  </RouterLink>
</template>
