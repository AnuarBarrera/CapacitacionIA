<script setup lang="ts">
import { ref, computed } from 'vue'
import type { ICardGridSlide } from '@/interfaces/Slide'

const props = defineProps<{
  slide: ICardGridSlide
}>()

const emit = defineEmits<{
  'navigate-to-slide': [slideId: string]
  next: []
}>()

// Estado para controlar qué tarjetas están expandidas
const expandedCards = ref<Set<string>>(new Set())

// Alternar expansión de una tarjeta
const toggleCard = (cardId: string, hasLink?: string) => {
  // Si tiene link y no está expandida, navegar en lugar de expandir
  if (hasLink && !expandedCards.value.has(cardId)) {
    handleCardClick(hasLink)
    return
  }

  if (expandedCards.value.has(cardId)) {
    expandedCards.value.delete(cardId)
  } else {
    expandedCards.value.add(cardId)
  }
  // Forzar re-render
  expandedCards.value = new Set(expandedCards.value)
}

// Verificar si una tarjeta está expandida
const isExpanded = (cardId: string) => expandedCards.value.has(cardId)

// Verificar si una tarjeta tiene contenido expandible
const hasExpandableContent = (card: any) => {
  return !!(card.bullets || card.svgContent)
}

const handleCardClick = (link?: string) => {
  if (link) {
    if (link.startsWith('http')) {
      window.open(link, '_blank')
    } else {
      // Es un enlace interno a otra slide - emitir evento para navegar
      emit('navigate-to-slide', link)
    }
  }
}

const handleNextClick = () => {
  emit('next')
}
</script>

<template>
  <div class="card-grid-slide">
    <!-- Hero Section -->
    <div class="hero-section">
      <h2 class="hero-title">{{ slide.title }}</h2>
      <p v-if="slide.description" class="hero-description">{{ slide.description }}</p>
    </div>

    <div
      class="card-grid"
      :style="{
        gridTemplateColumns: `repeat(auto-fit, minmax(250px, 1fr))`
      }"
    >
      <div
        v-for="card in slide.cards"
        :key="card.id"
        class="card"
        :class="{
          clickable: !!card.link || hasExpandableContent(card),
          expanded: isExpanded(card.id),
          'has-content': hasExpandableContent(card)
        }"
        @click="hasExpandableContent(card) ? toggleCard(card.id, card.link) : handleCardClick(card.link)"
      >
        <div class="card-header">
          <div class="card-icon" v-if="card.icon || card.logoUrl">
            <div v-if="card.icon && card.icon.startsWith('<svg')" class="icon-svg" v-html="card.icon"></div>
            <span v-else-if="card.icon" class="icon-emoji">{{ card.icon }}</span>
            <img v-else-if="card.logoUrl" :src="card.logoUrl" :alt="card.title" class="icon-image" />
          </div>

          <h3 class="card-title">{{ card.title }}</h3>

          <!-- Indicador de expansión -->
          <div v-if="hasExpandableContent(card)" class="expand-indicator">
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="chevron"
            >
              <polyline points="6 9 12 15 18 9"></polyline>
            </svg>
          </div>
        </div>

        <p v-if="card.description && !hasExpandableContent(card)" class="card-description">{{ card.description }}</p>

        <!-- Contenido expandible -->
        <Transition name="expand">
          <div v-if="isExpanded(card.id)" class="card-expanded-content">
            <p v-if="card.description" class="card-description">{{ card.description }}</p>

            <!-- Bullets -->
            <ul v-if="card.bullets && card.bullets.length > 0" class="card-bullets">
              <li v-for="(bullet, index) in card.bullets" :key="index">{{ bullet }}</li>
            </ul>

            <!-- SVG Content -->
            <div v-if="card.svgContent" class="card-svg-content" v-html="card.svgContent"></div>

            <div v-if="card.link" class="card-link">
              <span v-if="card.link.startsWith('http')">Visitar →</span>
              <span v-else>Ver más →</span>
            </div>
          </div>
        </Transition>
      </div>
    </div>

    <!-- Diagrama de flujo / SVG adicional - Siempre visible -->
    <div v-if="slide.flowDiagram" class="flow-diagram-container">
      <h3 class="flow-diagram-title">Demo Interactiva</h3>
      <div class="flow-diagram" v-html="slide.flowDiagram"></div>
    </div>

    <!-- Botón para continuar -->
    <div class="navigation-section">
      <button class="next-button" @click="handleNextClick">
        Continuar con la presentación
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        >
          <polyline points="9 18 15 12 9 6"></polyline>
        </svg>
      </button>
    </div>
  </div>
</template>

<style scoped>
.card-grid-slide {
  padding: var(--spacing-4) var(--spacing-8);
  max-width: var(--container-2xl);
  width: 100%;
  margin: 0 auto;
}

