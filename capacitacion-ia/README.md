# Capacitación IA - Presentación Interactiva

Presentación interactiva para capacitación sobre herramientas de Inteligencia Artificial. Desarrollada con Vue 3, TypeScript y Vite, siguiendo principios SOLID.

## Características

- Presentación interactiva con múltiples tipos de slides
- Navegación con teclado, mouse y gestos táctiles
- Slides de tipo: Título, Contenido, Código y Quiz interactivo
- Diseño responsive y accesible
- Arquitectura modular siguiendo principios SOLID
- Testing con Vitest

## Tecnologías

- **Vue 3** - Framework progresivo de JavaScript
- **TypeScript** - Tipado estático
- **Vite** - Build tool y dev server ultrarrápido
- **Vue Router** - Enrutamiento
- **Vitest** - Framework de testing unitario

## Recommended IDE Setup

[VS Code](https://code.visualstudio.com/) + [Vue (Official)](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur).

## Recommended Browser Setup

- Chromium-based browsers (Chrome, Edge, Brave, etc.):
  - [Vue.js devtools](https://chromewebstore.google.com/detail/vuejs-devtools/nhdogjmejiglipccpnnnanhbledajbpd) 
  - [Turn on Custom Object Formatter in Chrome DevTools](http://bit.ly/object-formatters)
- Firefox:
  - [Vue.js devtools](https://addons.mozilla.org/en-US/firefox/addon/vue-js-devtools/)
  - [Turn on Custom Object Formatter in Firefox DevTools](https://fxdx.dev/firefox-devtools-custom-object-formatters/)

## Type Support for `.vue` Imports in TS

TypeScript cannot handle type information for `.vue` imports by default, so we replace the `tsc` CLI with `vue-tsc` for type checking. In editors, we need [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) to make the TypeScript language service aware of `.vue` types.

## Customize configuration

See [Vite Configuration Reference](https://vite.dev/config/).

## Estructura del Proyecto

```
src/
├── assets/          # Recursos estáticos (CSS, imágenes)
├── components/      # Componentes reutilizables
│   ├── common/      # Componentes comunes (navegación, etc.)
│   └── presentation/ # Componentes específicos de slides
├── composables/     # Lógica reutilizable (Composition API)
├── data/            # Datos de las slides
├── interfaces/      # Tipos e interfaces TypeScript
├── router/          # Configuración de Vue Router
├── services/        # Servicios y lógica de negocio
├── utils/           # Utilidades
└── views/           # Vistas/Páginas principales
```

## Principios SOLID Aplicados

### Single Responsibility Principle (SRP)
- `PresentationService`: Responsable solo de gestionar el acceso a las slides
- Cada componente de slide tiene una única responsabilidad

### Open/Closed Principle (OCP)
- Sistema de slides extensible mediante nuevos tipos sin modificar código existente
- Nuevos tipos de slides se pueden agregar fácilmente

### Liskov Substitution Principle (LSP)
- Todas las slides implementan la interfaz `ISlide` base
- Cualquier tipo de slide puede sustituir a la interfaz base

### Interface Segregation Principle (ISP)
- Interfaces específicas para cada tipo de slide
- Los componentes solo dependen de las interfaces que necesitan

### Dependency Inversion Principle (DIP)
- El composable `usePresentation` depende de `IPresentationService`, no de la implementación concreta
- Facilita testing y cambios de implementación

## Project Setup

```sh
npm install
```

### Compile and Hot-Reload for Development

```sh
npm run dev
```

### Type-Check, Compile and Minify for Production

```sh
npm run build
```

### Run Unit Tests with [Vitest](https://vitest.dev/)

```sh
npm run test:unit
```

## Navegación de la Presentación

### Teclado
- `→` o `Espacio`: Siguiente slide
- `←`: Slide anterior
- `Home`: Primera slide
- `End`: Última slide

### Táctil
- **Swipe izquierda**: Siguiente slide
- **Swipe derecha**: Slide anterior

### Mouse
- Botones de navegación en la parte inferior
- Indicadores de slide (clic para ir directamente)

## Agregar Nuevas Slides

1. Edita `src/data/slides.ts`
2. Agrega un nuevo objeto slide con el tipo apropiado:

```typescript
{
  id: 'mi-slide',
  title: 'Mi Título',
  type: SlideType.CONTENT,
  content: 'Contenido...',
  bullets: ['Punto 1', 'Punto 2'],
  order: 7
}
```

## Tipos de Slides Disponibles

- **TITLE**: Slide de portada con título, subtítulo y autor
- **CONTENT**: Slide de contenido con texto, bullets e imagen opcional
- **CODE**: Slide con bloque de código con sintaxis highlight
- **QUIZ**: Slide interactiva con pregunta de opción múltiple
- **INTERACTIVE**: Componente personalizado (placeholder)

## Personalización

### Estilos
Los colores y estilos principales se definen en `src/assets/base.css` usando variables CSS.

### Datos
Modifica `src/data/slides.ts` para cambiar el contenido de la presentación.
