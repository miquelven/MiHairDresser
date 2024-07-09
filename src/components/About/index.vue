<script setup>
import Container from "../Container/index.vue";
import SectionTitle from "../SectionComponents/SectionTitle/index.vue";
import SectionSubTitle from "../SectionComponents/SectionSubTitle/index.vue";
import SectionContentText from "../SectionComponents/SectionContentText/index.vue";
import SectionTitleContainer from "../SectionComponents/SectionTitleContainer/index.vue";
import imgAbout from "../../assets/imgs/about.png";
</script>

<template>
  <Container>
    <section
      id="sobre"
      class="-scroll-mt-20 h-screen w-full pt-32 max-sm:pt-20 max-sm:-scroll-mt-10"
    >
      <div
        class="w-full h-[80vh] grid grid-cols-2 justify-center items-center gap-32 max-xl:gap-16 max-xl:h-[85vh] max-lg:grid-cols-1 max-lg:flex max-lg:flex-col-reverse"
      >
        <div class="w-full h-full">
          <img
            v-motion-fade-visible-once
            :delay="1200"
            :src="imgAbout"
            alt="Imagem do ambiente"
            class="h-full object-cover max-lg:h-80 max-lg:w-full max-sm:h-60"
          />
        </div>

        <div
          class="w-full h-full flex flex-col justify-center gap-14 max-lg:gap-10"
        >
          <SectionTitleContainer>
            <SectionTitle>Sobre Nós</SectionTitle>
            <SectionSubTitle> Conheça Nossa História </SectionSubTitle>
          </SectionTitleContainer>
          <SectionContentText>
            Nossa equipe é composta por profissionais altamente qualificados e
            apaixonados pelo que fazem. Oferecemos uma ampla gama de serviços
            capilares, desde cortes modernos e colorações vibrantes até
            tratamentos capilares avançados.
          </SectionContentText>
          <SectionContentText>
            Nossa missão é realçar a beleza única de cada cliente, utilizando as
            melhores técnicas e produtos disponíveis no mercado. Valorizamos a
            satisfação e o bem-estar de nossos clientes, criando um ambiente
            acolhedor e sofisticado onde você pode relaxar e se sentir especial.
          </SectionContentText>

          <div
            v-motion-fade-visible-once
            :delay="1000"
            class="text-end max-lg:hidden"
          >
            <v-icon name="bi-scissors" class="w-20 h-20 text-white/80" />
          </div>
        </div>
      </div>
    </section>
  </Container>
</template>
