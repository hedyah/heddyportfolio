<template>
  <v-app>
    <v-app-bar
      app
      color="black"
      dark
    >
      <div class="d-flex align-center">
        <v-img
          alt="Logo"
          class="shrink mr-2"
          contain
          src="https://thumbs.dreamstime.com/b/portfolio-word-pencil-letter-i-art-design-gallery-concept-vector-conceptual-creative-logo-poster-made-153120706.jpg"
          transition="scale-transition"
          width="110"
          @click="$router.push('/')"
        />

        <!-- <v-img
          alt="Vuetify Name"
          class="shrink mt-1 hidden-sm-and-down"
          contain
          min-width="100"
          src="https://cdn.vuetifyjs.com/images/logos/vuetify-name-dark.png"
          width="100"
        /> -->
      </div>

      
      <v-spacer></v-spacer>
      <v-divider vertical></v-divider>
      
      <v-btn
        @click="$router.push('/about')"
        target="_blank"
        text
      >
        about me
      </v-btn>

      <v-divider vertical></v-divider>
      <v-btn
        @click="$router.push('/project')"
        target="_blank"
        text
      >
        Projects
      </v-btn>
     
      <v-divider vertical></v-divider>
      <v-btn
        @click="$router.push('/contact')"
        target="_blank"
        text
      >
        Contact
      </v-btn>
      <v-divider vertical></v-divider>
    </v-app-bar>

    <v-main>
      <router-view/>
    </v-main>
    <div>
        <FooterComp/>
    </div>
  </v-app>
</template>

<script>
import FooterComp from './components/FooterComp.vue';

export default {
  components: { FooterComp },
  name: 'App',

  data: () => ({
    //
  }),
};
</script>

<style lang="scss" scoped>
*{
  background-color:#14213D;
}
</style>
