<script setup lang="ts">
const props = defineProps<{
  title?: string
  subtitle?: string
}>()

const defaultTitle = 'La Transformación Que Necesitas'
const defaultSubtitle = 'De la idea estancada al negocio digital que genera ingresos'

const problems = [
  { text: 'Ideas sin validar que no generan tracción', icon: 'x' },
  { text: 'Procesos manuales que consumen todo tu tiempo', icon: 'x' },
  { text: 'Falta de estrategia clara para escalar', icon: 'x' },
  { text: 'Inversión sin retorno medible', icon: 'x' }
]

const solutions = [
  { text: 'MVPs validados con clientes reales en semanas', icon: 'check' },
  { text: 'Automatización que libera 80% de tu tiempo', icon: 'check' },
  { text: 'Roadmap claro con métricas y objetivos', icon: 'check' },
  { text: 'ROI medible desde el primer mes', icon: 'check' }
]
</script>

<template>
  <section class="problem-solution-section">
    <div class="problem-solution-container">
      <!-- Header -->
      <div class="section-header">
        <h2 class="section-title" data-animate="fade-in-up">
          {{ title || defaultTitle }}
        </h2>
        <p class="section-subtitle" data-animate="fade-in-up" data-delay="100">
          {{ subtitle || defaultSubtitle }}
        </p>
      </div>

      <!-- Comparison Grid -->
      <div class="comparison-grid">
        <!-- Before (Problem) -->
        <div class="comparison-column problem-column" data-animate="slide-in-left">
          <div class="column-header">
            <div class="column-icon problem-icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <circle cx="12" cy="12" r="10"/>
                <line x1="15" y1="9" x2="9" y2="15"/>
                <line x1="9" y1="9" x2="15" y2="15"/>
              </svg>
            </div>
            <h3 class="column-title">Antes</h3>
            <p class="column-subtitle">El problema común</p>
          </div>

          <ul class="items-list">
            <li v-for="(problem, index) in problems" :key="index" class="list-item problem-item">
              <svg class="item-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <line x1="18" y1="6" x2="6" y2="18"/>
                <line x1="6" y1="6" x2="18" y2="18"/>
              </svg>
              <span>{{ problem.text }}</span>
            </li>
          </ul>
        </div>

        <!-- Arrow/Transition -->
        <div class="transition-arrow" data-animate="fade-in" data-delay="300">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <line x1="5" y1="12" x2="19" y2="12"/>
            <polyline points="12 5 19 12 12 19"/>
          </svg>
          <span class="arrow-label">Transformación</span>
        </div>

        <!-- After (Solution) -->
        <div class="comparison-column solution-column" data-animate="slide-in-right">
          <div class="column-header">
            <div class="column-icon solution-icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
              </svg>
            </div>
            <h3 class="column-title">Después</h3>
            <p class="column-subtitle">Tu nueva realidad</p>
          </div>

          <ul class="items-list">
            <li v-for="(solution, index) in solutions" :key="index" class="list-item solution-item">
              <svg class="item-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3">
                <polyline points="20 6 9 17 4 12"/>
              </svg>
              <span>{{ solution.text }}</span>
            </li>
          </ul>
        </div>
      </div>

      <!-- Illustration -->
      <div class="illustration-wrapper" data-animate="fade-in-up" data-delay="400">
        <svg viewBox="0 0 800 200" xmlns="http://www.w3.org/2000/svg" class="journey-illustration">
          <defs>
            <linearGradient id="journeyGradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" style="stop-color:#ff4444;stop-opacity:0.5" />
              <stop offset="50%" style="stop-color:#ffaa00;stop-opacity:0.5" />
              <stop offset="100%" style="stop-color:#00d4ff;stop-opacity:0.8" />
            </linearGradient>
          </defs>

          <!-- Journey Path -->
          <path d="M 50 150 Q 200 120, 300 100 T 750 50"
                stroke="url(#journeyGradient)"
                stroke-width="4"
                fill="none"
                stroke-dasharray="8 4"/>

          <!-- Start Point -->
          <circle cx="50" cy="150" r="12" fill="#ff4444" opacity="0.7"/>
          <circle cx="50" cy="150" r="6" fill="#ff4444"/>

          <!-- Milestone 1 -->
          <circle cx="250" cy="110" r="8" fill="#ffaa00" opacity="0.7"/>
          <circle cx="250" cy="110" r="4" fill="#ffaa00"/>

          <!-- Milestone 2 -->
          <circle cx="450" cy="85" r="8" fill="#00aaff" opacity="0.7"/>
          <circle cx="450" cy="85" r="4" fill="#00aaff"/>

          <!-- End Point (Success) -->
          <circle cx="750" cy="50" r="16" fill="#00d4ff" opacity="0.3"/>
          <circle cx="750" cy="50" r="12" fill="#00d4ff" opacity="0.6"/>
          <circle cx="750" cy="50" r="8" fill="#00d4ff"/>

          <!-- Labels -->
          <text x="50" y="180" font-family="Inter" font-size="12" fill="#a0a0a0" text-anchor="middle">Idea</text>
          <text x="250" y="140" font-family="Inter" font-size="12" fill="#a0a0a0" text-anchor="middle">Validación</text>
          <text x="450" y="115" font-family="Inter" font-size="12" fill="#a0a0a0" text-anchor="middle">Lanzamiento</text>
          <text x="750" y="30" font-family="Inter" font-size="14" fill="#00d4ff" text-anchor="middle" font-weight="600">Éxito</text>
        </svg>
      </div>
    </div>
  </section>
</template>

