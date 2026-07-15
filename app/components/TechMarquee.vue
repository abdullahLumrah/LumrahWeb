<template>
  <div class="marquee-wrapper">
    <div class="marquee-track">
      <div class="marquee-group">
        <span v-for="(item, idx) in items" :key="'a-' + idx" class="marquee-pill glass">
          <span class="marquee-dot"></span>{{ item }}
        </span>
      </div>
      <div class="marquee-group" aria-hidden="true">
        <span v-for="(item, idx) in items" :key="'b-' + idx" class="marquee-pill glass">
          <span class="marquee-dot"></span>{{ item }}
        </span>
      </div>
    </div>
  </div>
</template>

<script setup>
defineProps({
  items: {
    type: Array,
    default: () => [
      'Nuxt 4', 'Vue 3', 'TypeScript', 'Node.js', 'AWS', 'Docker',
      'Kubernetes', 'PostgreSQL', 'GraphQL', 'React Native', 'Python', 'OpenAI'
    ]
  }
})
</script>

<style scoped>
.marquee-wrapper {
  position: relative;
  overflow: hidden;
  padding: 1.5rem 0;
  -webkit-mask-image: linear-gradient(90deg, transparent, #000 8%, #000 92%, transparent);
  mask-image: linear-gradient(90deg, transparent, #000 8%, #000 92%, transparent);
}

.marquee-track {
  display: flex;
  width: max-content;
  animation: marquee-scroll 32s linear infinite;
}

.marquee-wrapper:hover .marquee-track {
  animation-play-state: paused;
}

.marquee-group {
  display: flex;
  gap: 1rem;
  padding-right: 1rem;
}

.marquee-pill {
  display: inline-flex;
  align-items: center;
  gap: 0.6rem;
  padding: 0.6rem 1.25rem;
  border-radius: var(--radius-full);
  font-size: 0.9rem;
  font-weight: 600;
  color: var(--text-secondary);
  white-space: nowrap;
}

.marquee-dot {
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background: var(--gradient-brand);
  box-shadow: 0 0 6px rgba(99, 102, 241, 0.8);
}

@keyframes marquee-scroll {
  from { transform: translateX(0); }
  to { transform: translateX(-50%); }
}

@media (prefers-reduced-motion: reduce) {
  .marquee-track {
    animation: none;
  }
}
</style>
