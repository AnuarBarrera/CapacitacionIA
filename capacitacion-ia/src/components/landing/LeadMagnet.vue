<script setup lang="ts">
import { ref } from 'vue'

const props = defineProps<{
  title?: string
  subtitle?: string
  offerTitle?: string
  benefits?: string[]
}>()

const defaultTitle = 'Guía Gratuita'
const defaultSubtitle = 'Descarga mi framework probado para validar y lanzar tu idea en 30 días'
const defaultOfferTitle = '🎁 "De Idea a Ingresos en 30 Días"'
const defaultBenefits = [
  'Framework de validación paso a paso',
  'Templates de MVP y pitch',
  'Checklist de automatización',
  'Estrategias de monetización',
  'Métricas clave para medir progreso'
]

const email = ref('')
const name = ref('')
const isSubmitting = ref(false)
const isSuccess = ref(false)
const errorMessage = ref('')

const handleSubmit = async () => {
  if (!email.value || !name.value) {
    errorMessage.value = 'Por favor completa todos los campos'
    return
  }

  // Validar email
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  if (!emailRegex.test(email.value)) {
    errorMessage.value = 'Por favor ingresa un email válido'
    return
  }

  isSubmitting.value = true
  errorMessage.value = ''

  try {
    // Aquí integrarías con tu backend/API/servicio de email marketing
    // Por ahora simularemos un delay
    await new Promise(resolve => setTimeout(resolve, 1500))

    console.log('Lead capturado:', { name: name.value, email: email.value })

    isSuccess.value = true
    email.value = ''
    name.value = ''

    // Resetear success message después de 5 segundos
    setTimeout(() => {
      isSuccess.value = false
    }, 5000)
  } catch (error) {
    errorMessage.value = 'Hubo un error. Por favor intenta de nuevo.'
  } finally {
    isSubmitting.value = false
  }
}
</script>

<template>
  <section id="contact" class="lead-magnet-section">
    <div class="lead-magnet-container">
      <!-- Decorative background -->
      <div class="background-decoration"></div>

      <div class="content-wrapper" data-animate="fade-in-up">
        <!-- Left: Offer Details -->
        <div class="offer-details">
          <div class="offer-badge">Descarga Gratuita</div>

          <h2 class="offer-title">
            {{ offerTitle || defaultOfferTitle }}
          </h2>

          <p class="offer-subtitle">
            {{ subtitle || defaultSubtitle }}
          </p>

          <!-- Benefits List -->
          <ul class="benefits-list">
            <li v-for="(benefit, index) in (benefits || defaultBenefits)" :key="index" class="benefit-item">
              <svg class="check-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3">
                <polyline points="20 6 9 17 4 12"/>
              </svg>
              <span>{{ benefit }}</span>
            </li>
          </ul>

          <!-- Trust indicator -->
          <div class="trust-line">
            <svg class="lock-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <rect x="3" y="11" width="18" height="11" rx="2" ry="2"/>
              <path d="M7 11V7a5 5 0 0 1 10 0v4"/>
            </svg>
            <span>100% privado. Sin spam. Cancelar en cualquier momento.</span>
          </div>
        </div>

        <!-- Right: Form -->
        <div class="form-wrapper">
          <div class="form-card">
            <h3 class="form-title">{{ title || defaultTitle }}</h3>

            <form @submit.prevent="handleSubmit" class="lead-form">
              <div class="form-group">
                <label for="name" class="form-label">Nombre</label>
                <input
                  id="name"
                  v-model="name"
                  type="text"
                  class="form-input"
                  placeholder="¿Cómo te llamas?"
                  :disabled="isSubmitting"
                  required
                />
              </div>

              <div class="form-group">
                <label for="email" class="form-label">Email</label>
                <input
                  id="email"
                  v-model="email"
                  type="email"
                  class="form-input"
                  placeholder="tu@email.com"
                  :disabled="isSubmitting"
                  required
                />
              </div>

              <button
                type="submit"
                class="submit-button"
                :disabled="isSubmitting"
                :class="{ submitting: isSubmitting }"
              >
                <span v-if="!isSubmitting">
                  Descargar Guía Gratis
                  <svg class="button-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
                    <polyline points="7 10 12 15 17 10"/>
                    <line x1="12" y1="15" x2="12" y2="3"/>
                  </svg>
                </span>
                <span v-else class="loading-spinner">
                  Enviando...
                </span>
              </button>

              <!-- Error Message -->
              <div v-if="errorMessage" class="error-message">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <circle cx="12" cy="12" r="10"/>
                  <line x1="12" y1="8" x2="12" y2="12"/>
                  <line x1="12" y1="16" x2="12.01" y2="16"/>
                </svg>
                {{ errorMessage }}
              </div>

              <!-- Success Message -->
              <div v-if="isSuccess" class="success-message">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/>
                  <polyline points="22 4 12 14.01 9 11.01"/>
                </svg>
                ¡Excelente! Revisa tu email para descargar la guía.
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
/* Section */
.lead-magnet-section {
  padding: 120px 24px;
  position: relative;
  background: linear-gradient(180deg, transparent 0%, rgba(0, 102, 255, 0.03) 100%);
}

