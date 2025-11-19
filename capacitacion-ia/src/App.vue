<script setup lang="ts">
import { RouterView } from 'vue-router'
import { onMounted, ref } from 'vue'

interface Particle {
  id: number
  x: number
  y: number
  size: number
  duration: number
  delay: number
  opacity: number
}

const particles = ref<Particle[]>([])

onMounted(() => {
  // Generar 30 partículas con posiciones aleatorias
  particles.value = Array.from({ length: 30 }, (_, i) => ({
    id: i,
    x: Math.random() * 100, // Posición X en porcentaje
    y: Math.random() * 100 + 100, // Empezar desde abajo de la pantalla
    size: Math.random() * 4 + 2, // Tamaño entre 2-6px
    duration: Math.random() * 20 + 15, // Duración entre 15-35s
    delay: Math.random() * 5, // Delay inicial entre 0-5s
    opacity: Math.random() * 0.5 + 0.2 // Opacidad entre 0.2-0.7
  }))
})
</script>

<template>
  <!-- Grid Blueprint de fondo -->
  <div class="blueprint-grid"></div>

  <!-- Partículas flotantes -->
  <div class="particles-container">
    <div
      v-for="particle in particles"
      :key="particle.id"
      class="particle"
      :style="{
        left: `${particle.x}%`,
        bottom: `${particle.y}%`,
        width: `${particle.size}px`,
        height: `${particle.size}px`,
        animationDuration: `${particle.duration}s`,
        animationDelay: `${particle.delay}s`,
        opacity: particle.opacity
      }"
    ></div>
  </div>

  <!-- Contenido principal con fade-in -->
  <div class="app-content">
    <RouterView />
  </div>
</template>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

:root {
  --font-heading: 'Poppins', sans-serif;
  --gradient-primary: linear-gradient(135deg, #00d4ff 0%, #0066ff 50%, #00d4ff 100%);
  --gradient-secondary: linear-gradient(135deg, #0066ff 0%, #00d4ff 100%);
  --gradient-accent: linear-gradient(135deg, #4facfe 0%, #00f2fe 100%);

  /* Colores para modo claro */
  --bg-light: #ffffff;
  --bg-dark: #000000;
  --color-heading-light: #1a1f36;
  --color-text-light: #2d3561;
  --color-heading-dark: #ffffff;
  --color-text-dark: #e0e0e0;

  /* Por defecto, modo oscuro */
  --app-bg: var(--bg-dark);
  --color-heading: var(--color-heading-dark);
  --color-text: var(--color-text-dark);
}

/* Modo claro */
@media (prefers-color-scheme: light) {
  :root {
    --app-bg: var(--bg-light);
    --color-heading: var(--color-heading-light);
    --color-text: var(--color-text-light);
  }
}

body {
  background: var(--app-bg);
  color: var(--color-text);
}

#app {
  min-height: 100vh;
  background: var(--app-bg);
  font-family: 'Poppins', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, sans-serif;
  position: relative;
  overflow-x: hidden;
  color: var(--color-text);
}

/* Grid Blueprint de fondo */
.blueprint-grid {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image:
    linear-gradient(rgba(0, 150, 255, 0.03) 1px, transparent 1px),
    linear-gradient(90deg, rgba(0, 150, 255, 0.03) 1px, transparent 1px);
  background-size: 50px 50px;
  pointer-events: none;
  z-index: 1;
}

@media (prefers-color-scheme: light) {
  .blueprint-grid {
    background-image:
      linear-gradient(rgba(0, 102, 255, 0.08) 1px, transparent 1px),
      linear-gradient(90deg, rgba(0, 102, 255, 0.08) 1px, transparent 1px);
  }
}

/* Contenedor de partículas */
.particles-container {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
  pointer-events: none;
  z-index: 2;
}

.particle {
  position: absolute;
  background: radial-gradient(circle, rgba(0, 212, 255, 0.8) 0%, rgba(0, 102, 255, 0.4) 50%, transparent 100%);
  border-radius: 50%;
  animation: floatUp linear infinite;
  filter: blur(1px);
}

@media (prefers-color-scheme: light) {
  .particle {
    background: radial-gradient(circle, rgba(0, 102, 255, 0.3) 0%, rgba(0, 150, 255, 0.15) 50%, transparent 100%);
  }
}

@keyframes floatUp {
  0% {
    transform: translateY(0) translateX(0);
  }
  25% {
    transform: translateY(-25vh) translateX(10px);
  }
  50% {
    transform: translateY(-50vh) translateX(-5px);
  }
  75% {
    transform: translateY(-75vh) translateX(15px);
  }
  100% {
    transform: translateY(-120vh) translateX(0);
  }
}

/* Contenido principal con fade-in */
.app-content {
  position: relative;
  z-index: 10;
  animation: fadeIn 1s ease-out;
}

@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

/* Gradient animado de fondo */
#app::before {
  content: '';
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background:
    radial-gradient(circle at 20% 50%, rgba(0, 102, 255, 0.15) 0%, transparent 50%),
    radial-gradient(circle at 80% 80%, rgba(0, 212, 255, 0.1) 0%, transparent 50%),
    radial-gradient(circle at 40% 20%, rgba(75, 166, 234, 0.08) 0%, transparent 50%);
  pointer-events: none;
  z-index: 0;
  animation: gradientMove 15s ease-in-out infinite;
}

@media (prefers-color-scheme: light) {
  #app::before {
    background:
      radial-gradient(circle at 20% 50%, rgba(0, 102, 255, 0.06) 0%, transparent 50%),
      radial-gradient(circle at 80% 80%, rgba(0, 212, 255, 0.04) 0%, transparent 50%),
      radial-gradient(circle at 40% 20%, rgba(75, 166, 234, 0.03) 0%, transparent 50%);
  }
}

