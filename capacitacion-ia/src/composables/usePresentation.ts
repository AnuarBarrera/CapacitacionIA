import { ref, computed, type Ref } from 'vue'
import type { Slide } from '@/interfaces/Slide'
import type { IPresentationService } from '@/interfaces/IPresentationService'

/**
 * Composable para gestionar la navegación de una presentación
 * Siguiendo el patrón Composition API de Vue 3
 *
 * @param presentationService - Servicio de presentación (Inyección de Dependencia)
 */
export function usePresentation(presentationService: IPresentationService) {
  const currentSlideIndex: Ref<number> = ref(0)

  const currentSlide = computed<Slide | undefined>(() => {
    return presentationService.getSlideByIndex(currentSlideIndex.value)
  })

  const totalSlides = computed<number>(() => {
    return presentationService.getTotalSlides()
  })

  const isFirstSlide = computed<boolean>(() => {
    return currentSlideIndex.value === 0
  })

  const isLastSlide = computed<boolean>(() => {
    return currentSlideIndex.value === totalSlides.value - 1
  })

  const progress = computed<number>(() => {
    if (totalSlides.value === 0) return 0
    return ((currentSlideIndex.value + 1) / totalSlides.value) * 100
  })

  const nextSlide = (): void => {
    if (!isLastSlide.value) {
      currentSlideIndex.value++
    }
  }

  const previousSlide = (): void => {
    if (!isFirstSlide.value) {
      currentSlideIndex.value--
    }
  }

  const goToSlide = (index: number): void => {
    if (presentationService.isValidIndex(index)) {
      currentSlideIndex.value = index
    }
  }

  const goToFirstSlide = (): void => {
    currentSlideIndex.value = 0
  }

  const goToLastSlide = (): void => {
    currentSlideIndex.value = totalSlides.value - 1
  }

  return {
    currentSlide,
    currentSlideIndex: computed(() => currentSlideIndex.value),
    totalSlides,
    isFirstSlide,
    isLastSlide,
    progress,
    nextSlide,
    previousSlide,
    goToSlide,
    goToFirstSlide,
    goToLastSlide
  }
}
