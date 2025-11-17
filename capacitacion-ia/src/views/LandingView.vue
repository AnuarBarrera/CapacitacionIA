<script setup lang="ts">
import HeroIntro from '@/components/landing/HeroIntro.vue'
import ValueProps from '@/components/landing/ValueProps.vue'
import ProblemSolution from '@/components/landing/ProblemSolution.vue'
import MiniPortfolio from '@/components/landing/MiniPortfolio.vue'
import LeadMagnet from '@/components/landing/LeadMagnet.vue'
import FooterSection from '@/components/landing/FooterSection.vue'

// Personaliza estos valores con tu información real
const personalInfo = {
  name: 'Juan Pérez',
  title: 'Transformo Ideas en Negocios Digitales Exitosos',
  subtitle: 'Ayudo a emprendedores a validar, lanzar y escalar sus proyectos usando estrategias probadas de IA y automatización.',
  email: 'contacto@juanperez.com',
  phone: '+52 1 55 1234 5678',
  whatsapp: 'https://wa.me/5215512345678',
  location: 'Ciudad de México, México',
  social: {
    linkedin: 'https://linkedin.com/in/tuusuario',
    github: 'https://github.com/tuusuario',
    twitter: 'https://twitter.com/tuusuario',
    instagram: 'https://instagram.com/tuusuario'
  }
}
</script>

<template>
  <div class="landing-view">
    <!-- Hero Section -->
    <HeroIntro
      :name="personalInfo.name"
      :title="personalInfo.title"
      :subtitle="personalInfo.subtitle"
      ctaText="Agendar Llamada Estratégica"
      :ctaLink="personalInfo.whatsapp"
    />

    <!-- Value Propositions -->
    <ValueProps />

    <!-- Problem vs Solution -->
    <ProblemSolution />

    <!-- Mini Portfolio -->
    <MiniPortfolio />

    <!-- Lead Magnet / Contact Form -->
    <LeadMagnet />

    <!-- Footer -->
    <FooterSection
      :name="personalInfo.name"
      :email="personalInfo.email"
      :phone="personalInfo.phone"
      :whatsapp="personalInfo.whatsapp"
      :location="personalInfo.location"
      :social="personalInfo.social"
    />
  </div>
</template>

<style scoped>
.landing-view {
  width: 100%;
  min-height: 100vh;
}

/* Smooth scroll behavior */
:global(html) {
  scroll-behavior: smooth;
}

/* Add Google Fonts - Inter */
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap');
</style>
