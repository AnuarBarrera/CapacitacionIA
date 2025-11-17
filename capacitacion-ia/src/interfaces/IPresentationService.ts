import type { Slide } from './Slide'

/**
 * Interfaz para el servicio de gestión de presentaciones
 * Siguiendo el Principio de Inversión de Dependencias (DIP)
 */
export interface IPresentationService {
  /**
   * Obtiene todas las slides de la presentación
   */
  getSlides(): Slide[]

  /**
   * Obtiene una slide por su ID
   */
  getSlideById(id: string): Slide | undefined

  /**
   * Obtiene el índice de una slide por su ID
   * @returns El índice de la slide, o -1 si no se encuentra
   */
  getSlideIndexById(id: string): number

  /**
   * Obtiene la slide en la posición indicada
   */
  getSlideByIndex(index: number): Slide | undefined

  /**
   * Obtiene el número total de slides
   */
  getTotalSlides(): number

  /**
   * Valida si un índice es válido
   */
  isValidIndex(index: number): boolean
}