/* Hero Section */
.hero-section {
  text-align: center;
  margin-bottom: var(--spacing-6);
  padding: var(--spacing-6) var(--spacing-4);
  background: linear-gradient(135deg, var(--color-primary-600) 0%, var(--color-primary-700) 100%);
  border-radius: var(--radius-xl);
  box-shadow: var(--shadow-xl);
  position: relative;
  overflow: hidden;
}

.hero-section::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: radial-gradient(circle at 30% 50%, rgba(255, 107, 107, 0.1) 0%, transparent 50%);
  pointer-events: none;
}

.hero-title {
  font-family: var(--font-hero);
  font-size: clamp(var(--text-3xl), 5vw, var(--text-6xl));
  font-weight: var(--font-black);
  margin-bottom: var(--spacing-3);
  color: var(--color-text-inverse);
  position: relative;
  z-index: 1;
  text-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);
}

.hero-description {
  font-family: var(--font-primary);
  font-size: clamp(var(--text-lg), 2vw, var(--text-2xl));
  line-height: 1.6;
  margin: 0;
  color: rgba(255, 255, 255, 0.95);
  position: relative;
  z-index: 1;
  font-weight: var(--font-medium);
  max-width: 900px;
  margin-left: auto;
  margin-right: auto;
}

.card-grid {
  display: grid;
  gap: var(--spacing-4);
  margin-top: var(--spacing-4);
}

.card {
  background: var(--color-bg-primary);
  border: var(--border-width-md) solid var(--color-neutral-300);
  border-radius: var(--radius-lg);
  padding: var(--spacing-4);
  text-align: left;
  transition: all var(--transition-base);
  display: flex;
  flex-direction: column;
  align-items: stretch;
  gap: var(--spacing-2);
  box-shadow: var(--shadow-md);
  position: relative;
  overflow: visible;
}

.card::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 4px;
  background: linear-gradient(90deg, var(--color-primary-600) 0%, var(--color-primary-400) 100%);
  opacity: 0;
  transition: opacity var(--transition-base);
}

.card:hover::before {
  opacity: 1;
}

.card.clickable {
  cursor: pointer;
}

.card:hover {
  transform: translateY(-4px);
  box-shadow: var(--shadow-xl);
  border-color: var(--color-primary-400);
}

.card.clickable:hover {
  border-color: var(--color-primary-600);
}

.card.expanded {
  background: var(--color-primary-50);
  border-color: var(--color-primary-500);
}

/* Header de la tarjeta */
.card-header {
  display: flex;
  align-items: center;
  gap: var(--spacing-3);
  width: 100%;
}

.card-icon {
  width: 60px;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(135deg, #ff6b6b 0%, #fa5252 100%);
  border-radius: var(--radius-md);
  margin-bottom: var(--spacing-2);
  box-shadow: var(--shadow-md);
  flex-shrink: 0;
}

.icon-emoji {
  font-size: var(--text-5xl);
  filter: drop-shadow(0 2px 4px rgba(0, 0, 0, 0.2));
}

.icon-svg {
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--color-text-inverse);
}

.icon-svg svg {
  width: 35px;
  height: 35px;
}

.icon-image {
  width: 40px;
  height: 40px;
  object-fit: contain;
}

.card-title {
  font-family: var(--font-primary);
  font-size: var(--text-xl);
  font-weight: var(--font-bold);
  color: var(--color-text-primary);
  margin: 0;
  line-height: 1.3;
  flex: 1;
}

/* Indicador de expansión */
.expand-indicator {
  flex-shrink: 0;
  width: 32px;
  height: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: var(--color-neutral-100);
  border-radius: var(--radius-md);
  transition: all var(--transition-base);
}

.card:hover .expand-indicator {
  background: var(--color-primary-100);
}

.card.expanded .expand-indicator {
  transform: rotate(180deg);
  background: var(--color-primary-200);
}

.expand-indicator .chevron {
  width: 20px;
  height: 20px;
  color: var(--color-text-primary);
}

/* Contenido expandido */
.card-expanded-content {
  display: flex;
  flex-direction: column;
  gap: var(--spacing-3);
  width: 100%;
}

.card-description {
  font-family: var(--font-primary);
  font-size: var(--text-base);
  color: var(--color-text-secondary);
  opacity: 0.8;
  margin: 0;
  line-height: 1.6;
}

.card-bullets {
  list-style: none;
  padding: 0;
  margin: var(--spacing-3) 0;
  width: 100%;
  text-align: left;
  display: flex;
  flex-direction: column;
  gap: var(--spacing-2);
}

.card-bullets li {
  font-family: var(--font-primary);
  font-size: var(--text-base);
  color: var(--color-text-secondary);
  padding: var(--spacing-2) var(--spacing-3);
  padding-left: var(--spacing-4);
  position: relative;
  line-height: 1.6;
  background: var(--color-neutral-50);
  border-radius: var(--radius-md);
  font-weight: var(--font-medium);
}

.card-bullets li::before {
  content: '•';
  position: absolute;
  left: var(--spacing-2);
  top: 50%;
  transform: translateY(-50%);
  color: #ff6b6b;
  font-weight: bold;
  font-size: var(--text-xl);
}

