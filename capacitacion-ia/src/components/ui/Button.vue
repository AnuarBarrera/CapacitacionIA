<script setup lang="ts">
import { computed } from 'vue'

export interface ButtonProps {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost'
  size?: 'sm' | 'md' | 'lg'
  disabled?: boolean
  loading?: boolean
  fullWidth?: boolean
  type?: 'button' | 'submit' | 'reset'
}

const props = withDefaults(defineProps<ButtonProps>(), {
  variant: 'primary',
  size: 'md',
  disabled: false,
  loading: false,
  fullWidth: false,
  type: 'button'
})

const emit = defineEmits<{
  click: [event: MouseEvent]
}>()

const handleClick = (event: MouseEvent) => {
  if (!props.disabled && !props.loading) {
    emit('click', event)
  }
}

const buttonClasses = computed(() => {
  return [
    'button',
    `button--${props.variant}`,
    `button--${props.size}`,
    {
      'button--disabled': props.disabled,
      'button--loading': props.loading,
      'button--full-width': props.fullWidth
    }
  ]
})
</script>

<template>
  <button
    :type="type"
    :class="buttonClasses"
    :disabled="disabled || loading"
    @click="handleClick"
  >
    <span v-if="loading" class="button__loader" />
    <span class="button__content" :class="{ 'button__content--loading': loading }">
      <slot />
    </span>
  </button>
</template>

<style scoped>
.button {
  /* Reset */
  appearance: none;
  border: none;
  outline: none;
  margin: 0;

  /* Base styles */
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: var(--spacing-1);
  font-family: var(--font-primary);
  font-weight: var(--font-semibold);
  text-align: center;
  cursor: pointer;
  user-select: none;
  white-space: nowrap;

  /* Transiciones suaves */
  transition: all var(--transition-base);

  /* Border radius consistente */
  border-radius: var(--radius-md);

  /* Estado por defecto */
  position: relative;
  overflow: hidden;
}

/* ============================================
   TAMAÑOS
   ============================================ */

.button--sm {
  height: 2rem; /* 32px */
  padding: 0 var(--spacing-2);
  font-size: var(--text-sm);
}

.button--md {
  height: 2.5rem; /* 40px */
  padding: 0 var(--spacing-3);
  font-size: var(--text-base);
}

.button--lg {
  height: 3rem; /* 48px */
  padding: 0 var(--spacing-4);
  font-size: var(--text-lg);
}

/* ============================================
   VARIANTES
   ============================================ */

/* Primary */
.button--primary {
  background: linear-gradient(135deg, var(--color-primary-600) 0%, var(--color-primary-700) 100%);
  color: var(--color-text-inverse);
  box-shadow: var(--shadow-sm);
}

.button--primary:hover:not(.button--disabled):not(.button--loading) {
  background: linear-gradient(135deg, var(--color-primary-700) 0%, var(--color-primary-800) 100%);
  box-shadow: var(--shadow-md);
  transform: translateY(-1px);
}

.button--primary:active:not(.button--disabled):not(.button--loading) {
  transform: translateY(0);
  box-shadow: var(--shadow-sm);
}

/* Secondary */
.button--secondary {
  background: linear-gradient(135deg, var(--color-secondary-500) 0%, var(--color-secondary-600) 100%);
  color: var(--color-text-inverse);
  box-shadow: var(--shadow-sm);
}

.button--secondary:hover:not(.button--disabled):not(.button--loading) {
  background: linear-gradient(135deg, var(--color-secondary-600) 0%, var(--color-secondary-700) 100%);
  box-shadow: var(--shadow-md);
  transform: translateY(-1px);
}

.button--secondary:active:not(.button--disabled):not(.button--loading) {
  transform: translateY(0);
  box-shadow: var(--shadow-sm);
}

/* Outline */
.button--outline {
  background: transparent;
  color: var(--color-primary-600);
  border: var(--border-width-md) solid var(--color-primary-600);
}

.button--outline:hover:not(.button--disabled):not(.button--loading) {
  background: var(--color-primary-50);
  border-color: var(--color-primary-700);
  color: var(--color-primary-700);
  transform: translateY(-1px);
}

.button--outline:active:not(.button--disabled):not(.button--loading) {
  transform: translateY(0);
}

/* Ghost */
.button--ghost {
  background: transparent;
  color: var(--color-primary-600);
}

.button--ghost:hover:not(.button--disabled):not(.button--loading) {
  background: var(--color-primary-50);
  color: var(--color-primary-700);
}

.button--ghost:active:not(.button--disabled):not(.button--loading) {
  background: var(--color-primary-100);
}

/* ============================================
   ESTADOS
   ============================================ */

.button--disabled {
  cursor: not-allowed;
  opacity: 0.6;
  box-shadow: none;
}

.button--loading {
  cursor: wait;
}

.button--full-width {
  width: 100%;
}

/* ============================================
   LOADER
   ============================================ */

.button__loader {
  position: absolute;
  width: 1rem;
  height: 1rem;
  border: 2px solid currentColor;
  border-top-color: transparent;
  border-radius: 50%;
  animation: button-spin 0.6s linear infinite;
}

.button__content--loading {
  opacity: 0;
}

@keyframes button-spin {
  to {
    transform: rotate(360deg);
  }
}

/* ============================================
   EFECTO RIPPLE AL HACER CLICK
   ============================================ */

.button::before {
  content: '';
  position: absolute;
  top: 50%;
  left: 50%;
  width: 0;
  height: 0;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.3);
  transform: translate(-50%, -50%);
  transition: width var(--transition-slow), height var(--transition-slow);
}

.button:active:not(.button--disabled):not(.button--loading)::before {
  width: 300px;
  height: 300px;
  transition: width 0s, height 0s;
}

/* Focus visible para accesibilidad */
.button:focus-visible {
  outline: 2px solid var(--color-primary-500);
  outline-offset: 2px;
}
</style>
