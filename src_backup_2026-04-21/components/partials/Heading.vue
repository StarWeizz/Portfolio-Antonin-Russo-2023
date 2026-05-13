<script setup>
    defineProps({
        text: String,
        border: Boolean,
    });
</script>

<template>
    <h2 class="text-4xl font-extrabold font-sans text-neutral-800 mb-8" :class="{ 'border-b pb-6 border-neutral-200': border }">{{ text }}
    </h2>
</template>