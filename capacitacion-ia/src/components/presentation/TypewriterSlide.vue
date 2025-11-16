<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'
import type { ITypewriterSlide } from '@/interfaces/Slide'

const props = defineProps<{
  slide: ITypewriterSlide
}>()

const displayedText = ref<string[]>([])
const currentLineIndex = ref(0)
const currentCharIndex = ref(0)
const isComplete = ref(false)

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
    <h2 class="slide-title">{{ slide.title }}</h2>

    <div class="typewriter-container">
      <div v-if="slide.imageUrl" class="background-image">
        <img :src="slide.imageUrl" :alt="slide.title" />
      </div>

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
  </div>
</template>

<style scoped>
.typewriter-slide {
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
  color: var(--color-heading);
  text-align: center;
}

.typewriter-container {
  position: relative;
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
}

.background-image {
  position: absolute;
  inset: 0;
  opacity: 0.15;
  z-index: 0;
}

.background-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 8px;
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

@media (max-width: 768px) {
  .typewriter-slide {
    padding: 1rem;
  }

  .typewriter-content {
    padding: 1rem;
  }

  .typewriter-line {
    font-size: 1rem;
  }
}

@media (prefers-color-scheme: dark) {
  .typewriter-content {
    background: rgba(0, 0, 0, 0.85);
  }
}
</style>
