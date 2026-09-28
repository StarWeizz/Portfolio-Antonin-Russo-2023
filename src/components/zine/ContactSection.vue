<script setup>
import { ref } from 'vue'

const email = 'r.antonin.pro@gmail.com'
const copied = ref(false)

const socials = [
  { label: 'LinkedIn', href: 'https://linkedin.com/in/antonin-russo-33096626b' },
  { label: 'GitHub', href: 'https://github.com/StarWeizz' },
  { label: 'Instagram', href: 'https://instagram.com/r.antonin.pro' },
]

async function copyEmail() {
  try {
    await navigator.clipboard.writeText(email)
    copied.value = true
    setTimeout(() => (copied.value = false), 2000)
  } catch {
    window.location.href = `mailto:${email}`
  }
}
</script>

<template>
  <section id="contact" class="contact" aria-labelledby="contact-t">
    <div>
      <h2 id="contact-t">On en<br><em>parle ?</em></h2>
      <p class="pitch">Je recherche des projets ambitieux où la qualité technique, la performance et la fiabilité sont essentielles.</p>
      <p class="mail">
        <a :href="`mailto:${email}`">{{ email }}</a>
        <button type="button" @click="copyEmail">{{ copied ? 'Copiée' : 'Copier' }}</button>
      </p>
      <p class="where">Landes (40) – Gironde (33)</p>
    </div>
    <ul class="links">
      <li v-for="s in socials" :key="s.label">
        <a :href="s.href" target="_blank" rel="noopener">{{ s.label }} <span>↗</span></a>
      </li>
    </ul>
  </section>

  <footer class="colophon">
    <span>Conçu et développé par Antonin Russo, avec Vue.js et Tailwind.</span>
    <span>© {{ new Date().getFullYear() }} Antonin Russo</span>
  </footer>
</template>

<style scoped>
.contact { margin-top: 110px; padding-top: 28px; border-top: 2px solid var(--ink); display: grid; grid-template-columns: minmax(0, 1.4fr) minmax(0, 1fr); gap: 24px 40px; align-items: end; scroll-margin-top: 24px; }
h2 { margin: 0; font-family: var(--disp); text-transform: uppercase; color: var(--ink); font-size: clamp(56px, 10vw, 150px); font-weight: 900; font-stretch: 62%; line-height: .82; }
h2 em { font-style: italic; font-weight: 300; font-stretch: 140%; color: var(--accent); mix-blend-mode: multiply; }
.pitch { margin: 22px 0 0; max-width: 44ch; font-size: 18px; }
.mail { display: flex; flex-wrap: wrap; align-items: baseline; gap: 8px 14px; margin: 14px 0 0; }
.mail a { font-family: var(--disp); font-weight: 700; font-stretch: 90%; font-size: 22px; color: var(--ink); text-decoration-color: var(--accent); text-underline-offset: 4px; }
.mail button { font-family: var(--disp); font-weight: 600; font-stretch: 85%; font-size: 13px; letter-spacing: .06em; text-transform: uppercase; color: var(--accent); background: none; border: 1.5px solid currentColor; padding: 3px 10px; cursor: pointer; }
.mail button:hover { background: var(--accent); color: var(--paper); border-color: var(--accent); }
.where { margin: 6px 0 0; font-size: 15px; font-style: italic; }
.links { list-style: none; margin: 0; padding: 0; }
.links li { border-bottom: 1px solid var(--line); }
.links a { display: flex; justify-content: space-between; padding: 10px 0; text-decoration: none; font-family: var(--disp); font-weight: 700; font-stretch: 90%; font-size: 24px; text-transform: uppercase; color: var(--ink); }
.links a:hover { color: var(--accent); }
.colophon { margin-top: 56px; display: flex; flex-wrap: wrap; justify-content: space-between; gap: 8px 24px; font-size: 13px; font-style: italic; }

@media (max-width: 900px) {
  .contact { grid-template-columns: 1fr; }
}
</style>