.lead-magnet-container {
  max-width: 1200px;
  margin: 0 auto;
  position: relative;
}

/* Background decoration */
.background-decoration {
  position: absolute;
  inset: 0;
  background: radial-gradient(circle at 30% 50%, rgba(0, 212, 255, 0.1) 0%, transparent 50%),
              radial-gradient(circle at 70% 50%, rgba(0, 102, 255, 0.08) 0%, transparent 50%);
  border-radius: 24px;
  pointer-events: none;
}

/* Content Wrapper */
.content-wrapper {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 64px;
  align-items: center;
  position: relative;
  z-index: 1;
}

/* Offer Details */
.offer-details {
  display: flex;
  flex-direction: column;
  gap: 24px;
}

.offer-badge {
  display: inline-block;
  width: fit-content;
  padding: 8px 16px;
  font-family: 'Inter', sans-serif;
  font-size: 12px;
  font-weight: 600;
  color: #00d4ff;
  background: rgba(0, 212, 255, 0.1);
  border: 1px solid rgba(0, 212, 255, 0.3);
  border-radius: 100px;
  text-transform: uppercase;
  letter-spacing: 0.5px;
}

.offer-title {
  font-family: 'Poppins', sans-serif;
  font-size: clamp(28px, 4vw, 40px);
  font-weight: 700;
  line-height: 1.2;
  color: #ffffff;
  margin: 0;
}

.offer-subtitle {
  font-family: 'Inter', sans-serif;
  font-size: 18px;
  font-weight: 400;
  line-height: 1.6;
  color: #b0b0b0;
  margin: 0;
}

/* Benefits List */
.benefits-list {
  list-style: none;
  padding: 0;
  margin: 16px 0 0 0;
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.benefit-item {
  display: flex;
  align-items: flex-start;
  gap: 12px;
  font-family: 'Inter', sans-serif;
  font-size: 16px;
  font-weight: 500;
  color: #e0e0e0;
  line-height: 1.5;
}

.check-icon {
  width: 20px;
  height: 20px;
  color: #00d4ff;
  flex-shrink: 0;
  margin-top: 2px;
}

/* Trust Line */
.trust-line {
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 16px;
  background: rgba(255, 255, 255, 0.02);
  border: 1px solid rgba(255, 255, 255, 0.05);
  border-radius: 8px;
  margin-top: 8px;
}

.lock-icon {
  width: 16px;
  height: 16px;
  color: #00d4ff;
  flex-shrink: 0;
}

.trust-line span {
  font-family: 'Inter', sans-serif;
  font-size: 13px;
  font-weight: 400;
  color: #808080;
}

/* Form Wrapper */
.form-wrapper {
  position: relative;
}

.form-card {
  padding: 40px;
  background: rgba(255, 255, 255, 0.03);
  border: 1px solid rgba(0, 150, 255, 0.2);
  border-radius: 16px;
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);
}

