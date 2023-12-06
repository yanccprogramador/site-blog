<template>
  <v-container class="my-4">
    <v-skeleton-loader v-if="loading" type="article"></v-skeleton-loader>
    <div v-else>
    <h1 class="my-4 text-center">{{post.title}}</h1>
    <div v-html="post.content">
    </div>
    </div>
  </v-container>
</template>
<script lang="ts">
import { defineComponent } from "vue";
import "@vueup/vue-quill/dist/vue-quill.snow.css";

export default defineComponent({
  data() {
    return {
      post: {},
      loading: false
    };
  },
  async created() {
    this.loading = true;
    this.post = Object.values(await fetch(
      `https://ycti-blog.firebaseio.com/yccp/${this.$route.params.slug}.json`
    ).then((data) => data.json()))[0];
    this.loading = false;

  },
});
</script>
