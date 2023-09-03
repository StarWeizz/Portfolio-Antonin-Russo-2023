<script setup>
    defineProps({
        name: String,
        color: String,
    });
</script>

<template>
    <span class="text-sm font-medium mr-2 px-2.5 py-0.5 rounded-full" :class="`bg-${color}-100 text-${color}-800`">{{ name }}</span>
</template>