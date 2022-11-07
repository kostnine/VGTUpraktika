import Vue from 'vue'
import VueRouter from 'vue-router'
import LandingPageView from '../views/LandingPageView.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'landingpage',
    component: LandingPageView
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path: '/regulations',
    name: 'regulations',

    component: () => import('../views/RegulationsPage.vue')
  },
  {
    path: '/types',
    name: 'types of smoke alarms',
    component: ()=> import('../views/TypesPage.vue')
  },
   {
    path: '/place',
    name: 'place',
    component: ()=> import('../views/AlarmPlacePage.vue')
  },
   {
    path: '/downloads',
    name: 'downloads',
    component: ()=> import('../views/DownloadsPage.vue')
  },
  {
    path: '/facts',
    name: 'facts',
    component: ()=> import('../views/FactsPage.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
