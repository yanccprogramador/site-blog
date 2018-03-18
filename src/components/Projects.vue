<template>
  <div class="container">
    <div class="center" v-show="loading">
    <br><br>
    <div class="progress" style="width:100%">
      <div class="indeterminate"></div>
    </div>
    <br><br>
  </div>
  <div v-show="!loading">
    <h2>Meus Projetos</h2>
    <table class="highlight centered responsive-table">
      <tbody>
        <tr v-for="project in list">
          <td><p><strong>{{ project.name}}  </strong></p>
          <small v-if="project.description">{{project.description}}</small>
          </td>
          <td><span class="badge green right" style="color:#fff;" v-if="project.language">{{project.language}}</span>
          </td>
          <td><a :href="project.html_url"><button class="btn waves-effect waves-green blue">Github</button></a></td>
        </tr>
      </tbody>
    </table>
  </div>
  </div>
</template>

<script>
  export default {
    name: 'Projects',
    data() {
      return {
        list: [],
        loading: true,
      };
    },
    created() {
      this.fetchGithubData();
    },
    methods: {
      async fetchGithubData() {
        this.loading = true;
        const dados = await fetch(`https://api.github.com/users/yanccprogramador/repos?access_token=${process.env.access_token}`).then(data => data.json());
        this.list = dados;
        this.loading = false;
      },
    },
  };
</script>
<style>
table{
  margin:20px;
}

@media (max-width:500px) {
  .container{
    margin:0 !important;
    padding:0 !important;
  }
}
</style>
