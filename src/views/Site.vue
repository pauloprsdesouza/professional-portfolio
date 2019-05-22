<template>
  <div class="about">
    <MyProfile></MyProfile>
    <div class="banner banner-backdrop backdrop-opace lets text-center">
      <div class="banner-heading">
        <h1 class="dysplay-1 text-center">Tem algum projeto em mente?</h1>
        <h1 class="display-4 text-center">
          <span>Vamos trabalhar juntos</span>
        </h1>
      </div>
      <div class="banner-body text-center">
        <a href="#contact" class="btn btn-secondary btn-lg">Entre em contato</a>
      </div>
    </div>
    <Education class="mb-4"></Education>
    <Services class="mb-4"></Services>
    <DevelopmentCicle></DevelopmentCicle>
    <Experiences class="mb-4"></Experiences>
    <div class="banner banner-backdrop backdrop-opace bla text-center">
      <div class="banner-heading">
        <h1
          class="dysplay-1 text-center"
        >Mais de 5 anos de experiência e desde sempre adquirindo conhecimento através dos mais renomados cursos...</h1>
        <h1 class="display-4 text-center">
          <span>Em que posso ajudar?</span>
        </h1>
      </div>
      <div class="banner-body text-center">
        <a href="#contact" class="btn btn-secondary btn-lg">Entre em contato</a>
      </div>
    </div>
  </div>
</template>

<script>
import Education from "@/components/Education.vue";
import MyProfile from "@/components/MyProfile.vue";
import Services from "@/components/Services.vue";
import Experiences from "@/components/Experiences.vue";
import DevelopmentCicle from "@/components/DevelopmentCicle.vue";

export default {
  name: "education",
  components: {
    Education,
    MyProfile,
    Services,
    Experiences,
    DevelopmentCicle
  }
};
</script>

