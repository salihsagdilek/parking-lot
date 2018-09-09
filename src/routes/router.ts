import Vue from 'vue';
import Router from 'vue-router';
import Home from '@/views/Home.vue';

const Settings = () => import('@/views/Settings.vue');


import store from '@/store/store';

Vue.use(Router);

const router = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
      meta: {gridRequired: true},
    },
    {
      path: '/settings',
      name: 'settings',
      component: Settings,
      meta: {gridRequired: false},
    },
  ],
});

router.beforeEach((to, from, next) => {
  const grids = store.getters['parkingLot/grids'];
  if (to.matched.some((record: any) => record.meta.gridRequired)) {
    if (!grids.length) {
      next({path: '/settings'});
    } else {
      next();
    }
  } else {
    next();
  }
});


export default router;
