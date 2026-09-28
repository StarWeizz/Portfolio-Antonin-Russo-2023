<script setup>
import SectionHeading from './SectionHeading.vue'

const steps = [
  { year: '2021', title: 'Brevet', text: 'Mention très bien.' },
  { year: '2022', title: 'Walyverse', text: 'Développeur full-stack et architecte technique. Toujours en poste.' },
  { year: '2025', title: 'Baccalauréat', text: 'Mention assez bien.' },
  { year: '2025', title: 'Ynov Campus', text: "Informatique, spécialité IA & Data, jusqu'en 2028." },
  { year: '2026', title: 'Arkéa', text: 'Fondateur : solutions web sur mesure pour des clients professionnels.', now: true, note: "← aujourd'hui" },
]
</script>

<template>
  <SectionHeading id="parcours" title="Parcours" />
  <section class="path" aria-label="Parcours">
    <svg viewBox="0 0 1000 40" preserveAspectRatio="none" aria-hidden="true">
      <path d="M10 22 C 90 4, 150 36, 230 20 S 380 6, 440 24 S 590 38, 650 18 S 800 2, 860 24 S 950 34, 990 16" />
    </svg>
    <div v-for="step in steps" :key="step.title" class="step" :class="{ now: step.now }">
      <span class="y">{{ step.year }}</span>
      <h3>{{ step.title }}</h3>
      <p>{{ step.text }}</p>
      <span v-if="step.note" class="hand">{{ step.note }}</span>
    </div>
  </section>
</template>

<style scoped>
.path { position: relative; display: grid; grid-template-columns: repeat(5, minmax(0, 1fr)); gap: 24px; }
svg { position: absolute; left: 0; top: 34px; width: 100%; height: 40px; overflow: visible; pointer-events: none; }
svg path { fill: none; stroke: var(--accent); stroke-width: 2.5; stroke-linecap: round; }
.step { position: relative; }
.y {
  display: block; font-family: var(--disp); font-weight: 900; font-stretch: 55%; font-size: clamp(54px, 6.4vw, 92px); line-height: .9;
  color: transparent; -webkit-text-stroke: 1.6px var(--ink); background: var(--paper); width: fit-content; padding-right: 6px;
}
.now .y { color: var(--ink); -webkit-text-stroke: 0; }
h3 { margin: 12px 0 2px; font-family: var(--disp); font-weight: 700; font-stretch: 85%; font-size: 21px; text-transform: uppercase; line-height: 1.05; color: var(--ink); }
p { margin: 0; font-size: 15.5px; line-height: 1.4; }
.hand { display: block; margin-top: 6px; font-size: 19px; }

@media (max-width: 900px) {
  .path { grid-template-columns: 1fr; gap: 22px; }
  svg { display: none; }
}
</style>
