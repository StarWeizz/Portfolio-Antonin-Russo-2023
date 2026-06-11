<script setup>
import { RouterLink } from 'vue-router'
</script>

<template>
  <nav class="sticky top-0 z-50 bg-white border-b border-[#e2e8f0]">
    <div class="flex items-center justify-between px-8 md:px-14 lg:px-16 py-4 max-w-screen-lg mx-auto">

      <RouterLink to="/"
        class="text-[14px] font-bold tracking-tight text-[#0f172a] no-underline">
        Antonin Russo
      </RouterLink>

      <ul class="hidden md:flex items-center gap-8 list-none m-0 p-0">
        <li>
          <a href="/#projects"
             class="text-[13px] font-medium text-[#94a3b8] no-underline hover:text-[#0f172a] transition-colors duration-150">
            Projets
          </a>
        </li>
        <li>
          <a href="/#career"
             class="text-[13px] font-medium text-[#94a3b8] no-underline hover:text-[#0f172a] transition-colors duration-150">
            Parcours
          </a>
        </li>
        <li>
          <a href="/#contact"
             class="text-[13px] font-medium text-[#94a3b8] no-underline hover:text-[#0f172a] transition-colors duration-150">
            Contact
          </a>
        </li>
      </ul>

    </div>
  </nav>
</template>
