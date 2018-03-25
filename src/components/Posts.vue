<template>
  <div class="container" >
   <div class="center" v-show="loading">
    <br><br>
    <div class="progress" style="width:100%">
      <div class="indeterminate"></div>
    </div>
    <br><br>
  </div>
  <div v-show="!loading">
    <h2>Meus Posts</h2>
    <table class=" highlight centered responsive-table">
      <tbody>
        <tr v-for="post in list">
          <a :href="'/#/post/'+post.slug" style="center">
            <td>{{ post.titulo}}</td>
          </a>
        </tr>
      </tbody>
    </table>
  </div>
  </div>
</template>

<script>
  export default {
    name: 'Posts',
    data() {
      return {
        list: [],
        loading: true,
      };
    },
    created() {
      this.fetchPostData();
    },
    methods: {
      async fetchPostData() {
        this.loading = true;
        const dados = await fetch('https://yc-ti-blog.herokuapp.com/meu/yccp').then(data => data.json());
        this.list = dados.rows;
        this.loading = false;
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
    color:#000;
  }

  a td {
    font-size: 20px;
    text-align: center;
    color:#000;
  }

</style>
