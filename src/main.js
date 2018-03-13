

import SocialSharing from 'vue-social-sharing';
// Basic Use - Covers most scenarios
import { VueEditor } from 'vue2-editor';

import Vue from 'vue';
import App from './App';
import router from './router';

Vue.use(SocialSharing);
Vue.use(VueEditor);
Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App),
});