.card-svg-content {
  width: 100%;
  margin: var(--spacing-3) 0;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: var(--spacing-2);
  background: var(--color-neutral-50);
  border-radius: var(--radius-md);
  box-shadow: var(--shadow-sm);
}

.card-svg-content svg {
  width: 100%;
  height: auto;
  max-width: 350px;
  max-height: 250px;
}

.card-link {
  margin-top: auto;
  font-family: var(--font-primary);
  font-size: var(--text-base);
  font-weight: var(--font-semibold);
  color: var(--color-primary-600);
  padding-top: var(--spacing-2);
}

/* Diagrama de flujo */
.flow-diagram-container {
  margin-top: var(--spacing-8);
  padding: var(--spacing-6) var(--spacing-4);
  background: var(--color-bg-secondary);
  border-radius: var(--radius-xl);
  box-shadow: var(--shadow-lg);
  border: var(--border-width-md) solid var(--color-primary-300);
}

.flow-diagram-title {
  font-family: var(--font-display);
  font-size: var(--text-2xl);
  font-weight: var(--font-bold);
  color: var(--color-text-primary);
  text-align: center;
  margin-bottom: var(--spacing-4);
  margin-top: 0;
}

.flow-diagram {
  width: 100%;
  max-width: 800px;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: var(--spacing-3);
  background: var(--color-bg-primary);
  border-radius: var(--radius-lg);
  overflow-x: auto;
}

.flow-diagram svg {
  width: 100%;
  height: auto;
  max-width: 400px;
}

/* Sección de navegación */
.navigation-section {
  margin-top: var(--spacing-6);
  text-align: center;
}

.next-button {
  padding: var(--spacing-2) var(--spacing-5);
  font-family: var(--font-primary);
  font-size: var(--text-lg);
  font-weight: var(--font-bold);
  color: var(--color-text-inverse);
  background: linear-gradient(135deg, var(--color-primary-600) 0%, var(--color-primary-700) 100%);
  border: none;
  border-radius: var(--radius-full);
  cursor: pointer;
  transition: all var(--transition-base);
  box-shadow: var(--shadow-lg);
  display: inline-flex;
  align-items: center;
  gap: var(--spacing-1);
  text-transform: uppercase;
  letter-spacing: 1px;
}

.next-button svg {
  width: 20px;
  height: 20px;
  transition: transform var(--transition-base);
}

.next-button:hover {
  transform: translateY(-2px);
  box-shadow: var(--shadow-xl);
  background: linear-gradient(135deg, var(--color-primary-700) 0%, var(--color-primary-800) 100%);
}

.next-button:hover svg {
  transform: translateX(4px);
}

.next-button:active {
  transform: translateY(0);
  box-shadow: var(--shadow-md);
}

/* Transición de expansión */
.expand-enter-active,
.expand-leave-active {
  transition: all 0.3s ease;
  overflow: hidden;
}

.expand-enter-from,
.expand-leave-to {
  opacity: 0;
  max-height: 0;
  margin-top: 0;
}

.expand-enter-to,
.expand-leave-from {
  opacity: 1;
  max-height: 1000px;
  margin-top: var(--spacing-2);
}

@media (max-width: 768px) {
  .card-grid-slide {
    padding: var(--spacing-3);
  }

  .hero-section {
    padding: var(--spacing-4) var(--spacing-3);
    margin-bottom: var(--spacing-4);
  }

  .hero-title {
    font-size: var(--text-2xl);
  }

  .hero-description {
    font-size: var(--text-base);
  }

  .card-grid {
    grid-template-columns: 1fr;
    gap: var(--spacing-3);
  }

  .card {
    padding: var(--spacing-3);
  }

  .card-icon {
    width: 50px;
    height: 50px;
  }

  .icon-svg svg {
    width: 28px;
    height: 28px;
  }

  .icon-emoji {
    font-size: var(--text-3xl);
  }

  .card-title {
    font-size: var(--text-lg);
  }

  .expand-indicator {
    width: 28px;
    height: 28px;
  }

  .expand-indicator .chevron {
    width: 16px;
    height: 16px;
  }

  .next-button {
    padding: var(--spacing-2) var(--spacing-3);
    font-size: var(--text-base);
  }

  .card-bullets li {
    font-size: var(--text-sm);
    padding: var(--spacing-1) var(--spacing-2);
    padding-left: var(--spacing-4);
  }

  .card-svg-content {
    padding: var(--spacing-1);
  }

  .card-svg-content svg {
    max-width: 280px;
    max-height: 180px;
  }

  /* Flow diagram en móvil */
  .flow-diagram-container {
    margin-top: var(--spacing-4);
    padding: var(--spacing-3);
  }

  .flow-diagram-title {
    font-size: var(--text-lg);
    margin-bottom: var(--spacing-2);
  }

  .flow-diagram {
    padding: var(--spacing-2);
  }

  .flow-diagram svg {
    max-width: 100%;
  }
}
</style>