.form-title {
  font-family: 'Poppins', sans-serif;
  font-size: 24px;
  font-weight: 600;
  color: #ffffff;
  margin: 0 0 32px 0;
  text-align: center;
}

/* Form */
.lead-form {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.form-group {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.form-label {
  font-family: 'Inter', sans-serif;
  font-size: 14px;
  font-weight: 500;
  color: #e0e0e0;
}

.form-input {
  padding: 16px;
  font-family: 'Inter', sans-serif;
  font-size: 15px;
  color: #ffffff;
  background: rgba(0, 0, 0, 0.3);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 8px;
  transition: all 0.3s ease;
}

.form-input:focus {
  outline: none;
  border-color: #00d4ff;
  background: rgba(0, 0, 0, 0.4);
  box-shadow: 0 0 0 3px rgba(0, 212, 255, 0.1);
}

.form-input::placeholder {
  color: #606060;
}

.form-input:disabled {
  opacity: 0.6;
  cursor: not-allowed;
}

/* Submit Button */
.submit-button {
  padding: 18px 32px;
  font-family: 'Poppins', sans-serif;
  font-size: 16px;
  font-weight: 600;
  color: #000000;
  background: linear-gradient(135deg, #00d4ff 0%, #0066ff 100%);
  border: none;
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 8px 24px rgba(0, 212, 255, 0.4);
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  margin-top: 8px;
}

.submit-button:hover:not(:disabled) {
  transform: translateY(-2px);
  box-shadow: 0 12px 32px rgba(0, 212, 255, 0.6);
}

.submit-button:active:not(:disabled) {
  transform: translateY(0);
}

.submit-button:disabled {
  opacity: 0.7;
  cursor: not-allowed;
}

.button-icon {
  width: 20px;
  height: 20px;
}

.loading-spinner {
  animation: pulse 1.5s ease-in-out infinite;
}

@keyframes pulse {
  0%, 100% { opacity: 1; }
  50% { opacity: 0.5; }
}

/* Messages */
.error-message,
.success-message {
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 12px 16px;
  border-radius: 8px;
  font-family: 'Inter', sans-serif;
  font-size: 14px;
  font-weight: 500;
  animation: slideInDown 0.3s ease-out;
}

.error-message {
  background: rgba(255, 68, 68, 0.1);
  border: 1px solid rgba(255, 68, 68, 0.3);
  color: #ff6666;
}

.success-message {
  background: rgba(0, 212, 255, 0.1);
  border: 1px solid rgba(0, 212, 255, 0.3);
  color: #00d4ff;
}

.error-message svg,
.success-message svg {
  width: 18px;
  height: 18px;
  flex-shrink: 0;
}

@keyframes slideInDown {
  from {
    opacity: 0;
    transform: translateY(-16px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

/* Animations */
[data-animate="fade-in-up"] {
  animation: fadeInUp 0.8s ease-out forwards;
  opacity: 0;
}

@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(32px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

/* Responsive */
@media (max-width: 968px) {
  .content-wrapper {
    grid-template-columns: 1fr;
    gap: 48px;
  }

  .offer-details {
    text-align: center;
  }

  .offer-badge {
    margin: 0 auto;
  }

  .benefits-list {
    align-items: flex-start;
  }
}

@media (max-width: 768px) {
  .lead-magnet-section {
    padding: 80px 16px;
  }

  .form-card {
    padding: 24px;
  }

  .form-title {
    font-size: 20px;
    margin-bottom: 24px;
  }

  .submit-button {
    padding: 16px 24px;
  }
}
</style>
