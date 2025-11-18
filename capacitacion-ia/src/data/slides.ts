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
    type: SlideType.CONTENT,
    content: 'Lo que escribes puede ser usado para entrenar la IA. Si es confidencial, NO lo compartas.',
    bullets: [
      '🟢 SÍ puedes compartir:',
      '• Ideas de negocio',
      '• Preguntas generales',
      '• Descripciones de productos/servicios',
      '• Solicitudes de contenido',
      '• Problemas que necesitas resolver',
      '🔴 NO compartas NUNCA:',
      '• Contraseñas o claves',
      '• Datos bancarios',
      '• INE o documentos oficiales completos',
      '• Información privada de clientes',
      '• Datos sensibles de tu empresa',
      'TIP: Si se lo puedes compartir a un amigo mientras van en un elevador, probablemente se lo puedas compartir a la IA'
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
