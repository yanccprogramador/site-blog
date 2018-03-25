<template>
  <div class="container">
    <h2>{{ post.titulo}}</h2>
    <div v-html="post.artigo" style="margin-bottom:15px;">
    </div>
    <br>
    <social-sharing :url="'https://yanchristoffer.com.br/#/post/'+$route.params.slug" :title="post.titulo" :description="post.titulo"
      twitter-user="yan_christoffer" inline-template align="right">
      <div>
    <p>Compartilhe</p>
        <network network="email">
          <i class="fa fa-envelope"></i> Email
        </network>
        <network network="twitter">
        <i class="fa fa-twitter"></i> Twitter
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

<style>
  pre {
    border: 0.5px solid gray!important;
    padding:10px;
  }
  pre {
    border-radius: 5px;
    -moz-border-radius: 5px;
    -webkit-border-radius: 5px;
    border: 1px solid #BCBEC0;
    background: #F1F3F5;
    font:12px Monaco,Consolas,"Andale  Mono","DejaVu Sans Mono",monospace
}

code {
    border-radius: 5px;
    -moz-border-radius: 5px;
    -webkit-border-radius: 5px;
    border: 1px solid #BCBEC0;
    padding: 2px;
    font:12px Monaco,Consolas,"Andale  Mono","DejaVu Sans Mono",monospace
}

pre code {
    border-radius: 0px;
    -moz-border-radius: 0px;
    -webkit-border-radius: 0px;
    border: 0px;
    padding: 2px;
    font:12px Monaco,Consolas,"Andale  Mono","DejaVu Sans Mono",monospace
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


