<script setup>
import Container from "../Container/index.vue";
import SectionTitleContainer from "../SectionComponents/SectionTitleContainer/index.vue";
import SectionTitle from "../SectionComponents/SectionTitle/index.vue";
import SectionSubTitle from "../SectionComponents/SectionSubTitle/index.vue";
import SectionContentText from "../SectionComponents/SectionContentText/index.vue";

import reviewsData from "../../data/reviewsData";
import CarouselContainer from "../CarouselContainer/index.vue";
import { Slide } from "vue3-carousel";
</script>

<template>
  <Container>
    <section
      id="avaliacoes"
      class="scroll-mt-28 flex flex-col gap-7 text-center mt-40 max-sm:mt-48 max-sm:scroll-mt-16"
    >
      <SectionTitleContainer class="max-lg:mt-10">
        <SectionTitle> Avaliações </SectionTitle>
        <SectionSubTitle class="mx-auto"
          >Algumas avaliações de clientes
        </SectionSubTitle>
      </SectionTitleContainer>
      <SectionContentText>
        Confira o que nossos clientes têm a dizer sobre a qualidade de nossos
        produtos e serviços.
      </SectionContentText>

      <ul
        class="grid grid-cols-3 gap-x-16 gap-y-24 mt-20 max-lg:gap-y-14 max-lg:gap-x-10 max-md:gap-x-5 max-sm:grid-cols-1 max-sm:gap-0 max-sm:mt-10"
      >
        <li
          v-motion-fade-visible-once
          v-for="review in reviewsData"
          :delay="400 * review.id"
          :key="review.id"
          class="transition-all duration-500 flex flex-col gap-10 bg-[#0a131a] px-10 py-4 rounded-lg shadow-md shadow-black/60 even:bg-black/40 hover:odd:bg-black/40 hover:bg-black/20 max-lg:px-4 max-sm:hidden"
        >
          <div class="flex items-center gap-6">
            <img
              :src="review.src"
              :alt="review.alt"
              class="object-cover h-20 w-20 rounded-full bg-black/40 shadow-md shadow-black/70 max-lg:w-14 max-lg:h-14 max-md:w-10 max-md:h-10"
            />

            <h6 class="text-lg font-semibold max-md:text-base">
              {{ review.title }}
            </h6>
          </div>

          <p class="text-lg font-light max-lg:text-sm">
            {{ review.text }}
          </p>
        </li>

        <component :is="CarouselContainer" class="hidden max-sm:block">
          <Slide
            v-motion-fade-visible
            :delay="400"
            v-for="review in reviewsData"
            :key="review.id"
            class="transition-all duration-500 flex flex-col gap-10 bg-[#0a131a] px-5 py-10 rounded-xl shadow-md shadow-black/60 even:bg-black/40 hover:odd:bg-black/40 hover:bg-black/20"
          >
            <div class="flex items-center gap-6">
              <img
                :src="review.src"
                :alt="review.alt"
                class="object-cover h-14 w-14 rounded-full bg-black/40 shadow-md shadow-black/70"
              />

              <h6 class="font-semibold text-base">
                {{ review.title }}
              </h6>
            </div>

            <p class="font-light text-sm">
              {{ review.text }}
            </p>
          </Slide>
        </component>
      </ul>
    </section>
  </Container>
</template>

<style>
#avaliações .carousel__prev,
#avaliações .carousel__next {
  color: white !important;
}

#avaliações .carousel__prev:hover,
#avaliações .carousel__next:hover {
  background-color: #0007 !important;
}
</style>
