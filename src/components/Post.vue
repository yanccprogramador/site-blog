<template>
  <div class="container">
    <h2>{{ post.titulo}}</h2>
    <article v-html="post.artigo" style="margin-bottom:15px;">
    </article>

    <br>
    <social-sharing :url="'/#/post/'+$route.params.slug" :title="post.titulo" :description="post.artigo.substring(0,20)"
      twitter-user="yan_christoffer" inline-template align="right">
      <div>
    <p>Compartilhe</p>
        <network network="email">
          <i class="fa fa-envelope"></i> Email
        </network>
        <network network="facebook">
          <i class="fab fa-facebook-f"></i> Facebook
        </network>
        <network network="googleplus">
          <i class="fab fa-google-plus"></i> Google +
        </network>
        <network network="linkedin">
          <i class="fab fa-linkedin"></i> LinkedIn
        </network>
        <network network="whatsapp">
          <i class="fab fa-whatsapp"></i> Whatsapp
        </network>
      </div>
    </social-sharing>
  </div>
</template>

<script>
  export default {
    name: 'Post',
    data() {
      return {
        post: {},
      };
    },
    created() {
      this.fetchPostData();
    },
    methods: {
      async fetchPostData() {
        const dados = await fetch(`https://yc-ti-blog.herokuapp.com/slug/${this.$route.params.slug}`).then(data => data.json());
        this.post = dados.rows[0];
      },
    },
  };
</script>

