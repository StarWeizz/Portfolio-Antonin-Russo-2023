<script setup>
import { useI18n } from 'vue-i18n'
const { t } = useI18n()

const items = [
  { num: '01', titleKey: 'expertise.01_title', descKey: 'expertise.01_desc' },
  { num: '02', titleKey: 'expertise.02_title', descKey: 'expertise.02_desc' },
  { num: '03', titleKey: 'expertise.03_title', descKey: 'expertise.03_desc' },
  { num: '04', titleKey: 'expertise.04_title', descKey: 'expertise.04_desc' },
]
</script>

<template>
  <section id="expertise" class="grid grid-cols-2 md:grid-cols-4 border-t border-[#e3e3e3]">
    <div v-for="(item, i) in items" :key="item.num"
         class="group px-8 py-8 border-r border-[#e3e3e3] last:border-r-0 cursor-default transition-colors duration-200 hover:bg-[#fdf8f5] relative overflow-hidden"
         :style="`animation: fadeUp .5s ${i * 100 + 200}ms ease both`">
      <div class="absolute bottom-0 left-0 h-[2px] w-0 bg-[#F4500A] transition-all duration-300 group-hover:w-full" />
      <div class="font-syne text-[11px] font-bold text-[#F4500A] tracking-[1px] mb-3">{{ item.num }}</div>
      <div class="font-syne text-[14px] font-bold text-[#0e0e0e] mb-2 tracking-[-0.2px]">{{ t(item.titleKey) }}</div>
      <div class="font-figtree text-[13px] text-[#aaa] leading-[1.6]">{{ t(item.descKey) }}</div>
    </div>
  </section>
</template>

<style scoped>
@keyframes fadeUp {
  from { opacity: 0; transform: translateY(16px); }
  to   { opacity: 1; transform: translateY(0); }
}
</style>
