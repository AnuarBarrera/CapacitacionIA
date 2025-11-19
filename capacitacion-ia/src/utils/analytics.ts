/**
 * Google Analytics 4 Configuration and Initialization
 *
 * Este módulo maneja la configuración e inicialización de Google Analytics
 * usando la variable de entorno VITE_GA_MEASUREMENT_ID.
 */

declare global {
  interface Window {
    dataLayer: any[]
    gtag: (...args: any[]) => void
  }
}

/**
 * Inicializa Google Analytics 4 si hay un Measurement ID configurado
 *
 * @returns {boolean} true si se inicializó correctamente, false si no hay ID configurado
 */
export function initializeGoogleAnalytics(): boolean {
  const measurementId = import.meta.env.VITE_GA_MEASUREMENT_ID

  // Si no hay measurement ID, no inicializar
  if (!measurementId || measurementId.trim() === '') {
    console.warn('Google Analytics: No se encontró VITE_GA_MEASUREMENT_ID en las variables de entorno')
    return false
  }

  // Validar formato del ID (debe ser G-XXXXXXXXXX)
  if (!measurementId.startsWith('G-')) {
    console.error('Google Analytics: El formato del Measurement ID es inválido. Debe comenzar con "G-"')
    return false
  }

  try {
    // Crear el script para gtag.js
    const script = document.createElement('script')
    script.async = true
    script.src = `https://www.googletagmanager.com/gtag/js?id=${measurementId}`
    document.head.appendChild(script)

    // Inicializar dataLayer y gtag
    window.dataLayer = window.dataLayer || []
    window.gtag = function() {
      window.dataLayer.push(arguments)
    }

    window.gtag('js', new Date())
    window.gtag('config', measurementId, {
      send_page_view: true
    })

    console.log('Google Analytics inicializado correctamente:', measurementId)
    return true
  } catch (error) {
    console.error('Error al inicializar Google Analytics:', error)
    return false
  }
}

/**
 * Envía un evento personalizado a Google Analytics
 *
 * @param {string} eventName - Nombre del evento
 * @param {object} params - Parámetros adicionales del evento
 *
 * @example
 * trackEvent('slide_view', { slide_number: 1, slide_title: 'Introducción' })
 * trackEvent('button_click', { button_name: 'siguiente', section: 'presentacion' })
 */
export function trackEvent(eventName: string, params?: Record<string, any>): void {
  if (typeof window.gtag === 'function') {
    window.gtag('event', eventName, params)
  } else {
    console.warn('Google Analytics no está inicializado. No se puede trackear el evento:', eventName)
  }
}

/**
 * Envía un evento de vista de página a Google Analytics
 *
 * @param {string} pageTitle - Título de la página
 * @param {string} pagePath - Ruta de la página
 *
 * @example
 * trackPageView('Slide 5', '/presentacion/slide-5')
 */
export function trackPageView(pageTitle: string, pagePath: string): void {
  if (typeof window.gtag === 'function') {
    window.gtag('event', 'page_view', {
      page_title: pageTitle,
      page_path: pagePath,
    })
  } else {
    console.warn('Google Analytics no está inicializado. No se puede trackear la vista de página')
  }
}

/**
 * Envía un evento cuando el usuario interactúa con un slide
 *
 * @param {number} slideNumber - Número del slide
 * @param {string} slideTitle - Título del slide
 * @param {string} slideType - Tipo de slide
 *
 * @example
 * trackSlideView(1, 'Introducción a IA', 'TITLE')
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
 *
 * @param {string} question - Pregunta del quiz
 * @param {string} answer - Respuesta seleccionada
 * @param {boolean} isCorrect - Si la respuesta fue correcta
 *
 * @example
 * trackQuizAnswer('¿Qué es IA?', 'Inteligencia Artificial', true)
 */
export function trackQuizAnswer(question: string, answer: string, isCorrect: boolean): void {
  trackEvent('quiz_answer', {
    question,
    answer,
    is_correct: isCorrect,
  })
}

/**
 * Envía un evento cuando el usuario hace clic en un botón de navegación
 *
 * @param {string} direction - Dirección ('next' o 'previous')
 * @param {number} fromSlide - Número del slide desde donde se navegó
 * @param {number} toSlide - Número del slide al que se navegó
 *
 * @example
 * trackNavigation('next', 1, 2)
 */
export function trackNavigation(direction: 'next' | 'previous', fromSlide: number, toSlide: number): void {
  trackEvent('navigation', {
    direction,
    from_slide: fromSlide,
    to_slide: toSlide,
  })
}

/**
 * Envía un evento cuando el usuario hace clic en un recurso o enlace externo
 *
 * @param {string} resourceName - Nombre del recurso
 * @param {string} resourceUrl - URL del recurso
 * @param {string} resourceType - Tipo de recurso
 *
 * @example
 * trackResourceClick('ChatGPT', 'https://chat.openai.com', 'external_link')
 */
export function trackResourceClick(resourceName: string, resourceUrl: string, resourceType: string): void {
  trackEvent('resource_click', {
    resource_name: resourceName,
    resource_url: resourceUrl,
    resource_type: resourceType,
  })
}

/**
 * Envía un evento cuando el usuario hace clic en un botón de contacto
 *
 * @param {string} contactType - Tipo de contacto ('email', 'linkedin', 'github', etc.)
 * @param {string} contactValue - Valor del contacto (email, URL, etc.)
 *
 * @example
 * trackContactClick('email', 'ejemplo@ejemplo.com')
 */
export function trackContactClick(contactType: string, contactValue: string): void {
  trackEvent('contact_click', {
    contact_type: contactType,
    contact_value: contactValue,
  })
}
