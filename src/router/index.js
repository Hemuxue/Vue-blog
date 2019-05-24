import Vue from 'vue'
import Router from 'vue-router'
import Home from 'components/home/home.vue'
import About from 'components/about/about.vue'
import Tags from 'components/tags/tags.vue'
import Classify from 'components/classify/classify.vue'
import History from 'components/history/history.vue'
import Detail from 'components/detail/detail.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/home'
    },
    {
      path: '/home',
      name: 'home',
      component: Home
    },
    {
      path: '/detail/:id',
      name: 'detail',
      component: Detail
    },
    {
      path: '/about',
      name: 'about',
      component: About
    },
    {
      path: '/tags',
      name: 'tags',
      component: Tags
    },
    {
      path: '/classify',
      name: 'classify',
      component: Classify
    },
    {
      path: '/history',
      name: 'history',
      component: History
    },
    {
      path: '/history/:id',
      name: 'history-detail',
      component: History,
    }
  ]

})
