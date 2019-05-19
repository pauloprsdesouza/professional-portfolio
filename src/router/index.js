import Vue from 'vue'
import Router from 'vue-router'
import Site from '@/views/Site'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Site',
      component: Site
    }
  ]
})
