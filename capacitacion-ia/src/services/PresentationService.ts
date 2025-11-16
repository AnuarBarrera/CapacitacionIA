import type { Slide } from '@/interfaces/Slide'
import type { IPresentationService } from '@/interfaces/IPresentationService'

/**
 * Servicio de gestión de presentaciones
 * Implementa IPresentationService siguiendo el Principio de Responsabilidad Única (SRP)
 * Su única responsabilidad es gestionar el acceso a las slides
 */
export class PresentationService implements IPresentationService {
  private slides: Slide[]

  constructor(slides: Slide[]) {
    // Ordenamos las slides por el campo 'order'
    this.slides = [...slides].sort((a, b) => a.order - b.order)
  }

  getSlides(): Slide[] {
    return [...this.slides]
  }

  getSlideById(id: string): Slide | undefined {
    return this.slides.find(slide => slide.id === id)
  }

  getSlideByIndex(index: number): Slide | undefined {
    if (!this.isValidIndex(index)) {
      return undefined
    }
    return this.slides[index]
  }

  getTotalSlides(): number {
    return this.slides.length
  }

  isValidIndex(index: number): boolean {
    return index >= 0 && index < this.slides.length
  }
}
