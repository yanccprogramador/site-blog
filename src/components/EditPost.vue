<template>
  <div class="container">
    <div v-show="!logged">
      <input type="password" v-model="senha" />
      <button class="btn waves-effect waves-green" style="margin:10px;" v-on:click="logar()">Enviar</button>
    </div>
    <div v-show="logged">
      <div class="badge green center" style="width:50px;" v-show="success">
        Enviado com sucesso
      </div>

      <div class="input-field">
        <input type="text" id="titulo" placeholder="Titulo" v-model="titulo">
        <label for="titulo">Titulo</label>
      </div>

      <vue-editor v-model="article" id="artigo"></vue-editor>


      <button v-on:click="sendPost()" class="btn waves-effect waves-green" style="margin:10px;">Enviar</button>
      <div style="border:2px solid grey;">
        <h3>Preview</h3>
        <article v-html="article">
        </article>
      </div>
    </div>
  </div>
</template>

<script>
  import {
    VueEditor,
  } from 'vue2-editor';

  export default {
    components: {
      VueEditor,
    },
    name: 'CreatePost',
    data() {
      return {
        article: '',
        titulo: '',
        logged: false,
        config: {},
        success: false,
        id: 0,
      };
    },
    created() {
      this.fetchPostData();
    },
    methods: {
      async sendPost() {
        const dados = await fetch(`https://yc-ti-blog.herokuapp.com/${this.id}`, {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            titulo: this.titulo,
            artigo: this.article,
            dono: 'yccp',
          }),
        }).then(data => data.json());
        this.success = dados.success;
      },
      async fetchPostData() {
        const dados = await fetch(`https://yc-ti-blog.herokuapp.com/slug/${this.$route.params.slug}`).then(data => data.json());
        this.titulo = dados.rows[0].titulo;
        this.article = dados.rows[0].artigo;
        this.id = dados.rows[0].id;
      },
      async logar() {
        const dados = await fetch('https://yc-ti-blog.herokuapp.com/usuario/logar', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            login: 'yccp',
            senha: this.senha,
          }),
        }).then(data => data.json());
        this.logged = dados.success;
      },
    },
  };
</script>

<style>
  pre {
    border: 0.5px solid gray!important;
    padding:10px;
  }
  a{
    font-size:18px;
    color:dodgerblue;
  }
   blockquote{
    margin: 20px 0;
    padding-left: 1.5rem;
    border-left: 5px solid #000; /* Just change the color value and that's it*/
  }
</style>
