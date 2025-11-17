<script setup lang="ts">
import type { ICTASlide } from '@/interfaces/Slide'

const props = defineProps<{
  slide: ICTASlide
}>()

const handleButtonClick = (action: string) => {
  if (action === 'contact') {
    if (props.slide.contactInfo.email) {
      window.location.href = `mailto:${props.slide.contactInfo.email}`
    } else if (props.slide.contactInfo.website) {
      window.open(props.slide.contactInfo.website, '_blank', 'noopener,noreferrer')
    }
  } else if (action === 'restart') {
    window.location.reload()
  }
}

const handleSocialClick = (url: string) => {
  window.open(url, '_blank', 'noopener,noreferrer')
}
</script>

<template>
  <div class="cta-slide">
    <div class="message-section">
      <h2 class="slide-title">{{ slide.title }}</h2>

      <div class="message-content">
        <p v-for="(line, index) in slide.message" :key="index" class="message-line">
          {{ line }}
        </p>
      </div>
    </div>

    <div class="contact-section">
      <div class="contact-card">
        <h3 class="contact-name">{{ slide.contactInfo.name }}</h3>
        <p class="contact-company">{{ slide.contactInfo.company }}</p>

        <div class="contact-details">
          <a
            v-if="slide.contactInfo.website"
            :href="slide.contactInfo.website"
            target="_blank"
            rel="noopener noreferrer"
            class="contact-link"
          >
            <span class="icon">🌐</span>
            <span>{{ slide.contactInfo.website }}</span>
          </a>

          <a
            v-if="slide.contactInfo.email"
            :href="`mailto:${slide.contactInfo.email}`"
            class="contact-link"
          >
            <span class="icon">📧</span>
            <span>{{ slide.contactInfo.email }}</span>
          </a>

          <a
            v-if="slide.contactInfo.phone"
            :href="`tel:${slide.contactInfo.phone}`"
            class="contact-link"
          >
            <span class="icon">📱</span>
            <span>{{ slide.contactInfo.phone }}</span>
          </a>
        </div>

        <div
          v-if="slide.contactInfo.socialMedia && slide.contactInfo.socialMedia.length > 0"
          class="social-media"
        >
          <button
            v-for="(social, index) in slide.contactInfo.socialMedia"
            :key="index"
            @click="handleSocialClick(social.url)"
            class="social-button"
          >
            <span v-if="social.icon">{{ social.icon }}</span>
            <span v-else>{{ social.platform }}</span>
          </button>
        </div>
      </div>
    </div>

    <div v-if="slide.ctaButtons && slide.ctaButtons.length > 0" class="cta-buttons">
      <button
        v-for="(button, index) in slide.ctaButtons"
        :key="index"
        @click="handleButtonClick(button.action)"
        class="cta-button"
        :class="button.variant || 'primary'"
      >
        {{ button.label }}
      </button>
    </div>
  </div>
</template>

<style scoped>
.cta-slide {
  padding: var(--spacing-4) var(--spacing-8);
  max-width: var(--container-xl);
  width: 100%;
  margin: 0 auto;
  min-height: 70vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: var(--spacing-6);
}

.message-section {
  text-align: center;
}

.slide-title {
  font-family: var(--font-display);
  font-size: clamp(var(--text-4xl), 5vw, var(--text-6xl));
  font-weight: var(--font-extrabold);
  margin-bottom: var(--spacing-4);
  color: var(--color-text-primary);
}

.message-content {
  max-width: 800px;
  margin: 0 auto;
}

.message-line {
  font-family: var(--font-primary);
  font-size: clamp(var(--text-lg), 2.5vw, var(--text-2xl));
  line-height: 1.8;
  margin: var(--spacing-1) 0;
  color: var(--color-text-secondary);
  font-weight: var(--font-medium);
}

.contact-section {
  display: flex;
  justify-content: center;
}

.contact-card {
  background: linear-gradient(135deg, var(--color-primary-600) 0%, var(--color-primary-700) 100%);
  padding: var(--spacing-5);
  border-radius: var(--radius-xl);
  color: var(--color-text-inverse);
  text-align: center;
  box-shadow: var(--shadow-2xl);
  max-width: 500px;
  width: 100%;
}

.contact-name {
  font-family: var(--font-display);
  font-size: var(--text-3xl);
  font-weight: var(--font-bold);
  margin-bottom: var(--spacing-1);
}

.contact-company {
  font-family: var(--font-primary);
  font-size: var(--text-lg);
  opacity: 0.9;
  margin-bottom: var(--spacing-4);
}

.contact-details {
  display: flex;
  flex-direction: column;
  gap: var(--spacing-2);
  margin-bottom: var(--spacing-3);
}

.contact-link {
  display: flex;
  align-items: center;
  gap: var(--spacing-2);
  padding: var(--spacing-2) var(--spacing-3);
  background: rgba(255, 255, 255, 0.2);
  border-radius: var(--radius-md);
  text-decoration: none;
  color: var(--color-text-inverse);
  transition: all var(--transition-base);
  font-family: var(--font-primary);
  font-size: var(--text-base);
}

.contact-link:hover {
  background: rgba(255, 255, 255, 0.3);
  transform: translateX(4px);
}

.contact-link .icon {
  font-size: var(--text-lg);
}

.social-media {
  display: flex;
  gap: var(--spacing-2);
  justify-content: center;
  flex-wrap: wrap;
}

.social-button {
  padding: var(--spacing-2) var(--spacing-3);
  background: rgba(255, 255, 255, 0.2);
  border: var(--border-width-md) solid rgba(255, 255, 255, 0.4);
  border-radius: var(--radius-md);
  color: var(--color-text-inverse);
  font-family: var(--font-primary);
  font-size: var(--text-base);
  cursor: pointer;
  transition: all var(--transition-base);
}

.social-button:hover {
  background: rgba(255, 255, 255, 0.3);
  border-color: var(--color-text-inverse);
  transform: scale(1.05);
}

.cta-buttons {
  display: flex;
  gap: var(--spacing-3);
  justify-content: center;
  flex-wrap: wrap;
}

.cta-button {
  padding: var(--spacing-2) var(--spacing-5);
  font-family: var(--font-primary);
  font-size: var(--text-base);
  font-weight: var(--font-semibold);
  border-radius: var(--radius-lg);
  cursor: pointer;
  transition: all var(--transition-base);
  border: none;
}

.cta-button.primary {
  background: linear-gradient(135deg, var(--color-primary-600) 0%, var(--color-primary-700) 100%);
  color: var(--color-text-inverse);
  box-shadow: var(--shadow-lg);
}

.cta-button.primary:hover {
  transform: translateY(-4px);
  box-shadow: var(--shadow-xl);
}

.cta-button.secondary {
  background: transparent;
  border: var(--border-width-md) solid var(--color-primary-600);
  color: var(--color-primary-600);
}

.cta-button.secondary:hover {
  background: var(--color-primary-600);
  color: var(--color-text-inverse);
  transform: translateY(-4px);
}

@media (max-width: 768px) {
  .cta-slide {
    padding: var(--spacing-2);
    gap: var(--spacing-4);
  }

  .slide-title {
    font-size: var(--text-3xl);
  }

  .contact-card {
    padding: var(--spacing-3);
  }

  .contact-name {
    font-size: var(--text-2xl);
  }

  .contact-company {
    font-size: var(--text-base);
  }

  .contact-link {
    font-size: var(--text-sm);
    padding: var(--spacing-1) var(--spacing-2);
  }

  .cta-button {
    padding: var(--spacing-2) var(--spacing-3);
    font-size: var(--text-base);
  }
}
</style>
