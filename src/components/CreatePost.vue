<template>
  <div class="container">
    <div v-show="!logged">
      <p>Senha</p>
      <input type="password" v-model="senha" />
      <button class="btn waves-effect waves-green" style="margin:10px;" v-on:click="logar()">Enviar</button>
    </div>
    <div v-show="logged">
      <div class="badge green center" style="width:50px;" v-show="success">
        Enviado com sucesso
      </div>
      <form v-on:submit="sendPost(event)">
        <div class="input-field">
          <input type="text" id="titulo" placeholder="Titulo" :value="titulo">
          <label for="titulo">Titulo</label>
        </div>
        <div class="input-field">
          <vue-editor :value="article" id="artigo"></vue-editor>
          <label for="artigo">Artigo</label>
        </div>

        <button class="btn waves-effect waves-green" style="margin:10px;">Enviar</button>
      </form>
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
    VueEditor
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
        senha:'',
        logged: false,
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
      }
    },
  };
</script>

