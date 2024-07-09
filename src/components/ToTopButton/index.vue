<script setup>
import { ref, onMounted, onUnmounted } from "vue";

const showButton = ref(false);

const handleScroll = () => {
  if (window.scrollY >= 200) {
    showButton.value = true;
  } else {
    showButton.value = false;
  }
};

const scrollTop = () => {
  window.scrollTo({
    behavior: "smooth",
    top: 0,
  });
};

onMounted(() => {
  window.addEventListener("scroll", handleScroll);
});

onUnmounted(() => {
  window.removeEventListener("scroll", handleScroll);
});
</script>

<template>
  <button
    @click="scrollTop"
    class="transition-all shadow-md shadow-black/50 bg-[#0a131a] p-2 duration-300 fixed bottom-16 right-10 cursor-pointer hover:scale-110 hover:bg-black/50 z-10 max-sm:right-4"
    :class="`${showButton ? 'opacity-100' : 'opacity-0'}`"
  >
    <v-icon name="bi-arrow-up" class="w-8 h-8 max-sm:w-7 max-sm:h-7" />
  </button>
</template>
