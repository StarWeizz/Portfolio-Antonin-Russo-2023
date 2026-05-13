<script setup>
import { useI18n } from 'vue-i18n'
const { t } = useI18n()

const entries = [
  {
    date: 'Juillet 2022 · En cours',
    badgeClass: 'bg-green-50 text-green-700',
    badgeLabel: 'Expérience professionnelle',
    title: 'Développeur chez Walyverse',
    desc: 'Groupe de serveurs Minecraft. Plugins Java, APIs REST, bots Discord, infra Docker/Kubernetes, reverse proxy Nginx, systèmes de paiement. Rôle évolutif de développeur junior à architecte technique.',
    link: null,
  },
  {
    date: 'Juillet 2025',
    badgeClass: 'bg-blue-50 text-blue-700',
    badgeLabel: 'Diplôme',
    title: 'Baccalauréat · Mention Assez Bien',
    desc: 'Obtenu en juillet 2025.',
    link: null,
  },
  {
    date: 'Sept. 2025 · Juillet 2028',
    badgeClass: 'bg-blue-50 text-blue-700',
    badgeLabel: 'Formation',
    title: 'Ynov Campus · Informatique IA et Data',
    desc: 'Spécialisation Intelligence Artificielle et Data. Machine learning, analyse de données et systèmes distribués.',
    link: null,
  },
  {
    date: 'En cours',
    badgeClass: 'bg-orange-50 text-orange-700',
    badgeLabel: 'Agence',
    title: 'Fondateur · Arkéa Studio',
    desc: 'Création et développement de projets web pour des clients, de la conception à la mise en production.',
    link: { href: 'https://arkea-studio.fr', label: 'Voir Arkéa Studio' },
  },
]
</script>

<template>
  <section id="career" class="border-t border-[#e3e3e3] px-8 md:px-14 lg:px-16 py-20 grid grid-cols-1 md:grid-cols-[300px_1fr] gap-16 max-w-screen-xl mx-auto">

    <div class="md:sticky md:top-[100px] self-start">
      <div class="font-syne text-[11px] font-bold tracking-[2.5px] uppercase text-[#F4500A] mb-3">{{ t('career.label') }}</div>
      <div class="font-syne font-extrabold text-[42px] tracking-[-1.5px] text-[#0e0e0e] leading-none mb-5">
        {{ t('career.title') }} <em class="not-italic font-bold text-[#bbb]">{{ t('career.title_em') }}</em>
      </div>
      <p class="font-figtree text-[15px] text-[#888] leading-[1.75]">{{ t('career.desc') }}</p>
    </div>

    <div class="relative pl-8">
      <div class="absolute left-0 top-2 bottom-2 w-px bg-gradient-to-b from-[#F4500A] via-[#F4500A]/30 to-transparent" />

      <div v-for="(entry, i) in entries" :key="i"
           class="relative pb-10 last:pb-0 group"
           :style="`animation: fadeUp .5s ${i * 100 + 200}ms ease both`">
        <div class="absolute -left-[34px] top-[5px] w-[10px] h-[10px] rounded-full bg-[#f9f8f6] border-2 border-[#F4500A] transition-colors duration-200 group-hover:bg-[#F4500A]" />

        <div class="font-syne text-[11px] font-bold tracking-[0.8px] text-[#F4500A] uppercase mb-2">{{ entry.date }}</div>
        <span class="inline-block font-figtree text-[11px] font-semibold px-2.5 py-[3px] rounded-full mb-2" :class="entry.badgeClass">{{ entry.badgeLabel }}</span>
        <div class="font-syne font-extrabold text-[17px] tracking-[-0.3px] text-[#0e0e0e] mb-2">{{ entry.title }}</div>
        <p class="font-figtree text-[14px] text-[#888] leading-[1.7]">{{ entry.desc }}</p>
        <a v-if="entry.link" :href="entry.link.href" target="_blank"
           class="inline-flex items-center gap-1 font-figtree text-[13px] font-semibold text-[#F4500A] no-underline mt-2 border-b border-transparent hover:border-[#F4500A] transition-colors group/link">
          {{ entry.link.label }}
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" class="transition-transform group-hover/link:translate-x-[2px]"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
        </a>
      </div>
    </div>

  </section>
</template>

<style scoped>
@keyframes fadeUp {
  from { opacity: 0; transform: translateY(16px); }
  to   { opacity: 1; transform: translateY(0); }
}
</style>
