<script setup lang="ts">
import type { ICodeSlide } from '@/interfaces/Slide'

defineProps<{
  slide: ICodeSlide
}>()
</script>

<template>
  <div class="code-slide">
    <h2 class="slide-title">{{ slide.title }}</h2>
    <p class="description">{{ slide.description }}</p>

    <div class="code-container">
      <div class="code-header">
        <span class="language-badge">{{ slide.language }}</span>
      </div>
      <pre class="code-block"><code>{{ slide.code }}</code></pre>
    </div>
  </div>
</template>

<style scoped>
.code-slide {
  padding: 2rem;
  max-width: 1200px;
  margin: 0 auto;
}

.slide-title {
  font-size: clamp(1.8rem, 4vw, 3rem);
  font-weight: bold;
  margin-bottom: 1.5rem;
  color: var(--color-heading);
}

.description {
  font-size: 1.2rem;
  line-height: 1.8;
  margin-bottom: 2rem;
  color: var(--color-text);
}

.code-container {
  background: #1e1e1e;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.2);
}

.code-header {
  background: #2d2d30;
  padding: 0.8rem 1.5rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.language-badge {
  background: #007acc;
  color: white;
  padding: 0.3rem 0.8rem;
  border-radius: 4px;
  font-size: 0.85rem;
  font-weight: 600;
  text-transform: uppercase;
}

.code-block {
  margin: 0;
  padding: 1.5rem;
  overflow-x: auto;
  font-family: 'Consolas', 'Monaco', 'Courier New', monospace;
  font-size: 0.95rem;
  line-height: 1.6;
  color: #d4d4d4;
}

.code-block code {
  font-family: inherit;
}

/* Scrollbar personalizado para el código */
.code-block::-webkit-scrollbar {
  height: 8px;
}

.code-block::-webkit-scrollbar-track {
  background: #2d2d30;
}

.code-block::-webkit-scrollbar-thumb {
  background: #4d4d50;
  border-radius: 4px;
}

.code-block::-webkit-scrollbar-thumb:hover {
  background: #5d5d60;
}

@media (max-width: 768px) {
  .code-slide {
    padding: 1rem;
  }

  .code-block {
    font-size: 0.85rem;
    padding: 1rem;
  }
}
</style>