@keyframes gradientMove {
  0%, 100% {
    transform: translate(0, 0) scale(1);
    opacity: 1;
  }
  33% {
    transform: translate(50px, -30px) scale(1.1);
    opacity: 0.9;
  }
  66% {
    transform: translate(-30px, 40px) scale(0.95);
    opacity: 0.95;
  }
}

/* Estilos globales para títulos con efectos */
h1, h2, h3, h4, h5, h6 {
  font-family: var(--font-heading);
  font-weight: 700;
  color: var(--color-heading);
}

/* Efecto de gradiente animado para títulos principales con shine effect */
.slide-title,
.main-title {
  font-family: var(--font-heading) !important;
  font-weight: 800 !important;
  background: var(--gradient-primary);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  background-size: 200% 200%;
  animation: gradientShine 4s ease-in-out infinite;
  position: relative;
  letter-spacing: -0.5px;
  filter: drop-shadow(0 0 20px rgba(0, 212, 255, 0.5));
}

/* Animación de gradiente shine continuo */
@keyframes gradientShine {
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
}

/* Asegurar que el contenido esté por encima del fondo */
.presentation-view,
.slide-container {
  position: relative;
  z-index: 1;
}

/* Botón con glow effect que pulsa */
.start-button,
.continue-button,
.next-button,
.cta-button.primary {
  position: relative;
  overflow: hidden;
  background: linear-gradient(135deg, #0066ff 0%, #00d4ff 100%);
  border: none;
  box-shadow: 0 0 20px rgba(0, 102, 255, 0.5);
  animation: buttonPulse 2s ease-in-out infinite;
  transition: all 0.3s ease;
}

@keyframes buttonPulse {
  0%, 100% {
    box-shadow: 0 0 20px rgba(0, 102, 255, 0.5);
  }
  50% {
    box-shadow: 0 0 30px rgba(0, 212, 255, 0.8);
  }
}

.start-button:hover,
.continue-button:hover,
.next-button:hover,
.cta-button.primary:hover {
  transform: scale(1.05);
  box-shadow: 0 0 40px rgba(0, 212, 255, 1);
}

.start-button::before,
.continue-button::before,
.next-button::before,
.cta-button.primary::before {
  content: '';
  position: absolute;
  top: -50%;
  left: -50%;
  width: 200%;
  height: 200%;
  background: linear-gradient(
    45deg,
    transparent,
    rgba(255, 255, 255, 0.3),
    transparent
  );
  transform: rotate(45deg);
  animation: shine 3s infinite;
}

@keyframes shine {
  0% {
    transform: translateX(-100%) translateY(-100%) rotate(45deg);
  }
  100% {
    transform: translateX(100%) translateY(100%) rotate(45deg);
  }
}

/* Responsive adjustments */
@media (max-width: 768px) {
  .blueprint-grid {
    background-size: 30px 30px;
  }

  .particle {
    filter: blur(0.5px);
  }
}

@media (max-width: 480px) {
  .blueprint-grid {
    background-size: 20px 20px;
    opacity: 0.5;
  }
}
</style>
