<script setup lang="ts">
import { ref, computed, onMounted } from 'vue'
import type { IContentSlide } from '@/interfaces/Slide'
import NavigationButtons from '@/components/common/NavigationButtons.vue'

const props = defineProps<{
  slide: IContentSlide
}>()

const emit = defineEmits<{
  next: []
  previous: []
  'navigate-to-slide': [slideId: string]
  'navigation-allowed': [allowed: boolean]
}>()

// Estado para controlar qué items están expandidos
const expandedItems = ref<Set<number>>(new Set())

// Alternar expansión de un item
const toggleItem = (index: number) => {
  if (expandedItems.value.has(index)) {
    expandedItems.value.delete(index)
  } else {
    expandedItems.value.add(index)
  }
  // Forzar re-render
  expandedItems.value = new Set(expandedItems.value)

  // Notificar si la navegación está permitida
  checkNavigationAllowed()
}

// Verificar y emitir si la navegación está permitida
const checkNavigationAllowed = () => {
  const allowed = allItemsExpanded.value
  emit('navigation-allowed', allowed)
}

// Verificar si un item está expandido
const isExpanded = (index: number) => expandedItems.value.has(index)

// Determinar el número de items basado en si hay customBullets o bullets
const itemsCount = computed(() => {
  if (props.slide.customBullets) return props.slide.customBullets.length
  if (props.slide.bullets) return props.slide.bullets.length
  return 0
})

// Verificar si todas las tarjetas están expandidas
const allItemsExpanded = computed(() => {
  if (itemsCount.value === 0) return true
  return expandedItems.value.size >= itemsCount.value
})

// Obtener palabra clave para cada bullet
const getKeyword = (bullet: string, index: number): string => {
  // Extraer palabra clave inteligentemente del contenido del bullet
  // Buscar patrones comunes:

  // 1. Si empieza con emoji, tomar las primeras 2-4 palabras después del emoji
  const emojiPattern = /^[\u{1F300}-\u{1F9FF}][\s:•]*/u
  const withoutEmoji = bullet.replace(emojiPattern, '').trim()

  // 2. Si tiene dos puntos (:), tomar lo que está antes de los dos puntos
  if (withoutEmoji.includes(':')) {
    const parts = withoutEmoji.split(':')
    const beforeColon = parts[0]?.trim() || ''
    if (beforeColon) {
      // Limitar a primeras 3 palabras
      const words = beforeColon.split(' ')
      return words.slice(0, Math.min(3, words.length)).join(' ')
    }
  }

  // 3. Si tiene punto y seguido, tomar la primera oración corta
  if (withoutEmoji.includes('.')) {
    const parts = withoutEmoji.split('.')
    const firstSentence = parts[0]?.trim() || ''
    if (firstSentence && firstSentence.length <= 50) {
      return firstSentence
    }
  }

  // 4. Si empieza con viñeta (•, -, *), removerla
  const withoutBullet = withoutEmoji.replace(/^[•\-*]\s*/, '').trim()

  // 5. Tomar las primeras 2-4 palabras significativas
  const words = withoutBullet.split(' ')
  const significantWords = words.filter(word => word.length > 2) // Filtrar palabras cortas

  // Si hay palabras significativas, tomar las primeras 2-3
  if (significantWords.length > 0) {
    return significantWords.slice(0, Math.min(3, significantWords.length)).join(' ')
  }

  // Fallback: primeras 3 palabras
  return words.slice(0, Math.min(3, words.length)).join(' ') || 'Ver más'
}

// Iconos SVG para cada tipo de contenido (basado en el índice)
const getIconForIndex = (index: number): string => {
  const icons: string[] = [
    // Icono 1: Database/Storage
    `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <ellipse cx="12" cy="5" rx="9" ry="3"></ellipse>
      <path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"></path>
      <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"></path>
    </svg>`,
    // Icono 2: Map/Coordinates
    `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <polygon points="1 6 1 22 8 18 16 22 23 18 23 2 16 6 8 2 1 6"></polygon>
      <line x1="8" y1="2" x2="8" y2="18"></line>
      <line x1="16" y1="6" x2="16" y2="22"></line>
    </svg>`,
    // Icono 3: Target/Prediction
    `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <circle cx="12" cy="12" r="10"></circle>
      <circle cx="12" cy="12" r="6"></circle>
      <circle cx="12" cy="12" r="2"></circle>
    </svg>`,
    // Icono 4: Trending Up
    `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <polyline points="23 6 13.5 15.5 8.5 10.5 1 18"></polyline>
      <polyline points="17 6 23 6 23 12"></polyline>
    </svg>`,
    // Icono 5: Lightbulb
    `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <path d="M9 18h6"></path>
      <path d="M10 22h4"></path>
      <path d="M15.09 14c.18-.98.65-1.74 1.41-2.5A4.65 4.65 0 0 0 18 8 6 6 0 0 0 6 8c0 1 .23 2.23 1.5 3.5A4.61 4.61 0 0 1 8.91 14"></path>
    </svg>`
  ]
  const iconIndex = index % icons.length
  return icons[iconIndex]!
}

