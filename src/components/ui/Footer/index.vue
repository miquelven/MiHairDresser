<script setup>
import Container from "../../Container/index.vue";

import socialMediaData from "../../../data/socialMediaData";
</script>

<template>
  <footer class="relative bg-black/40 mt-40 pt-24 max-lg:pt-16">
    <Container>
      <div
        class="grid grid-cols-3 gap-10 max-lg:grid-cols-2 max-md:gap-y-14 max-sm:flex max-sm:flex-col-reverse"
      >
        <nav v-motion-fade-visible-once :delay="400">
          <h6 class="text-2xl mb-5 font-semibold text-[#01baef]">
            Acompanhe nossas redes
          </h6>

          <p class="text-lg font-light max-md:text-base">
            Mantenha-se informado sobre tudo no salao, desde novos cortes até
            promoções.
          </p>

          <ul class="flex gap-6 mt-5">
            <li v-for="socialMedia in socialMediaData" :key="socialMedia">
              <v-icon
                :name="socialMedia"
                class="transition-all duration-500 w-7 h-7 hover:w-6 hover:h-6 hover:text-[#01baef] hover:cursor-pointer"
              />
            </li>
          </ul>
        </nav>

        <div v-motion-fade-visible-once :delay="400">
          <h6 class="text-2xl mb-5 font-semibold text-[#01baef]">
            Horário de Funcionamento
          </h6>
          <div class="flex flex-col gap-5">
            <div>
              <p class="font-bold text-lg max-md:text-base">Segunda - Sábado</p>
              <span class="font-light max-md:text-sm"> 09:00 - 21:00 </span>
            </div>

            <div>
              <p class="font-bold text-lg max-md:text-base">Domingo</p>

              <span class="font-light max-md:text-sm"> Fechado </span>
            </div>
          </div>
        </div>

        <div v-motion-fade-visible-once :delay="400">
          <h6 class="text-2xl mb-5 font-semibold text-[#01baef]">Contato</h6>

          <ul class="flex flex-col gap-5">
            <li class="flex gap-5">
              <v-icon name="io-location-sharp" class="fill-white" />
              <p class="font-light max-md:text-sm">
                Rua das Flores 123. Bairro Jardim das Rosas. São Paulo - SP,
                01234-567
              </p>
            </li>

            <li class="flex gap-5 items-center">
              <v-icon name="bi-telephone-fill" />
              <p class="font-light max-md:text-sm">(11) 91234-5678</p>
            </li>

            <li class="flex gap-5 items-center">
              <v-icon name="md-email" />
              <p class="font-light max-md:text-sm">
                contato@belezaexpress.com.br
              </p>
            </li>
          </ul>
        </div>
      </div>
    </Container>

    <div
      v-motion-fade-visible-once
      :delay="800"
      class="mt-20 w-full border-t-[1px] border-white/40 h-14 flex justify-center items-center"
    >
      <p class="text-sm">
        Desenvolvido por
        <span class="font-bold">Miquelven</span>
      </p>
    </div>
  </footer>
</template>
