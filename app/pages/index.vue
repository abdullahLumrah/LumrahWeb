<template>
  <div class="home-page">
    <!-- Hero Spot Glows -->
    <div class="bg-glow-spot" style="top: -10%; left: -10%;"></div>
    <div class="bg-glow-spot" style="top: 40%; right: -10%; background: radial-gradient(circle, rgba(6, 182, 212, 0.12) 0%, rgba(6, 182, 212, 0) 70%);"></div>

    <!-- Hero Section -->
    <section class="section hero-section animate-fade-in-up">
      <div class="container hero-grid grid grid-cols-2 items-center">
        <div class="hero-content">
          <div class="badge glass">
            <span class="badge-dot"></span> Premier IT & Digital Solutions
          </div>
          <h1>Architecting Next-Gen <br /><span class="text-gradient-animated">IT Solutions</span></h1>
          <p class="hero-desc">
            We engineer premium web applications, bespoke mobile apps, and scalable digital architectures that drive operational efficiency and elevate your brand's global presence.
          </p>
          <div class="hero-actions flex">
            <a href="#contact" class="btn btn-primary">Request a Quote <span class="arrow">&rarr;</span></a>
            <a href="#solutions" class="btn btn-secondary">Our Solutions</a>
          </div>
        </div>
        
        <div class="hero-visual flex items-center justify-center">
          <div v-tilt="8" class="visual-card glass animate-float border-sweep">
            <div class="visual-header">
              <div class="dot red"></div>
              <div class="dot yellow"></div>
              <div class="dot green"></div>
            </div>
            <div class="visual-body">
              <h4 style="margin-bottom: 0.5rem; font-size: 1.1rem; color: var(--text-primary);">Systems Integrity</h4>
              <div class="visual-line active" style="width: 85%"></div>
              <div class="visual-line" style="width: 70%"></div>
              <div class="visual-line active" style="width: 95%; background: var(--gradient-accent);"></div>
              <div class="visual-stats grid">
                <div ref="statOneRef" class="stat-box glass">
                  <div class="stat-val text-gradient">{{ statOne }}+</div>
                  <div class="stat-lbl">Systems Deployed</div>
                </div>
                <div ref="statTwoRef" class="stat-box glass">
                  <div class="stat-val text-gradient-accent">{{ statTwo }}%</div>
                  <div class="stat-lbl">Client Trust</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Tech Marquee -->
    <div class="marquee-section">
      <TechMarquee />
    </div>

    <!-- IT Solutions Section -->
    <section id="solutions" class="section solutions-section">
      <div class="container">
        <div v-reveal class="section-header text-center">
          <h2 class="section-title">Comprehensive <span class="text-gradient">IT Solutions</span></h2>
          <p class="section-subtitle">Empowering modern enterprises with scalable applications, robust infrastructure, and digital strategies.</p>
        </div>
        
        <!-- Interactive Category Switcher -->
        <div class="solutions-grid grid grid-cols-3">
          <!-- Solution 1: Web Applications -->
          <div v-reveal.scale="0" v-tilt class="solution-card glass-interactive" :class="{ 'active-card': activeSolution === 0 }" @click="activeSolution = 0">
            <div class="solution-icon-wrapper">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="3" width="20" height="14" rx="2" ry="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/></svg>
            </div>
            <h3>Web Applications</h3>
            <p>Bespoke frontend & backend web applications built on modern frameworks like Nuxt/Next.js for extreme speed and scalability.</p>
            <span class="learn-more-btn text-gradient">View details &rarr;</span>
          </div>

          <!-- Solution 2: Mobile Apps -->
          <div v-reveal.scale="80" v-tilt class="solution-card glass-interactive" :class="{ 'active-card': activeSolution === 1 }" @click="activeSolution = 1">
            <div class="solution-icon-wrapper secondary">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="5" y="2" width="14" height="20" rx="2" ry="2"/><line x1="12" y1="18" x2="12.01" y2="18"/></svg>
            </div>
            <h3>Mobile Applications</h3>
            <p>Premium native and cross-platform mobile apps for iOS and Android, focusing on fluid animations and native device features.</p>
            <span class="learn-more-btn text-gradient-accent">View details &rarr;</span>
          </div>

          <!-- Solution 3: Cloud & DevOps -->
          <div v-reveal.scale="160" v-tilt class="solution-card glass-interactive" :class="{ 'active-card': activeSolution === 2 }" @click="activeSolution = 2">
            <div class="solution-icon-wrapper accent">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"/></svg>
            </div>
            <h3>Cloud & Infrastructure</h3>
            <p>Automated server deployment, cloud migration (AWS, GCP), serverless hosting pipelines, and database optimization.</p>
            <span class="learn-more-btn text-gradient">View details &rarr;</span>
          </div>

          <!-- Solution 4: Enterprise ERP/CRM -->
          <div v-reveal.scale="0" v-tilt class="solution-card glass-interactive" :class="{ 'active-card': activeSolution === 3 }" @click="activeSolution = 3">
            <div class="solution-icon-wrapper">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/></svg>
            </div>
            <h3>Enterprise Solutions</h3>
            <p>Custom administrative applications, CRM/ERP integration, robust client portals, and legacy database migrations.</p>
            <span class="learn-more-btn text-gradient">View details &rarr;</span>
          </div>

          <!-- Solution 5: AI & Smart Integration -->
          <div v-reveal.scale="80" v-tilt class="solution-card glass-interactive" :class="{ 'active-card': activeSolution === 4 }" @click="activeSolution = 4">
            <div class="solution-icon-wrapper secondary">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/></svg>
            </div>
            <h3>AI & Automation</h3>
            <p>Integrating large language models, machine learning agents, automated workflows, and data parsing services.</p>
            <span class="learn-more-btn text-gradient-accent">View details &rarr;</span>
          </div>

          <!-- Solution 6: Cyber Security -->
          <div v-reveal.scale="160" v-tilt class="solution-card glass-interactive" :class="{ 'active-card': activeSolution === 5 }" @click="activeSolution = 5">
            <div class="solution-icon-wrapper accent">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>
            </div>
            <h3>Security & Auditing</h3>
            <p>Comprehensive systems auditing, data encryption pipelines, penetration checks, and SSL/HTTPS safety compliance.</p>
            <span class="learn-more-btn text-gradient">View details &rarr;</span>
          </div>
        </div>

        <!-- Detail Panel (Shows detailed specifications based on clicked card) -->
        <Transition name="detail-fade" mode="out-in">
          <div :key="activeSolution" class="solution-detail-panel glass animate-float" style="animation-delay: -1s;">
            <h4 class="text-gradient">{{ solutionsList[activeSolution].title }}</h4>
            <p>{{ solutionsList[activeSolution].details }}</p>
            <div class="features-sublist grid grid-cols-2">
              <div v-for="(feat, idx) in solutionsList[activeSolution].subfeats" :key="idx" class="flex items-center spec-item">
                <svg class="check-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/></svg>
                <span>{{ feat }}</span>
              </div>
            </div>
          </div>
        </Transition>
      </div>
    </section>

    <!-- Co-Founders Section -->
    <section id="about" class="section founders-section glass">
      <div class="container">
        <div v-reveal class="section-header text-center">
          <h2 class="section-title">Meet the <span class="text-gradient">Founders</span></h2>
          <p class="section-subtitle">Blending technical architecture with operational excellence to build high-performance products.</p>
        </div>

        <div class="founders-grid grid grid-cols-2">
          <!-- Founder 1: Abdullah Arshad -->
          <div v-reveal.left v-tilt="6" class="founder-card glass-interactive">
            <div class="founder-profile flex items-center">
              <div class="avatar-placeholder flex items-center justify-center">
                <span>AA</span>
              </div>
              <div class="founder-meta">
                <h3>Abdullah Arshad</h3>
              </div>
            </div>
            <p class="bio">
              Abdullah is a product and strategic specialist, leading the high-level roadmap, strategic partnerships, and business alignment of our custom IT ecosystems.
            </p>
            <div class="social-links flex">
              <a href="https://github.com/abdullahLumrah" target="_blank" class="social-link">GitHub</a>
              <a href="#" class="social-link">LinkedIn</a>
            </div>
          </div>

          <!-- Founder 2: Danish Khan -->
          <div v-reveal.right v-tilt="6" class="founder-card glass-interactive">
            <div class="founder-profile flex items-center">
              <div class="avatar-placeholder secondary flex items-center justify-center">
                <span>DK</span>
              </div>
              <div class="founder-meta">
                <h3>Danish Khan</h3>
              </div>
            </div>
            <p class="bio">
              Danish is a technology architect and engineering leader, overseeing system integrations, mobile application development, and robust backend architectures.
            </p>
            <div class="social-links flex">
              <a href="#" class="social-link">GitHub</a>
              <a href="#" class="social-link">LinkedIn</a>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Contact CTA Section -->
    <section id="contact" class="section contact-section text-center">
      <div class="container">
        <div v-reveal.scale class="contact-card glass border-sweep">
          <h2 class="text-gradient">Partner with Lumrah</h2>
          <p>Ready to deploy high-end digital solutions or configure your systems? Drop us a line and let's get started.</p>
          <form class="quote-form grid" @submit.prevent="submitForm">
            <div class="grid grid-cols-2">
              <input type="text" placeholder="Your Name" class="input-field glass" required />
              <input type="email" placeholder="Your Email" class="input-field glass" required />
            </div>
            <select class="input-field glass select-field" required>
              <option value="" disabled selected>Select IT Solution Needed</option>
              <option value="web">Web Application Development</option>
              <option value="mobile">Mobile App Development</option>
              <option value="cloud">Cloud & DevOps Setup</option>
              <option value="other">General IT Consultation</option>
            </select>
            <textarea placeholder="Tell us about your project requirements..." class="input-field glass textarea-field" required></textarea>
            <button type="submit" class="btn btn-primary btn-submit" style="margin-top: 1rem;" :class="{ 'is-success': submitted }">
              <span v-if="!submitted">Send Request</span>
              <span v-else class="success-check flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 20 20" fill="currentColor"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/></svg>
                Request Sent!
              </span>
            </button>
          </form>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useCountUp } from '~/composables/useCountUp'

