<script setup>
import Navbar from '../components/Navbar.vue'
import HeroSection from '../components/HeroSection.vue'
import ProjectsSection from '../components/ProjectsSection.vue'
import CareerSection from '../components/CareerSection.vue'
import ContactSection from '../components/ContactSection.vue'
import Footer from '../components/Footer.vue'
import BackToTop from '../components/BackToTop.vue'
</script>

<template>
  <Navbar />
  <main>
    <HeroSection />
    <ProjectsSection />
    <CareerSection />
    <ContactSection />
  </main>
  <Footer />
  <BackToTop />
</template>
