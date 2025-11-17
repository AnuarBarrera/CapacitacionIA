<script setup lang="ts">
interface Project {
  title: string
  description: string
  tags: string[]
  metrics?: string
  image?: string
}

const props = defineProps<{
  title?: string
  subtitle?: string
  projects?: Project[]
}>()

const defaultTitle = 'Proyectos Destacados'
const defaultSubtitle = 'Resultados reales de clientes que confiaron en mi metodología'

const defaultProjects: Project[] = [
  {
    title: 'SaaS de Gestión Educativa',
    description: 'Plataforma completa para instituciones educativas con IA para seguimiento de estudiantes y automatización administrativa.',
    tags: ['Vue.js', 'Node.js', 'IA'],
    metrics: '300% ROI en 6 meses'
  },
  {
    title: 'Marketplace B2B Automatizado',
    description: 'Conectó 500+ proveedores con compradores industriales usando matching inteligente y procesos automatizados end-to-end.',
    tags: ['Automatización', 'API', 'ML'],
    metrics: '$2M en GMV primer año'
  },
  {
    title: 'Sistema de Lead Generation',
    description: 'Bot conversacional con IA que califica leads 24/7, reduce CAC en 60% y aumenta conversión en landing pages.',
    tags: ['ChatGPT', 'Python', 'CRM'],
    metrics: '-60% CAC, +45% conversión'
  }
]

const projectsList = props.projects || defaultProjects
</script>

<template>
  <section class="portfolio-section">
    <div class="portfolio-container">
      <!-- Header -->
      <div class="section-header">
        <h2 class="section-title" data-animate="fade-in-up">
          {{ title || defaultTitle }}
        </h2>
        <p class="section-subtitle" data-animate="fade-in-up" data-delay="100">
          {{ subtitle || defaultSubtitle }}
        </p>
      </div>

      <!-- Projects Grid -->
      <div class="projects-grid">
        <div
          v-for="(project, index) in projectsList"
          :key="index"
          class="project-card"
          :data-animate="'fade-in-up'"
          :data-delay="(index + 2) * 100"
        >
          <!-- Decorative SVG Illustration -->
          <div class="project-illustration">
            <svg viewBox="0 0 300 200" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <linearGradient :id="`projectGradient${index}`" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" style="stop-color:#00d4ff;stop-opacity:0.3" />
                  <stop offset="100%" style="stop-color:#0066ff;stop-opacity:0.2" />
                </linearGradient>
              </defs>

              <!-- Different pattern for each project -->
              <template v-if="index === 0">
                <!-- Education platform pattern -->
                <rect x="40" y="40" width="220" height="120" rx="8" :fill="`url(#projectGradient${index})`" stroke="#00d4ff" stroke-width="2"/>
                <line x1="60" y1="70" x2="240" y2="70" stroke="#00d4ff" stroke-width="2" opacity="0.5"/>
                <circle cx="80" cy="100" r="15" fill="#0066ff" opacity="0.4"/>
                <circle cx="150" cy="100" r="15" fill="#00d4ff" opacity="0.4"/>
                <circle cx="220" cy="100" r="15" fill="#00d4ff" opacity="0.3"/>
                <line x1="60" y1="130" x2="180" y2="130" stroke="#00d4ff" stroke-width="2" opacity="0.3"/>
              </template>

              <template v-else-if="index === 1">
                <!-- Marketplace pattern -->
                <circle cx="80" cy="80" r="30" :fill="`url(#projectGradient${index})`" stroke="#00d4ff" stroke-width="2"/>
                <circle cx="220" cy="120" r="30" :fill="`url(#projectGradient${index})`" stroke="#0066ff" stroke-width="2"/>
                <path d="M 110 80 Q 150 50, 190 120" stroke="#00d4ff" stroke-width="3" fill="none" stroke-dasharray="5,5" opacity="0.6"/>
                <circle cx="150" cy="80" r="8" fill="#00d4ff" opacity="0.8"/>
                <circle cx="150" cy="100" r="8" fill="#0066ff" opacity="0.6"/>
              </template>

              <template v-else>
                <!-- Chatbot pattern -->
                <path d="M 100 60 L 200 60 L 200 140 L 180 140 L 150 160 L 150 140 L 100 140 Z" :fill="`url(#projectGradient${index})`" stroke="#00d4ff" stroke-width="2"/>
                <circle cx="130" cy="90" r="6" fill="#00d4ff"/>
                <circle cx="150" cy="90" r="6" fill="#00d4ff"/>
                <circle cx="170" cy="90" r="6" fill="#00d4ff"/>
                <path d="M 120 110 Q 150 120, 180 110" stroke="#00d4ff" stroke-width="2" fill="none" opacity="0.6"/>
              </template>
            </svg>
          </div>

          <!-- Content -->
          <div class="project-content">
            <h3 class="project-title">{{ project.title }}</h3>
            <p class="project-description">{{ project.description }}</p>

            <!-- Tags -->
            <div class="project-tags">
              <span v-for="(tag, tagIndex) in project.tags" :key="tagIndex" class="tag">
                {{ tag }}
              </span>
            </div>

            <!-- Metrics -->
            <div v-if="project.metrics" class="project-metrics">
              <svg class="metrics-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <polyline points="23 6 13.5 15.5 8.5 10.5 1 18"/>
                <polyline points="17 6 23 6 23 12"/>
              </svg>
              <span>{{ project.metrics }}</span>
            </div>
          </div>
        </div>
      </div>

      <!-- CTA -->
      <div class="portfolio-cta" data-animate="fade-in-up" data-delay="600">
        <p class="cta-text">¿Listo para tu propio caso de éxito?</p>
        <a href="#contact" class="cta-button">
          Conversemos sobre tu proyecto
        </a>
      </div>
    </div>
  </section>
