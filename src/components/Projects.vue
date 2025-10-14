<script setup>
    import Tag from './partials/Tag.vue';
    import Heading from './partials/Heading.vue';
    import SmallTag from './partials/SmallTag.vue';

    import imgPortfolio from '../assets/img/portfolio_ar_2023.png';
    import imgCroqueMilhoc from '../assets/img/croquemilhoc_2023.png';
    import imgSIVIBE from '../assets/img/sivibe_2023.png';
    import imgModSow2 from '../assets/img/mod_sow2_2023.png';
    import imgLauncherSow2 from '../assets/img/launcher_sow2_2023.png';
    import imgWalyverseBot from '../assets/img/walyverse_bot_2023.png';
    import imgStripeMinecraft from '../assets/img/walyverse_stripe-minecraft_2024.png';
    import imgDockWear from '../assets/img/dockwear_2024.png';
    import imgAAB from '../assets/img/ayurvedaartetbeaute_2024.png';
    import imgPEACalculator from '../assets/img/pea_calculator_2024.png';
    import imgBBA from '../assets/img/bba_2024.png';
    import imgGastroShare from '../assets/img/GastroShare_2022.png'
    import imgLaraScrapRE from '../assets/img/larascrap-re_2024.png';
    import imgVaultify from '../assets/img/vaultify_2025.png';
    import imgAyurJyotish from '../assets/img/ayur-jyotish.fr_2025.png';
    import imgSTRTIFY from '../assets/img/srtify_2025.png';

    const projects = [
        {
            name: 'Portfolio Antonin Russo',
            description: "Projet de conception de mon portfolio professionnel en vue de présenter mes compétences et réalisations. Ce projet vise à mettre en avant mon parcours, mes compétences clés, ainsi que mes expériences professionnelles et projets antérieurs.",
            date: 'Septembre 2023',
            tags: ['HTML', 'TailwindCSS', 'Vue.JS'],
            img: imgPortfolio,
            link: '',
            status: ['Maintenu', 'Terminé']
        },
        {
            name: 'Boutique stripe dans Minecraft',
            description: "Projet qui consiste à créer une boutique stripe directement dans un serveur Minecraft. Le joueur clique sur l'objet de son choix, un lien pour payer est généré. Le joueur rentre ces coordonnées et reçois directement en jeu son produit. Le système backend est géré avec des webhooks et un reverse proxy.",
            date: 'Mars 2024',
            tags: ['Stripe', 'Nginx', 'Java', 'Maven', 'Javascript'],
            img: imgStripeMinecraft,
            status: ['Maintenu', 'Terminé', 'Privé'],
            link: '',
        },
        {
            name: 'Simulateur PEA',
            description: "Simulateur du compte PEA (Plan Épargne Investissement) réalisé en python. L'utilisateur est invité à renseigner le montant souhaité, son investissement mensuel ainsi que le rendement annuel et le simulateur lui donnera la durée pour atteindre le montant souhaité sur le compte. Le simulateur prend en compte l'imposition.",
            date: 'Décembre 2024',
            tags: ['Python'],
            img: imgPEACalculator,
            status: ['En cours'],
            link: '',
        },
        {
            name: 'SRTIFY',
            description: "SRTIFY est un outil permettant de transposer un fichier srt en blog/article",
            date: 'Juin 2025',
            tags: ['HTML', 'Laravel', 'Tailwind'],
            img: imgSTRTIFY,
            status: ['En cours'],
            link: '',
        },
        {
            name: 'AyurJyotish',
            description: "AyurJyotish est un site de bien être et d'astrologie indienne.",
            date: 'Mai 2025',
            tags: ['HTML', 'Wordpress'],
            img: imgAyurJyotish,
            status: ['En cours', 'Privé'],
            link: '',
        },
        {
            name: 'Croque Milhoc Site Vitrine',
            description: "Conception d'un site web vitrine pour la marque Croque Milhoc, comprenant une interface d'administration permettant la gestion efficace du contenu du site.",
            date: 'Mai 2022',
            tags: ['HTML', 'CSS', 'SASS', 'PHP', 'MySQL'],
            img: imgCroqueMilhoc,
            status: ['Abandonné', 'Terminé'],
            link: '#',
        },
        {
            name: 'Si Vis Pacem Para Bellum (SIVIBE)',
            description: "Développement d'une plateforme web sur mesure destinée à notre client, incluant un module d'abonnement sophistiqué ainsi qu'un système de gestion de profils utilisateur. De plus, une interface d'administration dédiée est mise en place pour permettre au client de superviser efficacement son site.",
            date: 'Juin 2023',
            tags: ['HTML', 'TailwindCSS', 'Javascript', 'PHP', 'Laravel', 'MySQL'],
            img: imgSIVIBE,
            status: ['Terminé', 'Maintenu', 'Privé'],
            link: '#',
        },
        {
            name: 'Mod Minecraft Forge 1.12.2',
            description: "Conception et création d'un mod Minecraft sur mesure visant à enrichir l'expérience du jeu pour notre client en introduisant de nouveaux outils, armures, minerais, et objets spéciaux.",
            date: 'Avril 2023',
            tags: ['Java', 'Gradle', 'Forge'],
            img: imgModSow2,
            status: ['Terminé'],
            link: '#',
        },
        {
            name: 'Launcher Minecraft Forge 1.12.2',
            description: "Conception et réalisation d'un lanceur dédié à Minecraft pour le serveur TheSoulOfWarcraft, offrant une expérience d'accès fluide à l'utilisateur, qu'il dispose d'un compte Mojang ou d'un compte cracké.",
            date: 'Avril 2023',
            tags: ['Java', 'Gradle', 'Forge'],
            img: imgLauncherSow2,
            status: ['Terminé'],
            link: '#',
        },
        {
            name: 'Robot Discord Walyverse v14.11',
            description: "Développement d'un robot Discord personnalisé pour la communauté Walyverse, intégrant un système de gestion de tickets avancé.",
            date: 'Avril 2023',
            tags: ['Javascript', 'Discord.JS', 'MongoDB'],
            img: imgWalyverseBot,
            status: ['Maintenu', 'Terminé'],
            link: '#',
        },
        {
            name: 'DockWear',
            description: "Conception, réalisation et design d'un site vitrine pour la marque de vêtements DockWear. Vue.JS router est utilisé pour créer une application MPA. Création du site dans un style innovant, moderne et original.",
            date: 'Juin 2024',
            tags: ['Vue.JS', 'HTML', 'TailwindCSS', 'Lenis'],
            img: imgDockWear,
            status: ['Suspendu'],
            link: 'https://lustrous-mochi-381e08.netlify.app/',
        },
        {
            name: 'Ayurveda Art & Beauté',
            description: "Première projet de réalisation et création d'un site internet à l'aide de WordPress. Ce site vise à promouvoir la marque AAB à travers un site vitrine et à présenter les services proposés.",
            date: 'Novembre 2024',
            tags: ['WordPress', 'CSS'],
            img: imgAAB,
            status: ['Suspendu'],
            link: '#',
        },
        {
            name: 'Break Budding Amethyst',
            description: "Réalisation d'un plugin Minecraft qui permet de casser les druses d'améthystes avec ou non toucher de soie, et ou non, une permission.",
            date: 'Février 2024',
            tags: ['Java'],
            img: imgBBA,
            status: ['Terminé', 'Maintenu'],
            link: 'https://www.spigotmc.org/resources/1-17-1-21-4-break-budding-amethyst.113205/',
        },
        {
            name: 'GastroShare',
            description: "Réalisation du site vitrine d'un site internet fictif dans le but d'afficher des plats sains (image non contractuelle) et bons pour la santé.",
            date: 'Novembre 2022',
            tags: ['HTML', 'Javascript', 'CSS'],
            img: imgGastroShare,
            status: ['Abandonné'],
            link: '#',
        },
        {
            name: 'LaraScrap-RE',
            description: "Création d'un site web personnel à but non commercial. L'idée est que le site scrap des biens immobiliers en fonction de vos critères de recherches sur des dizaines d'agences et de sites différents. Le site vous notifie quand une annonce est susceptible de vous plaire.",
            date: 'Décembre 2024',
            tags: ['HTML', 'Javascript', 'Laravel', 'TailwindCSS', 'MySQL', 'PHP'],
            img: imgLaraScrapRE,
            status: ['Suspendu'],
            link: '#',
        },
        {
            name: 'Vaultify',
            description: "Création et réalisation simple d'une application de bureau mais aussi de téléphone, afin de gérer ses mots de passe facilement, sans passer par un service tier déjà existant.",
            date: 'Janvier 2025',
            tags: ['Dart', 'Flutter'],
            img: imgVaultify,
            status: ['Suspendu'],
            link: '#',
        },
    ];

    // Fonction pour convertir la date 'Mois Année' en objet Date
    const parseDate = (dateString) => {
        const months = [
            'Janvier', 'Février', 'Mars', 'Avril', 'Mai', 'Juin', 'Juillet', 'Août', 'Septembre',
            'Octobre', 'Novembre', 'Décembre'
        ];
        const [monthName, year] = dateString.split(' ');
        const monthIndex = months.indexOf(monthName);
        return new Date(year, monthIndex); // Créer un objet Date avec l'année et le mois
    };

    // Trier les projets par date
    const sortByDateDescending = (a, b) => {
        return parseDate(b.date) - parseDate(a.date);
    };

    // Trier les projets
    projects.sort(sortByDateDescending);

    import { createScrollRevealDirective } from 'vue-scroll-reveal';

    const createScrollReveal = (origin) => {
        return createScrollRevealDirective({
            duration: 1500,
            distance: '10%',
            origin,
        });
    };

    const vScrollReveal = createScrollReveal('left');
    
    // Fonction pour obtenir les classes dynamiques
    const getStatusClass = (status) => {
    switch (status) {
        case 'Maintenu':
        return 'bg-green-100 text-green-800';
        case 'En cours':
        return 'bg-gray-100 text-gray-800';
        case 'Abandonné':
        return 'bg-red-100 text-red-800';
        case 'Terminé':
        return 'bg-blue-100 text-blue-800';
        case 'Suspendu':
        return 'bg-orange-100 text-orange-800'
        case 'Privé':
        return 'bg-purple-100 text-purple-800';
        default:
        return 'bg-gray-100 text-gray-800';
    }
    };
    
