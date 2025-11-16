import { SlideType, type Slide } from '@/interfaces/Slide'

/**
 * Datos de la presentación: Del chat a la acción - Herramientas de IA para impulsar tu negocio
 */
export const slidesData: Slide[] = [
  // Vista 1: Landing / Inicio
  {
    id: 'landing',
    title: 'Del chat a la acción: cómo usar la Inteligencia Artificial para impulsar tu negocio',
    type: SlideType.TITLE,
    subtitle: 'Una guía práctica para emprendedores mexicanos',
    author: 'Anuar Barrera - Tu Socio Tecnológico',
    order: 0
  },

  // Vista 2: El Problema (Hook Emocional)
  {
    id: 'el-problema',
    title: 'El Reto de Crecer en México',
    type: SlideType.TYPEWRITER,
    lines: [
      '¿Por qué tantos negocios no crecen en México?',
      '',
      'No es falta de talento. Es que formalizar es CARO y LENTO.',
      '',
      'Pero ¿y si hubiera una forma de competir con grandes empresas...',
      '',
      '...gratis,',
      '...hoy,',
      '...desde tu celular?',
      '',
      'ESO es lo que aprenderás hoy.'
    ],
    speed: 50,
    order: 1
  },

  // Vista 3: ¿Qué es la IA?
  {
    id: 'que-es-ia',
    title: '¿Qué es la IA?',
    type: SlideType.CONTENT,
    content: 'La IA es un Modelo Grande de Lenguaje (en inglés LLM - Large Language Model)',
    bullets: [
      'Todo el contenido que ha generado la humanidad se organizó en una base de datos gigante',
      'Con matemáticas, cada palabra (técnicamente llamada "token") recibió una posición específica',
      'El LLM predice cuál es la siguiente palabra más probable según tu mensaje (prompt)',
      'Entre mejor entrenado esté el modelo, mejor predice',
      '💡 La IA no es magia, es matemáticas. No es inteligente, solo predice la siguiente palabra de forma tan convincente porque fue muy bien entrenada.'
    ],
    order: 2
  },

  // Vista 4: ¿Cómo funcionan las aplicaciones de IA?
  {
    id: 'como-funcionan',
    title: '¿Cómo funcionan las aplicaciones de IA?',
    type: SlideType.CONTENT,
    content: 'Las aplicaciones de IA (como ChatGPT) son "Agentes de IA". Esto significa que el chat hace lo necesario para cumplir tu solicitud.',
    bullets: [
      '🤖 Agente: El sistema que ejecuta acciones para cumplir tu solicitud',
      '🧠 Razonamiento: La IA analiza tu petición ANTES de ejecutarla',
      '✨ Razonar = analizar tu petición para darte un mejor resultado y reducir errores',
      '🔄 Flujo: Usuario → Prompt → Razonamiento → Respuesta'
    ],
    order: 3
  },

  // Vista 5: El Prompt
  {
    id: 'el-prompt',
    title: 'El Prompt',
    type: SlideType.CONTENT,
    content: 'El prompt es el mensaje que le mandas a la IA.',
    bullets: [
      '📝 Estructura básica de prompts:',
      '• QUÉ quieres que haga',
      '• CÓMO lo quieres',
      '• CONTEXTO necesario',
      '💪 Ejemplo real del poder de la IA:',
      'ANTES: Lona para negocio = $500-1,000 o hacerlo mal tú mismo',
      'CON IA: "Quiero lona para vender pan dulce, estilo épico, inspiración anime, formato horizontal 1.20m"',
      'Resultado: Diseño profesional, gratis, en 5 minutos',
      '',
      '🚀 ESTO es el poder de la IA'
    ],
    order: 4
  },

  // Vista 6: Prompt Engineering
  {
    id: 'prompt-engineering',
    title: 'Prompt Engineering',
    type: SlideType.CONTENT,
    content: 'Estrategias para mejorar el prompt que le compartes a la IA y obtener mejores respuestas.',
    bullets: [
      '🎯 Sé específico: entre más detalles, mejor resultado',
      '📚 Da ejemplos: muestra qué quieres con ejemplos concretos',
      '📋 Define formato: especifica cómo quieres la respuesta',
      '🔄 Itera: si no sale bien, ajusta y vuelve a intentar'
    ],
    order: 5
  },

  // Vista 7: Context Engineering
  {
    id: 'context-engineering',
    title: 'Context Engineering',
    type: SlideType.CONTENT,
    content: 'Formas y métodos para compartirle contexto a la IA para que entienda mejor tu situación.',
    bullets: [
      '📎 Subir archivos (documentos, imágenes)',
      '🏢 Explicar tu negocio en el primer mensaje',
      '🎨 Dar ejemplos de tu trabajo previo',
      '👥 Compartir tu audiencia objetivo'
    ],
    order: 6
  },

  // Vista 8: Qué SÍ y qué NO compartir
  {
    id: 'seguridad',
    title: 'Qué SÍ y qué NO compartir con la IA',
    type: SlideType.CONTENT,
    content: '⚠️ Lo que escribes puede ser usado para entrenar la IA. Si es confidencial, NO lo compartas.',
    bullets: [
      '🟢 SÍ puedes compartir:',
      '• Ideas de negocio',
      '• Preguntas generales',
      '• Descripciones de productos/servicios',
      '• Solicitudes de contenido',
      '• Problemas que necesitas resolver',
      '',
      '🔴 NO compartas NUNCA:',
      '• Contraseñas o claves',
      '• Datos bancarios',
      '• INE o documentos oficiales completos',
      '• Información privada de clientes',
      '• Datos sensibles de tu empresa'
    ],
    order: 7
  },

  // Vista 9: Los 5 Grandes
  {
    id: 'los-5-grandes',
    title: 'Las 5 Plataformas Principales de IA',
    type: SlideType.CARD_GRID,
    description: 'Elige una para conocerla a detalle',
    cards: [
      {
        id: 'chatgpt',
        title: 'ChatGPT',
        description: 'OpenAI',
        icon: '🤖',
        link: 'chatgpt'
      },
      {
        id: 'gemini',
        title: 'Gemini',
        description: 'Google',
        icon: '💎',
        link: 'gemini'
      },
      {
        id: 'claude',
        title: 'Claude',
        description: 'Anthropic',
        icon: '🧠',
        link: 'claude'
      },
      {
        id: 'grok',
        title: 'Grok',
        description: 'X/Twitter',
        icon: '🚀',
        link: 'grok'
      },
      {
        id: 'meta-ai',
        title: 'Meta AI',
        description: 'Meta/Facebook',
        icon: '💬',
        link: 'meta-ai'
      },
      {
        id: 'otras',
        title: 'Otras Herramientas',
        description: 'Herramientas especializadas',
        icon: '🛠️',
        link: 'otras'
      }
    ],
    columns: 3,
    order: 8
  },

  // Vista 10: ChatGPT
  {
    id: 'chatgpt',
    title: 'ChatGPT',
    type: SlideType.RESOURCE,
    platform: 'ChatGPT - Tu Primer Asistente de IA',
    description: 'La herramienta de IA conversacional más popular del mundo',
    resources: [
      {
        type: 'web',
        label: 'Sitio Web',
        url: 'https://chat.openai.com',
        icon: '🌐'
      },
      {
        type: 'app',
        label: 'App Móvil',
        url: 'https://openai.com/chatgpt/download/',
        icon: '📱'
      }
    ],
    order: 9
  },

  // Vista 11: Gemini
  {
    id: 'gemini',
    title: 'Gemini',
    type: SlideType.RESOURCE,
    platform: 'Gemini - IA de Google',
    description: 'Integrado con el ecosistema de Google',
    resources: [
      {
        type: 'web',
        label: 'Gemini Web',
        url: 'https://gemini.google.com',
        icon: '🌐'
      },
      {
        type: 'tool',
        label: 'NotebookLM',
        url: 'https://notebooklm.google.com',
        icon: '📓'
      },
      {
        type: 'tool',
        label: 'Veo 3.1 (Video IA)',
        url: 'https://aistudio.google.com',
        icon: '🎬'
      }
    ],
    features: [
      'Vinculado a tu cuenta de Google',
      'NotebookLM: Analiza documentos y crea podcasts de IA',
      'Veo 3.1: Generación de video con IA'
    ],
    order: 10
  },

  // Vista 12: Claude
  {
    id: 'claude',
    title: 'Claude',
    type: SlideType.RESOURCE,
    platform: 'Claude - Anthropic',
    description: 'IA enfocada en conversaciones naturales y análisis profundo',
    resources: [
      {
        type: 'web',
        label: 'Claude Web',
        url: 'https://claude.ai',
        icon: '🌐'
      }
    ],
    features: [
      'Excelente para análisis de documentos largos',
      'Muy bueno para código',
      'Conversaciones más naturales'
    ],
    order: 11
  },

  // Vista 13: Grok
  {
    id: 'grok',
    title: 'Grok',
    type: SlideType.RESOURCE,
    platform: 'Grok - X/Twitter',
    description: 'IA con acceso a información en tiempo real de Twitter/X',
    resources: [
      {
        type: 'web',
        label: 'Grok en X',
        url: 'https://x.com',
        icon: '🌐'
      }
    ],
    features: [
      'Requiere cuenta de X (Twitter)',
      'Acceso a información en tiempo real de Twitter/X',
      'Útil para tendencias y noticias actuales'
    ],
    order: 12
  },

  // Vista 14: Meta AI
  {
    id: 'meta-ai',
    title: 'Meta AI',
    type: SlideType.RESOURCE,
    platform: 'Meta AI - Facebook/WhatsApp/Instagram',
    description: 'Integrado donde ya están tus clientes',
    resources: [
      {
        type: 'web',
        label: 'Meta AI Web',
        url: 'https://www.meta.ai',
        icon: '🌐'
      }
    ],
    features: [
      'Integrado en WhatsApp, Facebook e Instagram',
      'No requiere instalación adicional',
      'Ya está donde tus clientes están',
      'Fácil acceso desde mensajería'
    ],
    order: 13
  },

  // Vista 15: Otras Herramientas
  {
    id: 'otras',
    title: 'Otras Herramientas Útiles',
    type: SlideType.CARD_GRID,
    description: 'Herramientas especializadas para casos de uso específicos',
    cards: [
      {
        id: 'elevenlabs',
        title: 'ElevenLabs',
        description: 'Generación de voz con IA',
        icon: '🎤',
        link: 'https://elevenlabs.io'
      },
      {
        id: 'huggingface',
        title: 'HuggingFace',
        description: 'Plataforma con miles de modelos de IA',
        icon: '🤗',
        link: 'https://huggingface.co'
      },
      {
        id: 'ollama',
        title: 'Ollama',
        description: 'IA que funciona en tu computadora (sin internet)',
        icon: '💻',
        link: 'https://ollama.ai'
      }
    ],
    columns: 3,
    order: 14
  },

  // Vista 16: Cierre / CTA
  {
    id: 'cierre',
    title: 'El Futuro está en tus Manos',
    type: SlideType.CTA,
    message: [
      'La digitalización está en la palma de tu mano.',
      '',
      'Y si te atoras, yo te enseño.',
      '',
      'Porque no es solo tu negocio.',
      'Es México el que necesita crecer.'
    ],
    contactInfo: {
      name: 'Anuar Barrera',
      company: 'Tu Socio Tecnológico',
      website: 'https://www.anuarbarrera.dev',
      email: 'contacto@anuarbarrera.dev'
    },
    ctaButtons: [
      {
        label: 'Contáctame',
        action: 'contact',
        variant: 'primary'
      },
      {
        label: 'Volver al inicio',
        action: 'restart',
        variant: 'secondary'
      }
    ],
    order: 15
  }
]
