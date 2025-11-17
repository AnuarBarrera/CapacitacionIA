<script setup lang="ts">
import { onMounted, onUnmounted, watch, ref, type Component } from 'vue'
import { usePresentation } from '@/composables/usePresentation'
import { PresentationService } from '@/services/PresentationService'
import { slidesData } from '@/data/slides'
import { SlideType } from '@/interfaces/Slide'

import SlideNavigation from '@/components/common/SlideNavigation.vue'
import TitleSlide from '@/components/presentation/TitleSlide.vue'
import ContentSlide from '@/components/presentation/ContentSlide.vue'
import CodeSlide from '@/components/presentation/CodeSlide.vue'
import QuizSlide from '@/components/presentation/QuizSlide.vue'
import TypewriterSlide from '@/components/presentation/TypewriterSlide.vue'
import CardGridSlide from '@/components/presentation/CardGridSlide.vue'
import ResourceSlide from '@/components/presentation/ResourceSlide.vue'
import CTASlide from '@/components/presentation/CTASlide.vue'

// Inicializar el servicio de presentación
const presentationService = new PresentationService(slidesData)

// Usar el composable de presentación
const {
  currentSlide,
  currentSlideIndex,
  totalSlides,
  isFirstSlide,
  isLastSlide,
  progress,
  nextSlide,
  previousSlide,
  goToSlide
} = usePresentation(presentationService)

// Mapeo de tipos de slide a componentes
const slideComponents: Record<SlideType, Component> = {
  [SlideType.TITLE]: TitleSlide,
  [SlideType.CONTENT]: ContentSlide,
  [SlideType.CODE]: CodeSlide,
  [SlideType.QUIZ]: QuizSlide,
  [SlideType.INTERACTIVE]: ContentSlide,
  [SlideType.TYPEWRITER]: TypewriterSlide,
  [SlideType.CARD_GRID]: CardGridSlide,
  [SlideType.RESOURCE]: ResourceSlide,
  [SlideType.CTA]: CTASlide
}

// Control de navegación para slides interactivos
const isNavigationAllowed = ref(true)

// Handler para el evento de navegación permitida desde ContentSlide
const handleNavigationAllowed = (allowed: boolean) => {
  isNavigationAllowed.value = allowed
}

// Handler para navegar a una slide específica por su ID
const handleNavigateToSlide = (slideId: string) => {
  const slideIndex = presentationService.getSlideIndexById(slideId)
  if (slideIndex !== -1) {
    goToSlide(slideIndex)
  }
}

// Función auxiliar para verificar si se puede navegar
const canNavigate = (): boolean => {
  // Si es un slide de contenido, verificar si la navegación está permitida
  if (currentSlide.value?.type === SlideType.CONTENT) {
    return isNavigationAllowed.value
  }
  return true
}

// Navegación con teclado
const handleKeyPress = (event: KeyboardEvent) => {
  switch (event.key) {
    case 'ArrowRight':
    case ' ':
      event.preventDefault()
      if (canNavigate()) {
        nextSlide()
      }
      break
    case 'ArrowLeft':
      event.preventDefault()
      if (canNavigate()) {
        previousSlide()
      }
      break
    case 'Home':
      event.preventDefault()
      goToSlide(0)
      break
    case 'End':
      event.preventDefault()
      goToSlide(totalSlides.value - 1)
      break
  }
}

// Detectar swipe en móvil
let touchStartX = 0
let touchEndX = 0

const handleTouchStart = (event: TouchEvent) => {
  const touch = event.changedTouches[0]
  if (touch) {
    touchStartX = touch.screenX
  }
}

const handleTouchEnd = (event: TouchEvent) => {
  const touch = event.changedTouches[0]
  if (touch) {
    touchEndX = touch.screenX
    handleSwipe()
  }
}

const handleSwipe = () => {
  if (!canNavigate()) {
    return
  }

  const swipeThreshold = 50
  const diff = touchStartX - touchEndX

  if (Math.abs(diff) > swipeThreshold) {
    if (diff > 0) {
      nextSlide()
    } else {
      previousSlide()
    }
  }
}

// Lifecycle hooks
onMounted(() => {
  document.addEventListener('keydown', handleKeyPress)
  document.addEventListener('touchstart', handleTouchStart)
  document.addEventListener('touchend', handleTouchEnd)
})

onUnmounted(() => {
  document.removeEventListener('keydown', handleKeyPress)
  document.removeEventListener('touchstart', handleTouchStart)
  document.removeEventListener('touchend', handleTouchEnd)
})

// Scroll al inicio cuando cambia la slide y resetear navegación permitida
watch(currentSlideIndex, () => {
  window.scrollTo({ top: 0, behavior: 'smooth' })
  // Resetear el estado de navegación al cambiar de slide
  isNavigationAllowed.value = true
})
</script>

<template>
  <div class="presentation-view">
    <div class="slide-container">
      <Transition name="slide" mode="out-in">
        <component
          :is="slideComponents[currentSlide?.type || SlideType.TITLE]"
          v-if="currentSlide"
          :key="currentSlide.id"
          :slide="currentSlide"
          @next="nextSlide"
          @navigation-allowed="handleNavigationAllowed"
          @navigate-to-slide="handleNavigateToSlide"
        />
      </Transition>
    </div>

    <SlideNavigation
      v-if="canNavigate()"
      :current-index="currentSlideIndex"
      :total-slides="totalSlides"
      :is-first-slide="isFirstSlide"
      :is-last-slide="isLastSlide"
      :progress="progress"
      @previous="previousSlide"
      @next="nextSlide"
      @go-to-slide="goToSlide"
    />
  </div>
</template>

<style scoped>
.presentation-view {
  min-height: 100vh;
  padding-bottom: 120px; /* Espacio para la navegación */
}

.slide-container {
  width: 100%;
  max-width: 100%;
  margin: 0 auto;
  padding: 2rem 4rem;
  min-height: calc(100vh - 120px);
  display: flex;
  align-items: center;
  justify-content: center;
}

/* Transiciones entre slides */
.slide-enter-active,
.slide-leave-active {
  transition: all 0.3s ease;
}

.slide-enter-from {
  opacity: 0;
  transform: translateX(30px);
}

.slide-leave-to {
  opacity: 0;
  transform: translateX(-30px);
}

@media (max-width: 768px) {
  .presentation-view {
    padding-bottom: 100px;
  }

  .slide-container {
    padding: 1rem;
    min-height: calc(100vh - 100px);
  }
}
</style>
