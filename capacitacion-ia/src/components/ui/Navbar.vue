<script setup lang="ts">
import { ref } from 'vue'
import Button from './Button.vue'

export interface NavItem {
  label: string
  href?: string
  onClick?: () => void
}

export interface NavbarProps {
  logo?: string
  brandText?: string
  items?: NavItem[]
  sticky?: boolean
  transparent?: boolean
}

const props = withDefaults(defineProps<NavbarProps>(), {
  logo: '',
  brandText: 'Brand',
  items: () => [],
  sticky: true,
  transparent: false
})

const mobileMenuOpen = ref(false)

const toggleMobileMenu = () => {
  mobileMenuOpen.value = !mobileMenuOpen.value
}

const handleNavClick = (item: NavItem) => {
  if (item.onClick) {
    item.onClick()
  }
  // Cerrar el menú móvil después de hacer click
  mobileMenuOpen.value = false
}
</script>

<template>
  <nav
    class="navbar"
    :class="{
      'navbar--sticky': sticky,
      'navbar--transparent': transparent
    }"
  >
    <div class="navbar__container">
      <!-- Brand / Logo -->
      <div class="navbar__brand">
        <img v-if="logo" :src="logo" alt="Logo" class="navbar__logo" />
        <span class="navbar__brand-text">{{ brandText }}</span>
      </div>

      <!-- Desktop Navigation -->
      <div class="navbar__menu">
        <a
          v-for="(item, index) in items"
          :key="index"
          :href="item.href"
          class="navbar__link"
          @click.prevent="handleNavClick(item)"
        >
          {{ item.label }}
        </a>
      </div>

      <!-- CTA Buttons -->
      <div class="navbar__actions">
        <slot name="actions">
          <Button variant="ghost" size="sm">Iniciar Sesión</Button>
          <Button variant="primary" size="sm">Registrarse</Button>
        </slot>
      </div>

      <!-- Mobile Menu Button -->
      <button
        class="navbar__mobile-toggle"
        :class="{ 'navbar__mobile-toggle--active': mobileMenuOpen }"
        @click="toggleMobileMenu"
        aria-label="Toggle menu"
      >
        <span class="navbar__mobile-toggle-line" />
        <span class="navbar__mobile-toggle-line" />
        <span class="navbar__mobile-toggle-line" />
      </button>
    </div>

    <!-- Mobile Menu -->
    <transition name="mobile-menu">
      <div v-if="mobileMenuOpen" class="navbar__mobile-menu">
        <a
          v-for="(item, index) in items"
          :key="index"
          :href="item.href"
          class="navbar__mobile-link"
          @click.prevent="handleNavClick(item)"
        >
          {{ item.label }}
        </a>

        <div class="navbar__mobile-actions">
          <slot name="mobile-actions">
            <Button variant="ghost" size="md" full-width>Iniciar Sesión</Button>
            <Button variant="primary" size="md" full-width>Registrarse</Button>
          </slot>
        </div>
      </div>
    </transition>
  </nav>
</template>

<style scoped>
.navbar {
  width: 100%;
  background: var(--color-bg-primary);
  border-bottom: var(--border-width) solid var(--color-neutral-200);
  z-index: var(--z-sticky);
  transition: all var(--transition-base);
}

.navbar--sticky {
  position: sticky;
  top: 0;
  backdrop-filter: blur(8px);
  background: rgba(255, 255, 255, 0.95);
}

.navbar--transparent {
  background: transparent;
  border-bottom-color: transparent;
}

.navbar__container {
  max-width: var(--container-xl);
  margin: 0 auto;
  padding: var(--spacing-2) var(--spacing-4);
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: var(--spacing-4);
}

/* ============================================
   BRAND / LOGO
   ============================================ */

.navbar__brand {
  display: flex;
  align-items: center;
  gap: var(--spacing-2);
  cursor: pointer;
  transition: opacity var(--transition-fast);
}

.navbar__brand:hover {
  opacity: 0.8;
}

.navbar__logo {
  height: 2rem;
  width: auto;
}

