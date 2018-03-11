<template>
  <div class="container">
    <h2>Meus Posts</h2>
    <table class=" highlight centered table-responsive">
      <tbody>
        <tr v-for="post in list">
          <td>{{ post.titulo}}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
  export default {
    name: 'Post',
    data() {
      return {
        list: [],
      };
    },
    created() {
      this.fetchGithubData();
    },
    methods: {
      async fetchGithubData() {
        const dados = await fetch('https://yc-ti-blog.herokuapp.com/meu/yccp').then(data => data.json());
        this.list = dados.rows;
      },
    },
  };
</script>
<style>
table{
  margin:20px;
}
</style>
