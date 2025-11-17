<script setup lang="ts">
export interface HeroIllustrationProps {
  width?: string | number
  height?: string | number
}

const props = withDefaults(defineProps<HeroIllustrationProps>(), {
  width: '100%',
  height: 'auto'
})
</script>

<template>
  <svg
    :width="width"
    :height="height"
    viewBox="0 0 600 500"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    class="hero-illustration"
  >
    <!-- Background decorative elements -->
    <circle cx="100" cy="100" r="60" fill="url(#gradient1)" opacity="0.3" class="animate-float" />
    <circle cx="500" cy="400" r="80" fill="url(#gradient2)" opacity="0.3" class="animate-float-delayed" />

    <!-- Main illustration - Abstract shapes representing technology/code -->
    <rect x="150" y="100" width="300" height="300" rx="20" fill="url(#gradient3)" class="animate-scale" />

    <!-- Code window effect -->
    <rect x="170" y="120" width="260" height="30" rx="10" fill="rgba(255, 255, 255, 0.9)" />
    <circle cx="185" cy="135" r="5" fill="#FF6B6B" />
    <circle cx="205" cy="135" r="5" fill="#FFD43B" />
    <circle cx="225" cy="135" r="5" fill="#51CF66" />

    <!-- Code lines -->
    <rect x="190" y="170" width="200" height="8" rx="4" fill="rgba(255, 255, 255, 0.7)" class="animate-pulse-1" />
    <rect x="190" y="190" width="150" height="8" rx="4" fill="rgba(255, 255, 255, 0.6)" class="animate-pulse-2" />
    <rect x="190" y="210" width="180" height="8" rx="4" fill="rgba(255, 255, 255, 0.7)" class="animate-pulse-3" />
    <rect x="190" y="230" width="120" height="8" rx="4" fill="rgba(255, 255, 255, 0.6)" class="animate-pulse-1" />

    <!-- Floating elements -->
    <g class="animate-float">
      <rect x="80" y="250" width="60" height="60" rx="10" fill="url(#gradient4)" />
      <path d="M110 270L120 285L100 285Z" fill="white" opacity="0.9" />
    </g>

    <g class="animate-float-delayed">
      <rect x="460" y="150" width="60" height="60" rx="10" fill="url(#gradient5)" />
      <circle cx="490" cy="180" r="15" stroke="white" stroke-width="3" opacity="0.9" />
    </g>

    <!-- Sparkles -->
    <g opacity="0.8">
      <path d="M250 50L255 60L265 65L255 70L250 80L245 70L235 65L245 60Z" fill="#FFD43B" class="animate-twinkle" />
      <path d="M400 350L403 356L409 359L403 362L400 368L397 362L391 359L397 356Z" fill="#FF6B6B" class="animate-twinkle-delayed" />
      <path d="M520 280L523 286L529 289L523 292L520 298L517 292L511 289L517 286Z" fill="#51CF66" class="animate-twinkle" />
    </g>

    <!-- Gradients -->
    <defs>
      <linearGradient id="gradient1" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" style="stop-color:#FF6B6B;stop-opacity:1" />
        <stop offset="100%" style="stop-color:#FA5252;stop-opacity:1" />
      </linearGradient>

      <linearGradient id="gradient2" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" style="stop-color:#339AF0;stop-opacity:1" />
        <stop offset="100%" style="stop-color:#1A1F36;stop-opacity:1" />
      </linearGradient>

      <linearGradient id="gradient3" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" style="stop-color:#4A5BA5;stop-opacity:0.9" />
        <stop offset="100%" style="stop-color:#2D3561;stop-opacity:0.9" />
      </linearGradient>

      <linearGradient id="gradient4" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" style="stop-color:#FF6B6B;stop-opacity:1" />
        <stop offset="100%" style="stop-color:#EE5A6F;stop-opacity:1" />
      </linearGradient>

      <linearGradient id="gradient5" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" style="stop-color:#51CF66;stop-opacity:1" />
        <stop offset="100%" style="stop-color:#37B24D;stop-opacity:1" />
      </linearGradient>
    </defs>
  </svg>
</template>

<style scoped>
.hero-illustration {
  max-width: 100%;
  height: auto;
}

@keyframes float {
  0%, 100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-20px);
  }
}

@keyframes float-delayed {
  0%, 100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(20px);
  }
}

@keyframes scale {
  0%, 100% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.02);
  }
}

@keyframes pulse {
  0%, 100% {
    opacity: 0.7;
  }
  50% {
    opacity: 1;
  }
}

@keyframes twinkle {
  0%, 100% {
    opacity: 0.3;
    transform: scale(1);
  }
  50% {
    opacity: 1;
    transform: scale(1.2);
  }
}

.animate-float {
  animation: float 6s ease-in-out infinite;
}

.animate-float-delayed {
  animation: float-delayed 8s ease-in-out infinite;
}

.animate-scale {
  animation: scale 10s ease-in-out infinite;
}

.animate-pulse-1 {
  animation: pulse 2s ease-in-out infinite;
}

.animate-pulse-2 {
  animation: pulse 2.5s ease-in-out infinite;
}

.animate-pulse-3 {
  animation: pulse 3s ease-in-out infinite;
}

.animate-twinkle {
  animation: twinkle 3s ease-in-out infinite;
}

.animate-twinkle-delayed {
  animation: twinkle 4s ease-in-out infinite 1s;
}
</style>
