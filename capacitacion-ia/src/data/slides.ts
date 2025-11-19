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

  // Vista 2.5: Menú Principal / Índice
  {
    id: 'menu-principal',
    title: 'Índice de Contenidos',
    type: SlideType.CARD_GRID,
    description: 'Explora los temas de la presentación',
    showContinueButton: false,
    cards: [
      {
        id: 'menu-que-es-ia',
        title: '¿Qué es la IA?',
        description: 'Introducción a la Inteligencia Artificial',
        icon: '🧠',
        link: 'que-es-ia'
      },
      {
        id: 'menu-los-5-grandes',
        title: 'Las 5 Plataformas',
        description: 'Principales plataformas de IA',
        icon: '⭐',
        link: 'los-5-grandes'
      },
      {
        id: 'menu-otras',
        title: 'Otras Herramientas',
        description: 'Herramientas especializadas',
        icon: '🛠️',
        link: 'otras'
      },
      {
        id: 'menu-cierre',
        title: 'Contacto',
        description: 'Comienza tu transformación digital',
        icon: '🚀',
        link: 'cierre'
      }
    ],
    columns: 3,
    order: 1.5
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
        svgContent: `<svg viewBox="0 0 200 130" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" style="stop-color:#4a5ba5;stop-opacity:1" />
              <stop offset="100%" style="stop-color:#3b4a8f;stop-opacity:1" />
            </linearGradient>
          </defs>
          <!-- Base de datos 3D (50% más pequeña) -->
          <!-- Nivel 1 (superior) -->
          <ellipse cx="100" cy="25" rx="35" ry="9" fill="url(#grad1)" opacity="0.8"/>
          <rect x="65" y="25" width="70" height="14" fill="url(#grad1)" opacity="0.9"/>
          <ellipse cx="100" cy="39" rx="35" ry="9" fill="url(#grad1)"/>

          <!-- Nivel 2 -->
          <ellipse cx="100" cy="50" rx="35" ry="9" fill="url(#grad1)" opacity="0.8"/>
          <rect x="65" y="50" width="70" height="14" fill="url(#grad1)" opacity="0.9"/>
          <ellipse cx="100" cy="64" rx="35" ry="9" fill="url(#grad1)"/>

          <!-- Nivel 3 (inferior) -->
          <ellipse cx="100" cy="75" rx="35" ry="9" fill="url(#grad1)" opacity="0.8"/>
          <rect x="65" y="75" width="70" height="14" fill="url(#grad1)" opacity="0.9"/>
          <ellipse cx="100" cy="89" rx="35" ry="9" fill="url(#grad1)"/>

          <!-- Puntos de datos (reducidos proporcionalmente) -->
          <circle cx="88" cy="32" r="2" fill="#fff" opacity="0.8">
            <animate attributeName="opacity" values="0.8;0.3;0.8" dur="2s" repeatCount="indefinite"/>
          </circle>
          <circle cx="100" cy="32" r="2" fill="#fff" opacity="0.8">
            <animate attributeName="opacity" values="0.8;0.3;0.8" dur="2s" begin="0.3s" repeatCount="indefinite"/>
          </circle>
          <circle cx="112" cy="32" r="2" fill="#fff" opacity="0.8">
            <animate attributeName="opacity" values="0.8;0.3;0.8" dur="2s" begin="0.6s" repeatCount="indefinite"/>
          </circle>

          <circle cx="82" cy="57" r="2" fill="#fff" opacity="0.8">
            <animate attributeName="opacity" values="0.8;0.3;0.8" dur="2s" begin="0.9s" repeatCount="indefinite"/>
          </circle>
          <circle cx="93" cy="57" r="2" fill="#fff" opacity="0.8">
            <animate attributeName="opacity" values="0.8;0.3;0.8" dur="2s" begin="1.2s" repeatCount="indefinite"/>
          </circle>
          <circle cx="107" cy="57" r="2" fill="#fff" opacity="0.8">
            <animate attributeName="opacity" values="0.8;0.3;0.8" dur="2s" begin="1.5s" repeatCount="indefinite"/>
          </circle>
          <circle cx="118" cy="57" r="2" fill="#fff" opacity="0.8">
            <animate attributeName="opacity" values="0.8;0.3;0.8" dur="2s" begin="1.8s" repeatCount="indefinite"/>
          </circle>

          <circle cx="87" cy="82" r="2" fill="#fff" opacity="0.8">
            <animate attributeName="opacity" values="0.8;0.3;0.8" dur="2s" begin="0.5s" repeatCount="indefinite"/>
          </circle>
          <circle cx="97" cy="82" r="2" fill="#fff" opacity="0.8">
            <animate attributeName="opacity" values="0.8;0.3;0.8" dur="2s" begin="1s" repeatCount="indefinite"/>
          </circle>
          <circle cx="107" cy="82" r="2" fill="#fff" opacity="0.8">
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
        text: 'La IA no es magia, son matemáticas. No es inteligente, solo predice la siguiente palabra de forma tan convincente porque fue muy bien entrenada.',
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
    content: 'Las aplicaciones de Inteligencia Artificial (como ChatGPT) son "Agentes de IA". Esto significa que el LLM analiza tu mensaje y hace lo necesario (como pedirte mas informacion) para cumplirlo. Entre otras cosas',
    customBullets: [
      {
        text: 'Un agente es el sistema que ejecuta las acciones necesarias para cumplir tu solicitud. No solo responde, sino que puede realizar múltiples tareas, pedir más información, o usar herramientas para darte el mejor resultado.',
        keyword: '¿Qué es un agente?',
        iconContent: `<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 2C11.5 2 11 2.19 10.59 2.59L2.59 10.59C1.8 11.37 1.8 12.63 2.59 13.41L10.59 21.41C11.37 22.2 12.63 22.2 13.41 21.41L21.41 13.41C22.2 12.63 22.2 11.37 21.41 10.59L13.41 2.59C13 2.19 12.5 2 12 2Z" fill="currentColor" opacity="0.3"/>
          <circle cx="12" cy="9" r="2.5" fill="currentColor"/>
          <path d="M12 12.5C9.5 12.5 7.5 14 7.5 16V17H16.5V16C16.5 14 14.5 12.5 12 12.5Z" fill="currentColor"/>
          <circle cx="7" cy="12" r="1.5" fill="currentColor" opacity="0.6">
            <animate attributeName="opacity" values="0.6;1;0.6" dur="2s" repeatCount="indefinite"/>
          </circle>
          <circle cx="17" cy="12" r="1.5" fill="currentColor" opacity="0.6">
            <animate attributeName="opacity" values="0.6;1;0.6" dur="2s" begin="0.5s" repeatCount="indefinite"/>
          </circle>
        </svg>`,
        svgContent: `<svg viewBox="0 0 300 200" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <style>
              .agent-text { fill: #343a40; font-family: 'Inter', sans-serif; font-size: 14px; font-weight: 600; }
              .agent-arrow { stroke: #ff6b6b; stroke-width: 3; fill: none; marker-end: url(#agent-arrow-head); }
            </style>
            <marker id="agent-arrow-head" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto">
              <polygon points="0 0, 10 3, 0 6" fill="#ff6b6b"/>
            </marker>
            <linearGradient id="robotGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" style="stop-color:#4a5ba5;stop-opacity:1" />
              <stop offset="100%" style="stop-color:#3b4a8f;stop-opacity:1" />
            </linearGradient>
          </defs>

          <!-- Robot/Agente central (más pequeño) -->
          <g transform="translate(150, 80)">
            <!-- Antena -->
            <line x1="0" y1="-25" x2="0" y2="-35" stroke="#ff6b6b" stroke-width="2"/>
            <circle cx="0" cy="-35" r="3" fill="#ff6b6b">
              <animate attributeName="opacity" values="1;0.3;1" dur="1.5s" repeatCount="indefinite"/>
            </circle>

            <!-- Cabeza -->
            <rect x="-15" y="-25" width="30" height="25" rx="5" fill="url(#robotGrad)" stroke="#2d3561" stroke-width="2"/>

            <!-- Ojos -->
            <circle cx="-7" cy="-16" r="3" fill="#fff"/>
            <circle cx="7" cy="-16" r="3" fill="#fff"/>
            <circle cx="-7" cy="-16" r="1.5" fill="#2d3561">
              <animate attributeName="cx" values="-7;-6;-7" dur="3s" repeatCount="indefinite"/>
            </circle>
            <circle cx="7" cy="-16" r="1.5" fill="#2d3561">
              <animate attributeName="cx" values="7;8;7" dur="3s" repeatCount="indefinite"/>
            </circle>

            <!-- Boca -->
            <path d="M -8 -6 Q 0 -3 8 -6" stroke="#fff" stroke-width="2" fill="none"/>

            <!-- Cuerpo -->
            <rect x="-12" y="0" width="24" height="22" rx="3" fill="url(#robotGrad)" stroke="#2d3561" stroke-width="2"/>

            <!-- Panel -->
            <circle cx="0" cy="8" r="4" fill="#51cf66" opacity="0.7">
              <animate attributeName="opacity" values="0.7;1;0.7" dur="2s" repeatCount="indefinite"/>
            </circle>

            <!-- Brazos -->
            <rect x="-18" y="3" width="5" height="12" rx="2" fill="#4a5ba5" stroke="#2d3561" stroke-width="1.5"/>
            <rect x="13" y="3" width="5" height="12" rx="2" fill="#4a5ba5" stroke="#2d3561" stroke-width="1.5"/>

            <!-- Piernas -->
            <rect x="-8" y="22" width="6" height="14" rx="2" fill="#4a5ba5" stroke="#2d3561" stroke-width="1.5"/>
            <rect x="2" y="22" width="6" height="14" rx="2" fill="#4a5ba5" stroke="#2d3561" stroke-width="1.5"/>

            <text x="-30" y="50" class="agent-text" font-size="11px">Agente IA</text>
          </g>

          <!-- Tareas alrededor -->
          <!-- Tarea 1: Búsqueda (superior izquierda) - Lupa mejorada con círculo cerrado -->
          <g transform="translate(40, 30)">
            <circle cx="0" cy="0" r="18" fill="#f1f3f5" stroke="#4a5ba5" stroke-width="2"/>
            <!-- Círculo de la lupa COMPLETAMENTE cerrado -->
            <circle cx="-3" cy="-2" r="6" stroke="#4a5ba5" stroke-width="2.5" fill="none"/>
            <!-- Mango de la lupa -->
            <line x1="2" y1="3" x2="7" y2="8" stroke="#4a5ba5" stroke-width="2.5" stroke-linecap="round"/>
            <animate attributeName="opacity" values="0.3;1;0.3" dur="3s" repeatCount="indefinite"/>
          </g>

          <!-- Tarea 2: Procesamiento (superior derecha) -->
          <g transform="translate(260, 40)">
            <circle cx="0" cy="0" r="18" fill="#f1f3f5" stroke="#4a5ba5" stroke-width="2"/>
            <circle cx="-5" cy="-3" r="2" fill="#4a5ba5"/>
            <circle cx="5" cy="-3" r="2" fill="#4a5ba5"/>
            <circle cx="-5" cy="5" r="2" fill="#4a5ba5"/>
            <circle cx="5" cy="5" r="2" fill="#4a5ba5"/>
            <animate attributeName="opacity" values="0.3;1;0.3" dur="3s" begin="1s" repeatCount="indefinite"/>
          </g>

          <!-- Tarea 3: Respuesta (derecha) -->
          <g transform="translate(260, 130)">
            <circle cx="0" cy="0" r="18" fill="#f1f3f5" stroke="#4a5ba5" stroke-width="2"/>
            <path d="M -8 -5 L 8 -5 L 8 5 L 2 5 L 0 10 L -2 5 L -8 5 Z" fill="#4a5ba5"/>
            <animate attributeName="opacity" values="0.3;1;0.3" dur="3s" begin="2s" repeatCount="indefinite"/>
          </g>

          <!-- Tarea 4: Web/Internet (inferior izquierda) - NUEVO -->
          <g transform="translate(40, 150)">
            <circle cx="0" cy="0" r="18" fill="#f1f3f5" stroke="#4a5ba5" stroke-width="2"/>
            <!-- Icono de globo/mundo -->
            <circle cx="0" cy="0" r="8" stroke="#4a5ba5" stroke-width="2" fill="none"/>
            <!-- Líneas del globo -->
            <ellipse cx="0" cy="0" rx="3" ry="8" stroke="#4a5ba5" stroke-width="1.5" fill="none"/>
            <line x1="-8" y1="0" x2="8" y2="0" stroke="#4a5ba5" stroke-width="1.5"/>
            <ellipse cx="0" cy="0" rx="8" ry="3" stroke="#4a5ba5" stroke-width="1.5" fill="none"/>
            <animate attributeName="opacity" values="0.3;1;0.3" dur="3s" begin="1.5s" repeatCount="indefinite"/>
          </g>

          <!-- Flechas conectoras -->
          <path d="M 60 35 L 130 65" class="agent-arrow">
            <animate attributeName="opacity" values="0;1;0" dur="3s" repeatCount="indefinite"/>
          </path>
          <path d="M 240 50 L 180 75" class="agent-arrow">
            <animate attributeName="opacity" values="0;1;0" dur="3s" begin="1s" repeatCount="indefinite"/>
          </path>
          <path d="M 240 120 L 180 100" class="agent-arrow">
            <animate attributeName="opacity" values="0;1;0" dur="3s" begin="2s" repeatCount="indefinite"/>
          </path>
          <path d="M 60 145 L 130 105" class="agent-arrow">
            <animate attributeName="opacity" values="0;1;0" dur="3s" begin="1.5s" repeatCount="indefinite"/>
          </path>
        </svg>`
      },
      {
        text: 'El razonamiento es el proceso donde la IA analiza tu petición ANTES de ejecutarla. Esto significa que examina qué necesitas, evalúa diferentes opciones, y planea los pasos necesarios para darte un mejor resultado y reducir errores. No solo reacciona, sino que piensa estratégicamente.',
        keyword: '¿Que es razonamiento?',
        iconContent: `<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M9 2L9 6M15 2L15 6" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
          <ellipse cx="12" cy="8" rx="6" ry="4" fill="currentColor" opacity="0.3">
            <animate attributeName="opacity" values="0.3;0.6;0.3" dur="2s" repeatCount="indefinite"/>
          </ellipse>
          <path d="M6 8C6 10.2091 8.68629 12 12 12C15.3137 12 18 10.2091 18 8" stroke="currentColor" stroke-width="2"/>
          <rect x="8" y="10" width="8" height="8" rx="1" fill="currentColor" opacity="0.2"/>
          <circle cx="12" cy="14" r="2" fill="currentColor">
            <animate attributeName="r" values="2;2.5;2" dur="1.5s" repeatCount="indefinite"/>
          </circle>
          <path d="M10 18L8 21M14 18L16 21" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
        </svg>`,
        svgContent: `<svg viewBox="0 0 350 180" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <style>
              .think-text { fill: #343a40; font-family: 'Inter', sans-serif; font-size: 12px; font-weight: 600; }
              .think-label { fill: #495057; font-family: 'Inter', sans-serif; font-size: 10px; }
              @media (max-width: 768px) {
                .think-text { font-size: 10px; }
                .think-label { font-size: 8px; }
              }
            </style>
          </defs>

          <!-- Bombilla/Foco de idea (principal) -->
          <g transform="translate(50, 70)">
            <!-- Bombilla principal -->
            <ellipse cx="0" cy="-5" rx="22" ry="28" fill="#ffd43b" stroke="#ff8787" stroke-width="3" opacity="0.9">
              <animate attributeName="opacity" values="0.7;1;0.7" dur="2s" repeatCount="indefinite"/>
            </ellipse>

            <!-- Base de la bombilla -->
            <rect x="-12" y="20" width="24" height="8" fill="#868e96" rx="2"/>
            <rect x="-10" y="28" width="20" height="4" fill="#6c757d" rx="1"/>
            <rect x="-8" y="32" width="16" height="3" fill="#495057" rx="1"/>

            <!-- Filamento interno -->
            <path d="M -8 -5 Q -4 5 0 -5 Q 4 5 8 -5" stroke="#ff8787" stroke-width="2" fill="none" opacity="0.6"/>

            <!-- Rayos de luz -->
            <line x1="-32" y1="-15" x2="-40" y2="-20" stroke="#ffd43b" stroke-width="3" stroke-linecap="round">
              <animate attributeName="opacity" values="0.5;1;0.5" dur="1.5s" repeatCount="indefinite"/>
            </line>
            <line x1="-28" y1="5" x2="-35" y2="10" stroke="#ffd43b" stroke-width="3" stroke-linecap="round">
              <animate attributeName="opacity" values="0.5;1;0.5" dur="1.5s" begin="0.3s" repeatCount="indefinite"/>
            </line>
            <line x1="32" y1="-15" x2="40" y2="-20" stroke="#ffd43b" stroke-width="3" stroke-linecap="round">
              <animate attributeName="opacity" values="0.5;1;0.5" dur="1.5s" begin="0.6s" repeatCount="indefinite"/>
            </line>
            <line x1="28" y1="5" x2="35" y2="10" stroke="#ffd43b" stroke-width="3" stroke-linecap="round">
              <animate attributeName="opacity" values="0.5;1;0.5" dur="1.5s" begin="0.9s" repeatCount="indefinite"/>
            </line>
            <line x1="-2" y1="-38" x2="-2" y2="-48" stroke="#ffd43b" stroke-width="3" stroke-linecap="round">
              <animate attributeName="opacity" values="0.5;1;0.5" dur="1.5s" begin="0.4s" repeatCount="indefinite"/>
            </line>

            <text x="-35" y="55" class="think-text">Análisis</text>
          </g>

          <!-- Proceso de razonamiento -->
          <g transform="translate(160, 30)">
            <!-- Paso 1 -->
            <rect x="0" y="0" width="80" height="30" rx="5" fill="#f1f3f5" stroke="#4a5ba5" stroke-width="2">
              <animate attributeName="stroke" values="#4a5ba5;#ff6b6b;#4a5ba5" dur="4s" repeatCount="indefinite"/>
            </rect>
            <text x="40" y="13" class="think-label" text-anchor="middle">1. Entender</text>
            <text x="40" y="24" class="think-label" text-anchor="middle">petición</text>

            <!-- Flecha -->
            <line x1="40" y1="35" x2="40" y2="50" stroke="#868e96" stroke-width="2" marker-end="url(#arrow1)"/>

            <!-- Paso 2 -->
            <rect x="0" y="55" width="80" height="30" rx="5" fill="#f1f3f5" stroke="#4a5ba5" stroke-width="2">
              <animate attributeName="stroke" values="#4a5ba5;#4a5ba5;#ff6b6b;#4a5ba5" dur="4s" repeatCount="indefinite"/>
            </rect>
            <text x="40" y="68" class="think-label" text-anchor="middle">2. Evaluar</text>
            <text x="40" y="79" class="think-label" text-anchor="middle">opciones</text>

            <!-- Flecha -->
            <line x1="40" y1="90" x2="40" y2="105" stroke="#868e96" stroke-width="2" marker-end="url(#arrow2)"/>

            <!-- Paso 3 -->
            <rect x="0" y="110" width="80" height="30" rx="5" fill="#f1f3f5" stroke="#4a5ba5" stroke-width="2">
              <animate attributeName="stroke" values="#4a5ba5;#4a5ba5;#4a5ba5;#ff6b6b" dur="4s" repeatCount="indefinite"/>
            </rect>
            <text x="40" y="123" class="think-label" text-anchor="middle">3. Planear</text>
            <text x="40" y="134" class="think-label" text-anchor="middle">acción</text>

            <defs>
              <marker id="arrow1" markerWidth="10" markerHeight="10" refX="5" refY="5" orient="auto">
                <polygon points="0 0, 10 5, 0 10" fill="#868e96"/>
              </marker>
              <marker id="arrow2" markerWidth="10" markerHeight="10" refX="5" refY="5" orient="auto">
                <polygon points="0 0, 10 5, 0 10" fill="#868e96"/>
              </marker>
            </defs>
          </g>

          <!-- Resultado (ajustado para móviles) -->
          <g transform="translate(270, 90)">
            <circle cx="20" cy="0" r="25" fill="#51cf66" opacity="0.2">
              <animate attributeName="r" values="25;28;25" dur="2s" repeatCount="indefinite"/>
            </circle>
            <path d="M 5 -5 L 15 8 L 35 -15" stroke="#51cf66" stroke-width="4" stroke-linecap="round" fill="none">
              <animate attributeName="opacity" values="0.5;1;0.5" dur="2s" repeatCount="indefinite"/>
            </path>
            <text x="-5" y="35" class="think-text" font-size="11px">Mejor</text>
            <text x="-10" y="48" class="think-text" font-size="11px">resultado</text>
          </g>
        </svg>`
      }
    ],
    flowDiagram: `<svg viewBox="0 0 700 150" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <style>
          .flow-text { fill: #343a40; font-family: 'Inter', sans-serif; font-size: 16px; font-weight: 600; }
          .flow-label { fill: #495057; font-family: 'Inter', sans-serif; font-size: 12px; }
          .flow-box { fill: #f1f3f5; stroke: #4a5ba5; stroke-width: 3; }
          .flow-arrow { stroke: #ff6b6b; stroke-width: 4; fill: none; marker-end: url(#flow-arrow-head); }
        </style>
        <marker id="flow-arrow-head" markerWidth="12" markerHeight="12" refX="10" refY="6" orient="auto">
          <polygon points="0 0, 12 6, 0 12" fill="#ff6b6b"/>
        </marker>
        <linearGradient id="userGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" style="stop-color:#667eea;stop-opacity:1" />
          <stop offset="100%" style="stop-color:#764ba2;stop-opacity:1" />
        </linearGradient>
        <linearGradient id="aiGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" style="stop-color:#667eea;stop-opacity:1" />
          <stop offset="100%" style="stop-color:#5a67d8;stop-opacity:1" />
        </linearGradient>
      </defs>

      <!-- Usuario -->
      <g transform="translate(30, 50)">
        <circle cx="30" cy="20" r="18" fill="url(#userGrad)"/>
        <circle cx="23" cy="15" r="3" fill="#fff"/>
        <circle cx="37" cy="15" r="3" fill="#fff"/>
        <path d="M 22 26 Q 30 30 38 26" stroke="#fff" stroke-width="2" fill="none"/>
        <text x="5" y="60" class="flow-text">Usuario</text>
      </g>

      <!-- Flecha 1 -->
      <path d="M 95 70 L 160 70" class="flow-arrow">
        <animate attributeName="stroke-dasharray" values="0 300;300 0" dur="2s" repeatCount="indefinite"/>
      </path>

      <!-- Prompt -->
      <g transform="translate(170, 40)">
        <rect x="0" y="0" width="100" height="60" rx="8" class="flow-box">
          <animate attributeName="fill" values="#f1f3f5;#e1e5f1;#f1f3f5" dur="2s" repeatCount="indefinite"/>
        </rect>
        <text x="50" y="25" class="flow-text" text-anchor="middle">Prompt</text>
        <text x="50" y="42" class="flow-label" text-anchor="middle">(Tu mensaje)</text>
      </g>

      <!-- Flecha 2 -->
      <path d="M 280 70 L 330 70" class="flow-arrow">
        <animate attributeName="stroke-dasharray" values="0 300;300 0" dur="2s" begin="0.5s" repeatCount="indefinite"/>
      </path>

      <!-- Razonamiento -->
      <g transform="translate(340, 40)">
        <rect x="0" y="0" width="120" height="60" rx="8" class="flow-box">
          <animate attributeName="fill" values="#f1f3f5;#e1e5f1;#f1f3f5" dur="2s" begin="0.5s" repeatCount="indefinite"/>
        </rect>
        <text x="60" y="25" class="flow-text" text-anchor="middle">Razonamiento</text>
        <text x="60" y="42" class="flow-label" text-anchor="middle">(IA analiza)</text>
        <!-- Icono de engranaje -->
        <g transform="translate(55, -15)">
          <circle cx="0" cy="0" r="8" fill="#4a5ba5" opacity="0.3">
            <animateTransform attributeName="transform" type="rotate" from="0 0 0" to="360 0 0" dur="3s" repeatCount="indefinite"/>
          </circle>
        </g>
      </g>

      <!-- Flecha 3 -->
      <path d="M 470 70 L 520 70" class="flow-arrow">
        <animate attributeName="stroke-dasharray" values="0 300;300 0" dur="2s" begin="1s" repeatCount="indefinite"/>
      </path>

      <!-- Respuesta -->
      <g transform="translate(530, 40)">
        <rect x="0" y="0" width="100" height="60" rx="8" fill="url(#aiGrad)" stroke="#2d3561" stroke-width="3">
          <animate attributeName="opacity" values="0.7;1;0.7" dur="2s" begin="1s" repeatCount="indefinite"/>
        </rect>
        <text x="50" y="25" class="flow-text" text-anchor="middle" fill="#fff">Respuesta</text>
        <text x="50" y="42" class="flow-label" text-anchor="middle" fill="#f1f3f5">(Resultado)</text>
        <!-- Icono de check (movido a esquina superior derecha) -->
        <g transform="translate(88, -8)">
          <circle cx="0" cy="0" r="10" fill="#51cf66">
            <animate attributeName="r" values="10;12;10" dur="2s" begin="1s" repeatCount="indefinite"/>
          </circle>
          <path d="M -4 0 L -1 4 L 5 -4" stroke="#fff" stroke-width="2" stroke-linecap="round" fill="none"/>
        </g>
      </g>
    </svg>`,
    order: 3
  },

  // Vista 5: El Prompt
  {
    id: 'el-prompt',
    title: 'El Prompt',
    type: SlideType.CARD_GRID,
    description: 'El prompt es el mensaje que le mandas a la IA. Aprende a estructurarlo correctamente:',
    cards: [
      {
        id: 'estructura-basica',
        title: 'Estructura Básica',
        icon: `<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="3" y="4" width="18" height="16" rx="2" stroke="currentColor" stroke-width="2" fill="none"/>
          <path d="M3 8h18M8 4v4M16 4v4" stroke="currentColor" stroke-width="2"/>
          <circle cx="7" cy="12" r="1" fill="currentColor">
            <animate attributeName="opacity" values="1;0.3;1" dur="2s" repeatCount="indefinite"/>
          </circle>
          <line x1="9" y1="12" x2="17" y2="12" stroke="currentColor" stroke-width="1.5" opacity="0.6"/>
          <circle cx="7" cy="15" r="1" fill="currentColor">
            <animate attributeName="opacity" values="1;0.3;1" dur="2s" begin="0.5s" repeatCount="indefinite"/>
          </circle>
          <line x1="9" y1="15" x2="17" y2="15" stroke="currentColor" stroke-width="1.5" opacity="0.6"/>
          <circle cx="7" cy="18" r="1" fill="currentColor">
            <animate attributeName="opacity" values="1;0.3;1" dur="2s" begin="1s" repeatCount="indefinite"/>
          </circle>
          <line x1="9" y1="18" x2="14" y2="18" stroke="currentColor" stroke-width="1.5" opacity="0.6"/>
        </svg>`,
        svgContent: `<svg viewBox="0 0 300 200" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <style>
              .prompt-text { fill: #343a40; font-family: 'Inter', sans-serif; font-size: 14px; font-weight: 600; }
              .prompt-label { fill: #495057; font-family: 'Inter', sans-serif; font-size: 12px; }
            </style>
          </defs>

          <!-- QUÉ -->
          <g transform="translate(20, 30)">
            <rect x="0" y="0" width="260" height="40" rx="8" fill="#4a5ba5" opacity="0.2"/>
            <text x="10" y="15" class="prompt-text" fill="#4a5ba5">QUÉ</text>
            <text x="10" y="30" class="prompt-label">Lo que quieres que haga</text>
            <circle cx="250" cy="20" r="4" fill="#4a5ba5">
              <animate attributeName="r" values="4;6;4" dur="2s" repeatCount="indefinite"/>
            </circle>
          </g>

          <!-- CÓMO -->
          <g transform="translate(20, 85)">
            <rect x="0" y="0" width="260" height="40" rx="8" fill="#ff6b6b" opacity="0.2"/>
            <text x="10" y="15" class="prompt-text" fill="#ff6b6b">CÓMO</text>
            <text x="10" y="30" class="prompt-label">Cómo quieres que lo haga</text>
            <circle cx="250" cy="20" r="4" fill="#ff6b6b">
              <animate attributeName="r" values="4;6;4" dur="2s" begin="0.5s" repeatCount="indefinite"/>
            </circle>
          </g>

          <!-- CONTEXTO -->
          <g transform="translate(20, 140)">
            <rect x="0" y="0" width="260" height="40" rx="8" fill="#51cf66" opacity="0.2"/>
            <text x="10" y="15" class="prompt-text" fill="#51cf66">CONTEXTO</text>
            <text x="10" y="30" class="prompt-label">Información necesaria</text>
            <circle cx="250" cy="20" r="4" fill="#51cf66">
              <animate attributeName="r" values="4;6;4" dur="2s" begin="1s" repeatCount="indefinite"/>
            </circle>
          </g>
        </svg>`
      },
      {
        id: 'ejemplo-real',
        title: 'Ejemplo Real: El Poder de la IA',
        icon: `<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="12" cy="12" r="9" stroke="currentColor" stroke-width="2" fill="none"/>
          <path d="M12 6v6l4 2" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
          <circle cx="12" cy="12" r="2" fill="currentColor">
            <animate attributeName="r" values="2;3;2" dur="1.5s" repeatCount="indefinite"/>
          </circle>
          <g opacity="0.6">
            <path d="M12 2v2M12 20v2M2 12h2M20 12h2" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>
            <animateTransform attributeName="transform" type="rotate" from="0 12 12" to="360 12 12" dur="3s" repeatCount="indefinite"/>
          </g>
        </svg>`,
        bullets: [
          'ANTES: Lona para negocio = $500-1,000 o hacerlo mal tú mismo',
          'AHORA CON IA:',
          '  • QUE: Quiero lona para vender pan dulce',
          '  • COMO: estilo épico, inspiración anime, formato horizontal 1.20m',
          '  • CONTEXTO: Con precios desde 10 pesos mexicanos',
          'Resultado: Diseño profesional, gratis, en 5 minutos',
          '✨ ESTO es el poder de la IA'
        ],
        svgContent: `<svg viewBox="0 0 350 250" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <style>
              .example-text { fill: #343a40; font-family: 'Inter', sans-serif; font-size: 13px; font-weight: 600; }
              .example-label { fill: #495057; font-family: 'Inter', sans-serif; font-size: 11px; }
            </style>
            <linearGradient id="beforeGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" style="stop-color:#ff6b6b;stop-opacity:1" />
              <stop offset="100%" style="stop-color:#fa5252;stop-opacity:1" />
            </linearGradient>
            <linearGradient id="afterGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" style="stop-color:#51cf66;stop-opacity:1" />
              <stop offset="100%" style="stop-color:#37b24d;stop-opacity:1" />
            </linearGradient>
          </defs>

          <!-- ANTES -->
          <g transform="translate(20, 20)">
            <rect x="0" y="0" width="140" height="100" rx="8" fill="url(#beforeGrad)" opacity="0.2" stroke="#ff6b6b" stroke-width="2"/>
            <text x="70" y="20" class="example-text" fill="#ff6b6b" text-anchor="middle">ANTES</text>

            <!-- Ícono de dinero -->
            <text x="70" y="55" font-size="30" text-anchor="middle">💸</text>
            <text x="70" y="75" class="example-label" text-anchor="middle">$500-1,000</text>
            <text x="70" y="90" class="example-label" text-anchor="middle" opacity="0.7">o hacerlo mal</text>
          </g>

          <!-- Flecha -->
          <g transform="translate(175, 60)">
            <path d="M 0 0 L 30 0" stroke="#868e96" stroke-width="3" marker-end="url(#arrowEnd)"/>
            <defs>
              <marker id="arrowEnd" markerWidth="10" markerHeight="10" refX="9" refY="5" orient="auto">
                <polygon points="0 0, 10 5, 0 10" fill="#868e96"/>
              </marker>
            </defs>
            <animate attributeName="opacity" values="0.5;1;0.5" dur="2s" repeatCount="indefinite"/>
          </g>

          <!-- AHORA -->
          <g transform="translate(190, 20)">
            <rect x="0" y="0" width="140" height="100" rx="8" fill="url(#afterGrad)" opacity="0.2" stroke="#51cf66" stroke-width="2"/>
            <text x="70" y="20" class="example-text" fill="#51cf66" text-anchor="middle">AHORA</text>

            <!-- Ícono de IA -->
            <text x="70" y="55" font-size="30" text-anchor="middle">✨</text>
            <text x="70" y="75" class="example-label" text-anchor="middle">Gratis</text>
            <text x="70" y="90" class="example-label" text-anchor="middle" opacity="0.7">5 minutos</text>
          </g>

          <!-- Resultado -->
          <g transform="translate(20, 140)">
            <rect x="0" y="0" width="310" height="90" rx="8" fill="#4a5ba5" opacity="0.1" stroke="#4a5ba5" stroke-width="2" stroke-dasharray="5,5">
              <animate attributeName="stroke-dashoffset" values="0;10" dur="2s" repeatCount="indefinite"/>
            </rect>
            <text x="155" y="25" class="example-text" fill="#4a5ba5" text-anchor="middle">El Prompt</text>
            <text x="10" y="45" class="example-label" opacity="0.8">QUE: Lona para pan dulce</text>
            <text x="10" y="60" class="example-label" opacity="0.8">COMO: Estilo épico, anime, 1.20m</text>
            <text x="10" y="75" class="example-label" opacity="0.8">CONTEXTO: Precios desde $10 MXN</text>

            <!-- Checkmark animado -->
            <circle cx="290" cy="60" r="15" fill="#51cf66" opacity="0.3">
              <animate attributeName="r" values="15;18;15" dur="1.5s" repeatCount="indefinite"/>
            </circle>
            <path d="M 283 60 L 287 65 L 297 53" stroke="#51cf66" stroke-width="3" stroke-linecap="round" fill="none"/>
          </g>
        </svg>`
      }
    ],
    flowDiagram: `<svg viewBox="0 0 400 600" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <style>
          .chat-text { fill: #212529; font-family: 'Inter', sans-serif; font-size: 12px; font-weight: 500; }
          .chat-label { fill: #343a40; font-family: 'Inter', sans-serif; font-size: 10px; }
          .user-bubble { fill: #4a5ba5; }
          .ai-bubble { fill: #e9ecef; }
          @media (max-width: 768px) {
            .chat-text { font-size: 10px; }
            .chat-label { font-size: 9px; }
          }
        </style>
        <linearGradient id="phoneGrad" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" style="stop-color:#343a40;stop-opacity:1" />
          <stop offset="100%" style="stop-color:#212529;stop-opacity:1" />
        </linearGradient>
        <linearGradient id="screenGrad" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" style="stop-color:#f8f9fa;stop-opacity:1" />
          <stop offset="100%" style="stop-color:#e9ecef;stop-opacity:1" />
        </linearGradient>
      </defs>

      <!-- Celular -->
      <g transform="translate(100, 50)">
        <!-- Cuerpo del celular -->
        <rect x="0" y="0" width="200" height="400" rx="20" fill="url(#phoneGrad)" stroke="#495057" stroke-width="3"/>

        <!-- Notch -->
        <rect x="70" y="0" width="60" height="15" rx="0 0 8 8" fill="#212529"/>

        <!-- Pantalla -->
        <rect x="10" y="20" width="180" height="360" rx="10" fill="url(#screenGrad)"/>

        <!-- Header del chat -->
        <g>
          <rect x="10" y="20" width="180" height="50" rx="10 10 0 0" fill="#4a5ba5"/>
          <circle cx="30" cy="45" r="12" fill="#fff" opacity="0.9"/>
          <text x="50" y="42" class="chat-text" fill="#fff" font-weight="bold">Asistente IA</text>
          <text x="50" y="55" class="chat-label" fill="#fff" opacity="0.8">En línea</text>
        </g>

        <!-- Área de mensajes -->
        <g transform="translate(15, 80)">
          <!-- Mensaje 1: Usuario -->
          <g opacity="0">
            <rect x="50" y="0" width="120" height="50" rx="10" class="user-bubble"/>
            <text x="60" y="18" class="chat-text" fill="#fff">Quiero crear una</text>
            <text x="60" y="33" class="chat-text" fill="#fff">lona para mi negocio</text>
            <animate attributeName="opacity" values="0;0;1;1;1;1;1;1" dur="8s" repeatCount="indefinite"/>
          </g>

          <!-- Mensaje 2: IA pensando -->
          <g opacity="0">
            <rect x="10" y="60" width="80" height="35" rx="10" class="ai-bubble"/>
            <circle cx="35" cy="77.5" r="3" fill="#4a5ba5">
              <animate attributeName="opacity" values="0.3;1;0.3" dur="1s" repeatCount="indefinite"/>
            </circle>
            <circle cx="50" cy="77.5" r="3" fill="#4a5ba5">
              <animate attributeName="opacity" values="0.3;1;0.3" dur="1s" begin="0.2s" repeatCount="indefinite"/>
            </circle>
            <circle cx="65" cy="77.5" r="3" fill="#4a5ba5">
              <animate attributeName="opacity" values="0.3;1;0.3" dur="1s" begin="0.4s" repeatCount="indefinite"/>
            </circle>
            <animate attributeName="opacity" values="0;0;0;1;1;0;0;0" dur="8s" repeatCount="indefinite"/>
          </g>

          <!-- Mensaje 3: IA responde -->
          <g opacity="0">
            <rect x="10" y="105" width="160" height="95" rx="10" class="ai-bubble"/>
            <text x="20" y="122" class="chat-text">¡Claro! Para ayudarte</text>
            <text x="20" y="137" class="chat-text">mejor, necesito saber:</text>
            <text x="20" y="157" class="chat-label" opacity="0.8">• ¿Qué vendes?</text>
            <text x="20" y="172" class="chat-label" opacity="0.8">• ¿Qué estilo prefieres?</text>
            <text x="20" y="187" class="chat-label" opacity="0.8">• ¿Qué tamaño necesitas?</text>
            <animate attributeName="opacity" values="0;0;0;0;0;1;1;1" dur="8s" repeatCount="indefinite"/>
          </g>

          <!-- Mensaje 4: Usuario responde -->
          <g opacity="0">
            <rect x="10" y="210" width="160" height="80" rx="10" class="user-bubble"/>
            <text x="20" y="227" class="chat-text" fill="#fff">Vendo pan dulce.</text>
            <text x="20" y="242" class="chat-text" fill="#fff">Estilo épico, anime.</text>
            <text x="20" y="257" class="chat-text" fill="#fff">1.20m horizontal.</text>
            <text x="20" y="272" class="chat-text" fill="#fff">Precios desde $10</text>
            <animate attributeName="opacity" values="0;0;0;0;0;0;0;1" dur="8s" repeatCount="indefinite"/>
          </g>
        </g>

        <!-- Input area -->
        <g>
          <rect x="15" y="355" width="140" height="20" rx="10" fill="#fff" stroke="#dee2e6" stroke-width="1"/>
          <text x="22" y="368" class="chat-label" opacity="0.5">Escribe un mensaje...</text>

          <!-- Botón enviar -->
          <circle cx="170" cy="365" r="10" fill="#4a5ba5">
            <animate attributeName="r" values="10;11;10" dur="2s" repeatCount="indefinite"/>
          </circle>
          <path d="M 167 365 L 173 365 L 170 361 Z" fill="#fff" transform="rotate(90 170 365)"/>
        </g>

        <!-- Botón home -->
        <circle cx="100" cy="395" r="3" fill="#fff" opacity="0.6"/>
      </g>

      <!-- Indicadores de animación -->
      <g transform="translate(50, 480)">
        <circle cx="0" cy="0" r="5" fill="#4a5ba5" opacity="0.3">
          <animate attributeName="opacity" values="0.3;1;0.3" dur="8s" repeatCount="indefinite"/>
        </circle>
        <circle cx="20" cy="0" r="5" fill="#4a5ba5" opacity="0.3">
          <animate attributeName="opacity" values="0.3;1;0.3" dur="8s" begin="2s" repeatCount="indefinite"/>
        </circle>
        <circle cx="40" cy="0" r="5" fill="#4a5ba5" opacity="0.3">
          <animate attributeName="opacity" values="0.3;1;0.3" dur="8s" begin="4s" repeatCount="indefinite"/>
        </circle>
        <circle cx="60" cy="0" r="5" fill="#4a5ba5" opacity="0.3">
          <animate attributeName="opacity" values="0.3;1;0.3" dur="8s" begin="6s" repeatCount="indefinite"/>
        </circle>
      </g>

      <!-- Etiquetas descriptivas -->
      <g transform="translate(20, 520)">
        <text x="0" y="0" class="chat-label" opacity="0.7">
          <tspan x="0" dy="0">El usuario hace una pregunta</tspan>
          <tspan x="0" dy="18">La IA analiza y pide contexto</tspan>
          <tspan x="0" dy="18">El usuario da detalles específicos</tspan>
          <tspan x="0" dy="18">La IA genera el diseño perfecto ✨</tspan>
        </text>
      </g>
    </svg>`,
    columns: 1,
    order: 4
  },

  // Vista 6: Prompt Engineering
  {
    id: 'prompt-engineering',
    title: 'Prompt Engineering',
    type: SlideType.CARD_GRID,
    description: 'Estrategias para mejorar el prompt que le compartes a la IA y obtener mejores respuestas.',
    cards: [
      {
        id: 'especifico',
        title: 'Sé específico',
        icon: `<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M9 11l3 3L22 4" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          <path d="M21 12v7a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2h11" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          <circle cx="12" cy="12" r="1.5" fill="currentColor">
            <animate attributeName="r" values="1.5;2;1.5" dur="2s" repeatCount="indefinite"/>
          </circle>
        </svg>`,
        bullets: [
          'Entre más detalles, mejor resultado',
          'Especifica colores, tamaños, estilos',
          'Menciona el tono que deseas (formal, casual, técnico)',
          'Indica la audiencia objetivo'
        ],
        svgContent: `<svg viewBox="0 0 300 200" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <style>
              .spec-text { fill: #343a40; font-family: 'Inter', sans-serif; font-size: 12px; font-weight: 500; }
              .spec-label { fill: #495057; font-family: 'Inter', sans-serif; font-size: 10px; }
            </style>
          </defs>

          <!-- Malo (vago) -->
          <g transform="translate(20, 30)">
            <rect x="0" y="0" width="120" height="80" rx="8" fill="#ff6b6b" opacity="0.2" stroke="#ff6b6b" stroke-width="2"/>
            <text x="60" y="20" class="spec-text" fill="#ff6b6b" text-anchor="middle" font-weight="bold">❌ Vago</text>
            <text x="10" y="40" class="spec-label">"Diseña un logo"</text>
            <text x="10" y="60" class="spec-label" opacity="0.6">Sin detalles</text>
            <text x="10" y="72" class="spec-label" opacity="0.6">Sin contexto</text>
          </g>

          <!-- Flecha -->
          <g transform="translate(145, 60)">
            <path d="M 0 0 L 25 0" stroke="#868e96" stroke-width="3" marker-end="url(#arrowSpec)"/>
            <defs>
              <marker id="arrowSpec" markerWidth="10" markerHeight="10" refX="9" refY="5" orient="auto">
                <polygon points="0 0, 10 5, 0 10" fill="#868e96"/>
              </marker>
            </defs>
          </g>

          <!-- Bueno (específico) -->
          <g transform="translate(160, 30)">
            <rect x="0" y="0" width="120" height="80" rx="8" fill="#51cf66" opacity="0.2" stroke="#51cf66" stroke-width="2"/>
            <text x="60" y="20" class="spec-text" fill="#51cf66" text-anchor="middle" font-weight="bold">✓ Específico</text>
            <text x="10" y="38" class="spec-label">"Logo minimalista"</text>
            <text x="10" y="50" class="spec-label">Colores: azul/blanco</text>
            <text x="10" y="62" class="spec-label">Para cafetería</text>
            <text x="10" y="74" class="spec-label">Audiencia: jóvenes</text>
          </g>

          <!-- Resultado -->
          <g transform="translate(60, 130)">
            <rect x="0" y="0" width="180" height="50" rx="8" fill="#4a5ba5" opacity="0.1" stroke="#4a5ba5" stroke-width="2" stroke-dasharray="5,5">
              <animate attributeName="stroke-dashoffset" values="0;10" dur="2s" repeatCount="indefinite"/>
            </rect>
            <text x="90" y="25" class="spec-text" fill="#4a5ba5" text-anchor="middle">Resultado 10x mejor</text>
            <circle cx="165" cy="25" r="10" fill="#51cf66" opacity="0.3">
              <animate attributeName="r" values="10;13;10" dur="1.5s" repeatCount="indefinite"/>
            </circle>
            <path d="M 158 25 L 162 30 L 172 18" stroke="#51cf66" stroke-width="2" stroke-linecap="round" fill="none"/>
          </g>
        </svg>`
      },
      {
        id: 'ejemplos',
        title: 'Da ejemplos',
        icon: `<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="3" y="3" width="7" height="7" rx="1" stroke="currentColor" stroke-width="2"/>
          <rect x="14" y="3" width="7" height="7" rx="1" stroke="currentColor" stroke-width="2"/>
          <rect x="3" y="14" width="7" height="7" rx="1" stroke="currentColor" stroke-width="2"/>
          <rect x="14" y="14" width="7" height="7" rx="1" stroke="currentColor" stroke-width="2" fill="currentColor" opacity="0.3">
            <animate attributeName="opacity" values="0.3;0.7;0.3" dur="2s" repeatCount="indefinite"/>
          </rect>
        </svg>`,
        bullets: [
          'Muestra qué quieres con ejemplos concretos',
          'Comparte referencias visuales o de texto',
          'Indica qué te gusta y qué no',
          '"Como esto, pero con [cambio específico]"'
        ],
        svgContent: `<svg viewBox="0 0 300 200" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <style>
              .ex-text { fill: #343a40; font-family: 'Inter', sans-serif; font-size: 11px; font-weight: 500; }
              .ex-label { fill: #495057; font-family: 'Inter', sans-serif; font-size: 9px; }
            </style>
          </defs>

          <!-- Título -->
          <text x="150" y="20" class="ex-text" text-anchor="middle" font-size="13px" font-weight="bold" fill="#4a5ba5">Ejemplos mejoran el resultado</text>

          <!-- Ejemplo 1 -->
          <g transform="translate(30, 40)">
            <rect x="0" y="0" width="60" height="50" rx="5" fill="#e9ecef" stroke="#4a5ba5" stroke-width="2"/>
            <text x="30" y="15" class="ex-label" text-anchor="middle" font-weight="bold">Ejemplo 1</text>
            <rect x="10" y="22" width="40" height="3" rx="1.5" fill="#4a5ba5" opacity="0.6"/>
            <rect x="10" y="30" width="35" height="3" rx="1.5" fill="#4a5ba5" opacity="0.4"/>
            <rect x="10" y="38" width="40" height="3" rx="1.5" fill="#4a5ba5" opacity="0.4"/>
          </g>

          <!-- Ejemplo 2 -->
          <g transform="translate(110, 40)">
            <rect x="0" y="0" width="60" height="50" rx="5" fill="#e9ecef" stroke="#4a5ba5" stroke-width="2"/>
            <text x="30" y="15" class="ex-label" text-anchor="middle" font-weight="bold">Ejemplo 2</text>
            <circle cx="20" cy="30" r="3" fill="#4a5ba5" opacity="0.6"/>
            <circle cx="30" cy="30" r="3" fill="#4a5ba5" opacity="0.6"/>
            <circle cx="40" cy="30" r="3" fill="#4a5ba5" opacity="0.6"/>
            <rect x="15" y="38" width="30" height="3" rx="1.5" fill="#4a5ba5" opacity="0.4"/>
          </g>

          <!-- Ejemplo 3 -->
          <g transform="translate(190, 40)">
            <rect x="0" y="0" width="60" height="50" rx="5" fill="#e9ecef" stroke="#4a5ba5" stroke-width="2"/>
            <text x="30" y="15" class="ex-label" text-anchor="middle" font-weight="bold">Ejemplo 3</text>
            <rect x="10" y="25" width="15" height="15" rx="2" fill="#4a5ba5" opacity="0.5"/>
            <rect x="30" y="25" width="20" height="8" rx="2" fill="#ff6b6b" opacity="0.5"/>
          </g>

          <!-- IA aprende -->
          <g transform="translate(70, 110)">
            <path d="M 10 0 L 80 0 L 75 -5 M 80 0 L 75 5" stroke="#ff6b6b" stroke-width="2" fill="none"/>
            <text x="45" y="15" class="ex-text" text-anchor="middle" fill="#ff6b6b">IA aprende el patrón</text>
          </g>

          <!-- Resultado -->
          <g transform="translate(50, 140)">
            <rect x="0" y="0" width="200" height="45" rx="8" fill="#51cf66" opacity="0.2" stroke="#51cf66" stroke-width="2">
              <animate attributeName="opacity" values="0.2;0.4;0.2" dur="2s" repeatCount="indefinite"/>
            </rect>
            <text x="100" y="18" class="ex-text" text-anchor="middle" font-weight="bold" fill="#51cf66">Resultado personalizado</text>
            <text x="100" y="32" class="ex-label" text-anchor="middle">Basado en tus ejemplos</text>
          </g>
        </svg>`
      },
      {
        id: 'formato',
        title: 'Define el formato',
        icon: `<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="3" y="3" width="18" height="18" rx="2" stroke="currentColor" stroke-width="2"/>
          <line x1="3" y1="9" x2="21" y2="9" stroke="currentColor" stroke-width="2"/>
          <line x1="3" y1="15" x2="21" y2="15" stroke="currentColor" stroke-width="2"/>
          <line x1="9" y1="3" x2="9" y2="21" stroke="currentColor" stroke-width="2"/>
          <circle cx="15" cy="12" r="2" fill="currentColor">
            <animate attributeName="opacity" values="1;0.3;1" dur="2s" repeatCount="indefinite"/>
          </circle>
        </svg>`,
        bullets: [
          'Especifica cómo quieres la respuesta',
          'Lista, tabla, párrafo, puntos, etc.',
          'Define la estructura esperada',
          'Indica longitud (corto, detallado, X palabras)'
        ],
        svgContent: `<svg viewBox="0 0 300 200" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <style>
              .fmt-text { fill: #343a40; font-family: 'Inter', sans-serif; font-size: 11px; font-weight: 500; }
              .fmt-label { fill: #495057; font-family: 'Inter', sans-serif; font-size: 9px; }
            </style>
          </defs>

          <!-- Título -->
          <text x="150" y="20" class="fmt-text" text-anchor="middle" font-size="13px" font-weight="bold" fill="#4a5ba5">Formatos disponibles</text>

          <!-- Lista -->
          <g transform="translate(20, 40)">
            <rect x="0" y="0" width="80" height="60" rx="5" fill="#f8f9fa" stroke="#4a5ba5" stroke-width="1.5"/>
            <text x="40" y="15" class="fmt-label" text-anchor="middle" font-weight="bold" fill="#4a5ba5">Lista</text>
            <circle cx="10" cy="27" r="2" fill="#ff6b6b"/>
            <rect x="15" y="25" width="55" height="2" rx="1" fill="#343a40" opacity="0.6"/>
            <circle cx="10" cy="37" r="2" fill="#ff6b6b"/>
            <rect x="15" y="35" width="50" height="2" rx="1" fill="#343a40" opacity="0.6"/>
            <circle cx="10" cy="47" r="2" fill="#ff6b6b"/>
            <rect x="15" y="45" width="60" height="2" rx="1" fill="#343a40" opacity="0.6"/>
          </g>

          <!-- Tabla -->
          <g transform="translate(110, 40)">
            <rect x="0" y="0" width="80" height="60" rx="5" fill="#f8f9fa" stroke="#4a5ba5" stroke-width="1.5"/>
            <text x="40" y="15" class="fmt-label" text-anchor="middle" font-weight="bold" fill="#4a5ba5">Tabla</text>
            <line x1="5" y1="22" x2="75" y2="22" stroke="#4a5ba5" stroke-width="1"/>
            <line x1="40" y1="20" x2="40" y2="55" stroke="#4a5ba5" stroke-width="1"/>
            <line x1="5" y1="35" x2="75" y2="35" stroke="#4a5ba5" stroke-width="1"/>
            <line x1="5" y1="48" x2="75" y2="48" stroke="#4a5ba5" stroke-width="1"/>
          </g>

          <!-- Párrafo -->
          <g transform="translate(200, 40)">
            <rect x="0" y="0" width="80" height="60" rx="5" fill="#f8f9fa" stroke="#4a5ba5" stroke-width="1.5"/>
            <text x="40" y="15" class="fmt-label" text-anchor="middle" font-weight="bold" fill="#4a5ba5">Párrafo</text>
            <rect x="8" y="22" width="64" height="2" rx="1" fill="#343a40" opacity="0.6"/>
            <rect x="8" y="28" width="60" height="2" rx="1" fill="#343a40" opacity="0.6"/>
            <rect x="8" y="34" width="64" height="2" rx="1" fill="#343a40" opacity="0.6"/>
            <rect x="8" y="40" width="58" height="2" rx="1" fill="#343a40" opacity="0.6"/>
            <rect x="8" y="46" width="64" height="2" rx="1" fill="#343a40" opacity="0.6"/>
            <rect x="8" y="52" width="45" height="2" rx="1" fill="#343a40" opacity="0.6"/>
          </g>

          <!-- JSON con syntax highlighting -->
          <g transform="translate(60, 115)">
            <rect x="0" y="0" width="180" height="60" rx="5" fill="#1e1e1e" stroke="#4a5ba5" stroke-width="2"/>
            <text x="10" y="15" class="fmt-label" fill="#51cf66" font-weight="bold">JSON / Código</text>

            <!-- Línea 1: { -->
            <text x="15" y="28" class="fmt-label" fill="#ffd700" font-family="monospace">{"{"}</text>

            <!-- Línea 2: "nombre": "valor", -->
            <text x="25" y="38" class="fmt-label" font-family="monospace">
              <tspan fill="#61afef">"nombre"</tspan><tspan fill="#abb2bf">: </tspan><tspan fill="#98c379">"valor"</tspan><tspan fill="#abb2bf">,</tspan>
            </text>

            <!-- Línea 3: "items": [1, 2, 3] -->
            <text x="25" y="48" class="fmt-label" font-family="monospace">
              <tspan fill="#61afef">"items"</tspan><tspan fill="#abb2bf">: [</tspan><tspan fill="#d19a66">1</tspan><tspan fill="#abb2bf">, </tspan><tspan fill="#d19a66">2</tspan><tspan fill="#abb2bf">, </tspan><tspan fill="#d19a66">3</tspan><tspan fill="#abb2bf">]</tspan>
            </text>

            <!-- Línea 4: } -->
            <text x="15" y="58" class="fmt-label" fill="#ffd700" font-family="monospace">{"}"}</text>
          </g>
        </svg>`
      },
      {
        id: 'insiste',
        title: 'Insiste y ajusta',
        icon: `<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M21 12c0 4.97-4.03 9-9 9s-9-4.03-9-9 4.03-9 9-9" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
          <path d="M12 3l3 3-3 3" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <animateTransform attributeName="transform" type="rotate" from="0 12 12" to="360 12 12" dur="3s" repeatCount="indefinite"/>
          </path>
        </svg>`,
        bullets: [
          'Si no sale bien a la primera, ajusta y vuelve a intentar',
          'Refina el prompt con más detalles',
          'Pide variaciones: "Hazlo más [X]"',
          'La iteración mejora el resultado'
        ],
        svgContent: `<svg viewBox="0 0 300 240" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <style>
              .flow-text { fill: #343a40; font-family: 'Inter', sans-serif; font-size: 10px; font-weight: 600; }
              .flow-label { fill: #495057; font-family: 'Inter', sans-serif; font-size: 9px; }
            </style>
            <marker id="arrowFlow" markerWidth="8" markerHeight="8" refX="7" refY="4" orient="auto">
              <polygon points="0 0, 8 4, 0 8" fill="#4a5ba5"/>
            </marker>
          </defs>

          <!-- Diagrama de flujo vertical -->

          <!-- Paso 1: Intento inicial -->
          <g transform="translate(150, 20)">
            <rect x="-60" y="0" width="120" height="35" rx="5" fill="#ff6b6b" opacity="0.2" stroke="#ff6b6b" stroke-width="2"/>
            <text x="0" y="15" class="flow-text" text-anchor="middle" fill="#ff6b6b">1. Intento inicial</text>
            <text x="0" y="27" class="flow-label" text-anchor="middle">Primer prompt</text>
          </g>

          <!-- Flecha 1 -->
          <line x1="150" y1="55" x2="150" y2="70" stroke="#4a5ba5" stroke-width="2" marker-end="url(#arrowFlow)">
            <animate attributeName="stroke-dasharray" values="0,15;15,0" dur="1.5s" repeatCount="indefinite"/>
          </line>

          <!-- Paso 2: Analiza resultado -->
          <g transform="translate(150, 75)">
            <rect x="-60" y="0" width="120" height="35" rx="5" fill="#ffa500" opacity="0.2" stroke="#ffa500" stroke-width="2"/>
            <text x="0" y="15" class="flow-text" text-anchor="middle" fill="#ffa500">2. Analiza resultado</text>
            <text x="0" y="27" class="flow-label" text-anchor="middle">¿Qué falta?</text>
          </g>

          <!-- Flecha 2 -->
          <line x1="150" y1="110" x2="150" y2="125" stroke="#4a5ba5" stroke-width="2" marker-end="url(#arrowFlow)">
            <animate attributeName="stroke-dasharray" values="0,15;15,0" dur="1.5s" begin="0.3s" repeatCount="indefinite"/>
          </line>

          <!-- Paso 3: Ajusta el prompt -->
          <g transform="translate(150, 130)">
            <rect x="-60" y="0" width="120" height="35" rx="5" fill="#4a90e2" opacity="0.2" stroke="#4a90e2" stroke-width="2"/>
            <text x="0" y="15" class="flow-text" text-anchor="middle" fill="#4a90e2">3. Ajusta el prompt</text>
            <text x="0" y="27" class="flow-label" text-anchor="middle">Refina detalles</text>
          </g>

          <!-- Flecha 3 -->
          <line x1="150" y1="165" x2="150" y2="180" stroke="#4a5ba5" stroke-width="2" marker-end="url(#arrowFlow)">
            <animate attributeName="stroke-dasharray" values="0,15;15,0" dur="1.5s" begin="0.6s" repeatCount="indefinite"/>
          </line>

          <!-- Decisión: ¿Satisfecho? -->
          <g transform="translate(150, 195)">
            <path d="M 0,-15 L 35,0 L 0,15 L -35,0 Z" fill="#e9ecef" stroke="#4a5ba5" stroke-width="2"/>
            <text x="0" y="-3" class="flow-label" text-anchor="middle" font-size="8px">¿Satisfecho?</text>
          </g>

          <!-- Flecha NO (regresa) -->
          <g>
            <path d="M 115 195 L 30 195 L 30 90 L 85 90" stroke="#ff6b6b" stroke-width="2" fill="none" marker-end="url(#arrowFlow)" stroke-dasharray="4,3"/>
            <text x="45" y="192" class="flow-label" fill="#ff6b6b" font-weight="bold">NO</text>
            <circle cx="30" cy="195" r="2" fill="#ff6b6b">
              <animate attributeName="r" values="2;4;2" dur="2s" repeatCount="indefinite"/>
            </circle>
          </g>

          <!-- Flecha SÍ -->
          <line x1="150" y1="210" x2="150" y2="220" stroke="#51cf66" stroke-width="2" marker-end="url(#arrowFlow)"/>
          <text x="160" y="216" class="flow-label" fill="#51cf66" font-weight="bold">SÍ</text>

          <!-- Resultado Final -->
          <g transform="translate(150, 220)">
            <rect x="-50" y="0" width="100" height="30" rx="8" fill="#51cf66" opacity="0.2" stroke="#51cf66" stroke-width="2.5">
              <animate attributeName="opacity" values="0.2;0.4;0.2" dur="2s" repeatCount="indefinite"/>
            </rect>
            <text x="-15" y="20" class="flow-text" text-anchor="middle" fill="#51cf66" font-size="16px">✓</text>
            <text x="15" y="20" class="flow-text" text-anchor="middle" fill="#51cf66">¡Perfecto!</text>
          </g>
        </svg>`
      }
    ],
    columns: 1,
    order: 5
  },

  // Vista 7: Context Engineering
  {
    id: 'context-engineering',
    title: 'Context Engineering',
    type: SlideType.CARD_GRID,
    description: 'Formas y métodos para compartirle contexto a la IA para que entienda mejor tu situación.',
    cards: [
      {
        id: 'subir-archivos',
        title: 'Subir archivos',
        icon: `<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M13 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          <polyline points="13 2 13 9 20 9" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          <path d="M12 12v6" stroke="currentColor" stroke-width="2" stroke-linecap="round">
            <animate attributeName="opacity" values="1;0.3;1" dur="2s" repeatCount="indefinite"/>
          </path>
          <path d="M9 15l3-3 3 3" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <animate attributeName="opacity" values="1;0.3;1" dur="2s" repeatCount="indefinite"/>
          </path>
        </svg>`,
        bullets: [
          'Sube documentos relevantes (PDF, Word, Excel)',
          'Comparte imágenes de referencia o inspiración',
          'Sube capturas de pantalla de tu trabajo',
          'La IA puede leer y analizar el contenido'
        ],
        svgContent: `<svg viewBox="0 0 300 200" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <style>
              .file-text { fill: #343a40; font-family: 'Inter', sans-serif; font-size: 10px; font-weight: 500; }
              .file-label { fill: #495057; font-family: 'Inter', sans-serif; font-size: 8px; }
            </style>
          </defs>

          <!-- Título -->
          <text x="150" y="20" class="file-text" text-anchor="middle" font-size="12px" font-weight="bold" fill="#4a5ba5">Tipos de archivos que puedes compartir</text>

          <!-- Documento PDF -->
          <g transform="translate(40, 40)">
            <rect x="0" y="0" width="50" height="65" rx="3" fill="#ff6b6b" opacity="0.2" stroke="#ff6b6b" stroke-width="2"/>
            <path d="M 35 0 L 50 15 L 35 15 Z" fill="#ff6b6b" opacity="0.2"/>
            <text x="25" y="35" class="file-text" text-anchor="middle" fill="#ff6b6b" font-weight="bold">PDF</text>
            <rect x="8" y="42" width="34" height="2" rx="1" fill="#ff6b6b" opacity="0.5"/>
            <rect x="8" y="48" width="30" height="2" rx="1" fill="#ff6b6b" opacity="0.4"/>
            <rect x="8" y="54" width="34" height="2" rx="1" fill="#ff6b6b" opacity="0.4"/>
            <animate attributeName="opacity" values="1;0.7;1" dur="3s" repeatCount="indefinite"/>
          </g>

          <!-- Imagen -->
          <g transform="translate(110, 40)">
            <rect x="0" y="0" width="50" height="65" rx="3" fill="#4a90e2" opacity="0.2" stroke="#4a90e2" stroke-width="2"/>
            <circle cx="15" cy="20" r="5" fill="#4a90e2" opacity="0.5"/>
            <path d="M 5 45 L 20 30 L 30 40 L 45 25 L 45 55 L 5 55 Z" fill="#4a90e2" opacity="0.4"/>
            <text x="25" y="37" class="file-label" text-anchor="middle" fill="#4a90e2" font-weight="bold">JPG/PNG</text>
            <animate attributeName="opacity" values="1;0.7;1" dur="3s" begin="0.5s" repeatCount="indefinite"/>
          </g>

          <!-- Excel -->
          <g transform="translate(180, 40)">
            <rect x="0" y="0" width="50" height="65" rx="3" fill="#51cf66" opacity="0.2" stroke="#51cf66" stroke-width="2"/>
            <path d="M 35 0 L 50 15 L 35 15 Z" fill="#51cf66" opacity="0.2"/>
            <line x1="8" y1="25" x2="42" y2="25" stroke="#51cf66" stroke-width="1.5"/>
            <line x1="8" y1="35" x2="42" y2="35" stroke="#51cf66" stroke-width="1.5"/>
            <line x1="8" y1="45" x2="42" y2="45" stroke="#51cf66" stroke-width="1.5"/>
            <line x1="25" y1="20" x2="25" y2="55" stroke="#51cf66" stroke-width="1.5"/>
            <text x="25" y="58" class="file-label" text-anchor="middle" fill="#51cf66" font-weight="bold">EXCEL</text>
            <animate attributeName="opacity" values="1;0.7;1" dur="3s" begin="1s" repeatCount="indefinite"/>
          </g>

          <!-- Usuario subiendo -->
          <g transform="translate(50, 125)">
            <!-- Persona -->
            <circle cx="20" cy="15" r="8" fill="#4a5ba5" opacity="0.3"/>
            <path d="M 8 40 Q 8 25 20 25 Q 32 25 32 40 L 28 55 L 12 55 Z" fill="#4a5ba5" opacity="0.3"/>

            <!-- Flecha subiendo -->
            <path d="M 60 40 L 100 40" stroke="#ff6b6b" stroke-width="2" marker-end="url(#arrowFile)">
              <animate attributeName="stroke-dasharray" values="0,40;40,0" dur="2s" repeatCount="indefinite"/>
            </path>
            <defs>
              <marker id="arrowFile" markerWidth="8" markerHeight="8" refX="7" refY="4" orient="auto">
                <polygon points="0 0, 8 4, 0 8" fill="#ff6b6b"/>
              </marker>
            </defs>

            <!-- Nube IA -->
            <g transform="translate(120, 20)">
              <ellipse cx="0" cy="10" rx="15" ry="10" fill="#4a5ba5" opacity="0.2"/>
              <ellipse cx="-10" cy="15" rx="12" ry="8" fill="#4a5ba5" opacity="0.2"/>
              <ellipse cx="10" cy="15" rx="12" ry="8" fill="#4a5ba5" opacity="0.2"/>
              <text x="0" y="18" class="file-text" text-anchor="middle" fill="#4a5ba5" font-size="14px">IA</text>
              <circle cx="20" cy="8" r="3" fill="#51cf66">
                <animate attributeName="opacity" values="0;1;0" dur="2s" repeatCount="indefinite"/>
              </circle>
            </g>
          </g>

          <!-- Mensaje inferior -->
          <text x="150" y="185" class="file-label" text-anchor="middle" opacity="0.7">La IA analiza el contenido y lo usa como contexto</text>
        </svg>`
      },
      {
        id: 'explicar-negocio',
        title: 'Explicar negocio',
        icon: `<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="3" y="3" width="18" height="18" rx="2" stroke="currentColor" stroke-width="2"/>
          <path d="M8 10h8M8 14h5" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
          <circle cx="17" cy="7" r="3" fill="currentColor">
            <animate attributeName="r" values="3;3.5;3" dur="2s" repeatCount="indefinite"/>
          </circle>
        </svg>`,
        bullets: [
          'En el primer mensaje, describe tu negocio',
          'Explica qué vendes o qué servicio ofreces',
          'Menciona tu público objetivo',
          'La IA adaptará sus respuestas a tu contexto'
        ],
        svgContent: `<svg viewBox="0 0 300 200" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <style>
              .biz-text { fill: #343a40; font-family: 'Inter', sans-serif; font-size: 10px; font-weight: 500; }
              .biz-label { fill: #495057; font-family: 'Inter', sans-serif; font-size: 8px; }
              .biz-example { fill: #4a5ba5; font-family: 'Inter', sans-serif; font-size: 9px; font-style: italic; }
            </style>
          </defs>

          <!-- Título -->
          <text x="150" y="20" class="biz-text" text-anchor="middle" font-size="12px" font-weight="bold" fill="#4a5ba5">Contexto de negocio en el primer mensaje</text>

          <!-- Cuadro de chat ejemplo -->
          <g transform="translate(20, 35)">
            <rect x="0" y="0" width="260" height="140" rx="8" fill="#f8f9fa" stroke="#4a5ba5" stroke-width="2"/>

            <!-- Header del chat -->
            <rect x="0" y="0" width="260" height="30" rx="8" fill="#4a5ba5" opacity="0.1"/>
            <circle cx="15" cy="15" r="8" fill="#4a5ba5" opacity="0.3"/>
            <text x="30" y="20" class="biz-text" fill="#4a5ba5" font-weight="bold">Conversación con IA</text>

            <!-- Mensaje del usuario -->
            <g transform="translate(10, 40)">
              <rect x="0" y="0" width="240" height="90" rx="5" fill="white" stroke="#e9ecef" stroke-width="1"/>

              <text x="10" y="15" class="biz-text" fill="#ff6b6b" font-weight="bold">Tú:</text>

              <text x="10" y="28" class="biz-example">"Hola, tengo una panadería artesanal</text>
              <text x="10" y="40" class="biz-example">en el centro de la ciudad. Vendo pan</text>
              <text x="10" y="52" class="biz-example">dulce tradicional mexicano.</text>

              <text x="10" y="67" class="biz-example">Mi público son familias y personas</text>
              <text x="10" y="79" class="biz-example">nostálgicas de 30-60 años."</text>

              <!-- Checkmarks -->
              <circle cx="225" cy="28" r="6" fill="#51cf66" opacity="0.3">
                <animate attributeName="r" values="6;7;6" dur="2s" repeatCount="indefinite"/>
              </circle>
              <path d="M 222 28 L 224 30 L 228 26" stroke="#51cf66" stroke-width="1.5" fill="none"/>
            </g>
          </g>

          <!-- Flechas de beneficio -->
          <g transform="translate(150, 185)">
            <text x="0" y="0" class="biz-label" text-anchor="middle" fill="#51cf66" font-weight="bold">
              ✓ La IA ahora sabe tu contexto y puede personalizar
            </text>
          </g>
        </svg>`
      },
      {
        id: 'da-ejemplos',
        title: 'Da ejemplos',
        icon: `<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="3" y="3" width="7" height="7" rx="1" stroke="currentColor" stroke-width="2"/>
          <rect x="13" y="3" width="7" height="7" rx="1" stroke="currentColor" stroke-width="2"/>
          <rect x="3" y="13" width="7" height="7" rx="1" stroke="currentColor" stroke-width="2"/>
          <rect x="13" y="13" width="7" height="7" rx="1" stroke="currentColor" stroke-width="2" fill="currentColor" opacity="0.3">
            <animate attributeName="opacity" values="0.3;0.7;0.3" dur="2s" repeatCount="indefinite"/>
          </rect>
        </svg>`,
        bullets: [
          'Muestra ejemplos de tu trabajo anterior',
          'Comparte diseños o textos que te gustan',
          'Indica qué funciona bien para tu audiencia',
          'La IA aprenderá tu estilo y preferencias'
        ],
        svgContent: `<svg viewBox="0 0 300 200" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <style>
              .ex2-text { fill: #343a40; font-family: 'Inter', sans-serif; font-size: 10px; font-weight: 500; }
              .ex2-label { fill: #495057; font-family: 'Inter', sans-serif; font-size: 8px; }
            </style>
          </defs>

          <!-- Título -->
          <text x="150" y="20" class="ex2-text" text-anchor="middle" font-size="12px" font-weight="bold" fill="#4a5ba5">Ejemplos de tu trabajo previo</text>

          <!-- Ejemplo 1: Diseño anterior -->
          <g transform="translate(20, 40)">
            <rect x="0" y="0" width="80" height="60" rx="5" fill="#f8f9fa" stroke="#4a5ba5" stroke-width="2"/>
            <text x="40" y="12" class="ex2-label" text-anchor="middle" font-weight="bold" fill="#4a5ba5">Diseño anterior</text>

            <!-- Mini diseño -->
            <rect x="10" y="20" width="60" height="30" rx="2" fill="#ff6b6b" opacity="0.3"/>
            <circle cx="25" cy="30" r="4" fill="white"/>
            <rect x="35" y="25" width="30" height="3" rx="1" fill="white"/>
            <rect x="35" y="32" width="25" height="2" rx="1" fill="white"/>

            <text x="40" y="58" class="ex2-label" text-anchor="middle" fill="#51cf66">✓ Me gusta</text>
          </g>

          <!-- Ejemplo 2: Post exitoso -->
          <g transform="translate(110, 40)">
            <rect x="0" y="0" width="80" height="60" rx="5" fill="#f8f9fa" stroke="#4a5ba5" stroke-width="2"/>
            <text x="40" y="12" class="ex2-label" text-anchor="middle" font-weight="bold" fill="#4a5ba5">Post exitoso</text>

            <!-- Mini post -->
            <rect x="10" y="20" width="60" height="30" rx="2" fill="#4a90e2" opacity="0.2"/>
            <rect x="15" y="25" width="50" height="2" rx="1" fill="#4a90e2"/>
            <rect x="15" y="30" width="45" height="2" rx="1" fill="#4a90e2"/>
            <rect x="15" y="35" width="50" height="2" rx="1" fill="#4a90e2"/>
            <path d="M 15 43 L 18 46 L 22 42" stroke="#ff6b6b" stroke-width="1.5" fill="none"/>
            <text x="26" y="46" class="ex2-label" fill="#ff6b6b" font-size="7px">1.2k likes</text>

            <text x="40" y="58" class="ex2-label" text-anchor="middle" fill="#51cf66">✓ Funcionó</text>
          </g>

          <!-- Ejemplo 3: Estilo favorito -->
          <g transform="translate(200, 40)">
            <rect x="0" y="0" width="80" height="60" rx="5" fill="#f8f9fa" stroke="#4a5ba5" stroke-width="2"/>
            <text x="40" y="12" class="ex2-label" text-anchor="middle" font-weight="bold" fill="#4a5ba5">Estilo favorito</text>

            <!-- Mini estilo -->
            <circle cx="40" cy="35" r="15" fill="#ffa500" opacity="0.3"/>
            <path d="M 30 35 Q 40 25 50 35 Q 40 45 30 35" fill="#ffa500" opacity="0.5"/>

            <text x="40" y="58" class="ex2-label" text-anchor="middle" fill="#51cf66">✓ Este estilo</text>
          </g>

          <!-- IA aprendiendo -->
          <g transform="translate(150, 115)">
            <path d="M -50 0 L -20 0" stroke="#4a5ba5" stroke-width="2"/>
            <path d="M 20 0 L 50 0" stroke="#4a5ba5" stroke-width="2"/>
            <circle cx="0" cy="0" r="20" fill="#4a5ba5" opacity="0.1" stroke="#4a5ba5" stroke-width="2">
              <animate attributeName="r" values="20;23;20" dur="2s" repeatCount="indefinite"/>
            </circle>
            <text x="0" y="-8" class="ex2-text" text-anchor="middle" fill="#4a5ba5" font-size="16px">🧠</text>
            <text x="0" y="6" class="ex2-label" text-anchor="middle" font-weight="bold">IA</text>
            <text x="0" y="14" class="ex2-label" text-anchor="middle" font-size="7px">aprende</text>
          </g>

          <!-- Resultado -->
          <g transform="translate(50, 150)">
            <rect x="0" y="0" width="200" height="35" rx="5" fill="#51cf66" opacity="0.2" stroke="#51cf66" stroke-width="2"/>
            <text x="100" y="15" class="ex2-text" text-anchor="middle" font-weight="bold" fill="#51cf66">Nuevo contenido en tu estilo</text>
            <text x="100" y="27" class="ex2-label" text-anchor="middle">Basado en tus ejemplos favoritos</text>
          </g>
        </svg>`
      },
      {
        id: 'comparte',
        title: 'Comparte',
        icon: `<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="18" cy="5" r="3" stroke="currentColor" stroke-width="2"/>
          <circle cx="6" cy="12" r="3" stroke="currentColor" stroke-width="2"/>
          <circle cx="18" cy="19" r="3" stroke="currentColor" stroke-width="2">
            <animate attributeName="r" values="3;3.5;3" dur="2s" repeatCount="indefinite"/>
          </circle>
          <line x1="8.5" y1="13" x2="15.5" y2="18" stroke="currentColor" stroke-width="2"/>
          <line x1="8.5" y1="11" x2="15.5" y2="6" stroke="currentColor" stroke-width="2"/>
        </svg>`,
        bullets: [
          'Comparte información sobre tu audiencia objetivo',
          'Menciona la edad, intereses y comportamiento',
          'Describe los problemas que resuelves',
          'Esto ayuda a la IA a crear contenido efectivo'
        ],
        svgContent: `<svg viewBox="0 0 300 200" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <style>
              .aud-text { fill: #343a40; font-family: 'Inter', sans-serif; font-size: 10px; font-weight: 500; }
              .aud-label { fill: #495057; font-family: 'Inter', sans-serif; font-size: 8px; }
            </style>
          </defs>

          <!-- Título -->
          <text x="150" y="20" class="aud-text" text-anchor="middle" font-size="12px" font-weight="bold" fill="#4a5ba5">Define tu audiencia objetivo</text>

          <!-- Audiencia 1: Edad -->
          <g transform="translate(30, 40)">
            <circle cx="30" cy="30" r="25" fill="#ff6b6b" opacity="0.2" stroke="#ff6b6b" stroke-width="2"/>
            <text x="30" y="25" class="aud-text" text-anchor="middle" fill="#ff6b6b" font-size="16px">👥</text>
            <text x="30" y="40" class="aud-label" text-anchor="middle" font-weight="bold">30-60 años</text>
            <text x="30" y="70" class="aud-label" text-anchor="middle">Edad</text>
          </g>

          <!-- Audiencia 2: Intereses -->
          <g transform="translate(105, 40)">
            <circle cx="30" cy="30" r="25" fill="#4a90e2" opacity="0.2" stroke="#4a90e2" stroke-width="2"/>
            <text x="30" y="25" class="aud-text" text-anchor="middle" fill="#4a90e2" font-size="16px">❤️</text>
            <text x="30" y="40" class="aud-label" text-anchor="middle" font-weight="bold">Tradición</text>
            <text x="30" y="70" class="aud-label" text-anchor="middle">Intereses</text>
          </g>

          <!-- Audiencia 3: Comportamiento -->
          <g transform="translate(180, 40)">
            <circle cx="30" cy="30" r="25" fill="#51cf66" opacity="0.2" stroke="#51cf66" stroke-width="2"/>
            <text x="30" y="25" class="aud-text" text-anchor="middle" fill="#51cf66" font-size="16px">🛒</text>
            <text x="30" y="40" class="aud-label" text-anchor="middle" font-weight="bold">Compran local</text>
            <text x="30" y="70" class="aud-label" text-anchor="middle">Comportamiento</text>
          </g>

          <!-- Conectores -->
          <line x1="75" y1="70" x2="120" y2="70" stroke="#4a5ba5" stroke-width="1.5" stroke-dasharray="3,3" opacity="0.5"/>
          <line x1="150" y1="70" x2="195" y2="70" stroke="#4a5ba5" stroke-width="1.5" stroke-dasharray="3,3" opacity="0.5"/>

          <!-- Flecha hacia abajo -->
          <g transform="translate(150, 95)">
            <path d="M 0 0 L 0 20" stroke="#4a5ba5" stroke-width="2"/>
            <path d="M -5 15 L 0 20 L 5 15" stroke="#4a5ba5" stroke-width="2" fill="none"/>
          </g>

          <!-- Resultado: Mensaje personalizado -->
          <g transform="translate(50, 125)">
            <rect x="0" y="0" width="200" height="60" rx="8" fill="#ffa500" opacity="0.1" stroke="#ffa500" stroke-width="2">
              <animate attributeName="opacity" values="0.1;0.2;0.1" dur="2s" repeatCount="indefinite"/>
            </rect>

            <text x="100" y="18" class="aud-text" text-anchor="middle" font-weight="bold" fill="#ffa500">Mensaje personalizado</text>

            <text x="100" y="32" class="aud-label" text-anchor="middle" style="font-style: italic;">"¿Recuerdas el pan dulce de tu</text>
            <text x="100" y="42" class="aud-label" text-anchor="middle" style="font-style: italic;">infancia? Esa concha recién horneada...</text>
            <text x="100" y="52" class="aud-label" text-anchor="middle" style="font-style: italic;">¡Visítanos en el centro!"</text>
          </g>

          <!-- Nota final -->
          <text x="150" y="195" class="aud-label" text-anchor="middle" opacity="0.7" fill="#51cf66">✓ Mensaje conecta emocionalmente con la audiencia correcta</text>
        </svg>`
      }
    ],
    columns: 1,
    order: 6
  },

  // Vista 8: Qué SÍ y qué NO compartir
  {
    id: 'seguridad',
    title: 'Qué SÍ y qué NO compartir con la IA',
    type: SlideType.CARD_GRID,
    description: 'Lo que escribes puede ser usado para entrenar la IA. Si es confidencial, NO lo compartas.',
    cards: [
      {
        id: 'si-compartir',
        title: 'Sí compartir',
        icon: `<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" fill="currentColor" opacity="0.1"/>
          <path d="M9 12l2 2 4-4" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
            <animate attributeName="stroke-dasharray" values="0,20;20,0" dur="2s" repeatCount="indefinite"/>
          </path>
        </svg>`,
        bullets: [
          '✓ Ideas de negocio',
          '✓ Preguntas generales',
          '✓ Descripciones de productos/servicios',
          '✓ Solicitudes de contenido',
          '✓ Problemas que necesitas resolver'
        ],
        svgContent: `<svg viewBox="0 0 300 220" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <style>
              .safe-text { fill: #343a40; font-family: 'Inter', sans-serif; font-size: 10px; font-weight: 500; }
              .safe-label { fill: #495057; font-family: 'Inter', sans-serif; font-size: 8px; }
            </style>
          </defs>

          <!-- Título -->
          <text x="150" y="20" class="safe-text" text-anchor="middle" font-size="12px" font-weight="bold" fill="#51cf66">Información segura para compartir</text>

          <!-- Icono de escudo protector central -->
          <g transform="translate(150, 110)">
            <path d="M 0 -40 L 25 -30 L 25 -10 C 25 10 0 25 0 25 C 0 25 -25 10 -25 -10 L -25 -30 Z" fill="#51cf66" opacity="0.2" stroke="#51cf66" stroke-width="2">
              <animate attributeName="opacity" values="0.2;0.3;0.2" dur="3s" repeatCount="indefinite"/>
            </path>
            <path d="M -10 -5 L -5 0 L 10 -15" stroke="#51cf66" stroke-width="3" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
          </g>

          <!-- Círculos con ejemplos alrededor del escudo -->
          <!-- Ideas de negocio -->
          <g transform="translate(40, 50)">
            <circle cx="0" cy="0" r="20" fill="#51cf66" opacity="0.15" stroke="#51cf66" stroke-width="1.5"/>
            <text x="0" y="-8" class="safe-text" text-anchor="middle" font-size="18px">💡</text>
            <text x="0" y="25" class="safe-label" text-anchor="middle" font-weight="bold">Ideas</text>
            <circle cx="15" cy="-15" r="4" fill="#51cf66">
              <animate attributeName="opacity" values="0;1;0" dur="2s" repeatCount="indefinite"/>
            </circle>
          </g>

          <!-- Preguntas -->
          <g transform="translate(260, 50)">
            <circle cx="0" cy="0" r="20" fill="#51cf66" opacity="0.15" stroke="#51cf66" stroke-width="1.5"/>
            <text x="0" y="-8" class="safe-text" text-anchor="middle" font-size="18px">❓</text>
            <text x="0" y="25" class="safe-label" text-anchor="middle" font-weight="bold">Preguntas</text>
            <circle cx="15" cy="-15" r="4" fill="#51cf66">
              <animate attributeName="opacity" values="0;1;0" dur="2s" begin="0.4s" repeatCount="indefinite"/>
            </circle>
          </g>

          <!-- Productos -->
          <g transform="translate(40, 160)">
            <circle cx="0" cy="0" r="20" fill="#51cf66" opacity="0.15" stroke="#51cf66" stroke-width="1.5"/>
            <text x="0" y="-8" class="safe-text" text-anchor="middle" font-size="18px">📦</text>
            <text x="0" y="25" class="safe-label" text-anchor="middle" font-weight="bold">Productos</text>
            <circle cx="15" cy="-15" r="4" fill="#51cf66">
              <animate attributeName="opacity" values="0;1;0" dur="2s" begin="0.8s" repeatCount="indefinite"/>
            </circle>
          </g>

          <!-- Contenido -->
          <g transform="translate(260, 160)">
            <circle cx="0" cy="0" r="20" fill="#51cf66" opacity="0.15" stroke="#51cf66" stroke-width="1.5"/>
            <text x="0" y="-8" class="safe-text" text-anchor="middle" font-size="18px">📝</text>
            <text x="0" y="25" class="safe-label" text-anchor="middle" font-weight="bold">Contenido</text>
            <circle cx="15" cy="-15" r="4" fill="#51cf66">
              <animate attributeName="opacity" values="0;1;0" dur="2s" begin="1.2s" repeatCount="indefinite"/>
            </circle>
          </g>

          <!-- Líneas conectando al escudo central -->
          <line x1="60" y1="60" x2="130" y2="90" stroke="#51cf66" stroke-width="1.5" opacity="0.3" stroke-dasharray="3,3"/>
          <line x1="240" y1="60" x2="170" y2="90" stroke="#51cf66" stroke-width="1.5" opacity="0.3" stroke-dasharray="3,3"/>
          <line x1="60" y1="160" x2="130" y2="130" stroke="#51cf66" stroke-width="1.5" opacity="0.3" stroke-dasharray="3,3"/>
          <line x1="240" y1="160" x2="170" y2="130" stroke="#51cf66" stroke-width="1.5" opacity="0.3" stroke-dasharray="3,3"/>

          <!-- Mensaje inferior -->
          <text x="150" y="210" class="safe-label" text-anchor="middle" opacity="0.7" fill="#51cf66">✓ Información general que ayuda a la IA a entender tu contexto</text>
        </svg>`
      },
      {
        id: 'no-compartir',
        title: 'No compartir',
        icon: `<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="12" cy="12" r="10" stroke="currentColor" stroke-width="2" fill="currentColor" opacity="0.1"/>
          <line x1="8" y1="8" x2="16" y2="16" stroke="currentColor" stroke-width="2.5" stroke-linecap="round">
            <animate attributeName="opacity" values="1;0.3;1" dur="2s" repeatCount="indefinite"/>
          </line>
          <line x1="16" y1="8" x2="8" y2="16" stroke="currentColor" stroke-width="2.5" stroke-linecap="round">
            <animate attributeName="opacity" values="1;0.3;1" dur="2s" repeatCount="indefinite"/>
          </line>
        </svg>`,
        bullets: [
          '✗ Contraseñas o claves',
          '✗ Datos bancarios',
          '✗ INE o documentos oficiales completos',
          '✗ Información privada de clientes',
          '✗ Datos sensibles de tu empresa'
        ],
        svgContent: `<svg viewBox="0 0 300 220" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <style>
              .danger-text { fill: #343a40; font-family: 'Inter', sans-serif; font-size: 10px; font-weight: 500; }
              .danger-label { fill: #495057; font-family: 'Inter', sans-serif; font-size: 8px; }
            </style>
          </defs>

          <!-- Título -->
          <text x="150" y="20" class="danger-text" text-anchor="middle" font-size="12px" font-weight="bold" fill="#ff6b6b">NUNCA compartas información confidencial</text>

          <!-- Candado cerrado central -->
          <g transform="translate(150, 110)">
            <rect x="-20" y="0" width="40" height="30" rx="3" fill="#ff6b6b" opacity="0.2" stroke="#ff6b6b" stroke-width="2"/>
            <path d="M -15 0 L -15 -12 C -15 -20 -8 -25 0 -25 C 8 -25 15 -20 15 -12 L 15 0" fill="none" stroke="#ff6b6b" stroke-width="2"/>
            <circle cx="0" cy="15" r="4" fill="#ff6b6b"/>
            <rect x="-2" y="15" width="4" height="8" fill="#ff6b6b"/>

            <!-- Símbolo de prohibido sobre el candado -->
            <circle cx="0" cy="0" r="35" fill="none" stroke="#ff6b6b" stroke-width="3" opacity="0.8">
              <animate attributeName="r" values="35;38;35" dur="2s" repeatCount="indefinite"/>
            </circle>
            <line x1="-25" y1="-25" x2="25" y2="25" stroke="#ff6b6b" stroke-width="3" opacity="0.8"/>
          </g>

          <!-- Ejemplos de información peligrosa alrededor -->
          <!-- Contraseña -->
          <g transform="translate(40, 50)">
            <rect x="-25" y="-12" width="50" height="24" rx="4" fill="#ff6b6b" opacity="0.1" stroke="#ff6b6b" stroke-width="1.5"/>
            <text x="0" y="-2" class="danger-label" text-anchor="middle" fill="#ff6b6b">password123</text>
            <text x="0" y="8" class="danger-label" text-anchor="middle" fill="#ff6b6b">••••••••</text>
            <path d="M -20 -18 L -15 -23 L -25 -28" stroke="#ff6b6b" stroke-width="2" fill="none"/>
            <path d="M 20 -18 L 25 -23 L 15 -28" stroke="#ff6b6b" stroke-width="2" fill="none"/>
          </g>

          <!-- Tarjeta de crédito -->
          <g transform="translate(260, 50)">
            <rect x="-30" y="-15" width="60" height="35" rx="4" fill="#ff6b6b" opacity="0.1" stroke="#ff6b6b" stroke-width="1.5"/>
            <rect x="-30" y="-10" width="60" height="8" fill="#ff6b6b" opacity="0.3"/>
            <text x="0" y="8" class="danger-label" text-anchor="middle" fill="#ff6b6b" font-size="7px">**** **** **** 1234</text>
            <line x1="-30" y1="0" x2="30" y2="20" stroke="#ff6b6b" stroke-width="2"/>
          </g>

          <!-- INE / Documento -->
          <g transform="translate(40, 160)">
            <rect x="-25" y="-15" width="50" height="30" rx="3" fill="#ff6b6b" opacity="0.1" stroke="#ff6b6b" stroke-width="1.5"/>
            <circle cx="-10" cy="-3" r="6" fill="#ff6b6b" opacity="0.3"/>
            <rect x="0" y="-8" width="15" height="3" rx="1" fill="#ff6b6b" opacity="0.3"/>
            <rect x="0" y="-2" width="15" height="3" rx="1" fill="#ff6b6b" opacity="0.3"/>
            <rect x="0" y="4" width="12" height="3" rx="1" fill="#ff6b6b" opacity="0.3"/>
            <text x="0" y="25" class="danger-label" text-anchor="middle" fill="#ff6b6b" font-weight="bold">INE</text>
            <line x1="-25" y1="-15" x2="25" y2="15" stroke="#ff6b6b" stroke-width="2"/>
          </g>

          <!-- Datos de clientes -->
          <g transform="translate(260, 160)">
            <rect x="-28" y="-15" width="56" height="30" rx="3" fill="#ff6b6b" opacity="0.1" stroke="#ff6b6b" stroke-width="1.5"/>
            <circle cx="-15" cy="-5" r="5" fill="#ff6b6b" opacity="0.3"/>
            <circle cx="0" cy="-5" r="5" fill="#ff6b6b" opacity="0.3"/>
            <circle cx="15" cy="-5" r="5" fill="#ff6b6b" opacity="0.3"/>
            <rect x="-20" y="5" width="40" height="2" rx="1" fill="#ff6b6b" opacity="0.3"/>
            <rect x="-20" y="9" width="35" height="2" rx="1" fill="#ff6b6b" opacity="0.3"/>
            <text x="0" y="25" class="danger-label" text-anchor="middle" fill="#ff6b6b" font-weight="bold">Clientes</text>
            <line x1="-28" y1="-15" x2="28" y2="15" stroke="#ff6b6b" stroke-width="2"/>
          </g>

          <!-- Mensaje inferior -->
          <text x="150" y="210" class="danger-label" text-anchor="middle" opacity="0.7" fill="#ff6b6b">⚠️ Información confidencial que podría comprometer tu seguridad</text>
        </svg>`
      },
      {
        id: 'tip-elevador',
        title: 'Tip',
        icon: `<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="12" cy="12" r="10" stroke="currentColor" stroke-width="2"/>
          <path d="M12 16v-4" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
          <circle cx="12" cy="8" r="1" fill="currentColor">
            <animate attributeName="r" values="1;1.5;1" dur="2s" repeatCount="indefinite"/>
          </circle>
          <path d="M 8 6 L 12 2 L 16 6" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round">
            <animate attributeName="opacity" values="0.3;1;0.3" dur="2s" repeatCount="indefinite"/>
          </path>
        </svg>`,
        bullets: [
          'Regla simple para decidir qué compartir:',
          '',
          '"Si se lo puedes compartir a un amigo mientras van en un elevador, probablemente se lo puedas compartir a la IA"',
          '',
          '• Conversación casual = OK ✓',
          '• Información confidencial = NO ✗'
        ],
        svgContent: `<svg viewBox="0 0 300 240" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <style>
              .tip-text { fill: #343a40; font-family: 'Inter', sans-serif; font-size: 10px; font-weight: 500; }
              .tip-label { fill: #495057; font-family: 'Inter', sans-serif; font-size: 8px; }
            </style>
          </defs>

          <!-- Título -->
          <text x="150" y="20" class="tip-text" text-anchor="middle" font-size="12px" font-weight="bold" fill="#ffa500">La regla del elevador</text>

          <!-- Edificio y elevador -->
          <g transform="translate(80, 40)">
            <!-- Edificio -->
            <rect x="0" y="0" width="140" height="160" rx="5" fill="#e9ecef" stroke="#4a5ba5" stroke-width="2"/>

            <!-- Ventanas del edificio -->
            <rect x="10" y="10" width="15" height="12" rx="1" fill="#4a5ba5" opacity="0.2"/>
            <rect x="30" y="10" width="15" height="12" rx="1" fill="#4a5ba5" opacity="0.2"/>
            <rect x="95" y="10" width="15" height="12" rx="1" fill="#4a5ba5" opacity="0.2"/>
            <rect x="115" y="10" width="15" height="12" rx="1" fill="#4a5ba5" opacity="0.2"/>

            <rect x="10" y="28" width="15" height="12" rx="1" fill="#4a5ba5" opacity="0.2"/>
            <rect x="30" y="28" width="15" height="12" rx="1" fill="#4a5ba5" opacity="0.2"/>
            <rect x="95" y="28" width="15" height="12" rx="1" fill="#4a5ba5" opacity="0.2"/>
            <rect x="115" y="28" width="15" height="12" rx="1" fill="#4a5ba5" opacity="0.2"/>

            <!-- Elevador en el centro -->
            <g transform="translate(55, 50)">
              <rect x="0" y="0" width="30" height="100" rx="2" fill="#ffa500" opacity="0.15" stroke="#ffa500" stroke-width="2">
                <animate attributeName="y" values="0;-10;0" dur="4s" repeatCount="indefinite"/>
                <animate attributeName="opacity" values="0.15;0.25;0.15" dur="4s" repeatCount="indefinite"/>
              </rect>

              <!-- Personas dentro del elevador -->
              <g transform="translate(0, 0)">
                <animate attributeName="transform" values="translate(0,0);translate(0,-10);translate(0,0)" dur="4s" repeatCount="indefinite"/>

                <!-- Persona 1 -->
                <circle cx="8" cy="30" r="4" fill="#4a5ba5" opacity="0.5"/>
                <path d="M 4 50 Q 4 38 8 38 Q 12 38 12 50" fill="#4a5ba5" opacity="0.5"/>

                <!-- Persona 2 -->
                <circle cx="22" cy="30" r="4" fill="#ff6b6b" opacity="0.5"/>
                <path d="M 18 50 Q 18 38 22 38 Q 26 38 26 50" fill="#ff6b6b" opacity="0.5"/>

                <!-- Burbuja de conversación -->
                <ellipse cx="15" cy="15" rx="10" ry="6" fill="white" stroke="#4a5ba5" stroke-width="1" opacity="0.8"/>
                <path d="M 12 18 L 10 22 L 14 20" fill="white" stroke="#4a5ba5" stroke-width="1" opacity="0.8"/>
                <text x="15" y="17" class="tip-label" text-anchor="middle" font-size="6px">💬</text>
              </g>
            </g>

            <!-- Botones del elevador -->
            <rect x="92" y="60" width="8" height="8" rx="1" fill="#4a5ba5" opacity="0.3"/>
            <rect x="92" y="72" width="8" height="8" rx="1" fill="#4a5ba5" opacity="0.3"/>
            <rect x="102" y="60" width="8" height="8" rx="1" fill="#4a5ba5" opacity="0.3"/>
            <rect x="102" y="72" width="8" height="8" rx="1" fill="#51cf66" opacity="0.5">
              <animate attributeName="opacity" values="0.5;0.8;0.5" dur="2s" repeatCount="indefinite"/>
            </rect>
          </g>

          <!-- Comparación debajo -->
          <g transform="translate(30, 210)">
            <!-- Conversación casual OK -->
            <rect x="0" y="0" width="110" height="25" rx="4" fill="#51cf66" opacity="0.15" stroke="#51cf66" stroke-width="1.5"/>
            <text x="55" y="10" class="tip-label" text-anchor="middle" fill="#51cf66" font-weight="bold">Casual ✓</text>
            <text x="55" y="20" class="tip-label" text-anchor="middle" font-size="7px">"¿Cómo mejorar mi negocio?"</text>

            <!-- Confidencial NO -->
            <rect x="120" y="0" width="110" height="25" rx="4" fill="#ff6b6b" opacity="0.15" stroke="#ff6b6b" stroke-width="1.5"/>
            <text x="175" y="10" class="tip-label" text-anchor="middle" fill="#ff6b6b" font-weight="bold">Confidencial ✗</text>
            <text x="175" y="20" class="tip-label" text-anchor="middle" font-size="7px">"Mi contraseña es..."</text>
          </g>
        </svg>`
      }
    ],
    columns: 1,
    order: 7
  },

  // Vista 9: Los 5 Grandes
  {
    id: 'los-5-grandes',
    title: 'Las 5 Plataformas Principales de IA',
    type: SlideType.CARD_GRID,
    description: 'Da clic en una para conocerla a detalle',
    showContinueButton: false,
    cards: [
      {
        id: 'chatgpt',
        title: 'ChatGPT',
        description: 'by OpenAI',
        icon: `<svg viewBox='0 0 320 320' xmlns='http://www.w3.org/2000/svg'>
          <path d='m297.06 130.97c7.26-21.79 4.76-45.66-6.85-65.48-17.46-30.4-52.56-46.04-86.84-38.68-15.25-17.18-37.16-26.95-60.13-26.81-35.04-.08-66.13 22.48-76.91 55.82-22.51 4.61-41.94 18.7-53.31 38.67-17.59 30.32-13.58 68.54 9.92 94.54-7.26 21.79-4.76 45.66 6.85 65.48 17.46 30.4 52.56 46.04 86.84 38.68 15.24 17.18 37.16 26.95 60.13 26.8 35.06.09 66.16-22.49 76.94-55.86 22.51-4.61 41.94-18.7 53.31-38.67 17.57-30.32 13.55-68.51-9.94-94.51zm-120.28 168.11c-14.03.02-27.62-4.89-38.39-13.88.49-.26 1.34-.73 1.89-1.07l63.72-36.8c3.26-1.85 5.26-5.32 5.24-9.07v-89.83l26.93 15.55c.29.14.48.42.52.74v74.39c-.04 33.08-26.83 59.9-59.91 59.97zm-128.84-55.03c-7.03-12.14-9.56-26.37-7.15-40.18.47.28 1.3.79 1.89 1.13l63.72 36.8c3.23 1.89 7.23 1.89 10.47 0l77.79-44.92v31.1c.02.32-.13.63-.38.83l-64.41 37.19c-28.69 16.52-65.33 6.7-81.92-21.95zm-16.77-139.09c7-12.16 18.05-21.46 31.21-26.29 0 .55-.03 1.52-.03 2.2v73.61c-.02 3.74 1.98 7.21 5.23 9.06l77.79 44.91-26.93 15.55c-.27.18-.61.21-.91.08l-64.42-37.22c-28.63-16.58-38.45-53.21-21.95-81.89zm221.26 51.49-77.79-44.92 26.93-15.54c.27-.18.61-.21.91-.08l64.42 37.19c28.68 16.57 38.51 53.26 21.94 81.94-7.01 12.14-18.05 21.44-31.20 26.28v-75.81c.03-3.74-1.96-7.2-5.20-9.06zm26.8-40.34c-.47-.29-1.3-.79-1.89-1.13l-63.72-36.8c-3.23-1.89-7.23-1.89-10.47 0l-77.79 44.92v-31.1c-.02-.32.13-.63.38-.83l64.41-37.16c28.69-16.55 65.37-6.7 81.91 22 6.99 12.12 9.52 26.31 7.15 40.1zm-168.51 55.43-26.94-15.55c-.29-.14-.48-.42-.52-.74v-74.39c.02-33.12 26.89-59.96 60.01-59.94 14.01 0 27.57 4.92 38.34 13.88-.49.26-1.33.73-1.89 1.07l-63.72 36.8c-3.26 1.85-5.26 5.31-5.24 9.06l-.04 89.79zm14.63-31.54 34.65-20.01 34.65 20v40.01l-34.65 20-34.65-20z'/>
        </svg>`,
        link: 'chatgpt'
      },
      {
        id: 'gemini',
        title: 'Gemini',
        description: 'by Google',
        icon: `<svg width="344" height="127" viewBox="0 0 344 127" fill="none" xmlns="http://www.w3.org/2000/svg">
          <mask id="mask0_958_15881" style="mask-type:alpha" maskUnits="userSpaceOnUse" x="0" y="0" width="344" height="127">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M234.123 41.2204C235.489 44.3354 236.172 47.6638 236.172 51.2055C236.172 47.6638 236.833 44.3354 238.156 41.2204C239.521 38.1054 241.356 35.3958 243.66 33.0916C245.965 30.7873 248.674 28.9738 251.789 27.651C254.904 26.2855 258.233 25.6028 261.774 25.6028C258.233 25.6028 254.904 24.9414 251.789 23.6185C248.674 22.2531 245.965 20.4182 243.66 18.114C241.356 15.8097 239.521 13.1001 238.156 9.98507C236.833 6.87007 236.172 3.54171 236.172 0C236.172 3.54171 235.489 6.87007 234.123 9.98507C232.801 13.1001 230.987 15.8097 228.683 18.114C226.379 20.4182 223.669 22.2531 220.554 23.6185C217.439 24.9414 214.111 25.6028 210.569 25.6028C214.111 25.6028 217.439 26.2855 220.554 27.651C223.669 28.9738 226.379 30.7873 228.683 33.0916C230.987 35.3958 232.801 38.1054 234.123 41.2204ZM26.1532 123.14C31.3762 125.291 36.9448 126.366 42.859 126.366C48.8501 126.366 54.3035 125.406 59.2192 123.486C64.1349 121.566 68.3978 118.839 72.0078 115.306C75.6178 111.773 78.4213 107.587 80.4183 102.748C82.4153 97.8321 83.4138 92.4555 83.4138 86.6181V86.5029C83.4138 85.4276 83.337 84.429 83.1834 83.5073C83.1066 82.5856 82.9914 81.6255 82.8377 80.627H43.0895V90.1897H73.0447C72.7374 94.7982 71.6621 98.7922 69.8187 102.172C68.0521 105.475 65.7863 108.201 63.0212 110.352C60.3329 112.502 57.2222 114.115 53.689 115.191C50.2326 116.189 46.6226 116.689 42.859 116.689C38.7114 116.689 34.6789 115.92 30.7617 114.384C26.8445 112.848 23.3497 110.621 20.2774 107.702C17.2819 104.783 14.9008 101.288 13.1342 97.2176C11.3676 93.07 10.4843 88.4231 10.4843 83.2769C10.4843 78.1308 11.3292 73.5223 13.019 69.4514C14.7856 65.3038 17.1667 61.809 20.1622 58.9671C23.1577 56.0484 26.6141 53.8209 30.5313 52.2848C34.5253 50.7486 38.6346 49.9805 42.859 49.9805C46.0082 49.9805 49.0037 50.403 51.8456 51.2479C54.6875 52.0159 57.299 53.1297 59.68 54.589C62.1379 56.0484 64.2501 57.815 66.0167 59.8888L73.1599 52.5152C69.7035 48.598 65.287 45.564 59.9105 43.4134C54.6107 41.2628 48.9269 40.1875 42.859 40.1875C37.0216 40.1875 31.4914 41.2628 26.2684 43.4134C21.1223 45.564 16.5522 48.598 12.5582 52.5152C8.64093 56.4324 5.5686 61.0025 3.34116 66.2255C1.11372 71.4484 0 77.1323 0 83.2769C0 89.4216 1.11372 95.1054 3.34116 100.328C5.5686 105.551 8.64093 110.121 12.5582 114.039C16.4754 117.956 21.0071 120.99 26.1532 123.14ZM104.058 122.334C108.512 125.022 113.582 126.366 119.266 126.366C125.717 126.366 131.132 124.907 135.511 121.988C139.889 119.07 143.23 115.383 145.534 110.928L136.778 106.78C135.165 109.699 132.937 112.157 130.096 114.154C127.33 116.151 123.874 117.149 119.726 117.149C116.5 117.149 113.39 116.343 110.394 114.73C107.399 113.117 104.941 110.697 103.021 107.472C101.362 104.684 100.419 101.266 100.194 97.2176H146.456C146.533 96.8336 146.571 96.3343 146.571 95.7199C146.648 95.1054 146.686 94.5293 146.686 93.9917C146.686 88.1542 145.534 82.9697 143.23 78.438C141.002 73.9063 137.776 70.3731 133.552 67.8385C129.327 65.227 124.297 63.9212 118.459 63.9212C112.698 63.9212 107.668 65.3806 103.366 68.2993C99.065 71.1412 95.7238 74.9432 93.3428 79.7053C91.0385 84.4674 89.8864 89.652 89.8864 95.259C89.8864 101.25 91.1153 106.588 93.5732 111.274C96.1079 115.959 99.6027 119.646 104.058 122.334ZM100.781 88.8071C101.143 87.0971 101.66 85.4841 102.329 83.9682C103.789 80.6654 105.901 78.054 108.666 76.1338C111.508 74.1367 114.811 73.1382 118.574 73.1382C121.723 73.1382 124.373 73.6759 126.524 74.7512C128.675 75.7497 130.441 77.0554 131.824 78.6684C133.206 80.2814 134.205 82.0096 134.819 83.853C135.434 85.6196 135.779 87.271 135.856 88.8071H100.781ZM155.497 65.7646V124.523H165.866V91.8026C165.866 88.5767 166.519 85.5428 167.825 82.7009C169.131 79.859 170.936 77.5931 173.24 75.9033C175.544 74.1367 178.156 73.2534 181.074 73.2534C185.145 73.2534 188.294 74.444 190.522 76.825C192.826 79.1293 193.978 83.0849 193.978 88.6919V124.523H204.232V91.5722C204.232 88.3463 204.885 85.3507 206.191 82.5856C207.496 79.7437 209.301 77.4779 211.606 75.7881C213.91 74.0983 216.521 73.2534 219.44 73.2534C223.588 73.2534 226.775 74.4056 229.003 76.7098C231.307 79.0141 232.459 82.9697 232.459 88.5767V124.523H242.713V86.8485C242.713 80.0126 241.023 74.4824 237.644 70.2579C234.341 66.0335 229.156 63.9212 222.09 63.9212C217.405 63.9212 213.372 64.9965 209.993 67.1472C206.613 69.2978 203.925 72.0245 201.928 75.3273C200.545 71.9477 198.279 69.221 195.13 67.1472C192.058 64.9965 188.333 63.9212 183.955 63.9212C181.497 63.9212 179.039 64.4205 176.581 65.419C174.2 66.3407 172.088 67.608 170.244 69.221C168.401 70.7572 166.942 72.4854 165.866 74.4056H165.405V65.7646H155.497ZM252.045 65.7646V124.523H262.299V65.7646H252.045ZM251.93 53.3217C253.389 54.7042 255.118 55.3955 257.115 55.3955C259.188 55.3955 260.917 54.7042 262.299 53.3217C263.682 51.8623 264.373 50.1341 264.373 48.1371C264.373 46.0633 263.682 44.3351 262.299 42.9526C260.917 41.4932 259.188 40.7635 257.115 40.7635C255.118 40.7635 253.389 41.4932 251.93 42.9526C250.547 44.3351 249.856 46.0633 249.856 48.1371C249.856 50.1341 250.547 51.8623 251.93 53.3217ZM271.929 65.7646V124.523H282.298V91.8026C282.298 88.6535 282.951 85.6964 284.257 82.9313C285.64 80.0894 287.521 77.7851 289.902 76.0185C292.283 74.1751 295.087 73.2534 298.313 73.2534C302.614 73.2534 306.071 74.444 308.682 76.825C311.293 79.1293 312.599 83.0849 312.599 88.6919V124.523H322.968V86.8485C322.968 79.9358 321.125 74.4056 317.438 70.2579C313.751 66.0335 308.336 63.9212 301.193 63.9212C296.969 63.9212 293.128 64.9581 289.672 67.032C286.216 69.1058 283.719 71.5637 282.183 74.4056H281.722V65.7646H271.929ZM331.672 65.7646V124.523H341.926V65.7646H331.672ZM331.557 53.3217C333.016 54.7042 334.745 55.3955 336.742 55.3955C338.815 55.3955 340.544 54.7042 341.926 53.3217C343.309 51.8623 344 50.1341 344 48.1371C344 46.0633 343.309 44.3351 341.926 42.9526C340.544 41.4932 338.815 40.7635 336.742 40.7635C334.745 40.7635 333.016 41.4932 331.557 42.9526C330.175 44.3351 329.483 46.0633 329.483 48.1371C329.483 50.1341 330.175 51.8623 331.557 53.3217Z" fill="white"/>
          </mask>
          <g mask="url(#mask0_958_15881)">
            <rect x="-158.25" y="-455.443" width="832.09" height="685.324" fill="url(#paint0_linear_958_15881)"/>
          </g>
          <defs>
            <linearGradient id="paint0_linear_958_15881" x1="-57.4049" y1="130.441" x2="354.97" y2="30.369" gradientUnits="userSpaceOnUse">
              <stop stop-color="#439DDF"/>
              <stop offset="0.524208" stop-color="#4F87ED"/>
              <stop offset="0.781452" stop-color="#9476C5"/>
              <stop offset="0.888252" stop-color="#BC688E"/>
              <stop offset="1" stop-color="#D6645D"/>
            </linearGradient>
          </defs>
        </svg>`,
        link: 'gemini'
      },
      {
        id: 'claude',
        title: 'Claude',
        description: 'by Anthropic',
        icon: `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
          <rect width="100" height="100" rx="12" fill="#D97757"/>
          <path d="M29.05,76.54L50,65.87l0.17-0.5-0.17-0.28h-0.5l-1.72-0.11-5.88-0.16-5.1-0.21-4.95-0.27-1.24-0.27-1.17-1.54 0.12-0.77 1.05-0.7 1.5,0.13 3.31,0.23 4.97,0.34 3.6,0.21 5.34,0.56h0.85l0.12-0.34-0.29-0.21-0.23-0.21-5.14-3.48-5.57-3.68-2.92-2.12-1.58-1.07-0.79-1.01-0.34-2.2 1.43-1.58 1.92,0.13 0.49,0.13 1.95,1.5 4.16,3.22 5.43,4-0.36-0.6-2.95-5.34-3.15-5.43-1.4-2.25-0.37-1.35c-0.13-0.56-0.23-1.02-0.23-1.59l1.63-2.21 0.9-0.29 2.17,0.29 0.92,0.79 1.35,3.09 2.19,4.86 3.39,6.61 0.99,1.96 0.53,1.82 0.2,0.56h0.34v-0.32l0.28-3.72 0.52-4.57 0.5-5.88 0.17-1.66 0.82-1.99 1.63-1.07 1.27,0.61 1.05,1.5-0.15,0.97-0.62,4.04-1.22,6.33-0.79,4.24h0.46l0.53-0.53 2.14-2.85 3.6-4.51 1.59-1.79 1.86-1.97 1.19-0.94h2.25l1.66,2.46-0.74,2.54-2.32,2.94-1.92,2.49-2.76,3.71-1.72,2.97 0.16,0.24 0.41-0.04 6.23-1.32 3.36-0.61 4.01-0.69 1.82,0.85 0.2,0.86-0.71,1.76-4.29,1.06-5.04,1.01-7.5,1.77-0.09,0.07 0.11,0.13 3.38,0.32 1.45,0.08h3.54l6.59,0.49 1.72,1.14 1.03,1.39-0.17,1.06-2.65,1.35-3.58-0.85-8.35-1.99-2.86-0.71h-0.4v0.24l2.39,2.33 4.37,3.95 5.47,5.09 0.28,1.26-0.7,0.99-0.74-0.11-4.81-3.62-1.86-1.63-4.2-3.54h-0.28v0.37l0.97,1.42 5.11,7.68 0.27,2.36-0.37,0.77-1.33,0.46-1.46-0.27-2.99-4.2-3.09-4.73-2.49-4.24-0.3,0.17-1.47,15.83-0.69,0.81-1.59,0.61-1.33-1.01-0.7-1.63 0.7-3.22 0.85-4.2 0.69-3.34 0.62-4.15 0.37-1.38-0.02-0.09-0.3,0.04-3.13,4.29-4.76,6.43-3.76,4.03-0.9,0.36-1.56-0.81 0.15-1.45 0.87-1.29 5.21-6.62 3.14-4.1 2.03-2.37-0.01-0.34h-0.12L29.05,76.54z" fill="white"/>
        </svg>`,
        link: 'claude'
      },
      {
        id: 'grok',
        title: 'Grok',
        description: 'by X (Twitter)',
        icon: `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
          <rect width="100" height="100" rx="12" fill="#000000"/>
          <g transform="translate(10, 15) scale(1.8)">
            <path d="M7.95,12.62L14.61,7.71c0.33-0.24 0.79-0.16 1-0.09 0.82,1.94 0.46,4.47-1.47,6.41-1.93,1.94-4.41,2.29-6.25,1.48l-2.26,0.99c3.26,2.22,6.95,1.77,9.24-0.52 1.95-1.95 2.45-4.45 2-6.98l0.01,0.01C25.99,4.8,26.89,3.39,28.97,0.51,29.01,0.44,29.05,0.37,29.09,0.3l-2.75,2.75v-0.01L7.93,12.63" fill="#FFFFFF"/>
            <path d="M6.57,13.82C4.24,11.59,4.64,8.15,6.62,6.17c1.47-1.47,3.92-2.07,6-1.27l2.26-1c-0.41-0.29-0.99-0.61-1.63-0.83-2.7-1.11-5.92-0.5-8.19,1.77-2.13,2.13-2.73,5.33-1.47,8.12 0.85,2.07-0.3,3.56-1.64,5.01-0.5,0.52-1,1.05-1.46,1.61L6.56,13.83" fill="#FFFFFF"/>
          </g>
        </svg>`,
        link: 'grok'
      },
      {
        id: 'meta-ai',
        title: 'Meta AI',
        description: 'by Meta',
        icon: `<svg id="Layer_2" data-name="Layer 2" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 339.88 339.88">
          <defs>
            <style>
              .cls-1 { clip-path: url(#clippath); }
              .cls-2 { fill: none; }
              .cls-2, .cls-3 { stroke-width: 0px; }
              .cls-3 { fill: url(#linear-gradient); fill-rule: evenodd; }
            </style>
            <clipPath id="clippath">
              <rect class="cls-2" width="339.88" height="339.88"/>
            </clipPath>
            <linearGradient id="linear-gradient" x1="1154.5" y1="246" x2="474.75" y2="-433.75" gradientTransform="translate(-237.38 123) scale(.5 -.5)" gradientUnits="userSpaceOnUse">
              <stop offset=".13" stop-color="#ff97e3"/>
              <stop offset=".18" stop-color="#d14fe1"/>
              <stop offset=".34" stop-color="#0050e2"/>
              <stop offset=".67" stop-color="#0050e2"/>
              <stop offset=".81" stop-color="#00ddf4"/>
              <stop offset=".86" stop-color="#23f8cc"/>
            </linearGradient>
          </defs>
          <g id="Layer_1-2" data-name="Layer 1">
            <g class="cls-1">
              <path class="cls-3" d="M169.94,0c93.85,0,169.94,76.09,169.94,169.94s-76.09,169.94-169.94,169.94S0,263.79,0,169.94,76.09,0,169.94,0ZM169.94,51.36c-65.49,0-118.57,53.09-118.57,118.57s53.09,118.57,118.57,118.57c65.49,0,118.57-53.1,118.56-118.58,0-65.48-53.09-118.56-118.56-118.56Z"/>
            </g>
          </g>
        </svg>`,
        link: 'meta-ai'
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
    logoUrl: `data:image/svg+xml,${encodeURIComponent(`<svg viewBox='0 0 320 320' xmlns='http://www.w3.org/2000/svg'><rect width='320' height='320' fill='white'/><path d='m297.06 130.97c7.26-21.79 4.76-45.66-6.85-65.48-17.46-30.4-52.56-46.04-86.84-38.68-15.25-17.18-37.16-26.95-60.13-26.81-35.04-.08-66.13 22.48-76.91 55.82-22.51 4.61-41.94 18.7-53.31 38.67-17.59 30.32-13.58 68.54 9.92 94.54-7.26 21.79-4.76 45.66 6.85 65.48 17.46 30.4 52.56 46.04 86.84 38.68 15.24 17.18 37.16 26.95 60.13 26.8 35.06.09 66.16-22.49 76.94-55.86 22.51-4.61 41.94-18.7 53.31-38.67 17.57-30.32 13.55-68.51-9.94-94.51zm-120.28 168.11c-14.03.02-27.62-4.89-38.39-13.88.49-.26 1.34-.73 1.89-1.07l63.72-36.8c3.26-1.85 5.26-5.32 5.24-9.07v-89.83l26.93 15.55c.29.14.48.42.52.74v74.39c-.04 33.08-26.83 59.9-59.91 59.97zm-128.84-55.03c-7.03-12.14-9.56-26.37-7.15-40.18.47.28 1.3.79 1.89 1.13l63.72 36.8c3.23 1.89 7.23 1.89 10.47 0l77.79-44.92v31.1c.02.32-.13.63-.38.83l-64.41 37.19c-28.69 16.52-65.33 6.7-81.92-21.95zm-16.77-139.09c7-12.16 18.05-21.46 31.21-26.29 0 .55-.03 1.52-.03 2.2v73.61c-.02 3.74 1.98 7.21 5.23 9.06l77.79 44.91-26.93 15.55c-.27.18-.61.21-.91.08l-64.42-37.22c-28.63-16.58-38.45-53.21-21.95-81.89zm221.26 51.49-77.79-44.92 26.93-15.54c.27-.18.61-.21.91-.08l64.42 37.19c28.68 16.57 38.51 53.26 21.94 81.94-7.01 12.14-18.05 21.44-31.20 26.28v-75.81c.03-3.74-1.96-7.2-5.20-9.06zm26.8-40.34c-.47-.29-1.3-.79-1.89-1.13l-63.72-36.8c-3.23-1.89-7.23-1.89-10.47 0l-77.79 44.92v-31.1c-.02-.32.13-.63.38-.83l64.41-37.16c28.69-16.55 65.37-6.7 81.91 22 6.99 12.12 9.52 26.31 7.15 40.1zm-168.51 55.43-26.94-15.55c-.29-.14-.48-.42-.52-.74v-74.39c.02-33.12 26.89-59.96 60.01-59.94 14.01 0 27.57 4.92 38.34 13.88-.49.26-1.33.73-1.89 1.07l-63.72 36.8c-3.26 1.85-5.26 5.31-5.24 9.06l-.04 89.79zm14.63-31.54 34.65-20.01 34.65 20v40.01l-34.65 20-34.65-20z'/></svg>`)}`,
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
    features: [
      'Conversación natural y contextual',
      'Generación de contenido y redacción',
      'Análisis y resumen de documentos',
      'Programación y depuración de código',
      'Versión gratuita disponible',
      'Aplicación móvil para iOS y Android'
    ],
    order: 9
  },

  // ChatGPT Slide 1: Lo que puede hacer (fusionada con Funciones Técnicas)
  {
    id: 'chatgpt-modelos-lenguaje',
    title: 'ChatGPT - Lo que puede hacer',
    type: SlideType.CARD_GRID,
    description: 'Explora las capacidades principales de ChatGPT',
    cards: [
      {
        id: 'modelos-lenguaje',
        title: 'Modelos de Lenguaje',
        description: 'Capacidades de conversación y procesamiento de texto',
        icon: `<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 2L2 7L12 12L22 7L12 2Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          <path d="M2 17L12 22L22 17" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          <path d="M2 12L12 17L22 12" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>`,
        bullets: [
          'Responder preguntas complejas con contexto y razonamiento',
          'Explicar conceptos en cualquier nivel (básico → experto)',
          'Redacción profesional: textos, correos, ensayos, guiones, discursos',
          'Optimización y reescritura de contenido',
          'Traducción avanzada y adaptación cultural',
          'Análisis de documentos (resumen, extracción de datos, puntos clave)',
          'Asistencia para toma de decisiones y análisis de escenarios',
          'Simulación de roles (coach, consultor, analista, profesor)',
          'Soporte en programación (debugging, explicación, generación segura de código)',
          'Planificación: roadmaps, itinerarios, estrategias y guías paso a paso'
        ],
        svgContent: `<svg viewBox="0 0 400 250" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id="brain-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" style="stop-color:#667eea;stop-opacity:1" />
              <stop offset="100%" style="stop-color:#764ba2;stop-opacity:1" />
            </linearGradient>
          </defs>
          <!-- Cerebro central -->
          <ellipse cx="200" cy="125" rx="80" ry="70" fill="url(#brain-gradient)" opacity="0.3"/>
          <path d="M 140 125 Q 150 100 200 100 Q 250 100 260 125" stroke="#667eea" stroke-width="3" fill="none"/>
          <path d="M 140 125 Q 150 150 200 150 Q 250 150 260 125" stroke="#667eea" stroke-width="3" fill="none"/>
          <!-- Nodos de texto -->
          <circle cx="100" cy="80" r="15" fill="#10b981"/>
          <circle cx="300" cy="80" r="15" fill="#10b981"/>
          <circle cx="100" cy="170" r="15" fill="#10b981"/>
          <circle cx="300" cy="170" r="15" fill="#10b981"/>
          <!-- Conexiones -->
          <line x1="115" y1="80" x2="140" y2="110" stroke="#667eea" stroke-width="2" opacity="0.5"/>
          <line x1="285" y1="80" x2="260" y2="110" stroke="#667eea" stroke-width="2" opacity="0.5"/>
          <line x1="115" y1="170" x2="140" y2="140" stroke="#667eea" stroke-width="2" opacity="0.5"/>
          <line x1="285" y1="170" x2="260" y2="140" stroke="#667eea" stroke-width="2" opacity="0.5"/>
          <!-- Texto -->
          <text x="100" y="50" text-anchor="middle" fill="#374151" font-size="12" font-weight="bold">Entrada</text>
          <text x="300" y="50" text-anchor="middle" fill="#374151" font-size="12" font-weight="bold">Salida</text>
          <text x="200" y="210" text-anchor="middle" fill="#667eea" font-size="14" font-weight="bold">Procesamiento Inteligente</text>
        </svg>`
      },
      {
        id: 'funciones-tecnicas',
        title: 'Funciones Técnicas',
        description: 'Capacidades avanzadas de análisis y generación',
        icon: `<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="3" y="3" width="7" height="7" rx="1" stroke="currentColor" stroke-width="2"/>
          <rect x="14" y="3" width="7" height="7" rx="1" stroke="currentColor" stroke-width="2"/>
          <rect x="3" y="14" width="7" height="7" rx="1" stroke="currentColor" stroke-width="2"/>
          <rect x="14" y="14" width="7" height="7" rx="1" stroke="currentColor" stroke-width="2"/>
        </svg>`,
        bullets: [
          'Leer imágenes (análisis, OCR, diagnóstico visual, interpretación)',
          'Leer archivos: PDF, Excel, docs, presentaciones, código',
          'Generar archivos: PDF, Excel, Word, presentaciones, CSV',
          'Análisis de datos: gráficas, estadísticas, limpieza y tabulación',
          'Automatizaciones simples: scripts, workflows, lógica de negocio',
          'Integración con APIs (explicación, creación, documentación)',
          'Asesoría en arquitectura de software y ciberseguridad',
          'Creación de materiales educativos (pruebas, dinámicas, ejercicios)',
          'Diseño de interfaces (UI/UX): recomendaciones, prompts, wireframes'
        ],
        svgContent: `<svg viewBox="0 0 400 250" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id="tech-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" style="stop-color:#3b82f6;stop-opacity:1" />
              <stop offset="100%" style="stop-color:#8b5cf6;stop-opacity:1" />
            </linearGradient>
          </defs>
          <!-- Documento -->
          <rect x="50" y="60" width="80" height="100" rx="5" fill="url(#tech-gradient)" opacity="0.3"/>
          <line x1="65" y1="80" x2="115" y2="80" stroke="#3b82f6" stroke-width="2"/>
          <line x1="65" y1="100" x2="115" y2="100" stroke="#3b82f6" stroke-width="2"/>
          <line x1="65" y1="120" x2="100" y2="120" stroke="#3b82f6" stroke-width="2"/>
          <!-- Imagen -->
          <rect x="160" y="60" width="80" height="60" rx="5" fill="url(#tech-gradient)" opacity="0.3"/>
          <circle cx="180" cy="85" r="8" fill="#10b981"/>
          <polygon points="160,120 190,95 220,110 240,100 240,120" fill="#8b5cf6" opacity="0.5"/>
          <!-- Código -->
          <rect x="270" y="60" width="80" height="100" rx="5" fill="#1f2937"/>
          <text x="280" y="80" fill="#10b981" font-family="monospace" font-size="10">&lt;/&gt;</text>
          <line x1="285" y1="90" x2="335" y2="90" stroke="#3b82f6" stroke-width="1"/>
          <line x1="285" y1="100" x2="320" y2="100" stroke="#3b82f6" stroke-width="1"/>
          <line x1="285" y1="110" x2="330" y2="110" stroke="#3b82f6" stroke-width="1"/>
          <!-- Flechas procesamiento -->
          <path d="M 130 110 L 155 90" stroke="#667eea" stroke-width="2" marker-end="url(#arrowhead)"/>
          <path d="M 240 90 L 265 110" stroke="#667eea" stroke-width="2" marker-end="url(#arrowhead)"/>
          <!-- Texto -->
          <text x="200" y="210" text-anchor="middle" fill="#3b82f6" font-size="14" font-weight="bold">Análisis Multimodal</text>
          <defs>
            <marker id="arrowhead" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto">
              <polygon points="0 0, 10 3, 0 6" fill="#667eea"/>
            </marker>
          </defs>
        </svg>`
      }
    ],
    columns: 1,
    order: 9.1
  },

  // ChatGPT Slide 2: Buenas Prácticas
  {
    id: 'chatgpt-limitaciones',
    title: 'ChatGPT - Buenas Prácticas',
    type: SlideType.CARD_GRID,
    description: 'Aprende a usar ChatGPT de manera efectiva',
    cards: [
      {
        id: 'buenas-practicas',
        title: 'Buenas Prácticas',
        description: 'Recomendaciones para obtener mejores resultados',
        icon: `<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M9 12L11 14L15 10" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          <circle cx="12" cy="12" r="10" stroke="currentColor" stroke-width="2"/>
        </svg>`,
        bullets: [
          'Pedir formatos claros y específicos',
          'Dar ejemplos del resultado esperado',
          'Solicitar iteraciones y mejoras',
          'Usar prompts conversacionales, no comandos rígidos',
          'Proporcionar contexto relevante',
          'Ser específico sobre el tono y estilo deseado',
          'No accede a sistemas privados del usuario',
          'Puede equivocarse: siempre validar información crítica',
          'No reemplaza decisiones legales, médicas o fiscales'
        ],
        svgContent: `<svg viewBox="0 0 400 250" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id="practice-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" style="stop-color:#10b981;stop-opacity:1" />
              <stop offset="100%" style="stop-color:#059669;stop-opacity:1" />
            </linearGradient>
          </defs>
          <!-- Checklist -->
          <rect x="80" y="40" width="240" height="180" rx="10" fill="#f0fdf4" stroke="#10b981" stroke-width="2"/>
          <text x="200" y="70" text-anchor="middle" fill="#059669" font-size="16" font-weight="bold">Lista de Verificación</text>
          <!-- Items con checks -->
          <circle cx="110" cy="100" r="12" fill="url(#practice-gradient)"/>
          <path d="M 105 100 L 108 103 L 115 96" stroke="white" stroke-width="2" fill="none" stroke-linecap="round"/>
          <text x="135" y="105" fill="#374151" font-size="12">Contexto claro</text>
          <circle cx="110" cy="135" r="12" fill="url(#practice-gradient)"/>
          <path d="M 105 135 L 108 138 L 115 131" stroke="white" stroke-width="2" fill="none" stroke-linecap="round"/>
          <text x="135" y="140" fill="#374151" font-size="12">Ejemplos específicos</text>
          <circle cx="110" cy="170" r="12" fill="url(#practice-gradient)"/>
          <path d="M 105 170 L 108 173 L 115 166" stroke="white" stroke-width="2" fill="none" stroke-linecap="round"/>
          <text x="135" y="175" fill="#374151" font-size="12">Validar resultados</text>
          <!-- Estrella de calidad -->
          <polygon points="310,90 315,105 330,107 320,117 323,132 310,124 297,132 300,117 290,107 305,105" fill="#fbbf24"/>
          <text x="310" y="155" text-anchor="middle" fill="#f59e0b" font-size="11" font-weight="bold">Calidad</text>
        </svg>`
      }
    ],
    columns: 1,
    order: 9.2
  },

  // ChatGPT Slide 3: DALL·E
  {
    id: 'chatgpt-dalle',
    title: 'DALL·E - Generación de Imágenes',
    type: SlideType.CARD_GRID,
    description: 'Creación de imágenes con inteligencia artificial',
    cards: [
      {
        id: 'dalle-capacidades',
        title: 'Qué puede hacer',
        description: 'Capacidades de generación de imágenes con IA',
        icon: `<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="3" y="3" width="18" height="18" rx="2" stroke="currentColor" stroke-width="2"/>
          <circle cx="8.5" cy="8.5" r="1.5" fill="currentColor"/>
          <path d="M3 15L8 10L12 14L18 8L21 11V19C21 20.1 20.1 21 19 21H5C3.9 21 3 20.1 3 19V15Z" fill="currentColor" opacity="0.3"/>
        </svg>`,
        bullets: [
          'Crear imágenes realistas, ilustraciones o arte conceptual',
          'Generar estilos específicos (corporativo, cartoon, hiperrealista, minimalista)',
          'Modificar imágenes (inpainting y outpainting)',
          'Crear logos, personajes, escenarios y assets para apps',
          'Aumentar resolución y mejorar detalles',
          'Diseñar mockups para productos, webs, apps y publicidad'
        ],
        svgContent: `<svg viewBox="0 0 400 250" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id="dalle-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" style="stop-color:#ec4899;stop-opacity:1" />
              <stop offset="100%" style="stop-color:#8b5cf6;stop-opacity:1" />
            </linearGradient>
            <clipPath id="frame-clip">
              <rect x="60" y="50" width="280" height="150" rx="10"/>
            </clipPath>
          </defs>
          <!-- Marco de imagen -->
          <rect x="60" y="50" width="280" height="150" rx="10" fill="white" stroke="#ec4899" stroke-width="3"/>
          <!-- Contenido artístico -->
          <g clip-path="url(#frame-clip)">
            <!-- Montañas -->
            <polygon points="60,150 120,80 180,120 240,70 300,130 340,100 340,200 60,200" fill="url(#dalle-gradient)" opacity="0.6"/>
            <!-- Sol -->
            <circle cx="280" cy="90" r="25" fill="#fbbf24"/>
            <!-- Nubes -->
            <ellipse cx="120" cy="80" rx="30" ry="15" fill="white" opacity="0.8"/>
            <ellipse cx="140" cy="75" rx="25" ry="12" fill="white" opacity="0.8"/>
            <ellipse cx="260" cy="70" rx="35" ry="18" fill="white" opacity="0.8"/>
            <ellipse cx="285" cy="65" rx="28" ry="14" fill="white" opacity="0.8"/>
          </g>
          <!-- Paleta de colores -->
          <g transform="translate(100, 210)">
            <circle cx="0" cy="0" r="12" fill="#ec4899"/>
            <circle cx="30" cy="0" r="12" fill="#8b5cf6"/>
            <circle cx="60" cy="0" r="12" fill="#3b82f6"/>
            <circle cx="90" cy="0" r="12" fill="#10b981"/>
            <circle cx="120" cy="0" r="12" fill="#fbbf24"/>
          </g>
          <!-- Pincel icono -->
          <g transform="translate(320, 60) rotate(-45)">
            <rect x="0" y="0" width="8" height="30" rx="2" fill="#8b5cf6"/>
            <polygon points="0,30 8,30 4,40" fill="#ec4899"/>
          </g>
          <!-- Texto -->
          <text x="200" y="235" text-anchor="middle" fill="#ec4899" font-size="13" font-weight="bold">Generación de Imágenes IA</text>
        </svg>`
      }
    ],
    columns: 1,
    order: 9.3
  },

  // ChatGPT Slide 4: Sora
  {
    id: 'chatgpt-sora',
    title: 'Sora - Generación de Video',
    type: SlideType.CARD_GRID,
    description: 'Creación de videos con inteligencia artificial',
    cards: [
      {
        id: 'sora-usos',
        title: 'Usos Típicos',
        description: 'Aplicaciones principales de generación de video con IA',
        icon: `<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="2" y="5" width="20" height="14" rx="2" stroke="currentColor" stroke-width="2"/>
          <polygon points="10,9 10,15 15,12" fill="currentColor"/>
        </svg>`,
        bullets: [
          'Generar videos realistas o estilizados a partir de texto',
          'Transformar storyboard → video',
          'Simular cámaras, movimientos y entornos complejos',
          'Generar anuncios, reels, contenidos creativos',
          'Crear animaciones con personajes y narrativas',
          'Expandir o modificar videos ya existentes',
          'Marketing y publicidad digital',
          'Cine y producción de contenidos',
          'Visualización de ideas y conceptos',
          'Capacitación y educación interactiva'
        ],
        svgContent: `<svg viewBox="0 0 400 250" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id="sora-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" style="stop-color:#6366f1;stop-opacity:1" />
              <stop offset="100%" style="stop-color:#ec4899;stop-opacity:1" />
            </linearGradient>
          </defs>
          <!-- Pantalla de video -->
          <rect x="50" y="50" width="300" height="140" rx="8" fill="#1f2937" stroke="url(#sora-gradient)" stroke-width="3"/>
          <!-- Frames de video -->
          <g opacity="0.8">
            <rect x="70" y="70" width="60" height="40" rx="3" fill="#4338ca"/>
            <rect x="140" y="70" width="60" height="40" rx="3" fill="#7c3aed"/>
            <rect x="210" y="70" width="60" height="40" rx="3" fill="#db2777"/>
            <rect x="280" y="70" width="50" height="40" rx="3" fill="#ec4899"/>
          </g>
          <!-- Timeline -->
          <rect x="70" y="130" width="260" height="10" rx="5" fill="#374151"/>
          <rect x="70" y="130" width="140" height="10" rx="5" fill="url(#sora-gradient)"/>
          <!-- Botón play -->
          <circle cx="200" cy="115" r="20" fill="url(#sora-gradient)" opacity="0.9"/>
          <polygon points="195,105 195,125 210,115" fill="white"/>
          <!-- Iconos de cámara -->
          <g transform="translate(80, 160)">
            <rect x="0" y="0" width="30" height="20" rx="3" fill="#6366f1" opacity="0.7"/>
            <circle cx="15" cy="10" r="6" fill="white"/>
          </g>
          <g transform="translate(290, 160)">
            <rect x="0" y="0" width="30" height="20" rx="3" fill="#ec4899" opacity="0.7"/>
            <circle cx="15" cy="10" r="6" fill="white"/>
          </g>
          <!-- Texto -->
          <text x="200" y="215" text-anchor="middle" fill="#6366f1" font-size="14" font-weight="bold">Generación de Video IA</text>
          <text x="200" y="235" text-anchor="middle" fill="#94a3b8" font-size="11">(Disponible próximamente en tu región)</text>
        </svg>`
      }
    ],
    columns: 1,
    order: 9.4
  },

  // ChatGPT Slide 5: Codex
  {
    id: 'chatgpt-codex',
    title: 'Codex - Programación Asistida',
    type: SlideType.CARD_GRID,
    description: 'Tu asistente de programación con inteligencia artificial',
    cards: [
      {
        id: 'codex-capacidades',
        title: 'Qué puede hacer',
        description: 'Capacidades de programación y desarrollo',
        icon: `<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M16 18L22 12L16 6" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          <path d="M8 6L2 12L8 18" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>`,
        bullets: [
          'Generar código en múltiples lenguajes',
          'Crear APIs completas y modelado MVC',
          'Proponer arquitectura y patrones de diseño',
          'Realizar debugging guiado paso a paso',
          'Explicar código legacy o complejo',
          'Convertir código entre lenguajes',
          'Generar pruebas unitarias, integración y documentación técnica',
          'Desarrollar componentes UI y lógica frontend/backend'
        ],
        svgContent: `<svg viewBox="0 0 400 250" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id="codex-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" style="stop-color:#0ea5e9;stop-opacity:1" />
              <stop offset="100%" style="stop-color:#6366f1;stop-opacity:1" />
            </linearGradient>
          </defs>
          <!-- Editor de código -->
          <rect x="40" y="40" width="320" height="180" rx="8" fill="#1e293b" stroke="url(#codex-gradient)" stroke-width="3"/>
          <!-- Barra superior -->
          <rect x="40" y="40" width="320" height="30" rx="8" fill="#334155"/>
          <rect x="40" y="55" width="320" height="15" fill="#334155"/>
          <circle cx="55" cy="55" r="5" fill="#ef4444"/>
          <circle cx="75" cy="55" r="5" fill="#fbbf24"/>
          <circle cx="95" cy="55" r="5" fill="#10b981"/>
          <!-- Código simulado -->
          <g font-family="monospace" font-size="11">
            <text x="55" y="90" fill="#0ea5e9">function</text>
            <text x="110" y="90" fill="#fbbf24">processData</text>
            <text x="185" y="90" fill="#cbd5e1">(data) {</text>
            <text x="70" y="110" fill="#cbd5e1">return</text>
            <text x="110" y="110" fill="#cbd5e1">data.</text>
            <text x="145" y="110" fill="#a78bfa">map</text>
            <text x="170" y="110" fill="#cbd5e1">(item =></text>
            <text x="85" y="130" fill="#cbd5e1">item.</text>
            <text x="120" y="130" fill="#10b981">value</text>
            <text x="155" y="130" fill="#cbd5e1">* 2</text>
            <text x="70" y="150" fill="#cbd5e1">)</text>
            <text x="55" y="170" fill="#cbd5e1">}</text>
          </g>
          <!-- IA asistente -->
          <g transform="translate(270, 120)">
            <circle cx="30" cy="30" r="25" fill="url(#codex-gradient)" opacity="0.9"/>
            <path d="M 20 30 L 25 35 L 40 20" stroke="white" stroke-width="3" fill="none" stroke-linecap="round"/>
          </g>
          <!-- Iconos lenguajes -->
          <g transform="translate(50, 190)">
            <circle cx="0" cy="0" r="8" fill="#3b82f6"/>
            <text x="0" y="4" text-anchor="middle" fill="white" font-size="8" font-weight="bold">JS</text>
          </g>
          <g transform="translate(80, 190)">
            <circle cx="0" cy="0" r="8" fill="#10b981"/>
            <text x="0" y="4" text-anchor="middle" fill="white" font-size="8" font-weight="bold">PY</text>
          </g>
          <g transform="translate(110, 190)">
            <circle cx="0" cy="0" r="8" fill="#ef4444"/>
            <text x="0" y="4" text-anchor="middle" fill="white" font-size="8" font-weight="bold">TS</text>
          </g>
          <!-- Texto -->
          <text x="200" y="233" text-anchor="middle" fill="#0ea5e9" font-size="13" font-weight="bold">Programación Asistida por IA</text>
        </svg>`
      }
    ],
    columns: 1,
    order: 9.5
  },

  // ChatGPT Slide 6: Integración
  {
    id: 'chatgpt-integracion',
    title: '¿Cómo integrarlas juntas?',
    type: SlideType.CARD_GRID,
    description: 'Sinergias entre herramientas de IA',
    cards: [
      {
        id: 'chatgpt-dalle',
        title: 'ChatGPT + DALL·E',
        description: 'Creación de contenido visual y textual combinado',
        icon: `<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M21 11.5C21 16.75 16.75 21 11.5 21C6.25 21 2 16.75 2 11.5C2 6.25 6.25 2 11.5 2C16.75 2 21 6.25 21 11.5Z" stroke="currentColor" stroke-width="2"/>
          <path d="M22 2L2 22" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
        </svg>`,
        bullets: [
          'Guiones + imágenes para presentaciones',
          'Landing pages completas con diseño',
          'Contenido de marketing integrado',
          'Publicidad visual con copy persuasivo'
        ],
        svgContent: `<svg viewBox="0 0 350 200" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id="int1-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" style="stop-color:#667eea;stop-opacity:1" />
              <stop offset="50%" style="stop-color:#ec4899;stop-opacity:1" />
            </linearGradient>
          </defs>
          <rect x="20" y="30" width="130" height="140" rx="8" fill="#f3f4f6" stroke="#667eea" stroke-width="2"/>
          <text x="85" y="55" text-anchor="middle" fill="#667eea" font-size="12" font-weight="bold">ChatGPT</text>
          <line x1="30" y1="75" x2="140" y2="75" stroke="#374151" stroke-width="1"/>
          <line x1="30" y1="90" x2="140" y2="90" stroke="#374151" stroke-width="1"/>
          <line x1="30" y1="105" x2="120" y2="105" stroke="#374151" stroke-width="1"/>
          <rect x="200" y="30" width="130" height="140" rx="8" fill="#fce7f3" stroke="#ec4899" stroke-width="2"/>
          <text x="265" y="55" text-anchor="middle" fill="#ec4899" font-size="12" font-weight="bold">DALL·E</text>
          <rect x="210" y="70" width="110" height="90" rx="4" fill="url(#int1-gradient)" opacity="0.3"/>
          <path d="M 150 100 L 180 100" stroke="#10b981" stroke-width="3" marker-end="url(#arrow1)"/>
          <defs>
            <marker id="arrow1" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto">
              <polygon points="0 0, 10 3, 0 6" fill="#10b981"/>
            </marker>
          </defs>
        </svg>`
      },
      {
        id: 'chatgpt-codex',
        title: 'ChatGPT + Codex',
        description: 'Desarrollo de software de principio a fin',
        icon: `<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M13 2L3 14H12L11 22L21 10H12L13 2Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>`,
        bullets: [
          'Análisis de requerimientos',
          'Diseño de arquitectura',
          'Generación de código',
          'Pruebas automatizadas'
        ],
        svgContent: `<svg viewBox="0 0 350 200" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id="int2-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" style="stop-color:#667eea;stop-opacity:1" />
              <stop offset="100%" style="stop-color:#0ea5e9;stop-opacity:1" />
            </linearGradient>
          </defs>
          <circle cx="70" cy="100" r="40" fill="#f3f4f6" stroke="#667eea" stroke-width="2"/>
          <text x="70" y="90" text-anchor="middle" fill="#667eea" font-size="10" font-weight="bold">Chat</text>
          <text x="70" y="105" text-anchor="middle" fill="#667eea" font-size="10" font-weight="bold">GPT</text>
          <path d="M 110 100 L 135 100" stroke="#10b981" stroke-width="2" marker-end="url(#arrow2)"/>
          <rect x="135" y="70" width="80" height="60" rx="5" fill="#1e293b" stroke="#0ea5e9" stroke-width="2"/>
          <text x="175" y="90" text-anchor="middle" fill="#0ea5e9" font-size="10" font-weight="bold">Codex</text>
          <text x="175" y="110" text-anchor="middle" fill="#10b981" font-family="monospace" font-size="9">&lt;code/&gt;</text>
          <path d="M 215 100 L 240 100" stroke="#10b981" stroke-width="2" marker-end="url(#arrow2)"/>
          <circle cx="275" cy="100" r="35" fill="#10b981" opacity="0.2" stroke="#10b981" stroke-width="2"/>
          <path d="M 265 100 L 270 105 L 285 90" stroke="#10b981" stroke-width="3" fill="none"/>
          <defs>
            <marker id="arrow2" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto">
              <polygon points="0 0, 10 3, 0 6" fill="#10b981"/>
            </marker>
          </defs>
        </svg>`
      },
      {
        id: 'chatgpt-sora',
        title: 'ChatGPT + Sora',
        description: 'Producción de video con guiones IA',
        icon: `<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="2" y="6" width="20" height="12" rx="2" stroke="currentColor" stroke-width="2"/>
          <path d="M17 10.5V7.5L23 4V20L17 16.5V13.5" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>`,
        bullets: [
          'Concepto y guión narrativo',
          'Storyboard detallado',
          'Generación de video IA',
          'Post-producción y ajustes'
        ],
        svgContent: `<svg viewBox="0 0 350 200" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id="int3-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" style="stop-color:#667eea;stop-opacity:1" />
              <stop offset="100%" style="stop-color:#6366f1;stop-opacity:1" />
            </linearGradient>
          </defs>
          <rect x="20" y="40" width="100" height="120" rx="6" fill="#f3f4f6" stroke="#667eea" stroke-width="2"/>
          <text x="70" y="65" text-anchor="middle" fill="#667eea" font-size="11" font-weight="bold">Guión</text>
          <rect x="30" y="80" width="80" height="5" rx="2" fill="#667eea" opacity="0.3"/>
          <rect x="30" y="95" width="80" height="5" rx="2" fill="#667eea" opacity="0.3"/>
          <rect x="30" y="110" width="60" height="5" rx="2" fill="#667eea" opacity="0.3"/>
          <path d="M 120 100 L 160 100" stroke="#10b981" stroke-width="2" marker-end="url(#arrow3)"/>
          <rect x="160" y="50" width="170" height="100" rx="8" fill="#1f2937" stroke="#6366f1" stroke-width="3"/>
          <text x="245" y="75" text-anchor="middle" fill="#6366f1" font-size="12" font-weight="bold">Sora Video</text>
          <rect x="175" y="85" width="50" height="35" rx="3" fill="#4338ca"/>
          <rect x="235" y="85" width="50" height="35" rx="3" fill="#6366f1"/>
          <polygon points="245,100 245,110 255,105" fill="#10b981"/>
          <defs>
            <marker id="arrow3" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto">
              <polygon points="0 0, 10 3, 0 6" fill="#10b981"/>
            </marker>
          </defs>
        </svg>`
      },
      {
        id: 'chatgpt-coordinador',
        title: 'ChatGPT Coordinador',
        description: 'Orquesta todo el proceso de creación',
        icon: `<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="12" cy="12" r="3" stroke="currentColor" stroke-width="2"/>
          <path d="M12 2V6M12 18V22M22 12H18M6 12H2" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
          <path d="M19.07 4.93L16.24 7.76M7.76 16.24L4.93 19.07M19.07 19.07L16.24 16.24M7.76 7.76L4.93 4.93" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
        </svg>`,
        bullets: [
          'Planeación estratégica',
          'Gestión de prompts',
          'Iteraciones y mejoras',
          'Revisiones de calidad'
        ],
        svgContent: `<svg viewBox="0 0 350 200" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id="int4-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" style="stop-color:#667eea;stop-opacity:1" />
              <stop offset="100%" style="stop-color:#764ba2;stop-opacity:1" />
            </linearGradient>
          </defs>
          <circle cx="175" cy="100" r="40" fill="url(#int4-gradient)"/>
          <text x="175" y="105" text-anchor="middle" fill="white" font-size="12" font-weight="bold">ChatGPT</text>
          <circle cx="80" cy="50" r="25" fill="#ec4899" opacity="0.8"/>
          <text x="80" y="55" text-anchor="middle" fill="white" font-size="9" font-weight="bold">DALL·E</text>
          <circle cx="270" cy="50" r="25" fill="#6366f1" opacity="0.8"/>
          <text x="270" y="55" text-anchor="middle" fill="white" font-size="9" font-weight="bold">Sora</text>
          <circle cx="80" cy="150" r="25" fill="#0ea5e9" opacity="0.8"/>
          <text x="80" y="155" text-anchor="middle" fill="white" font-size="9" font-weight="bold">Codex</text>
          <circle cx="270" cy="150" r="25" fill="#10b981" opacity="0.8"/>
          <text x="270" y="155" text-anchor="middle" fill="white" font-size="9" font-weight="bold">Más</text>
          <line x1="145" y1="75" x2="98" y2="60" stroke="#667eea" stroke-width="2"/>
          <line x1="205" y1="75" x2="252" y2="60" stroke="#667eea" stroke-width="2"/>
          <line x1="145" y1="125" x2="98" y2="140" stroke="#667eea" stroke-width="2"/>
          <line x1="205" y1="125" x2="252" y2="140" stroke="#667eea" stroke-width="2"/>
        </svg>`
      }
    ],
    columns: 1,
    order: 9.6
  },

  // ChatGPT Slide 7: Casos Prácticos
  {
    id: 'chatgpt-casos-practicos',
    title: 'Casos Prácticos',
    type: SlideType.CARD_GRID,
    description: 'Ejemplos reales que puedes implementar hoy',
    cards: [
      {
        id: 'landing-page',
        title: 'Landing Page Completa',
        description: 'Crea una landing page en 1 hora',
        icon: `<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="3" y="3" width="18" height="18" rx="2" stroke="currentColor" stroke-width="2"/>
          <path d="M3 9H21" stroke="currentColor" stroke-width="2"/>
          <path d="M9 3V9" stroke="currentColor" stroke-width="2"/>
        </svg>`,
        bullets: [
          'Prompt: "Crea el contenido para una landing page de [producto]. Incluye: título impactante, subtítulo, 3 beneficios clave, CTA persuasivo y sección de preguntas frecuentes"',
          'Prompt: "Genera una imagen hero para esta landing page de [producto] con estilo [corporativo/moderno/minimalista]" (DALL·E)',
          'Prompt: "Escribe el código HTML/CSS/JS para implementar esta landing page con diseño responsivo" (Codex)'
        ],
        svgContent: `<svg viewBox="0 0 350 200" xmlns="http://www.w3.org/2000/svg">
          <rect x="50" y="30" width="250" height="140" rx="8" fill="white" stroke="#3b82f6" stroke-width="3"/>
          <rect x="50" y="30" width="250" height="30" rx="8" fill="#3b82f6"/>
          <text x="175" y="50" text-anchor="middle" fill="white" font-size="12" font-weight="bold">Tu Landing Page</text>
          <rect x="70" y="75" width="210" height="40" rx="4" fill="#dbeafe"/>
          <text x="175" y="95" text-anchor="middle" fill="#3b82f6" font-size="10" font-weight="bold">Hero Section</text>
          <rect x="70" y="125" width="100" height="30" rx="4" fill="#f3f4f6"/>
          <rect x="180" y="125" width="100" height="30" rx="4" fill="#f3f4f6"/>
          <rect x="120" y="162" width="110" height="15" rx="7" fill="#10b981"/>
          <text x="175" y="172" text-anchor="middle" fill="white" font-size="8" font-weight="bold">LLAMADA A ACCIÓN</text>
        </svg>`
      },
      {
        id: 'pitch-completo',
        title: 'Pitch Completo',
        description: 'Guion + imágenes + video para tu presentación',
        icon: `<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 2L2 7L12 12L22 7L12 2Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          <path d="M2 17L12 22L22 17" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          <path d="M2 12L12 17L22 12" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>`,
        bullets: [
          'Prompt: "Crea un guion de pitch de 3 minutos para [startup/producto]. Incluye: problema, solución, mercado, modelo de negocio y llamado a la acción"',
          'Prompt: "Genera 5 imágenes para ilustrar cada sección del pitch: [descripción de cada sección]" (DALL·E)',
          'Prompt: "Crea un video de 30 segundos que resuma el pitch con los siguientes puntos clave: [lista]" (Sora)'
        ],
        svgContent: `<svg viewBox="0 0 350 200" xmlns="http://www.w3.org/2000/svg">
          <rect x="40" y="30" width="100" height="140" rx="6" fill="#f3f4f6" stroke="#8b5cf6" stroke-width="2"/>
          <text x="90" y="50" text-anchor="middle" fill="#8b5cf6" font-size="9" font-weight="bold">Guion</text>
          <line x1="55" y1="65" x2="125" y2="65" stroke="#8b5cf6" stroke-width="1"/>
          <line x1="55" y1="75" x2="125" y2="75" stroke="#8b5cf6" stroke-width="1"/>
          <rect x="160" y="30" width="70" height="60" rx="4" fill="#ec4899" opacity="0.3"/>
          <text x="195" y="65" text-anchor="middle" fill="#ec4899" font-size="8" font-weight="bold">Imágenes</text>
          <rect x="240" y="30" width="70" height="60" rx="4" fill="#6366f1" opacity="0.3"/>
          <polygon points="265,50 265,65 280,57.5" fill="#6366f1"/>
          <text x="275" y="82" text-anchor="middle" fill="#6366f1" font-size="8" font-weight="bold">Video</text>
          <path d="M 90 175 L 90 185 L 195 185 L 195 95" stroke="#10b981" stroke-width="2" fill="none" marker-end="url(#arrow-pitch)"/>
          <defs>
            <marker id="arrow-pitch" markerWidth="8" markerHeight="8" refX="7" refY="2" orient="auto">
              <polygon points="0 0, 8 2, 0 4" fill="#10b981"/>
            </marker>
          </defs>
          <text x="175" y="165" text-anchor="middle" fill="#10b981" font-size="11" font-weight="bold">Pitch Completo</text>
        </svg>`
      },
      {
        id: 'prototipo-app',
        title: 'Prototipo de App',
        description: 'Diseño y prototipo funcional rápido',
        icon: `<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="5" y="2" width="14" height="20" rx="2" stroke="currentColor" stroke-width="2"/>
          <path d="M12 18H12.01" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
        </svg>`,
        bullets: [
          'Prompt: "Diseña la arquitectura de una app de [tipo]. Define: pantallas principales, flujo de usuario, características clave y tecnologías recomendadas"',
          'Prompt: "Genera mockups de 5 pantallas principales: [lista de pantallas]" (DALL·E)',
          'Prompt: "Crea los componentes React/Vue para [pantalla específica] con el siguiente diseño: [descripción]" (Codex)'
        ],
        svgContent: `<svg viewBox="0 0 350 200" xmlns="http://www.w3.org/2000/svg">
          <rect x="90" y="30" width="80" height="140" rx="8" fill="#1f2937" stroke="#0ea5e9" stroke-width="3"/>
          <rect x="95" y="40" width="70" height="10" rx="3" fill="#374151"/>
          <circle cx="130" cy="45" r="2" fill="#0ea5e9"/>
          <rect x="100" y="60" width="60" height="30" rx="3" fill="#0ea5e9" opacity="0.3"/>
          <rect x="100" y="95" width="60" height="8" rx="2" fill="#374151"/>
          <rect x="100" y="108" width="60" height="8" rx="2" fill="#374151"/>
          <rect x="100" y="121" width="40" height="8" rx="2" fill="#374151"/>
          <circle cx="130" cy="150" r="15" fill="#0ea5e9"/>
          <rect x="180" y="60" width="90" height="100" rx="6" fill="#f3f4f6" stroke="#10b981" stroke-width="2"/>
          <text x="225" y="80" text-anchor="middle" fill="#10b981" font-size="9" font-weight="bold">Código</text>
          <line x1="190" y1="90" x2="260" y2="90" stroke="#10b981" stroke-width="1"/>
          <line x1="190" y1="100" x2="260" y2="100" stroke="#10b981" stroke-width="1"/>
          <text x="175" y="190" text-anchor="middle" fill="#0ea5e9" font-size="11" font-weight="bold">Prototipo Funcional</text>
        </svg>`
      },
      {
        id: 'marketing-mensual',
        title: 'Contenido de Marketing',
        description: 'Plan de contenido mensual en minutos',
        icon: `<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M21 11.5C21 16.75 16.75 21 11.5 21C6.25 21 2 16.75 2 11.5C2 6.25 6.25 2 11.5 2C16.75 2 21 6.25 21 11.5Z" stroke="currentColor" stroke-width="2"/>
          <path d="M21 2V8H15" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          <path d="M18 15L21 8" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>`,
        bullets: [
          'Prompt: "Crea un plan de contenido para [red social] durante 1 mes. Incluye: 4 posts semanales con copy, hashtags y llamadas a la acción para [producto/marca]"',
          'Prompt: "Genera 16 imágenes para las publicaciones con estilo [descripción]" (DALL·E)',
          'Prompt: "Optimiza estos copies para SEO y engagement. Sugiere variaciones A/B para testing"'
        ],
        svgContent: `<svg viewBox="0 0 350 200" xmlns="http://www.w3.org/2000/svg">
          <rect x="30" y="20" width="290" height="160" rx="8" fill="white" stroke="#ec4899" stroke-width="2"/>
          <text x="175" y="45" text-anchor="middle" fill="#ec4899" font-size="13" font-weight="bold">Plan de Contenido - Mes</text>
          <rect x="50" y="60" width="60" height="50" rx="4" fill="#dbeafe" stroke="#3b82f6" stroke-width="1"/>
          <text x="80" y="80" text-anchor="middle" fill="#3b82f6" font-size="8">Semana 1</text>
          <rect x="125" y="60" width="60" height="50" rx="4" fill="#dbeafe" stroke="#3b82f6" stroke-width="1"/>
          <text x="155" y="80" text-anchor="middle" fill="#3b82f6" font-size="8">Semana 2</text>
          <rect x="200" y="60" width="60" height="50" rx="4" fill="#dbeafe" stroke="#3b82f6" stroke-width="1"/>
          <text x="230" y="80" text-anchor="middle" fill="#3b82f6" font-size="8">Semana 3</text>
          <rect x="275" y="60" width="30" height="50" rx="4" fill="#dbeafe" stroke="#3b82f6" stroke-width="1"/>
          <rect x="50" y="120" width="255" height="50" rx="4" fill="#fef3c7" stroke="#fbbf24" stroke-width="1"/>
          <text x="177" y="145" text-anchor="middle" fill="#f59e0b" font-size="9" font-weight="bold">Analytics & Optimización</text>
        </svg>`
      },
      {
        id: 'presentacion-ejecutiva',
        title: 'Presentación Ejecutiva',
        description: 'Diseño profesional y contenido impactante',
        icon: `<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="2" y="3" width="20" height="14" rx="2" stroke="currentColor" stroke-width="2"/>
          <path d="M12 17V21M8 21H16" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
        </svg>`,
        bullets: [
          'Prompt: "Crea el contenido para una presentación ejecutiva sobre [tema]. 10 slides: portada, agenda, contexto, análisis, propuesta, beneficios, roadmap, inversión, ROI y cierre"',
          'Prompt: "Genera gráficas y visualizaciones profesionales para los datos: [especificar datos]" (DALL·E)',
          'Prompt: "Sugiere diseño de slides con paleta de colores corporativa y tipografía profesional"'
        ],
        svgContent: `<svg viewBox="0 0 350 200" xmlns="http://www.w3.org/2000/svg">
          <rect x="50" y="40" width="120" height="90" rx="6" fill="white" stroke="#8b5cf6" stroke-width="2"/>
          <text x="110" y="60" text-anchor="middle" fill="#8b5cf6" font-size="9" font-weight="bold">Slide 1</text>
          <rect x="60" y="70" width="100" height="50" rx="3" fill="#f3f4f6"/>
          <rect x="185" y="40" width="120" height="90" rx="6" fill="white" stroke="#8b5cf6" stroke-width="2"/>
          <text x="245" y="60" text-anchor="middle" fill="#8b5cf6" font-size="9" font-weight="bold">Slide 2</text>
          <circle cx="210" cy="95" r="15" fill="#3b82f6" opacity="0.5"/>
          <circle cx="245" cy="95" r="20" fill="#10b981" opacity="0.5"/>
          <circle cx="280" cy="95" r="12" fill="#ec4899" opacity="0.5"/>
          <text x="175" y="160" text-anchor="middle" fill="#8b5cf6" font-size="11" font-weight="bold">Presentación Profesional</text>
          <path d="M 170 135 L 175 140" stroke="#10b981" stroke-width="2"/>
          <path d="M 175 140 L 190 125" stroke="#10b981" stroke-width="2"/>
        </svg>`
      }
    ],
    columns: 1,
    order: 9.7
  },

  // ChatGPT Slide 8: Cierre
  {
    id: 'chatgpt-cierre',
    title: 'La IA multiplica resultados',
    type: SlideType.CARD_GRID,
    description: 'La IA no sustituye talento; multiplica resultados',
    cards: [
      {
        id: 'lo-que-si-hace-ia',
        title: 'Lo que sí hace la IA',
        description: 'El verdadero potencial de la inteligencia artificial',
        icon: `<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M13 2L3 14H12L11 22L21 10H12L13 2Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>`,
        bullets: [
          'Permite que personas y empresas produzcan más rápido',
          'Mejora la calidad de los resultados',
          'Potencia la creatividad y exploración de ideas',
          'Automatiza tareas repetitivas y mecánicas',
          'Libera tiempo para trabajo estratégico',
          'Democratiza habilidades especializadas',
          'Acelera el aprendizaje y desarrollo',
          'Reduce costos de producción',
          'Facilita la experimentación sin riesgo',
          'Multiplica el impacto individual'
        ],
        svgContent: `<svg viewBox="0 0 400 250" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id="final-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" style="stop-color:#10b981;stop-opacity:1" />
              <stop offset="50%" style="stop-color:#3b82f6;stop-opacity:1" />
              <stop offset="100%" style="stop-color:#8b5cf6;stop-opacity:1" />
            </linearGradient>
          </defs>
          <!-- Persona -->
          <circle cx="100" cy="100" r="30" fill="#f3f4f6" stroke="#374151" stroke-width="2"/>
          <circle cx="100" cy="90" r="10" fill="#374151"/>
          <path d="M 85 105 Q 100 120 115 105" stroke="#374151" stroke-width="2" fill="none"/>
          <text x="100" y="155" text-anchor="middle" fill="#374151" font-size="11" font-weight="bold">Persona</text>
          <!-- Signo de multiplicación -->
          <text x="165" y="110" text-anchor="middle" fill="url(#final-gradient)" font-size="40" font-weight="bold">×</text>
          <!-- IA -->
          <circle cx="230" cy="100" r="35" fill="url(#final-gradient)"/>
          <text x="230" y="108" text-anchor="middle" fill="white" font-size="16" font-weight="bold">IA</text>
          <text x="230" y="155" text-anchor="middle" fill="url(#final-gradient)" font-size="11" font-weight="bold">Inteligencia Artificial</text>
          <!-- Signo igual -->
          <text x="300" y="110" text-anchor="middle" fill="#374151" font-size="35" font-weight="bold">=</text>
          <!-- Resultado multiplicado -->
          <g transform="translate(340, 70)">
            <polygon points="0,0 15,30 -15,30" fill="#10b981"/>
            <polygon points="0,30 15,60 -15,60" fill="#3b82f6"/>
            <polygon points="0,60 15,90 -15,90" fill="#8b5cf6"/>
          </g>
          <text x="340" y="180" text-anchor="middle" fill="#10b981" font-size="13" font-weight="bold">Resultados</text>
          <text x="340" y="195" text-anchor="middle" fill="#10b981" font-size="13" font-weight="bold">Multiplicados</text>
          <!-- Flechas de crecimiento -->
          <path d="M 360 80 L 370 70 L 380 60" stroke="#10b981" stroke-width="2" fill="none" marker-end="url(#arrow-up)"/>
          <path d="M 360 100 L 370 90 L 380 80" stroke="#3b82f6" stroke-width="2" fill="none" marker-end="url(#arrow-up)"/>
          <path d="M 360 120 L 370 110 L 380 100" stroke="#8b5cf6" stroke-width="2" fill="none" marker-end="url(#arrow-up)"/>
          <defs>
            <marker id="arrow-up" markerWidth="8" markerHeight="8" refX="7" refY="2" orient="auto">
              <polygon points="0 0, 8 2, 0 4" fill="#10b981"/>
            </marker>
          </defs>
        </svg>`
      }
    ],
    columns: 1,
    order: 9.8
  },

  // Vista 11: Gemini
  {
    id: 'gemini',
    title: 'Gemini',
    type: SlideType.RESOURCE,
    platform: 'Gemini - IA de Google',
    description: 'Integrado con el ecosistema de Google',
    logoUrl: `data:image/svg+xml,${encodeURIComponent(`<svg width="344" height="127" viewBox="0 0 344 127" fill="none" xmlns="http://www.w3.org/2000/svg"><mask id="mask0_958_15881" style="mask-type:alpha" maskUnits="userSpaceOnUse" x="0" y="0" width="344" height="127"><path fill-rule="evenodd" clip-rule="evenodd" d="M234.123 41.2204C235.489 44.3354 236.172 47.6638 236.172 51.2055C236.172 47.6638 236.833 44.3354 238.156 41.2204C239.521 38.1054 241.356 35.3958 243.66 33.0916C245.965 30.7873 248.674 28.9738 251.789 27.651C254.904 26.2855 258.233 25.6028 261.774 25.6028C258.233 25.6028 254.904 24.9414 251.789 23.6185C248.674 22.2531 245.965 20.4182 243.66 18.114C241.356 15.8097 239.521 13.1001 238.156 9.98507C236.833 6.87007 236.172 3.54171 236.172 0C236.172 3.54171 235.489 6.87007 234.123 9.98507C232.801 13.1001 230.987 15.8097 228.683 18.114C226.379 20.4182 223.669 22.2531 220.554 23.6185C217.439 24.9414 214.111 25.6028 210.569 25.6028C214.111 25.6028 217.439 26.2855 220.554 27.651C223.669 28.9738 226.379 30.7873 228.683 33.0916C230.987 35.3958 232.801 38.1054 234.123 41.2204ZM26.1532 123.14C31.3762 125.291 36.9448 126.366 42.859 126.366C48.8501 126.366 54.3035 125.406 59.2192 123.486C64.1349 121.566 68.3978 118.839 72.0078 115.306C75.6178 111.773 78.4213 107.587 80.4183 102.748C82.4153 97.8321 83.4138 92.4555 83.4138 86.6181V86.5029C83.4138 85.4276 83.337 84.429 83.1834 83.5073C83.1066 82.5856 82.9914 81.6255 82.8377 80.627H43.0895V90.1897H73.0447C72.7374 94.7982 71.6621 98.7922 69.8187 102.172C68.0521 105.475 65.7863 108.201 63.0212 110.352C60.3329 112.502 57.2222 114.115 53.689 115.191C50.2326 116.189 46.6226 116.689 42.859 116.689C38.7114 116.689 34.6789 115.92 30.7617 114.384C26.8445 112.848 23.3497 110.621 20.2774 107.702C17.2819 104.783 14.9008 101.288 13.1342 97.2176C11.3676 93.07 10.4843 88.4231 10.4843 83.2769C10.4843 78.1308 11.3292 73.5223 13.019 69.4514C14.7856 65.3038 17.1667 61.809 20.1622 58.9671C23.1577 56.0484 26.6141 53.8209 30.5313 52.2848C34.5253 50.7486 38.6346 49.9805 42.859 49.9805C46.0082 49.9805 49.0037 50.403 51.8456 51.2479C54.6875 52.0159 57.299 53.1297 59.68 54.589C62.1379 56.0484 64.2501 57.815 66.0167 59.8888L73.1599 52.5152C69.7035 48.598 65.287 45.564 59.9105 43.4134C54.6107 41.2628 48.9269 40.1875 42.859 40.1875C37.0216 40.1875 31.4914 41.2628 26.2684 43.4134C21.1223 45.564 16.5522 48.598 12.5582 52.5152C8.64093 56.4324 5.5686 61.0025 3.34116 66.2255C1.11372 71.4484 0 77.1323 0 83.2769C0 89.4216 1.11372 95.1054 3.34116 100.328C5.5686 105.551 8.64093 110.121 12.5582 114.039C16.4754 117.956 21.0071 120.99 26.1532 123.14ZM104.058 122.334C108.512 125.022 113.582 126.366 119.266 126.366C125.717 126.366 131.132 124.907 135.511 121.988C139.889 119.07 143.23 115.383 145.534 110.928L136.778 106.78C135.165 109.699 132.937 112.157 130.096 114.154C127.33 116.151 123.874 117.149 119.726 117.149C116.5 117.149 113.39 116.343 110.394 114.73C107.399 113.117 104.941 110.697 103.021 107.472C101.362 104.684 100.419 101.266 100.194 97.2176H146.456C146.533 96.8336 146.571 96.3343 146.571 95.7199C146.648 95.1054 146.686 94.5293 146.686 93.9917C146.686 88.1542 145.534 82.9697 143.23 78.438C141.002 73.9063 137.776 70.3731 133.552 67.8385C129.327 65.227 124.297 63.9212 118.459 63.9212C112.698 63.9212 107.668 65.3806 103.366 68.2993C99.065 71.1412 95.7238 74.9432 93.3428 79.7053C91.0385 84.4674 89.8864 89.652 89.8864 95.259C89.8864 101.25 91.1153 106.588 93.5732 111.274C96.1079 115.959 99.6027 119.646 104.058 122.334ZM100.781 88.8071C101.143 87.0971 101.66 85.4841 102.329 83.9682C103.789 80.6654 105.901 78.054 108.666 76.1338C111.508 74.1367 114.811 73.1382 118.574 73.1382C121.723 73.1382 124.373 73.6759 126.524 74.7512C128.675 75.7497 130.441 77.0554 131.824 78.6684C133.206 80.2814 134.205 82.0096 134.819 83.853C135.434 85.6196 135.779 87.271 135.856 88.8071H100.781ZM155.497 65.7646V124.523H165.866V91.8026C165.866 88.5767 166.519 85.5428 167.825 82.7009C169.131 79.859 170.936 77.5931 173.24 75.9033C175.544 74.1367 178.156 73.2534 181.074 73.2534C185.145 73.2534 188.294 74.444 190.522 76.825C192.826 79.1293 193.978 83.0849 193.978 88.6919V124.523H204.232V91.5722C204.232 88.3463 204.885 85.3507 206.191 82.5856C207.496 79.7437 209.301 77.4779 211.606 75.7881C213.91 74.0983 216.521 73.2534 219.44 73.2534C223.588 73.2534 226.775 74.4056 229.003 76.7098C231.307 79.0141 232.459 82.9697 232.459 88.5767V124.523H242.713V86.8485C242.713 80.0126 241.023 74.4824 237.644 70.2579C234.341 66.0335 229.156 63.9212 222.09 63.9212C217.405 63.9212 213.372 64.9965 209.993 67.1472C206.613 69.2978 203.925 72.0245 201.928 75.3273C200.545 71.9477 198.279 69.221 195.13 67.1472C192.058 64.9965 188.333 63.9212 183.955 63.9212C181.497 63.9212 179.039 64.4205 176.581 65.419C174.2 66.3407 172.088 67.608 170.244 69.221C168.401 70.7572 166.942 72.4854 165.866 74.4056H165.405V65.7646H155.497ZM252.045 65.7646V124.523H262.299V65.7646H252.045ZM251.93 53.3217C253.389 54.7042 255.118 55.3955 257.115 55.3955C259.188 55.3955 260.917 54.7042 262.299 53.3217C263.682 51.8623 264.373 50.1341 264.373 48.1371C264.373 46.0633 263.682 44.3351 262.299 42.9526C260.917 41.4932 259.188 40.7635 257.115 40.7635C255.118 40.7635 253.389 41.4932 251.93 42.9526C250.547 44.3351 249.856 46.0633 249.856 48.1371C249.856 50.1341 250.547 51.8623 251.93 53.3217ZM271.929 65.7646V124.523H282.298V91.8026C282.298 88.6535 282.951 85.6964 284.257 82.9313C285.64 80.0894 287.521 77.7851 289.902 76.0185C292.283 74.1751 295.087 73.2534 298.313 73.2534C302.614 73.2534 306.071 74.444 308.682 76.825C311.293 79.1293 312.599 83.0849 312.599 88.6919V124.523H322.968V86.8485C322.968 79.9358 321.125 74.4056 317.438 70.2579C313.751 66.0335 308.336 63.9212 301.193 63.9212C296.969 63.9212 293.128 64.9581 289.672 67.032C286.216 69.1058 283.719 71.5637 282.183 74.4056H281.722V65.7646H271.929ZM331.672 65.7646V124.523H341.926V65.7646H331.672ZM331.557 53.3217C333.016 54.7042 334.745 55.3955 336.742 55.3955C338.815 55.3955 340.544 54.7042 341.926 53.3217C343.309 51.8623 344 50.1341 344 48.1371C344 46.0633 343.309 44.3351 341.926 42.9526C340.544 41.4932 338.815 40.7635 336.742 40.7635C334.745 40.7635 333.016 41.4932 331.557 42.9526C330.175 44.3351 329.483 46.0633 329.483 48.1371C329.483 50.1341 330.175 51.8623 331.557 53.3217Z" fill="white"/></mask><g mask="url(#mask0_958_15881)"><rect x="-158.25" y="-455.443" width="832.09" height="685.324" fill="url(#paint0_linear_958_15881)"/></g><defs><linearGradient id="paint0_linear_958_15881" x1="-57.4049" y1="130.441" x2="354.97" y2="30.369" gradientUnits="userSpaceOnUse"><stop stop-color="#439DDF"/><stop offset="0.524208" stop-color="#4F87ED"/><stop offset="0.781452" stop-color="#9476C5"/><stop offset="0.888252" stop-color="#BC688E"/><stop offset="1" stop-color="#D6645D"/></linearGradient></defs></svg>`)}`,
    resources: [
      {
        type: 'web',
        label: 'Sitio Web',
        url: 'https://gemini.google.com',
        icon: '🌐'
      },
      {
        type: 'app',
        label: 'App Móvil',
        url: 'https://play.google.com/store/apps/details?id=com.google.android.apps.bard',
        icon: '📱'
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
      'Veo 3.1: Generación de video con IA',
      'Aplicación móvil para Android e iOS'
    ],
    order: 10
  },

  // Gemini Slide 1: Capacidades Principales
  {
    id: 'gemini-capacidades',
    title: 'Gemini - Capacidades Principales',
    type: SlideType.CARD_GRID,
    description: 'IA multimodal de Google para productividad y creatividad',
    cards: [
      {
        id: 'procesamiento-multimodal',
        title: 'Procesamiento Multimodal',
        description: 'Comprende y combina diferentes tipos de información',
        icon: `<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="3" y="3" width="7" height="7" rx="1" stroke="currentColor" stroke-width="2"/>
          <rect x="14" y="3" width="7" height="7" rx="1" stroke="currentColor" stroke-width="2"/>
          <rect x="3" y="14" width="7" height="7" rx="1" stroke="currentColor" stroke-width="2"/>
          <rect x="14" y="14" width="7" height="7" rx="1" stroke="currentColor" stroke-width="2"/>
        </svg>`,
        bullets: [
          'Procesa texto, código, imágenes y audio simultáneamente',
          'Razonamiento avanzado para tareas complejas de lógica y matemáticas',
          'Contexto ampliado: mantiene conversaciones largas',
          'Generación multimodal: responde con diferentes formatos'
        ],
        svgContent: `<svg viewBox="0 0 400 250" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id="gemini-grad1" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" style="stop-color:#4285f4;stop-opacity:1" />
              <stop offset="50%" style="stop-color:#34a853;stop-opacity:1" />
              <stop offset="100%" style="stop-color:#fbbc04;stop-opacity:1" />
            </linearGradient>
          </defs>
          <circle cx="200" cy="125" r="60" fill="url(#gemini-grad1)" opacity="0.3"/>
          <circle cx="120" cy="80" r="30" fill="#4285f4" opacity="0.7"/>
          <text x="120" y="85" text-anchor="middle" fill="white" font-size="10" font-weight="bold">Texto</text>
          <circle cx="280" cy="80" r="30" fill="#34a853" opacity="0.7"/>
          <text x="280" y="85" text-anchor="middle" fill="white" font-size="10" font-weight="bold">Código</text>
          <circle cx="120" cy="170" r="30" fill="#fbbc04" opacity="0.7"/>
          <text x="120" y="175" text-anchor="middle" fill="white" font-size="10" font-weight="bold">Imagen</text>
          <circle cx="280" cy="170" r="30" fill="#ea4335" opacity="0.7"/>
          <text x="280" y="175" text-anchor="middle" fill="white" font-size="10" font-weight="bold">Audio</text>
          <line x1="145" y1="90" x2="175" y2="110" stroke="#4285f4" stroke-width="2"/>
          <line x1="255" y1="90" x2="225" y2="110" stroke="#34a853" stroke-width="2"/>
          <line x1="145" y1="160" x2="175" y2="140" stroke="#fbbc04" stroke-width="2"/>
          <line x1="255" y1="160" x2="225" y2="140" stroke="#ea4335" stroke-width="2"/>
          <text x="200" y="220" text-anchor="middle" fill="#4285f4" font-size="14" font-weight="bold">Procesamiento Unificado</text>
        </svg>`
      },
      {
        id: 'capacidades-centrales',
        title: 'Capacidades Centrales',
        description: 'Herramientas para trabajo profesional y creativo',
        icon: `<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 2L2 7L12 12L22 7L12 2Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          <path d="M2 17L12 22L22 17" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          <path d="M2 12L12 17L22 12" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>`,
        bullets: [
          'Generación de contenido: correos, artículos, guiones y contenido creativo',
          'Análisis de datos: visualizaciones, tablas y gráficos',
          'Codificación y debugging en múltiples lenguajes',
          'Interacción con imágenes: descripción y análisis visual',
          'Traducción avanzada y resumen de documentos'
        ],
        svgContent: `<svg viewBox="0 0 400 250" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id="gemini-grad2" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" style="stop-color:#4285f4;stop-opacity:1" />
              <stop offset="100%" style="stop-color:#34a853;stop-opacity:1" />
            </linearGradient>
          </defs>
          <rect x="50" y="50" width="80" height="100" rx="8" fill="#f3f4f6" stroke="#4285f4" stroke-width="2"/>
          <text x="90" y="75" text-anchor="middle" fill="#4285f4" font-size="10" font-weight="bold">Contenido</text>
          <line x1="60" y1="90" x2="120" y2="90" stroke="#4285f4" stroke-width="1"/>
          <line x1="60" y1="100" x2="120" y2="100" stroke="#4285f4" stroke-width="1"/>
          <line x1="60" y1="110" x2="100" y2="110" stroke="#4285f4" stroke-width="1"/>
          <rect x="160" y="50" width="80" height="100" rx="8" fill="#1f2937" stroke="#34a853" stroke-width="2"/>
          <text x="200" y="75" text-anchor="middle" fill="#34a853" font-size="10" font-weight="bold">Código</text>
          <text x="200" y="100" text-anchor="middle" fill="#34a853" font-family="monospace" font-size="9">&lt;/&gt;</text>
          <rect x="270" y="50" width="80" height="100" rx="8" fill="#fef3c7" stroke="#fbbc04" stroke-width="2"/>
          <text x="310" y="75" text-anchor="middle" fill="#fbbc04" font-size="10" font-weight="bold">Análisis</text>
          <circle cx="295" cy="100" r="15" fill="#4285f4" opacity="0.3"/>
          <rect x="320" y="110" width="15" height="30" fill="#34a853" opacity="0.5"/>
          <rect x="335" y="120" width="10" height="20" fill="#ea4335" opacity="0.5"/>
          <text x="200" y="220" text-anchor="middle" fill="#34a853" font-size="13" font-weight="bold">Suite de Herramientas Profesionales</text>
        </svg>`
      }
    ],
    columns: 1,
    order: 10.1
  },

  // Gemini Slide 2: Herramientas Especializadas
  {
    id: 'gemini-herramientas',
    title: 'Gemini - Herramientas Especializadas',
    type: SlideType.CARD_GRID,
    description: 'Potencia tu flujo de trabajo con herramientas especializadas de Google',
    cards: [
      {
        id: 'notebooklm',
        title: 'NotebookLM',
        description: 'Asistente de investigación con análisis de fuentes',
        icon: `<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          <path d="M6.5 2H20V22H6.5A2.5 2.5 0 0 1 4 19.5V4.5A2.5 2.5 0 0 1 6.5 2Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>`,
        bullets: [
          'Transforma documentos (PDFs, Google Docs, URLs) en conocimiento interactivo',
          '"Conversa" con tus fuentes: pregunta y obtén respuestas fundamentadas',
          'Genera resúmenes, fichas de estudio y planes de acción',
          'Grounding: cita siempre la fuente exacta de la información',
          'Organiza e interconecta ideas entre diferentes fuentes',
          'Crea podcasts de IA a partir de tus documentos'
        ],
        svgContent: `<svg viewBox="0 0 400 250" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id="notebook-grad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" style="stop-color:#4285f4;stop-opacity:1" />
              <stop offset="100%" style="stop-color:#7c3aed;stop-opacity:1" />
            </linearGradient>
          </defs>
          <rect x="60" y="40" width="130" height="170" rx="8" fill="white" stroke="url(#notebook-grad)" stroke-width="3"/>
          <rect x="60" y="40" width="130" height="30" fill="url(#notebook-grad)"/>
          <text x="125" y="60" text-anchor="middle" fill="white" font-size="11" font-weight="bold">NotebookLM</text>
          <circle cx="80" cy="95" r="8" fill="#4285f4"/>
          <line x1="95" y1="95" x2="170" y2="95" stroke="#374151" stroke-width="1"/>
          <circle cx="80" cy="120" r="8" fill="#34a853"/>
          <line x1="95" y1="120" x2="170" y2="120" stroke="#374151" stroke-width="1"/>
          <circle cx="80" cy="145" r="8" fill="#fbbc04"/>
          <line x1="95" y1="145" x2="160" y2="145" stroke="#374151" stroke-width="1"/>
          <rect x="70" y="170" width="110" height="30" rx="4" fill="#f3f4f6"/>
          <text x="125" y="188" text-anchor="middle" fill="#4285f4" font-size="9" font-weight="bold">Fuentes Citadas</text>
          <g transform="translate(220, 80)">
            <circle cx="40" cy="40" r="35" fill="url(#notebook-grad)" opacity="0.2"/>
            <path d="M 30 40 Q 40 30 50 40 T 70 40" stroke="#4285f4" stroke-width="2" fill="none"/>
            <circle cx="40" cy="55" r="3" fill="#4285f4"/>
            <path d="M 25 50 L 30 55 L 40 45" stroke="#4285f4" stroke-width="2" fill="none"/>
          </g>
          <text x="200" y="230" text-anchor="middle" fill="#4285f4" font-size="12" font-weight="bold">Investigación Inteligente</text>
        </svg>`
      },
      {
        id: 'generacion-imagenes',
        title: 'Generación de Imágenes',
        description: 'Creación visual instantánea con Imagen 3',
        icon: `<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="3" y="3" width="18" height="18" rx="2" stroke="currentColor" stroke-width="2"/>
          <circle cx="8.5" cy="8.5" r="1.5" fill="currentColor"/>
          <path d="M21 15L16 10L5 21" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>`,
        bullets: [
          'Crea imágenes únicas de alta calidad desde texto',
          'Text-to-Image: fotorrealistas o estilos artísticos variados',
          'Edición creativa: modifica partes específicas con instrucciones',
          'Seguridad: filtros y marcas de agua digitales'
        ],
        svgContent: `<svg viewBox="0 0 400 250" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id="imagen-grad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" style="stop-color:#ea4335;stop-opacity:1" />
              <stop offset="100%" style="stop-color:#fbbc04;stop-opacity:1" />
            </linearGradient>
          </defs>
          <rect x="50" y="40" width="140" height="170" rx="10" fill="white" stroke="url(#imagen-grad)" stroke-width="3"/>
          <rect x="60" y="50" width="120" height="100" rx="5" fill="url(#imagen-grad)" opacity="0.3"/>
          <circle cx="90" cy="80" r="15" fill="#fbbc04"/>
          <polygon points="60,150 90,110 120,130 150,100 180,150" fill="url(#imagen-grad)" opacity="0.5"/>
          <g transform="translate(70, 165)">
            <circle cx="0" cy="0" r="6" fill="#ea4335"/>
            <circle cx="20" cy="0" r="6" fill="#fbbc04"/>
            <circle cx="40" cy="0" r="6" fill="#34a853"/>
            <circle cx="60" cy="0" r="6" fill="#4285f4"/>
          </g>
          <g transform="translate(230, 90)">
            <path d="M 0 0 L 40 0 L 40 40 L 0 40 Z" stroke="#4285f4" stroke-width="2" fill="none"/>
            <path d="M 10 20 L 30 20 M 20 10 L 20 30" stroke="#4285f4" stroke-width="2"/>
          </g>
          <g transform="translate(280, 90)">
            <rect x="0" y="0" width="40" height="40" rx="4" fill="#34a853" opacity="0.2"/>
            <path d="M 10 20 L 15 25 L 30 10" stroke="#34a853" stroke-width="2" fill="none"/>
          </g>
          <text x="200" y="230" text-anchor="middle" fill="#ea4335" font-size="13" font-weight="bold">Creación Visual Instantánea</text>
        </svg>`
      },
      {
        id: 'google-ai-studio',
        title: 'Google AI Studio',
        description: 'Laboratorio de IA para desarrolladores',
        icon: `<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M3 3H10V10H3V3Z" stroke="currentColor" stroke-width="2"/>
          <path d="M14 3H21V10H14V3Z" stroke="currentColor" stroke-width="2"/>
          <path d="M14 14H21V21H14V14Z" stroke="currentColor" stroke-width="2"/>
          <path d="M3 14H10V21H3V14Z" stroke="currentColor" stroke-width="2"/>
        </svg>`,
        bullets: [
          'Prompt Engineering: diseña, prueba y optimiza prompts',
          'Acceso a API: gestiona claves y llamadas fácilmente',
          'Configuración del modelo: ajusta temperatura y creatividad',
          'Integración con Búsqueda de Google para respuestas actualizadas',
          'Despliegue: genera código para Node.js, Python, etc.'
        ],
        svgContent: `<svg viewBox="0 0 400 250" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id="studio-grad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" style="stop-color:#4285f4;stop-opacity:1" />
              <stop offset="100%" style="stop-color:#ea4335;stop-opacity:1" />
            </linearGradient>
          </defs>
          <rect x="40" y="40" width="320" height="180" rx="10" fill="#1f2937" stroke="url(#studio-grad)" stroke-width="3"/>
          <rect x="40" y="40" width="320" height="35" fill="#374151"/>
          <circle cx="60" cy="57" r="6" fill="#ea4335"/>
          <circle cx="80" cy="57" r="6" fill="#fbbc04"/>
          <circle cx="100" cy="57" r="6" fill="#34a853"/>
          <text x="200" y="63" text-anchor="middle" fill="#4285f4" font-size="12" font-weight="bold">AI Studio</text>
          <rect x="55" y="95" width="150" height="110" rx="5" fill="#0f172a"/>
          <text x="130" y="115" text-anchor="middle" fill="#4285f4" font-size="10" font-weight="bold">Prompt</text>
          <line x1="65" y1="130" x2="195" y2="130" stroke="#34a853" stroke-width="1"/>
          <line x1="65" y1="145" x2="195" y2="145" stroke="#34a853" stroke-width="1"/>
          <line x1="65" y1="160" x2="180" y2="160" stroke="#34a853" stroke-width="1"/>
          <rect x="225" y="95" width="120" height="110" rx="5" fill="#f3f4f6"/>
          <text x="285" y="115" text-anchor="middle" fill="#4285f4" font-size="10" font-weight="bold">Respuesta</text>
          <circle cx="250" cy="140" r="12" fill="#4285f4" opacity="0.3"/>
          <path d="M 245 140 L 250 145 L 260 135" stroke="#4285f4" stroke-width="2" fill="none"/>
          <rect x="250" y="165" width="70" height="8" rx="2" fill="#34a853" opacity="0.4"/>
          <rect x="250" y="178" width="60" height="8" rx="2" fill="#fbbc04" opacity="0.4"/>
          <text x="200" y="240" text-anchor="middle" fill="#4285f4" font-size="12" font-weight="bold">Laboratorio de Desarrollo IA</text>
        </svg>`
      }
    ],
    columns: 1,
    order: 10.2
  },

  // Vista 12: Claude
  {
    id: 'claude',
    title: 'Claude',
    type: SlideType.RESOURCE,
    platform: 'Claude - Anthropic',
    description: 'IA enfocada en conversaciones naturales y análisis profundo',
    logoUrl: `data:image/svg+xml,${encodeURIComponent(`<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"><rect width="100" height="100" rx="12" fill="#D97757"/><path d="M29.05,76.54L50,65.87l0.17-0.5-0.17-0.28h-0.5l-1.72-0.11-5.88-0.16-5.1-0.21-4.95-0.27-1.24-0.27-1.17-1.54 0.12-0.77 1.05-0.7 1.5,0.13 3.31,0.23 4.97,0.34 3.6,0.21 5.34,0.56h0.85l0.12-0.34-0.29-0.21-0.23-0.21-5.14-3.48-5.57-3.68-2.92-2.12-1.58-1.07-0.79-1.01-0.34-2.2 1.43-1.58 1.92,0.13 0.49,0.13 1.95,1.5 4.16,3.22 5.43,4-0.36-0.6-2.95-5.34-3.15-5.43-1.4-2.25-0.37-1.35c-0.13-0.56-0.23-1.02-0.23-1.59l1.63-2.21 0.9-0.29 2.17,0.29 0.92,0.79 1.35,3.09 2.19,4.86 3.39,6.61 0.99,1.96 0.53,1.82 0.2,0.56h0.34v-0.32l0.28-3.72 0.52-4.57 0.5-5.88 0.17-1.66 0.82-1.99 1.63-1.07 1.27,0.61 1.05,1.5-0.15,0.97-0.62,4.04-1.22,6.33-0.79,4.24h0.46l0.53-0.53 2.14-2.85 3.6-4.51 1.59-1.79 1.86-1.97 1.19-0.94h2.25l1.66,2.46-0.74,2.54-2.32,2.94-1.92,2.49-2.76,3.71-1.72,2.97 0.16,0.24 0.41-0.04 6.23-1.32 3.36-0.61 4.01-0.69 1.82,0.85 0.2,0.86-0.71,1.76-4.29,1.06-5.04,1.01-7.5,1.77-0.09,0.07 0.11,0.13 3.38,0.32 1.45,0.08h3.54l6.59,0.49 1.72,1.14 1.03,1.39-0.17,1.06-2.65,1.35-3.58-0.85-8.35-1.99-2.86-0.71h-0.4v0.24l2.39,2.33 4.37,3.95 5.47,5.09 0.28,1.26-0.7,0.99-0.74-0.11-4.81-3.62-1.86-1.63-4.2-3.54h-0.28v0.37l0.97,1.42 5.11,7.68 0.27,2.36-0.37,0.77-1.33,0.46-1.46-0.27-2.99-4.2-3.09-4.73-2.49-4.24-0.3,0.17-1.47,15.83-0.69,0.81-1.59,0.61-1.33-1.01-0.7-1.63 0.7-3.22 0.85-4.2 0.69-3.34 0.62-4.15 0.37-1.38-0.02-0.09-0.3,0.04-3.13,4.29-4.76,6.43-3.76,4.03-0.9,0.36-1.56-0.81 0.15-1.45 0.87-1.29 5.21-6.62 3.14-4.1 2.03-2.37-0.01-0.34h-0.12L29.05,76.54z" fill="white"/></svg>`)}`,
    resources: [
      {
        type: 'web',
        label: 'Sitio Web',
        url: 'https://claude.ai',
        icon: '🌐'
      },
      {
        type: 'app',
        label: 'App Móvil',
        url: 'https://claude.ai/download',
        icon: '📱'
      }
    ],
    features: [
      'Excelente para análisis de documentos largos',
      'Muy bueno para código',
      'Conversaciones más naturales',
      'Aplicación móvil para iOS y Android'
    ],
    order: 11
  },

  // Claude Slide 1: Capacidades Principales
  {
    id: 'claude-capacidades',
    title: 'Claude - Capacidades Principales',
    type: SlideType.CARD_GRID,
    description: 'IA conversacional de Anthropic enfocada en análisis profundo y desarrollo',
    cards: [
      {
        id: 'analisis-creacion',
        title: 'Análisis y Creación de Contenido',
        description: 'Procesamiento inteligente de documentos y generación profesional',
        icon: `<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M14 2H6C5.46957 2 4.96086 2.21071 4.58579 2.58579C4.21071 2.96086 4 3.46957 4 4V20C4 20.5304 4.21071 21.0391 4.58579 21.4142C4.96086 21.7893 5.46957 22 6 22H18C18.5304 22 19.0391 21.7893 19.4142 21.4142C19.7893 21.0391 20 20.5304 20 20V8L14 2Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          <path d="M14 2V8H20" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>`,
        bullets: [
          'Lee y analiza PDF, Word, Excel, imágenes y código',
          'Extrae información clave de documentos largos (hasta 200k tokens)',
          'Compara y sintetiza información de múltiples fuentes',
          'OCR: transcribe texto de imágenes',
          'Redacción profesional: documentos, reportes, propuestas',
          'Crea presentaciones (.pptx) y hojas de cálculo (.xlsx)',
          'Correos electrónicos y contenido para marketing'
        ],
        svgContent: `<svg viewBox="0 0 400 250" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id="claude-grad1" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" style="stop-color:#D97757;stop-opacity:1" />
              <stop offset="100%" style="stop-color:#c96643;stop-opacity:1" />
            </linearGradient>
          </defs>
          <rect x="50" y="40" width="140" height="170" rx="10" fill="white" stroke="url(#claude-grad1)" stroke-width="3"/>
          <rect x="60" y="50" width="120" height="25" rx="4" fill="url(#claude-grad1)" opacity="0.2"/>
          <text x="120" y="68" text-anchor="middle" fill="#D97757" font-size="10" font-weight="bold">Documento</text>
          <line x1="70" y1="90" x2="170" y2="90" stroke="#D97757" stroke-width="1.5"/>
          <line x1="70" y1="105" x2="170" y2="105" stroke="#D97757" stroke-width="1.5"/>
          <line x1="70" y1="120" x2="160" y2="120" stroke="#D97757" stroke-width="1.5"/>
          <line x1="70" y1="135" x2="170" y2="135" stroke="#D97757" stroke-width="1.5"/>
          <rect x="70" y="155" width="110" height="45" rx="6" fill="#fef3f0"/>
          <text x="125" y="175" text-anchor="middle" fill="#D97757" font-size="9" font-weight="bold">Análisis</text>
          <text x="125" y="188" text-anchor="middle" fill="#c96643" font-size="8">Insights</text>
          <path d="M 190 125 L 220 125" stroke="#10b981" stroke-width="3" marker-end="url(#arrow-claude)"/>
          <rect x="220" y="60" width="130" height="130" rx="10" fill="#fef3f0" stroke="#10b981" stroke-width="2"/>
          <text x="285" y="85" text-anchor="middle" fill="#10b981" font-size="11" font-weight="bold">Resultado</text>
          <rect x="235" y="100" width="100" height="8" rx="2" fill="#D97757" opacity="0.4"/>
          <rect x="235" y="115" width="90" height="8" rx="2" fill="#D97757" opacity="0.4"/>
          <rect x="235" y="130" width="100" height="8" rx="2" fill="#D97757" opacity="0.4"/>
          <rect x="235" y="145" width="85" height="8" rx="2" fill="#D97757" opacity="0.4"/>
          <circle cx="285" cy="170" r="12" fill="#10b981" opacity="0.3"/>
          <path d="M 280 170 L 283 173 L 290 166" stroke="#10b981" stroke-width="2" fill="none"/>
          <defs>
            <marker id="arrow-claude" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto">
              <polygon points="0 0, 10 3, 0 6" fill="#10b981"/>
            </marker>
          </defs>
          <text x="200" y="230" text-anchor="middle" fill="#D97757" font-size="13" font-weight="bold">Procesamiento Inteligente</text>
        </svg>`
      },
      {
        id: 'programacion-desarrollo',
        title: 'Programación y Desarrollo',
        description: 'Asistencia técnica avanzada para desarrolladores',
        icon: `<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M16 18L22 12L16 6" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          <path d="M8 6L2 12L8 18" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>`,
        bullets: [
          'Escritura de código en múltiples lenguajes',
          'Depuración y optimización de código existente',
          'Explicación de conceptos técnicos complejos',
          'Creación de scripts y automatizaciones',
          'Desarrollo web: HTML, CSS, JavaScript, React, Vue',
          'Arquitectura de software y mejores prácticas'
        ],
        svgContent: `<svg viewBox="0 0 400 250" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id="claude-code-grad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" style="stop-color:#D97757;stop-opacity:1" />
              <stop offset="100%" style="stop-color:#10b981;stop-opacity:1" />
            </linearGradient>
          </defs>
          <rect x="40" y="40" width="320" height="170" rx="10" fill="#1e293b" stroke="url(#claude-code-grad)" stroke-width="3"/>
          <rect x="40" y="40" width="320" height="30" fill="#334155"/>
          <circle cx="60" cy="55" r="5" fill="#ef4444"/>
          <circle cx="80" cy="55" r="5" fill="#fbbf24"/>
          <circle cx="100" cy="55" r="5" fill="#10b981"/>
          <text x="200" y="60" text-anchor="middle" fill="#D97757" font-size="11" font-weight="bold">code.js</text>
          <g font-family="monospace" font-size="10">
            <text x="55" y="95" fill="#c792ea">function</text>
            <text x="115" y="95" fill="#82aaff">processData</text>
            <text x="195" y="95" fill="#c3e88d">(data) {</text>
            <text x="70" y="115" fill="#89ddff">const</text>
            <text x="110" y="115" fill="#eeffff">result</text>
            <text x="155" y="115" fill="#89ddff">=</text>
            <text x="175" y="115" fill="#eeffff">data.</text>
            <text x="215" y="115" fill="#82aaff">map</text>
            <text x="245" y="115" fill="#c3e88d">(</text>
            <text x="85" y="135" fill="#f07178">item</text>
            <text x="120" y="135" fill="#89ddff">=></text>
            <text x="150" y="135" fill="#f07178">item</text>
            <text x="185" y="135" fill="#eeffff">.</text>
            <text x="195" y="135" fill="#82aaff">value</text>
            <text x="235" y="135" fill="#89ddff">*</text>
            <text x="250" y="135" fill="#f78c6c">2</text>
            <text x="70" y="155" fill="#c3e88d">)</text>
            <text x="70" y="175" fill="#89ddff">return</text>
            <text x="125" y="175" fill="#eeffff">result</text>
            <text x="55" y="195" fill="#c3e88d">}</text>
          </g>
          <text x="200" y="235" text-anchor="middle" fill="#D97757" font-size="12" font-weight="bold">Asistencia en Desarrollo</text>
        </svg>`
      }
    ],
    columns: 1,
    order: 11.1
  },

  // Claude Slide 2: Claude Code
  {
    id: 'claude-code',
    title: 'Claude Code - Entorno de Desarrollo',
    type: SlideType.CARD_GRID,
    description: 'Herramientas especializadas para desarrollo de software',
    cards: [
      {
        id: 'code-web',
        title: 'Claude Code Web',
        description: 'Entorno de desarrollo en el navegador',
        icon: `<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="2" y="3" width="20" height="14" rx="2" stroke="currentColor" stroke-width="2"/>
          <path d="M8 2V5M16 2V5M2 10H22" stroke="currentColor" stroke-width="2"/>
        </svg>`,
        bullets: [
          'Entorno de desarrollo integrado en el navegador',
          'Ejecuta código en tiempo real',
          'Crea y edita archivos directamente',
          'Vista previa de aplicaciones web',
          'Ideal para prototipos rápidos y desarrollo interactivo',
          'Sin necesidad de configuración local'
        ],
        svgContent: `<svg viewBox="0 0 400 250" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id="code-web-grad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" style="stop-color:#D97757;stop-opacity:1" />
              <stop offset="100%" style="stop-color:#4285f4;stop-opacity:1" />
            </linearGradient>
          </defs>
          <rect x="40" y="40" width="320" height="180" rx="10" fill="white" stroke="url(#code-web-grad)" stroke-width="3"/>
          <rect x="40" y="40" width="320" height="35" fill="url(#code-web-grad)"/>
          <text x="200" y="62" text-anchor="middle" fill="white" font-size="12" font-weight="bold">Claude Code Web</text>
          <rect x="50" y="90" width="140" height="120" rx="5" fill="#0f172a"/>
          <text x="120" y="110" text-anchor="middle" fill="#D97757" font-size="9" font-weight="bold">Editor</text>
          <line x1="60" y1="125" x2="180" y2="125" stroke="#10b981" stroke-width="1"/>
          <line x1="60" y1="140" x2="180" y2="140" stroke="#10b981" stroke-width="1"/>
          <line x1="60" y1="155" x2="165" y2="155" stroke="#10b981" stroke-width="1"/>
          <line x1="60" y1="170" x2="180" y2="170" stroke="#10b981" stroke-width="1"/>
          <rect x="210" y="90" width="140" height="120" rx="5" fill="#f0f9ff"/>
          <text x="280" y="110" text-anchor="middle" fill="#4285f4" font-size="9" font-weight="bold">Vista Previa</text>
          <rect x="220" y="125" width="120" height="75" rx="4" fill="white" stroke="#4285f4" stroke-width="1"/>
          <rect x="225" y="130" width="110" height="15" fill="#4285f4" opacity="0.2"/>
          <rect x="230" y="155" width="50" height="35" fill="#10b981" opacity="0.3"/>
          <rect x="290" y="155" width="35" height="35" fill="#D97757" opacity="0.3"/>
          <text x="200" y="238" text-anchor="middle" fill="#D97757" font-size="11" font-weight="bold">Desarrollo en el Navegador</text>
        </svg>`
      },
      {
        id: 'code-cli',
        title: 'Claude Code CLI',
        description: 'Herramienta de línea de comandos',
        icon: `<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="2" y="4" width="20" height="16" rx="2" stroke="currentColor" stroke-width="2"/>
          <path d="M6 8L10 12L6 16" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          <path d="M13 16H18" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
        </svg>`,
        bullets: [
          'Herramienta de línea de comandos para desarrolladores',
          'Integración directa con tu entorno local',
          'Delega tareas de código desde la terminal',
          'Automatización de flujos de trabajo',
          'Acceso al modelo claude-sonnet-4-5',
          'Perfecto para CI/CD y scripts'
        ],
        svgContent: `<svg viewBox="0 0 400 250" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id="cli-grad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" style="stop-color:#10b981;stop-opacity:1" />
              <stop offset="100%" style="stop-color:#D97757;stop-opacity:1" />
            </linearGradient>
          </defs>
          <rect x="40" y="50" width="320" height="160" rx="8" fill="#0f172a" stroke="url(#cli-grad)" stroke-width="3"/>
          <rect x="40" y="50" width="320" height="30" fill="#1e293b"/>
          <circle cx="60" cy="65" r="5" fill="#ef4444"/>
          <circle cx="80" cy="65" r="5" fill="#fbbf24"/>
          <circle cx="100" cy="65" r="5" fill="#10b981"/>
          <text x="200" y="70" text-anchor="middle" fill="#10b981" font-size="11" font-weight="bold">terminal</text>
          <g font-family="monospace" font-size="10">
            <text x="55" y="105" fill="#10b981">$</text>
            <text x="70" y="105" fill="#82aaff">claude</text>
            <text x="120" y="105" fill="#c3e88d">code</text>
            <text x="160" y="105" fill="#f78c6c">--task</text>
            <text x="210" y="105" fill="#eeffff">"create app"</text>
            <rect x="55" y="115" width="10" height="12" fill="#10b981" opacity="0.5">
              <animate attributeName="opacity" values="0;1;0" dur="1s" repeatCount="indefinite"/>
            </rect>
            <text x="55" y="145" fill="#eeffff">Creating</text>
            <text x="115" y="145" fill="#82aaff">React</text>
            <text x="160" y="145" fill="#eeffff">app...</text>
            <text x="55" y="165" fill="#10b981">✓</text>
            <text x="70" y="165" fill="#10b981">App</text>
            <text x="105" y="165" fill="#eeffff">created</text>
            <text x="165" y="165" fill="#eeffff">successfully</text>
            <text x="55" y="185" fill="#10b981">$</text>
            <rect x="70" y="175" width="10" height="12" fill="#10b981"/>
          </g>
          <text x="200" y="232" text-anchor="middle" fill="#10b981" font-size="11" font-weight="bold">Desarrollo desde Terminal</text>
        </svg>`
      }
    ],
    columns: 1,
    order: 11.2
  },

  // Claude Slide 3: Herramientas Avanzadas y Casos de Uso
  {
    id: 'claude-herramientas-acceso',
    title: 'Claude - Herramientas y Acceso',
    type: SlideType.CARD_GRID,
    description: 'Funcionalidades avanzadas y formas de usar Claude',
    cards: [
      {
        id: 'herramientas-avanzadas',
        title: 'Herramientas Avanzadas',
        description: 'Funcionalidades especializadas para productividad',
        icon: `<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 2V6M12 18V22" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
          <path d="M4.93 4.93L7.76 7.76M16.24 16.24L19.07 19.07" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
          <path d="M2 12H6M18 12H22" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
          <path d="M4.93 19.07L7.76 16.24M16.24 7.76L19.07 4.93" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
          <circle cx="12" cy="12" r="3" stroke="currentColor" stroke-width="2"/>
        </svg>`,
        bullets: [
          'Búsqueda web: información actualizada más allá de enero 2025',
          'Gestión de calendario: crear, editar y buscar eventos',
          'Análisis de datos: procesamiento de Excel/CSV con visualizaciones',
          'Configuración de alarmas y temporizadores',
          'Búsqueda en conversaciones anteriores',
          'Memoria de contexto entre sesiones'
        ],
        svgContent: `<svg viewBox="0 0 400 250" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id="tools-grad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" style="stop-color:#D97757;stop-opacity:1" />
              <stop offset="100%" style="stop-color:#4285f4;stop-opacity:1" />
            </linearGradient>
          </defs>
          <circle cx="200" cy="125" r="45" fill="url(#tools-grad)" opacity="0.3"/>
          <circle cx="200" cy="125" r="25" fill="url(#tools-grad)"/>
          <text x="200" y="132" text-anchor="middle" fill="white" font-size="12" font-weight="bold">Claude</text>
          <g transform="translate(110, 75)">
            <circle cx="0" cy="0" r="18" fill="#4285f4" opacity="0.8"/>
            <path d="M -5 0 L 0 5 L 8 -5" stroke="white" stroke-width="2" fill="none"/>
          </g>
          <text x="110" y="108" text-anchor="middle" fill="#4285f4" font-size="8">Web</text>
          <g transform="translate(290, 75)">
            <circle cx="0" cy="0" r="18" fill="#10b981" opacity="0.8"/>
            <rect x="-6" y="-6" width="12" height="12" stroke="white" stroke-width="1.5" fill="none"/>
          </g>
          <text x="290" y="108" text-anchor="middle" fill="#10b981" font-size="8">Calendario</text>
          <g transform="translate(110, 175)">
            <circle cx="0" cy="0" r="18" fill="#fbbf24" opacity="0.8"/>
            <rect x="-5" y="-2" width="10" height="6" fill="white"/>
            <rect x="-3" y="1" width="6" height="3" fill="#fbbf24"/>
          </g>
          <text x="110" y="208" text-anchor="middle" fill="#fbbf24" font-size="8">Datos</text>
          <g transform="translate(290, 175)">
            <circle cx="0" cy="0" r="18" fill="#ec4899" opacity="0.8"/>
            <circle cx="0" cy="0" r="5" stroke="white" stroke-width="1.5" fill="none"/>
            <circle cx="0" cy="-9" r="2" fill="white"/>
          </g>
          <text x="290" y="208" text-anchor="middle" fill="#ec4899" font-size="8">Búsqueda</text>
          <line x1="175" y1="105" x2="140" y2="85" stroke="#D97757" stroke-width="1.5"/>
          <line x1="225" y1="105" x2="260" y2="85" stroke="#D97757" stroke-width="1.5"/>
          <line x1="175" y1="145" x2="140" y2="165" stroke="#D97757" stroke-width="1.5"/>
          <line x1="225" y1="145" x2="260" y2="165" stroke="#D97757" stroke-width="1.5"/>
        </svg>`
      },
      {
        id: 'emprendedores-acceso',
        title: 'Para Emprendedores y Empresas',
        description: 'Aplicaciones prácticas y formas de acceso',
        icon: `<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M17 21V19C17 17.9391 16.5786 16.9217 15.8284 16.1716C15.0783 15.4214 14.0609 15 13 15H5C3.93913 15 2.92172 15.4214 2.17157 16.1716C1.42143 16.9217 1 17.9391 1 19V21" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          <circle cx="9" cy="7" r="4" stroke="currentColor" stroke-width="2"/>
          <path d="M23 21V19C22.9993 18.1137 22.7044 17.2528 22.1614 16.5523C21.6184 15.8519 20.8581 15.3516 20 15.13" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          <path d="M16 3.13C16.8604 3.35031 17.623 3.85071 18.1676 4.55232C18.7122 5.25392 19.0078 6.11683 19.0078 7.005C19.0078 7.89318 18.7122 8.75608 18.1676 9.45769C17.623 10.1593 16.8604 10.6597 16 10.88" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>`,
        bullets: [
          'Consultoría tecnológica y estrategia digital',
          'Desarrollo de MVPs y prototipos rápidos',
          'Análisis de mercado y competencia',
          'Automatización de procesos empresariales',
          'Web: claude.ai | Móvil: iOS/Android | Desktop: App escritorio',
          'API: Integración en apps propias | CLI: Terminal'
        ],
        svgContent: `<svg viewBox="0 0 400 250" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id="business-grad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" style="stop-color:#D97757;stop-opacity:1" />
              <stop offset="100%" style="stop-color:#10b981;stop-opacity:1" />
            </linearGradient>
          </defs>
          <rect x="60" y="60" width="100" height="130" rx="8" fill="#fef3f0" stroke="#D97757" stroke-width="2"/>
          <text x="110" y="85" text-anchor="middle" fill="#D97757" font-size="10" font-weight="bold">Empresa</text>
          <rect x="75" y="100" width="70" height="20" rx="3" fill="#D97757" opacity="0.2"/>
          <text x="110" y="113" text-anchor="middle" fill="#D97757" font-size="8">Estrategia</text>
          <rect x="75" y="130" width="70" height="20" rx="3" fill="#D97757" opacity="0.2"/>
          <text x="110" y="143" text-anchor="middle" fill="#D97757" font-size="8">Desarrollo</text>
          <rect x="75" y="160" width="70" height="20" rx="3" fill="#D97757" opacity="0.2"/>
          <text x="110" y="173" text-anchor="middle" fill="#D97757" font-size="8">Análisis</text>
          <path d="M 160 125 L 185 125" stroke="#10b981" stroke-width="3" marker-end="url(#arrow-biz)"/>
          <circle cx="225" cy="125" r="40" fill="url(#business-grad)" opacity="0.3"/>
          <circle cx="225" cy="125" r="25" fill="url(#business-grad)"/>
          <text x="225" y="132" text-anchor="middle" fill="white" font-size="11" font-weight="bold">Claude</text>
          <g transform="translate(285, 90)">
            <rect x="0" y="0" width="40" height="30" rx="3" fill="white" stroke="#4285f4" stroke-width="1.5"/>
            <text x="20" y="18" text-anchor="middle" fill="#4285f4" font-size="7">Web</text>
          </g>
          <g transform="translate(285, 130)">
            <rect x="0" y="0" width="40" height="30" rx="3" fill="white" stroke="#10b981" stroke-width="1.5"/>
            <text x="20" y="18" text-anchor="middle" fill="#10b981" font-size="7">API</text>
          </g>
          <defs>
            <marker id="arrow-biz" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto">
              <polygon points="0 0, 10 3, 0 6" fill="#10b981"/>
            </marker>
          </defs>
          <text x="200" y="225" text-anchor="middle" fill="#D97757" font-size="11" font-weight="bold">Soluciones Empresariales</text>
        </svg>`
      },
      {
        id: 'consideraciones',
        title: 'Consideraciones Importantes',
        description: 'Limitaciones y mejores prácticas',
        icon: `<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="12" cy="12" r="10" stroke="currentColor" stroke-width="2"/>
          <path d="M12 8V12" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
          <circle cx="12" cy="16" r="0.5" fill="currentColor" stroke="currentColor" stroke-width="1"/>
        </svg>`,
        bullets: [
          'Conocimiento base hasta enero 2025 (búsqueda web para info actual)',
          'No reemplaza criterio humano en decisiones críticas',
          'Requiere verificación para información crítica',
          'No genera contenido malicioso o dañino',
          'Mejor como complemento al trabajo humano',
          'Énfasis en seguridad y utilidad práctica'
        ],
        svgContent: `<svg viewBox="0 0 400 250" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id="warning-grad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" style="stop-color:#fbbf24;stop-opacity:1" />
              <stop offset="100%" style="stop-color:#f59e0b;stop-opacity:1" />
            </linearGradient>
          </defs>
          <circle cx="200" cy="125" r="60" fill="url(#warning-grad)" opacity="0.2"/>
          <path d="M 200 70 L 240 165 L 160 165 Z" stroke="url(#warning-grad)" stroke-width="3" fill="none"/>
          <path d="M 200 110 L 200 135" stroke="#fbbf24" stroke-width="3" stroke-linecap="round"/>
          <circle cx="200" cy="150" r="3" fill="#fbbf24"/>
          <text x="200" y="200" text-anchor="middle" fill="#f59e0b" font-size="12" font-weight="bold">Verificar Información Crítica</text>
          <g transform="translate(280, 80)">
            <circle cx="0" cy="0" r="20" fill="#10b981" opacity="0.3"/>
            <path d="M -8 0 L -3 5 L 8 -7" stroke="#10b981" stroke-width="2.5" fill="none"/>
          </g>
          <text x="280" y="115" text-anchor="middle" fill="#10b981" font-size="8">Complemento</text>
          <g transform="translate(120, 80)">
            <circle cx="0" cy="0" r="20" fill="#D97757" opacity="0.3"/>
            <circle cx="0" cy="0" r="10" stroke="#D97757" stroke-width="2" fill="none"/>
          </g>
          <text x="120" y="115" text-anchor="middle" fill="#D97757" font-size="8">Seguridad</text>
        </svg>`
      }
    ],
    columns: 1,
    order: 11.3
  },

  // Vista 13: Grok
  {
    id: 'grok',
    title: 'Grok',
    type: SlideType.RESOURCE,
    platform: 'Grok - X/Twitter',
    description: 'IA con acceso a información en tiempo real de Twitter/X',
    logoUrl: `data:image/svg+xml,${encodeURIComponent(`<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"><rect width="100" height="100" rx="12" fill="#000000"/><g transform="translate(20, 30)"><path d="M7.95,12.62L14.61,7.71c0.33-0.24 0.79-0.16 1-0.09 0.82,1.94 0.46,4.47-1.47,6.41-1.93,1.94-4.41,2.29-6.25,1.48l-2.26,0.99c3.26,2.22,6.95,1.77,9.24-0.52 1.95-1.95 2.45-4.45 2-6.98l0.01,0.01C25.99,4.8,26.89,3.39,28.97,0.51,29.01,0.44,29.05,0.37,29.09,0.3l-2.75,2.75v-0.01L7.93,12.63" fill="#FFFFFF"/><path d="M6.57,13.82C4.24,11.59,4.64,8.15,6.62,6.17c1.47-1.47,3.92-2.07,6-1.27l2.26-1c-0.41-0.29-0.99-0.61-1.63-0.83-2.7-1.11-5.92-0.5-8.19,1.77-2.13,2.13-2.73,5.33-1.47,8.12 0.85,2.07-0.3,3.56-1.64,5.01-0.5,0.52-1,1.05-1.46,1.61L6.56,13.83" fill="#FFFFFF"/></g></svg>`)}`,
    resources: [
      {
        type: 'web',
        label: 'Sitio Web',
        url: 'https://x.com/i/grok',
        icon: '🌐'
      },
      {
        type: 'app',
        label: 'App X (Grok incluido)',
        url: 'https://x.com/download',
        icon: '📱'
      }
    ],
    features: [
      'Requiere suscripción X Premium+',
      'Acceso a información en tiempo real de Twitter/X',
      'Útil para tendencias y noticias actuales',
      'Disponible dentro de la app de X/Twitter'
    ],
    order: 12
  },

  // Grok - Slides de Contenido Detallado
  {
    id: 'grok-capacidades-principales',
    title: 'Grok 4 - Capacidades Principales',
    type: SlideType.CARD_GRID,
    description: 'La IA sin censura con acceso en tiempo real a X/Twitter',
    cards: [
      {
        id: 'grok-introduccion',
        title: 'Grok 4 - El Asistente Sin Límites',
        icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/>
          <polyline points="7.5 4.21 12 6.81 16.5 4.21"/>
          <polyline points="7.5 19.79 7.5 14.6 3 12"/>
          <polyline points="21 12 16.5 14.6 16.5 19.79"/>
          <polyline points="3.27 6.96 12 12.01 20.73 6.96"/>
          <line x1="12" y1="22.08" x2="12" y2="12"/>
        </svg>`,
        bullets: [
          'Desarrollado por xAI, la compañía de IA de Elon Musk',
          'Modelo actual: Grok 4 (versión más avanzada)',
          'Enfoque en respuestas directas, sin filtros excesivos',
          'Acceso exclusivo para suscriptores de X Premium+',
          'Entrenado con datos masivos de X y otras fuentes',
          'Diseñado para ser útil, honesto y transparente',
          'Compite directamente con ChatGPT, Claude y Gemini'
        ],
        svgContent: `<svg viewBox="0 0 400 250" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id="grokGrad1" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" style="stop-color:#1d9bf0;stop-opacity:0.2" />
              <stop offset="100%" style="stop-color:#1d9bf0;stop-opacity:0.05" />
            </linearGradient>
            <linearGradient id="grokGrad2" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" style="stop-color:#1d9bf0;stop-opacity:1" />
              <stop offset="100%" style="stop-color:#0d7abf;stop-opacity:1" />
            </linearGradient>
          </defs>

          <!-- Background pattern -->
          <rect width="400" height="250" fill="url(#grokGrad1)"/>

          <!-- Central hexagon -->
          <g transform="translate(200, 125)">
            <path d="M0,-60 L52,-30 L52,30 L0,60 L-52,30 L-52,-30 Z"
                  fill="none" stroke="url(#grokGrad2)" stroke-width="3" opacity="0.8"/>
            <path d="M0,-45 L39,-22.5 L39,22.5 L0,45 L-39,22.5 L-39,-22.5 Z"
                  fill="url(#grokGrad2)" opacity="0.1"/>
          </g>

          <!-- Orbiting elements - más puntos para composición homogénea -->
          <g opacity="0.6">
            <!-- Punto 1: Norte (arriba) -->
            <circle cx="200" cy="50" r="8" fill="#1d9bf0">
              <animateTransform attributeName="transform" type="rotate"
                from="0 200 125" to="360 200 125" dur="20s" repeatCount="indefinite"/>
            </circle>
            <!-- Punto 2: Sur (abajo) -->
            <circle cx="200" cy="200" r="6" fill="#1d9bf0">
              <animateTransform attributeName="transform" type="rotate"
                from="180 200 125" to="540 200 125" dur="15s" repeatCount="indefinite"/>
            </circle>
            <!-- Punto 3: Oeste (izquierda) -->
            <circle cx="100" cy="125" r="5" fill="#0d7abf">
              <animateTransform attributeName="transform" type="rotate"
                from="90 200 125" to="450 200 125" dur="18s" repeatCount="indefinite"/>
            </circle>
            <!-- Punto 4: Este (derecha) -->
            <circle cx="300" cy="125" r="7" fill="#0d7abf">
              <animateTransform attributeName="transform" type="rotate"
                from="270 200 125" to="630 200 125" dur="22s" repeatCount="indefinite"/>
            </circle>
            <!-- Punto 5: Noreste -->
            <circle cx="260" cy="75" r="6" fill="#1d9bf0">
              <animateTransform attributeName="transform" type="rotate"
                from="45 200 125" to="405 200 125" dur="17s" repeatCount="indefinite"/>
            </circle>
            <!-- Punto 6: Sureste -->
            <circle cx="260" cy="175" r="5" fill="#0d7abf">
              <animateTransform attributeName="transform" type="rotate"
                from="135 200 125" to="495 200 125" dur="19s" repeatCount="indefinite"/>
            </circle>
            <!-- Punto 7: Suroeste -->
            <circle cx="140" cy="175" r="7" fill="#1d9bf0">
              <animateTransform attributeName="transform" type="rotate"
                from="225 200 125" to="585 200 125" dur="21s" repeatCount="indefinite"/>
            </circle>
            <!-- Punto 8: Noroeste -->
            <circle cx="140" cy="75" r="6" fill="#0d7abf">
              <animateTransform attributeName="transform" type="rotate"
                from="315 200 125" to="675 200 125" dur="16s" repeatCount="indefinite"/>
            </circle>
          </g>

          <!-- Center icon -->
          <g transform="translate(200, 125)">
            <path d="M-15,-20 L0,-10 L15,-20 M-15,20 L0,10 L15,20 M-20,0 L20,0"
                  stroke="#1d9bf0" stroke-width="3" fill="none" stroke-linecap="round"/>
          </g>
        </svg>`
      },
      {
        id: 'grok-tiempo-real',
        title: 'Búsqueda en Tiempo Real - La Ventaja Clave',
        icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <path d="M22 12h-4l-3 9L9 3l-3 9H2"/>
        </svg>`,
        bullets: [
          'Conversaciones naturales e informativas con contexto',
          'Resúmenes, redacción de correos y creación de contenido',
          'Conexión directa con X (Twitter) para información actualizada al segundo',
          'Análisis de tendencias, noticias y conversaciones globales en tiempo real',
          'Ideal para monitoreo de marca, análisis de sentimiento y detección de crisis',
          'Información que otros modelos de IA no tienen hasta que se actualicen',
          'Solución de problemas matemáticos y análisis de datos'
        ],
        svgContent: `<svg viewBox="0 0 400 250" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id="grokRealTimeGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" style="stop-color:#1d9bf0;stop-opacity:0.2" />
              <stop offset="100%" style="stop-color:#1d9bf0;stop-opacity:0.05" />
            </linearGradient>
          </defs>

          <rect width="400" height="250" fill="url(#grokRealTimeGrad)"/>

          <!-- Globe -->
          <g transform="translate(200, 125)">
            <circle r="60" fill="none" stroke="#1d9bf0" stroke-width="2" opacity="0.3"/>
            <ellipse rx="60" ry="20" fill="none" stroke="#1d9bf0" stroke-width="2" opacity="0.3"/>
            <ellipse rx="20" ry="60" fill="none" stroke="#1d9bf0" stroke-width="2" opacity="0.3"/>

            <!-- Pulse waves -->
            <circle r="40" fill="none" stroke="#1d9bf0" stroke-width="2" opacity="0.8">
              <animate attributeName="r" values="40;70;40" dur="2s" repeatCount="indefinite"/>
              <animate attributeName="opacity" values="0.8;0;0.8" dur="2s" repeatCount="indefinite"/>
            </circle>
            <circle r="40" fill="none" stroke="#1d9bf0" stroke-width="2" opacity="0.8">
              <animate attributeName="r" values="40;70;40" dur="2s" begin="1s" repeatCount="indefinite"/>
              <animate attributeName="opacity" values="0.8;0;0.8" dur="2s" begin="1s" repeatCount="indefinite"/>
            </circle>
          </g>
        </svg>`
      }
    ],
    columns: 1,
    order: 12.1
  },
  {
    id: 'grok-herramientas',
    title: 'Grok 4 - Herramientas Especializadas',
    type: SlideType.CARD_GRID,
    description: 'Potentes capacidades para desarrollo, análisis y creatividad',
    cards: [
      {
        id: 'grok-programacion',
        title: 'Programación y Ejecución de Código',
        icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <polyline points="16 18 22 12 16 6"/>
          <polyline points="8 6 2 12 8 18"/>
        </svg>`,
        bullets: [
          'Genera código en múltiples lenguajes (Python, JavaScript, Java, etc.)',
          'Explica código existente línea por línea',
          'Depura errores y sugiere mejoras',
          'Puede ejecutar código Python en tiempo real',
          'Crea scripts para automatización de tareas',
          'Genera documentación técnica completa'
        ],
        svgContent: `<svg viewBox="0 0 400 250" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id="grokCodeGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" style="stop-color:#1d9bf0;stop-opacity:0.2" />
              <stop offset="100%" style="stop-color:#1d9bf0;stop-opacity:0.05" />
            </linearGradient>
          </defs>

          <rect width="400" height="250" fill="url(#grokCodeGrad)"/>

          <!-- Code window -->
          <rect x="50" y="40" width="300" height="170" rx="8" fill="#ffffff" opacity="0.1" stroke="#1d9bf0" stroke-width="2"/>
          <rect x="50" y="40" width="300" height="30" rx="8" fill="#1d9bf0" opacity="0.3"/>
          <circle cx="70" cy="55" r="5" fill="#1d9bf0"/>
          <circle cx="90" cy="55" r="5" fill="#1d9bf0" opacity="0.6"/>
          <circle cx="110" cy="55" r="5" fill="#1d9bf0" opacity="0.3"/>

          <!-- Code lines -->
          <rect x="70" y="90" width="120" height="4" fill="#1d9bf0" opacity="0.6" rx="2"/>
          <rect x="70" y="110" width="180" height="4" fill="#1d9bf0" opacity="0.4" rx="2"/>
          <rect x="90" y="130" width="140" height="4" fill="#1d9bf0" opacity="0.6" rx="2"/>
          <rect x="90" y="150" width="160" height="4" fill="#1d9bf0" opacity="0.4" rx="2"/>
          <rect x="70" y="170" width="100" height="4" fill="#1d9bf0" opacity="0.6" rx="2"/>

          <!-- Cursor blink -->
          <rect x="230" y="108" width="3" height="8" fill="#1d9bf0">
            <animate attributeName="opacity" values="1;0;1" dur="1s" repeatCount="indefinite"/>
          </rect>
        </svg>`
      },
      {
        id: 'grok-analisis-visualizacion',
        title: 'Análisis de Archivos y Visualización',
        icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <line x1="18" y1="20" x2="18" y2="10"/>
          <line x1="12" y1="20" x2="12" y2="4"/>
          <line x1="6" y1="20" x2="6" y2="14"/>
        </svg>`,
        bullets: [
          'Carga y analiza archivos PDF, TXT, CSV y más',
          'Extracción de información clave y resúmenes automáticos',
          'Análisis de hojas de cálculo e identificación de patrones',
          'Genera gráficos y visualizaciones a partir de datos',
          'Crea gráficos de barras, líneas, pastel, dispersión, etc.',
          'Analiza tendencias con representaciones visuales',
          'Ahorra horas de lectura y análisis manual'
        ],
        svgContent: `<svg viewBox="0 0 400 250" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id="grokDataGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" style="stop-color:#1d9bf0;stop-opacity:0.2" />
              <stop offset="100%" style="stop-color:#1d9bf0;stop-opacity:0.05" />
            </linearGradient>
          </defs>

          <rect width="400" height="250" fill="url(#grokDataGrad)"/>

          <!-- Bar chart -->
          <g transform="translate(80, 180)">
            <rect x="0" y="-80" width="30" height="80" fill="#1d9bf0" opacity="0.6">
              <animate attributeName="y" values="-80;-60;-80" dur="3s" repeatCount="indefinite"/>
              <animate attributeName="height" values="80;60;80" dur="3s" repeatCount="indefinite"/>
            </rect>
            <rect x="50" y="-120" width="30" height="120" fill="#1d9bf0" opacity="0.7">
              <animate attributeName="y" values="-120;-100;-120" dur="3s" begin="0.5s" repeatCount="indefinite"/>
              <animate attributeName="height" values="120;100;120" dur="3s" begin="0.5s" repeatCount="indefinite"/>
            </rect>
            <rect x="100" y="-60" width="30" height="60" fill="#1d9bf0" opacity="0.6">
              <animate attributeName="y" values="-60;-80;-60" dur="3s" begin="1s" repeatCount="indefinite"/>
              <animate attributeName="height" values="60;80;60" dur="3s" begin="1s" repeatCount="indefinite"/>
            </rect>
            <rect x="150" y="-100" width="30" height="100" fill="#1d9bf0" opacity="0.8">
              <animate attributeName="y" values="-100;-90;-100" dur="3s" begin="1.5s" repeatCount="indefinite"/>
              <animate attributeName="height" values="100;90;100" dur="3s" begin="1.5s" repeatCount="indefinite"/>
            </rect>
          </g>

          <!-- Line chart overlay -->
          <path d="M95,100 L145,60 L195,120 L245,80" stroke="#1d9bf0" stroke-width="3" fill="none" opacity="0.5" stroke-dasharray="5,5">
            <animate attributeName="stroke-dashoffset" values="0;-10" dur="1s" repeatCount="indefinite"/>
          </path>
        </svg>`
      },
      {
        id: 'grok-imagenes-aurora',
        title: 'Generación de Imágenes con Aurora',
        icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <rect x="3" y="3" width="18" height="18" rx="2" ry="2"/>
          <circle cx="8.5" cy="8.5" r="1.5"/>
          <polyline points="21 15 16 10 5 21"/>
        </svg>`,
        bullets: [
          'Integración con Aurora (modelo de generación de imágenes de xAI)',
          'Crea ilustraciones, logos y conceptos visuales desde texto',
          'Edición y modificación de imágenes existentes',
          'Estilos personalizables: realista, artístico, minimalista, etc.',
          'Generación rápida y de alta calidad',
          'Ideal para prototipos y conceptos creativos'
        ],
        svgContent: `<svg viewBox="0 0 400 250" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id="grokImageGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" style="stop-color:#1d9bf0;stop-opacity:0.2" />
              <stop offset="100%" style="stop-color:#1d9bf0;stop-opacity:0.05" />
            </linearGradient>
            <linearGradient id="grokPaintGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" style="stop-color:#1d9bf0;stop-opacity:1" />
              <stop offset="50%" style="stop-color:#0d7abf;stop-opacity:0.8" />
              <stop offset="100%" style="stop-color:#1d9bf0;stop-opacity:0.6" />
            </linearGradient>
          </defs>

          <rect width="400" height="250" fill="url(#grokImageGrad)"/>

          <!-- Canvas/Image frame -->
          <rect x="80" y="40" width="240" height="170" rx="8" fill="#ffffff" opacity="0.1" stroke="#1d9bf0" stroke-width="2"/>

          <!-- Artistic shapes inside -->
          <g transform="translate(200, 125)">
            <circle r="40" fill="url(#grokPaintGrad)" opacity="0.3">
              <animate attributeName="r" values="40;45;40" dur="3s" repeatCount="indefinite"/>
            </circle>
            <path d="M-30,-30 Q0,-50 30,-30 Q50,0 30,30 Q0,50 -30,30 Q-50,0 -30,-30"
                  fill="none" stroke="#1d9bf0" stroke-width="2" opacity="0.6">
              <animateTransform attributeName="transform" type="rotate"
                from="0 0 0" to="360 0 0" dur="20s" repeatCount="indefinite"/>
            </path>
          </g>

          <!-- Sparkles - más puntos alrededor del círculo -->
          <g opacity="0.8">
            <!-- Sparkle superior izquierda -->
            <path d="M100,80 L105,85 L100,90 L95,85 Z" fill="#1d9bf0">
              <animate attributeName="opacity" values="0;1;0" dur="2s" repeatCount="indefinite"/>
            </path>
            <!-- Sparkle superior derecha -->
            <path d="M280,100 L285,105 L280,110 L275,105 Z" fill="#1d9bf0">
              <animate attributeName="opacity" values="0;1;0" dur="2s" begin="1s" repeatCount="indefinite"/>
            </path>
            <!-- Sparkle izquierda inferior -->
            <path d="M120,160 L125,165 L120,170 L115,165 Z" fill="#0d7abf">
              <animate attributeName="opacity" values="0;1;0" dur="2s" begin="0.5s" repeatCount="indefinite"/>
            </path>
            <!-- Sparkle derecha inferior -->
            <path d="M300,180 L305,185 L300,190 L295,185 Z" fill="#0d7abf">
              <animate attributeName="opacity" values="0;1;0" dur="2s" begin="1.5s" repeatCount="indefinite"/>
            </path>
            <!-- Sparkle superior centro -->
            <path d="M190,55 L195,60 L190,65 L185,60 Z" fill="#1d9bf0">
              <animate attributeName="opacity" values="0;1;0" dur="2s" begin="0.75s" repeatCount="indefinite"/>
            </path>
            <!-- Sparkle inferior centro -->
            <path d="M210,195 L215,200 L210,205 L205,200 Z" fill="#0d7abf">
              <animate attributeName="opacity" values="0;1;0" dur="2s" begin="1.25s" repeatCount="indefinite"/>
            </path>
            <!-- Sparkle derecha centro -->
            <path d="M340,130 L345,135 L340,140 L335,135 Z" fill="#1d9bf0">
              <animate attributeName="opacity" values="0;1;0" dur="2s" begin="0.25s" repeatCount="indefinite"/>
            </path>
            <!-- Sparkle izquierda centro -->
            <path d="M60,115 L65,120 L60,125 L55,120 Z" fill="#0d7abf">
              <animate attributeName="opacity" values="0;1;0" dur="2s" begin="1.75s" repeatCount="indefinite"/>
            </path>
          </g>
        </svg>`
      }
    ],
    columns: 3,
    order: 12.2
  },
  {
    id: 'grok-cuando-usar',
    title: 'Grok 4 - Cuándo Usarlo',
    type: SlideType.CARD_GRID,
    description: 'Conoce las fortalezas y limitaciones de Grok',
    cards: [
      {
        id: 'grok-casos-uso',
        title: '✅ Cuándo Usar Grok 4',
        icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <polyline points="20 6 9 17 4 12"/>
        </svg>`,
        bullets: [
          'Información en tiempo real de X/Twitter',
          'Monitoreo de tendencias y análisis de conversaciones sociales',
          'Análisis de sentimiento y detección de crisis',
          'Respuestas sin filtros excesivos y perspectivas directas',
          'Programación básica e intermedia',
          'Visualización de datos y gráficos',
          'Generación de imágenes con Aurora',
          'Cuando necesitas información actualizada al segundo'
        ],
        svgContent: `<svg viewBox="0 0 400 250" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id="grokCheckGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" style="stop-color:#10b981;stop-opacity:0.2" />
              <stop offset="100%" style="stop-color:#10b981;stop-opacity:0.05" />
            </linearGradient>
          </defs>

          <rect width="400" height="250" fill="url(#grokCheckGrad)"/>

          <!-- Large checkmark -->
          <g transform="translate(200, 125)">
            <path d="M-40,0 L-10,40 L60,-40" stroke="#10b981" stroke-width="12"
                  fill="none" stroke-linecap="round" stroke-linejoin="round" opacity="0.3"/>
            <path d="M-40,0 L-10,40 L60,-40" stroke="#10b981" stroke-width="6"
                  fill="none" stroke-linecap="round" stroke-linejoin="round">
              <animate attributeName="stroke-dasharray" values="0,200;200,0" dur="2s" fill="freeze"/>
              <animate attributeName="stroke-dashoffset" values="200;0" dur="2s" fill="freeze"/>
            </path>
          </g>

          <!-- Surrounding check icons -->
          <g opacity="0.5">
            <path d="M60,60 L75,80 L110,40" stroke="#10b981" stroke-width="3" fill="none" stroke-linecap="round">
              <animate attributeName="opacity" values="0;1" dur="1s" begin="0.5s" fill="freeze"/>
            </path>
            <path d="M290,60 L305,80 L340,40" stroke="#10b981" stroke-width="3" fill="none" stroke-linecap="round">
              <animate attributeName="opacity" values="0;1" dur="1s" begin="1s" fill="freeze"/>
            </path>
            <path d="M60,190 L75,210 L110,170" stroke="#10b981" stroke-width="3" fill="none" stroke-linecap="round">
              <animate attributeName="opacity" values="0;1" dur="1s" begin="1.5s" fill="freeze"/>
            </path>
            <path d="M290,190 L305,210 L340,170" stroke="#10b981" stroke-width="3" fill="none" stroke-linecap="round">
              <animate attributeName="opacity" values="0;1" dur="1s" begin="2s" fill="freeze"/>
            </path>
          </g>
        </svg>`
      },
      {
        id: 'grok-limitaciones',
        title: '⚠️ Limitaciones a Considerar',
        icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <circle cx="12" cy="12" r="10"/>
          <line x1="12" y1="8" x2="12" y2="12"/>
          <line x1="12" y1="16" x2="12.01" y2="16"/>
        </svg>`,
        bullets: [
          'No tiene acceso completo a internet (solo X y fuentes limitadas)',
          'No puede navegar sitios web externos como Claude o Bing',
          'Requiere suscripción de pago (X Premium+)',
          'No tiene aplicación móvil dedicada (solo web)',
          'Menos herramientas integradas comparado con ChatGPT o Claude',
          'No es ideal para investigación profunda en web externa',
          'No es óptimo para análisis de documentos largos complejos',
          'No es la mejor opción para desarrollo de software avanzado'
        ],
        svgContent: `<svg viewBox="0 0 400 250" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id="grokWarningGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" style="stop-color:#f59e0b;stop-opacity:0.2" />
              <stop offset="100%" style="stop-color:#f59e0b;stop-opacity:0.05" />
            </linearGradient>
          </defs>

          <rect width="400" height="250" fill="url(#grokWarningGrad)"/>

          <!-- Warning triangle -->
          <g transform="translate(200, 130)">
            <path d="M0,-60 L60,50 L-60,50 Z" fill="none" stroke="#f59e0b" stroke-width="4" opacity="0.3"/>
            <path d="M0,-45 L45,35 L-45,35 Z" fill="#f59e0b" opacity="0.1"/>

            <!-- Exclamation mark -->
            <line x1="0" y1="-20" x2="0" y2="10" stroke="#f59e0b" stroke-width="4" stroke-linecap="round"/>
            <circle cx="0" cy="25" r="3" fill="#f59e0b"/>
          </g>

          <!-- Pulsing effect -->
          <circle cx="200" cy="130" r="80" fill="none" stroke="#f59e0b" stroke-width="2" opacity="0">
            <animate attributeName="r" values="80;100" dur="2s" repeatCount="indefinite"/>
            <animate attributeName="opacity" values="0.5;0" dur="2s" repeatCount="indefinite"/>
          </circle>
        </svg>`
      }
    ],
    columns: 1,
    order: 12.3
  },

  // Vista 14: Meta AI
  {
    id: 'meta-ai',
    title: 'Meta AI',
    type: SlideType.RESOURCE,
    platform: 'Meta AI - Facebook/WhatsApp/Instagram',
    description: 'Integrado donde ya están tus clientes',
    logoUrl: `data:image/svg+xml,${encodeURIComponent(`<svg id="Layer_2" data-name="Layer 2" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 339.88 339.88"><defs><style>.cls-1{clip-path:url(#clippath);}.cls-2{fill:none;}.cls-2,.cls-3{stroke-width:0px;}.cls-3{fill:url(#linear-gradient);fill-rule:evenodd;}</style><clipPath id="clippath"><rect class="cls-2" width="339.88" height="339.88"/></clipPath><linearGradient id="linear-gradient" x1="1154.5" y1="246" x2="474.75" y2="-433.75" gradientTransform="translate(-237.38 123) scale(.5 -.5)" gradientUnits="userSpaceOnUse"><stop offset=".13" stop-color="#ff97e3"/><stop offset=".18" stop-color="#d14fe1"/><stop offset=".34" stop-color="#0050e2"/><stop offset=".67" stop-color="#0050e2"/><stop offset=".81" stop-color="#00ddf4"/><stop offset=".86" stop-color="#23f8cc"/></linearGradient></defs><g id="Layer_1-2" data-name="Layer 1"><g class="cls-1"><path class="cls-3" d="M169.94,0c93.85,0,169.94,76.09,169.94,169.94s-76.09,169.94-169.94,169.94S0,263.79,0,169.94,76.09,0,169.94,0ZM169.94,51.36c-65.49,0-118.57,53.09-118.57,118.57s53.09,118.57,118.57,118.57c65.49,0,118.57-53.1,118.56-118.58,0-65.48-53.09-118.56-118.56-118.56Z"/></g></g></svg>`)}`,
    resources: [
      {
        type: 'web',
        label: 'Sitio Web',
        url: 'https://www.meta.ai',
        icon: '🌐'
      },
      {
        type: 'app',
        label: 'App Meta AI',
        url: 'https://www.meta.ai/download',
        icon: '📱'
      }
    ],
    features: [
      'Integrado en WhatsApp, Facebook e Instagram',
      'No requiere instalación adicional',
      'Ya está donde tus clientes están',
      'Fácil acceso desde mensajería',
      'Disponible en apps de Meta (WhatsApp, Instagram, Facebook)'
    ],
    order: 13
  },

  // Meta AI - Slides de Contenido Detallado
  {
    id: 'meta-ai-capacidades-principales',
    title: 'Meta AI - Capacidades Principales',
    type: SlideType.CARD_GRID,
    description: 'El asistente que vive donde tus clientes ya están: WhatsApp, Facebook e Instagram',
    cards: [
      {
        id: 'meta-ai-introduccion-nlp',
        title: 'Meta AI - Integración y Lenguaje Natural',
        bullets: [
          'Desarrollado por Meta (Facebook, WhatsApp, Instagram)',
          'Basado en Llama 4 (modelo de lenguaje de código abierto)',
          'Integrado directamente en WhatsApp, Facebook Messenger e Instagram',
          'Acceso gratuito sin aplicaciones adicionales',
          'Conversaciones naturales y contextuales',
          'Comprensión de intenciones y sentimientos',
          'Respuestas en más de 100 idiomas',
          'Traducciones en tiempo real durante conversaciones',
          'Adaptación al tono y estilo de comunicación'
        ],
        svgContent: `<svg viewBox="0 0 400 250" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id="metaGrad1" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" style="stop-color:#0084ff;stop-opacity:0.3" />
              <stop offset="50%" style="stop-color:#25d366;stop-opacity:0.2" />
              <stop offset="100%" style="stop-color:#e4405f;stop-opacity:0.2" />
            </linearGradient>
            <linearGradient id="instagramGrad" x1="0%" y1="100%" x2="100%" y2="0%">
              <stop offset="0%" style="stop-color:#f58529;stop-opacity:1" />
              <stop offset="50%" style="stop-color:#dd2a7b;stop-opacity:1" />
              <stop offset="100%" style="stop-color:#8134af;stop-opacity:1" />
            </linearGradient>
            <marker id="arrowMeta" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto" markerUnits="strokeWidth">
              <path d="M0,0 L0,6 L9,3 z" fill="#0084ff"/>
            </marker>
          </defs>

          <rect width="400" height="250" fill="url(#metaGrad1)"/>

          <!-- WhatsApp conversation -->
          <g transform="translate(50, 60)">
            <!-- WhatsApp icon oficial -->
            <circle cx="0" cy="0" r="20" fill="#25d366"/>
            <!-- Teléfono con burbuja -->
            <path d="M-2,-10 C-6,-10 -9,-7 -9,-3 L-9,3 C-9,7 -6,10 -2,10 L2,10 C6,10 9,7 9,3 L9,-3 C9,-7 6,-10 2,-10 L-2,-10 Z" fill="white"/>
            <circle cx="0" cy="-1" r="5" fill="none" stroke="#25d366" stroke-width="1.5"/>
            <path d="M-10,6 L-7,3" stroke="white" stroke-width="2" stroke-linecap="round"/>

            <!-- Chat bubbles más amplias -->
            <rect x="25" y="-12" width="115" height="24" rx="12" fill="#25d366" opacity="0.7">
              <animate attributeName="opacity" values="0;0.7" dur="1s" begin="0.5s" fill="freeze"/>
            </rect>
            <text x="32" y="5" fill="white" font-size="11" font-weight="500" opacity="0.95">¡Hola! ¿Cómo estás?</text>
          </g>

          <!-- Facebook Messenger conversation -->
          <g transform="translate(50, 125)">
            <!-- Facebook Messenger icon oficial -->
            <circle cx="0" cy="0" r="20" fill="#0084ff"/>
            <!-- Bolt/rayo de Messenger -->
            <path d="M-2,-12 L-10,2 L0,-2 L2,12 L10,-2 L0,2 Z" fill="white"/>

            <!-- Chat bubbles más amplias -->
            <rect x="25" y="-12" width="130" height="24" rx="12" fill="#0084ff" opacity="0.7">
              <animate attributeName="opacity" values="0;0.7" dur="1s" begin="1s" fill="freeze"/>
            </rect>
            <text x="32" y="5" fill="white" font-size="11" font-weight="500" opacity="0.95">¿Me ayudas con algo?</text>
          </g>

          <!-- Instagram conversation -->
          <g transform="translate(50, 190)">
            <!-- Instagram icon oficial -->
            <rect x="-20" y="-20" width="40" height="40" rx="10" fill="url(#instagramGrad)"/>
            <!-- Cámara de Instagram -->
            <rect x="-12" y="-12" width="24" height="24" rx="5" fill="none" stroke="white" stroke-width="2.2"/>
            <circle cx="0" cy="0" r="5.5" fill="none" stroke="white" stroke-width="2.2"/>
            <circle cx="7" cy="-7" r="1.8" fill="white"/>

            <!-- Chat bubbles más amplias -->
            <rect x="25" y="-12" width="150" height="24" rx="12" fill="#e4405f" opacity="0.7">
              <animate attributeName="opacity" values="0;0.7" dur="1s" begin="1.5s" fill="freeze"/>
            </rect>
            <text x="32" y="5" fill="white" font-size="11" font-weight="500" opacity="0.95">¿Puedes crear una imagen?</text>
          </g>

          <!-- Meta AI brain/assistant -->
          <g transform="translate(320, 125)">
            <circle r="35" fill="#0084ff" opacity="0.15">
              <animate attributeName="r" values="35;40;35" dur="2s" repeatCount="indefinite"/>
            </circle>
            <!-- AI brain icon -->
            <path d="M-15,-10 Q-15,-20 0,-20 Q15,-20 15,-10 Q20,-10 20,0 Q20,10 15,10 L15,15 L5,15 L5,20 L-5,20 L-5,15 L-15,15 L-15,10 Q-20,10 -20,0 Q-20,-10 -15,-10 Z" fill="#0084ff" opacity="0.8"/>
            <circle cx="-8" cy="-8" r="2" fill="white"/>
            <circle cx="8" cy="-8" r="2" fill="white"/>
            <path d="M-6,0 Q0,3 6,0" stroke="white" stroke-width="2" fill="none" stroke-linecap="round"/>
          </g>

          <!-- Connecting arrows -->
          <g opacity="0.4">
            <path d="M140,70 Q200,70 285,125" stroke="#0084ff" stroke-width="2" fill="none" marker-end="url(#arrowMeta)">
              <animate attributeName="stroke-dasharray" values="0,300;300,0" dur="2s" fill="freeze"/>
            </path>
            <path d="M155,135 Q220,130 285,125" stroke="#0084ff" stroke-width="2" fill="none" marker-end="url(#arrowMeta)">
              <animate attributeName="stroke-dasharray" values="0,300;300,0" dur="2s" begin="0.3s" fill="freeze"/>
            </path>
            <path d="M175,200 Q240,160 285,135" stroke="#0084ff" stroke-width="2" fill="none" marker-end="url(#arrowMeta)">
              <animate attributeName="stroke-dasharray" values="0,300;300,0" dur="2s" begin="0.6s" fill="freeze"/>
            </path>
          </g>
        </svg>`
      },
      {
        id: 'meta-ai-contenido-conversacion',
        title: 'Generación de Contenido y Asistencia',
        bullets: [
          'Posts para Facebook e Instagram con captions atractivos y hashtags',
          'Correos electrónicos y mensajes de WhatsApp Business',
          'Ideas para campañas, brainstorming creativo y conceptos visuales',
          'Scripts para videos, guiones para Reels y contenido para Stories',
          'Responde preguntas directamente en WhatsApp',
          'Sugerencias inteligentes durante conversaciones',
          'Búsqueda de información sin salir de la app',
          'Asistencia para compras y recomendaciones',
          'Programación de recordatorios y eventos'
        ],
        svgContent: `<svg viewBox="0 0 400 250" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id="metaContentGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" style="stop-color:#0084ff;stop-opacity:0.2" />
              <stop offset="100%" style="stop-color:#0084ff;stop-opacity:0.05" />
            </linearGradient>
          </defs>

          <rect width="400" height="250" fill="url(#metaContentGrad)"/>

          <!-- WhatsApp icon oficial (top left) -->
          <g transform="translate(60, 60)">
            <circle r="25" fill="#25d366"/>
            <!-- Teléfono con burbuja de WhatsApp oficial -->
            <path d="M-3,-12 C-7,-12 -11,-8 -11,-4 L-11,4 C-11,8 -7,12 -3,12 L3,12 C7,12 11,8 11,4 L11,-4 C11,-8 7,-12 3,-12 L-3,-12 Z" fill="white"/>
            <circle cx="0" cy="0" r="6.5" fill="none" stroke="#25d366" stroke-width="2"/>
            <path d="M-12,8 L-9,5" stroke="white" stroke-width="2.5" stroke-linecap="round"/>
            <circle r="30" fill="none" stroke="#25d366" stroke-width="2" opacity="0.3">
              <animate attributeName="r" values="30;35;30" dur="2s" repeatCount="indefinite"/>
            </circle>
          </g>

          <!-- Facebook icon oficial (top right) -->
          <g transform="translate(340, 60)">
            <circle r="25" fill="#0084ff"/>
            <!-- F de Facebook -->
            <path d="M6,-15 L-8,-15 L-8,-3 L-1,-3 L-1,15 L6,15 L6,-3 L12,-3 L12,-8 L6,-8 L6,-12 L12,-12 L12,-15 Z" fill="white"/>
            <circle r="30" fill="none" stroke="#0084ff" stroke-width="2" opacity="0.3">
              <animate attributeName="r" values="30;35;30" dur="2s" begin="0.5s" repeatCount="indefinite"/>
            </circle>
          </g>

          <!-- Phone mockup (center) -->
          <g transform="translate(150, 50)">
            <rect x="0" y="0" width="100" height="160" rx="10" fill="#ffffff" opacity="0.1" stroke="#0084ff" stroke-width="2"/>
            <rect x="35" y="5" width="30" height="4" rx="2" fill="#0084ff" opacity="0.3"/>

            <!-- Message bubbles -->
            <rect x="10" y="20" width="60" height="15" rx="8" fill="#0084ff" opacity="0.4">
              <animate attributeName="opacity" values="0;0.4" dur="1s" fill="freeze"/>
            </rect>
            <rect x="30" y="40" width="60" height="15" rx="8" fill="#25d366" opacity="0.4">
              <animate attributeName="opacity" values="0;0.4" dur="1s" begin="0.5s" fill="freeze"/>
            </rect>
            <rect x="10" y="60" width="70" height="15" rx="8" fill="#0084ff" opacity="0.4">
              <animate attributeName="opacity" values="0;0.4" dur="1s" begin="1s" fill="freeze"/>
            </rect>
            <rect x="20" y="80" width="70" height="15" rx="8" fill="#25d366" opacity="0.4">
              <animate attributeName="opacity" values="0;0.4" dur="1s" begin="1.5s" fill="freeze"/>
            </rect>

            <!-- Camera icon at bottom of phone -->
            <g transform="translate(50, 130)">
              <rect x="-15" y="-12" width="30" height="24" rx="3" fill="none" stroke="#e4405f" stroke-width="2"/>
              <circle r="6" fill="none" stroke="#e4405f" stroke-width="2"/>
            </g>
          </g>

          <!-- Content creation sparkles -->
          <g opacity="0.7">
            <path d="M110,125 L115,130 L110,135 L105,130 Z" fill="#0084ff">
              <animate attributeName="opacity" values="0.7;1;0.7" dur="2s" repeatCount="indefinite"/>
            </path>
            <path d="M290,125 L295,130 L290,135 L285,130 Z" fill="#25d366">
              <animate attributeName="opacity" values="0.7;1;0.7" dur="2s" begin="0.5s" repeatCount="indefinite"/>
            </path>
            <path d="M200,30 L205,35 L200,40 L195,35 Z" fill="#e4405f">
              <animate attributeName="opacity" values="0.7;1;0.7" dur="2s" begin="1s" repeatCount="indefinite"/>
            </path>
          </g>

          <!-- Connecting lines from platforms to phone -->
          <g opacity="0.3">
            <path d="M85,60 Q120,60 150,80" stroke="#25d366" stroke-width="2" stroke-dasharray="5,5">
              <animate attributeName="stroke-dashoffset" values="0;-10" dur="1s" repeatCount="indefinite"/>
            </path>
            <path d="M315,60 Q280,60 250,80" stroke="#0084ff" stroke-width="2" stroke-dasharray="5,5">
              <animate attributeName="stroke-dashoffset" values="0;-10" dur="1s" repeatCount="indefinite"/>
            </path>
          </g>
        </svg>`
      }
    ],
    columns: 1,
    order: 13.1
  },
  {
    id: 'meta-ai-analisis-visual',
    title: 'Meta AI - Análisis y Creación Visual',
    type: SlideType.CARD_GRID,
    description: 'Potencia tu negocio con insights y contenido visual generado por IA',
    cards: [
      {
        id: 'meta-ai-analisis',
        title: 'Análisis y Predicción para tu Negocio',
        bullets: [
          'Análisis de conversaciones para detectar tendencias de clientes',
          'Predicción de comportamiento de audiencia en redes sociales',
          'Identificación de mejores horarios para publicar contenido',
          'Recomendaciones basadas en interacciones previas',
          'Optimización de estrategias de contenido',
          'Detección de patrones de engagement',
          'Insights en tiempo real sobre tu audiencia'
        ],
        svgContent: `<svg viewBox="0 0 400 250" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id="metaAnalysisGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" style="stop-color:#0084ff;stop-opacity:0.2" />
              <stop offset="100%" style="stop-color:#0084ff;stop-opacity:0.05" />
            </linearGradient>
          </defs>

          <rect width="400" height="250" fill="url(#metaAnalysisGrad)"/>

          <!-- Bar chart -->
          <g transform="translate(60, 195)">
            <!-- Ejes -->
            <line x1="0" y1="0" x2="140" y2="0" stroke="#e5e7eb" stroke-width="2"/>
            <line x1="0" y1="0" x2="0" y2="-120" stroke="#e5e7eb" stroke-width="2"/>

            <!-- Barra 1: 85% altura -->
            <rect x="10" y="-102" width="25" height="102" rx="3" fill="#0084ff" opacity="0.7">
              <animate attributeName="height" values="0;102" dur="1s" fill="freeze"/>
              <animate attributeName="y" values="0;-102" dur="1s" fill="freeze"/>
            </rect>

            <!-- Barra 2: 70% altura -->
            <rect x="45" y="-84" width="25" height="84" rx="3" fill="#25d366" opacity="0.7">
              <animate attributeName="height" values="0;84" dur="1s" begin="0.2s" fill="freeze"/>
              <animate attributeName="y" values="0;-84" dur="1s" begin="0.2s" fill="freeze"/>
            </rect>

            <!-- Barra 3: 95% altura -->
            <rect x="80" y="-114" width="25" height="114" rx="3" fill="#e4405f" opacity="0.7">
              <animate attributeName="height" values="0;114" dur="1s" begin="0.4s" fill="freeze"/>
              <animate attributeName="y" values="0;-114" dur="1s" begin="0.4s" fill="freeze"/>
            </rect>

            <!-- Barra 4: 60% altura -->
            <rect x="115" y="-72" width="25" height="72" rx="3" fill="#0084ff" opacity="0.7">
              <animate attributeName="height" values="0;72" dur="1s" begin="0.6s" fill="freeze"/>
              <animate attributeName="y" values="0;-72" dur="1s" begin="0.6s" fill="freeze"/>
            </rect>

            <!-- Etiquetas de las barras -->
            <text x="22" y="15" fill="#0084ff" font-size="10" text-anchor="middle" font-weight="600">85%</text>
            <text x="57" y="15" fill="#25d366" font-size="10" text-anchor="middle" font-weight="600">70%</text>
            <text x="92" y="15" fill="#e4405f" font-size="10" text-anchor="middle" font-weight="600">95%</text>
            <text x="127" y="15" fill="#0084ff" font-size="10" text-anchor="middle" font-weight="600">60%</text>
          </g>

          <!-- Data points chart (with all quadrants) -->
          <g transform="translate(250, 125)">
            <!-- Horizontal and vertical axes -->
            <line x1="-10" y1="0" x2="100" y2="0" stroke="#e5e7eb" stroke-width="1" opacity="0.3"/>
            <line x1="0" y1="-60" x2="0" y2="60" stroke="#e5e7eb" stroke-width="1" opacity="0.3"/>

            <!-- Data points - Quadrant 1 (top-right) -->
            <circle cx="20" cy="-40" r="5" fill="#0084ff">
              <animate attributeName="r" values="5;7;5" dur="2s" repeatCount="indefinite"/>
            </circle>
            <circle cx="50" cy="-20" r="5" fill="#25d366">
              <animate attributeName="r" values="5;7;5" dur="2s" begin="0.3s" repeatCount="indefinite"/>
            </circle>

            <!-- Data points - Quadrant 2 (top-left) -->
            <circle cx="-8" cy="-35" r="5" fill="#e4405f">
              <animate attributeName="r" values="5;7;5" dur="2s" begin="0.6s" repeatCount="indefinite"/>
            </circle>

            <!-- Data points - Quadrant 3 (bottom-left) -->
            <circle cx="-8" cy="25" r="5" fill="#0084ff">
              <animate attributeName="r" values="5;7;5" dur="2s" begin="0.9s" repeatCount="indefinite"/>
            </circle>

            <!-- Data points - Quadrant 4 (bottom-right) -->
            <circle cx="35" cy="40" r="5" fill="#25d366">
              <animate attributeName="r" values="5;7;5" dur="2s" begin="1.2s" repeatCount="indefinite"/>
            </circle>
            <circle cx="70" cy="30" r="5" fill="#e4405f">
              <animate attributeName="r" values="5;7;5" dur="2s" begin="1.5s" repeatCount="indefinite"/>
            </circle>
          </g>
        </svg>`
      },
      {
        id: 'meta-ai-visual',
        title: 'Creación de Contenido Visual',
        bullets: [
          'Generación de imágenes desde texto (text-to-image)',
          'Creación de stickers personalizados para WhatsApp',
          'Edición de fotos con comandos de texto',
          'Generación de avatares y gráficos para redes sociales',
          'Conceptos visuales para publicaciones',
          'Integrado directamente en las apps de Meta',
          'Ideal para crear contenido rápido y atractivo'
        ],
        svgContent: `<svg viewBox="0 0 400 250" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id="metaVisualGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" style="stop-color:#e4405f;stop-opacity:0.2" />
              <stop offset="100%" style="stop-color:#e4405f;stop-opacity:0.05" />
            </linearGradient>
            <linearGradient id="metaPaletteGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" style="stop-color:#0084ff;stop-opacity:1" />
              <stop offset="33%" style="stop-color:#25d366;stop-opacity:1" />
              <stop offset="66%" style="stop-color:#e4405f;stop-opacity:1" />
              <stop offset="100%" style="stop-color:#833ab4;stop-opacity:1" />
            </linearGradient>
          </defs>

          <rect width="400" height="250" fill="url(#metaVisualGrad)"/>

          <!-- Image frame -->
          <rect x="70" y="40" width="260" height="170" rx="12" fill="#ffffff" opacity="0.1" stroke="#e4405f" stroke-width="2"/>

          <!-- Grid inside -->
          <g opacity="0.4">
            <line x1="200" y1="40" x2="200" y2="210" stroke="#e4405f" stroke-width="1"/>
            <line x1="70" y1="125" x2="330" y2="125" stroke="#e4405f" stroke-width="1"/>
          </g>

          <!-- Color palette spots -->
          <g transform="translate(200, 125)">
            <circle cx="-40" cy="-30" r="15" fill="#0084ff" opacity="0.6">
              <animate attributeName="r" values="15;18;15" dur="2s" repeatCount="indefinite"/>
            </circle>
            <circle cx="40" cy="-30" r="15" fill="#25d366" opacity="0.6">
              <animate attributeName="r" values="15;18;15" dur="2s" begin="0.5s" repeatCount="indefinite"/>
            </circle>
            <circle cx="-40" cy="30" r="15" fill="#e4405f" opacity="0.6">
              <animate attributeName="r" values="15;18;15" dur="2s" begin="1s" repeatCount="indefinite"/>
            </circle>
            <circle cx="40" cy="30" r="15" fill="#833ab4" opacity="0.6">
              <animate attributeName="r" values="15;18;15" dur="2s" begin="1.5s" repeatCount="indefinite"/>
            </circle>
          </g>

          <!-- Sparkles (all quadrants) -->
          <g opacity="0.7">
            <!-- Top-left -->
            <path d="M90,70 L95,75 L90,80 L85,75 Z" fill="#0084ff">
              <animate attributeName="opacity" values="0;1;0" dur="2s" repeatCount="indefinite"/>
            </path>
            <!-- Top-right -->
            <path d="M300,90 L305,95 L300,100 L295,95 Z" fill="#25d366">
              <animate attributeName="opacity" values="0;1;0" dur="2s" begin="0.5s" repeatCount="indefinite"/>
            </path>
            <!-- Bottom-left -->
            <path d="M95,185 L100,190 L95,195 L90,190 Z" fill="#e4405f">
              <animate attributeName="opacity" values="0;1;0" dur="2s" begin="1s" repeatCount="indefinite"/>
            </path>
            <!-- Bottom-right -->
            <path d="M305,175 L310,180 L305,185 L300,180 Z" fill="#833ab4">
              <animate attributeName="opacity" values="0;1;0" dur="2s" begin="1.5s" repeatCount="indefinite"/>
            </path>
          </g>
        </svg>`
      }
    ],
    columns: 1,
    order: 13.2
  },
  {
    id: 'meta-ai-integracion',
    title: 'Meta AI - Integración Empresarial',
    type: SlideType.CARD_GRID,
    description: 'Conecta Meta AI con tu negocio y aprovecha todo su potencial',
    cards: [
      {
        id: 'meta-ai-api',
        title: 'Integración y API para Empresas',
        icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
          <circle cx="8.5" cy="7" r="4"/>
          <polyline points="17 11 19 13 23 9"/>
        </svg>`,
        bullets: [
          'WhatsApp Business API con integración de Meta AI',
          'Chatbots inteligentes para atención al cliente 24/7',
          'Respuestas automáticas en Messenger para páginas de Facebook',
          'Integración con sistemas CRM y plataformas de e-commerce',
          'Modelo Llama disponible de forma gratuita para desarrolladores',
          'Automatización de flujos de conversación',
          'Escalabilidad para grandes volúmenes de mensajes'
        ],
        svgContent: `<svg viewBox="0 0 400 250" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id="metaAPIGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" style="stop-color:#25d366;stop-opacity:0.2" />
              <stop offset="100%" style="stop-color:#25d366;stop-opacity:0.05" />
            </linearGradient>
          </defs>

          <rect width="400" height="250" fill="url(#metaAPIGrad)"/>

          <!-- Central hub -->
          <g transform="translate(200, 125)">
            <circle r="30" fill="#25d366" opacity="0.2"/>
            <circle r="25" fill="none" stroke="#25d366" stroke-width="2"/>
            <text x="0" y="5" text-anchor="middle" fill="#25d366" font-size="12" font-weight="bold">API</text>
          </g>

          <!-- Connected nodes -->
          <g opacity="0.6">
            <!-- WhatsApp -->
            <line x1="200" y1="125" x2="120" y2="70" stroke="#25d366" stroke-width="2"/>
            <circle cx="120" cy="70" r="15" fill="#25d366" opacity="0.3"/>

            <!-- Messenger -->
            <line x1="200" y1="125" x2="280" y2="70" stroke="#0084ff" stroke-width="2"/>
            <circle cx="280" cy="70" r="15" fill="#0084ff" opacity="0.3"/>

            <!-- CRM -->
            <line x1="200" y1="125" x2="120" y2="180" stroke="#e4405f" stroke-width="2"/>
            <circle cx="120" cy="180" r="15" fill="#e4405f" opacity="0.3"/>

            <!-- E-commerce -->
            <line x1="200" y1="125" x2="280" y2="180" stroke="#833ab4" stroke-width="2"/>
            <circle cx="280" cy="180" r="15" fill="#833ab4" opacity="0.3"/>
          </g>

          <!-- Data flow animation -->
          <g>
            <circle cx="120" cy="70" r="3" fill="#25d366">
              <animate attributeName="cx" values="120;200" dur="2s" repeatCount="indefinite"/>
              <animate attributeName="cy" values="70;125" dur="2s" repeatCount="indefinite"/>
              <animate attributeName="opacity" values="1;0" dur="2s" repeatCount="indefinite"/>
            </circle>
            <circle cx="280" cy="70" r="3" fill="#0084ff">
              <animate attributeName="cx" values="280;200" dur="2s" begin="0.5s" repeatCount="indefinite"/>
              <animate attributeName="cy" values="70;125" dur="2s" begin="0.5s" repeatCount="indefinite"/>
              <animate attributeName="opacity" values="1;0" dur="2s" begin="0.5s" repeatCount="indefinite"/>
            </circle>
          </g>
        </svg>`
      },
      {
        id: 'meta-ai-por-que-elegir',
        title: '✅ Por qué Elegir Meta AI',
        icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/>
          <polyline points="22 4 12 14.01 9 11.01"/>
        </svg>`,
        bullets: [
          'Tus clientes ya están en WhatsApp, Facebook e Instagram',
          'Atención al cliente directa en WhatsApp Business',
          'Generación de contenido para redes sociales de Meta',
          'Gratuito y sin instalación adicional (ya está integrado)',
          'Ideal para PyMEs y empresas con presencia en redes sociales',
          'Fácil de usar sin conocimientos técnicos',
          '⚠️ No es ideal para: programación avanzada, análisis de documentos técnicos, generación de video'
        ],
        svgContent: `<svg viewBox="0 0 400 250" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id="metaCheckGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" style="stop-color:#10b981;stop-opacity:0.2" />
              <stop offset="100%" style="stop-color:#10b981;stop-opacity:0.05" />
            </linearGradient>
          </defs>

          <rect width="400" height="250" fill="url(#metaCheckGrad)"/>

          <!-- Large checkmark -->
          <g transform="translate(200, 125)">
            <path d="M-50,0 L-15,45 L70,-50" stroke="#10b981" stroke-width="14"
                  fill="none" stroke-linecap="round" stroke-linejoin="round" opacity="0.2"/>
            <path d="M-50,0 L-15,45 L70,-50" stroke="#10b981" stroke-width="7"
                  fill="none" stroke-linecap="round" stroke-linejoin="round">
              <animate attributeName="stroke-dasharray" values="0,220;220,0" dur="2s" fill="freeze"/>
              <animate attributeName="stroke-dashoffset" values="220;0" dur="2s" fill="freeze"/>
            </path>
          </g>

          <!-- App icons -->
          <g opacity="0.4">
            <circle cx="80" cy="80" r="20" fill="#25d366">
              <animate attributeName="opacity" values="0;0.4" dur="1s" begin="0.5s" fill="freeze"/>
            </circle>
            <circle cx="320" cy="80" r="20" fill="#0084ff">
              <animate attributeName="opacity" values="0;0.4" dur="1s" begin="1s" fill="freeze"/>
            </circle>
            <circle cx="80" cy="190" r="20" fill="#e4405f">
              <animate attributeName="opacity" values="0;0.4" dur="1s" begin="1.5s" fill="freeze"/>
            </circle>
            <circle cx="320" cy="190" r="20" fill="#833ab4">
              <animate attributeName="opacity" values="0;0.4" dur="1s" begin="2s" fill="freeze"/>
            </circle>
          </g>
        </svg>`
      }
    ],
    columns: 1,
    order: 13.3
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
    continueButtonText: 'Click para finalizar',
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
      email: 'contacto@anuarbarrera.dev',
      whatsapp: '5664799775',
      linkedin: 'https://www.linkedin.com/in/anuarbarrera',
      servicios: 'https://www.anuarbarrera.dev/servicios/'
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
