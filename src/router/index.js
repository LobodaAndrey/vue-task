import Vue from 'vue'
import Router from 'vue-router';
import store from '../store';

import Login from '../views/login.vue';
import SingleUser from '../views/single-user.vue';
import Users from '../views/users.vue';

Vue.use(Router)

const routes = [
  { path: '/login', component: Login, meta: { private: false, guess: true } },
  { path: '/', component: Users, meta: { private: true } },
  { path: '/:id', component: SingleUser, meta: { private: true } },
  { path: '*', redirect: '/' }
]

const router = new Router({
  mode: 'history',
  routes
})

router.beforeEach((to, from, next) => {
  const { isAuth } = store.state.user;
  if (to.matched.some(record => record.meta.private)) {
    if (!isAuth) {
      next({
        path: '/login',
      })
    } else {
      next()
    }
  } else if (to.matched.some(record => record.meta.guess)) {
    if (isAuth) {
      next({
        path: '/',
      })
    } else {
      next()
    }
  } else {
    next()
  }
})

export default router;