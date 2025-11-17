<script setup lang="ts">
import { ref } from 'vue'
import Navbar from '@/components/ui/Navbar.vue'
import HeroSection from '@/components/ui/HeroSection.vue'
import Button from '@/components/ui/Button.vue'
import Card from '@/components/ui/Card.vue'
import LayoutGrid from '@/components/ui/LayoutGrid.vue'
import Icon from '@/components/ui/Icon.vue'
import HeroIllustration from '@/components/ui/HeroIllustration.vue'

const navItems = [
  { label: 'Inicio', onClick: () => console.log('Inicio') },
  { label: 'Características', onClick: () => console.log('Características') },
  { label: 'Precios', onClick: () => console.log('Precios') },
  { label: 'Contacto', onClick: () => console.log('Contacto') }
]

const features = [
  {
    icon: 'rocket' as const,
    title: 'Rápido y Eficiente',
    description: 'Optimizado para máximo rendimiento y velocidad en cada interacción.'
  },
  {
    icon: 'shield' as const,
    title: 'Seguro por Diseño',
    description: 'Arquitectura robusta con las mejores prácticas de seguridad implementadas.'
  },
  {
    icon: 'code' as const,
    title: 'Clean Code',
    description: 'Código limpio, mantenible y bien documentado para facilitar el desarrollo.'
  },
  {
    icon: 'users' as const,
    title: 'Colaborativo',
    description: 'Diseñado para equipos que trabajan juntos en proyectos complejos.'
  },
  {
    icon: 'lightning' as const,
    title: 'Alto Rendimiento',
    description: 'Optimizado para cargar rápido y ejecutarse suavemente en cualquier dispositivo.'
  },
  {
    icon: 'heart' as const,
    title: 'Fácil de Usar',
    description: 'Interfaz intuitiva que prioriza la experiencia del usuario en cada detalle.'
  }
]

const testimonials = [
  {
    name: 'María García',
    role: 'CEO, TechStart',
    text: 'Esta plataforma ha transformado completamente nuestra forma de trabajar. Increíble.',
    rating: 5
  },
  {
    name: 'Carlos Rodríguez',
    role: 'Developer, CodeLab',
    text: 'El mejor sistema de diseño que he usado. Clean, moderno y súper fácil de implementar.',
    rating: 5
  },
  {
    name: 'Ana Martínez',
    role: 'Designer, CreativeHub',
    text: 'Diseño impecable y consistencia visual perfecta. Exactamente lo que necesitábamos.',
    rating: 5
  }
]

const buttonLoading = ref(false)

const handleButtonClick = () => {
  buttonLoading.value = true
  setTimeout(() => {
    buttonLoading.value = false
  }, 2000)
}
</script>

