<script setup>
import { useI18n } from 'vue-i18n'
import { onMounted, ref } from 'vue'

const { t } = useI18n()

const statsValues = ref({ years: 0, projects: 0, clients: 0 })
const targets = { years: 9, projects: 20, clients: 4 }

onMounted(() => {
  setTimeout(() => {
    Object.keys(targets).forEach(key => {
      const target = targets[key]
      const step = Math.ceil(target / 20)
      const interval = setInterval(() => {
        statsValues.value[key] = Math.min(statsValues.value[key] + step, target)
        if (statsValues.value[key] >= target) clearInterval(interval)
      }, 60)
    })
  }, 1000)
})
</script>

<template>
  <section id="hero" class="relative overflow-hidden bg-[#f9f8f6]"
           style="background-image: radial-gradient(circle, #d0d0d0 1px, transparent 1px); background-size: 24px 24px;">

    <div class="absolute inset-0 bg-[#f9f8f6]/70 pointer-events-none" />

    <div class="relative z-10 max-w-screen-xl mx-auto grid grid-cols-1 lg:grid-cols-[1fr_400px] min-h-[480px]">

    <!-- LEFT -->
    <div class="flex flex-col justify-between px-8 md:px-14 lg:px-16 py-16">
      <div>
        <div class="inline-flex items-center gap-[7px] text-[12px] font-semibold text-green-700 bg-green-50 border border-green-200 px-3.5 py-[6px] rounded-full mb-8 w-fit"
             style="animation: fadeUp .6s .1s ease both">
          <span class="w-[7px] h-[7px] rounded-full bg-green-500 animate-pulse" />
          {{ t('hero.badge') }}
        </div>

        <div class="font-syne font-extrabold leading-[0.95] tracking-[-2.8px] text-[#0e0e0e] mb-6 overflow-hidden"
             style="font-size: clamp(44px, 5.5vw, 66px)">
          <div class="overflow-hidden"><span class="inline-block" style="animation: slideUp .7s .2s cubic-bezier(.16,1,.3,1) both">{{ t('hero.line1') }}</span></div>
          <div class="overflow-hidden"><span class="inline-block text-[#F4500A]" style="animation: slideUp .7s .35s cubic-bezier(.16,1,.3,1) both">{{ t('hero.line2') }}</span></div>
          <div class="overflow-hidden"><span class="inline-block" style="animation: slideUp .7s .5s cubic-bezier(.16,1,.3,1) both">{{ t('hero.line3') }}</span></div>
          <div class="overflow-hidden"><span class="inline-block text-[#ccc] font-bold" style="font-size: clamp(34px, 4.5vw, 52px); animation: slideUp .7s .65s cubic-bezier(.16,1,.3,1) both">{{ t('hero.line4') }}</span></div>
        </div>

        <p class="font-figtree text-[15px] text-[#666] leading-[1.8] max-w-[460px] mb-9"
           style="animation: fadeUp .6s .75s ease both">
          {{ t('hero.sub') }}
        </p>

        <div class="flex items-center gap-5 mb-12" style="animation: fadeUp .6s .85s ease both">
          <a href="#projects"
             class="btn-ripple font-syne text-[13px] font-bold tracking-[0.3px] bg-[#0e0e0e] text-white px-6 py-3 rounded-lg flex items-center gap-2 no-underline">
            <div class="ripple-bg" />
            <span>{{ t('hero.cta_projects') }}</span>
          </a>
          <a href="/cv-antonin-russo.pdf" download
             class="font-figtree text-[13px] font-medium text-[#888] flex items-center gap-[6px] no-underline relative hover:text-[#0e0e0e] transition-colors group">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" class="group-hover:translate-y-[2px] transition-transform"><path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>
            {{ t('hero.cta_cv') }}
          </a>
        </div>
      </div>

      <!-- Stats -->
      <div class="flex gap-0 border-t border-[#e3e3e3] pt-6" style="animation: fadeUp .6s .95s ease both">
        <div class="flex-1 pr-6">
          <div class="font-syne font-extrabold text-[36px] tracking-[-1.5px] text-[#0e0e0e] leading-none">
            {{ statsValues.years }}<sup class="text-[18px] text-[#F4500A]">+</sup>
          </div>
          <div class="font-figtree text-[12px] text-[#bbb] font-medium uppercase tracking-[0.6px] mt-1.5">{{ t('hero.stat_years') }}</div>
        </div>
        <div class="flex-1 px-6 border-l border-[#e3e3e3]">
          <div class="font-syne font-extrabold text-[36px] tracking-[-1.5px] text-[#0e0e0e] leading-none">
            {{ statsValues.projects }}<sup class="text-[18px] text-[#F4500A]">+</sup>
          </div>
          <div class="font-figtree text-[12px] text-[#bbb] font-medium uppercase tracking-[0.6px] mt-1.5">{{ t('hero.stat_projects') }}</div>
        </div>
        <div class="flex-1 pl-6 border-l border-[#e3e3e3]">
          <div class="font-syne font-extrabold text-[36px] tracking-[-1.5px] text-[#0e0e0e] leading-none">
            {{ statsValues.clients }}<sup class="text-[18px] text-[#F4500A]">+</sup>
          </div>
          <div class="font-figtree text-[12px] text-[#bbb] font-medium uppercase tracking-[0.6px] mt-1.5">{{ t('hero.stat_clients') }}</div>
        </div>
      </div>
    </div>

    <!-- RIGHT — photo -->
    <div class="relative hidden lg:block bg-[#f0ede8] border-l border-[#e3e3e3] overflow-hidden">
      <span class="absolute bottom-[-20px] right-[-10px] font-syne font-extrabold text-[160px] leading-none tracking-[-8px] text-[#F4500A]/[0.07] select-none pointer-events-none">AR</span>
      <span class="absolute top-1/2 right-4 -translate-y-1/2 rotate-90 font-syne text-[9px] font-bold tracking-[3px] text-[#ccc] uppercase whitespace-nowrap select-none">Full-Stack Developer</span>
      <div class="absolute bottom-0 left-1/2 -translate-x-1/2 w-[240px]" style="animation: risePhoto .9s .4s cubic-bezier(.16,1,.3,1) both">
        <div class="absolute top-7 -left-3 w-[6px] h-[80px] bg-[#F4500A] rounded-[3px]" />
        <div class="absolute top-7 -right-3 w-[6px] h-[40px] bg-[#F4500A]/40 rounded-[3px]" />
        <div class="w-[200px] h-[260px] rounded-[100px_100px_0_0] overflow-hidden border-2 border-[#F4500A]/15 bg-[#d8ccc5] mx-auto relative">
          <img src="../assets/img/antonin.png" alt="Antonin Russo" class="w-full h-full object-cover object-top" />
        </div>
        <div class="absolute -top-3.5 -right-5 bg-white border border-[#e3e3e3] rounded-[10px] px-3 py-2 text-[11px] font-semibold text-[#0e0e0e] shadow-lg flex items-center gap-1.5 whitespace-nowrap" style="animation: float 4s ease-in-out infinite">
          <span class="w-[7px] h-[7px] rounded-full bg-[#F4500A]" />
          {{ t('hero.availability') }}
        </div>
      </div>
    </div>

    </div><!-- end max-w-screen-xl grid -->
  </section>
</template>

<style scoped>
@keyframes slideUp {
  from { transform: translateY(110%); opacity: 0; }
  to   { transform: translateY(0);    opacity: 1; }
}
@keyframes fadeUp {
  from { opacity: 0; transform: translateY(12px); }
  to   { opacity: 1; transform: translateY(0); }
}
@keyframes risePhoto {
  from { transform: translateX(-50%) translateY(40px); opacity: 0; }
  to   { transform: translateX(-50%) translateY(0);    opacity: 1; }
}
@keyframes float {
  0%, 100% { transform: translateY(0); }
  50%       { transform: translateY(-6px); }
}
</style>
