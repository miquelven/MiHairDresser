<script setup>
import Container from "../Container/index.vue";
import SectionTitleContainer from "../SectionTitleContainer/index.vue";
import SectionTitle from "../SectionTitle/index.vue";
import SectionSubTitle from "../SectionSubTitle/index.vue";
import SectionContentText from "../SectionContentText/index.vue";

import { teamData } from "../../data/teamData";
import socialMedias from "../../data/socialMediaData";

import { Slide } from "vue3-carousel";
import CarouselContainer from "../CarouselContainer/index.vue";
</script>

<template>
  <Container>
    <section
      id="equipe"
      class="scroll-mt-20 flex flex-col gap-10 text-center mt-72 max-sm:mt-48 max-sm:gap-7 max-sm:-scroll-mt-28"
    >
      <SectionTitleContainer>
        <SectionTitle> Equipe </SectionTitle>
        <SectionSubTitle class="mx-auto">Veja nossa equipe</SectionSubTitle>
      </SectionTitleContainer>
      <SectionContentText>
        Conheça os profissionais talentosos e dedicados que fazem parte da nossa
        equipe. Cada membro é especialista em proporcionar uma experiência única
        e personalizada. Veja nossa equipe abaixo:
      </SectionContentText>

      <ul class="mt-10 grid grid-cols-3 gap-10 max-lg:hidden">
        <li
          v-motion-fade-visible-once
          v-for="data in teamData"
          :delay="400 * data.id"
          :key="data.id"
        >
          <div class="flex flex-col gap-3">
            <img
              :src="data.src"
              :alt="data.alt"
              class="w-full h-72 object-cover bg-black/60 shadow-md shadow-black/80"
            />

            <h4 class="font-bold text-2xl">{{ data.title }}</h4>

            <p
              class="font-light text-lg leading-8 max-sm:text-sm max-sm:leading-7"
            >
              {{ data.function }}
            </p>

            <nav>
              <ul class="flex gap-5 justify-center items-center">
                <li v-for="socialData in socialMedias" :key="socialData">
                  <v-icon
                    :name="socialData"
                    class="transition-all duration-500 w-7 h-7 hover:w-6 hover:h-6 hover:text-[#01baef] hover:cursor-pointer"
                  />
                </li>
              </ul>
            </nav>
          </div>
        </li>
      </ul>

      <div class="hidden max-lg:block max-lg:mt-10">
        <component :is="CarouselContainer">
          <Slide
            v-motion-fade-visible
            :delay="400"
            v-for="data in teamData"
            :key="data.id"
          >
            <div class="flex flex-col gap-3">
              <img
                :src="data.src"
                :alt="data.alt"
                class="w-full h-96 object-cover bg-black/60 shadow-sm shadow-black/80 max-sm:h-72"
              />

              <h4 class="font-bold text-2xl">{{ data.title }}</h4>

              <p
                class="font-light text-lg leading-8 max-sm:text-sm max-sm:leading-7"
              >
                {{ data.function }}
              </p>

              <nav>
                <ul class="flex gap-5 justify-center items-center">
                  <li v-for="socialData in socialMedias" :key="socialData">
                    <v-icon
                      :name="socialData"
                      class="transition-all duration-500 w-7 h-7 hover:w-6 hover:h-6 hover:text-[#01baef] hover:cursor-pointer"
                    />
                  </li>
                </ul>
              </nav>
            </div>
          </Slide>
        </component>
      </div>
    </section>
  </Container>
</template>
