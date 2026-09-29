<script setup>
import SectionHeading from './SectionHeading.vue'

// [nom, intensité d'usage 1-5] : la taille, la graisse et la chasse en découlent
const tools = [
  ['TypeScript', 5], ['React', 5], ['WordPress', 5], ['Stripe', 5], ['Tailwind', 5], ['Laravel', 4],
  ['Next.js', 4], ['Supabase', 4], ['Elementor', 4], ['Java', 4], ['PHP', 4], ['PostgreSQL', 4],
  ['Git / GitHub', 4], ['JavaScript', 4], ['Docker', 3], ['MySQL', 3], ['Node.js', 3], ['Netlify', 3],
  ['Vite', 3], ['Kubernetes', 3], ['Nginx', 3], ['Claude / Anthropic', 3], ['Go', 3], ['Vue.js', 3],
  ['MongoDB', 2], ['Linux', 2], ['GSAP', 2], ['Lenis', 2], ['Resend', 2], ['OpenAI', 2], ['n8n', 2],
  ['Remotion', 2], ['React Native', 2], ['Python', 2], ['CI/CD', 2], ['Agents IA', 2],
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
  <SectionHeading id="outils" title="Outils" note="plus c'est gros, plus je m'en sers" />
  <p class="tools" aria-label="Technologies et outils">
    <template v-for="tool in styled" :key="tool.name"><span :style="tool.style">{{ tool.name }}</span> </template>
  </p>
</template>

<style scoped>
.tools {
  margin: 0; padding-top: 22px; border-top: 2px solid var(--ink);
  font-family: var(--disp); color: var(--ink-deep); line-height: 1.12; max-width: 1180px;
}
.tools span { display: inline-block; margin: 0 .3em .14em 0; transition: color .2s; }
.tools span:hover { color: var(--accent); }
</style>
