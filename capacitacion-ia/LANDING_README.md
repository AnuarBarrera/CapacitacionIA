# Landing Page Profesional - Guía de Personalización

## 📋 Descripción

Landing page profesional orientada a emprendedores, diseñada para funcionar como tarjeta de presentación digital y generador de leads. Incluye efectos visuales tech oscuros, animaciones suaves y diseño completamente responsive.

## 🎨 Sistema de Diseño

### Tipografías
- **Poppins**: Títulos y encabezados (ya instalada)
- **Inter**: Texto general y párrafos (agregada automáticamente)

### Paleta de Colores
```css
Primary: #00d4ff (Cyan brillante)
Secondary: #0066ff (Azul tech)
Neutral: Grises sobre fondo negro (#000000)
Text: #ffffff (títulos), #e0e0e0 (texto), #a0a0a0 (subtítulos)
```

### Sistema de Spacing
Basado en múltiplos de 8px: 8, 16, 24, 32, 40, 48, 64, 80, 120px

## 📁 Estructura de Componentes

```
src/
├── views/
│   └── LandingView.vue          # Vista principal
└── components/landing/
    ├── HeroIntro.vue            # Hero con CTA principal
    ├── ValueProps.vue           # Beneficios y propuestas de valor
    ├── ProblemSolution.vue      # Antes/Después educativo
    ├── MiniPortfolio.vue        # Proyectos destacados
    ├── LeadMagnet.vue           # Formulario de captura
    └── FooterSection.vue        # Footer con contacto
```

## 🚀 Rutas

- `/` - Landing page profesional (nuevo)
- `/presentacion` - Presentación de capacitación IA (anterior)

## ⚙️ Personalización Rápida

### 1. Información Personal

Edita `src/views/LandingView.vue` líneas 8-22:

```typescript
const personalInfo = {
  name: 'Tu Nombre',                    // Tu nombre completo
  title: 'Tu título principal',         // Propuesta de valor
  subtitle: 'Tu descripción...',        // Descripción breve
  email: 'tu@email.com',                // Email de contacto
  phone: '+52 1 55 1234 5678',          // Teléfono
  whatsapp: 'https://wa.me/...',        // Link de WhatsApp
  location: 'Tu Ciudad, País',          // Ubicación
  social: {
    linkedin: 'https://linkedin.com/in/...',
    github: 'https://github.com/...',
    twitter: 'https://twitter.com/...',
    instagram: 'https://instagram.com/...'
  }
}
```

### 2. Propuestas de Valor (ValueProps)

Edita `src/components/landing/ValueProps.vue` líneas 19-39 para personalizar los 5 beneficios. Cada beneficio tiene:
- `icon`: 'rocket' | 'automation' | 'growth' | 'support' | 'results'
- `title`: Título del beneficio
- `description`: Descripción detallada

### 3. Proyectos del Portfolio

Edita `src/components/landing/MiniPortfolio.vue` líneas 20-38:

```typescript
{
  title: 'Nombre del Proyecto',
  description: 'Descripción detallada...',
  tags: ['Tecnología', 'Stack', 'Tipo'],
  metrics: 'Métrica destacada (ej: 300% ROI)'
}
```

### 4. Lead Magnet (Oferta Gratuita)

Edita `src/components/landing/LeadMagnet.vue`:
- Línea 12: `defaultOfferTitle` - Título de la oferta
- Línea 11: `defaultSubtitle` - Descripción
- Líneas 13-19: `defaultBenefits` - Lista de beneficios
- Líneas 51-66: Integra con tu servicio de email marketing

### 5. Problema vs Solución

Edita `src/components/landing/ProblemSolution.vue`:
- Líneas 10-14: Lista de problemas
- Líneas 16-20: Lista de soluciones

## 🎯 Funcionalidades Implementadas

### ✅ Diseño Profesional
- [x] Máximo 2 tipografías (Poppins + Inter)
- [x] Sistema de spacing 8px
- [x] Paleta de colores definida
- [x] Jerarquía visual clara
- [x] Hero grande y llamativo con CTA

