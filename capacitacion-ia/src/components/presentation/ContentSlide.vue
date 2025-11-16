<script setup lang="ts">
import type { IContentSlide } from '@/interfaces/Slide'

defineProps<{
  slide: IContentSlide
}>()
</script>

<template>
  <div class="content-slide">
    <h2 class="slide-title">{{ slide.title }}</h2>

    <div class="slide-content">
      <div class="text-content">
        <p class="description">{{ slide.content }}</p>

        <ul v-if="slide.bullets && slide.bullets.length > 0" class="bullets">
          <li v-for="(bullet, index) in slide.bullets" :key="index" class="bullet-item">
            {{ bullet }}
          </li>
        </ul>
      </div>

      <div v-if="slide.imageUrl" class="image-container">
        <img :src="slide.imageUrl" :alt="slide.title" class="slide-image" />
      </div>
    </div>
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

.bullets {
  list-style: none;
  padding: 0;
  margin: 0;
}

.bullet-item {
  font-size: 1.1rem;
  line-height: 1.8;
  padding: 0.8rem 0;
  padding-left: 2rem;
  position: relative;
  color: var(--color-text);
}

.bullet-item::before {
  content: '→';
  position: absolute;
  left: 0;
  color: var(--color-heading);
  font-weight: bold;
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

@media (max-width: 768px) {
  .content-slide {
    padding: 1.5rem;
  }

  .bullet-item {
    font-size: 1rem;
    padding-left: 1.5rem;
  }
}
</style>
