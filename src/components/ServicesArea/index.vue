<script setup>
import Container from "../Container/index.vue";
import SectionTitleContainer from "../SectionComponents/SectionTitleContainer/index.vue";
import SectionTitle from "../SectionComponents/SectionTitle/index.vue";
import SectionSubTitle from "../SectionComponents/SectionSubTitle/index.vue";
import SectionContentText from "../SectionComponents/SectionContentText/index.vue";

import servicesData from "../../data/servicesData";

import CarouselContainer from "../CarouselContainer/index.vue";
import { Slide } from "vue3-carousel";
</script>

<template>
  <Container>
    <section
      id="servicos"
      class="scroll-mt-20 flex flex-col gap-9 justify-center items-center text-center mt-60 max-sm:mt-48 max-sm:-scroll-mt-28"
    >
      <SectionTitleContainer>
        <SectionTitle> Serviços </SectionTitle>
        <SectionSubTitle class="mx-auto"
          >Alguns de nossos serviços</SectionSubTitle
        >
      </SectionTitleContainer>
      <SectionContentText>
        Explore nossa variedade de serviços personalizados para atender às suas
        necessidades específicas. Descubra alguns dos nossos principais serviços
        abaixo:
      </SectionContentText>

      <ul class="mt-5 grid grid-cols-3 max-lg:grid-cols-1 max-lg:gap-20">
        <li
          v-motion-fade-visible-once
          v-for="data in servicesData"
          :delay="400 * data.id"
          :key="data.id"
          class="p-10 max-xl:p-5 max-lg:flex max-lg:flex-col-reverse max-lg:gap-10 max-sm:shadow-black/40 max-sm:hidden"
        >
          <div class="w-full h-full max-h-96 overflow-hidden">
            <img
              :src="data.src"
              :alt="data.alt"
              class="transition-all duration-500 w-full h-full object-cover hover:scale-125 hover:brightness-50"
            />
          </div>
          <div class="mt-7 w-full text-center flex flex-col gap-5">
            <h4 class="font-bold text-2xl">
              {{ data.title }}
            </h4>
            <p class="font-light text-lg leading-8">
              {{ data.text }}
            </p>
          </div>
        </li>

        <component :is="CarouselContainer" class="hidden max-sm:block">
          <Slide
            v-motion-fade-visible
            :delay="400"
            v-for="data in servicesData"
            :key="data.id"
            class="p-10 bg-[#0a131a] shadow-md shadow-black/40 flex flex-col"
          >
            <div class="w-full h-full max-h-96 overflow-hidden">
              <img
                :src="data.src"
                :alt="data.alt"
                class="transition-all duration-500 w-full h-full object-cover hover:scale-125 hover:brightness-50"
              />
            </div>
            <div class="mt-7 w-full text-center flex flex-col gap-5">
              <h4 class="font-bold text-2xl">
                {{ data.title }}
              </h4>
              <p class="font-light text-sm leading-7">
                {{ data.text }}
              </p>
            </div>
          </Slide>
        </component>
      </ul>
    </section>
  </Container>
</template>
