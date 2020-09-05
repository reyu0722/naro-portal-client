import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
//import axios from 'axios'

Vue.use(VueRouter)

const router = new VueRouter({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home,
      meta: {
        isPublic: true,
      },
    },
    {
      path: '/about',
      name: 'About',
      meta: {
        isPublic: true,
      },
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () =>
        import(/* webpackChunkName: "about" */ '../views/About.vue'),
    },
  ],
})

/*
router.beforeEach(async (to, from, next) => {
  try {
    await axios.get('/api/whoami')
  } catch (_) {
    if (to.meta.isPublic) {
      return next(true)
    }
    return next('/login')
  }
  next(true)
})
*/
export default router
