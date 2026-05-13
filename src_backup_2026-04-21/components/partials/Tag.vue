<script setup>
    defineProps({
        name: String, 
    });
</script>

<template>
    <span class="bg-secondary-100 text-secondary-800 text-sm font-medium px-2.5 py-0.5 rounded">{{ name }}</span>
</template>