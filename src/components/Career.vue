<script setup>
    import Hypertext from './partials/Hypertext.vue';

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
    <section id="career" v-scroll-reveal class="bg-gradient-to-br from-neutral-900 to-neutral-800 text-white py-16">
        <div class="container mx-auto flex flex-col items-start md:flex-row my-12 md:my-24">
            <!-- Sticky sidebar -->
            <div class="flex flex-col w-full sticky md:top-36 lg:w-1/3 mt-2 md:mt-12 px-8">
                <p class="ml-2 text-rose-400 uppercase tracking-loose font-semibold">Mon Parcours</p>
                <p class="text-3xl md:text-4xl leading-normal md:leading-relaxed mb-2 font-bold">
                    Parcours Professionnel et Scolaire
                </p>
                <p class="text-lg md:text-xl text-neutral-300 mb-4">
                    Découvrez mon évolution académique et professionnelle, de mes premiers diplômes à mes projets futurs dans le domaine de la technologie et de l'intelligence artificielle.
                </p>
            </div>

            <!-- Timeline -->
            <div class="ml-0 md:ml-12 lg:w-2/3 sticky">
                <div class="container mx-auto w-full h-full">
                    <div class="relative wrap overflow-hidden p-10 h-full">
                        <!-- Vertical line -->
                        <div class="border-2-2 border-rose-400 absolute h-full border"
                            style="right: 50%; border: 2px solid #fb7185; border-radius: 1%;"></div>
                        <div class="border-2-2 border-rose-400 absolute h-full border"
                            style="left: 50%; border: 2px solid #fb7185; border-radius: 1%;"></div>

                        <!-- Item 1 - Right -->
                        <div class="mb-8 flex justify-between flex-row-reverse items-center w-full left-timeline">
                            <div class="order-1 w-5/12"></div>
                            <div class="order-1 w-5/12 px-1 py-4 text-right">
                                <p class="mb-3 text-lg text-rose-400">Juillet 2021</p>
                                <h4 class="mb-3 font-bold text-xl md:text-3xl">Diplôme - Brevet des collèges</h4>
                                <p class="text-base md:text-lg leading-relaxed text-neutral-300">
                                    Obtention du brevet des collèges avec <strong class="text-white">Mention Très Bien</strong>.
                                </p>
                            </div>
                        </div>

                        <!-- Item 2 - Left -->
                        <div class="mb-8 flex justify-between items-center w-full right-timeline">
                            <div class="order-1 w-5/12"></div>
                            <div class="order-1 w-5/12 px-1 py-4 text-left">
                                <p class="mb-3 text-lg text-rose-400">Juillet 2022 - {{ getMonth() }} {{ new Date().getFullYear() }}</p>
                                <h4 class="mb-3 font-bold text-xl md:text-3xl">Groupe Walyverse</h4>
                                <p class="text-base md:text-lg leading-relaxed text-neutral-300">
                                    Groupe de serveurs de jeux axé sur le jeu <strong class="text-white">Minecraft</strong>. Mes principales fonctions sont d'assurer l'intégrité de la communauté à travers le rôle d'<strong class="text-white">Administrateur</strong>, mais aussi de développer différentes fonctionnalités permettant d'enrichir notre offre de contenu en tant que <strong class="text-white">Développeur</strong>.
                                    <Hypertext class="text-rose-400 hover:text-rose-300" text="En savoir plus sur Walyverse" href="https://walyverse.fr" target />
                                </p>
                            </div>
                        </div>

                        <!-- Item 3 - Right -->
                        <div class="mb-8 flex justify-between flex-row-reverse items-center w-full left-timeline">
                            <div class="order-1 w-5/12"></div>
                            <div class="order-1 w-5/12 px-1 py-4 text-right">
                                <p class="mb-3 text-lg text-rose-400">Juillet 2025</p>
                                <h4 class="mb-3 font-bold text-xl md:text-3xl">Diplôme Baccalauréat</h4>
                                <p class="text-base md:text-lg leading-relaxed text-neutral-300">
                                    Obtention du Baccalauréat avec <strong class="text-white">Mention Assez Bien</strong>.
                                </p>
                            </div>
                        </div>

                        <!-- Item 4 - Left -->
                        <div class="mb-8 flex justify-between items-center w-full right-timeline">
                            <div class="order-1 w-5/12"></div>
                            <div class="order-1 w-5/12 px-1 py-4">
                                <p class="mb-3 text-lg text-rose-400">Septembre 2025</p>
                                <h4 class="mb-3 font-bold text-xl md:text-3xl text-left">Étude dans l'Informatique (Spécialisation IA & Data)</h4>
                                <p class="text-base md:text-lg leading-relaxed text-neutral-300">
                                    Actuellement étudiant à <strong class="text-white">Ynov Campus</strong>, je poursuis une formation spécialisée en informatique, axée sur l'<strong class="text-white">intelligence artificielle</strong> et la <strong class="text-white">data</strong>, afin de développer des compétences avancées dans ces domaines innovants.
                                </p>
                            </div>
                        </div>

                        <!-- Item 5 - Right -->
                        <div class="mb-8 flex justify-between flex-row-reverse items-center w-full left-timeline">
                            <div class="order-1 w-5/12"></div>
                            <div class="order-1 w-5/12 px-1 py-4 text-right">
                                <p class="mb-3 text-lg text-rose-400">Juillet 2028</p>
                                <span class="inline-block text-base font-medium mb-2 px-3 py-1 rounded-full bg-green-500/20 text-green-400 border border-green-500/30">À venir</span>
                                <h4 class="mb-3 font-bold text-xl md:text-3xl">Lancement d'un projet entrepreneurial</h4>
                                <p class="text-base md:text-lg leading-relaxed text-neutral-300">
                                    Mon objectif est de lancer mon propre projet dans le domaine de la <strong class="text-white">technologie</strong> et de l'<strong class="text-white">innovation</strong>, en mettant à profit mes compétences.
                                </p>
                            </div>
                        </div>
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