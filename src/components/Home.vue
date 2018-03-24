<template>
  <div class="row">
    <div class="col s12 m3">
      <div class="card">
        <div class="card-image">
          <img :src="img" alt="Yan" />
          <span class="card-title">
                                      {{name}} @{{login}}</span>
        </div>
        <div class="card-content">
          <p>{{bio}}</p>
          <b align="center">{{orgs}}</b>
          <div class="row">
            <div class="col s4">
              <i class="material-icons">book</i>{{repos}}</div>
            <div class="col s4">
              <i class="material-icons">supervisor_account</i>{{followers}}</div>
            <div class="col s4">
              <i class="material-icons">perm_identity</i>{{following}}</div>
          </div>
        </div>
      </div>
    </div>
    <div class="col m6">
      <p> Meu nome é Yan Christoffer e sou , brasileiro, atualmente Full Stack Developer na Donuz , formado em Técnico em Informática pela UFV-Florestal e Graduando em ciência da computação pela Faculdade Pitágoras-Betim.
      </p>
      <p>Amante de tecnologia, entusiasta de novas linguagens, biblioteca e frameworks. Desenvolvedor principalmente PHP e JavaScript porém sei também diversas outras linguagens e ferramentas. participante frequente de eventos e comunidades de desenvolvimento.
      </p>
      <p>Presto serviços de Desenvolvimento Web, Mobile , Desktop. Também realizo manutenção de computadores, faço cartões de visita, banners e também panfletos.
      </p>
      Trabalhamos com:
      <br/>
      <ul class="col m4">
        <li><img src="../assets/ai.png" class="circle" width="40px" height="40px" alt="Illustrator"><a href="http://www.adobe.com/br/products/illustrator.html">Adobe Illustrator</a></li>
        <li><img src="../assets/ang.png" class="circle" width="40px" height="40px" alt="Angular"><a href="https://angular.io/">Angular 1.x e 2+</a></li>
        <li><img src="../assets/autocad.png" class="circle" width="40px" height="40px" alt="Autocad"><a href="http://www.autodesk.com/education/free-software/autocad">Autocad</a></li>
        <li><img src="../assets/bootstrap.png" class="circle" width="40px" height="40px" alt="Bootstrap"><a href="https://v4-alpha.getbootstrap.com/">Bootstrap</a></li>
        <li><img src="../assets/c.png" class="circle" width="40px" height="40px" alt="C#"><a href="https://msdn.microsoft.com/pt-BR/library/kx37x362.aspx">C#</a></li>
        <li><img src="../assets/cpp.png" class="circle" width="40px" height="40px" alt="C++"><a href="https://pt.wikipedia.org/wiki/C%2B%2B">C++</a></li>
        <li><img src="../assets/django.png" class="circle" width="40px" height="40px" alt="Django"><a href="https://www.djangoproject.com/">Django</a></li>
        <li><img src="../assets/java.png" class="circle" width="40px" height="40px" alt="Java"><a href="https://www.java.com/pt_BR/">Java</a></li>
        <li><img src="../assets/js.png" class="circle" width="40px" height="40px" alt="JavaScript"><a href="https://www.javascript.com/">JavaScript</a></li>
        <li><img src="../assets/laravel.png" class="circle" width="40px" height="40px" alt="Laravel"><a href="https://laravel.com/">Laravel</a></li>
      </ul>
      <ul class="col m4">
        <li><img src="../assets/materialize.png" class="circle" width="40px" height="40px" alt="Materialize"><a href="http://materializecss.com/">Materialize</a></li>
        <li><img src="../assets/sql-server.png" class="circle" width="40px" height="40px" alt="Sql Server"><a href="https://www.microsoft.com/pt-br/sql-server/sql-server-2017">Microsoft Sql Server</a></li>
        <li><img src="../assets/mongo.png" class="circle" width="40px" height="40px" alt="Mongodb"><a href="https://www.mongodb.com/?_ga=2.178384740.1545352998.1510785540-1928681075.1508100057">Mongo DB</a></li>
        <li><img src="../assets/Mysql.png" class="circle" width="40px" height="40px" alt="Mysql"><a href="https://www.mysql.com/">Mysql</a></li>
        <li><img src="../assets/nodejs.png" class="circle" width="40px" height="40px" alt="Node.js"><a href="http://nodejs.org/">Node.Js</a></li>
        <li><img src="../assets/nwjs.png" class="circle" width="40px" height="40px" alt="Nw.js"><a href="https://nwjs.io/">NW.js(Node Webkit)</a></li>
        <li><img src="../assets/pf.png" class="circle" width="40px" height="40px" alt="Primefaces"><a href="https://www.primefaces.org/">Primefaces</a></li>
        <li><img src="../assets/php.png" class="circle" width="40px" height="40px" alt="PHP"><a href="https://secure.php.net/manual/pt_BR/">PHP</a></li>
        <li><img src="../assets/postgresql.png" class="circle" width="40px" height="40px" alt="Postgres Sql"><a href="https://www.postgresql.org/">PostgreSql</a></li>
        </ul>
      <ul class="col m4">
        <li><img src="../assets/ps.png" class="circle" width="40px" height="40px" alt="Photoshop"><a href="http://www.adobe.com/br/products/photoshop.html">Photoshop</a></li>
        <li><img src="../assets/python.png" class="circle" width="40px" height="40px" alt="Python"><a href="https://python.org/">Python</a></li>
        <li><img src="../assets/react.png" class="circle" width="40px" height="40px" alt="React"><a href="https://reactjs.org">React</a></li>
        <li><img src="../assets/symfony.png" class="circle" width="40px" height="40px" alt="Symfony"><a href="https://symfony.com">Symfony</a></li>
        <li><img src="../assets/unity.png" class="circle" width="40px" height="40px" alt="Unity"><a href="https://www.postgresql.org/">Unity</a></li>
        <li><img src="../assets/vue.png" class="circle" width="40px" height="40px" alt="VueJS"><a href="https://www.vuejs.com/">VueJs</a></li>
        <li><img src="../assets/zend.png" class="circle" width="40px" height="40px" alt="Zend Expressive"><a href="https://docs.zendframework.com/zend-expressive/">Zend Expressive</a></li>

      </ul>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'Home',
    props: {
      gp: {
        twoWay: true,
      },
    },
    data() {
      return {
        name: '',
        orgs: '',
        img: '',
        login: '',
        repos: '',
        bio: '',
        followers: '',
        following: '',
      };
    },
    created() {
      this.fetchGithubData();
    },
    methods: {
      async fetchGithubData() {
        const dados = await fetch(`https://api.github.com/users/yanccprogramador?access_token=${process.env.ACCESS_TOKEN}`).then(data => data.json());
        this.name = dados.name;
        this.orgs = dados.company;
        this.img = dados.avatar_url;
        this.login = dados.login;
        this.repos = dados.public_repos;
        this.bio = dados.bio;
        this.followers = dados.followers;
        this.following = dados.following;
      },
    },
  };
</script>

