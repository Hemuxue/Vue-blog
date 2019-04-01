import Vue from 'vue'
import Router from 'vue-router'
import Home from 'components/home/home.vue'
import About from 'components/about/about.vue'
import Tags from 'components/tags/tags.vue'
import Classify from 'components/classify/classify.vue'
import History from 'components/history/history.vue'
Vue.use(Router)

export default new Router({
  routes: [
    {
        path:'/',
        redirect: '/home'
    },
    {
        path: '/home',
        name: 'home',
        component: Home
    },
    {
        path:'/about',
        name:'about',
        component: About
    },
    {
        path:'/tags',
        name:'tags',
        component: Tags
    },
    {
        path:'/classify',
        name:'classify',
        component: Classify
    },
    {
        path:'/history',
        name:'history',
        component: History
    }
  ]

})