### ✅ Animaciones
- [x] Fade-in al cargar
- [x] Slide-up para secciones
- [x] Hover effects elegantes
- [x] Transiciones suaves (0.3s-0.4s)

### ✅ Componentes SVG
- [x] Iconos minimalistas embebidos
- [x] Ilustraciones para proyectos
- [x] Avatar personalizable
- [x] Gráficos educativos

### ✅ Responsive
- [x] Desktop (>1024px)
- [x] Tablet (768px-1024px)
- [x] Mobile (<768px)
- [x] Grid adaptativo

### ✅ Generación de Leads
- [x] Formulario de captura
- [x] Validación de email
- [x] Estados de carga
- [x] Mensajes de error/éxito
- [x] CTAs estratégicos

## 🔗 Integración con Servicios

### Email Marketing

En `LeadMagnet.vue`, línea 51, reemplaza el código de simulación con tu servicio:

```typescript
// Ejemplo con API
const response = await fetch('https://tu-api.com/leads', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({
    name: name.value,
    email: email.value
  })
})

// O con servicio de terceros (MailChimp, ConvertKit, etc.)
```

### WhatsApp

El botón de WhatsApp usa el formato: `https://wa.me/5215512345678`
- Incluye código de país sin '+'
- Sin espacios ni guiones

### Google Analytics

Agrega en `index.html` antes de `</head>`:

```html
<!-- Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'GA_MEASUREMENT_ID');
</script>
```

## 🎨 Personalización Avanzada

### Cambiar Colores

En cada componente, busca y reemplaza:
- `#00d4ff` → Tu color primario
- `#0066ff` → Tu color secundario
- `#000000` → Tu color de fondo

### Agregar Secciones

1. Crea un nuevo componente en `src/components/landing/`
2. Importa en `LandingView.vue`
3. Agrega entre las secciones existentes
4. Sigue el patrón de spacing (padding: 120px 24px)

### Modificar Animaciones

Las animaciones usan `data-animate` attributes:
- `fade-in-up`: Aparecer desde abajo
- `fade-in`: Aparecer simple
- `slide-in-left/right`: Deslizar lateralmente
- `data-delay`: Tiempo en ms (100, 200, 300...)

## 📊 Métricas y Conversión

### CTAs Implementados
1. Hero - "Agendar Llamada Estratégica"
2. Portfolio - "Conversemos sobre tu proyecto"
3. Lead Magnet - "Descargar Guía Gratis"
4. Footer - "Chatear en WhatsApp"

### Trust Indicators
- Proyectos completados
- Satisfacción del cliente
- Métricas reales de ROI
- Garantías de privacidad

## 🚀 Deploy

### Build para Producción

```bash
npm run build
```

### Optimizaciones
- SVGs optimizados y embebidos
- Fuentes cargadas con preconnect
- Animaciones con GPU (transform, opacity)
- Lazy loading de secciones
- Responsive images

## 📱 Accesibilidad

- [x] Contraste WCAG AA
- [x] Labels en formularios
- [x] ARIA labels en iconos
- [x] Navegación por teclado
- [x] Estados de focus visibles

## 💡 Tips de Conversión

1. **Hero**: Mensaje claro en <5 segundos
2. **ValueProps**: Beneficios > Características
3. **Social Proof**: Métricas reales y específicas
4. **CTA**: Acción clara y urgencia suave
5. **Lead Magnet**: Valor inmediato y específico

## 🔧 Troubleshooting

### Las animaciones no funcionan
- Verifica que los atributos `data-animate` estén correctos
- Revisa la consola por errores JS

### El formulario no envía
- Revisa la implementación en línea 51 de `LeadMagnet.vue`
- Verifica CORS si usas API externa

### Estilos no se aplican
- Limpia caché del navegador
- Verifica que los imports de componentes sean correctos

## 📝 Licencia

Este código es parte del proyecto de capacitación y puede ser personalizado libremente.

---

**¿Necesitas ayuda?** Abre un issue en el repositorio.
