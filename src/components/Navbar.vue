<script setup>
import { useI18n } from 'vue-i18n'
import { RouterLink } from 'vue-router'

const { t, locale } = useI18n()

function toggleLocale() {
  locale.value = locale.value === 'fr' ? 'en' : 'fr'
  localStorage.setItem('locale', locale.value)
}
</script>

<template>
  <nav class="sticky top-0 z-50 bg-[#f9f8f6] border-b border-[#e3e3e3]">
    <div class="flex items-center justify-between px-8 md:px-14 lg:px-16 py-5 max-w-screen-xl mx-auto">

      <RouterLink to="/" class="font-syne font-extrabold text-[19px] tracking-tight text-[#0e0e0e] no-underline" style="animation: fadeDown .5s ease both">
        Antonin <span class="text-[#F4500A]">Russo</span>
      </RouterLink>

      <ul class="hidden md:flex items-center gap-9 list-none m-0 p-0">
        <li v-for="(item, i) in ['expertise','projects','career','contact']" :key="item"
            :style="`animation: fadeDown .5s ${i * 80}ms ease both`">
          <a :href="item === 'projects' ? '/projects' : `/#${item}`"
             class="font-figtree text-[13px] font-medium text-[#999] no-underline tracking-[0.3px] relative transition-colors duration-200 hover:text-[#0e0e0e]
                    after:content-[''] after:absolute after:bottom-[-2px] after:left-0 after:h-px after:w-0 after:bg-[#F4500A] after:transition-all after:duration-[250ms] hover:after:w-full">
            {{ t(`nav.${item}`) }}
          </a>
        </li>
      </ul>

      <div class="flex items-center gap-3" style="animation: fadeDown .5s .3s ease both">
        <button @click="toggleLocale"
                class="font-syne text-[12px] font-bold border border-[#e3e3e3] rounded-full px-3.5 py-1.5 text-[#aaa] transition-colors duration-200 hover:border-[#F4500A] hover:text-[#F4500A]">
          <b class="text-[#0e0e0e]">{{ locale.toUpperCase() }}</b> / {{ locale === 'fr' ? 'EN' : 'FR' }}
        </button>

        <a href="#contact"
           class="btn-ripple font-syne text-[13px] font-bold tracking-[0.5px] bg-[#0e0e0e] text-white px-5 py-2.5 rounded-full flex items-center gap-2 no-underline">
          <div class="ripple-bg" />
          <span>{{ t('nav.hire') }}</span>
          <svg class="transition-transform duration-[250ms]" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
        </a>
      </div>

    </div>
  </nav>
</template>

<style scoped>
@keyframes fadeDown {
  from { opacity: 0; transform: translateY(-10px); }
  to   { opacity: 1; transform: translateY(0); }
}
</style>
