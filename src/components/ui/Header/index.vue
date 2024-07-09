<script setup>
import Container from "../../Container/index.vue";
import Menu from "./Menu/index.vue";

import logoImg from "../../../assets/imgs/logo.png";

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
    class="text-[#c5c3c6] z-20"
    :class="`${
      menuFixed
        ? 'fixed top-0 left-0 right-0  bg-transparent backdrop-blur-lg  py-4'
        : 'relative mt-10 '
    }`"
  >
    <Container>
      <div class="flex justify-between items-center">
        <a
          href="#"
          class="transition-all duration-300 brightness-75 hover:brightness-100"
        >
          <img
            :src="logoImg"
            alt="Imagem da logo do site"
            class="w-20 h-20 object-cover invert max-sm:w-10 max-sm:h-10"
          />
        </a>
        <Menu />
      </div>
    </Container>
  </header>

  <div v-if="menuFixed" class="h-28 w-full"></div>
</template>
