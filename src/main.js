// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import Vuex from 'vuex';

// load vuex i18n module
import vuexI18n from 'vuex-i18n';
import Materials from 'vue-materials';
import App from './App';
import router from './router';

Vue.config.productionTip = false;

Vue.use(Materials);
Vue.use(Vuex);

// initialize the vuex store using the vuex module. note that you can change the
//  name of the module if you wish
const store = new Vuex.Store();

// initialize the internationalization plugin on the vue instance. note that
// the store must be passed to the plugin. the plugin will then generate some
// helper functions for components (i.e. this.$i18n.set, this.$t) and on the vue
// instance (i.e. Vue.i18n.set).
Vue.use(vuexI18n.plugin, store);

const translationsEn = {
  header: 'Welcome to Your Vue.js App',
  content: 'This is some {type} content',
};

const translationsCht = {
  header: '歡迎使用 Vue.js App',
  content: '這是一些 {type} 內容',
};

// add translations directly to the application
Vue.i18n.add('en', translationsEn);
Vue.i18n.add('cht', translationsCht);

// set the start locale to use
Vue.i18n.set('cht');

/* eslint-disable no-new */
new Vue({
  store,
  el: '#app',
  router,
  template: '<App/>',
  components: { App },
});
