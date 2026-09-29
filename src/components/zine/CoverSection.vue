<script setup>
import { img } from '../../data/projects'

const portrait = img('antonin')
</script>

<template>
  <section class="cover" aria-label="Présentation">
    <div>
      <p class="role">Développeur full-stack</p>
      <h1 class="name">Antonin Russo</h1>
      <p class="lede">
        Je fabrique des sites, des plugins Minecraft et des outils en ligne de commande depuis <mark>l'âge de dix ans</mark>.
        Aujourd'hui développeur full-stack, fondateur d'Arkéa et étudiant en IA &amp; Data à Ynov.
        <span class="hand lede-note">← oui, dix. c'était en 2017</span>
      </p>
    </div>
    <div class="portrait">
      <span class="disc"></span>
      <div class="duo">
        <img :src="portrait" alt="Portrait d'Antonin Russo">
      </div>
      <svg class="arrow" viewBox="0 0 70 50" aria-hidden="true"><path d="M4 46 C 18 40, 30 30, 40 14 M40 14 l-10 3 M40 14 l1 10" /></svg>
      <span class="hand note">moi (le costume, c'est rare)</span>
    </div>
  </section>
</template>

<style scoped>
.cover {
  display: grid; grid-template-columns: minmax(0, 1.35fr) minmax(0, 1fr); gap: 24px 48px; align-items: center;
  padding-block: clamp(32px, 6vw, 72px) 24px;
}
.role { margin: 0 0 14px; font-family: var(--disp); font-stretch: 85%; font-weight: 600; font-size: 15px; letter-spacing: .08em; text-transform: uppercase; color: var(--accent); }
.name {
  margin: 0; font-family: var(--disp); color: var(--ink);
  font-size: clamp(56px, 8.6vw, 124px); font-weight: 800; font-stretch: 88%;
  line-height: .92; letter-spacing: -.02em; text-wrap: balance;
}
.lede { font-size: clamp(20px, 2.1vw, 25px); line-height: 1.38; max-width: 32ch; margin: 30px 0 0; text-wrap: pretty; }
.lede mark { background: linear-gradient(transparent 55%, var(--accent-soft) 55% 92%, transparent 92%); color: inherit; padding-inline: 2px; }
.lede-note { display: block; margin-top: 6px; transform: rotate(-2deg); transform-origin: left; }

.portrait { position: relative; justify-self: center; width: min(100%, 420px); aspect-ratio: 1; }
.disc { position: absolute; inset: 6% -4% -4% 6%; border-radius: 50%; background: var(--accent); mix-blend-mode: multiply; }
.duo { position: absolute; inset: 0; clip-path: polygon(3% 2%, 97% 0, 100% 96%, 1% 100%); overflow: hidden; }
.duo img { width: 100%; height: 100%; object-fit: cover; display: block; }
.note { position: absolute; left: -6%; bottom: -10%; transform: rotate(-6deg); }
.arrow { position: absolute; left: 14%; bottom: -3%; width: 70px; height: 50px; overflow: visible; }
.arrow path { fill: none; stroke: var(--accent); stroke-width: 2.4; stroke-linecap: round; stroke-linejoin: round; }

@media (max-width: 900px) {
  .cover { grid-template-columns: 1fr; }
  .portrait { width: min(80%, 360px); margin-bottom: 40px; }
}
</style>
