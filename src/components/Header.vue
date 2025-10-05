<script setup>
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

    import imgHeader from '../assets/img/antonin.png';
</script>

<template>
    <section id="header">
        <div class="px-4 md:px-24 lg:px-8 ">
            <div class="flex flex-col justify-between lg:flex-row">
                <div class="lg:w-2/3 lg:pr-5 lg:mb-0 p-16 py-32" v-scroll-reveal-left>
                    <div class="mb-4">
                        <h2 class="mb-8 font-sans text-4xl font-extrabold text-neutral-800 sm:text-6xl sm:leading-none">
                            <span class="text-secondary-400">Antonin RUSSO</span>, <br>Développeur <span class="inline-block text-orange-300 ">Full-Stack</span><br
                                class="hidden md:block" />
                            en <span class="inline-block text-primary-300">Apprentissage</span>
                            continu.
                        </h2>
                        <p class="text-2xl text-neutral-800">
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
                </div>
                <div class="border-l relative lg:w-1/3" v-scroll-reveal-right>
                    <div class="p-16">
                        <img class="object-cover w-full h-56 rounded shadow sm:h-96 ease-in-out duration-100 hover:scale-110"
                            :src="imgHeader" alt="" />
                    </div>
                </div>
            </div>
        </div>
    </section>

</template>