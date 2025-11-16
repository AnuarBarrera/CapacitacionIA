<script setup lang="ts">
import type { ICardGridSlide } from '@/interfaces/Slide'

const props = defineProps<{
  slide: ICardGridSlide
}>()

const handleCardClick = (link?: string) => {
  if (link) {
    if (link.startsWith('http')) {
      window.open(link, '_blank')
    } else {
      // Es un enlace interno a otra slide
      // TODO: Implementar navegación a slide específica
      console.log('Navigate to slide:', link)
    }
  }
}
</script>

<template>
  <div class="card-grid-slide">
    <h2 class="slide-title">{{ slide.title }}</h2>

    <p v-if="slide.description" class="description">{{ slide.description }}</p>

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
        :class="{ clickable: !!card.link }"
        @click="handleCardClick(card.link)"
      >
        <div class="card-icon" v-if="card.icon || card.logoUrl">
          <span v-if="card.icon" class="icon-emoji">{{ card.icon }}</span>
          <img v-else-if="card.logoUrl" :src="card.logoUrl" :alt="card.title" class="icon-image" />
        </div>

        <h3 class="card-title">{{ card.title }}</h3>

        <p v-if="card.description" class="card-description">{{ card.description }}</p>

        <div v-if="card.link" class="card-link">
          <span v-if="card.link.startsWith('http')">Visitar →</span>
          <span v-else>Ver más →</span>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.card-grid-slide {
  padding: 2rem 4rem;
  max-width: 1800px;
  width: 100%;
  margin: 0 auto;
}

.slide-title {
  font-size: clamp(1.8rem, 4vw, 3rem);
  font-weight: bold;
  margin-bottom: 1rem;
  color: var(--color-heading);
  text-align: center;
}

.description {
  font-size: 1.2rem;
  text-align: center;
  margin-bottom: 3rem;
  color: var(--color-text);
  opacity: 0.9;
}

.card-grid {
  display: grid;
  gap: 2rem;
  margin-top: 2rem;
}

.card {
  background: #ffffff;
  border: 2px solid #e5e7eb;
  border-radius: 12px;
  padding: 2rem;
  text-align: center;
  transition: all 0.3s ease;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
}

.card.clickable {
  cursor: pointer;
}

.card.clickable:hover {
  transform: translateY(-8px);
  box-shadow: 0 12px 24px rgba(0, 0, 0, 0.15);
  border-color: var(--color-heading);
}

.card-icon {
  width: 80px;
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  border-radius: 16px;
  margin-bottom: 0.5rem;
}

.icon-emoji {
  font-size: 3rem;
  filter: drop-shadow(0 2px 4px rgba(0, 0, 0, 0.2));
}

.icon-image {
  width: 60px;
  height: 60px;
  object-fit: contain;
}

.card-title {
  font-size: 1.5rem;
  font-weight: bold;
  color: var(--color-heading);
  margin: 0;
}

.card-description {
  font-size: 1rem;
  color: var(--color-text);
  opacity: 0.8;
  margin: 0;
}

.card-link {
  margin-top: auto;
  font-size: 1rem;
  font-weight: 600;
  color: #667eea;
  padding-top: 1rem;
}

@media (max-width: 768px) {
  .card-grid-slide {
    padding: 1rem;
  }

  .card-grid {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }

  .card {
    padding: 1.5rem;
  }

  .card-icon {
    width: 60px;
    height: 60px;
  }

  .icon-emoji {
    font-size: 2rem;
  }
}

@media (prefers-color-scheme: dark) {
  .card {
    background: #1f2937;
    border-color: #374151;
  }

  .card.clickable:hover {
    border-color: #667eea;
  }
}
</style>
