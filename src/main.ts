import Vue from 'vue';
import App from './App.vue';
import router from './router';
import FontAwsomeService from './service/fontAwsomeService';

Vue.component("font-awsome-icon", FontAwsomeService);

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
