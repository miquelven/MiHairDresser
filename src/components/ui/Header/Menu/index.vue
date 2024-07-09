<script setup>
import linksData from "../../../../data/linksData";
import { ref } from "vue";

const menuOpen = ref(false);
</script>

<template>
  <nav
    v-motion-slide-visible-right
    :duration="300"
    class="transition-all duration-300"
    :class="`${
      menuOpen
        ? '  bg-[#0a131a] shadow-[-2px_0px_4px_#111] fixed right-0 top-0 h-screen w-5/12 flex items-center max-sm:w-2/3'
        : 'max-md:hidden'
    } `"
  >
    <ul
      :class="`${
        menuOpen
          ? 'flex flex-col mx-auto text-4xl text-center gap-20 max-sm:text-2xl max-sm:gap-14'
          : 'flex gap-10'
      } `"
    >
      <li
        @click="() => (menuOpen = false)"
        v-for="link in linksData"
        :key="link.id"
        class="relative font-medium after:transition-all after:duration-300 after:content-[''] after:w-0 after:h-[3px] after:rounded-md after:absolute after:bottom-0 after:left-0 after:bg-white hover:after:w-full hover:cursor-pointer hover:text-white"
      >
        <a :href="link.href">
          <span>
            {{ link.text }}
          </span>
        </a>
      </li>
    </ul>
  </nav>
  <button
    :onclick="() => (menuOpen = !menuOpen)"
    class="hidden transition-all duration-300 px-2 hover:scale-105 hover:bg-white/10 hover:text-white hover:cursor-pointer max-md:block max-sm:px-1"
  >
    <template v-if="!menuOpen">
      <v-icon name="px-menu" class="w-11 h-11 max-sm:w-9 max-sm:h-9" />
    </template>
    <template v-else>
      <v-icon
        name="bi-x"
        class="w-11 h-11 relative z-40 max-sm:w-9 max-sm:h-9"
      />
    </template>
  </button>
</template>
