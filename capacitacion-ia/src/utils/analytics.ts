/**
 * Umami Analytics Helper Functions
 *
 * Módulo para enviar eventos a Umami Analytics directamente si están disponibles.
 */

declare global {
  interface Window {
    umami?: {
      track: (eventName?: string | Record<string, any>, eventData?: Record<string, any>) => void
    }
  }
}

// Queue for events fired before Umami script loads
const eventQueue: Array<{ eventName: string; params?: Record<string, any> }> = []
let isFlushing = false

function flushQueue() {
  if (typeof window !== 'undefined' && typeof window.umami?.track === 'function' && eventQueue.length > 0) {
    while (eventQueue.length > 0) {
      const item = eventQueue.shift()
      if (item) {
        window.umami.track(item.eventName, item.params)
      }
    }
  }
}

/**
 * Función vacía de inicialización por compatibilidad
 */
export function initializeGoogleAnalytics(): boolean {
  return true
}

/**
 * Envía un evento personalizado a Umami Analytics
 */
export function trackEvent(eventName: string, params?: Record<string, any>): void {
  if (typeof window !== 'undefined' && typeof window.umami?.track === 'function') {
    flushQueue()
    window.umami.track(eventName, params)
  } else {
    eventQueue.push({ eventName, params })
    if (typeof window !== 'undefined' && !isFlushing) {
      isFlushing = true
      const checkInterval = setInterval(() => {
        if (typeof window.umami?.track === 'function') {
          clearInterval(checkInterval)
          isFlushing = false
          flushQueue()
        }
      }, 300)
      setTimeout(() => {
        clearInterval(checkInterval)
        isFlushing = false
      }, 10000)
    }
  }
}

/**
 * Envía un evento de vista de página a Umami Analytics
 */
export function trackPageView(pageTitle: string, pagePath: string): void {
  trackEvent('page_view', {
    page_title: pageTitle,
    page_path: pagePath,
  })
}

/**
 * Envía un evento cuando el usuario interactúa con un slide
 */
export function trackSlideView(slideNumber: number, slideTitle: string, slideType: string): void {
  trackEvent('slide_view', {
    slide_number: slideNumber,
    slide_title: slideTitle,
    slide_type: slideType,
  })
}

/**
 * Envía un evento cuando el usuario responde un quiz
 */
export function trackQuizAnswer(question: string, answer: string, isCorrect: boolean): void {
  trackEvent('quiz_answer', {
    question,
    answer,
    is_correct: isCorrect,
  })
}

/**
 * Envía un evento cuando el usuario navega entre slides
 */
export function trackNavigation(direction: 'next' | 'previous', fromSlide: number, toSlide: number): void {
  trackEvent('navigation', {
    direction,
    from_slide: fromSlide,
    to_slide: toSlide,
  })
}

/**
 * Envía un evento cuando el usuario hace clic en un recurso
 */
export function trackResourceClick(resourceName: string, resourceUrl: string, resourceType: string): void {
  trackEvent('resource_click', {
    resource_name: resourceName,
    resource_url: resourceUrl,
    resource_type: resourceType,
  })
}

/**
 * Envía un evento cuando el usuario hace clic en un contacto
 */
export function trackContactClick(contactType: string, contactValue: string): void {
  trackEvent('contact_click', {
    contact_type: contactType,
    contact_value: contactValue,
  })
}

