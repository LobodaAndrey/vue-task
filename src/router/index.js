import Vue from 'vue';
import Router from 'vue-router';
import store from '../store';
import routes from './routes';

Vue.use(Router)

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