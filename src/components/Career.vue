<script setup>
    import Hypertext from './partials/Hypertext.vue';
    import Heading from './partials/Heading.vue';
    import Label from './partials/Label.vue';

    import {
        createScrollRevealDirective
    } from 'vue-scroll-reveal';

    const createScrollReveal = (origin) => {
        return createScrollRevealDirective({
            duration: 1500,
            distance: '10%',
            origin,
        });
    };

    const vScrollReveal = createScrollReveal('top');
</script>

<template>
    <section id="career" v-scroll-reveal>
        <div class="px-4 py-4 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-8">
            <Heading text="MON PARCOURS PROFESSIONNEL ET SCOLAIRE." border />
            <div class="py-4">
                <div class="flex">
                    <div class="flex flex-col items-center mr-4">
                        <div>
                            <div class="flex items-center justify-center w-5 h-5 bg-neutral-300 my-1 rounded-full">
                            </div>
                        </div>
                        <div class="w-px h-full bg-neutral-300"></div>
                    </div>
                    <div class="pt-1 pb-8">
                        <p class="text-md text-neutral-500">Juillet 2021</p>
                        <p class="mb-2 text-xl text-neutral-800 font-sans font-bold">Diplôme - Brevet des collèges</p>
                        <p class="text-lg text-neutral-800">Obtention du brevet des collèges avec <strong>Mention Très
                                Bien</strong>.</p>
                    </div>
                </div>
                <div class="flex">
                    <div class="flex flex-col items-center mr-4">
                        <div>
                            <div class="flex items-center justify-center w-5 h-5 bg-neutral-300 my-1 rounded-full">
                            </div>
                        </div>
                        <div class="w-px h-full bg-neutral-300"></div>
                    </div>
                    <div class="pt-1 pb-8">
                        <p class="text-md text-neutral-500">Juillet 2022 - {{ getMonth() }} {{ new Date().getFullYear() }}</p>
                        <p class="mb-2 text-xl text-neutral-800 font-sans font-bold">Walyverse</p>
                        <p class="text-lg text-neutral-800">Groupe de serveurs de jeux axé sur le jeu <strong>Minecraft</strong>. Mes principales fonctions sont d'assurer l'intégrité de la communauté à travers le rôle de <strong>Modérateur</strong>, mais aussi de développer différentes fonctionnalités permettant d'enrichir notre offre de contenu en tant que <strong>Développeur</strong>. <Hypertext text="En savoir plus sur Walyverse" href="https://walyverse.fr" target /></p>
                    </div>
                </div>
                <div class="flex">
                    <div class="flex flex-col items-center mr-4">
                        <div>
                            <div class="flex items-center justify-center w-5 h-5 bg-neutral-300 my-1 rounded-full">
                            </div>
                        </div>
                        <div class="w-px h-full bg-neutral-300"></div>
                    </div>
                    <div class="pt-1 pb-8">
                        <p class="text-md text-neutral-500">Juillet 2025</p>
                        <p class="mb-2 text-xl text-neutral-800 font-sans font-bold">Diplôme Baccalauréat <Label name="À venir" color="primary" /><Label name="Souhait" color="primary" /></p>
                        <p class="text-lg text-neutral-800">Obtention du Bac ?</p>
                    </div>
                </div>
                <div class="flex">
                    <div class="flex flex-col items-center mr-4">
                        <div>
                            <div class="flex items-center justify-center w-5 h-5 bg-neutral-300 my-1 rounded-full">
                            </div>
                        </div>
                        <!-- <div class="w-px h-full bg-neutral-300"></div> -->
                    </div>
                    <div class="pt-1">
                        <p class="text-md text-neutral-500">----- 2026</p>
                        <p class="mb-2 text-xl text-neutral-800 font-sans font-bold">Étude Chef de Projet Digital <Label name="À venir" color="primary" /><Label name="Souhait" color="primary" /></p>
                        <p class="text-lg text-neutral-800">Je souhaite d'abord poursuivre des études en tant que <strong>chef de projet</strong> dans le domaine du numérique, puis évoluer vers le <strong>marketing digital</strong>, et enfin <strong>devenir entrepreneur</strong>.</p>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
export default {
  methods: {
    getMonth() {
      const monthsLetters = [
        'Janvier', 'Février', 'Mars', 'Avril', 'Mai', 'Juin',
        'Juillet', 'Août', 'Septembre', 'Octobre', 'Novembre', 'Décembre'
      ];
      const months = new Date().getMonth();
      return monthsLetters[months];
    }
  }
}
</script>