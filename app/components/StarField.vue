<template>
  <canvas ref="canvasRef" class="star-field" aria-hidden="true"></canvas>
</template>

<script setup>
import { onMounted, onUnmounted, ref } from 'vue'

const canvasRef = ref(null)

let ctx = null
let width = 0
let height = 0
let dpr = 1
let stars = []
let shootingStars = []
let rafId = null
let lastShotAt = 0

let mouseX = 0
let mouseY = 0
let smoothX = 0
let smoothY = 0
let scrollY = 0

const STAR_COUNT_DENSITY = 0.00011 // stars per px^2

function rand(min, max) {
  return Math.random() * (max - min) + min
}

function createStars() {
  const count = Math.min(260, Math.max(90, Math.floor(width * height * STAR_COUNT_DENSITY)))
  stars = Array.from({ length: count }, () => ({
    x: rand(0, width),
    y: rand(0, height),
    radius: rand(0.4, 1.6),
    baseAlpha: rand(0.25, 1),
    twinkleSpeed: rand(0.4, 1.6),
    phase: rand(0, Math.PI * 2),
    driftX: rand(-0.008, 0.008),
    driftY: rand(0.003, 0.018),
    depth: rand(0.3, 1)
  }))
}

function spawnShootingStar() {
  const startX = rand(width * 0.1, width * 0.9)
  const startY = rand(0, height * 0.4)
  const angle = rand(0.3, 0.7)
  shootingStars.push({
    x: startX,
    y: startY,
    vx: Math.cos(angle) * rand(9, 15),
    vy: Math.sin(angle) * rand(9, 15),
    life: 0,
    maxLife: rand(35, 55),
    length: rand(80, 140)
  })
}

function resize() {
  const canvas = canvasRef.value
  if (!canvas) return
  dpr = Math.min(window.devicePixelRatio || 1, 2)
  width = window.innerWidth
  height = window.innerHeight
  canvas.width = width * dpr
  canvas.height = height * dpr
  canvas.style.width = width + 'px'
  canvas.style.height = height + 'px'
  ctx.setTransform(dpr, 0, 0, dpr, 0, 0)
  createStars()
}

function onMouseMove(e) {
  mouseX = (e.clientX / width) * 2 - 1
  mouseY = (e.clientY / height) * 2 - 1
}

function onScroll() {
  scrollY = window.scrollY || window.pageYOffset
}

function draw(time) {
  if (!ctx) return

  smoothX += (mouseX - smoothX) * 0.03
  smoothY += (mouseY - smoothY) * 0.03

  ctx.clearRect(0, 0, width, height)

  for (const s of stars) {
    s.x += s.driftX
    s.y += s.driftY
    if (s.y > height + 5) { s.y = -5; s.x = rand(0, width) }
    if (s.x > width + 5) s.x = -5
    if (s.x < -5) s.x = width + 5

    const twinkle = 0.55 + 0.45 * Math.sin(time * 0.001 * s.twinkleSpeed + s.phase)
    const alpha = s.baseAlpha * twinkle

    const parallaxX = smoothX * 14 * s.depth
    const parallaxY = smoothY * 10 * s.depth - scrollY * 0.04 * s.depth

    ctx.beginPath()
    ctx.arc(s.x + parallaxX, s.y + parallaxY, s.radius, 0, Math.PI * 2)
    ctx.fillStyle = `rgba(226, 232, 255, ${alpha})`
    ctx.shadowColor = 'rgba(140, 160, 255, 0.9)'
    ctx.shadowBlur = s.radius > 1.1 ? 4 : 0
    ctx.fill()
  }
  ctx.shadowBlur = 0

  if (time - lastShotAt > rand(2600, 5200)) {
    spawnShootingStar()
    lastShotAt = time
  }

  shootingStars = shootingStars.filter(st => st.life < st.maxLife)
  for (const st of shootingStars) {
    st.life += 1
    st.x += st.vx
    st.y += st.vy
    const progress = st.life / st.maxLife
    const fade = Math.sin(progress * Math.PI)

    const tailX = st.x - (st.vx / Math.hypot(st.vx, st.vy)) * st.length
    const tailY = st.y - (st.vy / Math.hypot(st.vx, st.vy)) * st.length

    const grad = ctx.createLinearGradient(st.x, st.y, tailX, tailY)
    grad.addColorStop(0, `rgba(255, 255, 255, ${fade})`)
    grad.addColorStop(1, 'rgba(140, 160, 255, 0)')

    ctx.beginPath()
    ctx.strokeStyle = grad
    ctx.lineWidth = 1.6
    ctx.moveTo(st.x, st.y)
    ctx.lineTo(tailX, tailY)
    ctx.stroke()
  }

  rafId = requestAnimationFrame(draw)
}

onMounted(() => {
  const canvas = canvasRef.value
  ctx = canvas.getContext('2d')
  resize()
  window.addEventListener('resize', resize)
  window.addEventListener('mousemove', onMouseMove, { passive: true })
  window.addEventListener('scroll', onScroll, { passive: true })
  rafId = requestAnimationFrame(draw)
})

onUnmounted(() => {
  if (rafId) cancelAnimationFrame(rafId)
  window.removeEventListener('resize', resize)
  window.removeEventListener('mousemove', onMouseMove)
  window.removeEventListener('scroll', onScroll)
})
</script>

<style scoped>
.star-field {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  z-index: -8;
  pointer-events: none;
  display: block;
}
</style>
