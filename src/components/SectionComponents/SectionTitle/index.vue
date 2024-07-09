<template>
  <h2
    v-motion-fade-visible-once
    :delay="400"
    class="text-[#01baef] font-semibold text-xl max-sm:text-lg"
  >
    <slot />
  </h2>
</template>
