<script setup lang="ts">
import { ref, computed } from 'vue'
import type { IQuizSlide } from '@/interfaces/Slide'

const props = defineProps<{
  slide: IQuizSlide
}>()

const selectedOption = ref<string | null>(null)
const showExplanation = ref(false)

const selectedAnswer = computed(() => {
  if (!selectedOption.value) return null
  return props.slide.options.find(opt => opt.id === selectedOption.value)
})

const isCorrect = computed(() => {
  return selectedAnswer.value?.isCorrect ?? false
})

const handleOptionSelect = (optionId: string) => {
  selectedOption.value = optionId
  showExplanation.value = true
}

const resetQuiz = () => {
  selectedOption.value = null
  showExplanation.value = false
}
</script>

<template>
  <div class="quiz-slide">
    <h2 class="slide-title">{{ slide.title }}</h2>

    <div class="quiz-container">
      <p class="question">{{ slide.question }}</p>

      <div class="options">
        <button
          v-for="option in slide.options"
          :key="option.id"
          class="option-button"
          :class="{
            selected: selectedOption === option.id,
            correct: showExplanation && option.isCorrect,
            incorrect: showExplanation && selectedOption === option.id && !option.isCorrect
          }"
          :disabled="showExplanation"
          @click="handleOptionSelect(option.id)"
        >
          <span class="option-id">{{ option.id.toUpperCase() }}</span>
          <span class="option-text">{{ option.text }}</span>
        </button>
      </div>

      <div v-if="showExplanation" class="feedback">
        <div class="feedback-header" :class="{ correct: isCorrect, incorrect: !isCorrect }">
          <span class="feedback-icon">{{ isCorrect ? '✓' : '✗' }}</span>
          <span class="feedback-text">
            {{ isCorrect ? '¡Correcto!' : 'Incorrecto' }}
          </span>
        </div>

        <p v-if="slide.explanation" class="explanation">
          {{ slide.explanation }}
        </p>

        <button class="retry-button" @click="resetQuiz">Intentar de nuevo</button>
      </div>
    </div>
  </div>
</template>

<style scoped>
.quiz-slide {
  padding: 2rem;
  max-width: 900px;
  margin: 0 auto;
}

.slide-title {
  font-size: clamp(1.8rem, 4vw, 3rem);
  font-weight: bold;
  margin-bottom: 2rem;
  color: var(--color-heading);
}

.quiz-container {
  background: var(--color-background-soft);
  border-radius: 12px;
  padding: 2rem;
}

.question {
  font-size: 1.4rem;
  font-weight: 600;
  margin-bottom: 2rem;
  color: var(--color-heading);
  line-height: 1.6;
}

.options {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin-bottom: 2rem;
}

.option-button {
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 1.2rem 1.5rem;
  background: var(--color-background);
  border: 2px solid transparent;
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.2s ease;
  text-align: left;
  font-size: 1.1rem;
}

.option-button:hover:not(:disabled) {
  border-color: var(--color-border-hover);
  transform: translateX(4px);
}

.option-button:disabled {
  cursor: not-allowed;
}

.option-button.selected {
  border-color: var(--color-border);
}

.option-button.correct {
  background: #d4edda;
  border-color: #28a745;
}

.option-button.incorrect {
  background: #f8d7da;
  border-color: #dc3545;
}

.option-id {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 32px;
  height: 32px;
  background: var(--color-heading);
  color: white;
  border-radius: 50%;
  font-weight: bold;
  font-size: 0.9rem;
  flex-shrink: 0;
}

.option-text {
  flex: 1;
  color: var(--color-text);
}

.feedback {
  margin-top: 2rem;
  padding: 1.5rem;
  border-radius: 8px;
  background: var(--color-background);
}

.feedback-header {
  display: flex;
  align-items: center;
  gap: 0.8rem;
  margin-bottom: 1rem;
  font-size: 1.3rem;
  font-weight: bold;
}

.feedback-header.correct {
  color: #28a745;
}

.feedback-header.incorrect {
  color: #dc3545;
}

.feedback-icon {
  font-size: 1.8rem;
}

.explanation {
  font-size: 1rem;
  line-height: 1.6;
  color: var(--color-text);
  margin-bottom: 1.5rem;
}

.retry-button {
  padding: 0.8rem 1.5rem;
  background: var(--color-heading);
  color: white;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  font-size: 1rem;
  font-weight: 600;
  transition: opacity 0.2s ease;
}

.retry-button:hover {
  opacity: 0.9;
}

@media (max-width: 768px) {
  .quiz-slide {
    padding: 1rem;
  }

  .quiz-container {
    padding: 1.5rem;
  }

  .question {
    font-size: 1.2rem;
  }

  .option-button {
    padding: 1rem;
    font-size: 1rem;
  }
}
</style>