const handleNextClick = () => {
  emit('next')
}

const handlePreviousClick = () => {
  emit('previous')
}

const handleNavigateToSlide = (slideId: string) => {
  emit('navigate-to-slide', slideId)
}

// Emitir estado inicial cuando se monta el componente
onMounted(() => {
  checkNavigationAllowed()
})
</script>

<template>
  <div class="content-slide">
    <!-- Navigation Buttons -->
    <NavigationButtons
      :current-slide-id="slide.id"
      :current-slide-order="slide.order"
      @navigate-to-slide="handleNavigateToSlide"
      @previous="handlePreviousClick"
    />

    <!-- Hero Section -->
    <div class="hero-section">
      <h2 class="hero-title">{{ slide.title }}</h2>
      <p class="hero-description">{{ slide.content }}</p>
    </div>

    <div class="slide-content">
      <div class="text-content">
        <!-- Mensaje de instrucciones (compacto) -->
        <div v-if="itemsCount > 0" class="instructions-compact">
          <span class="instructions-text">Da click en la flecha para expandir, expande todas las tarjetas para continuar</span>
        </div>

        <!-- Lista expandible con customBullets -->
        <div v-if="slide.customBullets && slide.customBullets.length > 0" class="expandable-list">
          <div
            v-for="(bullet, index) in slide.customBullets"
            :key="index"
            class="expandable-item"
            :class="{ expanded: isExpanded(index) }"
            @click="toggleItem(index)"
          >
            <div class="item-header">
              <div class="icon-wrapper" v-html="bullet.iconContent || getIconForIndex(index)"></div>
              <div class="item-preview">
                {{ bullet.keyword || getKeyword(bullet.text, index) }}
              </div>
              <div class="expand-indicator">
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

            <Transition name="expand">
              <div v-if="isExpanded(index)" class="item-content">
                <p class="expanded-text">{{ bullet.text }}</p>
                <div v-if="bullet.svgContent" class="expanded-svg" v-html="bullet.svgContent"></div>
              </div>
            </Transition>
          </div>
        </div>

        <!-- Lista expandible con bullets simples (fallback) -->
        <div v-else-if="slide.bullets && slide.bullets.length > 0" class="expandable-list">
          <div
            v-for="(bullet, index) in slide.bullets"
            :key="index"
            class="expandable-item"
            :class="{ expanded: isExpanded(index) }"
            @click="toggleItem(index)"
          >
            <div class="item-header">
              <div class="icon-wrapper" v-html="getIconForIndex(index)"></div>
              <div class="item-preview">
                {{ getKeyword(bullet, index) }}
              </div>
              <div class="expand-indicator">
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

            <Transition name="expand">
              <div v-if="isExpanded(index)" class="item-content">
                <p>{{ bullet }}</p>
              </div>
            </Transition>
          </div>
        </div>
      </div>

      <div v-if="slide.imageUrl" class="image-container">
        <img :src="slide.imageUrl" :alt="slide.title" class="slide-image" />
      </div>
    </div>

    <!-- Diagrama de flujo - Siempre visible -->
    <div v-if="slide.flowDiagram" class="flow-diagram-container">
      <h3 class="flow-diagram-title">Flujo de Trabajo</h3>
      <div class="flow-diagram" v-html="slide.flowDiagram"></div>
    </div>

    <!-- Botón siguiente - Solo aparece cuando todas las tarjetas están expandidas -->
    <Transition name="fade-in">
      <button v-if="allItemsExpanded" class="next-button" @click="handleNextClick">
        Click para continuar
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
    </Transition>
  </div>
</template>

<style scoped>
.content-slide {
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

.slide-content {
  display: grid;
  grid-template-columns: 1fr;
  gap: 3rem;
  align-items: start;
}

@media (min-width: 1024px) {
  .slide-content:has(.image-container) {
    grid-template-columns: 1fr 1fr;
  }
}

/* Mensaje de instrucciones compacto */
.instructions-compact {
  display: inline-flex;
  align-items: center;
  gap: var(--spacing-1);
  margin-bottom: var(--spacing-3);
  padding: var(--spacing-2) var(--spacing-3);
  background: var(--color-neutral-100);
  border-radius: var(--radius-md);
  font-family: var(--font-primary);
  font-size: var(--text-sm);
  font-weight: var(--font-medium);
  color: var(--color-neutral-700);
  box-shadow: var(--shadow-sm);
}

.instructions-text {
  opacity: 0.9;
  line-height: 1.5;
}

@keyframes gentle-bounce {
  0%,
  100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-4px);
  }
}

/* Lista expandible */
.expandable-list {
  display: flex;
  flex-direction: column;
  gap: var(--spacing-2);
}

/* Item expandible */
.expandable-item {
  background: var(--color-bg-primary);
  border: var(--border-width-md) solid var(--color-neutral-300);
  border-radius: var(--radius-lg);
  padding: var(--spacing-3);
  cursor: pointer;
  transition: all var(--transition-base);
  position: relative;
  box-shadow: var(--shadow-sm);
}

