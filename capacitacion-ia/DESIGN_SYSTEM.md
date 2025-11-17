# 🎨 Sistema de Diseño - Vue + TypeScript

Sistema de diseño moderno, profesional y minimalista construido con Vue 3 + TypeScript. Siguiendo las mejores prácticas de UI/UX con consistencia visual absoluta.

## 📐 Principios de Diseño

### ✅ Checklist Implementado

- ✅ **2 Tipografías profesionales**: Inter (UI) + Playfair Display (Títulos)
- ✅ **Sistema de spacing 8px**: Todas las medidas en múltiplos de 8px
- ✅ **Paleta consistente**: Primary, Secondary y Neutral bien definidos
- ✅ **Jerarquía visual clara**: Títulos grandes, subtítulos definidos, texto equilibrado
- ✅ **Hero section impactante**: Grande, limpio y enfocado
- ✅ **Animaciones suaves**: Transitions, hover effects, fade-in, scale
- ✅ **Grid system**: CSS Grid con spacing en múltiplos de 8px
- ✅ **Consistencia visual**: Mismos bordes, sombras, spacing y estilos

---

## 🎨 Paleta de Colores

### Primary - Azul Oscuro Elegante
```css
--color-primary-600: #3b4a8f
--color-primary-700: #2d3561
--color-primary-800: #1a1f36
```

### Secondary - Coral/Rosa Vibrante
```css
--color-secondary-500: #ff6b6b
--color-secondary-600: #fa5252
--color-secondary-700: #f03e3e
```

### Neutral - Grises Equilibrados
```css
--color-neutral-50: #f8f9fa
--color-neutral-200: #e9ecef
--color-neutral-600: #868e96
--color-neutral-900: #212529
```

---

## 📝 Tipografías

### Inter - Tipografía Principal
Usada para UI, botones, texto general, navegación.

```css
font-family: var(--font-primary);
```

### Playfair Display - Tipografía Display
Usada para títulos grandes, headings principales, impacto visual.

```css
font-family: var(--font-display);
```

### Jerarquía de Tamaños
```css
--text-sm: 0.875rem    /* 14px */
--text-base: 1rem      /* 16px */
--text-lg: 1.125rem    /* 18px */
--text-xl: 1.25rem     /* 20px */
--text-2xl: 1.5rem     /* 24px */
--text-3xl: 1.875rem   /* 30px */
--text-4xl: 2.25rem    /* 36px */
--text-5xl: 3rem       /* 48px */
--text-6xl: 3.75rem    /* 60px */
--text-7xl: 4.5rem     /* 72px */
```

---

## 📏 Sistema de Spacing (8px)

Todo el espaciado está basado en múltiplos de 8px:

```css
--spacing-1: 0.5rem    /* 8px */
--spacing-2: 1rem      /* 16px */
--spacing-3: 1.5rem    /* 24px */
--spacing-4: 2rem      /* 32px */
--spacing-5: 2.5rem    /* 40px */
--spacing-6: 3rem      /* 48px */
--spacing-8: 4rem      /* 64px */
--spacing-10: 5rem     /* 80px */
--spacing-12: 6rem     /* 96px */
--spacing-16: 8rem     /* 128px */
```

---

## 🧩 Componentes

### 1. Button.vue

Botón reutilizable con múltiples variantes y tamaños.

#### Props
```typescript
interface ButtonProps {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost'
  size?: 'sm' | 'md' | 'lg'
  disabled?: boolean
  loading?: boolean
  fullWidth?: boolean
  type?: 'button' | 'submit' | 'reset'
}
```

#### Uso
```vue
<Button variant="primary" size="lg">
  Click Me
</Button>

<Button variant="outline" size="md" :loading="isLoading">
  Loading Example
</Button>
```

---

### 2. Card.vue

Contenedor flexible con variantes visuales.

#### Props
```typescript
interface CardProps {
  variant?: 'elevated' | 'outlined' | 'flat'
  padding?: 'none' | 'sm' | 'md' | 'lg'
  hoverable?: boolean
  clickable?: boolean
}
```

#### Uso
```vue
<Card variant="elevated" hoverable>
  <template #header>Card Title</template>
  Card content here
  <template #footer>
    <Button>Action</Button>
  </template>
</Card>
```

---

### 3. Navbar.vue

Navbar responsive con menú móvil hamburguesa.

#### Props
```typescript
interface NavbarProps {
  logo?: string
  brandText?: string
  items?: NavItem[]
  sticky?: boolean
  transparent?: boolean
}
```

#### Uso
```vue
<Navbar brand-text="Brand" :items="navItems">
  <template #actions>
    <Button variant="ghost">Login</Button>
    <Button variant="primary">Sign Up</Button>
  </template>
</Navbar>
```

---

### 4. HeroSection.vue

Hero section grande e impactante con animaciones.

#### Props
```typescript
interface HeroSectionProps {
  title?: string
  subtitle?: string
  description?: string
  backgroundImage?: string
  overlay?: boolean
  centered?: boolean
}
```

#### Uso
```vue
<HeroSection
  subtitle="Welcome"
  title="Build Something Amazing"
  description="Your amazing description here"
>
  <template #actions>
    <Button variant="primary" size="lg">Get Started</Button>
  </template>

  <template #image>
    <HeroIllustration />
  </template>
</HeroSection>
```

---

### 5. LayoutGrid.vue

Sistema de grid responsivo basado en CSS Grid.