.navbar__brand-text {
  font-family: var(--font-display);
  font-size: var(--text-xl);
  font-weight: var(--font-bold);
  color: var(--color-primary-700);
}

/* ============================================
   DESKTOP MENU
   ============================================ */

.navbar__menu {
  display: none;
  align-items: center;
  gap: var(--spacing-4);
  flex: 1;
  justify-content: center;
}

@media (min-width: 768px) {
  .navbar__menu {
    display: flex;
  }
}

.navbar__link {
  font-family: var(--font-primary);
  font-size: var(--text-base);
  font-weight: var(--font-medium);
  color: var(--color-text-secondary);
  text-decoration: none;
  padding: var(--spacing-1) var(--spacing-2);
  border-radius: var(--radius-md);
  transition: all var(--transition-fast);
  position: relative;
}

.navbar__link::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  width: 0;
  height: 2px;
  background: var(--color-primary-600);
  transition: width var(--transition-base);
}

.navbar__link:hover {
  color: var(--color-primary-600);
}

.navbar__link:hover::after {
  width: 100%;
}

/* ============================================
   ACTIONS
   ============================================ */

.navbar__actions {
  display: none;
  align-items: center;
  gap: var(--spacing-2);
}

@media (min-width: 768px) {
  .navbar__actions {
    display: flex;
  }
}

/* ============================================
   MOBILE TOGGLE
   ============================================ */

.navbar__mobile-toggle {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 0.375rem;
  width: 2.5rem;
  height: 2.5rem;
  padding: 0;
  background: none;
  border: none;
  cursor: pointer;
  z-index: var(--z-sticky);
}

@media (min-width: 768px) {
  .navbar__mobile-toggle {
    display: none;
  }
}

.navbar__mobile-toggle-line {
  width: 1.5rem;
  height: 2px;
  background: var(--color-text-primary);
  border-radius: 2px;
  transition: all var(--transition-base);
  transform-origin: center;
}

/* Animación hamburguesa -> X */
.navbar__mobile-toggle--active .navbar__mobile-toggle-line:nth-child(1) {
  transform: translateY(0.5rem) rotate(45deg);
}

.navbar__mobile-toggle--active .navbar__mobile-toggle-line:nth-child(2) {
  opacity: 0;
  transform: scaleX(0);
}

.navbar__mobile-toggle--active .navbar__mobile-toggle-line:nth-child(3) {
  transform: translateY(-0.5rem) rotate(-45deg);
}

/* ============================================
   MOBILE MENU
   ============================================ */

.navbar__mobile-menu {
  display: flex;
  flex-direction: column;
  background: var(--color-bg-primary);
  border-bottom: var(--border-width) solid var(--color-neutral-200);
  padding: var(--spacing-3) var(--spacing-4);
  gap: var(--spacing-1);
}

@media (min-width: 768px) {
  .navbar__mobile-menu {
    display: none;
  }
}

.navbar__mobile-link {
  font-family: var(--font-primary);
  font-size: var(--text-lg);
  font-weight: var(--font-medium);
  color: var(--color-text-secondary);
  text-decoration: none;
  padding: var(--spacing-2);
  border-radius: var(--radius-md);
  transition: all var(--transition-fast);
}

.navbar__mobile-link:hover {
  background: var(--color-neutral-100);
  color: var(--color-primary-600);
}

.navbar__mobile-actions {
  display: flex;
  flex-direction: column;
  gap: var(--spacing-2);
  margin-top: var(--spacing-3);
  padding-top: var(--spacing-3);
  border-top: var(--border-width) solid var(--color-neutral-200);
}

/* ============================================
   TRANSICIONES
   ============================================ */

.mobile-menu-enter-active,
.mobile-menu-leave-active {
  transition: all var(--transition-base);
}

.mobile-menu-enter-from,
.mobile-menu-leave-to {
  opacity: 0;
  transform: translateY(-1rem);
}

.mobile-menu-enter-to,
.mobile-menu-leave-from {
  opacity: 1;
  transform: translateY(0);
}
</style>
