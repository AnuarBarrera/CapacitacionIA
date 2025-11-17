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
  padding: 2rem 4rem;
  max-width: 1400px;
  width: 100%;
  margin: 0 auto;
  min-height: 70vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 3rem;
}

.message-section {
  text-align: center;
}

.slide-title {
  font-size: clamp(2rem, 5vw, 3.5rem);
  font-weight: bold;
  margin-bottom: 2rem;
  color: var(--color-heading);
}

.message-content {
  max-width: 800px;
  margin: 0 auto;
}

.message-line {
  font-size: clamp(1.2rem, 2.5vw, 1.6rem);
  line-height: 1.8;
  margin: 0.5rem 0;
  color: var(--color-text);
  font-weight: 500;
}

.contact-section {
  display: flex;
  justify-content: center;
}

.contact-card {
  background: linear-gradient(135deg, #0066ff 0%, #00d4ff 100%);
  padding: 2.5rem;
  border-radius: 16px;
  color: white;
  text-align: center;
  box-shadow: 0 8px 24px rgba(0, 102, 255, 0.3);
  max-width: 500px;
  width: 100%;
}

.contact-name {
  font-size: 2rem;
  font-weight: bold;
  margin-bottom: 0.5rem;
}

.contact-company {
  font-size: 1.2rem;
  opacity: 0.9;
  margin-bottom: 2rem;
}

.contact-details {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin-bottom: 1.5rem;
}

.contact-link {
  display: flex;
  align-items: center;
  gap: 0.8rem;
  padding: 0.8rem 1.2rem;
  background: rgba(255, 255, 255, 0.2);
  border-radius: 8px;
  text-decoration: none;
  color: white;
  transition: all 0.3s ease;
  font-size: 1rem;
}

.contact-link:hover {
  background: rgba(255, 255, 255, 0.3);
  transform: translateX(4px);
}

.contact-link .icon {
  font-size: 1.2rem;
}

.social-media {
  display: flex;
  gap: 1rem;
  justify-content: center;
  flex-wrap: wrap;
}

.social-button {
  padding: 0.8rem 1.5rem;
  background: rgba(255, 255, 255, 0.2);
  border: 2px solid rgba(255, 255, 255, 0.4);
  border-radius: 8px;
  color: white;
  font-size: 1rem;
  cursor: pointer;
  transition: all 0.3s ease;
}

.social-button:hover {
  background: rgba(255, 255, 255, 0.3);
  border-color: white;
  transform: scale(1.05);
}

.cta-buttons {
  display: flex;
  gap: 1.5rem;
  justify-content: center;
  flex-wrap: wrap;
}

.cta-button {
  padding: 1rem 2.5rem;
  font-size: 1.1rem;
  font-weight: 600;
  border-radius: 12px;
  cursor: pointer;
  transition: all 0.3s ease;
  border: none;
}

.cta-button.primary {
  background: linear-gradient(135deg, #0066ff 0%, #00d4ff 100%);
  color: white;
  box-shadow: 0 4px 12px rgba(0, 102, 255, 0.4);
}

.cta-button.primary:hover {
  transform: translateY(-4px);
  box-shadow: 0 8px 20px rgba(0, 212, 255, 0.6);
}

.cta-button.secondary {
  background: transparent;
  border: 2px solid #00d4ff;
  color: #00d4ff;
}

.cta-button.secondary:hover {
  background: #00d4ff;
  color: #000000;
  transform: translateY(-4px);
}

@media (max-width: 768px) {
  .cta-slide {
    padding: 1rem;
    gap: 2rem;
  }

  .contact-card {
    padding: 1.5rem;
  }

  .contact-name {
    font-size: 1.5rem;
  }

  .contact-company {
    font-size: 1rem;
  }

  .contact-link {
    font-size: 0.9rem;
    padding: 0.6rem 1rem;
  }

  .cta-button {
    padding: 0.8rem 1.5rem;
    font-size: 1rem;
  }
}

@media (prefers-color-scheme: dark) {
  .message-line {
    color: #e5e7eb;
  }
}
</style>
