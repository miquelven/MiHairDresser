<script setup>
import Container from "../Container/index.vue";
import SectionTitle from "../SectionTitle/index.vue";
import SectionSubTitle from "../SectionSubTitle/index.vue";
import SectionContentText from "../SectionContentText/index.vue";

import advantageData from "../../data/advantageData";
</script>

<template>
  <Container>
    <section
      id="beneficios"
      class="scroll-mt-10 flex flex-col text-center gap-9 mt-32 max-sm:mt-80 max-sm:-scroll-mt-20"
    >
      <SectionTitleContainer>
        <SectionTitle> Benefícios </SectionTitle>
        <SectionSubTitle class="mx-auto">Por que nos escolher?</SectionSubTitle>
      </SectionTitleContainer>
      <SectionContentText>
        Acreditamos que cada cliente merece um tratamento excepcional e
        personalizado. Aqui estão algumas razões pelas quais somos a escolha
        perfeita para cuidar da sua beleza:
      </SectionContentText>

      <ul
        class="grid grid-cols-3 gap-x-20 gap-y-32 mt-20 max-2xl:gap-x-14 max-lg:grid-cols-2 max-lg:gap-y-20 max-lg:gap-x-10 max-md:grid-cols-1 max-md:gap-y-24"
      >
        <li
          v-motion-fade-visible-once
          :delay="400"
          v-for="data in advantageData"
          :key="data.id"
          class="transition-all duration-300 flex gap-2 min-h-32 p-2 even:bg-black/20 even:shadow-md even:shadow-black/30 hover:bg-black/20 hover:rounded-xl max-lg:gap-7 max-md:flex-col max-md:items-center"
        >
          <v-icon :name="data.icon" class="w-10 h-10 text-[#01baef]" />

          <div class="flex-1 flex flex-col justify-between gap-5 pt-2">
            <h3
              v-motion-slide-visible-top
              :delay="400"
              class="text-2xl font-bold max-sm:text-xl"
            >
              {{ data.title }}
            </h3>
            <p
              v-motion-slide-visible-top
              :delay="600"
              class="font-light max-sm:text-sm max-sm:leading-7"
            >
              {{ data.text }}
            </p>
          </div>
        </li>
      </ul>
    </section>
  </Container>
</template>
