<script setup>
import SectionHeading from './SectionHeading.vue'
import { featured, img } from '../../data/projects'
</script>

<template>
  <SectionHeading id="travaux" title="Travaux choisis" note="survolez pour la couleur" />
  <section class="collage" aria-label="Travaux choisis">
    <figure v-for="work in featured" :key="work.title" class="print" :class="work.layout">
      <div class="ph"><img :src="img(work.img)" :alt="`Capture de ${work.title}`" loading="lazy"></div>
      <span v-if="work.note" class="hand">{{ work.note }}</span>
      <figcaption>
        <h3>
          <a v-if="work.url" :href="work.url" target="_blank" rel="noopener">{{ work.title }} ↗</a>
          <template v-else>{{ work.title }}</template>
        </h3>
        <span class="meta">{{ work.meta }}</span>
        <p v-if="work.desc">{{ work.desc }}</p>
      </figcaption>
    </figure>
  </section>
</template>

<style scoped>
.collage { display: grid; grid-template-columns: repeat(12, minmax(0, 1fr)); gap: 130px 64px; align-items: start; }
@media (min-width: 901px) {
  .collage { zoom: .72; max-width: 1560px; margin-inline: auto; padding-block: 70px 40px; }
}

.print { position: relative; margin: 0; transform: rotate(var(--r, 0deg)); transition: transform .35s ease; }
.print:hover, .print:focus-within { transform: rotate(0deg) scale(1.015); z-index: 2; }
.ph { position: relative; background: #fff; overflow: hidden; box-shadow: 0 1px 0 rgba(0,0,0,.05), 0 14px 22px -16px rgba(0, 0, 0, .35); }
.ph img { display: block; width: 100%; height: auto; filter: grayscale(1) contrast(1.05); transition: filter .4s ease; }
.print:hover img, .print:focus-within img { filter: none; }
.print::before {
  content: ""; position: absolute; z-index: 3; top: -12px; left: var(--tx, 38%); width: 92px; height: 26px;
  background: var(--tape); transform: rotate(var(--tr, -4deg)); box-shadow: 0 1px 1px rgba(0,0,0,.08);
}
figcaption { display: flex; flex-wrap: wrap; justify-content: space-between; align-items: baseline; gap: 2px 12px; margin-top: 12px; }
h3 { margin: 0; font-family: var(--disp); font-weight: 800; font-stretch: 85%; font-size: 26px; line-height: 1; text-transform: uppercase; color: var(--ink); }
h3 a { text-decoration: none; }
h3 a:hover { color: var(--accent); }
.meta { font-size: 14px; font-style: italic; }
figcaption p { flex: 0 0 100%; margin: 4px 0 0; font-size: 16px; line-height: 1.4; }
.print .hand { position: absolute; transform: rotate(var(--hr, -5deg)); z-index: 4; max-width: 13ch; }

.p1 { grid-column: 1 / span 7; --r: -1.2deg; }
.p1 .hand { right: -4%; top: -46px; }
.p2 { grid-column: 9 / span 4; margin-top: 90px; --r: 2deg; --tx: 20%; --tr: 6deg; }
.p2 .hand { left: -16%; bottom: 36%; --hr: -8deg; }
.p3 { grid-column: 2 / span 4; --r: 1.4deg; }
.p4 { grid-column: 7 / span 6; margin-top: -40px; --r: -1.6deg; --tx: 60%; }
.p4 .hand { left: -6%; top: -52px; --hr: 3deg; }
.p5 { grid-column: 1 / span 5; margin-top: 30px; --r: -.8deg; --tr: 3deg; }
.p5 .hand { right: -18%; top: 28%; --hr: 6deg; }
.p6 { grid-column: 7 / span 3; margin-top: 110px; --r: 3deg; }
.p7 { grid-column: 10 / span 3; margin-top: 40px; --r: -2.4deg; --tx: 12%; }
.p7 .hand { left: 4%; bottom: -44px; --hr: -4deg; }

@media (max-width: 900px) {
  .collage { grid-template-columns: 1fr; gap: 64px; }
  .collage .print { grid-column: 1; margin-top: 0; }
  .print .hand { position: static; display: block; margin-top: 6px; transform: rotate(-2deg); max-width: none; }
}
@media (prefers-reduced-motion: reduce) {
  .print, .ph img { transition: none; }
}
</style>
