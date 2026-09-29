<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue'
import SectionHeading from './SectionHeading.vue'
import { projects, STATUS, KIND, img } from '../../data/projects'

const list = ref(null)
const peek = ref(null)
const current = ref(null)
const visible = ref(false)

let enabled = false
let calm = false
let running = false
let tx = 0, ty = 0, x = 0, y = 0

function target(cx, cy) {
  const w = peek.value.offsetWidth || 320
  const h = peek.value.offsetHeight || 340
  tx = cx + 28 + w > innerWidth - 12 ? cx - w - 28 : cx + 28
  ty = Math.min(Math.max(cy - h * 0.35, 12), innerHeight - h - 12)
}

function frame() {
  const k = calm ? 1 : 0.16
  const px = x
  x += (tx - x) * k
  y += (ty - y) * k
  const tilt = calm ? 0 : Math.max(-6, Math.min(6, (x - px) * 0.5))
  peek.value.style.transform = `translate3d(${x}px, ${y}px, 0) rotate(${tilt}deg)`
  if (visible.value || Math.abs(tx - x) + Math.abs(ty - y) > 0.5) requestAnimationFrame(frame)
  else running = false
}

function run() {
  if (running) return
  running = true
  requestAnimationFrame(frame)
}

function enter(project, e) {
  if (!enabled) return
  current.value = project
  if (!visible.value) {
    target(e.clientX, e.clientY)
    x = tx
    y = ty
  }
  visible.value = true
  run()
}

function move(e) {
  if (!enabled) return
  target(e.clientX, e.clientY)
  run()
}

function leave() {
  visible.value = false
}

function onScroll() {
  if (visible.value && !list.value.matches(':hover')) visible.value = false
}

onMounted(() => {
  enabled = matchMedia('(hover: hover) and (pointer: fine)').matches
  calm = matchMedia('(prefers-reduced-motion: reduce)').matches
  addEventListener('scroll', onScroll, { passive: true })
})

onBeforeUnmount(() => removeEventListener('scroll', onScroll))
</script>

<template>
  <SectionHeading id="index" title="Index" :note="`les ${projects.length}, sans tri artistique`" />
  <section class="index" aria-label="Index des projets">
    <ol ref="list" @mousemove="move" @mouseleave="leave">
      <li
        v-for="p in projects"
        :key="`${p.year}-${p.title}`"
        :class="{ gone: p.status === 'gone' }"
        @mouseenter="enter(p, $event)"
      >
        <span class="yr">{{ p.year }}</span>
        <span class="t">
          <span v-if="p.fav" class="fav" title="Coup de cœur" aria-label="Coup de cœur">★</span>
          <a v-if="p.url" :href="p.url" target="_blank" rel="noopener">{{ p.title }} ↗</a>
          <template v-else>{{ p.title }}</template>
          <span v-if="p.kind" class="kind">{{ KIND[p.kind] }}</span>
        </span>
        <span class="stack">{{ p.stack }}</span>
        <span class="st" :class="p.status">{{ STATUS[p.status] }}</span>
      </li>
    </ol>
  </section>

  <figure ref="peek" class="peek" :class="{ on: visible }" aria-hidden="true">
    <div v-if="current" class="in">
      <img :src="img(current.img)" alt="">
      <div class="card">
        <div class="top"><h4>{{ current.title }}</h4><span class="pyr">{{ current.year }}</span></div>
        <span v-if="current.kind" class="kind">{{ KIND[current.kind] }}</span>
        <p>{{ current.desc }}</p>
        <div class="pst">{{ current.stack }} · {{ STATUS[current.status] }}</div>
      </div>
    </div>
  </figure>
</template>

<style scoped>
.index { border-top: 2px solid var(--ink); }
ol { list-style: none; margin: 0; padding: 0; }
li {
  display: grid; grid-template-columns: 70px minmax(0, 1.2fr) minmax(0, 1.4fr) 150px; gap: 4px 18px; align-items: baseline;
  padding: 10px 0 9px; border-bottom: 1px solid var(--line); cursor: default;
}
li:hover { background: linear-gradient(transparent 20%, var(--accent-soft) 20% 86%, transparent 86%); }
.yr { font-family: var(--disp); font-weight: 700; font-stretch: 60%; font-size: 22px; color: var(--ink); font-variant-numeric: tabular-nums; }
.t { font-family: var(--disp); font-weight: 600; font-stretch: 90%; font-size: 21px; line-height: 1.1; color: var(--ink); }
.t a { text-decoration: none; }
.kind {
  display: inline-block; margin-left: .6em; padding: 1px 7px 0; vertical-align: .2em;
  font-family: var(--disp); font-stretch: 85%; font-weight: 600; font-size: 11.5px; letter-spacing: .06em; text-transform: uppercase;
  color: var(--accent); border: 1.5px solid currentColor; border-radius: 999px; white-space: nowrap;
}
.card .kind { margin: 8px 0 0; }
.fav { color: var(--accent); font-size: .85em; margin-right: .35em; display: inline-block; transform: translateY(-.05em); }
.stack { font-size: 15px; font-style: italic; }
.st { font-size: 14px; text-align: right; }
.st.pause, .st.wip { color: var(--accent); }
.st.prod { color: var(--ink); font-weight: 600; }
li.gone .t { text-decoration: line-through; text-decoration-color: var(--accent); text-decoration-thickness: 2px; }

.peek { position: fixed; left: 0; top: 0; z-index: 60; width: 320px; margin: 0; pointer-events: none; opacity: 0; transition: opacity .2s ease; will-change: transform; }
.peek.on { opacity: 1; }
.in { transform: scale(.88); transform-origin: top left; transition: transform .3s cubic-bezier(.2,.7,.2,1); background: var(--paper); border: 1.5px solid var(--ink-deep); box-shadow: 0 26px 40px -22px rgba(0, 0, 0, .5); }
.peek.on .in { transform: scale(1); }
.in img { display: block; width: 100%; aspect-ratio: 16 / 10; object-fit: cover; object-position: top; border-bottom: 1.5px solid var(--ink-deep); background: #fff; }
.card { padding: 12px 14px 14px; }
.top { display: flex; justify-content: space-between; align-items: baseline; gap: 10px; }
h4 { margin: 0; font-family: var(--disp); font-weight: 800; font-stretch: 85%; font-size: 20px; line-height: 1.05; text-transform: uppercase; color: var(--ink); }
.pyr { font-family: var(--disp); font-stretch: 70%; font-weight: 600; font-size: 15px; color: var(--accent); white-space: nowrap; }
.card p { margin: 8px 0 0; font-size: 15px; line-height: 1.42; color: var(--ink-deep); }
.pst { margin-top: 10px; font-size: 13px; font-style: italic; color: var(--ink); }

@media (hover: none), (pointer: coarse) { .peek { display: none; } }
@media (max-width: 900px) {
  li { grid-template-columns: 56px minmax(0, 1fr); }
  .stack, .st { grid-column: 2; text-align: left; }
}
</style>
