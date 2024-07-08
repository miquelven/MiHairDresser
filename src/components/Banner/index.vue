<script setup>
import Container from "../Container/index.vue";
import imgBanner from "../../assets/imgs/banner.jpg";
</script>

<template>
  <div
    :class="`absolute top-0 left-0 bg-cover bg-center h-screen w-full after:content-[''] after:inset-0 after:bg-black/75 after:absolute `"
    :style="`background-image: url(${imgBanner})`"
  >
    <Container>
      <main class="h-screen relative z-10 flex flex-col justify-center">
        <div class="flex flex-col gap-14">
          <h1
            class="text-8xl font-bold w-2/3 leading-[108px] max-xl:text-7xl max-xl:leading-[88px] max-md:w-full max-sm:text-5xl max-sm:leading-[54px]"
          >
            Transforme Seu Visual.
          </h1>
          <h4
            class="text-2xl w-1/2 leading-10 font-light max-xl:text-xl max-xl:leading-8 max-md:w-full max-sm:text-lg"
          >
            Descubra a Beleza em Você com Nossos Serviços de Cabeleireiro de
            Primeira Classe
          </h4>
        </div>
      </main>
    </Container>
  </div>
  <div class="h-screen w-full"></div>
</template>
