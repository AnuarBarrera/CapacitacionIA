<script setup lang="ts">
import { computed } from 'vue'

export interface IconProps {
  name: 'rocket' | 'star' | 'check' | 'arrow-right' | 'sparkles' | 'code' | 'lightning' | 'heart' | 'shield' | 'users'
  size?: 'sm' | 'md' | 'lg' | 'xl'
  color?: string
}

const props = withDefaults(defineProps<IconProps>(), {
  name: 'star',
  size: 'md',
  color: 'currentColor'
})

const sizeMap = {
  sm: 16,
  md: 24,
  lg: 32,
  xl: 48
}

const iconSize = computed(() => sizeMap[props.size])
</script>

<template>
  <svg
    :width="iconSize"
    :height="iconSize"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    :style="{ color }"
    class="icon"
  >
    <!-- Rocket -->
    <g v-if="name === 'rocket'">
      <path
        d="M12 2L15 8L22 9L17 14L18 21L12 18L6 21L7 14L2 9L9 8L12 2Z"
        :stroke="color"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M12 12L8 16M16 8L12 12M12 12V18"
        :stroke="color"
        stroke-width="2"
        stroke-linecap="round"
      />
    </g>

    <!-- Star -->
    <g v-else-if="name === 'star'">
      <path
        d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z"
        :stroke="color"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
        :fill="color"
        fill-opacity="0.2"
      />
    </g>

    <!-- Check -->
    <g v-else-if="name === 'check'">
      <path
        d="M20 6L9 17L4 12"
        :stroke="color"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </g>

    <!-- Arrow Right -->
    <g v-else-if="name === 'arrow-right'">
      <path
        d="M5 12H19M19 12L12 5M19 12L12 19"
        :stroke="color"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </g>

    <!-- Sparkles -->
    <g v-else-if="name === 'sparkles'">
      <path
        d="M5 3L7 8L12 10L7 12L5 17L3 12L-2 10L3 8L5 3Z"
        :stroke="color"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
        :fill="color"
        fill-opacity="0.2"
      />
      <path
        d="M15 3L16.5 6.5L20 8L16.5 9.5L15 13L13.5 9.5L10 8L13.5 6.5L15 3Z"
        :stroke="color"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
        :fill="color"
        fill-opacity="0.2"
      />
    </g>

    <!-- Code -->
    <g v-else-if="name === 'code'">
      <path
        d="M16 18L22 12L16 6M8 6L2 12L8 18"
        :stroke="color"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </g>

    <!-- Lightning -->
    <g v-else-if="name === 'lightning'">
      <path
        d="M13 2L3 14H12L11 22L21 10H12L13 2Z"
        :stroke="color"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
        :fill="color"
        fill-opacity="0.2"
      />
    </g>

    <!-- Heart -->
    <g v-else-if="name === 'heart'">
      <path
        d="M20.84 4.61C20.3292 4.099 19.7228 3.69364 19.0554 3.41708C18.3879 3.14052 17.6725 2.99817 16.95 2.99817C16.2275 2.99817 15.5121 3.14052 14.8446 3.41708C14.1772 3.69364 13.5708 4.099 13.06 4.61L12 5.67L10.94 4.61C9.9083 3.57831 8.50903 2.99871 7.05 2.99871C5.59096 2.99871 4.19169 3.57831 3.16 4.61C2.1283 5.64169 1.54871 7.04097 1.54871 8.5C1.54871 9.95903 2.1283 11.3583 3.16 12.39L4.22 13.45L12 21.23L19.78 13.45L20.84 12.39C21.351 11.8792 21.7564 11.2728 22.0329 10.6054C22.3095 9.93789 22.4518 9.2225 22.4518 8.5C22.4518 7.7775 22.3095 7.06211 22.0329 6.39464C21.7564 5.72718 21.351 5.12084 20.84 4.61V4.61Z"
        :stroke="color"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
        :fill="color"
        fill-opacity="0.2"
      />
    </g>

    <!-- Shield -->
    <g v-else-if="name === 'shield'">
      <path
        d="M12 22C12 22 20 18 20 12V5L12 2L4 5V12C4 18 12 22 12 22Z"
        :stroke="color"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
        :fill="color"
        fill-opacity="0.2"
      />
    </g>

    <!-- Users -->
    <g v-else-if="name === 'users'">
      <path
        d="M17 21V19C17 17.9391 16.5786 16.9217 15.8284 16.1716C15.0783 15.4214 14.0609 15 13 15H5C3.93913 15 2.92172 15.4214 2.17157 16.1716C1.42143 16.9217 1 17.9391 1 19V21"
        :stroke="color"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M9 11C11.2091 11 13 9.20914 13 7C13 4.79086 11.2091 3 9 3C6.79086 3 5 4.79086 5 7C5 9.20914 6.79086 11 9 11Z"
        :stroke="color"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M23 21V19C22.9993 18.1137 22.7044 17.2528 22.1614 16.5523C21.6184 15.8519 20.8581 15.3516 20 15.13"
        :stroke="color"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M16 3.13C16.8604 3.35031 17.623 3.85071 18.1676 4.55232C18.7122 5.25392 19.0078 6.11683 19.0078 7.005C19.0078 7.89318 18.7122 8.75608 18.1676 9.45769C17.623 10.1593 16.8604 10.6597 16 10.88"
        :stroke="color"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </g>
  </svg>
</template>

<style scoped>
.icon {
  display: inline-block;
  vertical-align: middle;
  flex-shrink: 0;
  transition: all var(--transition-fast);
}

.icon:hover {
  transform: scale(1.05);
}
</style>