<template>
  <div class="design-system-view">
    <!-- Navbar -->
    <Navbar brand-text="DesignSystem" :items="navItems">
      <template #actions>
        <Button variant="ghost" size="sm">Iniciar Sesión</Button>
        <Button variant="primary" size="sm">Comenzar Gratis</Button>
      </template>
    </Navbar>

    <!-- Hero Section -->
    <HeroSection
      subtitle="✨ Sistema de Diseño Moderno"
      title="Construye interfaces increíbles con Vue + TypeScript"
      description="Un sistema de diseño profesional, minimalista y altamente personalizable. Espaciado basado en 8px, tipografías cuidadosamente seleccionadas y componentes reutilizables."
    >
      <template #actions>
        <Button variant="primary" size="lg">
          <Icon name="rocket" size="sm" />
          Comenzar Ahora
        </Button>
        <Button variant="outline" size="lg">
          Ver Documentación
        </Button>
      </template>

      <template #image>
        <HeroIllustration />
      </template>

      <template #stats>
        <div class="stat-item">
          <div class="stat-value">2</div>
          <div class="stat-label">Tipografías</div>
        </div>
        <div class="stat-item">
          <div class="stat-value">8px</div>
          <div class="stat-label">Sistema Spacing</div>
        </div>
        <div class="stat-item">
          <div class="stat-value">6+</div>
          <div class="stat-label">Componentes</div>
        </div>
      </template>
    </HeroSection>

    <!-- Features Section -->
    <section class="section section--light">
      <div class="container">
        <div class="section-header">
          <span class="section-subtitle">Características</span>
          <h2 class="section-title">Todo lo que necesitas para crear interfaces modernas</h2>
          <p class="section-description">
            Un conjunto completo de componentes diseñados con atención al detalle y consistencia visual.
          </p>
        </div>

        <LayoutGrid :cols="3" :gap="4">
          <Card
            v-for="(feature, index) in features"
            :key="index"
            variant="elevated"
            hoverable
            class="feature-card animate-fade-in-up"
            :style="{ animationDelay: `${index * 100}ms` }"
          >
            <div class="feature-icon">
              <Icon :name="feature.icon" size="lg" color="var(--color-primary-600)" />
            </div>
            <h3 class="feature-title">{{ feature.title }}</h3>
            <p class="feature-description">{{ feature.description }}</p>
          </Card>
        </LayoutGrid>
      </div>
    </section>

    <!-- Components Showcase -->
    <section class="section">
      <div class="container">
        <div class="section-header">
          <span class="section-subtitle">Componentes</span>
          <h2 class="section-title">Componentes listos para usar</h2>
          <p class="section-description">
            Todos los componentes están construidos con TypeScript y siguen las mejores prácticas de Vue 3.
          </p>
        </div>

        <Card variant="outlined" padding="lg" class="showcase-card">
          <h3 class="showcase-title">Buttons</h3>
          <div class="showcase-content">
            <div class="button-group">
              <Button variant="primary" size="sm">Primary Small</Button>
              <Button variant="primary" size="md">Primary Medium</Button>
              <Button variant="primary" size="lg">Primary Large</Button>
            </div>

            <div class="button-group">
              <Button variant="secondary" size="md">Secondary</Button>
              <Button variant="outline" size="md">Outline</Button>
              <Button variant="ghost" size="md">Ghost</Button>
            </div>

            <div class="button-group">
              <Button variant="primary" size="md" :loading="buttonLoading" @click="handleButtonClick">
                {{ buttonLoading ? 'Loading...' : 'Click Me' }}
              </Button>
              <Button variant="primary" size="md" disabled>Disabled</Button>
            </div>
          </div>
        </Card>

        <Card variant="outlined" padding="lg" class="showcase-card">
          <h3 class="showcase-title">Cards</h3>
          <LayoutGrid :cols="3" :gap="3">
            <Card variant="elevated" hoverable>
              <template #header>Elevated Card</template>
              <p>Card con sombra elevada y efecto hover.</p>
            </Card>

            <Card variant="outlined" hoverable>
              <template #header>Outlined Card</template>
              <p>Card con borde y sin sombra.</p>
            </Card>

            <Card variant="flat" hoverable>
              <template #header>Flat Card</template>
              <p>Card con fondo plano y sin bordes.</p>
            </Card>
          </LayoutGrid>
        </Card>

        <Card variant="outlined" padding="lg" class="showcase-card">
          <h3 class="showcase-title">Icons</h3>
          <div class="icon-grid">
            <div class="icon-item">
              <Icon name="rocket" size="lg" color="var(--color-primary-600)" />
              <span>Rocket</span>
            </div>
            <div class="icon-item">
              <Icon name="star" size="lg" color="var(--color-secondary-500)" />
              <span>Star</span>
            </div>
            <div class="icon-item">
              <Icon name="lightning" size="lg" color="var(--color-primary-600)" />
              <span>Lightning</span>
            </div>
            <div class="icon-item">
              <Icon name="code" size="lg" color="var(--color-primary-600)" />
              <span>Code</span>
            </div>
            <div class="icon-item">
              <Icon name="heart" size="lg" color="var(--color-secondary-500)" />
              <span>Heart</span>
            </div>
            <div class="icon-item">
              <Icon name="shield" size="lg" color="var(--color-primary-600)" />
              <span>Shield</span>
            </div>
          </div>
        </Card>
      </div>
    </section>

    <!-- Testimonials -->
    <section class="section section--light">
      <div class="container">
        <div class="section-header">
          <span class="section-subtitle">Testimonios</span>
          <h2 class="section-title">Lo que dicen nuestros usuarios</h2>
        </div>

        <LayoutGrid :cols="3" :gap="4">
          <Card
            v-for="(testimonial, index) in testimonials"
            :key="index"
            variant="elevated"
            class="testimonial-card animate-fade-in-up"
            :style="{ animationDelay: `${index * 150}ms` }"
          >
            <div class="testimonial-stars">
              <Icon
                v-for="star in testimonial.rating"
                :key="star"
                name="star"
                size="sm"
                color="var(--color-secondary-500)"
              />
            </div>
            <p class="testimonial-text">"{{ testimonial.text }}"</p>
            <div class="testimonial-author">
              <strong>{{ testimonial.name }}</strong>
              <span>{{ testimonial.role }}</span>
            </div>
          </Card>
        </LayoutGrid>
      </div>
    </section>

    <!-- CTA Section -->
    <section class="section section--cta">
      <div class="container">
        <div class="cta-content">
          <h2 class="cta-title">¿Listo para comenzar?</h2>
          <p class="cta-description">
            Únete a miles de desarrolladores que ya están creando interfaces increíbles.
          </p>
          <div class="cta-actions">
            <Button variant="secondary" size="lg">
              Comenzar Gratis
              <Icon name="arrow-right" size="sm" />
            </Button>
          </div>
        </div>
      </div>
    </section>

    <!-- Footer -->
    <footer class="footer">
      <div class="container">
        <div class="footer-content">
          <div class="footer-brand">
            <h3>DesignSystem</h3>
            <p>Sistema de diseño moderno para Vue + TypeScript</p>
          </div>
          <div class="footer-links">
            <div class="footer-column">
              <h4>Producto</h4>
              <a href="#">Características</a>
              <a href="#">Precios</a>
              <a href="#">Documentación</a>
            </div>
            <div class="footer-column">
              <h4>Empresa</h4>
              <a href="#">Nosotros</a>
              <a href="#">Blog</a>
              <a href="#">Contacto</a>
            </div>
            <div class="footer-column">
              <h4>Legal</h4>
              <a href="#">Privacidad</a>
              <a href="#">Términos</a>
              <a href="#">Cookies</a>
            </div>
          </div>
        </div>
        <div class="footer-bottom">
          <p>&copy; 2025 DesignSystem. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  </div>
