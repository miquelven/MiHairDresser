<script setup></script>

<template>
  <p
    v-motion-fade-visible-once
    :delay="800"
    class="mx-auto max-w-3xl text-lg font-light leading-9 max-md:text-base max-md:leading-7 max-sm:text-sm max-sm:leading-7"
  >
    <slot />
  </p>
</template>
