<script setup lang="ts">
import type { ICardGridSlide } from '@/interfaces/Slide'

const props = defineProps<{
  slide: ICardGridSlide
}>()

const emit = defineEmits<{
  'navigate-to-slide': [slideId: string]
  next: []
}>()

const handleCardClick = (link?: string) => {
  if (link) {
    if (link.startsWith('http')) {
      window.open(link, '_blank')
    } else {
      // Es un enlace interno a otra slide - emitir evento para navegar
      emit('navigate-to-slide', link)
    }
  }
}

const handleNextClick = () => {
  emit('next')
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

    <!-- Botón para continuar -->
    <div class="navigation-section">
      <button class="next-button" @click="handleNextClick">
        Continuar con la presentación
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
    </div>
  </div>
</template>

<style scoped>
.card-grid-slide {
  padding: var(--spacing-4) var(--spacing-8);
  max-width: var(--container-2xl);
  width: 100%;
  margin: 0 auto;
}

.slide-title {
  font-family: var(--font-display);
  font-size: clamp(var(--text-3xl), 4vw, var(--text-5xl));
  font-weight: var(--font-bold);
  margin-bottom: var(--spacing-2);
  color: var(--color-text-primary);
  text-align: center;
}

.description {
  font-family: var(--font-primary);
  font-size: var(--text-lg);
  text-align: center;
  margin-bottom: var(--spacing-6);
  color: var(--color-text-secondary);
  opacity: 0.9;
}

.card-grid {
  display: grid;
  gap: var(--spacing-4);
  margin-top: var(--spacing-4);
}

.card {
  background: var(--color-bg-primary);
  border: var(--border-width-md) solid var(--color-neutral-300);
  border-radius: var(--radius-lg);
  padding: var(--spacing-4);
  text-align: center;
  transition: all var(--transition-base);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: var(--spacing-2);
  box-shadow: var(--shadow-sm);
}

.card.clickable {
  cursor: pointer;
}

.card.clickable:hover {
  transform: translateY(-8px);
  box-shadow: var(--shadow-xl);
  border-color: var(--color-primary-600);
}

.card-icon {
  width: 80px;
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(135deg, var(--color-primary-600) 0%, var(--color-primary-700) 100%);
  border-radius: var(--radius-xl);
  margin-bottom: var(--spacing-1);
  box-shadow: var(--shadow-md);
}

.icon-emoji {
  font-size: var(--text-5xl);
  filter: drop-shadow(0 2px 4px rgba(0, 0, 0, 0.2));
}

.icon-image {
  width: 60px;
  height: 60px;
  object-fit: contain;
}

.card-title {
  font-family: var(--font-display);
  font-size: var(--text-xl);
  font-weight: var(--font-bold);
  color: var(--color-text-primary);
  margin: 0;
}

.card-description {
  font-family: var(--font-primary);
  font-size: var(--text-base);
  color: var(--color-text-secondary);
  opacity: 0.8;
  margin: 0;
  line-height: 1.6;
}

.card-link {
  margin-top: auto;
  font-family: var(--font-primary);
  font-size: var(--text-base);
  font-weight: var(--font-semibold);
  color: var(--color-primary-600);
  padding-top: var(--spacing-2);
}

/* Sección de navegación */
.navigation-section {
  margin-top: var(--spacing-6);
  text-align: center;
}

.next-button {
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
  box-shadow: var(--shadow-lg);
  display: inline-flex;
  align-items: center;
  gap: var(--spacing-1);
  text-transform: uppercase;
  letter-spacing: 1px;
}

.next-button svg {
  width: 20px;
  height: 20px;
  transition: transform var(--transition-base);
}

.next-button:hover {
  transform: translateY(-2px);
  box-shadow: var(--shadow-xl);
  background: linear-gradient(135deg, var(--color-primary-700) 0%, var(--color-primary-800) 100%);
}

.next-button:hover svg {
  transform: translateX(4px);
}

.next-button:active {
  transform: translateY(0);
  box-shadow: var(--shadow-md);
}

@media (max-width: 768px) {
  .card-grid-slide {
    padding: var(--spacing-2);
  }

  .slide-title {
    font-size: var(--text-2xl);
  }

  .card-grid {
    grid-template-columns: 1fr;
    gap: var(--spacing-3);
  }

  .card {
    padding: var(--spacing-3);
  }

  .card-icon {
    width: 60px;
    height: 60px;
  }

  .icon-emoji {
    font-size: var(--text-4xl);
  }

  .next-button {
    padding: var(--spacing-2) var(--spacing-3);
    font-size: var(--text-base);
  }
}
</style>
