<template>
  <v-container class="my-4">
    <v-skeleton-loader v-if="loading" type="list-item-avatar-three-line"></v-skeleton-loader>
    <blog-component v-else v-for="(item, key) in items" :key="key" :item="Object.values(item)[0]"></blog-component>
  </v-container>
</template>
<script lang="ts">
import BlogComponent from "@/components/BlogComponent.vue";
import { defineComponent } from "vue";

export default defineComponent({
  components: {
    BlogComponent
  },
  data() {
    return {
      items: [],
      loading: false
    };
  },
  async created() {
    this.loading = true;
    this.items = await fetch(
      `https://ycti-blog.firebaseio.com/yccp/.json`
    ).then((data) => data.json());
    this.loading = false;
  },
});
</script>
