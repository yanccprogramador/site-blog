<template>
  <v-row>
    <router-link class="w-100" :to="`post/${item.slug}`" >
  <v-card
    class="mx-auto"
    prepend-icon="mdi-post"
  >
    <template v-slot:title>
      {{item.title}}
    </template>
    <v-card-text>Autor: Yan Christoffer</v-card-text>
  </v-card>
  </router-link>
  </v-row>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "BlogComponent",
  props: ['item']
});
</script>

<style >
a{
  text-decoration: none;
}
</style>
