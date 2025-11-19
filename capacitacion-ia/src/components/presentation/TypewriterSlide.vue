<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'
import type { ITypewriterSlide } from '@/interfaces/Slide'
import NavigationButtons from '@/components/common/NavigationButtons.vue'

const props = defineProps<{
  slide: ITypewriterSlide
}>()

const emit = defineEmits<{
  next: []
  previous: []
  'navigate-to-slide': [slideId: string]
}>()

const displayedText = ref<string[]>([])
const currentLineIndex = ref(0)
const currentCharIndex = ref(0)
const isComplete = ref(false)

const handleContinueClick = () => {
  emit('next')
}

const handlePreviousClick = () => {
  emit('previous')
}

const handleNavigateToSlide = (slideId: string) => {
  emit('navigate-to-slide', slideId)
}

let intervalId: number | null = null

const typewriterEffect = () => {
  if (currentLineIndex.value >= props.slide.lines.length) {
    isComplete.value = true
    if (intervalId !== null) {
      clearInterval(intervalId)
      intervalId = null
    }
    return
  }

  const currentLine = props.slide.lines[currentLineIndex.value]

  if (!currentLine) {
    currentLineIndex.value++
    currentCharIndex.value = 0
    return
  }

  if (currentCharIndex.value <= currentLine.length) {
    const updatedLines = [...displayedText.value]
    updatedLines[currentLineIndex.value] = currentLine.substring(0, currentCharIndex.value)
    displayedText.value = updatedLines
    currentCharIndex.value++
  } else {
    // Línea completada, pasar a la siguiente
    currentLineIndex.value++
    currentCharIndex.value = 0
  }
}

onMounted(() => {
  const speed = props.slide.speed || 50
  intervalId = window.setInterval(typewriterEffect, speed)
})

onUnmounted(() => {
  if (intervalId !== null) {
    clearInterval(intervalId)
  }
})
</script>

<template>
  <div class="typewriter-slide">
    <!-- Background image con blur -->
    <div class="background-image-blur"></div>
    <div class="background-overlay"></div>

    <!-- Contenido con z-index superior -->
    <div class="content-container">
      <!-- Navigation Buttons -->
      <NavigationButtons
        :current-slide-id="slide.id"
        :current-slide-order="slide.order"
        @navigate-to-slide="handleNavigateToSlide"
        @previous="handlePreviousClick"
      />

      <h2 class="slide-title">{{ slide.title }}</h2>

      <div class="typewriter-container">
        <div class="typewriter-content">
          <p
            v-for="(line, index) in displayedText"
            :key="index"
            class="typewriter-line"
            :class="{ empty: line === '' }"
          >
            {{ line }}<span v-if="index === currentLineIndex && !isComplete" class="cursor">|</span>
          </p>
        </div>
      </div>

      <!-- Botón flotante que aparece cuando termina la animación -->
      <Transition name="fade-slide-up">
        <button
          v-if="isComplete"
          class="continue-button"
          @click="handleContinueClick"
        >
          Click para continuar
        </button>
      </Transition>
    </div>
  </div>
</template>

<style scoped>
.typewriter-slide {
  width: 100%;
  min-height: 70vh;
  position: relative;
  overflow: hidden;
  display: flex;
  flex-direction: column;
}

.background-image-blur {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: url('/capa.webp');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  filter: blur(8px);
  transform: scale(1.1);
  z-index: 0;
}

.background-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  z-index: 1;
}

.content-container {
  position: relative;
  z-index: 2;
  padding: 2rem 4rem;
  max-width: 1600px;
  width: 100%;
  margin: 0 auto;
  min-height: 70vh;
  display: flex;
  flex-direction: column;
}

.slide-title {
  font-size: clamp(1.8rem, 4vw, 3rem);
  font-weight: bold;
  margin-bottom: 2rem;
  color: white !important;
  text-align: center;
}

.typewriter-container {
  position: relative;
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
}

.typewriter-content {
  position: relative;
  z-index: 1;
  max-width: 1200px;
  width: 100%;
  padding: 3rem 4rem;
  background: rgba(255, 255, 255, 0.95);
  border-radius: 12px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.typewriter-line {
  font-size: clamp(1.2rem, 2.5vw, 1.8rem);
  line-height: 1.8;
  margin: 0.5rem 0;
  color: var(--color-text);
  font-family: 'Courier New', monospace;
  min-height: 1.8em;
}

.typewriter-line.empty {
  min-height: 0.9em;
}

.cursor {
  display: inline-block;
  animation: blink 1s infinite;
  color: var(--color-heading);
  font-weight: bold;
  margin-left: 2px;
}

@keyframes blink {
  0%,
  50% {
    opacity: 1;
  }
  51%,
  100% {
    opacity: 0;
  }
}

/* Botón flotante "Sigue aquí" */
.continue-button {
  position: fixed;
  bottom: 140px;
  right: 3rem;
  padding: 1.2rem 2.5rem;
  font-size: 1.3rem;
  font-weight: bold;
  color: white;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  border: none;
  border-radius: 50px;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 8px 20px rgba(102, 126, 234, 0.5);
  z-index: 100;
  text-transform: uppercase;
  letter-spacing: 1px;
}

.continue-button:hover {
  transform: translateY(-4px) scale(1.05);
  box-shadow: 0 12px 30px rgba(102, 126, 234, 0.7);
  background: linear-gradient(135deg, #764ba2 0%, #667eea 100%);
}

.continue-button:active {
  transform: translateY(-2px) scale(1.02);
  box-shadow: 0 6px 15px rgba(102, 126, 234, 0.5);
}

/* Transición fade-slide-up */
.fade-slide-up-enter-active {
  animation: fadeSlideUp 0.6s ease-out;
}

.fade-slide-up-leave-active {
  animation: fadeSlideUp 0.3s ease-in reverse;
}

@keyframes fadeSlideUp {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@media (max-width: 768px) {
  .content-container {
    padding: 1rem;
  }

  .typewriter-content {
    padding: 1rem;
  }

  .typewriter-line {
    font-size: 1rem;
  }

  .continue-button {
    bottom: 120px;
    right: 1.5rem;
    padding: 1rem 2rem;
    font-size: 1.1rem;
  }
}

@media (prefers-color-scheme: dark) {
  .typewriter-content {
    background: rgba(0, 0, 0, 0.85);
  }
}
</style>
