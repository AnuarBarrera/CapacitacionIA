/**
 * Composable de Vue para Google Analytics
 *
 * Este composable facilita el tracking de eventos desde componentes Vue
 * y proporciona métodos específicos para trackear interacciones en la presentación.
 */

import { onMounted, onUnmounted, watch, type Ref } from 'vue'
import {
  trackEvent,
  trackPageView,
  trackSlideView,
  trackQuizAnswer,
  trackNavigation,
  trackResourceClick,
  trackContactClick,
} from '@/utils/analytics'

export function useAnalytics() {
  /**
   * Track generic event
   */
  const track = (eventName: string, params?: Record<string, any>) => {
    trackEvent(eventName, params)
  }

  /**
   * Track page view
   */
  const trackPage = (pageTitle: string, pagePath: string) => {
    trackPageView(pageTitle, pagePath)
  }

  /**
   * Track slide view
   */
  const trackSlide = (slideNumber: number, slideTitle: string, slideType: string) => {
    trackSlideView(slideNumber, slideTitle, slideType)
  }

  /**
   * Track quiz answer
   */
  const trackQuiz = (question: string, answer: string, isCorrect: boolean) => {
    trackQuizAnswer(question, answer, isCorrect)
  }

  /**
   * Track navigation
   */
  const trackNav = (direction: 'next' | 'previous', fromSlide: number, toSlide: number) => {
    trackNavigation(direction, fromSlide, toSlide)
  }

  /**
   * Track resource click
   */
  const trackResource = (resourceName: string, resourceUrl: string, resourceType: string) => {
    trackResourceClick(resourceName, resourceUrl, resourceType)
  }

  /**
   * Track contact click
   */
  const trackContact = (contactType: string, contactValue: string) => {
    trackContactClick(contactType, contactValue)
  }

  /**
   * Automatically track when a component is mounted
   * Útil para trackear vistas de componentes importantes
   */
  const trackComponentMount = (componentName: string, additionalData?: Record<string, any>) => {
    onMounted(() => {
      track('component_mount', {
        component_name: componentName,
        ...additionalData,
      })
    })
  }

  /**
   * Automatically track when a component is unmounted
   * Útil para medir cuánto tiempo pasan los usuarios en un componente
   */
  const trackComponentUnmount = (componentName: string, additionalData?: Record<string, any>) => {
    onUnmounted(() => {
      track('component_unmount', {
        component_name: componentName,
        ...additionalData,
      })
    })
  }

  /**
   * Track time spent on a component
   * Calcula automáticamente el tiempo entre mount y unmount
   */
  const trackTimeSpent = (componentName: string, additionalData?: Record<string, any>) => {
    let mountTime: number

    onMounted(() => {
      mountTime = Date.now()
    })

    onUnmounted(() => {
      const timeSpent = Math.round((Date.now() - mountTime) / 1000) // en segundos
      track('time_spent', {
        component_name: componentName,
        duration_seconds: timeSpent,
        ...additionalData,
      })
    })
  }

  /**
   * Automatically track changes in a reactive reference
   * Útil para trackear cambios en el índice de slides, selecciones, etc.
   */
  const trackRefChange = <T>(
    ref: Ref<T>,
    eventName: string,
    getParams?: (newValue: T, oldValue: T | undefined) => Record<string, any>
  ) => {
    watch(
      ref,
      (newValue, oldValue) => {
        const params = getParams ? getParams(newValue, oldValue) : { value: newValue }
        track(eventName, params)
      },
      { immediate: false }
    )
  }

  /**
   * Track button click with automatic data extraction
   */
  const trackButtonClick = (buttonName: string, additionalData?: Record<string, any>) => {
    track('button_click', {
      button_name: buttonName,
      ...additionalData,
    })
  }

  /**
   * Track link click with automatic data extraction
   */
  const trackLinkClick = (linkText: string, linkUrl: string, additionalData?: Record<string, any>) => {
    track('link_click', {
      link_text: linkText,
      link_url: linkUrl,
      ...additionalData,
    })
  }

  /**
   * Track form submission
   */
  const trackFormSubmit = (formName: string, additionalData?: Record<string, any>) => {
    track('form_submit', {
      form_name: formName,
      ...additionalData,
    })
  }

  /**
   * Track error
   */
  const trackError = (errorMessage: string, errorContext?: string, additionalData?: Record<string, any>) => {
    track('error', {
      error_message: errorMessage,
      error_context: errorContext,
      ...additionalData,
    })
  }

  /**
   * Track search
   */
  const trackSearch = (searchQuery: string, resultsCount?: number, additionalData?: Record<string, any>) => {
    track('search', {
      search_query: searchQuery,
      results_count: resultsCount,
      ...additionalData,
    })
  }

  return {
    // Métodos básicos
    track,
    trackPage,

    // Métodos específicos de presentación
    trackSlide,
    trackQuiz,
    trackNav,
    trackResource,
    trackContact,

    // Métodos de componentes
    trackComponentMount,
    trackComponentUnmount,
    trackTimeSpent,
    trackRefChange,

    // Métodos de interacción
    trackButtonClick,
    trackLinkClick,
    trackFormSubmit,
    trackError,
    trackSearch,
  }
}
