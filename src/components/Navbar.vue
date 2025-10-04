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