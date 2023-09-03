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

    const vScrollReveal = createScrollReveal('left');

</script>

<template>
    <section id="about">
        <div style="clip-path: polygon(0 50%, 100% 0, 100% 100%, 0 100%);" class="h-24 bg-primary-200"></div>
        <div class="bg-primary-200">
            <div class="px-4 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 py-8" v-scroll-reveal>
                <div class="p-8 rounded shadow-md sm:p-12 bg-neutral-50 skew-y-1">
                    <h2 class="text-4xl font-extrabold font-sans text-neutral-800 mb-8">À PROPOS DE MOI.</h2>
                    <p class="text-xl text-neutral-800 border-l border-l-4 border-neutral-200 pl-4 text-justify">
                        Salut ! Je suis Antonin Russo, un développeur <strong>Full Stack passionné</strong> par la création de solutions numériques innovantes. Ma passion pour le développement a été le moteur de mon parcours. Mon voyage dans le monde de la programmation a commencé il y a {{ new Date().getFullYear() - 2017 }} ans lorsque je n'avais encore que 10 ans, et depuis lors, je suis tombé amoureux de la magie de la transformation d'idées en quelque chose de réel grâce au code. <br><br>

                        En tant qu'<strong>autodidacte</strong>, j'ai constamment soif de nouvelles connaissances et je suis toujours à la recherche de défis techniques à relever. Cette soif d'apprentissage m'a permis de maîtriser un large éventail de langages de programmation, de cadres et d'outils, me permettant ainsi de rester flexible et adaptable dans un monde technologique en constante évolution. <br><br>
                        
                        Le développement de logiciels est un art qui exige de la <strong>discipline</strong> et de <strong>l'engagement</strong>. Mon approche du travail est empreinte de <strong>sérieux</strong>, de <strong>rigueur</strong> et de <strong>professionnalisme</strong>. Adepte du <strong>Clean Code</strong>, je suis <strong>rigoureux</strong> pour maintenir un code propre et bien documenté. <br><br>

                        N'oublions pas que la programmation est avant tout la <strong>résolution de problèmes</strong>. Mon talent réside dans ma capacité à analyser rapidement des situations complexes, à identifier les problèmes et à proposer des solutions efficaces. Je trouve une grande satisfaction à décomposer des défis en éléments gérables, à explorer des approches alternatives et à mettre en œuvre des solutions élégantes. <br><br>

                        Mon parcours m'a permis d'acquérir une <strong>solide expérience</strong> dans une variété de technologies front-end et back-end, allant de JavaScript à PHP puis Laravel. J'apprécie particulièrement de jongler entre ces différentes technologies pour créer des applications web robustes et conviviales. Je travaille principalement dans le monde du WEB mais il m'arrive d'être amené à travailler sur différents projets hors WEB. <Hypertext text="Voir les technologies que j'utilise" href="#techntools" /><br><br>

                        En dehors de la programmation, j'aime explorer de <strong>nouvelles technologies</strong>, lire des articles sur les dernières tendances de développement. Je crois en l'apprentissage continu, car il y a toujours quelque chose de nouveau à découvrir dans un monde en constante évolution de la technologie. <br><br>

                        Je suis ravi de partager mon travail avec vous à travers ce portfolio, alors n'hésitez pas à parcourir mes <strong>projets</strong> et à me <strong>contacter</strong> si vous souhaitez discuter de collaborations potentielles.
                    </p>
                </div>
            </div>
        </div>
        
        <div style="clip-path: polygon(0 0, 100% 0, 100% 50%, 0 100%);" class="h-24 bg-primary-200"></div>
    </section>
</template>