import Login from '../views/login.vue';
import SingleUser from '../views/single-user.vue';
import Users from '../views/users.vue';

const routes = [
  { path: '/login', component: Login, meta: { private: false, guess: true } },
  { path: '/', component: Users, meta: { private: true } },
  { path: '/:id', component: SingleUser, meta: { private: true } },
  { path: '*', redirect: '/' }
]

export default routes;