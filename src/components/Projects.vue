<template>
  <div class="container">
    <h2>Meus Projetos</h2>
    <table class=" highlight centered table-responsive">
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
</template>

<script>
  export default {
    name: 'Projects',
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
        const dados = await fetch('https://api.github.com/users/yanccprogramador/repos').then(data => data.json());
        this.list = dados;
      },
    },
  };
</script>
<style>
table{
  margin:20px;
}
</style>
