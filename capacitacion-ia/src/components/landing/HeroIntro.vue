<script setup lang="ts">
import { ref } from 'vue'

const props = defineProps<{
  name?: string
  title?: string
  subtitle?: string
  ctaText?: string
  ctaLink?: string
}>()

const defaultName = 'Tu Nombre'
const defaultTitle = 'Transformo Ideas en Negocios Digitales Exitosos'
const defaultSubtitle = 'Ayudo a emprendedores a validar, lanzar y escalar sus proyectos usando estrategias probadas de IA y automatización.'
const defaultCtaText = 'Agendar Llamada Estratégica'
const defaultCtaLink = 'https://wa.me/1234567890'

const handleCTA = () => {
  window.open(props.ctaLink || defaultCtaLink, '_blank', 'noopener,noreferrer')
}
</script>

<template>
  <section class="hero-section">
    <div class="hero-container">
      <!-- Avatar con SVG -->
      <div class="avatar-wrapper" data-animate="fade-in-up">
        <div class="avatar-glow"></div>
        <svg class="avatar-svg" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id="avatarGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" style="stop-color:#00d4ff;stop-opacity:1" />
              <stop offset="100%" style="stop-color:#0066ff;stop-opacity:1" />
            </linearGradient>
          </defs>
          <!-- Circle background -->
          <circle cx="100" cy="100" r="95" fill="url(#avatarGradient)" opacity="0.2"/>
          <!-- Head -->
          <circle cx="100" cy="80" r="35" fill="url(#avatarGradient)"/>
          <!-- Body -->
          <path d="M 60 160 Q 60 120 100 120 Q 140 120 140 160 L 140 200 L 60 200 Z"
                fill="url(#avatarGradient)"/>
          <!-- Decorative dots -->
          <circle cx="70" cy="70" r="3" fill="#00d4ff" opacity="0.6"/>
          <circle cx="130" cy="70" r="3" fill="#00d4ff" opacity="0.6"/>
          <circle cx="100" cy="50" r="2" fill="#00d4ff" opacity="0.4"/>
        </svg>
      </div>

      <!-- Content -->
      <div class="hero-content">
        <p class="hero-greeting" data-animate="fade-in-up" data-delay="100">
          Hola, soy {{ name || defaultName }}
        </p>

        <h1 class="hero-title" data-animate="fade-in-up" data-delay="200">
          {{ title || defaultTitle }}
        </h1>

        <p class="hero-subtitle" data-animate="fade-in-up" data-delay="300">
          {{ subtitle || defaultSubtitle }}
        </p>

        <!-- CTA Button -->
        <button
          class="hero-cta"
          data-animate="fade-in-up"
          data-delay="400"
          @click="handleCTA"
        >
          <span>{{ ctaText || defaultCtaText }}</span>
          <svg class="cta-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M5 12h14M12 5l7 7-7 7"/>
          </svg>
        </button>

        <!-- Trust indicators -->
        <div class="trust-indicators" data-animate="fade-in" data-delay="500">
          <div class="indicator">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
            </svg>
            <span>+50 Proyectos</span>
          </div>
          <div class="indicator">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
              <circle cx="9" cy="7" r="4"/>
              <path d="M23 21v-2a4 4 0 0 0-3-3.87"/>
              <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
            </svg>
            <span>100% Satisfacción</span>
          </div>
          <div class="indicator">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/>
            </svg>
            <span>Resultados Reales</span>
          </div>
        </div>
      </div>
    </div>

    <!-- Decorative elements -->
    <div class="hero-decoration hero-decoration-1"></div>
    <div class="hero-decoration hero-decoration-2"></div>
  </section>
</template>

<style scoped>
/* Hero Section */
.hero-section {
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 80px 24px;
  position: relative;
  overflow: hidden;
}

.hero-container {
  max-width: 1200px;
  width: 100%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 48px;
  text-align: center;
  position: relative;
  z-index: 2;
}

/* Avatar */
.avatar-wrapper {
  position: relative;
  width: 200px;
  height: 200px;
}

.avatar-glow {
  position: absolute;
  inset: -20px;
  background: radial-gradient(circle, rgba(0, 212, 255, 0.3) 0%, transparent 70%);
  border-radius: 50%;
  animation: pulse-glow 3s ease-in-out infinite;
}

@keyframes pulse-glow {
  0%, 100% { opacity: 0.5; transform: scale(1); }
  50% { opacity: 0.8; transform: scale(1.05); }
}

.avatar-svg {
  width: 100%;
  height: 100%;
  filter: drop-shadow(0 8px 32px rgba(0, 212, 255, 0.3));
}

/* Hero Content */
.hero-content {
  max-width: 800px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 24px;
}

.hero-greeting {
  font-family: 'Inter', sans-serif;
  font-size: 18px;
  font-weight: 500;
  color: #00d4ff;
  letter-spacing: 0.5px;
  text-transform: uppercase;
}

