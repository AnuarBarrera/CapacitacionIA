<script setup lang="ts">
import { computed, ref } from 'vue'

const props = defineProps<{
  currentSlideId: string
  currentSlideOrder?: number
}>()

const emit = defineEmits<{
  'navigate-to-slide': [slideId: string]
  'previous': []
}>()

const isCollapsed = ref(true)

// IDs de las últimas slides de cada LLM
const lastSlidesOfLLMs = [
  'chatgpt-integracion',
  'google-ai-studio',
  'consideraciones',
  'grok-limitaciones',
  'meta-ai-por-que-elegir'
]

// Verificar si la slide actual es la última de un LLM
const isLastSlideOfLLM = computed(() => {
  return lastSlidesOfLLMs.includes(props.currentSlideId)
})

// Solo mostrar los botones si el order es mayor a 1.5 (después del menú principal)
const shouldShowButtons = computed(() => {
  return props.currentSlideOrder !== undefined && props.currentSlideOrder > 1.5
})

const toggleCollapse = () => {
  isCollapsed.value = !isCollapsed.value
}

const handleMenuClick = () => {
  emit('navigate-to-slide', 'menu-principal')
  isCollapsed.value = true
}

const handlePreviousClick = () => {
  emit('previous')
  isCollapsed.value = true
}

const handlePlatformsClick = () => {
  emit('navigate-to-slide', 'los-5-grandes')
  isCollapsed.value = true
}
</script>

<template>
  <div v-if="shouldShowButtons" class="navigation-buttons" :class="{ 'collapsed': isCollapsed }">
    <!-- Pestañas colapsadas -->
    <div v-if="isCollapsed" class="tabs-collapsed">
      <button class="tab menu-tab" @click="handleMenuClick" aria-label="Índice de contenido" title="Índice de contenido">
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
          class="icon"
        >
          <line x1="3" y1="12" x2="21" y2="12"></line>
          <line x1="3" y1="6" x2="21" y2="6"></line>
          <line x1="3" y1="18" x2="21" y2="18"></line>
        </svg>
      </button>

      <button class="tab prev-tab" @click="handlePreviousClick" aria-label="Slide anterior" title="Slide anterior">
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
          class="icon"
        >
          <polyline points="15 18 9 12 15 6"></polyline>
        </svg>
      </button>

      <button class="tab expand-tab" @click="toggleCollapse" aria-label="Expandir menú" title="Expandir menú">
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
          class="icon"
        >
          <polyline points="9 18 15 12 9 6"></polyline>
        </svg>
      </button>
    </div>

    <!-- Botones expandidos -->
    <div v-else class="button-group">
      <!-- Botón: Regresar al Menú -->
      <button class="nav-btn menu-btn" @click="handleMenuClick" aria-label="Regresar al menú principal">
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
          class="icon"
        >
          <line x1="3" y1="12" x2="21" y2="12"></line>
          <line x1="3" y1="6" x2="21" y2="6"></line>
          <line x1="3" y1="18" x2="21" y2="18"></line>
        </svg>
        <span>Índice de contenido</span>
      </button>

      <!-- Botón: Anterior -->
      <button class="nav-btn prev-btn" @click="handlePreviousClick" aria-label="Regresar a la slide anterior">
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
          class="icon"
        >
          <polyline points="15 18 9 12 15 6"></polyline>
        </svg>
        <span>Slide anterior</span>
      </button>

      <!-- Botón Especial: Regresar a Las 5 Plataformas (solo en última slide de cada LLM) -->
      <button
        v-if="isLastSlideOfLLM"
        class="nav-btn platforms-btn"
        @click="handlePlatformsClick"
        aria-label="Regresar a las 5 plataformas principales de IA"
      >
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
          class="icon"
        >
          <rect x="3" y="3" width="7" height="7"></rect>
          <rect x="14" y="3" width="7" height="7"></rect>
          <rect x="14" y="14" width="7" height="7"></rect>
          <rect x="3" y="14" width="7" height="7"></rect>
        </svg>
        <span>Las 5 Plataformas</span>
      </button>

      <!-- Botón para colapsar -->
      <button class="nav-btn collapse-btn" @click="toggleCollapse" aria-label="Colapsar menú">
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
          class="icon"
        >
          <polyline points="15 18 9 12 15 6"></polyline>
        </svg>
      </button>
    </div>
  </div>
</template>

<style scoped>
.navigation-buttons {
  position: fixed;
  top: 50%;
  right: 0;
  transform: translateY(-50%);
  z-index: 100;
  transition: all var(--transition-base);
}

.navigation-buttons.collapsed {
  right: -10px;
}

/* Pestañas colapsadas */
.tabs-collapsed {
  display: flex;
  flex-direction: column;
  gap: 4px;
}

