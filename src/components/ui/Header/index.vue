<script setup>
import Container from "../../Container/index.vue";
import Menu from "./Menu/index.vue";

import { ref, onMounted, onUnmounted } from "vue";

const menuFixed = ref(false);

const handleScroll = () => {
  if (window.scrollY > 200) {
    menuFixed.value = true;
  } else {
    menuFixed.value = false;
  }
};

onMounted(() => {
  window.addEventListener("scroll", handleScroll);
});

onUnmounted(() => {
  window.removeEventListener("scroll", handleScroll);
});
</script>

<template>
  <header
    class="mt-10 text-[#c5c3c6] z-20"
    :class="`${menuFixed ? 'fixed top-0 left-0 right-0' : 'relative '}`"
  >
    <Container>
      <div class="flex justify-between items-center">
        <h1>Logo</h1>
        <Menu />
      </div>
    </Container>
  </header>

  <div v-if="menuFixed" class="h-28 w-full"></div>
</template>