</script>

<template>
    <section id="projects" v-scroll-reveal>
        <div class="aboslute top-0 left-0 -z-1">
            <svg xmlns="http://www.w3.org/2000/svg" class="text-white translate-y-1" viewBox="0 0 1440 320"><path fill="currentColor" fill-opacity="1" d="M0,320L48,298.7C96,277,192,235,288,218.7C384,203,480,213,576,234.7C672,256,768,288,864,277.3C960,267,1056,213,1152,202.7C1248,192,1344,224,1392,240L1440,256L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path></svg>
        </div>
        <div class="px-4 py-4 mx-auto sm:max-w-xl md:max-w-full bg-white rounded lg:max-w-screen-4xl md:px-24 lg:px-48 lg:py-8">
            <Heading text="MES RÉALISATIONS ET PROJETS." border class="pt-12 w-full z-20" />
            <div class="max-w-full grid gap-5 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                <div v-for="(project, index) in projects" :key="index"
                    class="bg-white rounded ease-in-out duration-100 sm:hover:scale-105">
                    <a :href="project.link" aria-label="Article"><img :src="project.img" class="object-cover w-full h-48 rounded" alt="" /></a>
                    <div class="py-5 max-w-full">
                        <p class="text-md text-neutral-500 flex items-center justify-between">
                            {{ project.date  }}
                            <div>
                                <SmallTag v-for="(status, index) in project.status" class="mr-2" :key="index" :name="status" :class="getStatusClass(status)" />
                            </div>
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
            <h3 class="mt-12 font-mono text-center text-4xl">Et bien d'autres encore...<br></h3>
        </div>
    </section>
</template>