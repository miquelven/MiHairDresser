<script setup>
import Container from "../Container/index.vue";
import SectionTitle from "../SectionTitle/index.vue";
import imgAbout from "../../assets/imgs/about.png";
</script>

<template>
  <section id="sobre" class="h-screen w-full pt-32">
    <Container>
      <div
        class="w-full h-[80vh] grid grid-cols-2 justify-center items-center gap-32 max-xl:gap-16 max-xl:h-[85vh] max-lg:grid-cols-1 max-lg:flex max-lg:flex-col-reverse"
      >
        <div class="bg-red-400 w-full h-full">
          <img
            :src="imgAbout"
            alt="Imagem do ambiente"
            class="h-full object-cover max-lg:h-80 max-lg:w-full max-sm:h-60"
          />
        </div>

        <div
          class="w-full h-full flex flex-col justify-center gap-14 max-lg:gap-10"
        >
          <div class="flex flex-col gap-3 max-sm:gap-2">
            <SectionTitle>Sobre Nós</SectionTitle>
            <h3
              class="text-6xl font-bold w-3/4 max-2xl:w-full max-md:text-5xl max-sm:text-4xl max-sm:leading-10"
            >
              Conheça Nossa História
            </h3>
          </div>
          <p
            class="text-lg font-light leading-9 max-md:text-base max-md:leading-7 max-sm:text-sm max-sm:leading-7"
          >
            Nossa equipe é composta por profissionais altamente qualificados e
            apaixonados pelo que fazem. Oferecemos uma ampla gama de serviços
            capilares, desde cortes modernos e colorações vibrantes até
            tratamentos capilares avançados.
          </p>
          <p
            class="text-lg font-light leading-9 max-md:text-base max-md:leading-7 max-sm:text-sm max-sm:leading-7"
          >
            Nossa missão é realçar a beleza única de cada cliente, utilizando as
            melhores técnicas e produtos disponíveis no mercado. Valorizamos a
            satisfação e o bem-estar de nossos clientes, criando um ambiente
            acolhedor e sofisticado onde você pode relaxar e se sentir especial.
          </p>

          <div class="text-end max-lg:hidden">
            <v-icon name="bi-scissors" class="w-20 h-20 text-white/80" />
          </div>
        </div>
      </div>
    </Container>
  </section>
</template>
