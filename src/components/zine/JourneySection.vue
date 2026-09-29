<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue'
import SectionHeading from './SectionHeading.vue'

const steps = [
  { year: '2021', title: 'Brevet', text: 'Mention très bien.' },
  { year: '2022', title: 'Walyverse', text: 'Développeur full-stack et architecte technique. Toujours en poste.' },
  { year: '2025', title: 'Baccalauréat', text: 'Mention assez bien.' },
  { year: '2025', title: 'Ynov Campus', text: "Informatique, spécialité IA & Data, jusqu'en 2028." },
  { year: '2026', title: 'Arkéa', text: 'Fondateur : solutions web sur mesure pour des clients professionnels.', now: true, note: "← aujourd'hui" },
]

const PATH = 'M10 22 C 90 4, 150 36, 230 20 S 380 6, 440 24 S 590 38, 650 18 S 800 2, 860 24 S 950 34, 990 16'
const START_X = 10
const END_X = 990
// Abscisse (0-1) où la plume s'arrête pour chaque date ; la dernière va jusqu'au bout du trait
const STOPS = steps.map((_, i) => (i === steps.length - 1 ? END_X / 1000 : i / steps.length + 0.03))

const root = ref(null)
const stage = ref(null)
const line = ref(null)
const reveal = ref(null)
const pen = ref(null)
const stepEls = ref([])
const animated = ref(false)
const pinned = ref(false)
const inked = ref(steps.map(() => false))
const anchors = ref([])

let shown = 0
let target = 0
let raf = 0
let total = 0
let stick = 0

const clamp = (v, a, b) => Math.min(b, Math.max(a, v))
const isWide = () => matchMedia('(min-width: 901px)').matches
const toShown = (frac) => (frac * 1000 - START_X) / (END_X - START_X)

function pointAtX(targetX) {
  let lo = 0
  let hi = total
  for (let i = 0; i < 22; i++) {
    const mid = (lo + hi) / 2
    if (line.value.getPointAtLength(mid).x < targetX) lo = mid
    else hi = mid
  }
  return line.value.getPointAtLength((lo + hi) / 2)
}

function readTarget() {
  const r = root.value.getBoundingClientRect()
  if (pinned.value) {
    // La section est épinglée : chaque tranche de défilement correspond à une date
    const p = clamp((stick - r.top) / (r.height - stage.value.offsetHeight), 0, 1)
    if (p < 0.06) target = 0
    else target = toShown(STOPS[Math.min(steps.length - 1, Math.floor(((p - 0.06) / 0.94) * steps.length))])
  } else {
    target = clamp((innerHeight * 0.85 - r.top) / (innerHeight * 0.5), 0, 1)
  }
}

function paint() {
  if (isWide()) {
    const px = START_X + shown * (END_X - START_X)
    reveal.value.setAttribute('width', String(px))
    const pt = pointAtX(px)
    const x = pt.x / 1000
    pen.value.style.left = `${x * 100}%`
    pen.value.style.top = `${(pt.y / 40) * 100}%`
    pen.value.style.opacity = shown > 0.002 && shown < 0.998 ? '1' : '0'
    inked.value = STOPS.map((stop) => x >= stop - 0.005)
  } else {
    inked.value = stepEls.value.map((el) => el.getBoundingClientRect().top < innerHeight * 0.75)
  }
}

function tick() {
  const d = target - shown
  // La plume avance à son propre rythme : un défilement rapide ne lui fait pas sauter d'étape
  const step = Math.sign(d) * Math.min(Math.abs(d), Math.max(0.006, Math.abs(d) * 0.07))
  shown += step
  paint()
  raf = Math.abs(target - shown) < 0.0005 ? 0 : requestAnimationFrame(tick)
}

function onScroll() {
  readTarget()
  if (!raf) raf = requestAnimationFrame(tick)
}

function layout() {
  pinned.value = isWide()
  // La frise reste collée, centrée verticalement dans l'écran
  stick = Math.max(16, (innerHeight - stage.value.offsetHeight) / 2)
  stage.value.style.setProperty('--stick', `${stick}px`)
  anchors.value = STOPS.map((stop) => {
    const pt = pointAtX(stop * 1000)
    return { left: `${(pt.x / 1000) * 100}%`, top: `${(pt.y / 40) * 100}%` }
  })
}

function onResize() {
  layout()
  onScroll()
}

onMounted(() => {
  if (matchMedia('(prefers-reduced-motion: reduce)').matches) return
  total = line.value.getTotalLength()
  animated.value = true
  layout()
  requestAnimationFrame(() => {
    readTarget()
    shown = target
    paint()
  })
  addEventListener('scroll', onScroll, { passive: true })
  addEventListener('resize', onResize)
  document.fonts?.ready.then(onResize)
})

onBeforeUnmount(() => {
  removeEventListener('scroll', onScroll)
  removeEventListener('resize', onResize)
  cancelAnimationFrame(raf)
})
</script>