.hero-title {
  font-family: 'Poppins', sans-serif;
  font-size: clamp(32px, 6vw, 64px);
  font-weight: 800;
  line-height: 1.1;
  background: linear-gradient(135deg, #00d4ff 0%, #0066ff 50%, #00d4ff 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  background-size: 200% 200%;
  animation: gradientShine 4s ease-in-out infinite;
  margin: 0;
}

.hero-subtitle {
  font-family: 'Inter', sans-serif;
  font-size: clamp(16px, 2.5vw, 20px);
  font-weight: 400;
  line-height: 1.6;
  color: #e0e0e0;
  max-width: 600px;
  margin: 0;
}

/* CTA Button */
.hero-cta {
  margin-top: 16px;
  padding: 20px 40px;
  font-family: 'Poppins', sans-serif;
  font-size: 18px;
  font-weight: 600;
  color: #000000;
  background: linear-gradient(135deg, #00d4ff 0%, #0066ff 100%);
  border: none;
  border-radius: 50px;
  cursor: pointer;
  display: inline-flex;
  align-items: center;
  gap: 12px;
  transition: all 0.3s ease;
  box-shadow: 0 8px 24px rgba(0, 212, 255, 0.4);
  position: relative;
  overflow: hidden;
}

.hero-cta::before {
  content: '';
  position: absolute;
  inset: 0;
  background: linear-gradient(135deg, #0066ff 0%, #00d4ff 100%);
  opacity: 0;
  transition: opacity 0.3s ease;
}

.hero-cta:hover {
  transform: translateY(-4px) scale(1.05);
  box-shadow: 0 12px 32px rgba(0, 212, 255, 0.6);
}

.hero-cta:hover::before {
  opacity: 1;
}

.hero-cta span,
.hero-cta .cta-icon {
  position: relative;
  z-index: 1;
}

.cta-icon {
  width: 20px;
  height: 20px;
  transition: transform 0.3s ease;
}

.hero-cta:hover .cta-icon {
  transform: translateX(4px);
}

/* Trust Indicators */
.trust-indicators {
  display: flex;
  gap: 32px;
  margin-top: 24px;
  flex-wrap: wrap;
  justify-content: center;
}

.indicator {
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 12px 24px;
  background: rgba(0, 150, 255, 0.1);
  border: 1px solid rgba(0, 212, 255, 0.2);
  border-radius: 100px;
  transition: all 0.3s ease;
}

.indicator:hover {
  background: rgba(0, 150, 255, 0.15);
  border-color: rgba(0, 212, 255, 0.4);
  transform: translateY(-2px);
}

.indicator svg {
  width: 20px;
  height: 20px;
  color: #00d4ff;
  flex-shrink: 0;
}

.indicator span {
  font-family: 'Inter', sans-serif;
  font-size: 14px;
  font-weight: 500;
  color: #ffffff;
  white-space: nowrap;
}

/* Decorative Elements */
.hero-decoration {
  position: absolute;
  border-radius: 50%;
  filter: blur(60px);
  opacity: 0.15;
  pointer-events: none;
}

.hero-decoration-1 {
  width: 400px;
  height: 400px;
  background: radial-gradient(circle, #00d4ff, transparent);
  top: 10%;
  left: 5%;
  animation: float 20s ease-in-out infinite;
}

.hero-decoration-2 {
  width: 300px;
  height: 300px;
  background: radial-gradient(circle, #0066ff, transparent);
  bottom: 20%;
  right: 10%;
  animation: float 25s ease-in-out infinite reverse;
}

@keyframes float {
  0%, 100% { transform: translate(0, 0) scale(1); }
  33% { transform: translate(30px, -30px) scale(1.1); }
  66% { transform: translate(-20px, 20px) scale(0.9); }
}

/* Animations */
[data-animate="fade-in-up"] {
  animation: fadeInUp 0.8s ease-out forwards;
  opacity: 0;
}

[data-animate="fade-in"] {
  animation: fadeIn 0.8s ease-out forwards;
  opacity: 0;
}

[data-delay="100"] { animation-delay: 0.1s; }
[data-delay="200"] { animation-delay: 0.2s; }
[data-delay="300"] { animation-delay: 0.3s; }
[data-delay="400"] { animation-delay: 0.4s; }
[data-delay="500"] { animation-delay: 0.5s; }

@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(32px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes fadeIn {
  from { opacity: 0; }
  to { opacity: 1; }
}

/* Responsive */
@media (max-width: 768px) {
  .hero-section {
    padding: 64px 16px;
  }

  .avatar-wrapper {
    width: 150px;
    height: 150px;
  }

  .trust-indicators {
    gap: 16px;
  }

  .indicator {
    padding: 10px 16px;
  }

  .indicator span {
    font-size: 12px;
  }

  .hero-cta {
    padding: 16px 32px;
    font-size: 16px;
  }
}
</style>
