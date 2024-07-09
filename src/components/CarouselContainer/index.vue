<script setup>
import "vue3-carousel/dist/carousel.css";
import { Carousel, Pagination, Navigation } from "vue3-carousel";
</script>

<template>
  <Carousel :transition="1500" :itemsToShow="1" :navigationEnabled="true">
    <slot />

    <template #addons>
      <Pagination />
      <Navigation />
    </template>
  </Carousel>
</template>
