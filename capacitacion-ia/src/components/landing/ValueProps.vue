<script setup lang="ts">
interface ValueProp {
  icon: string
  title: string
  description: string
}

const props = defineProps<{
  title?: string
  subtitle?: string
  values?: ValueProp[]
}>()

const defaultTitle = '¿Por Qué Trabajar Conmigo?'
const defaultSubtitle = 'No solo construyo soluciones, construyo sistemas que escalan y generan resultados medibles'

const defaultValues: ValueProp[] = [
  {
    icon: 'rocket',
    title: 'Validación Rápida de Ideas',
    description: 'Te ayudo a validar tu concepto en semanas, no meses. Usamos MVPs inteligentes y pruebas de mercado reales.'
  },
  {
    icon: 'automation',
    title: 'Automatización Inteligente',
    description: 'Implemento IA y automatización para que escales sin contratar equipos grandes. Más eficiencia, menos costos.'
  },
  {
    icon: 'growth',
    title: 'Estrategias de Crecimiento',
    description: 'No solo técnica: te enseño a posicionar, vender y crecer tu negocio digital de forma sostenible.'
  },
  {
    icon: 'support',
    title: 'Acompañamiento Real',
    description: 'Acceso directo a mí. Sin intermediarios. Sesiones estratégicas personalizadas cuando las necesites.'
  },
  {
    icon: 'results',
    title: 'Enfoque en Resultados',
    description: 'Todo se mide. Cada decisión está basada en datos y orientada a generar ROI desde el día uno.'
  }
]

const valuesList = props.values || defaultValues
</script>

<template>
  <section class="value-props-section">
    <div class="value-props-container">
      <!-- Header -->
      <div class="section-header">
        <h2 class="section-title" data-animate="fade-in-up">
          {{ title || defaultTitle }}
        </h2>
        <p class="section-subtitle" data-animate="fade-in-up" data-delay="100">
          {{ subtitle || defaultSubtitle }}
        </p>
      </div>

      <!-- Value Props Grid -->
      <div class="values-grid">
        <div
          v-for="(value, index) in valuesList"
          :key="index"
          class="value-card"
          :data-animate="'fade-in-up'"
          :data-delay="(index + 2) * 100"
        >
          <!-- Icon -->
          <div class="value-icon">
            <!-- Rocket Icon -->
            <svg v-if="value.icon === 'rocket'" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z"/>
              <path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z"/>
              <path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0"/>
              <path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5"/>
            </svg>

            <!-- Automation Icon -->
            <svg v-else-if="value.icon === 'automation'" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <rect x="2" y="7" width="20" height="14" rx="2" ry="2"/>
              <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/>
              <circle cx="12" cy="11" r="2"/>
              <path d="M12 13v4"/>
            </svg>

            <!-- Growth Icon -->
            <svg v-else-if="value.icon === 'growth'" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <polyline points="23 6 13.5 15.5 8.5 10.5 1 18"/>
              <polyline points="17 6 23 6 23 12"/>
            </svg>

            <!-- Support Icon -->
            <svg v-else-if="value.icon === 'support'" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <circle cx="12" cy="12" r="10"/>
              <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"/>
              <line x1="12" y1="17" x2="12.01" y2="17"/>
            </svg>

            <!-- Results Icon -->
            <svg v-else-if="value.icon === 'results'" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <circle cx="12" cy="12" r="10"/>
              <circle cx="12" cy="12" r="6"/>
              <circle cx="12" cy="12" r="2"/>
            </svg>

            <!-- Default Icon -->
            <svg v-else viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
            </svg>
          </div>

          <!-- Content -->
          <div class="value-content">
            <h3 class="value-title">{{ value.title }}</h3>
            <p class="value-description">{{ value.description }}</p>
          </div>

          <!-- Decorative corner -->
          <div class="value-corner"></div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
/* Section */
.value-props-section {
  padding: 120px 24px;
  position: relative;
  background: linear-gradient(180deg, transparent 0%, rgba(0, 102, 255, 0.02) 100%);
}

.value-props-container {
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

/* Values Grid */
.values-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  gap: 32px;
}

/* Value Card */
.value-card {
  position: relative;
  padding: 32px;
  background: rgba(255, 255, 255, 0.02);
  border: 1px solid rgba(0, 150, 255, 0.15);
  border-radius: 16px;
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  overflow: hidden;
}

.value-card::before {
  content: '';
  position: absolute;
  inset: 0;
  background: linear-gradient(135deg, rgba(0, 212, 255, 0.05) 0%, rgba(0, 102, 255, 0.05) 100%);
  opacity: 0;
  transition: opacity 0.4s ease;
}

.value-card:hover {
  transform: translateY(-8px);
  border-color: rgba(0, 212, 255, 0.4);
  box-shadow: 0 16px 48px rgba(0, 212, 255, 0.15);
}

.value-card:hover::before {
  opacity: 1;
}

/* Icon */
.value-icon {
  width: 56px;
  height: 56px;
  margin-bottom: 24px;
  padding: 12px;
  background: linear-gradient(135deg, #00d4ff 0%, #0066ff 100%);
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: transform 0.4s ease;
  position: relative;
  z-index: 1;
}

.value-card:hover .value-icon {
  transform: scale(1.1) rotate(5deg);
}

.value-icon svg {
  width: 100%;
  height: 100%;
  color: #000000;
}

/* Content */
.value-content {
  position: relative;
  z-index: 1;
}

.value-title {
  font-family: 'Poppins', sans-serif;
  font-size: 20px;
  font-weight: 600;
  line-height: 1.3;
  color: #ffffff;
  margin: 0 0 12px 0;
}

.value-description {
  font-family: 'Inter', sans-serif;
  font-size: 15px;
  font-weight: 400;
  line-height: 1.6;
  color: #b0b0b0;
  margin: 0;
}

/* Decorative Corner */
.value-corner {
  position: absolute;
  top: 0;
  right: 0;
  width: 40px;
  height: 40px;
  background: linear-gradient(135deg, rgba(0, 212, 255, 0.1) 0%, transparent 100%);
  border-radius: 0 16px 0 0;
  opacity: 0;
  transition: opacity 0.4s ease;
}

.value-card:hover .value-corner {
  opacity: 1;
}

/* Animations */
[data-animate="fade-in-up"] {
  animation: fadeInUp 0.8s ease-out forwards;
  opacity: 0;
}

[data-delay="100"] { animation-delay: 0.1s; }
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
  .value-props-section {
    padding: 80px 16px;
  }

  .section-header {
    margin-bottom: 48px;
  }

  .values-grid {
    grid-template-columns: 1fr;
    gap: 24px;
  }

  .value-card {
    padding: 24px;
  }

  .value-icon {
    width: 48px;
    height: 48px;
    margin-bottom: 16px;
  }
}
</style>
