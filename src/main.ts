import Vue from 'vue';
import App from '@/App.vue';
import router from '@/routes/router';
import store from '@/store/store';

Vue.config.productionTip = false;

import VeeValidate from 'vee-validate';

Vue.use(VeeValidate, {
  classes: true,
  classNames: {
    touched: 'touched',
    untouched: 'untouched',
    valid: 'is-success',
    invalid: 'is-danger',
    pristine: 'pristine',
    dirty: 'dirty',
  },
});

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
