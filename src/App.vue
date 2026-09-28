<script setup>
import SiteMast from './components/zine/SiteMast.vue'
import CoverSection from './components/zine/CoverSection.vue'
import SelectedWorks from './components/zine/SelectedWorks.vue'
import ProjectIndex from './components/zine/ProjectIndex.vue'
import JourneySection from './components/zine/JourneySection.vue'
import ToolsSection from './components/zine/ToolsSection.vue'
import ContactSection from './components/zine/ContactSection.vue'
</script>

<template>
  <div class="page">
    <SiteMast />
    <main>
      <CoverSection />
      <SelectedWorks />
      <ProjectIndex />
      <JourneySection />
      <ToolsSection />
      <ContactSection />
    </main>
  </div>
</template>
