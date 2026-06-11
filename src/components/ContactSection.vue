<script setup>
import { onMounted } from 'vue'

onMounted(() => {
  const observer = new IntersectionObserver(
    entries => entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible') }),
    { threshold: 0.1 }
  )
  document.querySelectorAll('#contact .fade-up').forEach(el => observer.observe(el))
})
</script>

<template>
  <section id="contact" class="border-t border-[#e2e8f0] px-8 md:px-14 lg:px-16 py-16 max-w-screen-lg mx-auto">

    <div class="fade-up">
      <h2 class="text-[26px] font-extrabold tracking-[-0.8px] text-[#0f172a] mb-3">Contact</h2>
      <p class="text-[14px] text-[#64748b] leading-[1.65] max-w-[420px] mb-8">
        Disponible pour des missions freelance, des collaborations ou un poste. Réponse sous 24h.
      </p>
    </div>

    <div class="fade-up flex flex-wrap items-center gap-3 mb-10">
      <a href="mailto:r.antonin.pro@gmail.com"
         class="inline-flex items-center gap-[7px] bg-[#0f172a] text-white text-[13px] font-semibold px-5 py-[10px] rounded-[4px] no-underline hover:bg-[#1e293b] transition-colors duration-150">
        <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <rect x="2" y="4" width="20" height="16" rx="2"/>
          <path d="m22 7-8.97 5.7a1.94 1.94 0 01-2.06 0L2 7"/>
        </svg>
        r.antonin.pro@gmail.com
      </a>
      <a href="/cv-antonin-russo.pdf" download
         class="inline-flex items-center gap-[7px] border border-[#e2e8f0] text-[#475569] text-[13px] font-medium px-5 py-[10px] rounded-[4px] no-underline hover:border-[#4a6fa5] hover:text-[#4a6fa5] transition-colors duration-150">
        <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
          <path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4"/>
          <polyline points="7 10 12 15 17 10"/>
          <line x1="12" y1="15" x2="12" y2="3"/>
        </svg>
        Télécharger le CV
      </a>
    </div>

    <div class="fade-up flex flex-wrap gap-6">
      <a href="https://github.com/StarWeizz" target="_blank"
         class="flex items-center gap-[6px] text-[12px] font-medium text-[#64748b] no-underline hover:text-[#4a6fa5] transition-colors duration-150">
        <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
        </svg>
        github.com/StarWeizz
      </a>
      <a href="https://linkedin.com/in/antonin-russo-33096626b" target="_blank"
         class="text-[12px] font-medium text-[#64748b] no-underline hover:text-[#4a6fa5] transition-colors duration-150">
        LinkedIn
      </a>
      <a href="https://akeastudio.com" target="_blank"
         class="text-[12px] font-medium text-[#64748b] no-underline hover:text-[#4a6fa5] transition-colors duration-150">
        akeastudio.com
      </a>
    </div>

  </section>
</template>
