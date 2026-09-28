<script setup>
const links = [
  { href: '#travaux', label: 'Travaux' },
  { href: '#index', label: 'Index' },
  { href: '#parcours', label: 'Parcours' },
  { href: '#outils', label: 'Outils' },
  { href: '#contact', label: 'Contact' },
]
</script>

<template>
  <header class="mast">
    <span>Portfolio · Antonin Russo</span>
    <nav aria-label="Sommaire">
      <a v-for="link in links" :key="link.href" :href="link.href">{{ link.label }}</a>
      <a class="cv" href="/cv-antonin-russo.pdf" download>CV ↓</a>
    </nav>
  </header>
</template>

<style scoped>
.mast {
  display: flex; flex-wrap: wrap; justify-content: space-between; align-items: baseline; gap: 8px 24px;
  padding-block: 18px 12px; border-bottom: 2px solid var(--ink);
  font-family: var(--disp); font-stretch: 80%; font-weight: 600; font-size: 14px; letter-spacing: .06em; text-transform: uppercase; color: var(--ink);
}
nav { display: flex; flex-wrap: wrap; gap: 4px 20px; }
nav a { text-decoration: none; }
nav a:hover { color: var(--accent); }
.cv { color: var(--accent); }
</style>
