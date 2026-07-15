<template>
  <div class="scroll-progress-track" aria-hidden="true">
    <div class="scroll-progress-bar" :style="{ width: progress + '%' }"></div>
  </div>
</template>

<script setup>
import { onMounted, onUnmounted, ref } from 'vue'

const progress = ref(0)
let ticking = false

function updateProgress() {
  const scrollTop = window.scrollY || document.documentElement.scrollTop
  const docHeight = document.documentElement.scrollHeight - window.innerHeight
  progress.value = docHeight > 0 ? Math.min(100, (scrollTop / docHeight) * 100) : 0
  ticking = false
}

function onScroll() {
  if (!ticking) {
    ticking = true
    requestAnimationFrame(updateProgress)
  }
}

onMounted(() => {
  window.addEventListener('scroll', onScroll, { passive: true })
  updateProgress()
})

onUnmounted(() => {
  window.removeEventListener('scroll', onScroll)
})
</script>

<style scoped>
.scroll-progress-track {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 3px;
  z-index: 1100;
  background: transparent;
  pointer-events: none;
}

.scroll-progress-bar {
  height: 100%;
  background: var(--gradient-brand);
  box-shadow: 0 0 12px rgba(99, 102, 241, 0.6);
  transition: width 0.1s ease-out;
}
</style>
