<script setup>
import { useI18n } from 'vue-i18n'
const { t } = useI18n()

const groups = [
  { label: 'Frontend',         items: ['Vue.js', 'React', 'TailwindCSS', 'JavaScript', 'TypeScript'] },
  { label: 'Backend',          items: ['Laravel / PHP', 'Go', 'Node.js', 'Java', 'Python'] },
  { label: 'Bases de données', items: ['MySQL', 'MongoDB', 'SQLite'] },
  { label: 'Infra',            items: ['Docker', 'Kubernetes', 'Nginx', 'Linux', 'Git / GitHub'] },
  { label: 'Outils',           items: ['VS Code', 'Claude AI', 'Stripe', 'Discord.js', 'OpenAI API'] },
]
</script>

<template>
  <section id="stack" class="border-t border-[#e3e3e3] bg-[#0e0e0e] px-8 md:px-14 lg:px-16 py-20">
    <div class="max-w-screen-xl mx-auto">
      <div class="font-syne text-[11px] font-bold tracking-[2.5px] uppercase text-[#F4500A] mb-3">{{ t('stack.label') }}</div>
      <div class="font-syne font-extrabold text-[42px] tracking-[-1.5px] text-white leading-none mb-10">
        {{ t('stack.title') }} <em class="not-italic font-bold text-[#444]">{{ t('stack.title_em') }}</em>
      </div>

      <div class="grid grid-cols-2 md:grid-cols-5 gap-px bg-[#222] border border-[#222] rounded-xl overflow-hidden">
        <div v-for="group in groups" :key="group.label"
             class="group bg-[#141414] p-6 transition-colors duration-200 hover:bg-[#1a1a1a]">
          <div class="font-syne text-[10px] font-bold tracking-[2px] uppercase text-[#F4500A] mb-4 pb-3 border-b border-[#2a2a2a]">{{ group.label }}</div>
          <div class="flex flex-col gap-2.5">
            <div v-for="item in group.items" :key="item"
                 class="font-figtree text-[13px] font-medium text-[#aaa] flex items-center gap-2 transition-colors duration-200 group-hover:text-[#ddd]">
              <span class="w-1.5 h-1.5 rounded-full bg-[#333] flex-shrink-0 group-hover:bg-[#F4500A] transition-colors duration-200" />
              {{ item }}
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
