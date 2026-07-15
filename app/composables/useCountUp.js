import { onMounted, onUnmounted, ref } from 'vue'

export function useCountUp(target, { duration = 1600 } = {}) {
  const value = ref(0)
  const elRef = ref(null)
  let observer = null
  let rafId = null
  let started = false

  function animate(startTime) {
    const now = performance.now()
    const elapsed = now - startTime
    const progress = Math.min(elapsed / duration, 1)
    const eased = 1 - Math.pow(1 - progress, 3)
    value.value = Math.round(eased * target)
    if (progress < 1) {
      rafId = requestAnimationFrame(() => animate(startTime))
    } else {
      value.value = target
    }
  }

  function start() {
    if (started) return
    started = true
    rafId = requestAnimationFrame((t) => animate(t))
  }

  onMounted(() => {
    if (!elRef.value) return
    observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            start()
            observer.disconnect()
          }
        }
      },
      { threshold: 0.4 }
    )
    observer.observe(elRef.value)
  })

  onUnmounted(() => {
    if (observer) observer.disconnect()
    if (rafId) cancelAnimationFrame(rafId)
  })

  return { value, elRef, start }
}
