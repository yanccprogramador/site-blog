<template>
  <div id="app" :class="DARKMODE?'dark':''">
    <header>
      <nav>
        <div class="nav-wrapper black">
          <a href="/" class="brand-logo"><img style="width:50px;height:50px;" class="brand-logo img-responsive" src="./assets/logo2.png" alt="Yan Christoffer" /></a>
          <ul id="nav-mobile" class="right hide-on-med-and-down">
            <li><a href="/#/">Home</a></li>
            <li><a href="/#/career">Carreira</a></li>
            <li><a href="/#/posts">Posts</a></li>
            <li><a href="/#/projects">Projetos</a></li>
            <li><a href="/#/contact">Contato</a></li>
          </ul>
           <a href="#" data-target="slide-out" class="sidenav-trigger show-on-medium-and-down" style="color:#fff"><i class="material-icons">menu</i></a>
        </div>
      </nav>
      <ul id="slide-out" class="sidenav">
        <li><a class="sidenav-close" href="/#/">Home</a></li>
        <li><a href="/#/career">Carreira</a></li>
        <li><a class="sidenav-close" href="/#/posts">Posts</a></li>
        <li><a class="sidenav-close" href="/#/projects">Projetos</a></li>
        <li><a class="sidenav-close" href="/#/contact">Contato</a></li>
      </ul>
    </header>
    <main >
      <router-view ></router-view>
        <div class="dark-mode-switch">
           <!-- Switch -->
          <div class="switch">
            <label>
              <i class="material-icons">wb_incandescent</i>
              <input type="checkbox" v-model="DARKMODE" @change="setPreference">
              <span class="lever"></span>
              <i class="material-icons">brightness_4</i>
            </label>
          </div>
        </div>
    </main>
    <footer class="page-footer black" style="margin-top:10px;">
      <div class="container">
        <div class="row">
          <div class="col l6 s12">
            <h5 class="white-text">Desenvolvido por Yan Christoffer</h5>
            <p class="grey-text text-lighten-4">
              Técnico em informática pela UFV-Florestal <br />Graduado em Ciência da Computação pela Faculdade Pitágoras-Betim <br />
            </p>
          </div>
          <div class="col l4 offset-l2 s12">
            <h5 class="white-text">Visite-nos em:</h5>
            <ul>
              <li><a class="grey-text text-lighten-3" href="https://www.twitter.com/@yan_christoffer">Twitter
      						</a></li>
              <li><a class="grey-text text-lighten-3" href="https://www.facebook.com/yanccprogramador/?ref=bookmarks">Facebook
      						</a></li>
              <li><a class="grey-text text-lighten-3" href="http://play.google.com/store/apps/dev?id=5696862191102013996">Google
      								Playstore</a></li>
              <li><a class="grey-text text-lighten-3" href="https://www.linkedin.com/in/yan-christoffer-4b401a135?trk=hp-identity-name">Linkedin</a></li>

            </ul>
          </div>
        </div>
      </div>
      <div class="footer-copyright">
        <div class="container">© 2020 Yan Christoffer todos os direitos reservados.</div>
      </div>
    </footer>
  </div>
</template>

<script>
  export default {
    name: 'app',
    data() {
      return {
        DARKMODE: false,
      };
    },
    beforeMount() {
      this.DARKMODE = localStorage.getItem('DARK_MODE') ?
        localStorage.getItem('DARK_MODE') :
        false;
    },
    methods: {
      setPreference() {
        localStorage.setItem('DARK_MODE', this.DARKMODE);
      },
    },
  };
</script>
<style>
.dark{
  background-color: #333!important;
  color: #fff!important;
}
.dark a{
  color: #fff!important;
}
.dark h3{
  color: #fff!important;
}
.dark small{
  color: #ccc!important;
}
.dark li{
  color: #fff!important;
}
.dark td{
  color: #fff!important;
}
.dark .card-content{
  background-color: #333!important;
  color: #fff!important;
}
.dark-mode-switch{
  border-radius: 50px;
  width: 11%;
  position: fixed;
  bottom: 10%;
  right: 5px;
  background-color: #000;
  padding: 15px;
  color:#fff!important;
}
.dark-mode-switch .switch label .lever{
  background-color: #fff;
}
.dark .dark-mode-switch{
  background-color: #fff!important;
  color:#000!important;
}
.dark .dark-mode-switch.label{
  color:#fff!important;
}
.dark-mode-switch.label{
  color:#000!important;
}
</style>
