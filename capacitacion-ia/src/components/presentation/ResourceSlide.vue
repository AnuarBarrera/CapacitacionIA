<script setup lang="ts">
import type { IResourceSlide } from '@/interfaces/Slide'

const props = defineProps<{
  slide: IResourceSlide
}>()

const emit = defineEmits<{
  next: []
}>()

const getResourceIcon = (type: string): string => {
  const icons: Record<string, string> = {
    web: '🌐',
    app: '📱',
    tool: '🛠️'
  }
  return icons[type] || '🔗'
}

const openLink = (url: string) => {
  window.open(url, '_blank', 'noopener,noreferrer')
}

const handleNextClick = () => {
  emit('next')
}
</script>

<template>
  <div class="resource-slide">
    <div class="header">
      <div v-if="slide.logoUrl" class="logo">
        <img :src="slide.logoUrl" :alt="slide.platform" />
      </div>
      <h2 class="slide-title">{{ slide.platform }}</h2>
      <p v-if="slide.description" class="description">{{ slide.description }}</p>
    </div>

    <div class="content-grid">
      <div class="resources-section">
        <h3 class="section-title">📍 Links Oficiales</h3>
        <div class="resources-list">
          <a
            v-for="(resource, index) in slide.resources"
            :key="index"
            :href="resource.url"
            target="_blank"
            rel="noopener noreferrer"
            class="resource-item"
          >
            <span class="resource-icon">{{ resource.icon || getResourceIcon(resource.type) }}</span>
            <span class="resource-label">{{ resource.label }}</span>
            <span class="external-link">↗</span>
          </a>
        </div>
      </div>

      <div v-if="slide.features && slide.features.length > 0" class="features-section">
        <h3 class="section-title">⭐ Características</h3>
        <ul class="features-list">
          <li v-for="(feature, index) in slide.features" :key="index" class="feature-item">
            {{ feature }}
          </li>
        </ul>
      </div>
    </div>

    <div v-if="slide.screenshot" class="screenshot-section">
      <img :src="slide.screenshot" :alt="`${slide.platform} screenshot`" class="screenshot" />
    </div>

    <!-- Botón siguiente -->
    <button class="next-button" @click="handleNextClick">
      Click para continuar
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      >
        <polyline points="9 18 15 12 9 6"></polyline>
      </svg>
    </button>
  </div>
</template>

<style scoped>
.resource-slide {
  padding: 2rem 4rem;
  max-width: 1600px;
  width: 100%;
  margin: 0 auto;
}

.header {
  text-align: center;
  margin-bottom: 3rem;
}

.logo {
  margin-bottom: 1rem;
}

.logo img {
  max-width: 120px;
  height: auto;
}

.slide-title {
  font-size: clamp(1.8rem, 4vw, 3rem);
  font-weight: bold;
  margin-bottom: 1rem;
  color: var(--color-heading);
}

.description {
  font-size: 1.2rem;
  color: var(--color-text);
  opacity: 0.9;
  max-width: 800px;
  margin: 0 auto;
}

.content-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;
  margin-bottom: 2rem;
}

.section-title {
  font-size: 1.4rem;
  font-weight: 600;
  margin-bottom: 1.5rem;
  color: var(--color-heading);
}

.resources-section {
  background: #f9fafb;
  padding: 2rem;
  border-radius: 12px;
}

.resources-list {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.resource-item {
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 1rem 1.5rem;
  background: #ffffff;
  border: 2px solid #e5e7eb;
  border-radius: 8px;
  text-decoration: none;
  color: var(--color-text);
  transition: all 0.3s ease;
  font-size: 1.1rem;
}

.resource-item:hover {
  transform: translateX(8px);
  border-color: var(--color-heading);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
}

.resource-icon {
  font-size: 1.5rem;
  flex-shrink: 0;
}

.resource-label {
  flex: 1;
  font-weight: 500;
}

.external-link {
  font-size: 1.2rem;
  opacity: 0.5;
  transition: opacity 0.3s ease;
}

.resource-item:hover .external-link {
  opacity: 1;
}

.features-section {
  background: #f9fafb;
  padding: 2rem;
  border-radius: 12px;
}

.features-list {
  list-style: none;
  padding: 0;
  margin: 0;
}

.feature-item {
  font-size: 1.05rem;
  line-height: 1.8;
  padding: 0.8rem 0;
  padding-left: 2rem;
  position: relative;
  color: var(--color-text);
}

.feature-item::before {
  content: '✓';
  position: absolute;
  left: 0;
  color: #10b981;
  font-weight: bold;
  font-size: 1.2rem;
}

.screenshot-section {
  margin-top: 2rem;
  text-align: center;
}

.screenshot {
  max-width: 100%;
  height: auto;
  border-radius: 12px;
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.1);
}

/* Botón siguiente */
.next-button {
  margin-top: 3rem;
  padding: 1rem 2.5rem;
  font-size: 1.2rem;
  font-weight: bold;
  color: white;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  border: none;
  border-radius: 50px;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 4px 15px rgba(102, 126, 234, 0.4);
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  text-transform: uppercase;
  letter-spacing: 1px;
}

.next-button svg {
  width: 20px;
  height: 20px;
  transition: transform 0.3s ease;
}

.next-button:hover {
  transform: translateY(-2px);
  box-shadow: 0 6px 20px rgba(102, 126, 234, 0.6);
  background: linear-gradient(135deg, #764ba2 0%, #667eea 100%);
}

.next-button:hover svg {
  transform: translateX(4px);
}

.next-button:active {
  transform: translateY(0);
  box-shadow: 0 2px 10px rgba(102, 126, 234, 0.4);
}

@media (max-width: 768px) {
  .resource-slide {
    padding: 1rem;
  }

  .content-grid {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }

  .resources-section,
  .features-section {
    padding: 1.5rem;
  }

  .resource-item {
    padding: 0.8rem 1rem;
    font-size: 1rem;
  }

  .feature-item {
    font-size: 0.95rem;
    padding-left: 1.5rem;
  }

  .next-button {
    margin-top: 2rem;
    padding: 0.8rem 2rem;
    font-size: 1rem;
  }
}

@media (prefers-color-scheme: dark) {
  .resources-section,
  .features-section {
    background: #1f2937;
  }

  .resource-item {
    background: #111827;
    border-color: #374151;
  }

  .resource-item:hover {
    border-color: #667eea;
  }
}
</style>
