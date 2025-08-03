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

    document.addEventListener("mousemove", function (e) {
      text.style.left = e.pageX + 'px';
      text.style.top = e.pageY + 'px';
    });
  }
});

</script>

<template>
    
  <h2 class="mouseover_text">Antonin-Russo-</h2>

  <div :style="{ backgroundImage: `url(${backgroundImg})` }" 
       class="bg-cover bg-center min-h-screen relative">
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
        position: absolute;
        font-size: 1.1em;
        color: #000000;
        text-align: center;
        animation: animate 7.5s linear infinite;
        pointer-events: none;
        user-select: none;
        z-index: 100;
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
