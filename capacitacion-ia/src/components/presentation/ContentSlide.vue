<script setup lang="ts">
import { ref, computed, onMounted } from 'vue'
import type { IContentSlide } from '@/interfaces/Slide'

const props = defineProps<{
  slide: IContentSlide
}>()

const emit = defineEmits<{
  next: []
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

// Verificar si todas las tarjetas están expandidas
const allItemsExpanded = computed(() => {
  if (!props.slide.bullets) return true
  return expandedItems.value.size >= props.slide.bullets.length
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

// Emitir estado inicial cuando se monta el componente
onMounted(() => {
  checkNavigationAllowed()
})
</script>

<template>
  <div class="content-slide">
    <h2 class="slide-title">{{ slide.title }}</h2>

    <div class="slide-content">
      <div class="text-content">
        <p class="description">{{ slide.content }}</p>

        <!-- Mensaje de instrucciones -->
        <div v-if="slide.bullets && slide.bullets.length > 0" class="instructions">
          👇 Da click en cada flecha para desplegar el contenido y poder continuar
        </div>

        <div v-if="slide.bullets && slide.bullets.length > 0" class="expandable-list">
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

    <!-- Botón siguiente - Solo aparece cuando todas las tarjetas están expandidas -->
    <Transition name="fade-in">
      <button v-if="allItemsExpanded" class="next-button" @click="handleNextClick">
        Siguiente
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
  padding: 2rem 4rem;
  max-width: 1600px;
  width: 100%;
  margin: 0 auto;
}

.slide-title {
  font-size: clamp(1.8rem, 4vw, 3rem);
  font-weight: bold;
  margin-bottom: 2rem;
  color: var(--color-heading);
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

.description {
  font-size: 1.2rem;
  line-height: 1.8;
  margin-bottom: 1.5rem;
  color: var(--color-text);
}

/* Mensaje de instrucciones */
.instructions {
  margin-bottom: 2rem;
  padding: 1rem 1.5rem;
  background: linear-gradient(135deg, rgba(0, 102, 255, 0.15) 0%, rgba(0, 212, 255, 0.15) 100%);
  border-left: 4px solid #00d4ff;
  border-radius: 8px;
  font-size: 1.1rem;
  font-weight: 600;
  color: #00d4ff;
  text-align: center;
  animation: gentle-pulse 3s infinite;
}

@keyframes gentle-pulse {
  0%,
  100% {
    opacity: 1;
    transform: scale(1);
  }
  50% {
    opacity: 0.9;
    transform: scale(1.01);
  }
}

/* Lista expandible */
.expandable-list {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

/* Item expandible */
.expandable-item {
  background: linear-gradient(135deg, rgba(0, 102, 255, 0.05) 0%, rgba(0, 212, 255, 0.05) 100%);
  border: 2px solid rgba(0, 150, 255, 0.2);
  border-radius: 12px;
  padding: 1.2rem;
  cursor: pointer;
  transition: all 0.3s ease;
  position: relative;
}

.expandable-item:hover {
  border-color: rgba(0, 212, 255, 0.5);
  box-shadow: 0 4px 12px rgba(0, 212, 255, 0.2);
  transform: translateY(-2px);
}

.expandable-item.expanded {
  background: linear-gradient(135deg, rgba(0, 102, 255, 0.1) 0%, rgba(0, 212, 255, 0.1) 100%);
  border-color: rgba(0, 212, 255, 0.6);
}

/* Header del item */
.item-header {
  display: flex;
  align-items: center;
  gap: 1rem;
}

/* Icono SVG */
.icon-wrapper {
  flex-shrink: 0;
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(135deg, #0066ff 0%, #00d4ff 100%);
  border-radius: 10px;
  padding: 8px;
}

.icon-wrapper svg {
  width: 100%;
  height: 100%;
  color: white;
}

/* Preview del texto */
.item-preview {
  flex: 1;
  font-size: 1.1rem;
  font-weight: 500;
  color: var(--color-text);
  line-height: 1.5;
}

/* Indicador de expansión (chevron) */
.expand-indicator {
  flex-shrink: 0;
  width: 24px;
  height: 24px;
  transition: transform 0.3s ease;
}

.expandable-item.expanded .expand-indicator {
  transform: rotate(180deg);
}

.expand-indicator svg {
  width: 100%;
  height: 100%;
  color: var(--color-heading);
}

/* Contenido expandido */
.item-content {
  margin-top: 1rem;
  padding-top: 1rem;
  border-top: 1px solid rgba(0, 150, 255, 0.2);
}

.item-content p {
  font-size: 1.05rem;
  line-height: 1.8;
  color: var(--color-text);
  margin: 0;
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
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

/* Botón siguiente */
.next-button {
  margin-top: 3rem;
  padding: 1rem 2.5rem;
  font-size: 1.2rem;
  font-weight: bold;
  color: white;
  background: linear-gradient(135deg, #0066ff 0%, #00d4ff 100%);
  border: none;
  border-radius: 50px;
  cursor: pointer;
  transition: all 0.3s ease;
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  text-transform: uppercase;
  letter-spacing: 1px;
}

.next-button svg {
  width: 20px;
  height: 20px;
  transition: transform 0.3s ease;
}

.next-button:hover svg {
  transform: translateX(4px);
}

.next-button:active {
  transform: translateY(0);
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
    padding: 1.5rem;
  }

  .icon-wrapper {
    width: 32px;
    height: 32px;
  }

  .item-preview {
    font-size: 1rem;
  }

  .item-content p {
    font-size: 0.95rem;
  }

  .next-button {
    margin-top: 2rem;
    padding: 0.8rem 2rem;
    font-size: 1rem;
  }
}
</style>
