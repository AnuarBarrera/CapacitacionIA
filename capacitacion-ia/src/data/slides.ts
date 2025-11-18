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
    order: 7
  },

  // Vista 9: Los 5 Grandes
  {
    id: 'los-5-grandes',
    title: 'Las 5 Plataformas Principales de IA',
    type: SlideType.CARD_GRID,
    description: 'Da clic en una para conocerla a detalle',
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
        icon: `<svg id="katman_1" data-name="katman 1" version="1.1" viewBox="0 0 689.97997 148.17999" width="689.97998" height="148.17999" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <style>
              .cls-1 { fill: #0f0f0d; }
              .cls-1, .cls-2 { stroke-width: 0px; }
              .cls-2 { fill: #d97757; }
            </style>
          </defs>
          <g transform="translate(-75.96,-223.53)">
            <path class="cls-2" d="m 105.01,322.07 29.14,-16.35 0.49,-1.42 -0.49,-0.79 h -1.42 l -4.87,-0.3 -16.65,-0.45 -14.44,-0.6 -13.99,-0.75 -3.52,-0.75 -3.3,-4.35 0.34,-2.17 2.96,-1.99 4.24,0.37 9.37,0.64 14.06,0.97 10.2,0.6 15.11,1.57 h 2.4 l 0.34,-0.97 -0.82,-0.6 -0.64,-0.6 -14.55,-9.86 -15.75,-10.42 -8.25,-6 -4.46,-3.04 -2.25,-2.85 -0.97,-6.22 4.05,-4.46 5.44,0.37 1.39,0.37 5.51,4.24 11.77,9.11 15.37,11.32 2.25,1.87 0.9,-0.64 0.11,-0.45 -1.01,-1.69 -8.36,-15.11 -8.92,-15.37 -3.97,-6.37 -1.05,-3.82 c -0.37,-1.57 -0.64,-2.89 -0.64,-4.5 l 4.61,-6.26 2.55,-0.82 6.15,0.82 2.59,2.25 3.82,8.74 6.19,13.76 9.6,18.71 2.81,5.55 1.5,5.14 0.56,1.57 h 0.97 v -0.9 l 0.79,-10.54 1.46,-12.94 1.42,-16.65 0.49,-4.69 2.32,-5.62 4.61,-3.04 3.6,1.72 2.96,4.24 -0.41,2.74 -1.76,11.44 -3.45,17.92 -2.25,12 h 1.31 l 1.5,-1.5 6.07,-8.06 10.2,-12.75 4.5,-5.06 5.25,-5.59 3.37,-2.66 h 6.37 l 4.69,6.97 -2.1,7.2 -6.56,8.32 -5.44,7.05 -7.8,10.5 -4.87,8.4 0.45,0.67 1.16,-0.11 17.62,-3.75 9.52,-1.72 11.36,-1.95 5.14,2.4 0.56,2.44 -2.02,4.99 -12.15,3 -14.25,2.85 -21.22,5.02 -0.26,0.19 0.3,0.37 9.56,0.9 4.09,0.22 h 10.01 l 18.64,1.39 4.87,3.22 2.92,3.94 -0.49,3 -7.5,3.82 -10.12,-2.4 -23.62,-5.62 -8.1,-2.02 h -1.12 v 0.67 l 6.75,6.6 12.37,11.17 15.49,14.4 0.79,3.56 -1.99,2.81 -2.1,-0.3 -13.61,-10.24 -5.25,-4.61 -11.89,-10.01 h -0.79 v 1.05 l 2.74,4.01 14.47,21.75 0.75,6.67 -1.05,2.17 -3.75,1.31 -4.12,-0.75 -8.47,-11.89 -8.74,-13.39 -7.05,-12 -0.86,0.49 -4.16,44.81 -1.95,2.29 -4.5,1.72 -3.75,-2.85 -1.99,-4.61 1.99,-9.11 2.4,-11.89 1.95,-9.45 1.76,-11.74 1.05,-3.9 -0.07,-0.26 -0.86,0.11 -8.85,12.15 -13.46,18.19 -10.65,11.4 -2.55,1.01 -4.42,-2.29 0.41,-4.09 2.47,-3.64 14.74,-18.75 8.89,-11.62 5.74,-6.71 -0.04,-0.97 h -0.34 l -39.15,25.42 -6.97,0.9 -3,-2.81 0.37,-4.61 1.42,-1.5 11.77,-8.1 -0.04,0.04 z" shape-rendering="optimizeQuality"/>
            <path class="cls-1" d="m 317.73,349.33 c -18.82,0 -31.69,-10.5 -37.76,-26.66 -3.17,-8.42 -4.74,-17.36 -4.61,-26.36 0,-27.11 12.15,-45.94 39,-45.94 18.04,0 29.17,7.87 35.51,26.66 h 7.72 l -1.05,-25.91 c -10.8,-6.97 -24.3,-10.5 -40.72,-10.5 -23.14,0 -42.82,10.35 -53.77,29.02 -5.66,9.86 -8.53,21.07 -8.32,32.44 0,20.74 9.79,39.11 28.16,49.31 10.06,5.37 21.34,8.04 32.74,7.72 17.92,0 32.14,-3.41 44.74,-9.37 l 3.26,-28.57 h -7.87 c -4.72,13.05 -10.35,20.89 -19.69,25.05 -4.57,2.06 -10.35,3.11 -17.32,3.11 z m 81.18,-98.96 0.75,-12.75 h -5.32 l -23.7,7.12 v 3.86 l 10.5,4.87 v 89.17 c 0,6.07 -3.11,7.42 -11.25,8.44 v 6.52 h 40.31 v -6.52 c -8.17,-1.01 -11.25,-2.36 -11.25,-8.44 V 250.4 l -0.04,-0.04 z m 160.31,108.75 h 3.11 l 27.26,-5.17 v -6.67 l -3.82,-0.3 c -6.37,-0.6 -8.02,-1.91 -8.02,-7.12 v -47.55 l 0.75,-15.26 h -4.31 l -25.76,3.71 v 6.52 l 2.51,0.45 c 6.97,1.01 9.04,2.96 9.04,7.84 v 42.37 c -6.67,5.17 -13.05,8.44 -20.62,8.44 -8.4,0 -13.61,-4.27 -13.61,-14.25 v -39.79 l 0.75,-15.26 h -4.42 l -25.8,3.71 v 6.52 l 2.66,0.45 c 6.97,1.01 9.04,2.96 9.04,7.84 v 39.11 c 0,16.57 9.37,24.45 24.3,24.45 11.4,0 20.74,-6.07 27.75,-14.51 l -0.75,14.51 -0.04,-0.04 z M 484.3,306.36 c 0,-21.19 -11.25,-29.32 -31.57,-29.32 -17.92,0 -30.94,7.42 -30.94,19.72 0,3.67 1.31,6.49 3.97,8.44 l 13.65,-1.8 c -0.6,-4.12 -0.9,-6.64 -0.9,-7.69 0,-6.97 3.71,-10.5 11.25,-10.5 11.14,0 16.76,7.84 16.76,20.44 v 4.12 l -28.12,8.44 c -9.37,2.55 -14.7,4.76 -18.26,9.94 -1.89,3.17 -2.8,6.82 -2.62,10.5 0,12 8.25,20.47 22.35,20.47 10.2,0 19.24,-4.61 27.11,-13.35 2.81,8.74 7.12,13.35 14.81,13.35 6.22,0 11.85,-2.51 16.87,-7.42 l -1.5,-5.17 c -2.17,0.6 -4.27,0.9 -6.49,0.9 -4.31,0 -6.37,-3.41 -6.37,-10.09 v -30.97 z m -36,40.76 c -7.69,0 -12.45,-4.46 -12.45,-12.3 0,-5.32 2.51,-8.44 7.87,-10.24 l 22.8,-7.24 v 21.9 c -7.27,5.51 -11.55,7.87 -18.22,7.87 z m 237.36,6.82 v -6.67 l -3.86,-0.3 c -6.37,-0.6 -7.99,-1.91 -7.99,-7.12 v -89.47 l 0.75,-12.75 h -5.36 l -23.7,7.12 v 3.86 l 10.5,4.87 v 29.32 c -5.91,-4.05 -12.98,-6.08 -20.14,-5.77 -23.55,0 -41.92,17.92 -41.92,44.74 0,22.09 13.2,37.35 34.95,37.35 11.25,0 21.04,-5.47 27.11,-13.95 l -0.75,13.95 h 3.15 l 27.26,-5.17 v 0 z m -49.35,-68.02 c 11.25,0 19.69,6.52 19.69,18.52 v 33.75 c -5.18,5.16 -12.23,8 -19.54,7.87 -16.12,0 -24.3,-12.75 -24.3,-29.77 0,-19.12 9.34,-30.37 24.15,-30.37 z M 743.3,302.8 c -2.1,-9.9 -8.17,-15.52 -16.61,-15.52 -12.6,0 -21.34,9.49 -21.34,23.1 0,20.14 10.65,33.19 27.86,33.19 11.48,-0.12 22.04,-6.33 27.71,-16.31 l 5.02,1.35 c -2.25,17.47 -18.07,30.52 -37.5,30.52 -22.8,0 -38.51,-16.87 -38.51,-40.87 0,-24 17.06,-41.21 39.86,-41.21 17.02,0 29.02,10.24 32.89,28.01 l -59.4,18.22 v -8.02 l 40.01,-12.41 v -0.04 z" shape-rendering="optimizeQuality"/>
          </g>
        </svg>`,
        link: 'claude'
      },
      {
        id: 'grok',
        title: 'Grok',
        description: 'by X (Twitter)',
        icon: `<svg viewBox="0 0 88 33" fill="none" xmlns="http://www.w3.org/2000/svg" class="opacity-80 hover:opacity-100 fill-black dark:fill-white">
          <path d="M76.4462 24.7077V8.41584H79.0216V19.1679L84.4685 12.9109H87.5908L82.6908 18.2731L87.6364 24.7077H84.5596L80.5539 19.1788L79.0216 19.1679V24.7077H76.4462Z" fill="currentColor"/>
          <path d="M68.6362 24.9815C64.8074 24.9815 62.7335 22.2662 62.7335 18.7979C62.7335 15.3068 64.8074 12.6143 68.6362 12.6143C72.4878 12.6143 74.5389 15.3068 74.5389 18.7979C74.5389 22.2662 72.4878 24.9815 68.6362 24.9815ZM65.4228 18.7979C65.4228 21.4904 66.8813 22.8366 68.6362 22.8366C70.4139 22.8366 71.8497 21.4904 71.8497 18.7979C71.8497 16.1054 70.4139 14.7363 68.6362 14.7363C66.8813 14.7363 65.4228 16.1054 65.4228 18.7979Z" fill="currentColor"/>
          <path d="M55.5659 24.7077V14.782L57.731 12.9109H62.3347V15.1014H58.1413V24.7077H55.5659Z" fill="currentColor"/>
          <path d="M45.7187 25.009C40.8101 25.009 37.8834 21.4448 37.8834 16.5846C37.8834 11.6788 40.9146 8.02795 45.8145 8.02795C49.6433 8.02795 52.4466 9.99027 53.1075 13.6411H50.1675C49.7345 11.5647 48.0024 10.401 45.8145 10.401C42.282 10.401 40.7322 13.4586 40.7322 16.5846C40.7322 19.7106 42.282 22.7454 45.8145 22.7454C49.1875 22.7454 50.6689 20.3039 50.7828 18.2731H45.7006V15.9105H53.381L53.3684 17.1457C53.3684 21.7359 51.4978 25.009 45.7187 25.009Z" fill="currentColor"/>
          <path d="M13.2371 21.0407L24.3186 12.8506C24.8619 12.4491 25.6384 12.6057 25.8973 13.2294C27.2597 16.5185 26.651 20.4712 23.9403 23.1851C21.2297 25.8989 17.4581 26.4941 14.0108 25.1386L10.2449 26.8843C15.6463 30.5806 22.2053 29.6665 26.304 25.5601C29.5551 22.3051 30.562 17.8683 29.6205 13.8673L29.629 13.8758C28.2637 7.99809 29.9647 5.64871 33.449 0.844576C33.5314 0.730667 33.6139 0.616757 33.6964 0.5L29.1113 5.09055V5.07631L13.2343 21.0436" fill="currentColor" id="mark"/>
          <path d="M10.9503 23.0313C7.07343 19.3235 7.74185 13.5853 11.0498 10.2763C13.4959 7.82722 17.5036 6.82767 21.0021 8.2971L24.7595 6.55998C24.0826 6.07017 23.215 5.54334 22.2195 5.17313C17.7198 3.31926 12.3326 4.24192 8.67479 7.90126C5.15635 11.4239 4.0499 16.8403 5.94992 21.4622C7.36924 24.9165 5.04257 27.3598 2.69884 29.826C1.86829 30.7002 1.0349 31.5745 0.36364 32.5L10.9474 23.0341" fill="currentColor" id="mark"/>
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
      },
      {
        id: 'otras',
        title: 'Otras Herramientas',
        description: 'Especializadas',
        icon: `<svg viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg">
          <rect width="40" height="40" rx="8" fill="#6366F1"/>
          <circle cx="20" cy="20" r="4" fill="white"/>
          <g stroke="white" stroke-width="2.5" stroke-linecap="round">
            <line x1="20" y1="8" x2="20" y2="12"/>
            <line x1="20" y1="28" x2="20" y2="32"/>
            <line x1="8" y1="20" x2="12" y2="20"/>
            <line x1="28" y1="20" x2="32" y2="20"/>
            <line x1="11.5" y1="11.5" x2="14.3" y2="14.3"/>
            <line x1="25.7" y1="25.7" x2="28.5" y2="28.5"/>
            <line x1="11.5" y1="28.5" x2="14.3" y2="25.7"/>
            <line x1="25.7" y1="14.3" x2="28.5" y2="11.5"/>
          </g>
        </svg>`,
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
