<script setup>
    import Tag from './partials/Tag.vue';
    import Heading from './partials/Heading.vue';

    import imgPortfolio from '../assets/img/portfolio_ar_2023.png';
    import imgCroqueMilhoc from '../assets/img/croquemilhoc_2023.png';
    import imgSIVIBE from '../assets/img/sivibe_2023.png';
    import imgModSow2 from '../assets/img/mod_sow2_2023.png';
    import imgLauncherSow2 from '../assets/img/launcher_sow2_2023.png';
    import imgWalyverseBot from '../assets/img/walyverse_bot_2023.png';

    const projects = [{
            name: 'Portfolio Antonin Russo',
            description: "Projet de conception de mon portfolio professionnel en vue de présenter mes compétences et réalisations. Ce projet vise à mettre en avant mon parcours, mes compétences clés, ainsi que mes expériences professionnelles et projets antérieurs.",
            date: 'Septembre 2023',
            tags: ['HTML', 'TailwindCSS', 'Vue.JS'],
            img: imgPortfolio,
            link: '',
        },
        {
            name: 'Croque Milhoc Site Vitrine',
            description: "Conception d'un site web vitrine pour la marque Croque Milhoc, comprenant une interface d'administration permettant la gestion efficace du contenu du site.",
            date: 'Mai 2022',
            tags: ['HTML', 'CSS', 'SASS', 'PHP', 'MySQL'],
            img: imgCroqueMilhoc,
            link: '#',
        },
        {
            name: 'Si Vis Pacem Para Bellum (SIVIBE)',
            description: "Développement d'une plateforme web sur mesure destinée à notre client, incluant un module d'abonnement sophistiqué ainsi qu'un système de gestion de profils utilisateur. De plus, une interface d'administration dédiée est mise en place pour permettre au client de superviser efficacement son site.",
            date: 'Juin 2023',
            tags: ['HTML', 'TailwindCSS', 'Javascript', 'PHP', 'Laravel', 'MySQL'],
            img: imgSIVIBE,
            link: '#',
        },
        {
            name: 'Mod Minecraft Forge 1.12.2',
            description: "Conception et création d'un mod Minecraft sur mesure visant à enrichir l'expérience du jeu pour notre client en introduisant de nouveaux outils, armures, minerais, et objets spéciaux.",
            date: 'Avril 2023',
            tags: ['Java', 'Gradle', 'Forge'],
            img: imgModSow2,
            link: '#',
        },

        {
            name: 'Launcher Minecraft Forge 1.12.2',
            description: "Conception et réalisation d'un lanceur dédié à Minecraft pour le serveur TheSoulOfWarcraft, offrant une expérience d'accès fluide à l'utilisateur, qu'il dispose d'un compte Mojang ou d'un compte cracké.",
            date: 'Avril 2023',
            tags: ['Java', 'Gradle', 'Forge'],
            img: imgLauncherSow2,
            link: '#',
        },
        {
            name: 'Robot Discord Walyverse v14.11',
            description: "Développement d'un robot Discord personnalisé pour la communauté Walyverse, intégrant un système de gestion de tickets avancé.",
            date: 'Avril 2023',
            tags: ['Javascript', 'Discord.JS'],
            img: imgWalyverseBot,
            link: '#',
        },
        
    ]

    const sortByDateDescending = (a, b) => {
    return new Date(b.date) - new Date(a.date);
    };

    projects.sort(sortByDateDescending);

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

    const vScrollReveal = createScrollReveal('left');
</script>

<template>
    <section id="projects" v-scroll-reveal>
        <div class="px-4 py-4 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-2xl md:px-24 lg:px-8 lg:py-8">
            <Heading text="MES RÉALISATIONS ET PROJETS." border />
            <div class="max-w-full grid gap-5 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                <div v-for="(project, index) in projects" :key="index"
                    class="bg-white rounded ease-in-out duration-100 sm:hover:scale-105">
                    <a :href="project.link" aria-label="Article"><img :src="project.img" class="object-cover w-full h-48 rounded" alt="" /></a>
                    <div class="py-5 max-w-full">
                        <p class="text-md text-neutral-500">
                            {{ project.date  }}
                        </p>
                        <a href="/" aria-label="Article"
                            class="inline-block mb-2 text-black transition-colors duration-200 hover:text-deep-purple-accent-700">
                            <p class="text-xl text-neutral-800 font-sans font-bold">{{ project.name }}</p>
                        </a>
                        <p class="mb-4 text-gray-700 line-clamp-7 text-justify">
                            {{ project.description }}
                        </p>
                        <div class="flex flex-wrap">
                            <Tag v-for="(tag, index) in project.tags" :key="index" :name="tag" class="mr-2 mb-2" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>