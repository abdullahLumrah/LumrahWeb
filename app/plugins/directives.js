export default defineNuxtPlugin((nuxtApp) => {
  let revealObserver = null

  if (import.meta.client) {
    revealObserver = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-revealed')
            revealObserver.unobserve(entry.target)
          }
        }
      },
      { threshold: 0.15, rootMargin: '0px 0px -60px 0px' }
    )
  }

  nuxtApp.vueApp.directive('reveal', {
    mounted(el, binding) {
      el.classList.add('reveal-init')
      const modifiers = binding.modifiers || {}
      if (modifiers.left) el.classList.add('reveal-left')
      else if (modifiers.right) el.classList.add('reveal-right')
      else if (modifiers.scale) el.classList.add('reveal-scale')
      else el.classList.add('reveal-up')

      const delay = typeof binding.value === 'number' ? binding.value : 0
      el.style.setProperty('--reveal-delay', `${delay}ms`)

      if (revealObserver) revealObserver.observe(el)
    },
    unmounted(el) {
      if (revealObserver) revealObserver.unobserve(el)
    }
  })

  nuxtApp.vueApp.directive('tilt', {
    mounted(el, binding) {
      if (!import.meta.client) return
      const strength = typeof binding.value === 'number' ? binding.value : 10
      el.classList.add('tilt-el')

      function handleMove(e) {
        const rect = el.getBoundingClientRect()
        const px = (e.clientX - rect.left) / rect.width
        const py = (e.clientY - rect.top) / rect.height
        const rotateY = (px - 0.5) * strength
        const rotateX = (0.5 - py) * strength
        el.style.transition = 'transform 0.08s linear'
        el.style.transform = `perspective(900px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-4px) scale3d(1.015, 1.015, 1.015)`
      }

      function handleLeave() {
        el.style.transition = 'transform 0.5s cubic-bezier(0.16, 1, 0.3, 1)'
        el.style.transform = 'perspective(900px) rotateX(0deg) rotateY(0deg) translateY(0) scale3d(1, 1, 1)'
      }

      el.addEventListener('mousemove', handleMove)
      el.addEventListener('mouseleave', handleLeave)
      el.__tiltCleanup = () => {
        el.removeEventListener('mousemove', handleMove)
        el.removeEventListener('mouseleave', handleLeave)
      }
    },
    unmounted(el) {
      if (el.__tiltCleanup) el.__tiltCleanup()
    }
  })
})
