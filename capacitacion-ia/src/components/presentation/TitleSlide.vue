<script setup lang="ts">
import type { ITitleSlide } from '@/interfaces/Slide'
import NavigationButtons from '@/components/common/NavigationButtons.vue'

const props = defineProps<{
  slide: ITitleSlide
}>()

const emit = defineEmits<{
  next: []
  previous: []
  'navigate-to-slide': [slideId: string]
}>()

const handleStartClick = () => {
  emit('next')
}

const handlePreviousClick = () => {
  emit('previous')
}

const handleNavigateToSlide = (slideId: string) => {
  emit('navigate-to-slide', slideId)
}
</script>

<template>
  <div class="title-slide animate-fade-in-up" :class="{ 'with-background': slide.order === 0 }">
    <!-- Background image con blur (solo en primera slide) -->
    <div v-if="slide.order === 0" class="background-image"></div>
    <div v-if="slide.order === 0" class="background-overlay"></div>

    <!-- Contenido (con z-index superior) -->
    <div class="content-wrapper">
      <!-- Navigation Buttons (solo mostrar si no es la primera slide) -->
      <NavigationButtons
        v-if="slide.order !== 0"
        :current-slide-id="slide.id"
        :current-slide-order="slide.order"
        @navigate-to-slide="handleNavigateToSlide"
        @previous="handlePreviousClick"
      />

      <h1 class="main-title">{{ slide.title }}</h1>
      <p v-if="slide.subtitle" class="subtitle">{{ slide.subtitle }}</p>
      <p v-if="slide.author" class="author">{{ slide.author }}</p>

      <!-- Botón "Comienza Aquí" solo en la primera slide -->
      <button
        v-if="slide.order === 0"
        class="start-button"
        @click="handleStartClick"
      >
        Comienza Aquí
      </button>
    </div>
  </div>
</template>

<style scoped>
.title-slide {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 70vh;
  text-align: center;
  padding: var(--spacing-6);
  width: 100%;
  max-width: var(--container-xl);
  margin: 0 auto;
  position: relative;
  overflow: hidden;
}

.title-slide.with-background {
  max-width: 100%;
  padding: 0;
}

.background-image {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: url('/logoAnuarBarrera.webp');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  filter: blur(8px);
  transform: scale(1.1);
  z-index: 0;
}

.background-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  z-index: 1;
}

.content-wrapper {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  padding: var(--spacing-6);
  position: relative;
  z-index: 2;
  min-height: 70vh;
  width: 100%;
}

.main-title {
  font-family: var(--font-display);
  font-size: clamp(var(--text-4xl), 5vw, var(--text-6xl));
  font-weight: var(--font-extrabold);
  margin-bottom: var(--spacing-3);
  color: #1a202c;
  line-height: 1.2;
}

.subtitle {
  font-family: var(--font-primary);
  font-size: clamp(var(--text-xl), 3vw, var(--text-3xl));
  color: white;
  margin-bottom: var(--spacing-4);
  max-width: 800px;
  line-height: 1.6;
}

.author {
  font-family: var(--font-primary);
  font-size: var(--text-lg);
  color: #2d3748;
  opacity: 0.9;
  font-style: italic;
}

.start-button {
  margin-top: var(--spacing-6);
  padding: var(--spacing-3) var(--spacing-6);
  font-family: var(--font-primary);
  font-size: var(--text-xl);
  font-weight: var(--font-bold);
  color: var(--color-text-inverse);
  background: linear-gradient(135deg, var(--color-primary-600) 0%, var(--color-primary-700) 100%);
  border: none;
  border-radius: var(--radius-full);
  cursor: pointer;
  transition: all var(--transition-base);
  text-transform: uppercase;
  letter-spacing: 1px;
  box-shadow: var(--shadow-lg);
  position: relative;
  overflow: hidden;
}

.start-button:hover {
  background: linear-gradient(135deg, var(--color-primary-700) 0%, var(--color-primary-800) 100%);
  box-shadow: var(--shadow-xl);
  transform: translateY(-2px);
}

.start-button:active {
  transform: translateY(0);
  box-shadow: var(--shadow-md);
}

/* Efecto ripple */
.start-button::before {
  content: '';
  position: absolute;
  top: 50%;
  left: 50%;
  width: 0;
  height: 0;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.3);
  transform: translate(-50%, -50%);
  transition: width var(--transition-slow), height var(--transition-slow);
}

.start-button:active::before {
  width: 300px;
  height: 300px;
  transition: width 0s, height 0s;
}

@media (max-width: 768px) {
  .title-slide {
    padding: var(--spacing-4);
  }

  .main-title {
    font-size: var(--text-3xl);
  }

  .subtitle {
    font-size: var(--text-lg);
  }

  .start-button {
    margin-top: var(--spacing-4);
    padding: var(--spacing-2) var(--spacing-4);
    font-size: var(--text-lg);
  }
}
</style>
