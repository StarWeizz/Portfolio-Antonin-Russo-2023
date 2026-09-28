<script setup>
defineProps({
  id: { type: String, required: true },
  title: { type: String, required: true },
  note: { type: String, default: '' },
})
</script>

<template>
  <div class="rub" :id="id">
    <h2>{{ title }}</h2>
    <span v-if="note" class="hand">{{ note }}</span>
  </div>
</template>

<style scoped>
.rub { display: flex; flex-wrap: wrap; align-items: baseline; gap: 4px 18px; margin: 96px 0 30px; scroll-margin-top: 24px; }
h2 {
  margin: 0; font-family: var(--disp); color: var(--ink); text-transform: uppercase; line-height: .85;
  font-size: clamp(48px, 8vw, 110px); font-weight: 800; font-stretch: 72%;
  transition: font-stretch .5s ease;
}
.rub:hover h2 { font-stretch: 130%; }
.hand { transform: rotate(-3deg); }

@media (prefers-reduced-motion: reduce) {
  h2 { transition: none; }
}
</style>
