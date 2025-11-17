<script setup lang="ts">
const props = defineProps<{
  name?: string
  email?: string
  phone?: string
  whatsapp?: string
  location?: string
  social?: {
    linkedin?: string
    github?: string
    twitter?: string
    instagram?: string
  }
}>()

const defaultName = 'Tu Nombre'
const defaultEmail = 'contacto@tudominio.com'
const defaultPhone = '+52 1 123 456 7890'
const defaultWhatsapp = 'https://wa.me/5211234567890'
const defaultLocation = 'México, CDMX'

const currentYear = new Date().getFullYear()

const handleContact = (type: string, value?: string) => {
  if (type === 'email') {
    window.location.href = `mailto:${value || defaultEmail}`
  } else if (type === 'phone') {
    window.location.href = `tel:${value || defaultPhone}`
  } else if (type === 'whatsapp') {
    window.open(value || defaultWhatsapp, '_blank', 'noopener,noreferrer')
  }
}

const handleSocial = (platform: string, url?: string) => {
  if (url) {
    window.open(url, '_blank', 'noopener,noreferrer')
  }
}
</script>

<template>
  <footer class="footer-section">
    <div class="footer-container">
      <!-- Main Footer Content -->
      <div class="footer-content">
        <!-- Brand -->
        <div class="footer-brand">
          <h3 class="brand-name">{{ name || defaultName }}</h3>
          <p class="brand-tagline">
            Transformando ideas en negocios digitales exitosos
          </p>

          <!-- Social Links -->
          <div class="social-links">
            <a
              v-if="social?.linkedin"
              @click="handleSocial('linkedin', social.linkedin)"
              class="social-link"
              aria-label="LinkedIn"
            >
              <svg viewBox="0 0 24 24" fill="currentColor">
                <path d="M20.5 2h-17A1.5 1.5 0 002 3.5v17A1.5 1.5 0 003.5 22h17a1.5 1.5 0 001.5-1.5v-17A1.5 1.5 0 0020.5 2zM8 19H5v-9h3zM6.5 8.25A1.75 1.75 0 118.3 6.5a1.78 1.78 0 01-1.8 1.75zM19 19h-3v-4.74c0-1.42-.6-1.93-1.38-1.93A1.74 1.74 0 0013 14.19a.66.66 0 000 .14V19h-3v-9h2.9v1.3a3.11 3.11 0 012.7-1.4c1.55 0 3.36.86 3.36 3.66z"/>
              </svg>
            </a>

            <a
              v-if="social?.github"
              @click="handleSocial('github', social.github)"
              class="social-link"
              aria-label="GitHub"
            >
              <svg viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2A10 10 0 002 12c0 4.42 2.87 8.17 6.84 9.5.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34-.46-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.87 1.52 2.34 1.07 2.91.83.09-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.92 0-1.11.38-2 1.03-2.71-.1-.25-.45-1.29.1-2.64 0 0 .84-.27 2.75 1.02.79-.22 1.65-.33 2.5-.33.85 0 1.71.11 2.5.33 1.91-1.29 2.75-1.02 2.75-1.02.55 1.35.2 2.39.1 2.64.65.71 1.03 1.6 1.03 2.71 0 3.82-2.34 4.66-4.57 4.91.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0012 2z"/>
              </svg>
            </a>

            <a
              v-if="social?.twitter"
              @click="handleSocial('twitter', social.twitter)"
              class="social-link"
              aria-label="Twitter/X"
            >
              <svg viewBox="0 0 24 24" fill="currentColor">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
              </svg>
            </a>

            <a
              v-if="social?.instagram"
              @click="handleSocial('instagram', social.instagram)"
              class="social-link"
              aria-label="Instagram"
            >
              <svg viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2c2.717 0 3.056.01 4.122.06 1.065.05 1.79.217 2.428.465.66.254 1.216.598 1.772 1.153a4.908 4.908 0 0 1 1.153 1.772c.247.637.415 1.363.465 2.428.047 1.066.06 1.405.06 4.122 0 2.717-.01 3.056-.06 4.122-.05 1.065-.218 1.79-.465 2.428a4.883 4.883 0 0 1-1.153 1.772 4.915 4.915 0 0 1-1.772 1.153c-.637.247-1.363.415-2.428.465-1.066.047-1.405.06-4.122.06-2.717 0-3.056-.01-4.122-.06-1.065-.05-1.79-.218-2.428-.465a4.89 4.89 0 0 1-1.772-1.153 4.904 4.904 0 0 1-1.153-1.772c-.248-.637-.415-1.363-.465-2.428C2.013 15.056 2 14.717 2 12c0-2.717.01-3.056.06-4.122.05-1.066.217-1.79.465-2.428a4.88 4.88 0 0 1 1.153-1.772A4.897 4.897 0 0 1 5.45 2.525c.638-.248 1.362-.415 2.428-.465C8.944 2.013 9.283 2 12 2zm0 5a5 5 0 1 0 0 10 5 5 0 0 0 0-10zm6.5-.25a1.25 1.25 0 0 0-2.5 0 1.25 1.25 0 0 0 2.5 0zM12 9a3 3 0 1 1 0 6 3 3 0 0 1 0-6z"/>
              </svg>
            </a>
          </div>
        </div>

        <!-- Contact Info -->
        <div class="footer-section">
          <h4 class="section-title">Contacto</h4>
          <ul class="contact-list">
            <li>
              <a @click="handleContact('email', email)" class="contact-link">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                  <polyline points="22,6 12,13 2,6"/>
                </svg>
                {{ email || defaultEmail }}
              </a>
            </li>

            <li>
              <a @click="handleContact('phone', phone)" class="contact-link">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
                </svg>
                {{ phone || defaultPhone }}
              </a>
            </li>

            <li>
              <span class="contact-link">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
                  <circle cx="12" cy="10" r="3"/>
                </svg>
                {{ location || defaultLocation }}
              </span>
            </li>
          </ul>
        </div>

        <!-- Quick Actions -->
        <div class="footer-section">
          <h4 class="section-title">Hablemos</h4>
          <p class="section-description">
            ¿Tienes un proyecto en mente? Contáctame directamente por WhatsApp.
          </p>
          <a @click="handleContact('whatsapp', whatsapp)" class="whatsapp-button">
            <svg viewBox="0 0 24 24" fill="currentColor">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
            </svg>
            Chatear en WhatsApp
          </a>
        </div>
      </div>

      <!-- Bottom Bar -->
      <div class="footer-bottom">
        <p class="copyright">
          © {{ currentYear }} {{ name || defaultName }}. Todos los derechos reservados.
        </p>
        <p class="made-with">
          Hecho con
          <svg class="heart-icon" viewBox="0 0 24 24" fill="currentColor">
            <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>
          </svg>
          y mucho café
        </p>
      </div>
    </div>
  </footer>
