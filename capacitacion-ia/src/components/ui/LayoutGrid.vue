<script setup lang="ts">
import { computed } from 'vue'

export interface LayoutGridProps {
  cols?: 1 | 2 | 3 | 4 | 6 | 12
  gap?: 1 | 2 | 3 | 4 | 5 | 6 | 8
  alignItems?: 'start' | 'center' | 'end' | 'stretch'
  justifyItems?: 'start' | 'center' | 'end' | 'stretch'
  responsive?: boolean
}

const props = withDefaults(defineProps<LayoutGridProps>(), {
  cols: 3,
  gap: 4,
  alignItems: 'stretch',
  justifyItems: 'stretch',
  responsive: true
})

const gridClasses = computed(() => {
  return [
    'layout-grid',
    `layout-grid--cols-${props.cols}`,
    `layout-grid--gap-${props.gap}`,
    `layout-grid--align-${props.alignItems}`,
    `layout-grid--justify-${props.justifyItems}`,
    {
      'layout-grid--responsive': props.responsive
    }
  ]
})
</script>

<template>
  <div :class="gridClasses">
    <slot />
  </div>
</template>

<style scoped>
.layout-grid {
  display: grid;
  width: 100%;
}

/* ============================================
   COLUMNAS
   ============================================ */

.layout-grid--cols-1 {
  grid-template-columns: repeat(1, 1fr);
}

.layout-grid--cols-2 {
  grid-template-columns: repeat(2, 1fr);
}

.layout-grid--cols-3 {
  grid-template-columns: repeat(3, 1fr);
}

.layout-grid--cols-4 {
  grid-template-columns: repeat(4, 1fr);
}

.layout-grid--cols-6 {
  grid-template-columns: repeat(6, 1fr);
}

.layout-grid--cols-12 {
  grid-template-columns: repeat(12, 1fr);
}

/* ============================================
   GAPS - Basados en sistema de 8px
   ============================================ */

.layout-grid--gap-1 {
  gap: var(--spacing-1); /* 8px */
}

.layout-grid--gap-2 {
  gap: var(--spacing-2); /* 16px */
}

.layout-grid--gap-3 {
  gap: var(--spacing-3); /* 24px */
}

.layout-grid--gap-4 {
  gap: var(--spacing-4); /* 32px */
}

.layout-grid--gap-5 {
  gap: var(--spacing-5); /* 40px */
}

.layout-grid--gap-6 {
  gap: var(--spacing-6); /* 48px */
}

.layout-grid--gap-8 {
  gap: var(--spacing-8); /* 64px */
}

/* ============================================
   ALIGNMENT
   ============================================ */

.layout-grid--align-start {
  align-items: start;
}

.layout-grid--align-center {
  align-items: center;
}

.layout-grid--align-end {
  align-items: end;
}

.layout-grid--align-stretch {
  align-items: stretch;
}

.layout-grid--justify-start {
  justify-items: start;
}

.layout-grid--justify-center {
  justify-items: center;
}

.layout-grid--justify-end {
  justify-items: end;
}

.layout-grid--justify-stretch {
  justify-items: stretch;
}

/* ============================================
   RESPONSIVE BEHAVIOR
   ============================================ */

/* Mobile: 1 columna */
@media (max-width: 640px) {
  .layout-grid--responsive.layout-grid--cols-2,
  .layout-grid--responsive.layout-grid--cols-3,
  .layout-grid--responsive.layout-grid--cols-4,
  .layout-grid--responsive.layout-grid--cols-6,
  .layout-grid--responsive.layout-grid--cols-12 {
    grid-template-columns: repeat(1, 1fr);
  }
}

/* Tablet: 2 columnas para grids de 3+ */
@media (min-width: 641px) and (max-width: 1023px) {
  .layout-grid--responsive.layout-grid--cols-3,
  .layout-grid--responsive.layout-grid--cols-4 {
    grid-template-columns: repeat(2, 1fr);
  }

  .layout-grid--responsive.layout-grid--cols-6 {
    grid-template-columns: repeat(3, 1fr);
  }

  .layout-grid--responsive.layout-grid--cols-12 {
    grid-template-columns: repeat(6, 1fr);
  }
}

/* Desktop: mantener configuración original */
@media (min-width: 1024px) {
  /* Columnas ya definidas arriba */
}
</style>
