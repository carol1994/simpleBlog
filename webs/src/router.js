import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
      meta: {
        title: '首页'
      }
    },
    {
      path: '/signUp',
      name: 'signUp',
      component: function () {
        return import(/* webpackChunkName: "about" */ './views/SignUp.vue')
      },
      meta: {
        title: 'Sign Up'
      }
    }
  ]
})
