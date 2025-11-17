/**
 * Representa el tipo de contenido que puede tener una slide
 */
export enum SlideType {
  TITLE = 'title',
  CONTENT = 'content',
  CODE = 'code',
  INTERACTIVE = 'interactive',
  QUIZ = 'quiz',
  TYPEWRITER = 'typewriter',
  CARD_GRID = 'card-grid',
  RESOURCE = 'resource',
  CTA = 'cta'
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
 * Bullet point personalizado con keyword e imagen SVG
 */
export interface ICustomBullet {
  text: string
  keyword?: string
  svgContent?: string
  iconContent?: string // SVG personalizado para el icono del header
}

/**
 * Slide de contenido general
 */
export interface IContentSlide extends ISlide {
  type: SlideType.CONTENT
  content: string
  bullets?: string[]
  customBullets?: ICustomBullet[]
  imageUrl?: string
  flowDiagram?: string
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
 * Slide con efecto typewriter
 */
export interface ITypewriterSlide extends ISlide {
  type: SlideType.TYPEWRITER
  lines: string[]
  imageUrl?: string
  speed?: number // Milisegundos entre caracteres
}

/**
 * Tarjeta para grid
 */
export interface ICard {
  id: string
  title: string
  description?: string
  logoUrl?: string
  link?: string
  icon?: string
  svgContent?: string // SVG ilustrativo para la tarjeta
  bullets?: string[] // Bullets para mostrar en la tarjeta
}

/**
 * Slide con grid de tarjetas
 */
export interface ICardGridSlide extends ISlide {
  type: SlideType.CARD_GRID
  description?: string
  cards: ICard[]
  columns?: number
  flowDiagram?: string // SVG adicional al final de la slide
}

/**
 * Recurso con enlaces
 */
export interface IResource {
  type: 'web' | 'app' | 'tool'
  label: string
  url: string
  icon?: string
}

/**
 * Slide de recursos
 */
export interface IResourceSlide extends ISlide {
  type: SlideType.RESOURCE
  platform: string
  logoUrl?: string
  description?: string
  resources: IResource[]
  features?: string[]
  screenshot?: string
}

/**
 * Información de contacto para CTA
 */
export interface IContactInfo {
  name: string
  company: string
  website?: string
  email?: string
  phone?: string
  whatsapp?: string
  linkedin?: string
  servicios?: string
  socialMedia?: {
    platform: string
    url: string
    icon?: string
  }[]
}

/**
 * Slide de Call to Action / Cierre
 */
export interface ICTASlide extends ISlide {
  type: SlideType.CTA
  message: string[]
  contactInfo: IContactInfo
  ctaButtons?: {
    label: string
    action: string
    variant?: 'primary' | 'secondary'
  }[]
}

/**
 * Unión de todos los tipos de slides
 */
export type Slide =
  | ITitleSlide
  | IContentSlide
  | ICodeSlide
  | IInteractiveSlide
  | IQuizSlide
  | ITypewriterSlide
  | ICardGridSlide
  | IResourceSlide
  | ICTASlide
