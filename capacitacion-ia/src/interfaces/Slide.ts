/**
 * Representa el tipo de contenido que puede tener una slide
 */
export enum SlideType {
  TITLE = 'title',
  CONTENT = 'content',
  CODE = 'code',
  INTERACTIVE = 'interactive',
  QUIZ = 'quiz'
}

/**
 * Interfaz base para una slide de la presentación
 * Siguiendo el principio de Segregación de Interfaces (ISP)
 */
export interface ISlide {
  id: string
  title: string
  type: SlideType
  order: number
}

/**
 * Slide de título/portada
 */
export interface ITitleSlide extends ISlide {
  type: SlideType.TITLE
  subtitle?: string
  author?: string
}

/**
 * Slide de contenido general
 */
export interface IContentSlide extends ISlide {
  type: SlideType.CONTENT
  content: string
  bullets?: string[]
  imageUrl?: string
}

/**
 * Slide con código
 */
export interface ICodeSlide extends ISlide {
  type: SlideType.CODE
  description: string
  code: string
  language: string
}

/**
 * Slide interactiva
 */
export interface IInteractiveSlide extends ISlide {
  type: SlideType.INTERACTIVE
  componentName: string
  props?: Record<string, unknown>
}

/**
 * Opción de respuesta para quiz
 */
export interface IQuizOption {
  id: string
  text: string
  isCorrect: boolean
}

/**
 * Slide tipo quiz
 */
export interface IQuizSlide extends ISlide {
  type: SlideType.QUIZ
  question: string
  options: IQuizOption[]
  explanation?: string
}

/**
 * Unión de todos los tipos de slides
 */
export type Slide = ITitleSlide | IContentSlide | ICodeSlide | IInteractiveSlide | IQuizSlide
