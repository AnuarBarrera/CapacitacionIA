<script setup lang="ts">
import type { ITitleSlide } from '@/interfaces/Slide'

defineProps<{
  slide: ITitleSlide
}>()
</script>

<template>
  <div class="title-slide">
    <h1 class="main-title">{{ slide.title }}</h1>
    <p v-if="slide.subtitle" class="subtitle">{{ slide.subtitle }}</p>
    <p v-if="slide.author" class="author">{{ slide.author }}</p>
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

@media (max-width: 768px) {
  .title-slide {
    padding: 1rem;
  }
}
</style>
