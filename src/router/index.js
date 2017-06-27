import Vue from 'vue';
import Router from 'vue-router';
import Home from '@/components/index';
import Hello from '@/components/example/Hello';
import Test from '@/components/example/Test';
import StaticResource from '@/components/example/staticResource';
import ApiResource from '@/components/example/apiResource';
import ServerResource from '@/components/example/serverResource';

Vue.use(Router);

export default new Router({
  routes: [
    /* desktop router path */
    {
      path: '/',
      name: 'Home',
      component: Home,
    },
    /* exmaple for api get and post */
    {
      path: '/exmaple/',
      name: 'Hello',
      component: Hello,
    },
    {
      path: '/exmaple/test',
      name: 'Test',
      component: Test,
    },
    {
      path: '/exmaple/apiResource',
      name: 'ApiResource',
      component: ApiResource,
    },
    {
      path: '/exmaple/staticResource',
      name: 'StaticResource',
      component: StaticResource,
    },
    {
      path: '/exmaple/serverResource',
      name: 'ServerResource',
      component: ServerResource,
    },
  ],
});
