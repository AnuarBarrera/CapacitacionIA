import { SlideType, type Slide } from '@/interfaces/Slide'

/**
 * Datos de ejemplo para la presentación sobre Herramientas de IA
 */
export const slidesData: Slide[] = [
  {
    id: 'intro',
    title: 'Introducción a las Herramientas de IA',
    type: SlideType.TITLE,
    subtitle: 'Capacitación sobre el uso efectivo de la Inteligencia Artificial',
    author: 'Equipo de Capacitación',
    order: 0
  },
  {
    id: 'que-es-ia',
    title: '¿Qué es la IA?',
    type: SlideType.CONTENT,
    content: 'La Inteligencia Artificial es la simulación de procesos de inteligencia humana por parte de sistemas informáticos.',
    bullets: [
      'Aprendizaje automático (Machine Learning)',
      'Procesamiento de lenguaje natural (NLP)',
      'Visión por computadora',
      'Sistemas expertos'
    ],
    order: 1
  },
  {
    id: 'herramientas-ia',
    title: 'Herramientas de IA Populares',
    type: SlideType.CONTENT,
    content: 'Existen múltiples herramientas de IA disponibles para diferentes propósitos:',
    bullets: [
      'ChatGPT - Asistente conversacional',
      'Claude - Asistente de IA avanzado',
      'GitHub Copilot - Asistente de código',
      'Midjourney/DALL-E - Generación de imágenes',
      'Gemini - IA multimodal de Google'
    ],
    order: 2
  },
  {
    id: 'ejemplo-codigo',
    title: 'Ejemplo: Usar IA para Código',
    type: SlideType.CODE,
    description: 'Ejemplo de cómo la IA puede ayudar a escribir código TypeScript',
    language: 'typescript',
    code: `// Función para validar email usando expresiones regulares
function isValidEmail(email: string): boolean {
  const emailRegex = /^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$/
  return emailRegex.test(email)
}

// Uso
console.log(isValidEmail('usuario@ejemplo.com')) // true
console.log(isValidEmail('invalido')) // false`,
    order: 3
  },
  {
    id: 'quiz-1',
    title: 'Quiz: Conocimientos Básicos',
    type: SlideType.QUIZ,
    question: '¿Cuál de estas NO es una aplicación común de la IA?',
    options: [
      { id: 'a', text: 'Procesamiento de lenguaje natural', isCorrect: false },
      { id: 'b', text: 'Cocinar alimentos físicamente', isCorrect: true },
      { id: 'c', text: 'Reconocimiento de imágenes', isCorrect: false },
      { id: 'd', text: 'Análisis predictivo', isCorrect: false }
    ],
    explanation: 'La IA puede controlar robots que cocinan, pero por sí misma no puede manipular objetos físicos directamente.',
    order: 4
  },
  {
    id: 'mejores-practicas',
    title: 'Mejores Prácticas',
    type: SlideType.CONTENT,
    content: 'Consejos para usar herramientas de IA de manera efectiva:',
    bullets: [
      'Sé específico en tus consultas',
      'Proporciona contexto relevante',
      'Itera y refina tus prompts',
      'Verifica siempre los resultados',
      'Combina IA con tu experiencia humana'
    ],
    order: 5
  },
  {
    id: 'conclusion',
    title: '¡Gracias!',
    type: SlideType.TITLE,
    subtitle: '¿Preguntas?',
    order: 6
  }
]
