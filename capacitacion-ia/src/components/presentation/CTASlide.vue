<script setup lang="ts">
import type { ICTASlide } from '@/interfaces/Slide'
import NavigationButtons from '@/components/common/NavigationButtons.vue'

const props = defineProps<{
  slide: ICTASlide
}>()

const emit = defineEmits<{
  previous: []
  'navigate-to-slide': [slideId: string]
}>()

const handleButtonClick = (action: string) => {
  if (action === 'contact') {
    if (props.slide.contactInfo.whatsapp) {
      window.open(`https://wa.me/${props.slide.contactInfo.whatsapp}`, '_blank', 'noopener,noreferrer')
    } else if (props.slide.contactInfo.email) {
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

const handlePreviousClick = () => {
  emit('previous')
}

const handleNavigateToSlide = (slideId: string) => {
  emit('navigate-to-slide', slideId)
}
</script>

<template>
  <div class="cta-slide">
    <!-- Navigation Buttons -->
    <NavigationButtons
      :current-slide-id="slide.id"
      :current-slide-order="slide.order"
      @navigate-to-slide="handleNavigateToSlide"
      @previous="handlePreviousClick"
    />

    <!-- Logo en la parte superior -->
    <div class="logo-container">
      <img src="/logoAnuarBarrera.webp" alt="Logo Anuar Barrera" class="logo-image" />
    </div>

    <div class="content-container">
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

          <a
            v-if="slide.contactInfo.whatsapp"
            :href="`https://wa.me/${slide.contactInfo.whatsapp}`"
            target="_blank"
            rel="noopener noreferrer"
            class="contact-link"
          >
            <svg class="icon-svg" viewBox="0 0 24 24" fill="currentColor">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
            </svg>
            <span>WhatsApp: {{ slide.contactInfo.whatsapp }}</span>
          </a>

          <a
            v-if="slide.contactInfo.linkedin"
            :href="slide.contactInfo.linkedin"
            target="_blank"
            rel="noopener noreferrer"
            class="contact-link"
          >
            <svg class="icon-svg" viewBox="0 0 24 24" fill="currentColor">
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
            </svg>
            <span>LinkedIn</span>
          </a>

          <a
            v-if="slide.contactInfo.servicios"
            :href="slide.contactInfo.servicios"
            target="_blank"
            rel="noopener noreferrer"
            class="contact-link"
          >
            <svg class="icon-svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect>
              <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path>
            </svg>
            <span>Servicios</span>
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
  </div>
</template>

<style scoped>
.cta-slide {
  width: 100%;
  min-height: 70vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: var(--spacing-6);
  max-width: var(--container-xl);
  margin: 0 auto;
}

.logo-container {
  margin-bottom: var(--spacing-4);
  display: flex;
  justify-content: center;
  align-items: center;
}

.logo-image {
  max-width: 200px;
  height: auto;
  object-fit: contain;
}

.content-container {
  width: 100%;
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
  font-family: 'Poppins', sans-serif;
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
  font-family: 'Poppins', sans-serif;
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

.contact-link .icon-svg {
  width: 20px;
  height: 20px;
  flex-shrink: 0;
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
    padding: var(--spacing-4);
  }

  .logo-image {
    max-width: 120px;
  }

  .content-container {
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
