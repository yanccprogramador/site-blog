<template>
  <div class="container">
    <h2>Meus Posts</h2>
    <table class=" highlight centered table-responsive">
      <tbody>
        <tr v-for="post in list">
          <a :href="'/#/post/'+post.slug" style="center">
            <td>{{ post.titulo}}</td>
          </a>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
  export default {
    name: 'Posts',
    data() {
      return {
        list: [],
      };
    },
    created() {
      this.fetchPostData();
    },
    methods: {
      async fetchPostData() {
        const dados = await fetch('https://yc-ti-blog.herokuapp.com/meu/yccp').then(data => data.json());
        this.list= dados.rows;
      },
    },
  };
</script>

<style>
  table {
    margin: 20px;
  }

  table li a {
    font-size: 20px;
  }

  a td {
    font-size: 20px;
    text-align: center;
  }

</style>
