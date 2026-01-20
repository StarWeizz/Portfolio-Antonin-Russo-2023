<script setup>
  import Navbar from './components/Navbar.vue'
  import Footer from './components/Footer.vue'
  import Header from './components/Header.vue'
  import About from './components/About.vue'
  import Projects from './components/Projects.vue';
  import Career from './components/Career.vue';
  import TechnologiesAndTools from './components/TechnologiesAndTools.vue';
  import BackToTop from './components/BackToTop.vue';

</script>

<template>

  <div class="bg-white">
      <Navbar />

      <Header />

      <About />

      <Career />

      <Projects />

      <TechnologiesAndTools />

  </div>

  <Footer />

  <BackToTop />

</template>

<style>
  body::-webkit-scrollbar {
    display: none;
  }
</style>