.expandable-item:hover {
  border-color: var(--color-primary-400);
  box-shadow: var(--shadow-md);
  transform: translateY(-2px);
}

.expandable-item.expanded {
  background: var(--color-primary-50);
  border-color: var(--color-primary-600);
  box-shadow: var(--shadow-lg);
}

/* Header del item */
.item-header {
  display: flex;
  align-items: center;
  gap: var(--spacing-2);
}

/* Icono SVG */
.icon-wrapper {
  flex-shrink: 0;
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(135deg, #ff6b6b 0%, #fa5252 100%);
  border-radius: var(--radius-md);
  padding: var(--spacing-1);
  box-shadow: var(--shadow-sm);
}

.icon-wrapper svg {
  width: 100%;
  height: 100%;
  color: var(--color-text-inverse);
}

/* Preview del texto */
.item-preview {
  flex: 1;
  font-family: var(--font-primary);
  font-size: var(--text-base);
  font-weight: var(--font-medium);
  color: var(--color-text-primary);
  line-height: 1.5;
}

/* Indicador de expansión (chevron) */
.expand-indicator {
  flex-shrink: 0;
  width: 24px;
  height: 24px;
  transition: transform var(--transition-base);
}

.expandable-item.expanded .expand-indicator {
  transform: rotate(180deg);
}

.expand-indicator svg {
  width: 100%;
  height: 100%;
  color: var(--color-text-primary);
}

/* Contenido expandido */
.item-content {
  margin-top: var(--spacing-2);
  padding-top: var(--spacing-2);
  border-top: var(--border-width) solid var(--color-neutral-300);
  display: flex;
  flex-direction: column;
  gap: var(--spacing-3);
}

/* Texto expandido */
.item-content .expanded-text {
  font-family: var(--font-primary);
  font-size: var(--text-base);
  line-height: 1.8;
  color: var(--color-text-secondary);
  margin: 0;
  font-weight: var(--font-medium);
}

.item-content p {
  font-family: var(--font-primary);
  font-size: var(--text-base);
  line-height: 1.8;
  color: var(--color-text-secondary);
  margin: 0;
}

/* SVG en contenido expandido */
.item-content .expanded-svg {
  width: 100%;
  max-width: 300px;
  margin: 0 auto;
  padding: var(--spacing-2);
  background: var(--color-neutral-50);
  border-radius: var(--radius-md);
  box-shadow: var(--shadow-sm);
}

.item-content .expanded-svg svg {
  width: 100%;
  height: auto;
  max-height: 200px;
}

/* Transición de expansión */
.expand-enter-active,
.expand-leave-active {
  transition: all var(--transition-base);
  overflow: hidden;
}

.expand-enter-from,
.expand-leave-to {
  opacity: 0;
  max-height: 0;
}

.expand-enter-to,
.expand-leave-from {
  opacity: 1;
  max-height: 500px;
}

.image-container {
  display: flex;
  justify-content: center;
  align-items: center;
}

.slide-image {
  max-width: 100%;
  height: auto;
  border-radius: var(--radius-lg);
  box-shadow: var(--shadow-lg);
}

/* Botón siguiente */
.next-button {
  margin-top: var(--spacing-6);
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
  display: inline-flex;
  align-items: center;
  gap: var(--spacing-1);
  text-transform: uppercase;
  letter-spacing: 1px;
  box-shadow: var(--shadow-md);
}

.next-button:hover {
  background: linear-gradient(135deg, var(--color-primary-700) 0%, var(--color-primary-800) 100%);
  box-shadow: var(--shadow-lg);
  transform: translateY(-2px);
}

.next-button svg {
  width: 20px;
  height: 20px;
  transition: transform var(--transition-base);
}

.next-button:hover svg {
  transform: translateX(4px);
}

.next-button:active {
  transform: translateY(0);
  box-shadow: var(--shadow-md);
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
  max-width: 700px;
}

/* Transición fade-in para el botón siguiente */
.fade-in-enter-active {
  animation: fadeIn 0.8s ease-out;
}

.fade-in-leave-active {
  animation: fadeIn 0.4s ease-in reverse;
}

@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(20px) scale(0.95);
  }
  to {
    opacity: 1;
    transform: translateY(0) scale(1);
  }
}

@media (max-width: 768px) {
  .content-slide {
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

  .icon-wrapper {
    width: 32px;
    height: 32px;
  }

  .item-preview {
    font-size: var(--text-sm);
  }

  .item-content p {
    font-size: var(--text-sm);
  }

  .next-button {
    margin-top: var(--spacing-4);
    padding: var(--spacing-2) var(--spacing-4);
    font-size: var(--text-base);
  }

  /* SVG en móvil más pequeño */
  .item-content .expanded-svg {
    max-width: 280px;
    padding: var(--spacing-1);
  }

  .item-content .expanded-svg svg {
    max-height: 150px;
  }

  .item-content .expanded-text {
    font-size: var(--text-sm);
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
