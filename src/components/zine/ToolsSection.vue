<script setup>
import SectionHeading from './SectionHeading.vue'

// [nom, intensité d'usage 1-5] : la taille, la graisse et la chasse en découlent
const tools = [
  ['Laravel', 5], ['PHP', 5], ['Java', 5], ['JavaScript', 4], ['Docker', 4], ['MySQL', 4], ['Go', 4],
  ['Vue.js', 4], ['Tailwind', 4], ['Node.js', 3], ['Kubernetes', 3], ['PostgreSQL', 3], ['MongoDB', 3],
  ['TypeScript', 3], ['Nginx', 3], ['Linux', 3], ['Git / GitHub', 4], ['React', 2], ['React Native', 2],
  ['Python', 2], ['OpenAI', 3], ['Anthropic', 3], ['Agents IA', 2], ['n8n', 2], ['CI/CD', 2], ['SQLite', 2],
]

const SIZE = [0, 22, 32, 46, 64, 88]
const WEIGHT = [0, 300, 450, 600, 760, 900]

const styled = tools.map(([name, k], i) => ({
  name,
  style: {
    fontSize: `${SIZE[k]}px`,
    fontWeight: WEIGHT[k],
    fontStretch: `${i % 3 === 0 ? 55 + k * 4 : i % 3 === 1 ? 150 - k * 12 : 90}%`,
    fontStyle: i % 5 === 2 ? 'italic' : 'normal',
  },
}))
</script>

<template>
  <SectionHeading id="outils" title="Outils" />
  <p class="tools" aria-label="Technologies et outils">
    <template v-for="tool in styled" :key="tool.name"><span :style="tool.style">{{ tool.name }}</span> </template>
  </p>
  <p class="hand tools-note">plus c'est gros, plus je m'en sers</p>
</template>

<style scoped>
.tools { margin: 0; font-family: var(--disp); color: var(--ink); line-height: 1.05; text-transform: uppercase; max-width: 1100px; }
.tools span { display: inline-block; margin: 0 .22em .12em 0; }
.tools span:hover { color: var(--accent); }
.tools-note { margin: 16px 0 0; }
</style>