</template>

<style scoped>
.design-system-view {
  min-height: 100vh;
}

/* ============================================
   SECTIONS
   ============================================ */

.section {
  padding: var(--spacing-16) 0;
}

.section--light {
  background: var(--color-neutral-50);
}

.section--cta {
  background: linear-gradient(135deg, var(--color-primary-700) 0%, var(--color-primary-900) 100%);
  color: var(--color-text-inverse);
}

.section-header {
  text-align: center;
  max-width: 800px;
  margin: 0 auto var(--spacing-12);
}

.section-subtitle {
  display: inline-block;
  font-family: var(--font-primary);
  font-size: var(--text-sm);
  font-weight: var(--font-semibold);
  text-transform: uppercase;
  letter-spacing: 0.1em;
  color: var(--color-primary-600);
  margin-bottom: var(--spacing-2);
}

.section-title {
  font-family: var(--font-display);
  font-size: var(--text-5xl);
  font-weight: var(--font-bold);
  margin: var(--spacing-2) 0;
}

.section-description {
  font-size: var(--text-lg);
  color: var(--color-text-secondary);
  line-height: 1.7;
}

/* ============================================
   STATS
   ============================================ */

.stat-item {
  text-align: center;
}

.stat-value {
  font-family: var(--font-display);
  font-size: var(--text-3xl);
  font-weight: var(--font-bold);
  color: var(--color-text-inverse);
}

.stat-label {
  font-size: var(--text-sm);
  color: var(--color-neutral-300);
  text-transform: uppercase;
  letter-spacing: 0.05em;
}

/* ============================================
   FEATURES
   ============================================ */

.feature-card {
  text-align: center;
  padding: var(--spacing-6) var(--spacing-4);
}

.feature-icon {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 4rem;
  height: 4rem;
  margin: 0 auto var(--spacing-3);
  background: var(--color-primary-50);
  border-radius: var(--radius-lg);
}

.feature-title {
  font-family: var(--font-display);
  font-size: var(--text-xl);
  font-weight: var(--font-bold);
  margin: var(--spacing-2) 0;
  color: var(--color-text-primary);
}

.feature-description {
  font-size: var(--text-base);
  color: var(--color-text-secondary);
  line-height: 1.6;
}

/* ============================================
   SHOWCASE
   ============================================ */

.showcase-card {
  margin-bottom: var(--spacing-4);
}

