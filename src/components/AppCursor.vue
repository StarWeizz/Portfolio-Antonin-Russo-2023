<script setup>
import { onMounted, onUnmounted, ref } from 'vue'

const big = ref(false)

function onMove(e) {
  const el = document.getElementById('cursor')
  if (el) {
    el.style.left = e.clientX + 'px'
    el.style.top  = e.clientY + 'px'
  }
}

function addListeners() {
  document.querySelectorAll('a, button, input, textarea, select, [data-cursor]').forEach(el => {
    el.addEventListener('mouseenter', () => big.value = true)
    el.addEventListener('mouseleave', () => big.value = false)
  })
}

onMounted(() => {
  document.addEventListener('mousemove', onMove)
  const observer = new MutationObserver(addListeners)
  observer.observe(document.body, { childList: true, subtree: true })
  addListeners()
})

onUnmounted(() => {
  document.removeEventListener('mousemove', onMove)
})
</script>

<template>
  <div id="cursor" class="cursor" :class="{ big }" />
</template>