const { value: statOne, elRef: statOneRef } = useCountUp(25, { duration: 1400 })
const { value: statTwo, elRef: statTwoRef } = useCountUp(100, { duration: 1400 })

useHead({
  title: 'Lumrah - Premium IT Solutions & Application Development',
  meta: [
    { name: 'description', content: 'Enterprise IT Solutions, Mobile App & Web Application Development founded by Abdullah Arshad & Danish Khan.' }
  ]
})

const activeSolution = ref(0)
const submitted = ref(false)

const submitForm = () => {
  submitted.value = true
  setTimeout(() => {
    submitted.value = false
  }, 4000)
}

const solutionsList = [
  {
    title: 'Web Application Development',
    details: 'Our modern web application development stack focuses on lightning-fast responses, robust SEO compatibility, and custom responsive layouts. We build high-performance client panels, e-commerce stores, and software solutions using Nuxt 4.',
    subfeats: ['Server-Side Rendering (SSR)', 'Hot Module Replacement (HMR)', 'Optimal Core Web Vitals', 'Custom API Layer Integrations']
  },
  {
    title: 'Mobile Application Development',
    details: 'We engineer high-fidelity mobile apps designed with native platforms in mind. Focused on smooth frame rates, offline support, and interactive interfaces, our app solutions expand your operations straight to iOS & Android.',
    subfeats: ['Cross-Platform Frameworks', 'Custom Mobile SDK integrations', 'Push Notification Pipelines', 'Offline-First Database Design']
  },
  {
    title: 'Cloud & Infrastructure Services',
    details: 'Ensure your enterprise system stays online 24/7. We design scalable clouds, automate pipelines (CI/CD), setup server environments, database replication schemes, and configure caching networks.',
    subfeats: ['AWS / GCP Cloud Architecture', 'Docker & Kubernetes orchestration', 'CI/CD Deploy Pipelines', 'Automated Database Backups']
  },
  {
    title: 'Enterprise ERP/CRM Systems',
    details: 'Custom systems engineered to organize customer data, internal operations, invoices, scheduling, and management boards. We replace messy sheets with high-security visual dashboards.',
    subfeats: ['Interactive Data Visualizations', 'Custom Role Access Controls', 'Legacy File/DB migrations', 'Multi-Language configurations']
  },
  {
    title: 'AI Integration & Automation',
    details: 'Save time by automating repetitive operations. We integrate smart agents, AI data parsing, automated document creators, customer service chatbots, and machine learning analytics engines.',
    subfeats: ['LLM API integrations', 'Data Scraping and Cleaning', 'Automated Email/Slack triggers', 'Custom Analytical Reports']
  },
  {
    title: 'Security & Compliance Audits',
    details: 'Safeguard user database information. We check code assets for vulnerable components, audit security keys, setup active firewalls, customize SSL layers, and structure GDPR/HIPAA compliance formats.',
    subfeats: ['Vulnerability Scanner Checks', 'End-to-End Encrypted Data', 'Advanced SSL Configuration', 'Audit & Access Logging']
  }
]
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

