<script setup lang="ts">
import type { ITitleSlide } from '@/interfaces/Slide'

const props = defineProps<{
  slide: ITitleSlide
}>()

const emit = defineEmits<{
  next: []
}>()

const handleStartClick = () => {
  emit('next')
}
</script>

<template>
  <div class="title-slide">
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
</template>

<style scoped>
.title-slide {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 70vh;
  text-align: center;
  padding: 3rem;
  width: 100%;
  max-width: 1400px;
  margin: 0 auto;
}

.main-title {
  font-size: clamp(2rem, 5vw, 4rem);
  font-weight: bold;
  margin-bottom: 1.5rem;
  color: var(--color-heading);
  line-height: 1.2;
}

.subtitle {
  font-size: clamp(1.2rem, 3vw, 2rem);
  color: var(--color-text);
  margin-bottom: 2rem;
  max-width: 800px;
}

.author {
  font-size: 1.2rem;
  color: var(--color-text);
  opacity: 0.8;
  font-style: italic;
}

.start-button {
  margin-top: 3rem;
  padding: 1rem 3rem;
  font-size: 1.5rem;
  font-weight: bold;
  color: white;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  border: none;
  border-radius: 50px;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 4px 15px rgba(102, 126, 234, 0.4);
  text-transform: uppercase;
  letter-spacing: 1px;
}

.start-button:hover {
  transform: translateY(-2px);
  box-shadow: 0 6px 20px rgba(102, 126, 234, 0.6);
  background: linear-gradient(135deg, #764ba2 0%, #667eea 100%);
}

.start-button:active {
  transform: translateY(0);
  box-shadow: 0 2px 10px rgba(102, 126, 234, 0.4);
}

@media (max-width: 768px) {
  .title-slide {
    padding: 1rem;
  }

  .start-button {
    margin-top: 2rem;
    padding: 0.8rem 2rem;
    font-size: 1.2rem;
  }
}
</style>
