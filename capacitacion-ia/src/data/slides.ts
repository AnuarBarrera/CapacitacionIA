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
    customBullets: [
      {
        text: 'Todo el contenido que ha generado la humanidad se organizó en una base de datos gigante',
        keyword: 'Base de datos',
        svgContent: `<svg viewBox="0 0 200 160" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" style="stop-color:#4a5ba5;stop-opacity:1" />
              <stop offset="100%" style="stop-color:#3b4a8f;stop-opacity:1" />
            </linearGradient>
          </defs>
          <!-- Base de datos 3D (más pequeña) -->
          <!-- Nivel 1 (superior) -->
          <ellipse cx="100" cy="30" rx="50" ry="12" fill="url(#grad1)" opacity="0.8"/>
          <rect x="50" y="30" width="100" height="20" fill="url(#grad1)" opacity="0.9"/>
          <ellipse cx="100" cy="50" rx="50" ry="12" fill="url(#grad1)"/>

          <!-- Nivel 2 -->
          <ellipse cx="100" cy="65" rx="50" ry="12" fill="url(#grad1)" opacity="0.8"/>
          <rect x="50" y="65" width="100" height="20" fill="url(#grad1)" opacity="0.9"/>
          <ellipse cx="100" cy="85" rx="50" ry="12" fill="url(#grad1)"/>

          <!-- Nivel 3 (inferior) -->
          <ellipse cx="100" cy="100" rx="50" ry="12" fill="url(#grad1)" opacity="0.8"/>
          <rect x="50" y="100" width="100" height="20" fill="url(#grad1)" opacity="0.9"/>
          <ellipse cx="100" cy="120" rx="50" ry="12" fill="url(#grad1)"/>

          <!-- Puntos de datos -->
          <circle cx="85" cy="40" r="2.5" fill="#fff" opacity="0.8">
            <animate attributeName="opacity" values="0.8;0.3;0.8" dur="2s" repeatCount="indefinite"/>
          </circle>
          <circle cx="100" cy="40" r="2.5" fill="#fff" opacity="0.8">
            <animate attributeName="opacity" values="0.8;0.3;0.8" dur="2s" begin="0.3s" repeatCount="indefinite"/>
          </circle>
          <circle cx="115" cy="40" r="2.5" fill="#fff" opacity="0.8">
            <animate attributeName="opacity" values="0.8;0.3;0.8" dur="2s" begin="0.6s" repeatCount="indefinite"/>
          </circle>

          <circle cx="75" cy="75" r="2.5" fill="#fff" opacity="0.8">
            <animate attributeName="opacity" values="0.8;0.3;0.8" dur="2s" begin="0.9s" repeatCount="indefinite"/>
          </circle>
          <circle cx="90" cy="75" r="2.5" fill="#fff" opacity="0.8">
            <animate attributeName="opacity" values="0.8;0.3;0.8" dur="2s" begin="1.2s" repeatCount="indefinite"/>
          </circle>
          <circle cx="110" cy="75" r="2.5" fill="#fff" opacity="0.8">
            <animate attributeName="opacity" values="0.8;0.3;0.8" dur="2s" begin="1.5s" repeatCount="indefinite"/>
          </circle>
          <circle cx="125" cy="75" r="2.5" fill="#fff" opacity="0.8">
            <animate attributeName="opacity" values="0.8;0.3;0.8" dur="2s" begin="1.8s" repeatCount="indefinite"/>
          </circle>

          <circle cx="80" cy="110" r="2.5" fill="#fff" opacity="0.8">
            <animate attributeName="opacity" values="0.8;0.3;0.8" dur="2s" begin="0.5s" repeatCount="indefinite"/>
          </circle>
          <circle cx="95" cy="110" r="2.5" fill="#fff" opacity="0.8">
            <animate attributeName="opacity" values="0.8;0.3;0.8" dur="2s" begin="1s" repeatCount="indefinite"/>
          </circle>
          <circle cx="110" cy="110" r="2.5" fill="#fff" opacity="0.8">
            <animate attributeName="opacity" values="0.8;0.3;0.8" dur="2s" begin="1.4s" repeatCount="indefinite"/>
          </circle>
        </svg>`
      },
      {
        text: 'Con matemáticas, cada palabra (técnicamente llamada "token") recibió una posición específica',
        keyword: 'Matemáticas',
        svgContent: `<svg viewBox="0 0 250 140" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <style>
              .vec-text { fill: #4a5ba5; font-family: 'Times New Roman', serif; font-style: italic; }
              .vec-large { font-size: 20px; }
              .vec-small { font-size: 16px; }
              .vec-label { fill: #495057; font-family: 'Inter', sans-serif; font-size: 12px; }
            </style>
          </defs>

          <!-- Fórmula de vectores: v⃗ = (x, y) -->
          <text x="10" y="25" class="vec-text vec-large">v⃗ = (x, y)</text>

          <!-- Representación visual de vector -->
          <!-- Sistema de coordenadas -->
          <line x1="20" y1="110" x2="180" y2="110" stroke="#adb5bd" stroke-width="2"/>
          <line x1="20" y1="110" x2="20" y2="50" stroke="#adb5bd" stroke-width="2"/>

          <!-- Etiquetas de ejes -->
          <text x="185" y="115" class="vec-label">x</text>
          <text x="10" y="45" class="vec-label">y</text>

          <!-- Vector animado -->
          <g id="vector">
            <line x1="20" y1="110" x2="140" y2="70" stroke="#4a5ba5" stroke-width="3" marker-end="url(#arrowhead)">
              <animate attributeName="x2" values="140;150;140" dur="2s" repeatCount="indefinite"/>
              <animate attributeName="y2" values="70;65;70" dur="2s" repeatCount="indefinite"/>
            </line>

            <!-- Flecha del vector -->
            <defs>
              <marker id="arrowhead" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto">
                <polygon points="0 0, 10 3, 0 6" fill="#4a5ba5"/>
              </marker>
            </defs>

            <!-- Líneas punteadas a los ejes -->
            <line x1="140" y1="110" x2="140" y2="70" stroke="#ff6b6b" stroke-width="1" stroke-dasharray="3,3" opacity="0.5">
              <animate attributeName="x1" values="140;150;140" dur="2s" repeatCount="indefinite"/>
              <animate attributeName="x2" values="140;150;140" dur="2s" repeatCount="indefinite"/>
              <animate attributeName="y2" values="70;65;70" dur="2s" repeatCount="indefinite"/>
            </line>
            <line x1="20" y1="70" x2="140" y2="70" stroke="#ff6b6b" stroke-width="1" stroke-dasharray="3,3" opacity="0.5">
              <animate attributeName="x2" values="140;150;140" dur="2s" repeatCount="indefinite"/>
              <animate attributeName="y1" values="70;65;70" dur="2s" repeatCount="indefinite"/>
              <animate attributeName="y2" values="70;65;70" dur="2s" repeatCount="indefinite"/>
            </line>

            <!-- Componentes del vector -->
            <text x="75" y="125" class="vec-text vec-small" fill="#ff6b6b">x</text>
            <text x="5" y="90" class="vec-text vec-small" fill="#ff6b6b">y</text>

            <!-- Etiqueta del vector -->
            <text x="85" y="80" class="vec-text vec-small" fill="#4a5ba5" font-weight="bold">v⃗</text>
          </g>

          <!-- Puntos decorativos animados -->
          <circle cx="200" cy="20" r="3" fill="#ff6b6b" opacity="0.7">
            <animate attributeName="r" values="3;5;3" dur="2s" repeatCount="indefinite"/>
          </circle>
          <circle cx="215" cy="35" r="3" fill="#4a5ba5" opacity="0.7">
            <animate attributeName="r" values="3;5;3" dur="2s" begin="0.5s" repeatCount="indefinite"/>
          </circle>
          <circle cx="230" cy="50" r="3" fill="#ff6b6b" opacity="0.7">
            <animate attributeName="r" values="3;5;3" dur="2s" begin="1s" repeatCount="indefinite"/>
          </circle>
        </svg>`
      },
      {
        text: 'El LLM predice cuál es la siguiente palabra más probable según tu mensaje (prompt)',
        keyword: 'Predicción',
        svgContent: `<svg viewBox="0 0 400 150" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <style>
              .pred-text { fill: #343a40; font-family: 'Inter', sans-serif; font-size: 18px; font-weight: 600; }
              .pred-word { fill: #4a5ba5; font-size: 20px; font-weight: 700; }
              .pred-percent { fill: #ff6b6b; font-size: 16px; font-weight: 600; }
              .dots { fill: #adb5bd; }
            </style>
          </defs>

          <!-- Texto base -->
          <text x="20" y="35" class="pred-text">El perro ladra y el gato</text>

          <!-- Tres puntos -->
          <text x="240" y="35" class="dots">...</text>

          <!-- Palabra que cambia (animación con opacidad) -->
          <g id="word1">
            <text x="270" y="35" class="pred-word">maulla</text>
            <animate attributeName="opacity" values="1;1;1;1;0;0;0;0;0;0;0;0" dur="9s" repeatCount="indefinite"/>
          </g>
          <g id="word2">
            <text x="270" y="35" class="pred-word">come</text>
            <animate attributeName="opacity" values="0;0;0;0;1;1;1;1;0;0;0;0" dur="9s" repeatCount="indefinite"/>
          </g>
          <g id="word3">
            <text x="270" y="35" class="pred-word">corre</text>
            <animate attributeName="opacity" values="0;0;0;0;0;0;0;0;1;1;1;1" dur="9s" repeatCount="indefinite"/>
          </g>

          <!-- Barra de probabilidades -->
          <text x="20" y="80" class="pred-text" font-size="14px">Probabilidades:</text>

          <!-- Barra 1: maulla 80% -->
          <g id="bar1">
            <rect x="20" y="90" width="240" height="15" fill="#4a5ba5" rx="3">
              <animate attributeName="opacity" values="1;1;1;1;0.3;0.3;0.3;0.3;0.3;0.3;0.3;0.3" dur="9s" repeatCount="indefinite"/>
            </rect>
            <text x="270" y="102" class="pred-percent">80%</text>
            <text x="310" y="102" class="pred-text" font-size="14px">maulla</text>
            <animate attributeName="opacity" values="1;1;1;1;0.3;0.3;0.3;0.3;0.3;0.3;0.3;0.3" dur="9s" repeatCount="indefinite"/>
          </g>

          <!-- Barra 2: come 10% -->
          <g id="bar2">
            <rect x="20" y="112" width="30" height="15" fill="#ff8787" rx="3">
              <animate attributeName="opacity" values="0.3;0.3;0.3;0.3;1;1;1;1;0.3;0.3;0.3;0.3" dur="9s" repeatCount="indefinite"/>
              <animate attributeName="width" values="30;30;30;30;240;240;240;240;30;30;30;30" dur="9s" repeatCount="indefinite"/>
            </rect>
            <text x="270" y="124" class="pred-percent">10%</text>
            <text x="310" y="124" class="pred-text" font-size="14px">come</text>
            <g>
              <animate attributeName="opacity" values="0.3;0.3;0.3;0.3;1;1;1;1;0.3;0.3;0.3;0.3" dur="9s" repeatCount="indefinite"/>
              <animate attributeName="transform" values="translate(0,0);translate(0,0);translate(0,0);translate(0,0);translate(0,0);translate(0,0);translate(0,0);translate(0,0);translate(0,0);translate(0,0);translate(0,0);translate(0,0)" dur="9s" repeatCount="indefinite"/>
            </g>
          </g>

          <!-- Barra 3: corre 10% -->
          <g id="bar3">
            <rect x="20" y="134" width="30" height="15" fill="#ff8787" rx="3">
              <animate attributeName="opacity" values="0.3;0.3;0.3;0.3;0.3;0.3;0.3;0.3;1;1;1;1" dur="9s" repeatCount="indefinite"/>
              <animate attributeName="width" values="30;30;30;30;30;30;30;30;240;240;240;240" dur="9s" repeatCount="indefinite"/>
            </rect>
            <text x="270" y="146" class="pred-percent">10%</text>
            <text x="310" y="146" class="pred-text" font-size="14px">corre</text>
            <animate attributeName="opacity" values="0.3;0.3;0.3;0.3;0.3;0.3;0.3;0.3;1;1;1;1" dur="9s" repeatCount="indefinite"/>
          </g>
        </svg>`
      },
      {
        text: 'Entre mejor entrenado esté el modelo, mejor predice',
        keyword: 'Entrenamiento',
        svgContent: `<svg viewBox="0 0 300 200" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <style>
              .axis { stroke: #adb5bd; stroke-width: 2; }
              .axis-label { fill: #495057; font-family: 'Inter', sans-serif; font-size: 12px; }
              .line-bad { stroke: #ff6b6b; stroke-width: 3; fill: none; }
              .line-good { stroke: #51cf66; stroke-width: 3; fill: none; }
            </style>
          </defs>

          <!-- Ejes -->
          <line x1="40" y1="160" x2="260" y2="160" class="axis"/>
          <line x1="40" y1="160" x2="40" y2="40" class="axis"/>

          <!-- Etiquetas -->
          <text x="130" y="185" class="axis-label">Tiempo de entrenamiento</text>
          <text x="5" y="105" class="axis-label" transform="rotate(-90 15 105)">Precisión</text>

          <!-- Línea mala (ondulante) - estado inicial -->
          <g id="bad-line">
            <path d="M 50 140 Q 80 135 100 145 T 150 140 T 200 150 T 250 145" class="line-bad" opacity="0.4">
              <animate attributeName="opacity" values="1;1;1;0.3" dur="4s" repeatCount="indefinite"/>
            </path>
            <text x="200" y="130" fill="#ff6b6b" font-size="14px" font-weight="600">
              Sin entrenar
              <animate attributeName="opacity" values="1;1;1;0.3" dur="4s" repeatCount="indefinite"/>
            </text>
          </g>

          <!-- Línea buena (suave y ascendente) - estado final -->
          <g id="good-line">
            <path d="M 50 140" class="line-good">
              <animate attributeName="d"
                values="M 50 140;M 50 140 L 100 110 L 150 80 L 200 60 L 250 50;M 50 140 L 100 110 L 150 80 L 200 60 L 250 50;M 50 140 L 100 110 L 150 80 L 200 60 L 250 50"
                dur="4s"
                repeatCount="indefinite"/>
              <animate attributeName="opacity" values="0.3;1;1;1" dur="4s" repeatCount="indefinite"/>
            </path>
            <text x="180" y="45" fill="#51cf66" font-size="14px" font-weight="600">
              Bien entrenado
              <animate attributeName="opacity" values="0.3;1;1;1" dur="4s" repeatCount="indefinite"/>
            </text>
          </g>

          <!-- Puntos de datos que aparecen progresivamente -->
          <circle cx="100" cy="110" r="4" fill="#4a5ba5" opacity="0">
            <animate attributeName="opacity" values="0;0;1;1" dur="4s" repeatCount="indefinite"/>
          </circle>
          <circle cx="150" cy="80" r="4" fill="#4a5ba5" opacity="0">
            <animate attributeName="opacity" values="0;0;0.5;1;1" dur="4s" repeatCount="indefinite"/>
          </circle>
          <circle cx="200" cy="60" r="4" fill="#4a5ba5" opacity="0">
            <animate attributeName="opacity" values="0;0;0;0.5;1;1" dur="4s" repeatCount="indefinite"/>
          </circle>
          <circle cx="250" cy="50" r="4" fill="#4a5ba5" opacity="0">
            <animate attributeName="opacity" values="0;0;0;0;0.5;1" dur="4s" repeatCount="indefinite"/>
          </circle>
        </svg>`
      },
      {
        text: '💡 La IA no es magia, es matemáticas. No es inteligente, solo predice la siguiente palabra de forma tan convincente porque fue muy bien entrenada.',
        keyword: 'Magia',
        svgContent: `<svg viewBox="0 0 400 200" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <style>
              .icon-title { fill: #495057; font-family: 'Inter', sans-serif; font-size: 14px; font-weight: 600; }
            </style>
          </defs>

          <!-- Robot (NO es IA) -->
          <g transform="translate(50, 60)">
            <!-- Cabeza del robot -->
            <rect x="20" y="10" width="40" height="40" rx="5" fill="#adb5bd" stroke="#495057" stroke-width="2"/>
            <!-- Ojos -->
            <circle cx="30" cy="25" r="4" fill="#495057"/>
            <circle cx="50" cy="25" r="4" fill="#495057"/>
            <!-- Boca triste -->
            <path d="M 30 38 Q 40 35 50 38" stroke="#495057" stroke-width="2" fill="none"/>
            <!-- Cuerpo -->
            <rect x="25" y="52" width="30" height="35" rx="3" fill="#adb5bd" stroke="#495057" stroke-width="2"/>
            <!-- Brazos -->
            <rect x="10" y="60" width="13" height="20" rx="2" fill="#adb5bd" stroke="#495057" stroke-width="2"/>
            <rect x="57" y="60" width="13" height="20" rx="2" fill="#adb5bd" stroke="#495057" stroke-width="2"/>
            <!-- X roja grande -->
            <line x1="0" y1="0" x2="80" y2="100" stroke="#ff6b6b" stroke-width="8" opacity="0.8"/>
            <line x1="80" y1="0" x2="0" y2="100" stroke="#ff6b6b" stroke-width="8" opacity="0.8"/>
            <text x="10" y="-5" class="icon-title">Robot ≠ IA</text>
          </g>

          <!-- Flecha -->
          <g transform="translate(180, 110)">
            <line x1="0" y1="0" x2="40" y2="0" stroke="#495057" stroke-width="3"/>
            <polygon points="40,0 30,5 30,-5" fill="#495057"/>
          </g>

          <!-- Herramientas (SÍ es IA) -->
          <g transform="translate(270, 60)">
            <!-- Llave inglesa -->
            <path d="M 15 20 L 15 40 L 20 40 L 20 45 L 25 45 L 25 40 L 30 40 L 30 20 L 27 20 L 27 15 L 18 15 L 18 20 Z"
                  fill="#4a5ba5" stroke="#2d3561" stroke-width="2"/>
            <!-- Destornillador -->
            <rect x="35" y="30" width="5" height="30" fill="#ff6b6b" stroke="#c92a2a" stroke-width="1"/>
            <path d="M 32 28 L 32 32 L 42 32 L 42 28 Z" fill="#868e96"/>
            <circle cx="37.5" cy="25" r="3" fill="#868e96"/>
            <!-- Martillo -->
            <rect x="50" y="40" width="4" height="25" fill="#4a5ba5" stroke="#2d3561" stroke-width="1"/>
            <rect x="45" y="35" width="14" height="8" rx="2" fill="#868e96" stroke="#495057" stroke-width="1"/>

            <!-- Checkmark verde grande (bajado) -->
            <path d="M 10 30 L 25 50 L 60 15" stroke="#51cf66" stroke-width="8" stroke-linecap="round" fill="none" opacity="0.8"/>
            <text x="0" y="-5" class="icon-title">Herramientas = IA</text>
          </g>
        </svg>`
      }
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
