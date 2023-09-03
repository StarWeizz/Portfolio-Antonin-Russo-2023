<script setup>
  import IconHtml from './icons/IconHtml.vue';
  import IconCSS from './icons/IconCSS.vue';
  import IconSASS from './icons/IconSASS.vue';
  import IconTailwindCSS from './icons/IconTailwindCSS.vue';
  import IconJavascript from './icons/IconJavascript.vue';
  import IconVueJS from './icons/IconVueJS.vue';
  import IconMongoDB from './icons/IconMongoDB.vue';
  import IconMySQL from './icons/IconMySQL.vue';
  import IconSQLite from './icons/IconSQLite.vue';
  import IconPHP from './icons/IconPHP.vue';
  import IconLaravel from './icons/IconLaravel.vue';
  import IconJava from './icons/IconJava.vue';
  import IconDebian from './icons/IconDebian.vue';
  import IconUbuntu from './icons/IconUbuntu.vue';
  import IconSublimeText from './icons/IconSublimeText.vue';
  import IconVSCode from './icons/IconVSCode.vue';
  import IconIA from './icons/IconIA.vue';
  import IconGithub from './icons/IconGithub.vue';

  import Heading from './partials/Heading.vue';

  import {
    createScrollRevealDirective
  } from 'vue-scroll-reveal';

  const createScrollReveal = (origin) => {
    return createScrollRevealDirective({
      duration: 500,
      distance: '10%',
      mobile: false,
      origin,
    });
  };

  const vScrollRevealIcon = createScrollReveal('top');

  const icons = [
    { name: 'HTML', component: IconHtml, delay: 600 },
    { name: 'CSS', component: IconCSS, delay: 700 },
    { name: 'SASS', component: IconSASS, delay: 800 },
    { name: 'TAILWIND CSS', component: IconTailwindCSS, delay: 800 },
    { name: 'JAVASCRIPT', component: IconJavascript, delay: 700 },
    { name: 'VUE.JS', component: IconVueJS, delay: 600 },
    { name: 'MONGO DB', component: IconMongoDB, delay: 700 },
    { name: 'MYSQL', component: IconMySQL, delay: 900 },
    { name: 'SQLITE', component: IconSQLite, delay: 1200 },
    { name: 'PHP', component: IconPHP, delay: 1200 },
    { name: 'LARAVEL', component: IconLaravel, delay: 900 },
    { name: 'JAVA', component: IconJava, delay: 700 },
    { name: 'DEBIAN', component: IconDebian, delay: 1000 },
    { name: 'UBUNTU', component: IconUbuntu, delay: 1100 },
    { name: 'SUBLIME TEXT', component: IconSublimeText, delay: 1300 },
    { name: 'VSCODE', component: IconVSCode, delay: 1300 },
    { name: 'INTELLIGENCE ARTIFICIELLE', component: IconIA, delay: 1100 },
    { name: 'GITHUB', component: IconGithub, delay: 1000 },
  ];
</script>

<template>
  <section id="techntools" v-scroll-reveal>
    <div class="px-4 py-12 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-16">
      <Heading text="LES TECHNOLOGIES ET OUTILS QUE J'UTILISE." border />
      <div class="grid grid-cols-2 xs:grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6">
        <div v-for="(icon, index) in icons" :key="index" class="p-8 border-b border-neutral-200">
          <div v-scroll-reveal-icon.delay="{ delay: icon.delay }">
            <div class="max-w-md text-center hover:scale-125 ease-in-out duration-100">
              <div class="flex items-center justify-center w-16 h-16 mx-auto mb-4">
                <component :is="icon.component" />
              </div>
              <h6 class="mb-2 font-semibold leading-5">{{ icon.name }}</h6>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>