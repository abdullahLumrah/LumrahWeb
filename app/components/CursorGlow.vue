<template>
  <div ref="glowRef" class="cursor-glow" aria-hidden="true"></div>
</template>

<script setup>
import { onMounted, onUnmounted, ref } from 'vue'

const glowRef = ref(null)
let targetX = 0
let targetY = 0
let currentX = 0
let currentY = 0
let rafId = null
let visible = false

function onMouseMove(e) {
  targetX = e.clientX
  targetY = e.clientY
  if (!visible && glowRef.value) {
    visible = true
    glowRef.value.style.opacity = '1'
  }
}

function onMouseLeave() {
  visible = false
  if (glowRef.value) glowRef.value.style.opacity = '0'
}

function animate() {
  currentX += (targetX - currentX) * 0.08
  currentY += (targetY - currentY) * 0.08
  if (glowRef.value) {
    glowRef.value.style.transform = `translate(${currentX}px, ${currentY}px)`
  }
  rafId = requestAnimationFrame(animate)
}

onMounted(() => {
  targetX = window.innerWidth / 2
  targetY = window.innerHeight / 2
  currentX = targetX
  currentY = targetY
  window.addEventListener('mousemove', onMouseMove, { passive: true })
  document.addEventListener('mouseleave', onMouseLeave)
  rafId = requestAnimationFrame(animate)
})

onUnmounted(() => {
  if (rafId) cancelAnimationFrame(rafId)
  window.removeEventListener('mousemove', onMouseMove)
  document.removeEventListener('mouseleave', onMouseLeave)
})
</script>

<style scoped>
.cursor-glow {
  position: fixed;
  top: 0;
  left: 0;
  width: 480px;
  height: 480px;
  margin-left: -240px;
  margin-top: -240px;
  border-radius: 50%;
  background: radial-gradient(circle, rgba(99, 102, 241, 0.14) 0%, rgba(6, 182, 212, 0.06) 45%, rgba(0, 0, 0, 0) 75%);
  z-index: -7;
  pointer-events: none;
  opacity: 0;
  transition: opacity 0.4s ease;
  will-change: transform;
}

@media (pointer: coarse) {
  .cursor-glow {
    display: none;
  }
}
</style>
