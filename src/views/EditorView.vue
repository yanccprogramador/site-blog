<template>
  <v-container class="my-4">
    <v-text-field label="Titulo" v-model="title"> </v-text-field>
    <v-text-field label="Slug" v-model="slug"> </v-text-field>
    <quill-editor
      theme="snow"
      v-model:content="content"
      :toolbar="'full'"
      content-type="html"
      
    ></quill-editor>
    <v-btn @click="createPost()">Send</v-btn>
  </v-container>
</template>

<script lang="ts">
import { defineComponent } from "vue";

// Components
import { QuillEditor } from "@vueup/vue-quill";
import "@vueup/vue-quill/dist/vue-quill.snow.css";

export default defineComponent({
  name: "EditorView",

  components: {
    QuillEditor,
  },
  data() {
    return {
      content: "",
      slug: "",
      title: "",
    };
  },
  methods: {
    createPost() {
      fetch(`https://ycti-blog.firebaseio.com/yccp/${this.slug}.json`, {
        method: "POST",
        body: JSON.stringify({
          content: this.content,
          slug: this.slug,
          title: this.title,
        }),
      });
    },
  },
});
</script>
