
import Router from 'vue-router';
import Vue from 'vue';
import Home from './pages/Home';
import About from './pages/About';

Vue.use(Router);

const routes = [
  {
    path: '/home',
    name: 'home',
    component: Home,
  },
  {
    path: '/about',
    name: 'home',
    component: About,
  },
];

const router = new Router({
  routes,
});

export default router;