<script setup>
    import IconLinkedIn from "./icons/IconLinkedIn.vue"
    import IconInstagram from "./icons/IconInstagram.vue";

    const socialLinks = [{
            link: "https://instagram.com/r.antonin.pro",
            icon: IconInstagram
        },
        {
            link: "https://linkedin.com/in/antonin-russo-33096626b",
            icon: IconLinkedIn
        },
    ];
</script>

<template>
    <div class="bg-neutral-100">
        <div class="lg:max-w-screen-2xl mx-auto py-4 px-5 flex flex-wrap flex-col sm:flex-row">
            <p class="text-gray-500 text-sm text-center sm:text-left">&copy; {{ new Date().getFullYear() }} Antonin
                RUSSO
            </p>
            <span class="inline-flex sm:ml-auto sm:mt-0 mt-2 justify-center sm:justify-start">
                <a v-for="(social, index) in socialLinks" :ket="index" :href="social.link" target="_blank" class="ml-3 text-neutral-800">
                    <component :is="social.icon" /></a>
            </span>
        </div>
    </div>
</template>