</template>

<style scoped>
/* Section */
.portfolio-section {
  padding: 120px 24px;
  position: relative;
}

.portfolio-container {
  max-width: 1200px;
  margin: 0 auto;
}

/* Header */
.section-header {
  text-align: center;
  margin-bottom: 64px;
}

.section-title {
  font-family: 'Poppins', sans-serif;
  font-size: clamp(32px, 5vw, 48px);
  font-weight: 700;
  line-height: 1.2;
  background: linear-gradient(135deg, #ffffff 0%, #e0e0e0 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  margin: 0 0 16px 0;
}

.section-subtitle {
  font-family: 'Inter', sans-serif;
  font-size: clamp(16px, 2vw, 18px);
  font-weight: 400;
  line-height: 1.6;
  color: #a0a0a0;
  max-width: 700px;
  margin: 0 auto;
}

/* Projects Grid */
.projects-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  gap: 32px;
  margin-bottom: 64px;
}

/* Project Card */
.project-card {
  position: relative;
  background: rgba(255, 255, 255, 0.02);
  border: 1px solid rgba(0, 150, 255, 0.15);
  border-radius: 16px;
  overflow: hidden;
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
}

.project-card::before {
  content: '';
  position: absolute;
  inset: 0;
  background: linear-gradient(135deg, rgba(0, 212, 255, 0.05) 0%, rgba(0, 102, 255, 0.05) 100%);
  opacity: 0;
  transition: opacity 0.4s ease;
}

.project-card:hover {
  transform: translateY(-8px);
  border-color: rgba(0, 212, 255, 0.4);
  box-shadow: 0 20px 60px rgba(0, 212, 255, 0.2);
}

.project-card:hover::before {
  opacity: 1;
}

/* Illustration */
.project-illustration {
  height: 200px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(0, 0, 0, 0.2);
  border-bottom: 1px solid rgba(0, 150, 255, 0.1);
  padding: 16px;
  position: relative;
  z-index: 1;
}

.project-illustration svg {
  width: 100%;
  height: 100%;
}

/* Content */
.project-content {
  padding: 24px;
  position: relative;
  z-index: 1;
}

.project-title {
  font-family: 'Poppins', sans-serif;
  font-size: 22px;
  font-weight: 600;
  line-height: 1.3;
  color: #ffffff;
  margin: 0 0 12px 0;
}

.project-description {
  font-family: 'Inter', sans-serif;
  font-size: 15px;
  font-weight: 400;
  line-height: 1.6;
  color: #b0b0b0;
  margin: 0 0 16px 0;
}

/* Tags */
.project-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-bottom: 16px;
}

.tag {
  font-family: 'Inter', sans-serif;
  font-size: 12px;
  font-weight: 500;
  color: #00d4ff;
  background: rgba(0, 212, 255, 0.1);
  border: 1px solid rgba(0, 212, 255, 0.2);
  padding: 4px 12px;
  border-radius: 100px;
  transition: all 0.3s ease;
}

.tag:hover {
  background: rgba(0, 212, 255, 0.15);
  border-color: rgba(0, 212, 255, 0.3);
}

/* Metrics */
.project-metrics {
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 12px;
  background: rgba(0, 212, 255, 0.05);
  border: 1px solid rgba(0, 212, 255, 0.15);
  border-radius: 8px;
  font-family: 'Inter', sans-serif;
  font-size: 14px;
  font-weight: 600;
  color: #00d4ff;
}

.metrics-icon {
  width: 16px;
  height: 16px;
  flex-shrink: 0;
}

/* Portfolio CTA */
.portfolio-cta {
  text-align: center;
  padding: 48px 24px;
  background: rgba(0, 102, 255, 0.05);
  border: 1px solid rgba(0, 150, 255, 0.2);
  border-radius: 16px;
}

.cta-text {
  font-family: 'Poppins', sans-serif;
  font-size: 24px;
  font-weight: 600;
  color: #ffffff;
  margin: 0 0 24px 0;
}

.cta-button {
  display: inline-block;
  padding: 16px 32px;
  font-family: 'Poppins', sans-serif;
  font-size: 16px;
  font-weight: 600;
  color: #000000;
  background: linear-gradient(135deg, #00d4ff 0%, #0066ff 100%);
  border: none;
  border-radius: 50px;
  text-decoration: none;
  transition: all 0.3s ease;
  box-shadow: 0 8px 24px rgba(0, 212, 255, 0.3);
}

.cta-button:hover {
  transform: translateY(-4px);
  box-shadow: 0 12px 32px rgba(0, 212, 255, 0.5);
}

/* Animations */
[data-animate="fade-in-up"] {
  animation: fadeInUp 0.8s ease-out forwards;
  opacity: 0;
}

[data-delay="200"] { animation-delay: 0.2s; }
[data-delay="300"] { animation-delay: 0.3s; }
[data-delay="400"] { animation-delay: 0.4s; }
[data-delay="500"] { animation-delay: 0.5s; }
[data-delay="600"] { animation-delay: 0.6s; }

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

/* Responsive */
@media (max-width: 768px) {
  .portfolio-section {
    padding: 80px 16px;
  }

  .projects-grid {
    grid-template-columns: 1fr;
    gap: 24px;
  }

  .project-content {
    padding: 20px;
  }

  .cta-text {
    font-size: 20px;
  }

  .cta-button {
    padding: 14px 28px;
    font-size: 15px;
  }
}
</style>