<style scoped>
/* Section */
.problem-solution-section {
  padding: 120px 24px;
  position: relative;
  background: rgba(0, 0, 0, 0.3);
}

.problem-solution-container {
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

/* Comparison Grid */
.comparison-grid {
  display: grid;
  grid-template-columns: 1fr auto 1fr;
  gap: 48px;
  align-items: start;
  margin-bottom: 80px;
}

/* Column */
.comparison-column {
  background: rgba(255, 255, 255, 0.02);
  border: 1px solid rgba(255, 255, 255, 0.05);
  border-radius: 16px;
  padding: 32px;
  transition: all 0.4s ease;
}

.problem-column {
  border-color: rgba(255, 68, 68, 0.2);
}

.problem-column:hover {
  border-color: rgba(255, 68, 68, 0.3);
  background: rgba(255, 68, 68, 0.03);
}

.solution-column {
  border-color: rgba(0, 212, 255, 0.2);
}

.solution-column:hover {
  border-color: rgba(0, 212, 255, 0.4);
  background: rgba(0, 212, 255, 0.03);
}

/* Column Header */
.column-header {
  text-align: center;
  margin-bottom: 32px;
}

.column-icon {
  width: 64px;
  height: 64px;
  margin: 0 auto 16px;
  padding: 16px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
}

.problem-icon {
  background: linear-gradient(135deg, rgba(255, 68, 68, 0.2), rgba(255, 68, 68, 0.1));
  border: 2px solid rgba(255, 68, 68, 0.3);
}

.problem-icon svg {
  color: #ff4444;
}

.solution-icon {
  background: linear-gradient(135deg, rgba(0, 212, 255, 0.2), rgba(0, 102, 255, 0.1));
  border: 2px solid rgba(0, 212, 255, 0.3);
}

.solution-icon svg {
  color: #00d4ff;
}

.column-title {
  font-family: 'Poppins', sans-serif;
  font-size: 24px;
  font-weight: 600;
  color: #ffffff;
  margin: 0 0 8px 0;
}

.column-subtitle {
  font-family: 'Inter', sans-serif;
  font-size: 14px;
  font-weight: 400;
  color: #808080;
  margin: 0;
}

/* Items List */
.items-list {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.list-item {
  display: flex;
  align-items: flex-start;
  gap: 12px;
  font-family: 'Inter', sans-serif;
  font-size: 15px;
  line-height: 1.6;
}

.item-icon {
  width: 20px;
  height: 20px;
  flex-shrink: 0;
  margin-top: 2px;
}

.problem-item {
  color: #c0c0c0;
}

.problem-item .item-icon {
  color: #ff6666;
}

.solution-item {
  color: #e0e0e0;
  font-weight: 500;
}

.solution-item .item-icon {
  color: #00d4ff;
}

/* Transition Arrow */
.transition-arrow {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 8px;
  padding-top: 80px;
}

.transition-arrow svg {
  width: 48px;
  height: 48px;
  color: #00d4ff;
  animation: pulse 2s ease-in-out infinite;
}

.arrow-label {
  font-family: 'Inter', sans-serif;
  font-size: 12px;
  font-weight: 600;
  color: #00d4ff;
  text-transform: uppercase;
  letter-spacing: 1px;
  writing-mode: vertical-rl;
  text-orientation: mixed;
  transform: rotate(180deg);
}

@keyframes pulse {
  0%, 100% { opacity: 0.6; transform: scale(1); }
  50% { opacity: 1; transform: scale(1.1); }
}

/* Illustration */
.illustration-wrapper {
  background: rgba(255, 255, 255, 0.02);
  border: 1px solid rgba(0, 150, 255, 0.1);
  border-radius: 16px;
  padding: 32px;
  overflow: hidden;
}

.journey-illustration {
  width: 100%;
  height: auto;
  display: block;
}

/* Animations */
[data-animate="fade-in-up"],
[data-animate="slide-in-left"],
[data-animate="slide-in-right"],
[data-animate="fade-in"] {
  opacity: 0;
}

[data-animate="fade-in-up"] {
  animation: fadeInUp 0.8s ease-out forwards;
}

[data-animate="slide-in-left"] {
  animation: slideInLeft 0.8s ease-out forwards;
}

[data-animate="slide-in-right"] {
  animation: slideInRight 0.8s ease-out forwards;
}

[data-animate="fade-in"] {
  animation: fadeIn 0.8s ease-out forwards;
}

[data-delay="100"] { animation-delay: 0.1s; }
[data-delay="200"] { animation-delay: 0.2s; }
[data-delay="300"] { animation-delay: 0.3s; }
[data-delay="400"] { animation-delay: 0.4s; }

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

@keyframes slideInLeft {
  from {
    opacity: 0;
    transform: translateX(-32px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}

@keyframes slideInRight {
  from {
    opacity: 0;
    transform: translateX(32px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}

@keyframes fadeIn {
  from { opacity: 0; }
  to { opacity: 1; }
}

/* Responsive */
@media (max-width: 968px) {
  .comparison-grid {
    grid-template-columns: 1fr;
    gap: 32px;
  }

  .transition-arrow {
    padding-top: 0;
  }

  .transition-arrow svg {
    transform: rotate(90deg);
  }

  .arrow-label {
    writing-mode: horizontal-tb;
    transform: rotate(0);
  }
}

@media (max-width: 768px) {
  .problem-solution-section {
    padding: 80px 16px;
  }

  .section-header {
    margin-bottom: 48px;
  }

  .comparison-column {
    padding: 24px;
  }

  .column-icon {
    width: 56px;
    height: 56px;
    margin-bottom: 12px;
  }

  .illustration-wrapper {
    padding: 24px 16px;
  }
}
</style>
