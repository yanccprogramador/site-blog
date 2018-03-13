<template>
  <div class="container">
    <div class="badge green center" style="width:50px;" v-show="success">
      Enviado com sucesso
    </div>
    <form :onsubmit="sendPost(event)">
    <input type="text" name="assunto" placeholder="Titulo" :value="titulo">
    <vue-editor :value="article"></vue-editor>
    <button  class="btn waves-effect waves-green" style="margin:10px;">Enviar</button>
    </form>
    <div style="border:2px solid grey;">
      <h3>Preview</h3>
      <article v-html="article">
      </article>
    </div>
  </div>
</template>

<script>
  import { VueEditor } from 'vue2-editor';

  export default {
    components: {
      VueEditor,
    },
    name: 'CreatePost',
    data() {
      return {
        article: '',
        titulo: '',
        config: {},
        success: false,
      };
    },
    methods: {
      async sendPost(e) {
        e.preventDefault();

        const dados = await fetch('https://yc-ti-blog.herokuapp.com/', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            title: this.titulo,
            artigo: this.article,
            dono: 'yccp',
          }),
        }).then(data => data.json());
        this.success = dados.success;
      },
    },
  };
</script>

