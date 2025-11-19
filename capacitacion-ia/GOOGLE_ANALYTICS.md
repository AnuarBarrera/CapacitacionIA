# Configuración de Google Analytics

Este documento explica cómo está configurado Google Analytics 4 en el proyecto y cómo utilizarlo para trackear interacciones de usuarios.

## Configuración Inicial

### 1. Obtener tu Measurement ID

1. Ve a [Google Analytics](https://analytics.google.com/)
2. Crea una propiedad GA4 si aún no tienes una
3. Ve a **Admin** → **Data Streams**
4. Selecciona tu stream web o crea uno nuevo
5. Copia el **Measurement ID** (formato: `G-XXXXXXXXXX`)

### 2. Configurar Variables de Entorno

1. Copia el archivo `.env.example` a `.env`:

```bash
cp .env.example .env
```

2. Edita el archivo `.env` y agrega tu Measurement ID:

```env
VITE_GA_MEASUREMENT_ID=G-TU-ID-AQUI
```

3. **IMPORTANTE**: El archivo `.env` ya está en `.gitignore` y NO se subirá al repositorio. Esto protege tu ID de medición.

### 3. Reiniciar el Servidor de Desarrollo

Después de configurar el `.env`, reinicia el servidor:

```bash
npm run dev
```

Google Analytics se inicializará automáticamente si el `VITE_GA_MEASUREMENT_ID` está configurado.

---

## Arquitectura

### Archivos Creados

```
src/
├── utils/
│   └── analytics.ts          # Funciones core de Google Analytics
├── composables/
│   └── useAnalytics.ts        # Composable Vue para usar en componentes
└── main.ts                    # Inicialización automática de GA
```

### Flujo de Inicialización

1. **`main.ts`** importa y ejecuta `initializeGoogleAnalytics()`
2. **`analytics.ts`** lee `VITE_GA_MEASUREMENT_ID` del entorno
3. Si existe, inyecta el script de gtag.js en el `<head>`
4. Configura `window.dataLayer` y `window.gtag` globalmente

---

## Uso en Componentes Vue

### Importar el Composable

```typescript
import { useAnalytics } from '@/composables/useAnalytics'

export default {
  setup() {
    const analytics = useAnalytics()

    // Usar métodos de tracking aquí
  }
}
```

### Ejemplos de Tracking

#### 1. Trackear Vista de Slide

```typescript
import { useAnalytics } from '@/composables/useAnalytics'

const { trackSlide } = useAnalytics()

// Cuando cambia el slide
watch(currentSlideIndex, (newIndex) => {
  const slide = slides.value[newIndex]
  trackSlide(newIndex + 1, slide.title, slide.type)
})
```

#### 2. Trackear Respuesta de Quiz

```typescript
const { trackQuiz } = useAnalytics()

function handleQuizAnswer(question: string, answer: string, isCorrect: boolean) {
  trackQuiz(question, answer, isCorrect)
}
```

#### 3. Trackear Navegación entre Slides

```typescript
const { trackNav } = useAnalytics()

function nextSlide() {
  const fromSlide = currentSlideIndex.value
  currentSlideIndex.value++
  const toSlide = currentSlideIndex.value

  trackNav('next', fromSlide, toSlide)
}

function previousSlide() {
  const fromSlide = currentSlideIndex.value
  currentSlideIndex.value--
  const toSlide = currentSlideIndex.value

  trackNav('previous', fromSlide, toSlide)
}
```

#### 4. Trackear Click en Recurso o Enlace Externo

```typescript
const { trackResource } = useAnalytics()

function handleResourceClick(name: string, url: string) {
  trackResource(name, url, 'external_link')
  window.open(url, '_blank')
}
```

#### 5. Trackear Click en Botón de Contacto

```typescript
const { trackContact } = useAnalytics()

function handleContactClick(type: string, value: string) {
  trackContact(type, value)
}
```

#### 6. Trackear Eventos Genéricos

```typescript
const { track } = useAnalytics()

function handleCustomAction() {
  track('custom_event', {
    category: 'engagement',
    action: 'user_interaction',
    value: 123
  })
}
```

#### 7. Auto-trackear Tiempo en Componente

```typescript
import { useAnalytics } from '@/composables/useAnalytics'

export default {
  setup() {
    const analytics = useAnalytics()

    // Automáticamente trackea cuánto tiempo pasa el usuario en este componente
    analytics.trackTimeSpent('QuizSlide', {
      quiz_id: 'intro_quiz'
    })
  }
}
```

#### 8. Auto-trackear Cambios en Referencias Reactivas

```typescript
const { trackRefChange } = useAnalytics()
const currentSlide = ref(0)

// Trackea automáticamente cada vez que cambia el slide
trackRefChange(
  currentSlide,
  'slide_changed',
  (newValue, oldValue) => ({
    from_slide: oldValue,
    to_slide: newValue
  })
)
```

---

## Métodos Disponibles

### Composable `useAnalytics()`

#### Métodos Básicos

- **`track(eventName, params?)`** - Trackear evento genérico
- **`trackPage(pageTitle, pagePath)`** - Trackear vista de página

#### Métodos Específicos de Presentación

- **`trackSlide(slideNumber, slideTitle, slideType)`** - Trackear vista de slide
- **`trackQuiz(question, answer, isCorrect)`** - Trackear respuesta de quiz
- **`trackNav(direction, fromSlide, toSlide)`** - Trackear navegación
- **`trackResource(name, url, type)`** - Trackear click en recurso
- **`trackContact(type, value)`** - Trackear click en contacto

#### Métodos de Componentes Vue

- **`trackComponentMount(componentName, data?)`** - Auto-trackear montaje
- **`trackComponentUnmount(componentName, data?)`** - Auto-trackear desmontaje
- **`trackTimeSpent(componentName, data?)`** - Medir tiempo en componente
- **`trackRefChange(ref, eventName, getParams?)`** - Trackear cambios en ref reactiva

#### Métodos de Interacción General

- **`trackButtonClick(buttonName, data?)`** - Trackear click en botón
- **`trackLinkClick(linkText, linkUrl, data?)`** - Trackear click en enlace
- **`trackFormSubmit(formName, data?)`** - Trackear envío de formulario
- **`trackError(errorMessage, context?, data?)`** - Trackear errores
- **`trackSearch(query, resultsCount?, data?)`** - Trackear búsquedas

---

## Ejemplo Completo: Componente de Presentación

```vue
<script setup lang="ts">
import { ref, watch, onMounted } from 'vue'
import { useAnalytics } from '@/composables/useAnalytics'

const {
  trackSlide,
  trackNav,
  trackTimeSpent,
  trackButtonClick
} = useAnalytics()

const currentSlide = ref(0)
const slides = ref([
  { title: 'Introducción', type: 'TITLE' },
  { title: 'Contenido', type: 'CONTENT' },
  // ...
])

// Auto-trackear tiempo en el componente
trackTimeSpent('PresentationView')

// Trackear vista inicial del slide
onMounted(() => {
  const slide = slides.value[0]
  trackSlide(1, slide.title, slide.type)
})

// Trackear cada cambio de slide
watch(currentSlide, (newIndex, oldIndex) => {
  const slide = slides.value[newIndex]
  trackSlide(newIndex + 1, slide.title, slide.type)
})

function nextSlide() {
  const fromSlide = currentSlide.value
  if (fromSlide < slides.value.length - 1) {
    currentSlide.value++
    trackNav('next', fromSlide, currentSlide.value)
    trackButtonClick('next_slide')
  }
}

function previousSlide() {
  const fromSlide = currentSlide.value
  if (fromSlide > 0) {
    currentSlide.value--
    trackNav('previous', fromSlide, currentSlide.value)
    trackButtonClick('previous_slide')
  }
}
</script>

<template>
  <div class="presentation">
    <!-- Contenido de la presentación -->
    <button @click="previousSlide">Anterior</button>
    <button @click="nextSlide">Siguiente</button>
  </div>
</template>
```

---

## Uso Directo (Sin Composable)

Si prefieres no usar el composable Vue, puedes importar directamente desde `utils/analytics.ts`:

```typescript
import {
  trackEvent,
  trackSlideView,
  trackQuizAnswer
} from '@/utils/analytics'

trackEvent('custom_event', { foo: 'bar' })
trackSlideView(1, 'Introducción', 'TITLE')
trackQuizAnswer('¿Qué es IA?', 'Inteligencia Artificial', true)
```

---

## Eventos Trackados Automáticamente

Una vez configurado, Google Analytics trackeará automáticamente:

1. **Pageviews** - Vistas de página inicial
2. **Session duration** - Duración de sesiones
3. **User engagement** - Engagement de usuarios
4. **Scroll depth** - Profundidad de scroll (nativo de GA4)

---

## Verificar que Funciona

### En el Navegador

1. Abre la consola del navegador (F12)
2. Ve a la pestaña **Network**
3. Filtra por `google-analytics.com` o `gtag`
4. Interactúa con la presentación
5. Deberías ver requests a Google Analytics

### En Google Analytics

1. Ve a [Google Analytics](https://analytics.google.com/)
2. Selecciona tu propiedad
3. Ve a **Reports** → **Realtime**
4. Interactúa con tu presentación
5. Deberías ver eventos en tiempo real

### En la Consola

Con el modo desarrollo, verás logs como:

```
Google Analytics inicializado correctamente: G-XXXXXXXXXX
```

Si no hay `VITE_GA_MEASUREMENT_ID` configurado:

```
Google Analytics: No se encontró VITE_GA_MEASUREMENT_ID en las variables de entorno
```

---

## Tipos de Eventos Recomendados para la Presentación

| Evento | Descripción | Cuándo Usarlo |
|--------|-------------|---------------|
| `slide_view` | Vista de un slide | Cada cambio de slide |
| `navigation` | Navegación entre slides | Click en botones siguiente/anterior |
| `quiz_answer` | Respuesta a quiz | Usuario responde quiz |
| `resource_click` | Click en recurso externo | Click en enlaces a herramientas IA |
| `contact_click` | Click en contacto | Click en email, LinkedIn, etc. |
| `time_spent` | Tiempo en componente | Desmontaje de componente |
| `button_click` | Click en botón | Cualquier interacción con botón |

---

## Seguridad y Privacidad

### Variables de Entorno Protegidas

- El archivo `.env` está en `.gitignore`
- Las variables `VITE_*` son seguras para exponer en el cliente
- El Measurement ID es público (está en el código compilado)
- NO pongas secrets sensibles (API keys privadas) en `VITE_*`

### GDPR y Privacidad

Si tu sitio está disponible en Europa, considera:

1. **Implementar banner de cookies**
2. **Anonimizar IPs** (habilitado por defecto en GA4)
3. **Permitir opt-out** de analytics

Ejemplo de opt-out:

```typescript
// Desactivar tracking
window['ga-disable-G-XXXXXXXXXX'] = true
```

---

## Producción

### Build para Producción

```bash
npm run build
```

El `VITE_GA_MEASUREMENT_ID` se reemplazará en tiempo de build con el valor del `.env`.

### Variables de Entorno en Hosting

Si usas servicios como Vercel, Netlify, etc., agrega la variable de entorno en su dashboard:

- **Variable**: `VITE_GA_MEASUREMENT_ID`
- **Valor**: `G-TU-ID-AQUI`

---

## Troubleshooting

### No se trackean eventos

1. Verifica que `VITE_GA_MEASUREMENT_ID` esté configurado
2. Reinicia el servidor de desarrollo
3. Limpia caché del navegador
4. Verifica en la consola si hay errores

### Eventos duplicados

- Asegúrate de no llamar `initializeGoogleAnalytics()` múltiples veces
- Verifica que no haya watchers duplicados

### No aparece en Google Analytics

- Google Analytics puede tardar 24-48 horas en procesar datos
- Usa **Realtime Reports** para ver datos inmediatos
- Verifica que el Measurement ID sea correcto

---

## Recursos Adicionales

- [Documentación oficial de Google Analytics 4](https://support.google.com/analytics/answer/9304153)
- [Documentación de gtag.js](https://developers.google.com/analytics/devguides/collection/gtagjs)
- [Vite - Variables de Entorno](https://vitejs.dev/guide/env-and-mode.html)

---

## Contribuir

Si encuentras bugs o tienes sugerencias, por favor:

1. Revisa los logs en la consola del navegador
2. Verifica la configuración de variables de entorno
3. Abre un issue con detalles del problema

---

Última actualización: Noviembre 2024