</template>

<style scoped>
/* Footer Section */
.footer-section {
  padding: 80px 24px 32px;
  background: linear-gradient(180deg, transparent 0%, rgba(0, 0, 0, 0.5) 100%);
  border-top: 1px solid rgba(0, 150, 255, 0.1);
}

.footer-container {
  max-width: 1200px;
  margin: 0 auto;
}

/* Footer Content */
.footer-content {
  display: grid;
  grid-template-columns: 2fr 1fr 1fr;
  gap: 64px;
  margin-bottom: 64px;
}

/* Brand */
.footer-brand {
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.brand-name {
  font-family: 'Poppins', sans-serif;
  font-size: 28px;
  font-weight: 700;
  background: linear-gradient(135deg, #00d4ff 0%, #0066ff 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  margin: 0;
}

.brand-tagline {
  font-family: 'Inter', sans-serif;
  font-size: 16px;
  font-weight: 400;
  color: #a0a0a0;
  line-height: 1.6;
  margin: 0;
  max-width: 400px;
}

/* Social Links */
.social-links {
  display: flex;
  gap: 12px;
  margin-top: 8px;
}

.social-link {
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(0, 150, 255, 0.1);
  border: 1px solid rgba(0, 150, 255, 0.2);
  border-radius: 8px;
  color: #00d4ff;
  transition: all 0.3s ease;
  cursor: pointer;
}

.social-link:hover {
  background: rgba(0, 212, 255, 0.2);
  border-color: #00d4ff;
  transform: translateY(-2px);
}

.social-link svg {
  width: 20px;
  height: 20px;
}

/* Footer Section */
.section-title {
  font-family: 'Poppins', sans-serif;
  font-size: 18px;
  font-weight: 600;
  color: #ffffff;
  margin: 0 0 16px 0;
}

.section-description {
  font-family: 'Inter', sans-serif;
  font-size: 14px;
  font-weight: 400;
  color: #a0a0a0;
  line-height: 1.6;
  margin: 0 0 16px 0;
}

/* Contact List */
.contact-list {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.contact-link {
  display: flex;
  align-items: center;
  gap: 8px;
  font-family: 'Inter', sans-serif;
  font-size: 14px;
  font-weight: 400;
  color: #b0b0b0;
  text-decoration: none;
  transition: color 0.3s ease;
  cursor: pointer;
}

.contact-link:hover {
  color: #00d4ff;
}

.contact-link svg {
  width: 16px;
  height: 16px;
  flex-shrink: 0;
}

/* WhatsApp Button */
.whatsapp-button {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 12px 20px;
  font-family: 'Poppins', sans-serif;
  font-size: 14px;
  font-weight: 600;
  color: #ffffff;
  background: linear-gradient(135deg, #25D366 0%, #128C7E 100%);
  border: none;
  border-radius: 8px;
  text-decoration: none;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 4px 12px rgba(37, 211, 102, 0.3);
}

.whatsapp-button:hover {
  transform: translateY(-2px);
  box-shadow: 0 6px 16px rgba(37, 211, 102, 0.5);
}

.whatsapp-button svg {
  width: 20px;
  height: 20px;
}

/* Footer Bottom */
.footer-bottom {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: 32px;
  border-top: 1px solid rgba(255, 255, 255, 0.05);
}

.copyright,
.made-with {
  font-family: 'Inter', sans-serif;
  font-size: 14px;
  font-weight: 400;
  color: #606060;
  margin: 0;
}

.made-with {
  display: flex;
  align-items: center;
  gap: 6px;
}

.heart-icon {
  width: 16px;
  height: 16px;
  color: #ff6b6b;
  animation: heartbeat 1.5s ease-in-out infinite;
}

@keyframes heartbeat {
  0%, 100% { transform: scale(1); }
  25% { transform: scale(1.1); }
  50% { transform: scale(1); }
}

/* Responsive */
@media (max-width: 968px) {
  .footer-content {
    grid-template-columns: 1fr 1fr;
    gap: 48px;
  }

  .footer-brand {
    grid-column: 1 / -1;
  }
}

@media (max-width: 768px) {
  .footer-section {
    padding: 64px 16px 24px;
  }

  .footer-content {
    grid-template-columns: 1fr;
    gap: 40px;
    margin-bottom: 48px;
  }

  .footer-bottom {
    flex-direction: column;
    gap: 16px;
    text-align: center;
  }

  .social-links {
    flex-wrap: wrap;
  }
}
</style>
