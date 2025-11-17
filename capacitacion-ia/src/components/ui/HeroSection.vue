<script setup lang="ts">
import { ref, onMounted } from 'vue'
import Button from './Button.vue'

export interface HeroSectionProps {
  title?: string
  subtitle?: string
  description?: string
  backgroundImage?: string
  overlay?: boolean
  centered?: boolean
}

const props = withDefaults(defineProps<HeroSectionProps>(), {
  title: 'Build Something Amazing',
  subtitle: 'Bienvenido al futuro',
  description: 'Una plataforma moderna y poderosa para crear experiencias increíbles.',
  backgroundImage: '',
  overlay: true,
  centered: true
})

const isVisible = ref(false)

onMounted(() => {
  // Trigger animaciones después del mount
  setTimeout(() => {
    isVisible.value = true
  }, 100)
})
</script>

<template>
  <section
    class="hero"
    :class="{ 'hero--centered': centered }"
    :style="backgroundImage ? { backgroundImage: `url(${backgroundImage})` } : {}"
  >
    <div v-if="overlay && backgroundImage" class="hero__overlay" />

    <div class="hero__container">
      <div
        class="hero__content"
        :class="{ 'hero__content--visible': isVisible }"
      >
        <!-- Subtitle -->
        <span v-if="subtitle" class="hero__subtitle animate-fade-in-up">
          {{ subtitle }}
        </span>

        <!-- Title -->
        <h1 class="hero__title animate-fade-in-up animation-delay-100">
          <slot name="title">{{ title }}</slot>
        </h1>

        <!-- Description -->
        <p class="hero__description animate-fade-in-up animation-delay-200">
          <slot name="description">{{ description }}</slot>
        </p>

        <!-- Actions -->
        <div class="hero__actions animate-fade-in-up animation-delay-300">
          <slot name="actions">
            <Button variant="primary" size="lg">
              Comenzar Ahora
            </Button>
            <Button variant="outline" size="lg">
              Ver Demo
            </Button>
          </slot>
        </div>

        <!-- Stats o features adicionales -->
        <div v-if="$slots.stats" class="hero__stats animate-fade-in-up animation-delay-400">
          <slot name="stats" />
        </div>
      </div>

      <!-- Hero Image/Illustration -->
      <div v-if="$slots.image" class="hero__image animate-fade-in animation-delay-200">
        <slot name="image" />
      </div>
    </div>

    <!-- Decorative Elements -->
    <div class="hero__decoration">
      <!-- Círculos decorativos animados -->
      <div class="hero__circle hero__circle--1" />
      <div class="hero__circle hero__circle--2" />
      <div class="hero__circle hero__circle--3" />
    </div>

    <!-- Scroll Indicator -->
    <div class="hero__scroll-indicator">
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M12 5V19M12 19L19 12M12 19L5 12"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    </div>
  </section>
</template>

<style scoped>
.hero {
  position: relative;
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(135deg, var(--color-primary-800) 0%, var(--color-primary-900) 100%);
  color: var(--color-text-inverse);
  overflow: hidden;

  /* Si hay imagen de fondo */
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
}

.hero__overlay {
  position: absolute;
  inset: 0;
  background: linear-gradient(
    135deg,
    rgba(26, 31, 54, 0.95) 0%,
    rgba(26, 31, 54, 0.8) 100%
  );
  z-index: 1;
}

.hero__container {
  position: relative;
  z-index: 2;
  max-width: var(--container-xl);
  margin: 0 auto;
  padding: var(--spacing-8) var(--spacing-4);
  display: grid;
  grid-template-columns: 1fr;
  gap: var(--spacing-8);
  align-items: center;
}

@media (min-width: 1024px) {
  .hero__container {
    grid-template-columns: 1fr 1fr;
    gap: var(--spacing-12);
  }

  .hero--centered .hero__container {
    grid-template-columns: 1fr;
    text-align: center;
  }
}

/* ============================================
   CONTENT
   ============================================ */

.hero__content {
  display: flex;
  flex-direction: column;
  gap: var(--spacing-4);
}

.hero--centered .hero__content {
  align-items: center;
  max-width: 800px;
  margin: 0 auto;
}