#### Props
```typescript
interface LayoutGridProps {
  cols?: 1 | 2 | 3 | 4 | 6 | 12
  gap?: 1 | 2 | 3 | 4 | 5 | 6 | 8
  alignItems?: 'start' | 'center' | 'end' | 'stretch'
  justifyItems?: 'start' | 'center' | 'end' | 'stretch'
  responsive?: boolean
}
```

#### Uso
```vue
<LayoutGrid :cols="3" :gap="4">
  <Card>Card 1</Card>
  <Card>Card 2</Card>
  <Card>Card 3</Card>
</LayoutGrid>
```

---

### 6. Icon.vue

Iconos SVG optimizados inline.

#### Props
```typescript
interface IconProps {
  name: 'rocket' | 'star' | 'check' | 'arrow-right' | 'sparkles' |
        'code' | 'lightning' | 'heart' | 'shield' | 'users'
  size?: 'sm' | 'md' | 'lg' | 'xl'
  color?: string
}
```

#### Uso
```vue
<Icon name="rocket" size="lg" color="var(--color-primary-600)" />
```

---

## 🎭 Animaciones

Todas las animaciones son suaves y siguen las variables de transición:

```css
--transition-fast: 150ms cubic-bezier(0.4, 0, 0.2, 1)
--transition-base: 250ms cubic-bezier(0.4, 0, 0.2, 1)
--transition-slow: 350ms cubic-bezier(0.4, 0, 0.2, 1)
```

### Clases de Animación Disponibles

```css
.animate-fade-in        /* Fade in simple */
.animate-fade-in-up     /* Fade in subiendo */
.animate-fade-in-down   /* Fade in bajando */
.animate-scale-in       /* Scale in desde 95% */
.animate-slide-in-right /* Slide desde la izquierda */
.animate-slide-in-left  /* Slide desde la derecha */
```

### Delays Escalonados

```css
.animation-delay-100  /* 100ms */
.animation-delay-200  /* 200ms */
.animation-delay-300  /* 300ms */
.animation-delay-400  /* 400ms */
.animation-delay-500  /* 500ms */
```

---

## 🎯 Sombras

Sistema de sombras consistente:

```css
--shadow-sm: 0 1px 3px 0 rgba(0, 0, 0, 0.1)
--shadow-md: 0 4px 6px -1px rgba(0, 0, 0, 0.1)
--shadow-lg: 0 10px 15px -3px rgba(0, 0, 0, 0.1)
--shadow-xl: 0 20px 25px -5px rgba(0, 0, 0, 0.1)
--shadow-2xl: 0 25px 50px -12px rgba(0, 0, 0, 0.25)
```

---

## 📦 Border Radius

```css
--radius-sm: 0.25rem   /* 4px */
--radius-md: 0.5rem    /* 8px - Usado en botones y cards */
--radius-lg: 1rem      /* 16px - Usado en cards grandes */
--radius-xl: 1.5rem    /* 24px */
--radius-2xl: 2rem     /* 32px */
--radius-full: 9999px  /* Circular */
```

---

## 📱 Responsive Design

### Breakpoints

```css
--breakpoint-sm: 640px
--breakpoint-md: 768px
--breakpoint-lg: 1024px
--breakpoint-xl: 1280px
--breakpoint-2xl: 1536px
```

### Mobile First

Todos los componentes son responsive por defecto y siguen el enfoque "mobile first".

---

## 🚀 Cómo Empezar

### 1. Instalación

Los componentes ya están listos en `/src/components/ui/`

### 2. Importar Componentes

```typescript
import Button from '@/components/ui/Button.vue'
import Card from '@/components/ui/Card.vue'
import Navbar from '@/components/ui/Navbar.vue'
import HeroSection from '@/components/ui/HeroSection.vue'
import LayoutGrid from '@/components/ui/LayoutGrid.vue'
import Icon from '@/components/ui/Icon.vue'
```

### 3. Ver Demo

Visita la ruta `/` para ver todos los componentes en acción con ejemplos de uso.

---

## 🎨 Ejemplo Completo

```vue
<script setup lang="ts">
import Button from '@/components/ui/Button.vue'
import Card from '@/components/ui/Card.vue'
import LayoutGrid from '@/components/ui/LayoutGrid.vue'
import Icon from '@/components/ui/Icon.vue'
</script>

<template>
  <div class="container">
    <h1>Mi Aplicación</h1>

    <LayoutGrid :cols="3" :gap="4">
      <Card variant="elevated" hoverable>
        <template #header>
          <Icon name="rocket" size="md" />
          Feature 1
        </template>
        <p>Descripción de la característica</p>
        <template #footer>
          <Button variant="primary">Ver Más</Button>
        </template>
      </Card>

      <!-- Más cards... -->
    </LayoutGrid>
  </div>
</template>
```

---

## 🔧 Personalización

Todas las variables CSS están definidas en `/src/assets/design-tokens.css`. Puedes personalizar:

- Colores
- Tipografías
- Spacing
- Sombras
- Border radius
- Transiciones

---

## ✨ Características Destacadas

- ✅ **TypeScript**: Todo está tipado para mejor DX
- ✅ **Composable**: Componentes pequeños y reutilizables
- ✅ **Accesible**: Focus states y aria labels
- ✅ **Performante**: Animaciones con GPU acceleration
- ✅ **Responsive**: Mobile first approach
- ✅ **Mantenible**: Código limpio y bien documentado

---

## 📚 Recursos

- **Design Tokens**: `/src/assets/design-tokens.css`
- **Componentes**: `/src/components/ui/`
- **Demo Completo**: `/src/views/DesignSystemView.vue`

---

**Creado con ❤️ usando Vue 3 + TypeScript**
