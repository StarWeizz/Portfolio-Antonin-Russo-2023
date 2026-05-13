<script setup>
import { useI18n } from 'vue-i18n'
const { t } = useI18n()
</script>

<template>
  <footer class="border-t border-[#e3e3e3] px-8 md:px-11 py-5 flex items-center justify-between bg-white">
    <span class="font-syne font-extrabold text-[14px] text-[#0e0e0e]">
      Antonin <span class="text-[#F4500A]">Russo</span>
    </span>
    <span class="font-figtree text-[11px] text-[#bbb]">
      2026 · {{ t('footer.copy') }}
    </span>
    <div class="flex gap-4">
      <a v-for="link in [
           { label: 'GitHub',    href: 'https://github.com/StarWeizz' },
           { label: 'LinkedIn',  href: 'https://linkedin.com/in/antonin-russo-33096626b' },
           { label: 'Instagram', href: 'https://instagram.com/r.antonin.pro' },
         ]" :key="link.label" :href="link.href" target="_blank"
         class="font-figtree text-[11px] text-[#999] no-underline transition-colors hover:text-[#F4500A]">
        {{ link.label }}
      </a>
    </div>
  </footer>
</template>
