<template>
  <div class="container">
    <h2>Entre em contato para orçamentos ou dúvidas</h2>
    <form method="POST" action="https://formspree.io/yandepaula@gmail.com">
        <fieldset style="border:none; margin:20px;">
          <input type="text" name="assunto" placeholder="Assunto">
          <input type="text" name="nome" placeholder="Nome">
          <input type="email" name="email" placeholder="email">
          <input type="text" name="mensagem" placeholder="Mensagem">
          <button class="btn waves-effect waves-green" type="submit">Enviar</button>
        </fieldset>
    </form>
  </div>
</template>

<script>
  export default {
    name: 'Contact',
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
