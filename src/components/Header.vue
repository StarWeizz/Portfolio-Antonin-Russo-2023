<script setup>
    import IconDownload from "./icons/IconDownload.vue";
    import Logo from "../assets/img/logo.png";
    import {
        createScrollRevealDirective
    } from 'vue-scroll-reveal';

    const createScrollReveal = (origin) => {
        return createScrollRevealDirective({
            duration: 2000,
            distance: '10%',
            origin,
        });
    };

    const vScrollRevealLeft = createScrollReveal('left');
    const vScrollRevealRight = createScrollReveal('right');

    import imgHeader from '../assets/img/antonin.jpg';
</script>

<template>
    <section id="header">
        <div class="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
            <div class="flex flex-col justify-between lg:flex-row">
                <div class="mb-10 lg:w-2/3 lg:pr-5 lg:mb-0" v-scroll-reveal-left>
                    <div class="mb-4">
                        <h2 class="mb-8 font-sans text-4xl font-extrabold text-neutral-800 sm:text-6xl sm:leading-none">
                            <span class="text-orange-300">Antonin RUSSO</span>, Développeur <span class="inline-block text-secondary-300">Full-Stack</span><br
                                class="hidden md:block" />
                            en <span class="inline-block text-primary-300">Apprentissage</span>
                            continu
                        </h2>
                        <p class="text-xl text-neutral-800">
                            Apprenez à me connaître à travers mon <span
                                class="underline underline-offset-2 decoration-secondary-300">Musée Personnel</span> de
                            développeur Full Stack orienté web, où vous découvrirez mes <span
                                class="underline underline-offset-2 decoration-secondary-300">réalisations</span>, mon <span
                                class="underline underline-offset-2 decoration-secondary-300">parcours professionnel et scolaire</span>,
                            et les <span class="underline underline-offset-2 decoration-secondary-300">technologies</span>
                            et <span class="underline underline-offset-2 decoration-secondary-300">outils</span> que
                            j'utilise au quotidien. N'hésitez pas à me contacter pour discuter de vos projets ou me poser
                            des questions !
                        </p>
                    </div>
                    <div class="flex flex-row items-center">
                        <button type="button"
                            class="text-neutral-800 bg-secondary-200 cursor-not-allowed hover:bg-secondary-300 font-medium rounded text-md px-4 py-2 text-center inline-flex items-center">
                            Télécharger mon CV
                            <!-- <IconDownload class="ml-2" /> -->
                        </button>
                    </div>
                </div>
                <div class="relative lg:w-1/3" v-scroll-reveal-right>
                    <div class="p-8">
                        <img class="object-cover w-full h-56 rounded shadow-lg sm:h-96 skew-y-1 ease-in-out duration-100 hover:scale-110"
                            :src="imgHeader" alt="" />
                    </div>
                </div>
            </div>
        </div>
    </section>

</template>