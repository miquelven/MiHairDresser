<script setup>
import Container from "../Container/index.vue";
import SectionTitleContainer from "../SectionComponents/SectionTitleContainer/index.vue";
import SectionTitle from "../SectionComponents/SectionTitle/index.vue";
import SectionSubTitle from "../SectionComponents/SectionSubTitle/index.vue";
import SectionContentText from "../SectionComponents/SectionContentText/index.vue";

import bgPricing from "../../assets/imgs/bgPricing.png";

import pricesData from "../../data/pricesData";

import { Slide } from "vue3-carousel";
import CarouselContainer from "../CarouselContainer/index.vue";
</script>

<template>
  <div
    class="mt-60 h-screen pt-1 relative z-10 bg-no-repeat bg-cover after:content-[''] after:inset-0 after:bg-black/75 after:absolute after:z-20 max-lg:p-0 max-lg:mt-40"
    :style="`background-image: url(${bgPricing}) `"
  >
    <Container>
      <section
        id="planos"
        class="scroll-mt-20 relative z-30 flex flex-col gap-9 justify-center items-center text-center mt-32 max-sm:mt-48 max-sm:-scroll-mt-40"
      >
        <SectionTitleContainer class="max-lg:mt-10">
          <SectionTitle> Ofertas e Preços </SectionTitle>
          <SectionSubTitle class="mx-auto"
            >Todos os nossos preços
          </SectionSubTitle>
        </SectionTitleContainer>
        <SectionContentText>
          Descubra todos os nossos serviços do salão com preços acessíveis.
          Aproveite nossas promoções e transforme seu visual!
        </SectionContentText>
        <ul
          class="grid grid-cols-3 gap-20 mt-5 max-lg:gap-6 max-sm:grid-cols-1"
        >
          <li
            v-motion-fade-visible-once
            v-for="price in pricesData"
            :delay="400 * price.id"
            :key="price.id"
            class="rounded-xl bg-[#0a131a] py-10 px-20 h-[500px] flex flex-col justify-between shadow-md shadow-black/70 max-xl:px-10 max-sm:hidden"
          >
            <h5
              class="text-4xl text-[#01baef] font-bold uppercase max-lg:text-3xl max-md:text-2xl"
            >
              {{ price.title }}
            </h5>

            <span
              class="bg-white/5 rounded-full mx-auto h-36 w-36 flex justify-center items-center text-2xl font-bold shadow-md shadow-black/20 max-lg:h-32 max-lg:w-32 max-lg:text-xl max-md:h-24 max-md:w-24 max-md:text-base"
              >{{ price.value }}</span
            >

            <ul>
              <li
                v-for="benefits in price.benefits"
                :key="benefits"
                class="my-2"
              >
                <p
                  class="uppercase font-medium max-xl:text-sm max-lg:text-xs max-lg:my-3"
                >
                  {{ benefits }}
                </p>
              </li>
            </ul>

            <button
              class="transition-all duration-500 text-black w-full bg-[#01baef] rounded-md py-1 shadow-md shadow-black hover:bg-white/5 hover:text-white"
            >
              <v-icon
                name="bi-whatsapp"
                class="w-8 h-8 max-lg:w-7 max-lg:h-7"
              />
            </button>
          </li>

          <component :is="CarouselContainer" class="hidden max-sm:block">
            <Slide
              v-motion-fade-visible
              :delay="400"
              v-for="price in pricesData"
              :key="price.id"
              class="rounded-xl bg-[#0a131a] py-5 px-10 h-[400px] flex flex-col justify-between shadow-md shadow-black/70"
            >
              <h5 class="text-3xl font-bold uppercase mb-8">
                {{ price.title }}
              </h5>

              <span
                class="bg-white/5 rounded-full mx-auto h-24 w-24 flex justify-center items-center text-base font-bold shadow-md shadow-black/20"
                >{{ price.value }}</span
              >

              <ul>
                <li
                  v-for="benefits in price.benefits"
                  :key="benefits"
                  class="my-2"
                >
                  <p class="uppercase text-sm font-light">
                    {{ benefits }}
                  </p>
                </li>
              </ul>

              <button
                class="transition-all mt-4 duration-500 text-black w-full bg-[#01baef] rounded-md py-1 shadow-md shadow-black hover:bg-white/5 hover:text-white"
              >
                <v-icon name="bi-whatsapp" class="w-7 h-7" />
              </button>
            </Slide>
          </component>
        </ul>
      </section>
    </Container>
  </div>
</template>