.showcase-title {
  font-family: var(--font-display);
  font-size: var(--text-2xl);
  font-weight: var(--font-bold);
  margin-bottom: var(--spacing-4);
  padding-bottom: var(--spacing-3);
  border-bottom: var(--border-width-md) solid var(--color-neutral-200);
}

.showcase-content {
  display: flex;
  flex-direction: column;
  gap: var(--spacing-4);
}

.button-group {
  display: flex;
  flex-wrap: wrap;
  gap: var(--spacing-2);
}

.icon-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));
  gap: var(--spacing-4);
}

.icon-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: var(--spacing-2);
  padding: var(--spacing-3);
  border-radius: var(--radius-md);
  transition: background var(--transition-fast);
}

.icon-item:hover {
  background: var(--color-neutral-100);
}

.icon-item span {
  font-size: var(--text-sm);
  color: var(--color-text-secondary);
}

/* ============================================
   TESTIMONIALS
   ============================================ */

.testimonial-card {
  display: flex;
  flex-direction: column;
  gap: var(--spacing-3);
  padding: var(--spacing-6) var(--spacing-4);
}

.testimonial-stars {
  display: flex;
  gap: var(--spacing-1);
}

.testimonial-text {
  font-size: var(--text-base);
  font-style: italic;
  color: var(--color-text-secondary);
  line-height: 1.7;
  flex: 1;
}

.testimonial-author {
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
  padding-top: var(--spacing-3);
  border-top: var(--border-width) solid var(--color-neutral-200);
}

.testimonial-author strong {
  font-weight: var(--font-semibold);
  color: var(--color-text-primary);
}

.testimonial-author span {
  font-size: var(--text-sm);
  color: var(--color-text-tertiary);
}

/* ============================================
   CTA
   ============================================ */

.cta-content {
  text-align: center;
  max-width: 700px;
  margin: 0 auto;
}

.cta-title {
  font-family: var(--font-display);
  font-size: var(--text-5xl);
  font-weight: var(--font-bold);
  margin-bottom: var(--spacing-3);
}

.cta-description {
  font-size: var(--text-xl);
  color: var(--color-neutral-200);
  margin-bottom: var(--spacing-6);
  line-height: 1.7;
}

.cta-actions {
  display: flex;
  justify-content: center;
  gap: var(--spacing-3);
}

/* ============================================
   FOOTER
   ============================================ */

.footer {
  background: var(--color-neutral-900);
  color: var(--color-text-inverse);
  padding: var(--spacing-12) 0 var(--spacing-6);
}

.footer-content {
  display: grid;
  grid-template-columns: 1.5fr 1fr;
  gap: var(--spacing-8);
  margin-bottom: var(--spacing-8);
}

@media (max-width: 768px) {
  .footer-content {
    grid-template-columns: 1fr;
  }
}

.footer-brand h3 {
  font-family: var(--font-display);
  font-size: var(--text-2xl);
  margin-bottom: var(--spacing-2);
}

.footer-brand p {
  color: var(--color-neutral-400);
}

.footer-links {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: var(--spacing-4);
}

@media (max-width: 640px) {
  .footer-links {
    grid-template-columns: 1fr;
  }
}

.footer-column h4 {
  font-family: var(--font-primary);
  font-size: var(--text-base);
  font-weight: var(--font-semibold);
  margin-bottom: var(--spacing-3);
}

.footer-column a {
  display: block;
  color: var(--color-neutral-400);
  font-size: var(--text-sm);
  margin-bottom: var(--spacing-2);
  transition: color var(--transition-fast);
}

.footer-column a:hover {
  color: var(--color-text-inverse);
}

.footer-bottom {
  text-align: center;
  padding-top: var(--spacing-6);
  border-top: var(--border-width) solid var(--color-neutral-700);
}

.footer-bottom p {
  color: var(--color-neutral-500);
  font-size: var(--text-sm);
}

/* ============================================
   RESPONSIVE
   ============================================ */

@media (max-width: 768px) {
  .section {
    padding: var(--spacing-10) 0;
  }

  .section-title {
    font-size: var(--text-3xl);
  }

  .cta-title {
    font-size: var(--text-3xl);
  }

  .cta-actions {
    flex-direction: column;
  }

  .button-group {
    flex-direction: column;
  }
}
</style>
