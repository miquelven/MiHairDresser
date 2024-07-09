<script setup></script>

<template>
  <h3
    v-motion-fade-visible-once
    :delay="600"
    class="text-6xl font-bold w-3/4 max-2xl:w-full max-md:text-5xl max-sm:text-4xl max-sm:leading-10"
  >
    <slot />
  </h3>
</template>
