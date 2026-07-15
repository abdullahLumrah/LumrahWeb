<template>
  <div class="layout-wrapper">
    <StarField />
    <AuroraBackground />
    <CursorGlow />
    <ScrollProgress />

    <!-- Header / Navbar -->
    <header class="navbar glass" :class="{ 'navbar-scrolled': isScrolled }">
      <div class="container flex items-center justify-between">
        <a href="/" class="logo flex items-center">
          <span class="logo-icon">L</span>
          <span class="logo-text">Lumrah</span>
        </a>
        
        <nav class="nav-links flex items-center">
          <a href="#features" class="nav-link">Features</a>
          <a href="#about" class="nav-link">About</a>
          <a href="#showcase" class="nav-link">Showcase</a>
          <a href="#contact" class="btn btn-secondary btn-sm-nav">Get Started</a>
        </nav>
      </div>
    </header>

    <!-- Main Content -->
    <main>
      <slot />
    </main>

    <!-- Footer -->
    <footer class="footer">
      <div class="container">
        <div class="footer-grid grid grid-cols-3">
          <div class="footer-info">
            <h4 class="logo-text">Lumrah<span class="text-gradient">Web</span></h4>
            <p>Creating next-generation digital experiences for forward-thinking brands.</p>
          </div>
          <div class="footer-nav">
            <h5>Navigation</h5>
            <ul>
              <li><a href="#features">Features</a></li>
              <li><a href="#about">About</a></li>
              <li><a href="#showcase">Showcase</a></li>
            </ul>
          </div>
          <div class="footer-nav">
            <h5>Connect</h5>
            <ul>
              <li><a href="#">Twitter</a></li>
              <li><a href="#">GitHub</a></li>
              <li><a href="#">LinkedIn</a></li>
            </ul>
          </div>
        </div>
        <div class="footer-bottom">
          <p>&copy; 2026 LumrahWeb. All rights reserved.</p>
        </div>
      </div>
    </footer>
  </div>
</template>

<script setup>
import { onMounted, onUnmounted, ref } from 'vue'

const isScrolled = ref(false)

function handleScroll() {
  isScrolled.value = window.scrollY > 24
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll, { passive: true })
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>

<style scoped>
.layout-wrapper {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

main {
  flex-grow: 1;
}

/* Navbar */
.navbar {
  position: fixed;
  top: 1rem;
  left: 50%;
  transform: translateX(-50%);
  width: calc(100% - 2rem);
  max-width: 1200px;
  z-index: 1000;
  padding: 0.75rem 2rem;
  border-radius: var(--radius-full);
  transition: var(--transition-normal);
}

.navbar-scrolled {
  top: 0.6rem;
  width: calc(100% - 3rem);
  max-width: 1000px;
  padding: 0.55rem 1.75rem;
  background: rgba(9, 12, 24, 0.75);
  box-shadow: var(--shadow-glow), 0 8px 30px rgba(0, 0, 0, 0.4);
  border-color: var(--border-color-glow);
}

.logo {
  font-family: var(--font-display);
  font-weight: 800;
  font-size: 1.5rem;
  color: var(--text-primary);
  text-decoration: none;
  gap: 0.75rem;
}

.logo-icon {
  position: relative;
  background: var(--gradient-brand);
  color: #fff;
  width: 2.2rem;
  height: 2.2rem;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  font-size: 1.2rem;
  font-weight: 900;
  box-shadow: var(--shadow-glow);
}

.logo-icon::after {
  content: '';
  position: absolute;
  inset: -4px;
  border-radius: 50%;
  border: 1.5px solid var(--color-secondary);
  opacity: 0;
  animation: logo-pulse 2.8s ease-out infinite;
}

@keyframes logo-pulse {
  0% { opacity: 0.6; transform: scale(1); }
  100% { opacity: 0; transform: scale(1.6); }
}

.logo-text {
  background: linear-gradient(90deg, var(--text-primary) 0%, var(--color-secondary) 50%, var(--text-primary) 100%);
  background-size: 200% auto;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  animation: shine-text 6s linear infinite;
}

.logo-text {
  font-weight: 700;
}

.nav-links {
  gap: 2rem;
}

.nav-link {
  color: var(--text-secondary);
  font-weight: 500;
  font-size: 0.95rem;
  position: relative;
  padding: 0.25rem 0;
}

.nav-link::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  width: 0;
  height: 2px;
  background: var(--gradient-brand);
  transition: var(--transition-normal);
}

.nav-link:hover {
  color: var(--text-primary);
}

.nav-link:hover::after {
  width: 100%;
}

.btn-sm-nav {
  padding: 0.5rem 1.25rem;
  font-size: 0.9rem;
}

/* Footer */
.footer {
  background: rgba(7, 9, 19, 0.95);
  border-top: 1px solid var(--border-color);
  padding: 4rem 0 2rem 0;
  margin-top: 4rem;
}

.footer-grid {
  margin-bottom: 3rem;
}

.footer-info p {
  margin-top: 1rem;
  max-width: 300px;
}

.footer-nav h5 {
  margin-bottom: 1.2rem;
  font-size: 1.1rem;
}

.footer-nav ul {
  list-style: none;
}

.footer-nav ul li {
  margin-bottom: 0.75rem;
}

.footer-nav ul li a {
  color: var(--text-secondary);
  font-size: 0.95rem;
}

.footer-nav ul li a:hover {
  color: var(--text-primary);
  padding-left: 4px;
}

.footer-bottom {
  border-top: 1px solid var(--border-color);
  padding-top: 2rem;
  text-align: center;
  font-size: 0.9rem;
  color: var(--text-muted);
}

@media (max-width: 768px) {
  .nav-links {
    display: none; /* simple responsive fallback */
  }
}
</style>
