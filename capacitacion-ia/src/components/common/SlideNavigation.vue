<script setup lang="ts">
defineProps<{
  currentIndex: number
  totalSlides: number
  isFirstSlide: boolean
  isLastSlide: boolean
  progress: number
}>()

const emit = defineEmits<{
  previous: []
  next: []
  goToSlide: [index: number]
}>()
</script>

<template>
  <div class="slide-navigation">
    <!-- Barra de progreso -->
    <div class="progress-bar">
      <div class="progress-fill" :style="{ width: `${progress}%` }"></div>
    </div>

    <!-- Controles de navegación -->
    <div class="navigation-controls">
      <button
        class="nav-button prev"
        :disabled="isFirstSlide"
        @click="emit('previous')"
        aria-label="Slide anterior"
      >
        ← Anterior
      </button>

      <div class="slide-counter">
        <span class="current">{{ currentIndex + 1 }}</span>
        <span class="separator">/</span>
        <span class="total">{{ totalSlides }}</span>
      </div>

      <button
        class="nav-button next"
        :disabled="isLastSlide"
        @click="emit('next')"
        aria-label="Siguiente slide"
      >
        Siguiente →
      </button>
    </div>

    <!-- Indicadores de slides (solo en desktop) -->
    <div class="slide-indicators">
      <button
        v-for="index in totalSlides"
        :key="index"
        class="indicator"
        :class="{ active: index - 1 === currentIndex }"
        :aria-label="`Ir a slide ${index}`"
        @click="emit('goToSlide', index - 1)"
      ></button>
    </div>
  </div>
</template>

<style scoped>
.slide-navigation {
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  background: var(--color-background-soft);
  border-top: 1px solid var(--color-border);
  padding: 1rem;
  z-index: 1000;
}

.progress-bar {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 4px;
  background: var(--color-background);
}

.progress-fill {
  height: 100%;
  background: linear-gradient(90deg, #00d4ff, #0088ff);
  transition: width 0.3s ease;
}

.navigation-controls {
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1200px;
  margin: 0 auto;
  gap: 1rem;
}

.nav-button {
  padding: 0.7rem 1.5rem;
  background: var(--color-heading);
  color: white;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  font-size: 1rem;
  font-weight: 600;
  transition: all 0.2s ease;
  min-width: 120px;
}

.nav-button:hover:not(:disabled) {
  opacity: 0.9;
  transform: translateY(-2px);
}

.nav-button:disabled {
  opacity: 0.3;
  cursor: not-allowed;
  transform: none;
}

.slide-counter {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 1.1rem;
  font-weight: 600;
  color: var(--color-text);
}

.current {
  color: var(--color-heading);
  font-size: 1.3rem;
}

.separator {
  color: var(--color-border);
}

.slide-indicators {
  display: flex;
  justify-content: center;
  gap: 0.5rem;
  margin-top: 1rem;
}

.indicator {
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background: var(--color-border);
  border: none;
  cursor: pointer;
  transition: all 0.2s ease;
  padding: 0;
}

.indicator:hover {
  background: var(--color-border-hover);
  transform: scale(1.2);
}

.indicator.active {
  background: var(--color-heading);
  transform: scale(1.3);
}

@media (max-width: 768px) {
  .slide-navigation {
    padding: 0.8rem;
  }

  .nav-button {
    padding: 0.6rem 1rem;
    font-size: 0.9rem;
    min-width: 90px;
  }

  .slide-counter {
    font-size: 1rem;
  }

  .current {
    font-size: 1.2rem;
  }

  .slide-indicators {
    display: none;
  }
}
</style>