/* Solutions Section */
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

.solutions-grid {
  margin-top: 2rem;
  gap: 1.5rem;
}

.solution-card {
  padding: 2rem 1.75rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  cursor: pointer;
  border: 1px solid var(--border-color);
}

.solution-card.active-card {
  border-color: var(--border-color-glow);
  background: var(--bg-surface-hover);
  box-shadow: var(--shadow-glow);
  transform: translateY(-2px);
}

.solution-icon-wrapper {
  background: var(--color-primary-glow);
  color: var(--color-primary);
  width: 3rem;
  height: 3rem;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: var(--radius-md);
}

.solution-icon-wrapper.secondary {
  background: rgba(6, 182, 212, 0.15);
  color: var(--color-secondary);
}

.solution-icon-wrapper.accent {
  background: rgba(217, 70, 239, 0.15);
  color: var(--color-accent);
}

.solution-card h3 {
  font-size: 1.25rem;
}

.solution-card p {
  font-size: 0.9rem;
  line-height: 1.5;
  color: var(--text-secondary);
}

.learn-more-btn {
  font-size: 0.85rem;
  font-weight: 600;
  margin-top: auto;
}

/* Detail Panel */
.solution-detail-panel {
  margin-top: 3rem;
  padding: 3rem;
  background: rgba(15, 22, 42, 0.35);
  border-radius: var(--radius-lg);
  border: 1px solid var(--border-color-glow);
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.solution-detail-panel h4 {
  font-size: 1.75rem;
}

.solution-detail-panel p {
  font-size: 1.05rem;
  color: var(--text-secondary);
  line-height: 1.7;
}

.features-sublist {
  gap: 1.25rem;
  margin-top: 1rem;
}

.spec-item {
  gap: 0.75rem;
  font-weight: 500;
  color: var(--text-primary);
}

.check-icon {
  width: 1.25rem;
  height: 1.25rem;
  color: var(--color-secondary);
}

/* Founders Section */
.founders-section {
  border-radius: 0;
  border-left: none;
  border-right: none;
  background: rgba(15, 22, 42, 0.2);
}

.founder-card {
  padding: 3rem 2.5rem;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.founder-profile {
  gap: 1.5rem;
}

.avatar-placeholder {
  width: 4.5rem;
  height: 4.5rem;
  border-radius: 50%;
  background: var(--gradient-brand);
  color: #fff;
  font-family: var(--font-display);
  font-size: 1.5rem;
  font-weight: 800;
  box-shadow: var(--shadow-glow);
  display: flex;
  align-items: center;
  justify-content: center;
  line-height: 1;
}

.avatar-placeholder.secondary {
  background: var(--gradient-accent);
}

.founder-meta h3 {
  font-size: 1.5rem;
}

.founder-meta .title {
  font-size: 0.95rem;
  font-weight: 600;
  margin-top: 0.25rem;
}

.founder-card .bio {
  font-size: 1rem;
  line-height: 1.6;
  color: var(--text-secondary);
}

.social-links {
  gap: 1rem;
}

.social-link {
  font-size: 0.9rem;
  font-weight: 600;
  background: rgba(255, 255, 255, 0.04);
  padding: 0.4rem 1rem;
  border-radius: var(--radius-full);
  border: 1px solid var(--border-color);
  color: var(--text-secondary);
}

.social-link:hover {
  color: var(--text-primary);
  border-color: var(--border-color-glow);
  background: rgba(255, 255, 255, 0.08);
}

/* Contact Quote Form */
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

.quote-form {
  width: 100%;
  max-width: 600px;
  gap: 1rem;
  margin-top: 2rem;
}

.input-field {
  padding: 0.85rem 1.25rem;
  border-radius: var(--radius-md);
  border: 1px solid var(--border-color);
  background: rgba(15, 22, 42, 0.4);
  color: var(--text-primary);
  font-family: var(--font-sans);
  font-size: 0.95rem;
  outline: none;
  transition: var(--transition-normal);
}

.input-field::placeholder {
  color: var(--text-muted);
}

.input-field:focus {
  border-color: var(--border-color-glow);
  box-shadow: 0 0 10px rgba(99, 102, 241, 0.15);
}

.select-field {
  cursor: pointer;
  appearance: none;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='%2394a3b8' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpolyline points='6 9 12 15 18 9'%3E%3C/polyline%3E%3C/svg%3E");
  background-repeat: no-repeat;
  background-position: right 1rem center;
  background-size: 1rem;
}

.select-field option {
  background-color: var(--bg-surface-solid);
  color: var(--text-primary);
}

.textarea-field {
  resize: vertical;
  min-height: 120px;
}

.btn-submit {
  position: relative;
  overflow: hidden;
}

.btn-submit.is-success {
  background: linear-gradient(135deg, #22c55e 0%, var(--color-secondary) 100%);
}

.success-check {
  gap: 0.5rem;
}

/* Tech Marquee Section */
.marquee-section {
  position: relative;
  padding: 1rem 0 2rem;
  border-top: 1px solid var(--border-color);
  border-bottom: 1px solid var(--border-color);
}

/* Detail Panel Transition */
.detail-fade-enter-active,
.detail-fade-leave-active {
  transition: opacity 0.35s ease, transform 0.35s ease;
}

.detail-fade-enter-from {
  opacity: 0;
  transform: translateY(16px);
}

.detail-fade-leave-to {
  opacity: 0;
  transform: translateY(-16px);
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
  
  .founders-grid {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
}
</style>
