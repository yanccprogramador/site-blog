<template>
  <v-app>
    <v-app-bar :elevation="2" theme="dark">
      <v-app-bar-title>
        <a href="/" class="brand-logo"
          ><v-img
            style="width: 50px; height: 50px"
            class="brand-logo img-responsive"
            src="./assets/logo2.png"
            alt="Yan Christoffer"
        /></a>
      </v-app-bar-title>
      <v-spacer></v-spacer>
      <v-list class="d-flex" nav>
        <v-list-item><router-link to="/"><v-btn>Home</v-btn></router-link></v-list-item>
        <v-list-item
          ><router-link to="career"><v-btn>Carreira</v-btn></router-link></v-list-item
        >
      </v-list>
    </v-app-bar>
    <v-main>
      <router-view />
    </v-main>
    <v-footer class="text-center d-flex flex-column" theme="dark">
      <v-row>
        <div>
          <a href="https://www.linkedin.com/in/yan-christoffer-4b401a135/">
            <v-btn class="mx-4" icon="mdi-linkedin" variant="text"></v-btn>
          </a>
          <a href="https://github.com/yanccprogramador">
            <v-btn class="mx-4" icon="mdi-github" variant="text"></v-btn>
          </a>
          <a href="https://www.instagram.com/yaaan_chris/">
            <v-btn class="mx-4" icon="mdi-instagram" variant="text"></v-btn>
          </a>
          </div
      ></v-row>
      <v-row>Yan Christoffer© 2023</v-row></v-footer
    >
  </v-app>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "App",

  data() {
    return {
      //
    };
  },
});
</script>
