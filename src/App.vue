<script setup>
  import Navbar from './components/Navbar.vue'
  import Footer from './components/Footer.vue'
  import Header from './components/Header.vue'
  import About from './components/About.vue'
  import Projects from './components/Projects.vue';
  import Career from './components/Career.vue';
  import TechnologiesAndTools from './components/TechnologiesAndTools.vue';
import { onMounted } from 'vue';

  import backgroundImg from './assets/img/background_top.jpg';

  // Ajoutez une fonction pour exécuter le script après que le DOM soit chargé
  onMounted(() => {
  const isPC = () => {
    const userAgentInfo = navigator.userAgent;
    const agents = ["Android", "iPhone", "SymbianOS", "Windows Phone", "iPad", "iPod"];
    let flag = true;
    for (let i = 0; i < agents.length; i++) {
      if (userAgentInfo.indexOf(agents[i]) > 0) {
        flag = false;
        break;
      }
    }
    return flag;
  };

  if (isPC()) {
    const text = document.querySelector('.mouseover_text');
    text.innerHTML = text.textContent.replace(/\S/g, "<span>$&</span>");

    let element = document.querySelectorAll('.mouseover_text span');
    for (let i = 0; i < element.length; i++) {
      element[i].style.transform = "rotate(" + i * 26 + "deg)";
    }

    let scrollTimer = null;

    document.addEventListener("mousemove", function (e) {
      text.style.left = e.clientX + 'px';
      text.style.top = e.clientY + 'px';
      text.style.opacity = '1';
    });

    document.addEventListener("scroll", function () {
      text.style.opacity = '0';
      
      clearTimeout(scrollTimer);
      scrollTimer = setTimeout(() => {
        text.style.opacity = '1';
      }, 150);
    });
  }
});

</script>

<template>
    
  <h2 class="mouseover_text mix-blend-difference">Antonin-Russo-</h2>

  <div class="bg-white">
      <Navbar />

      <Header />

      <About />

      <Career />

      <Projects />

      <TechnologiesAndTools />

  </div>

  <Footer />

</template>

<style>
  body::-webkit-scrollbar {
    display: none;
  }

    .mouseover_text {
        position: fixed;
        font-size: 1.1em;
        color: #ffffff;
        text-align: center;
        animation: animate 7.5s linear infinite;
        pointer-events: none;
        user-select: none;
        z-index: 100;
        transition: opacity 0.2s ease-out;
        mix-blend-mode: difference;
    }

    @keyframes animate
    {
        0%
        {
            transform: rotate(360deg);
        }
        100%
        {
            transform: rotate(0deg);
        }
    }

    .mouseover_text span {
        position: absolute;
        top: -100px;
        text-transform: uppercase;
        display: inline-block;
        transform-origin: 0 100px;
    }
</style>
