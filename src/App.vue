<template>
  <div id="app">
    <header>
      <nav>
        <div class="nav-wrapper black">
          <a href="/" class="brand-logo"><img style="width:50px;height:50px;" class="brand-logo img-responsive" src="./assets/logo2.png" alt="Yan Christoffer"/></a>
          <ul id="nav-mobile" class="right hide-on-med-and-down">
            <li><a href="/#/posts">Posts</a></li>
            <li><a href="/#/projetcs">Projetos</a></li>
            <li><a href="/#/contato">Contato</a></li>
          </ul>
        </div>
      </nav>
    </header>
    <main>
      <router-view></router-view>
    </main>
  </div>
</template>

<script>
  export default {
    name: 'app',
  };
</script>