<template>
  <div ref="root" class="pin" :class="{ pinned: animated && pinned }">
    <div ref="stage" class="stage">
      <SectionHeading id="parcours" title="Parcours" :note="animated && pinned ? 'continuez à défiler' : ''" />
      <section class="path" :class="{ animated }" aria-label="Parcours">
        <div class="track" aria-hidden="true">
          <svg viewBox="0 0 1000 40" preserveAspectRatio="none">
            <defs>
              <clipPath id="journey-reveal">
                <rect ref="reveal" x="0" y="-40" :width="animated ? 0 : 1000" height="120" />
              </clipPath>
            </defs>
            <path class="ghost" :d="PATH" />
            <path ref="line" class="ink" clip-path="url(#journey-reveal)" :d="PATH" />
          </svg>
          <span
            v-for="(a, i) in anchors"
            :key="i"
            class="anchor"
            :class="{ reached: inked[i] }"
            :style="a"
          ></span>
          <span ref="pen" class="pen"></span>
        </div>
        <div
          v-for="(step, i) in steps"
          :key="step.title"
          ref="stepEls"
          class="step"
          :class="{ now: step.now, inked: inked[i] }"
          :style="{ '--tilt': `${(i % 2 ? 1 : -1) * (1.5 + i * 0.4)}deg` }"
        >
          <span class="y">{{ step.year }}</span>
          <h3>{{ step.title }}</h3>
          <p>{{ step.text }}</p>
          <span v-if="step.note" class="hand">{{ step.note }}</span>
        </div>
      </section>
    </div>
    <div v-if="animated && pinned" class="runway" aria-hidden="true"></div>
  </div>
</template>

<style scoped>
/* Épinglage : la frise reste collée pendant la "piste" de défilement (≈ 40 % d'écran par date) */
.pinned { margin-top: 96px; }
.pinned .stage { position: sticky; top: var(--stick, 10vh); }
.pinned .stage :deep(.rub) { margin-top: 0; }
.runway { height: 200vh; }

.path { position: relative; display: grid; grid-template-columns: repeat(5, minmax(0, 1fr)); gap: 24px; }
.track { position: absolute; left: 0; right: 0; top: 34px; height: 40px; pointer-events: none; }
svg { width: 100%; height: 100%; overflow: visible; display: block; }
path { fill: none; stroke-linecap: round; vector-effect: non-scaling-stroke; }
.ink { stroke: var(--accent); stroke-width: 2.5; }
.ghost { stroke: none; }
.pen, .anchor { display: none; }

.step { position: relative; }
.y {
  position: relative; z-index: 1;
  display: block; font-family: var(--disp); font-weight: 900; font-stretch: 55%; font-size: clamp(54px, 6.4vw, 92px); line-height: .9;
  color: transparent; -webkit-text-stroke: 1.6px var(--ink); background: var(--paper); width: fit-content; padding-right: 6px;
}
.now .y { color: var(--ink); -webkit-text-stroke: 0; }
h3 { margin: 12px 0 2px; font-family: var(--disp); font-weight: 700; font-stretch: 85%; font-size: 21px; text-transform: uppercase; line-height: 1.05; color: var(--ink); }
p { margin: 0; font-size: 15.5px; line-height: 1.4; }
.hand { display: block; margin-top: 6px; font-size: 19px; }

/* Version animée */
.animated .ghost { stroke: var(--line); stroke-width: 1.5; stroke-dasharray: 2 7; }
.animated .anchor {
  display: block; position: absolute; z-index: 2; width: 2px; height: 16px; margin: -8px 0 0 -1px;
  background: var(--line); transform: scaleY(.6); transition: background-color .3s, transform .4s cubic-bezier(.3,1.6,.5,1);
}
.animated .anchor.reached { background: var(--ink); transform: scaleY(1); }
.animated .pen {
  display: block; position: absolute; z-index: 3; width: 14px; height: 14px; margin: -7px 0 0 -7px; border-radius: 50%;
  background: var(--accent); box-shadow: 0 0 0 5px var(--accent-soft); opacity: 0; transition: opacity .3s;
}
.animated .pen::after {
  content: ""; position: absolute; inset: -9px; border-radius: 50%; border: 1.5px solid var(--accent);
  animation: ripple 1.2s ease-out infinite;
}
.animated .y { color: transparent; -webkit-text-stroke: 1.6px var(--line); transition: color .45s ease, -webkit-text-stroke-color .3s ease; }
.animated h3, .animated p, .animated .hand { opacity: 0; transform: translateY(10px); transition: opacity .5s ease .15s, transform .5s cubic-bezier(.2,.7,.2,1) .15s; }
.animated .hand { clip-path: inset(0 100% 0 0); transform: none; transition: opacity .2s ease .35s, clip-path .9s steps(14) .35s; }

.animated .inked .y { color: var(--ink); -webkit-text-stroke-color: var(--ink); animation: stamp .5s cubic-bezier(.3,1.6,.5,1) both; }
.animated .inked:not(.now) .y { color: transparent; -webkit-text-stroke: 1.6px var(--ink); animation: stamp .5s cubic-bezier(.3,1.6,.5,1) both, fill-flash .9s ease both; }
.animated .inked h3, .animated .inked p { opacity: 1; transform: none; }
.animated .inked .hand { opacity: 1; clip-path: inset(0 0 0 0); }

@keyframes stamp {
  0% { transform: scale(1.18) rotate(var(--tilt)); }
  100% { transform: none; }
}
@keyframes fill-flash {
  0% { color: var(--ink); }
  100% { color: transparent; }
}
@keyframes ripple {
  0% { transform: scale(.4); opacity: .9; }
  100% { transform: scale(1.4); opacity: 0; }
}

@media (max-width: 900px) {
  .path { grid-template-columns: 1fr; gap: 22px; }
  .track { display: none; }
}
</style>
