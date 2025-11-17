<script setup lang="ts">
import { computed } from 'vue'

export interface CardProps {
  variant?: 'elevated' | 'outlined' | 'flat'
  padding?: 'none' | 'sm' | 'md' | 'lg'
  hoverable?: boolean
  clickable?: boolean
}

const props = withDefaults(defineProps<CardProps>(), {
  variant: 'elevated',
  padding: 'md',
  hoverable: false,
  clickable: false
})

const emit = defineEmits<{
  click: [event: MouseEvent]
}>()

const handleClick = (event: MouseEvent) => {
  if (props.clickable) {
    emit('click', event)
  }
}

const cardClasses = computed(() => {
  return [
    'card',
    `card--${props.variant}`,
    `card--padding-${props.padding}`,
    {
      'card--hoverable': props.hoverable,
      'card--clickable': props.clickable
    }
  ]
})
</script>

<template>
  <div :class="cardClasses" @click="handleClick">
    <div v-if="$slots.header" class="card__header">
      <slot name="header" />
    </div>

    <div class="card__body">
      <slot />
    </div>

    <div v-if="$slots.footer" class="card__footer">
      <slot name="footer" />
    </div>
  </div>
</template>

<style scoped>
.card {
  /* Base */
  display: flex;
  flex-direction: column;
  background: var(--color-bg-primary);
  border-radius: var(--radius-lg);
  overflow: hidden;

  /* Transición suave */
  transition: all var(--transition-base);
}

/* ============================================
   VARIANTES
   ============================================ */

.card--elevated {
  box-shadow: var(--shadow-md);
}

.card--elevated.card--hoverable:hover {
  box-shadow: var(--shadow-xl);
  transform: translateY(-4px);
}

.card--outlined {
  border: var(--border-width) solid var(--color-neutral-300);
  box-shadow: none;
}

.card--outlined.card--hoverable:hover {
  border-color: var(--color-primary-400);
  box-shadow: var(--shadow-sm);
}

.card--flat {
  background: var(--color-neutral-50);
  box-shadow: none;
}

.card--flat.card--hoverable:hover {
  background: var(--color-neutral-100);
}

/* ============================================
   PADDING
   ============================================ */

.card--padding-none .card__body {
  padding: 0;
}

.card--padding-sm .card__body {
  padding: var(--spacing-2);
}

.card--padding-md .card__body {
  padding: var(--spacing-3);
}

.card--padding-lg .card__body {
  padding: var(--spacing-4);
}

/* ============================================
   SECCIONES
   ============================================ */

.card__header {
  padding: var(--spacing-3);
  border-bottom: var(--border-width) solid var(--color-neutral-200);
  background: var(--color-neutral-50);
  font-weight: var(--font-semibold);
  font-size: var(--text-lg);
  color: var(--color-text-primary);
}

.card__body {
  flex: 1;
  color: var(--color-text-secondary);
  line-height: 1.6;
}

.card__footer {
  padding: var(--spacing-3);
  border-top: var(--border-width) solid var(--color-neutral-200);
  background: var(--color-neutral-50);
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: var(--spacing-2);
}

/* ============================================
   ESTADOS INTERACTIVOS
   ============================================ */

.card--clickable {
  cursor: pointer;
}

.card--clickable:active {
  transform: scale(0.98);
}

/* Focus visible para accesibilidad */
.card--clickable:focus-visible {
  outline: 2px solid var(--color-primary-500);
  outline-offset: 2px;
}

/* ============================================
   ANIMACIÓN DE ENTRADA
   ============================================ */

.card {
  animation: fade-in-up var(--transition-slow) var(--ease-out);
}
</style>
