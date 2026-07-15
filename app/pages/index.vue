<template>
  <div class="home-page">
    <!-- Hero Spot Glows -->
    <div class="bg-glow-spot" style="top: -10%; left: -10%;"></div>
    <div class="bg-glow-spot" style="top: 30%; right: -10%; background: radial-gradient(circle, rgba(6, 182, 212, 0.12) 0%, rgba(6, 182, 212, 0) 70%);"></div>

    <!-- Hero Section -->
    <section class="section hero-section animate-fade-in-up">
      <div class="container hero-grid grid grid-cols-2 items-center">
        <div class="hero-content">
          <div class="badge glass">
            <span class="badge-dot"></span> Next-Gen Web Development
          </div>
          <h1>Crafting Premium <br /><span class="text-gradient">Digital Ecosystems</span></h1>
          <p class="hero-desc">
            Welcome to your new website. We build ultra-high performance web applications using Nuxt.js, tailored with bespoke designs and fluid animations to captivate your audience.
          </p>
          <div class="hero-actions flex">
            <a href="#contact" class="btn btn-primary">Get Started <span class="arrow">&rarr;</span></a>
            <a href="#features" class="btn btn-secondary">Explore Features</a>
          </div>
        </div>
        
        <div class="hero-visual flex items-center justify-center">
          <div class="visual-card glass animate-float">
            <div class="visual-header">
              <div class="dot red"></div>
              <div class="dot yellow"></div>
              <div class="dot green"></div>
            </div>
            <div class="visual-body">
              <div class="visual-line active" style="width: 80%"></div>
              <div class="visual-line" style="width: 60%"></div>
              <div class="visual-line" style="width: 90%"></div>
              <div class="visual-stats grid">
                <div class="stat-box glass">
                  <div class="stat-val text-gradient">99.9%</div>
                  <div class="stat-lbl">Uptime</div>
                </div>
                <div class="stat-box glass">
                  <div class="stat-val text-gradient-accent">&lt;100ms</div>
                  <div class="stat-lbl">Response</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Features Section -->
    <section id="features" class="section features-section">
      <div class="container">
        <div class="section-header text-center">
          <h2 class="section-title">Designed to <span class="text-gradient">Perform</span></h2>
          <p class="section-subtitle">Leveraging cutting-edge technologies to guarantee speed, safety, and scalable growth.</p>
        </div>
        
        <div class="grid grid-cols-3 features-grid">
          <!-- Card 1 -->
          <div class="feature-card glass-interactive">
            <div class="feature-icon-wrapper">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feature-icon"><path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/></svg>
            </div>
            <h3>Nuxt 4 Architecture</h3>
            <p>Built on the latest Nuxt framework offering server-side rendering, static generation, and optimal SEO out-of-the-box.</p>
          </div>

          <!-- Card 2 -->
          <div class="feature-card glass-interactive">
            <div class="feature-icon-wrapper secondary">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feature-icon"><polygon points="12 2 2 7 12 12 22 7 12 2"/><polyline points="2 17 12 22 22 17"/><polyline points="2 12 12 17 22 12"/></svg>
            </div>
            <h3>Premium Aesthetics</h3>
            <p>Bespoke visual interface crafted with glassmorphism, responsive grids, and subtle interactive micro-animations.</p>
          </div>

          <!-- Card 3 -->
          <div class="feature-card glass-interactive">
            <div class="feature-icon-wrapper accent">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feature-icon"><path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/></svg>
            </div>
            <h3>Lightning Fast</h3>
            <p>Highly optimized asset loading, pre-rendered routes, and modern CSS variable setups deliver perfect Lighthouse scores.</p>
          </div>
        </div>
      </div>
    </section>

    <!-- About / Info Section -->
    <section id="about" class="section about-section glass">
      <div class="container grid grid-cols-2 items-center">
        <div class="about-visual flex justify-center">
          <div class="circle-graphic flex items-center justify-center">
            <div class="circle-inner flex items-center justify-center">
              <div class="circle-core"></div>
            </div>
          </div>
        </div>
        <div class="about-content">
          <h2>Empowering Your Brand's Digital Journey</h2>
          <p>
            LumrahWeb was established to bridge the gap between creative visual designs and high-tech software engineering. We believe that your website is your digital storefront, and it deserves to represent your identity with maximum sophistication.
          </p>
          <ul class="about-list">
            <li class="flex items-center">
              <svg class="check-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/></svg>
              Fully Responsive layouts for all screen sizes
            </li>
            <li class="flex items-center">
              <svg class="check-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/></svg>
              Advanced SEO metadata implementation
            </li>
            <li class="flex items-center">
              <svg class="check-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/></svg>
              Clean modular structure using Vue 3 Components
            </li>
          </ul>
        </div>
      </div>
    </section>

    <!-- Contact CTA Section -->
    <section id="contact" class="section contact-section text-center">
      <div class="container">
        <div class="contact-card glass animate-float" style="animation-delay: -2s;">
          <h2 class="text-gradient">Ready to build something legendary?</h2>
          <p>Get in touch to launch your web project or configure your domains with LumrahWeb.</p>
          <div class="cta-actions flex">
            <a href="mailto:support@lumrahweb.com" class="btn btn-primary">Contact Support</a>
            <a href="https://www.namecheap.com" target="_blank" class="btn btn-secondary">Manage Domains</a>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
useHead({
  title: 'LumrahWeb - Premium Digital Development & Design',
  meta: [
    { name: 'description', content: 'Crafting top-tier, modern websites with state-of-the-art Nuxt.js architecture and fluid glassmorphic UI aesthetics.' }
  ]
})
</script>

