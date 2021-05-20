import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('../views/Home.vue')
  },
  {
    path: '/planets',
    name: 'Planets',
    component: () => import('../views/Planets.vue')
  },
  {
    path: '/planets/:id',
    name: 'PlanetDetail',
    component: () => import('../components/Planet-detail.vue')
  },
  {
    path: '/starships',
    name: 'Starships',
    component: () => import('../views/Starships.vue')
  },
  {
    path: '/starships/:id',
    name: 'StarshipDetail',
    component: () => import('../components/Starship-detail.vue')
  },
  {
    path: '/people',
    name: 'People',
    component: () => import('../views/People.vue')
  },
  {
    path: '/people/:id',
    name: 'PeoplepDetail',
    component: () => import('../components/People-detail.vue')
  },
]

const router = new VueRouter({
  routes
})

export default router
