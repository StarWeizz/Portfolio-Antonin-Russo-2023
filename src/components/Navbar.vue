<script setup>
    defineProps({
        title: String,
    })

    const menuItems = [{
            label: "À PROPOS",
            href: "#about"
        },
        {
            label: "PARCOURS",
            href: "#career"
        },
        {
            label: "TECHNOLOGIES & OUTILS",
            href: "#techntools"
        },
        {
            label: "PROJETS",
            href: "#projects"
        },
        {
            label: "CONTACT",
            href: "/"
        },
    ];
</script>

<template>
    <div class="border-b border-gray-300">
        <nav class="px-4 py-8 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-2xl md:px-24 lg:px-8">
            <div class="relative flex items-center justify-between">
                <ul class="flex items-center hidden space-x-8 lg:flex" id="nav">
                    <li v-for="menuItem in menuItems" :key="menuItem.label">
                        <a :href="menuItem.href" :aria-label="menuItem.label" :title="menuItem.label"
                            class="font-medium tracking-wide text-xl text-neutral-800 transition-colors duration-200 hover:text-deep-purple-accent-400 relative after:bg-neutral-800 after:absolute after:h-1 after:w-0 after:-bottom-2 after:left-0 hover:after:w-full after:transition-all after:duration-300">
                            {{ menuItem.label }}
                        </a>
                    </li>
                </ul>
                <div class="lg:hidden">
                    <button aria-label="Open Menu" title="Open Menu"
                        class="p-2 -mr-1 transition duration-200 rounded focus:outline-none focus:shadow-outline hover:bg-deep-purple-50 focus:bg-deep-purple-50"
                        @click="isMenuOpen = true">
                        <svg class="w-5 text-gray-600" viewBox="0 0 24 24">
                            <path fill="currentColor"
                                d="M23,13H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,13,23,13z"></path>
                            <path fill="currentColor"
                                d="M23,6H1C0.4,6,0,5.6,0,5s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,6,23,6z">
                            </path>
                            <path fill="currentColor"
                                d="M23,20H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,20,23,20z"></path>
                        </svg>
                    </button>
                    <div v-if="isMenuOpen" class="absolute top-0 left-0 w-full">
                        <div class="bg-gray-800 z-10 pl-2 pt-1 pb-2 relative">
                            <div class="flex items-center justify-between mb-4">
                                <div>
                                    <a href="/" aria-label="Company" title="Company" class="inline-flex items-center">
                                        <span class="text-xl tracking-wide text-gray-800 uppercase">{{ title }}</span>
                                    </a>
                                </div>
                                <div>
                                    <button aria-label="Close Menu" title="Close Menu"
                                        class="p-2 -mt-2 -mr-2 transition duration-200 rounded hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline"
                                        @click="isMenuOpen = false">
                                        <svg class="w-5 text-gray-600" viewBox="0 0 24 24">
                                            <path fill="currentColor"
                                                d="M19.7,4.3c-0.4-0.4-1-0.4-1.4,0L12,10.6L5.7,4.3c-0.4-0.4-1-0.4-1.4,0s-0.4,1,0,1.4l6.3,6.3l-6.3,6.3 c-0.4,0.4-0.4,1,0,1.4C4.5,19.9,4.7,20,5,20s0.5-0.1,0.7-0.3l6.3-6.3l6.3,6.3c0.2,0.2,0.5,0.3,0.7,0.3s0.5-0.1,0.7-0.3 c0.4-0.4,0.4-1,0-1.4L13.4,12l6.3-6.3C20.1,5.3,20.1,4.7,19.7,4.3z">
                                            </path>
                                        </svg>
                                    </button>
                                </div>
                            </div>
                            <nav>
                                <ul class="space-y-4">
                                    <li v-for="menuItem in menuItems" :key="menuItem.label">
                                        <a :href="menuItem.href" :aria-label="menuItem.label" :title="menuItem.label"
                                            class="font-medium tracking-wide text-neutral-800 transition-colors duration-200 hover:text-deep-purple-accent-400 relative after:bg-primary-200 after:absolute after:h-0.5 after:w-0 after:bottom-0 after:left-0 hover:after:w-full after:transition-all after:duration-300">
                                            {{ menuItem.label }}
                                        </a>
                                    </li>
                                </ul>
                            </nav>
                        </div>
                    </div>
                </div>
                <div class="flex">
                    <button href="#"
                        class="flex overflow-hidden items-center text-sm font-medium focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 bg-secondary-500 text-white shadow hover:bg-secondary-500/90 h-9 px-4 py-2 max-w-52 whitespace-pre md:flex group relative w-full justify-center gap-2 rounded-md transition-all duration-300 ease-out hover:ring-2 hover:ring-secondary-500 hover:ring-offset-2 ">
                        <span
                            class="absolute right-0 -mt-12 h-32 w-8 translate-x-12 rotate-12 bg-white opacity-10 transition-all duration-1000 ease-out group-hover:-translate-x-40"></span>
                        <div class="flex items-center">
                            <svg class="w-4 h-4 fill-current mr-2" viewBox="0 0 512 512">
                                <path d="M256 0a256 256 0 1 0 0 512A256 256 0 1 0 256 0zM376.9 294.6L269.8 394.5c-3.8 3.5-8.7 5.5-13.8 5.5s-10.1-2-13.8-5.5L135.1 294.6c-4.5-4.2-7.1-10.1-7.1-16.3c0-12.3 10-22.3 22.3-22.3l57.7 0 0-96c0-17.7 14.3-32 32-32l32 0c17.7 0 32 14.3 32 32l0 96 57.7 0c12.3 0 22.3 10 22.3 22.3c0 6.2-2.6 12.1-7.1 16.3z"/>
                            </svg>
                            <span class="ml-1 text-white">Télécharger mon CV</span>
                        </div>
                    </button>

                </div>
            </div>
        </nav>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                isMenuOpen: false,
            };
        },
    };
</script>