<style scoped>
.home-page {
  position: relative;
  overflow: hidden;
}

/* Hero Section */
.hero-section {
  padding-top: 12rem;
  padding-bottom: 6rem;
}

.hero-content {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.badge {
  align-self: flex-start;
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.4rem 1rem;
  border-radius: var(--radius-full);
  font-size: 0.85rem;
  font-weight: 600;
  color: var(--text-primary);
}

.badge-dot {
  width: 8px;
  height: 8px;
  background-color: var(--color-secondary);
  border-radius: 50%;
  box-shadow: 0 0 8px var(--color-secondary);
}

.hero-desc {
  font-size: 1.15rem;
  line-height: 1.7;
  max-width: 540px;
}

.hero-actions {
  gap: 1rem;
  margin-top: 1rem;
}

.arrow {
  transition: transform 0.25s ease;
}

.btn-primary:hover .arrow {
  transform: translateX(4px);
}

/* Hero Visual Card */
.visual-card {
  width: 100%;
  max-width: 440px;
  padding: 1.5rem;
  border-radius: var(--radius-lg);
  border: 1px solid rgba(255, 255, 255, 0.1);
  background: radial-gradient(circle at top left, rgba(30, 41, 59, 0.3) 0%, rgba(15, 22, 42, 0.5) 100%);
}

.visual-header {
  display: flex;
  gap: 0.5rem;
  margin-bottom: 1.5rem;
}

.dot {
  width: 12px;
  height: 12px;
  border-radius: 50%;
}

.dot.red { background-color: #ef4444; }
.dot.yellow { background-color: #eab308; }
.dot.green { background-color: #22c55e; }

.visual-body {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.visual-line {
  height: 6px;
  background: rgba(255, 255, 255, 0.05);
  border-radius: var(--radius-full);
}

.visual-line.active {
  background: var(--gradient-brand);
}

.visual-stats {
  grid-template-columns: repeat(2, 1fr);
  gap: 1rem;
  margin-top: 1rem;
}

.stat-box {
  padding: 1rem;
  text-align: center;
  border-radius: var(--radius-md);
  border-color: rgba(255, 255, 255, 0.05);
}

.stat-val {
  font-family: var(--font-display);
  font-size: 1.5rem;
  font-weight: 800;
  margin-bottom: 0.25rem;
}

.stat-lbl {
  font-size: 0.8rem;
  color: var(--text-muted);
  text-transform: uppercase;
  letter-spacing: 0.05em;
}

/* Features Section */
.section-header {
  margin-bottom: 4rem;
}

.section-title {
  font-size: clamp(2rem, 3.5vw, 3rem);
  margin-bottom: 1rem;
}

.section-subtitle {
  font-size: 1.1rem;
  max-width: 600px;
  margin: 0 auto;
}

.features-grid {
  margin-top: 2rem;
}

.feature-card {
  padding: 2.5rem 2rem;
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
}

.feature-icon-wrapper {
  background: var(--color-primary-glow);
  color: var(--color-primary);
  width: 3.5rem;
  height: 3.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: var(--radius-md);
  margin-bottom: 0.5rem;
}

.feature-icon-wrapper.secondary {
  background: rgba(6, 182, 212, 0.15);
  color: var(--color-secondary);
}

.feature-icon-wrapper.accent {
  background: rgba(217, 70, 239, 0.15);
  color: var(--color-accent);
}

.feature-icon {
  width: 1.75rem;
  height: 1.75rem;
}

.feature-card h3 {
  font-size: 1.35rem;
}

.feature-card p {
  font-size: 0.95rem;
  line-height: 1.6;
}

/* About Section */
.about-section {
  border-radius: 0;
  border-left: none;
  border-right: none;
  background: rgba(15, 22, 42, 0.2);
}

.circle-graphic {
  width: 250px;
  height: 250px;
  border-radius: 50%;
  border: 1px dashed var(--border-color-glow);
  animation: float 8s ease-in-out infinite;
}

.circle-inner {
  width: 180px;
  height: 180px;
  border-radius: 50%;
  border: 1px solid var(--border-color);
  background: rgba(99, 102, 241, 0.05);
}

.circle-core {
  width: 80px;
  height: 80px;
  border-radius: 50%;
  background: var(--gradient-brand);
  box-shadow: var(--shadow-glow);
}

.about-content {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.about-list {
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.about-list li {
  gap: 0.75rem;
  color: var(--text-secondary);
  font-weight: 500;
}

.check-icon {
  width: 1.25rem;
  height: 1.25rem;
  color: var(--color-secondary);
}

/* Contact CTA Section */
.contact-card {
  padding: 5rem 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.5rem;
}

.contact-card h2 {
  font-size: clamp(2rem, 3.5vw, 2.75rem);
  max-width: 600px;
}

.contact-card p {
  font-size: 1.1rem;
  max-width: 500px;
}

.cta-actions {
  gap: 1rem;
  justify-content: center;
  margin-top: 1rem;
}

/* Responsive adjustments */
@media (max-width: 900px) {
  .hero-grid {
    grid-template-columns: 1fr;
    text-align: center;
    gap: 3rem;
  }
  
  .hero-content {
    align-items: center;
  }
  
  .hero-desc {
    margin: 0 auto;
  }
  
  .hero-visual {
    margin-top: 2rem;
  }
  
  .about-section .grid {
    grid-template-columns: 1fr;
    gap: 4rem;
  }
  
  .about-visual {
    order: 2;
  }
}
</style>
