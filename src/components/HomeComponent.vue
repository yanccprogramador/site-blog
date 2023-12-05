<template>
  <v-row>
    <!-- <div class='col s12 m3'>
      <div class='card'>
        <div class='card-image'>
          <img :src='img' alt='Yan' />
          <span class='card-title'>
                                        {{name}} @{{login}}</span>
        </div>
        <div class='card-content'>
          <p>{{bio}}</p>
          <b align='center'>{{orgs}}</b>
          <div class='row'>
            <div class='col s4'>
              <i class='material-icons'>book</i>{{repos}}</div>
            <div class='col s4'>
              <i class='material-icons'>supervisor_account</i>{{followers}}</div>
            <div class='col s4'>
              <i class='material-icons'>perm_identity</i>{{following}}</div>
          </div>
        </div>
      </div>
    </div> -->
    <v-container>
  <v-card
    class="mx-auto rounded-pill"
    max-width="350"
    height="400"
    :image="'img/yan.jpeg'"
    title="Yan"
    theme="dark"
  ></v-card>
      <p>
        Meu nome é Yan Christoffer e sou , brasileiro, atualmente Consultor Node
        na DQRTech , formado em Técnico em Informática pela UFV-Florestal e
        Graduado em Ciência da Computação pela Faculdade Pitágoras-Betim.
      </p>
      <p>
        Amante de tecnologia, entusiasta de novas linguagens, biblioteca e
        frameworks. Desenvolvedor principalmente PHP e JavaScript porém conheço
        também diversas outras linguagens e ferramentas. participante frequente
        de eventos e comunidades de desenvolvimento.
      </p>
      <p>
        Meu modo atual de trabalho é como Full Cycle Developer, participando,
        liderando e definindo desde o planejamento de estruturação da Engenharia
        de Software e Solução até ao deploy da aplicação alcançando partes de
        desenvolvimento full stack e também a gerencia de infraestrutura
      </p>
    </v-container>
  </v-row>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "HomeComponent",
});
</script>

<style >
.rounded-img{
  border-radius: 50%;
  width: 40%;
}
</style>
