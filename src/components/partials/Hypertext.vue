<script setup>
    defineProps({
        text: String,
        href: String,
        target: Boolean,
    })
</script>

<template>
    <a class="after:content-['➡️'] text-secondary-500 hover:translate-x-0.5 hover:text-secondary-600" :target="target ? '_blank' : '_self'"
        :href="href">{{ text }}</a>
</template>