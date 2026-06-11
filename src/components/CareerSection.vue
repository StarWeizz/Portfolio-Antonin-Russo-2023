<script setup>
import { onMounted } from 'vue'

onMounted(() => {
  const observer = new IntersectionObserver(
    entries => entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible') }),
    { threshold: 0.1 }
  )
  document.querySelectorAll('#career .fade-up').forEach(el => observer.observe(el))
})
</script>

<template>
  <section id="career" class="border-t border-[#e2e8f0] px-8 md:px-14 lg:px-16 py-16 max-w-screen-lg mx-auto">

    <h2 class="fade-up text-[26px] font-extrabold tracking-[-0.8px] text-[#0f172a] mb-10">Parcours</h2>

    <div class="fade-up grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16">

      <!-- Expériences -->
      <div>
        <div class="text-[10px] font-bold tracking-[1.5px] uppercase text-[#4a6fa5] mb-5 pb-3 border-b border-[#e2e8f0]">
          Expériences
        </div>

        <div class="flex flex-col gap-6">

          <div>
            <p class="text-[11px] text-[#94a3b8] font-medium mb-[3px]">Juil. 2022 — présent</p>
            <p class="text-[14px] font-bold text-[#0f172a] mb-[2px]">Développeur</p>
            <p class="text-[13px] font-medium text-[#4a6fa5] mb-[6px]">Walyverse</p>
            <p class="text-[12px] text-[#64748b] leading-[1.65]">
              Évolution de développeur junior à architecte technique sur 3 ans. Plugins Java, APIs REST, infrastructure Docker/Kubernetes, systèmes de paiement.
            </p>
          </div>

          <div>
            <p class="text-[11px] text-[#94a3b8] font-medium mb-[3px]">En cours</p>
            <p class="text-[14px] font-bold text-[#0f172a] mb-[2px]">Founder &amp; Lead Developer</p>
            <p class="text-[13px] font-medium text-[#4a6fa5] mb-[6px]">Akéa Studio</p>
            <p class="text-[12px] text-[#64748b] leading-[1.65] mb-[6px]">
              Conception et développement de produits web et SaaS pour des clients, de la spécification à la mise en production.
            </p>
            <a href="https://akeastudio.com" target="_blank"
               class="inline-flex items-center gap-[4px] text-[11px] font-semibold text-[#4a6fa5] no-underline hover:text-[#0f172a] transition-colors duration-150">
              akeastudio.com
              <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
                <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6"/>
                <polyline points="15 3 21 3 21 9"/>
                <line x1="10" y1="14" x2="21" y2="3"/>
              </svg>
            </a>
          </div>

          <div>
            <p class="text-[11px] text-[#94a3b8] font-medium mb-[3px]">2022 — présent</p>
            <p class="text-[14px] font-bold text-[#0f172a] mb-[2px]">Projets indépendants</p>
            <p class="text-[13px] font-medium text-[#4a6fa5] mb-[6px]">CRM, SaaS, mobile, infra, IA</p>
            <p class="text-[12px] text-[#64748b] leading-[1.65]">
              Conception et livraison de produits complets en autonomie : CRM métier, applications mobiles, intégrations API, outils SaaS. Voir la section Projets.
            </p>
          </div>

        </div>
      </div>

      <!-- Formation -->
      <div>
        <div class="text-[10px] font-bold tracking-[1.5px] uppercase text-[#4a6fa5] mb-5 pb-3 border-b border-[#e2e8f0]">
          Formation
        </div>

        <div class="flex flex-col gap-6">

          <div>
            <p class="text-[11px] text-[#94a3b8] font-medium mb-[3px]">Sept. 2025 — 2028</p>
            <p class="text-[14px] font-bold text-[#0f172a] mb-[2px]">Bachelor Informatique, IA &amp; Data</p>
            <p class="text-[13px] font-medium text-[#4a6fa5] mb-[6px]">Ynov Campus, Bordeaux</p>
            <p class="text-[12px] text-[#64748b] leading-[1.65]">
              Spécialisation Intelligence Artificielle et Data. Machine learning, analyse de données, systèmes distribués.
            </p>
          </div>

          <div>
            <p class="text-[11px] text-[#94a3b8] font-medium mb-[3px]">2024 — 2025</p>
            <p class="text-[14px] font-bold text-[#0f172a] mb-[2px]">Baccalauréat</p>
            <p class="text-[13px] font-medium text-[#4a6fa5]">Mention Assez Bien</p>
          </div>

        </div>
      </div>

    </div>

  </section>
</template>
