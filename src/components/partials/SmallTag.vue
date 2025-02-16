<script setup>
    defineProps({
        name: String, 
    });
</script>

<template>
    <span class="text-sm font-medium px-1.5 py-0.5 rounded">{{ name }}</span>
</template>