.hero__subtitle {
  display: inline-block;
  font-family: var(--font-primary);
  font-size: var(--text-sm);
  font-weight: var(--font-semibold);
  text-transform: uppercase;
  letter-spacing: 0.1em;
  color: var(--color-secondary-400);
  padding: var(--spacing-1) var(--spacing-2);
  background: rgba(255, 107, 107, 0.1);
  border-radius: var(--radius-full);
  width: fit-content;
}

.hero__title {
  font-family: var(--font-display);
  font-size: var(--text-6xl);
  font-weight: var(--font-extrabold);
  line-height: 1.1;
  color: var(--color-text-inverse);
  margin: 0;
}

@media (max-width: 768px) {
  .hero__title {
    font-size: var(--text-4xl);
  }
}

@media (min-width: 1280px) {
  .hero__title {
    font-size: var(--text-7xl);
  }
}

.hero__description {
  font-family: var(--font-primary);
  font-size: var(--text-xl);
  line-height: 1.7;
  color: var(--color-neutral-300);
  margin: 0;
  max-width: 600px;
}

@media (max-width: 768px) {
  .hero__description {
    font-size: var(--text-lg);
  }
}

.hero--centered .hero__description {
  margin: 0 auto;
}

.hero__actions {
  display: flex;
  flex-wrap: wrap;
  gap: var(--spacing-3);
  margin-top: var(--spacing-2);
}

@media (max-width: 640px) {
  .hero__actions {
    flex-direction: column;
  }

  .hero__actions :deep(.button) {
    width: 100%;
  }
}

.hero__stats {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));
  gap: var(--spacing-4);
  margin-top: var(--spacing-4);
  padding-top: var(--spacing-4);
  border-top: var(--border-width) solid rgba(255, 255, 255, 0.1);
}

/* ============================================
   IMAGE
   ============================================ */

.hero__image {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
}

.hero__image :deep(img),
.hero__image :deep(svg) {
  max-width: 100%;
  height: auto;
  border-radius: var(--radius-xl);
  box-shadow: var(--shadow-2xl);
}

/* ============================================
   DECORATIVE ELEMENTS
   ============================================ */

.hero__decoration {
  position: absolute;
  inset: 0;
  overflow: hidden;
  pointer-events: none;
  z-index: 1;
}

.hero__circle {
  position: absolute;
  border-radius: 50%;
  background: radial-gradient(
    circle,
    rgba(255, 107, 107, 0.15) 0%,
    transparent 70%
  );
  animation: float 20s infinite ease-in-out;
}

.hero__circle--1 {
  width: 400px;
  height: 400px;
  top: -200px;
  right: -200px;
  animation-delay: 0s;
}

.hero__circle--2 {
  width: 300px;
  height: 300px;
  bottom: -150px;
  left: -150px;
  animation-delay: 5s;
}

.hero__circle--3 {
  width: 200px;
  height: 200px;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  animation-delay: 10s;
}

@keyframes float {
  0%, 100% {
    transform: translate(0, 0) scale(1);
  }
  25% {
    transform: translate(20px, -20px) scale(1.05);
  }
  50% {
    transform: translate(-20px, 20px) scale(0.95);
  }
  75% {
    transform: translate(20px, 20px) scale(1.02);
  }
}

/* ============================================
   SCROLL INDICATOR
   ============================================ */

.hero__scroll-indicator {
  position: absolute;
  bottom: var(--spacing-8);
  left: 50%;
  transform: translateX(-50%);
  color: var(--color-text-inverse);
  opacity: 0.7;
  animation: bounce 2s infinite;
  cursor: pointer;
  z-index: 2;
}

@keyframes bounce {
  0%, 100% {
    transform: translateX(-50%) translateY(0);
  }
  50% {
    transform: translateX(-50%) translateY(10px);
  }
}

.hero__scroll-indicator:hover {
  opacity: 1;
}

/* ============================================
   ANIMACIONES DE ENTRADA
   ============================================ */

.hero__content > * {
  opacity: 0;
  animation-fill-mode: forwards;
}

.hero__content--visible > * {
  opacity: 1;
}
</style>