.tab {
  width: 40px;
  height: 50px;
  background: var(--color-bg-primary);
  border: 1px solid var(--color-border);
  border-right: none;
  border-radius: var(--radius-md) 0 0 var(--radius-md);
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all var(--transition-base);
  box-shadow: -2px 0 6px rgba(0, 0, 0, 0.1);
}

.tab:hover {
  transform: translateX(-8px);
  box-shadow: -4px 0 12px rgba(0, 0, 0, 0.15);
}

.tab .icon {
  width: 20px;
  height: 20px;
}

.menu-tab {
  background: linear-gradient(135deg, var(--color-neutral-600) 0%, var(--color-neutral-700) 100%);
  color: white;
}

.prev-tab {
  background: linear-gradient(135deg, var(--color-primary-500) 0%, var(--color-primary-600) 100%);
  color: white;
}

.expand-tab {
  background: linear-gradient(135deg, #4a5568 0%, #2d3748 100%);
  color: white;
}

/* Botones expandidos */
.button-group {
  display: flex;
  gap: var(--spacing-2);
  background: var(--color-bg-primary);
  padding: var(--spacing-2);
  border-radius: var(--radius-lg);
  box-shadow: var(--shadow-lg);
  border: 1px solid var(--color-border);
}

.nav-btn {
  display: inline-flex;
  align-items: center;
  gap: var(--spacing-1);
  padding: var(--spacing-2) var(--spacing-3);
  font-family: var(--font-primary);
  font-size: var(--text-sm);
  font-weight: var(--font-semibold);
  border: none;
  border-radius: var(--radius-md);
  cursor: pointer;
  transition: all var(--transition-base);
  white-space: nowrap;
}

.nav-btn .icon {
  width: 18px;
  height: 18px;
  flex-shrink: 0;
}

/* Botón Menú */
.menu-btn {
  background: linear-gradient(135deg, var(--color-neutral-600) 0%, var(--color-neutral-700) 100%);
  color: white;
}

.menu-btn:hover {
  background: linear-gradient(135deg, var(--color-neutral-700) 0%, var(--color-neutral-800) 100%);
  transform: translateY(-2px);
  box-shadow: var(--shadow-md);
}

/* Botón Anterior */
.prev-btn {
  background: linear-gradient(135deg, var(--color-primary-500) 0%, var(--color-primary-600) 100%);
  color: white;
}

.prev-btn:hover {
  background: linear-gradient(135deg, var(--color-primary-600) 0%, var(--color-primary-700) 100%);
  transform: translateY(-2px);
  box-shadow: var(--shadow-md);
}

/* Botón Especial: Las 5 Plataformas */
.platforms-btn {
  background: linear-gradient(135deg, #ff6b6b 0%, #fa5252 100%);
  color: white;
  animation: pulse 2s infinite;
}

.platforms-btn:hover {
  background: linear-gradient(135deg, #fa5252 0%, #e03131 100%);
  transform: translateY(-2px);
  box-shadow: var(--shadow-md);
  animation: none;
}

/* Botón Colapsar */
.collapse-btn {
  background: linear-gradient(135deg, #4a5568 0%, #2d3748 100%);
  color: white;
  padding: var(--spacing-2);
}

.collapse-btn:hover {
  background: linear-gradient(135deg, #2d3748 0%, #1a202c 100%);
  transform: translateY(-2px);
  box-shadow: var(--shadow-md);
}

/* Animación de pulso para el botón especial */
@keyframes pulse {
  0%, 100% {
    box-shadow: 0 0 0 0 rgba(255, 107, 107, 0.7);
  }
  50% {
    box-shadow: 0 0 0 8px rgba(255, 107, 107, 0);
  }
}

.nav-btn:active {
  transform: translateY(0);
}

/* Responsive */
@media (max-width: 768px) {
  .navigation-buttons {
    top: var(--spacing-2);
    right: var(--spacing-2);
    left: var(--spacing-2);
  }

  .button-group {
    width: 100%;
    justify-content: space-between;
    padding: var(--spacing-1);
    gap: var(--spacing-1);
  }

  .nav-btn {
    padding: var(--spacing-1) var(--spacing-2);
    font-size: var(--text-xs);
    flex: 1;
    justify-content: center;
  }

  .nav-btn span {
    display: none;
  }

  .nav-btn .icon {
    width: 20px;
    height: 20px;
  }

  /* En móvil, mostrar texto para el botón especial */
  .platforms-btn span {
    display: inline;
    font-size: var(--text-xs);
  }

  .platforms-btn .icon {
    width: 16px;
    height: 16px;
  }
}

@media (max-width: 480px) {
  .button-group {
    flex-direction: column;
    width: auto;
    right: var(--spacing-2);
    left: auto;
  }

  .nav-btn {
    width: auto;
    min-width: 44px;
  }

  .platforms-btn {
    width: 100%;
  }
}
</style>
