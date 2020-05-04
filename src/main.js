import Vue from 'vue'
import store from './store';
import App from './App.vue';
import router from './router';

import ElementUI from "element-ui";
import 'element-ui/lib/theme-chalk/index.css';

Vue.use(ElementUI);

Vue.config.productionTip = false;

store.dispatch('auth').then(() => {
  new Vue({
    store,
    router,
    render: h => h(App),
  }).$mount('#app')
});

